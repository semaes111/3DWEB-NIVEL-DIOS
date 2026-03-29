Deploy the current project to Vercel.

Steps:
1. Run `npm run build` and verify no errors
2. Check that `vercel.json` exists with SPA rewrites
3. Run `npx vercel --prod` (if Vercel CLI available)
4. Or guide user through: `npx vercel login` → `npx vercel --prod`
5. Report the deployment URL
