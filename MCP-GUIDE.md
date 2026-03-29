# 🔌 MCP Integration Guide — 3DWEB NIVEL DIOS + Claude Code

## Overview: 3 MCP Strategies

| Strategy | What it does | Best for |
|----------|-------------|----------|
| **GitHub MCP Server** | Claude Code accesses any repo in real-time (read files, create PRs, manage issues) | Reading 3DWEB patterns from GitHub while building NEW projects |
| **Project `.mcp.json`** | Auto-connects GitHub MCP when opening this project | Team sharing, auto-setup |
| **Custom Context MCP** | Indexes entire codebase as searchable vectors | Huge codebases, semantic search |

---

## Strategy 1: GitHub Official MCP Server (Recommended)

This is the most powerful approach. Claude Code gets **live access** to your 3DWEB repo on GitHub, so while working on ANY other project, it can pull patterns, components, and conventions from the template.

### Option A: Remote HTTP (simplest, no Docker needed)

```bash
# Run this in your terminal (NOT inside Claude Code)
claude mcp add-json github '{
  "type": "http",
  "url": "https://api.githubcopilot.com/mcp",
  "headers": {
    "Authorization": "Bearer YOUR_GITHUB_PAT"
  }
}'
```

Replace `YOUR_GITHUB_PAT` with your GitHub Personal Access Token.

### Option B: Local via Docker (more control)

```bash
# Run in terminal
claude mcp add github \
  -e GITHUB_PERSONAL_ACCESS_TOKEN=YOUR_GITHUB_PAT \
  -- docker run -i --rm -e GITHUB_PERSONAL_ACCESS_TOKEN \
  ghcr.io/github/github-mcp-server
```

### Option C: Local via Go binary (no Docker)

```bash
# Install the binary
go install github.com/github/github-mcp-server/cmd/github-mcp-server@latest

# Add to Claude Code
claude mcp add-json github '{
  "command": "github-mcp-server",
  "args": ["stdio"],
  "env": {
    "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_GITHUB_PAT"
  }
}'
```

### Verify connection

```bash
# Inside Claude Code
claude mcp list
# Should show: github (connected)

# Or inside Claude Code interactive mode
/mcp
# Should list github with green status
```

### How to use it

Once connected, Claude Code can do this while working on ANY project:

```
claude> "Read the Hero.tsx component from semaes111/3DWEB-NIVEL-DIOS 
        and create a similar hero for this project but with a particle 
        background instead of video"

claude> "Look at the CLAUDE.md from semaes111/3DWEB-NIVEL-DIOS and 
        follow those conventions for this new project"

claude> "Get the BentoTilt pattern from the Features.tsx in 
        semaes111/3DWEB-NIVEL-DIOS and adapt it for my product grid"

claude> "Check the tailwind.config.js from 3DWEB-NIVEL-DIOS and 
        replicate that design system here"
```

---

## Strategy 2: Project-Level `.mcp.json`

The file `.mcp.json` at the project root auto-configures MCP servers for anyone who clones the repo. When Claude Code opens a folder containing `.mcp.json`, it automatically connects to the defined servers.

The file is already included in this repo:

```json
{
  "mcpServers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp",
      "headers": {
        "Authorization": "Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}"
      }
    }
  }
}
```

**Setup**: Just set the env variable before launching Claude Code:

```bash
export GITHUB_PERSONAL_ACCESS_TOKEN="your_token_here"
cd 3DWEB-NIVEL-DIOS
claude
# GitHub MCP auto-connects!
```

---

## Strategy 3: Context MCP (Semantic Code Search)

For advanced use: index the entire 3DWEB codebase as vectors so Claude Code can do semantic search across all files.

### Using claude-context (by Zilliz)

```bash
claude mcp add claude-context \
  -e OPENAI_API_KEY=your-openai-key \
  -e MILVUS_TOKEN=your-zilliz-cloud-api-key \
  -- npx @zilliz/claude-context-mcp@latest
```

Then ask: `"Search the indexed codebase for GSAP scroll animation patterns"`

---

## The Power Move: Combining Everything

The ultimate workflow combines **CLAUDE.md** + **GitHub MCP** + **Slash Commands**:

```
┌─────────────────────────────────────────────────────┐
│  New Client Project (e.g. restaurant-web/)           │
│                                                      │
│  1. CLAUDE.md is read automatically (local context)  │
│  2. GitHub MCP pulls patterns from 3DWEB on GitHub   │
│  3. /new-page command scaffolds everything            │
│                                                      │
│  Result: Claude Code knows HOW to build (CLAUDE.md)  │
│  + can READ reference code live (GitHub MCP)          │
│  + has templated workflows (slash commands)            │
└─────────────────────────────────────────────────────┘
```

### Real workflow example:

```bash
# 1. Create new project
mkdir restaurante-koji && cd restaurante-koji
npm init -y

# 2. Set up GitHub MCP (if not already global)
export GITHUB_PERSONAL_ACCESS_TOKEN="ghp_xxx"

# 3. Launch Claude Code
claude

# 4. Inside Claude Code:
claude> "Initialize a new React + Vite + Tailwind + Three.js project. 
        Use the exact same architecture as semaes111/3DWEB-NIVEL-DIOS 
        on GitHub — read its CLAUDE.md, package.json, and src/ structure. 
        Adapt it for a luxury Japanese restaurant called Kōji.
        Brand colors: black (#0a0a0a), gold (#C9A962), cream (#F5F0E8).
        Keep all 3D effects, GSAP animations, elastic cursor, and 
        preloader from the template."
```

Claude Code will:
1. Use GitHub MCP to **read** the 3DWEB repo files in real-time
2. Clone the architecture, patterns, and design system
3. Adapt all content, colors, and branding for the restaurant
4. Produce a fully working project in minutes

---

## Scope Options

When adding MCP servers, you can control where the config is stored:

```bash
# Only for you, only in this project (default)
claude mcp add --scope local github ...

# Shared with the team via .mcp.json (committed to git)
claude mcp add --scope project github ...

# Available in ALL your projects
claude mcp add --scope user github ...
```

For the 3DWEB template as a reference, `--scope user` is ideal — you want access to it from any project.

---

## Troubleshooting

```bash
# Check MCP status
claude mcp list

# Get details on a specific server
claude mcp get github

# Remove and re-add
claude mcp remove github

# Inside Claude Code session, check status
/mcp
```

If you see "Bad credentials", regenerate your GitHub PAT with these scopes:
- `repo` (full repo access)
- `read:org` (if accessing org repos)
- `read:user` (for user info)
