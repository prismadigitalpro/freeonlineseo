# freeonlineseo.org

Independent comparison of 16 on-page SEO audit tools — scored, ranked, and reviewed.

## Structure

```
/
├── index.html          ← Homepage + comparison table
├── style.css           ← Shared styles
├── vercel.json         ← Vercel deployment config
├── generate.js         ← Script to regenerate tool pages (optional)
└── tools/
    ├── rankyak.html
    ├── semrush.html
    ├── ahrefs.html
    ├── se-ranking.html
    ├── screaming-frog.html
    ├── seoptimer.html
    ├── seobility.html
    ├── aioseo.html
    ├── seo-site-checkup.html
    ├── seomator.html
    ├── siteimprove.html
    ├── clearscope.html
    ├── surfer-seo.html
    ├── google-search-console.html
    ├── pagespeed-insights.html
    └── the-hoth.html
```

## Deploy to Vercel (Free)

### Option 1 — Vercel CLI (fastest)
```bash
npm i -g vercel
vercel
# Follow prompts, then:
vercel --prod
```

### Option 2 — Vercel Dashboard (no CLI)
1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project
3. Import your GitHub repo
4. No build settings needed (pure static HTML)
5. Click Deploy

### Connect your domain (freeonlineseo.org)
1. In Vercel dashboard → Your project → Settings → Domains
2. Add `freeonlineseo.org` and `www.freeonlineseo.org`
3. Vercel shows you DNS records to add at your domain registrar
4. Typical DNS: Add CNAME pointing to `cname.vercel-dns.com`
5. SSL is automatic and free

## Cost
- Vercel Hobby plan: **$0/month** — perfectly sufficient for this static site
- No need for OVH or any paid hosting

## Update tool content
Edit `generate.js` → update the `tools` array → run `node generate.js`
