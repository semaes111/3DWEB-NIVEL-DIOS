#!/bin/bash
# ═══════════════════════════════════════════════════════
# 🚀 3DWEB NIVEL DIOS — Deploy Script
# ═══════════════════════════════════════════════════════
# Usage:
#   chmod +x deploy.sh
#   ./deploy.sh          → Deploy to VPS (default)
#   ./deploy.sh vercel   → Deploy to Vercel
#   ./deploy.sh local    → Build only (no deploy)
# ═══════════════════════════════════════════════════════

set -e

# ── CONFIG ──
VPS_HOST="31.97.69.100"
VPS_USER="root"
VPS_PATH="/var/www/3dweb-nivel-dios"
DOMAIN="3dweb.nexthorizont.ai"  # Change this to your domain

# ── COLORS ──
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${CYAN}═══════════════════════════════════════${NC}"
echo -e "${CYAN}🔥 3DWEB NIVEL DIOS — Deploy${NC}"
echo -e "${CYAN}═══════════════════════════════════════${NC}"
echo ""

# ── STEP 1: BUILD ──
echo -e "${YELLOW}📦 Building project...${NC}"
npm run build
echo -e "${GREEN}✅ Build complete${NC}"
echo ""

MODE=${1:-vps}

case $MODE in

  vps)
    echo -e "${YELLOW}🚀 Deploying to VPS ($VPS_HOST)...${NC}"
    
    # Upload dist
    rsync -avz --delete dist/ ${VPS_USER}@${VPS_HOST}:${VPS_PATH}/ 
    
    # Configure nginx (if not already)
    ssh ${VPS_USER}@${VPS_HOST} "
      if [ ! -f /etc/nginx/sites-available/3dweb ]; then
        cat > /etc/nginx/sites-available/3dweb << 'NGINXEOF'
server {
    listen 80;
    server_name ${DOMAIN};
    root ${VPS_PATH};
    index index.html;

    # SPA routing
    location / {
        try_files \\\$uri \\\$uri/ /index.html;
    }

    # Cache static assets
    location ~* \\.(js|css|png|jpg|jpeg|gif|ico|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control \"public, immutable\";
    }

    # Security headers
    add_header X-Frame-Options \"SAMEORIGIN\" always;
    add_header X-Content-Type-Options \"nosniff\" always;
    add_header X-XSS-Protection \"1; mode=block\" always;
}
NGINXEOF
        ln -sf /etc/nginx/sites-available/3dweb /etc/nginx/sites-enabled/
        nginx -t && systemctl reload nginx
        echo 'Nginx configured'
      else
        echo 'Nginx already configured'
      fi
    "
    
    echo -e "${GREEN}✅ Deployed to http://${DOMAIN}${NC}"
    ;;

  vercel)
    echo -e "${YELLOW}🚀 Deploying to Vercel...${NC}"
    npx vercel --prod
    echo -e "${GREEN}✅ Deployed to Vercel${NC}"
    ;;

  local)
    echo -e "${GREEN}✅ Build ready in dist/ folder${NC}"
    echo -e "   Run: npx vite preview"
    ;;

  *)
    echo "Usage: ./deploy.sh [vps|vercel|local]"
    exit 1
    ;;
esac

echo ""
echo -e "${CYAN}═══════════════════════════════════════${NC}"
echo -e "${GREEN}🎉 Done!${NC}"
echo -e "${CYAN}═══════════════════════════════════════${NC}"
