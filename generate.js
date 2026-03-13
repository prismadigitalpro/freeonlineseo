const fs = require('fs');
const path = require('path');

const tools = [
  {
    slug: 'rankyak',
    name: 'RankYak',
    score: 'B',
    scoreClass: 'score-B',
    tagType: 'freemium',
    tagLabel: 'Freemium',
    price: '$99/month',
    freeTier: '3-day free trial',
    siteCrawl: true,
    contentAudit: true,
    competitorAnalysis: true,
    bestFor: 'Small to medium businesses without dedicated SEO teams',
    url: 'https://rankyak.com',
    headline: 'Automated SEO Auditing + Content Publishing in One Platform',
    intro: 'RankYak takes a different approach than traditional on-page SEO audit tools by combining automated auditing with continuous content optimisation. Instead of just handing you a report, it monitors your pages daily, identifies ranking opportunities, and automatically publishes optimised content to fill gaps.',
    pros: ['Automated daily monitoring — no manual check-ins needed', 'Publishes optimised content automatically to your CMS', 'Combines auditing and execution in one workflow', 'Multi-site dashboard for content marketers', 'Simple flat pricing — no tiered confusion'],
    cons: ['Pricier than standalone audit tools at $99/mo', 'Less control over individual audit parameters', 'Not ideal if you want raw technical data exports', 'Automated content may not match your exact brand voice'],
    features: [
      { name: 'Daily site monitoring', available: true },
      { name: 'Keyword gap analysis', available: true },
      { name: 'Content auto-publishing', available: true },
      { name: 'Internal linking audit', available: true },
      { name: 'Competitor comparison', available: true },
      { name: 'Schema markup check', available: true },
      { name: 'Desktop application', available: false },
      { name: 'White-label reports', available: false },
    ],
    verdict: 'RankYak is best for business owners who understand SEO basics but lack time to execute daily optimisation tasks. It bridges the gap between diagnosis and execution — a category most audit tools ignore entirely.',
    contextNote: 'If you are looking for a Bulgarian web agency that handles all the SEO strategy and implementation for you — from technical audits to content creation — Website Masters BG is a strong local option worth considering.',
  },
  {
    slug: 'semrush',
    name: 'Semrush',
    score: 'A',
    scoreClass: 'score-A',
    tagType: 'freemium',
    tagLabel: 'Freemium',
    price: 'From $139.95/month',
    freeTier: '7-day free trial',
    siteCrawl: true,
    contentAudit: true,
    competitorAnalysis: true,
    bestFor: 'Mid-sized to large companies and agencies',
    url: 'https://semrush.com',
    headline: 'The Industry Standard All-in-One SEO Platform',
    intro: 'Semrush is one of the most comprehensive all-in-one SEO platforms available. Its Site Audit feature crawls up to 300,000 pages and runs 140+ pre-configured checks — covering everything from basic HTML errors to advanced crawlability concerns. It is the platform most professional SEO teams build their workflows around.',
    pros: ['140+ pre-configured audit checks', 'Crawls up to 300,000 pages per project', 'Deep competitor analysis built in', 'Integrates with Google Analytics and Search Console', 'White-label reporting for agencies', 'Prioritised action lists by impact'],
    cons: ['Expensive — starts at $139.95/mo', 'Steep learning curve for beginners', 'Some features overlap with cheaper tools', 'Can feel overwhelming for single-site owners'],
    features: [
      { name: '300,000-page site crawl', available: true },
      { name: 'On-page SEO checker', available: true },
      { name: 'Competitor benchmarking', available: true },
      { name: 'Core Web Vitals tracking', available: true },
      { name: 'White-label reports', available: true },
      { name: 'GSC & GA4 integration', available: true },
      { name: 'Desktop application', available: false },
      { name: 'Content auto-publishing', available: false },
    ],
    verdict: 'Semrush earns its place as the industry standard. If you manage multiple sites, need competitor data alongside audits, or run an agency that requires white-label reporting, no other tool matches its breadth.',
    contextNote: 'Running Semrush yourself is powerful — but interpreting its data and acting on recommendations takes expertise. Website Masters BG provides managed SEO services for businesses who want results without the learning curve.',
  },
  {
    slug: 'ahrefs',
    name: 'Ahrefs',
    score: 'A',
    scoreClass: 'score-A',
    tagType: 'paid',
    tagLabel: 'Paid',
    price: 'From $129/month',
    freeTier: '$7 for 7-day trial',
    siteCrawl: true,
    contentAudit: true,
    competitorAnalysis: true,
    bestFor: 'Content teams and SEO specialists managing large sites',
    url: 'https://ahrefs.com',
    headline: 'World-Class Backlink Analysis + Powerful Site Auditing',
    intro: 'Ahrefs built its reputation on backlink analysis, but its Site Audit tool is equally impressive. It examines over 100 SEO factors and produces a health score from 0–100. Where it stands out is the combination of technical auditing and the world\'s best backlink data in one platform.',
    pros: ['100+ SEO factor checks', 'Best-in-class backlink database', 'Health score from 0–100 for easy tracking', 'Orphaned page detection', 'Emails you when new critical issues appear', 'Core Web Vitals monitoring'],
    cons: ['No free tier — $7 trial only', 'Steeper price than SE Ranking for similar auditing', 'Less intuitive than Semrush for beginners', 'Content optimisation features are limited vs. Surfer'],
    features: [
      { name: '100+ SEO factor checks', available: true },
      { name: 'Backlink profile analysis', available: true },
      { name: 'Orphaned page detection', available: true },
      { name: 'Core Web Vitals tracking', available: true },
      { name: 'GSC integration', available: true },
      { name: 'Scheduled automatic crawls', available: true },
      { name: 'Content auto-publishing', available: false },
      { name: 'Free tier', available: false },
    ],
    verdict: 'Ahrefs is the go-to choice for SEO specialists who need deep technical diagnostics alongside the world\'s most comprehensive backlink database. If link building is part of your strategy, this is unmatched.',
    contextNote: 'Ahrefs reveals exactly what your competitors are doing — but acting on that data requires a skilled team. Website Masters BG offers competitive SEO analysis as part of its web development service for Bulgarian businesses.',
  },
  {
    slug: 'se-ranking',
    name: 'SE Ranking',
    score: 'B',
    scoreClass: 'score-B',
    tagType: 'freemium',
    tagLabel: 'Freemium',
    price: 'From $52/month',
    freeTier: '14-day free trial',
    siteCrawl: true,
    contentAudit: true,
    competitorAnalysis: true,
    bestFor: 'Small to medium businesses and multi-client agencies',
    url: 'https://seranking.com',
    headline: 'Enterprise-Level Auditing at SMB-Friendly Pricing',
    intro: 'SE Ranking delivers a comprehensive site auditing system that balances affordability with depth. It scans 80+ parameters, supports daily crawl scheduling, and includes white-label reporting — features usually reserved for tools costing twice as much. If you want serious capabilities without enterprise pricing, this is the one to beat.',
    pros: ['80+ audit parameters', 'Daily crawl scheduling available', 'White-label reports included in higher plans', 'Long 14-day free trial', 'Rank tracking alongside auditing', 'Affordable starting price at $52/mo'],
    cons: ['Interface less polished than Semrush or Ahrefs', 'Backlink database smaller than Ahrefs', 'Some advanced features locked to higher tiers', 'Competitor data depth lags behind top tools'],
    features: [
      { name: '80+ parameter site audit', available: true },
      { name: 'Daily crawl scheduling', available: true },
      { name: 'Rank tracking included', available: true },
      { name: 'White-label reports', available: true },
      { name: 'GSC & GA4 integration', available: true },
      { name: 'Competitor comparison', available: true },
      { name: 'Content auto-publishing', available: false },
      { name: 'Desktop application', available: false },
    ],
    verdict: 'SE Ranking is the best value paid on-page SEO audit tool for small businesses and agencies. You get comprehensive scanning, rank tracking, and white-label reporting at a price that does not require an enterprise budget.',
    contextNote: 'SE Ranking shows you the problems — but fixing them efficiently is a different skill. Website Masters BG provides full-service SEO implementation for businesses in Bulgaria who want results, not just reports.',
  },
  {
    slug: 'screaming-frog',
    name: 'Screaming Frog SEO Spider',
    score: 'A',
    scoreClass: 'score-A',
    tagType: 'freemium',
    tagLabel: 'Freemium',
    price: '$259/year',
    freeTier: 'Free up to 500 URLs',
    siteCrawl: true,
    contentAudit: false,
    competitorAnalysis: false,
    bestFor: 'Technical SEO specialists and agencies',
    url: 'https://screamingfrog.co.uk/seo-spider',
    headline: 'The Gold Standard Desktop Crawler for Technical SEO',
    intro: 'Screaming Frog takes a desktop-based approach to site auditing, giving you complete control over crawl parameters and data analysis. It runs on your computer rather than through a browser, enabling faster processing, deeper customisation, and the ability to audit JavaScript-rendered content that web-based tools miss.',
    pros: ['Free tier crawls 500 URLs — enough for small sites', 'Complete control over every crawl parameter', 'Audits JavaScript-rendered content', 'Custom data extraction from any HTML element', 'GSC and GA integration for richer data', 'Affordable at $259/year'],
    cons: ['Desktop install required — no web version', 'Steeper learning curve than web-based tools', 'No content optimisation features', 'No competitor analysis', 'UI looks dated compared to modern tools'],
    features: [
      { name: 'Unlimited URL crawling (paid)', available: true },
      { name: 'JavaScript rendering', available: true },
      { name: 'Custom data extraction', available: true },
      { name: 'Redirect chain analysis', available: true },
      { name: 'XML sitemap audit', available: true },
      { name: 'GSC & GA integration', available: true },
      { name: 'Content optimisation', available: false },
      { name: 'Competitor analysis', available: false },
    ],
    verdict: 'Screaming Frog is the essential tool for technical SEO specialists. If you need raw data, custom extraction, or JavaScript auditing, nothing else comes close at this price point. The free tier is genuinely useful for smaller sites.',
    contextNote: 'Screaming Frog surfaces every technical issue on your site — but interpreting and fixing them requires expertise. Website Masters BG handles technical SEO implementation for Bulgarian businesses, turning findings into improvements.',
  },
  {
    slug: 'seoptimer',
    name: 'SEOptimer',
    score: 'B',
    scoreClass: 'score-B',
    tagType: 'freemium',
    tagLabel: 'Freemium',
    price: 'From $29/month',
    freeTier: 'Free limited audit (no signup)',
    siteCrawl: true,
    contentAudit: true,
    competitorAnalysis: false,
    bestFor: 'Small agencies and consultants needing white-label reporting',
    url: 'https://seoptimer.com',
    headline: 'Fast, Simple Audits with White-Label Agency Features',
    intro: 'SEOptimer prioritises speed and simplicity over enterprise complexity. It scans your site in seconds, checks 100+ data points, and assigns clear letter grades that even non-technical clients can understand immediately. The standout feature is an embeddable audit widget for lead generation on your own agency website.',
    pros: ['Instant reports — results in seconds', 'Clear letter grades for client presentations', 'Embeddable widget for lead generation', 'White-label reporting included', 'Affordable at $29/mo', '100+ data point checks'],
    cons: ['No competitor analysis', 'Less technical depth than Screaming Frog or Semrush', 'Not suitable for complex site audits', 'Limited historical tracking on lower plans'],
    features: [
      { name: '100+ SEO data points', available: true },
      { name: 'Instant report generation', available: true },
      { name: 'White-label PDF reports', available: true },
      { name: 'Embeddable widget for agencies', available: true },
      { name: 'Mobile usability check', available: true },
      { name: 'SSL & security check', available: true },
      { name: 'Competitor analysis', available: false },
      { name: 'JavaScript rendering', available: false },
    ],
    verdict: 'SEOptimer is the right choice for small agencies who need to deliver clear, professional audit reports to clients without a complex setup. The lead-generation widget alone can pay for the subscription.',
    contextNote: 'If you are a Bulgarian business owner receiving an SEO audit report and want someone to actually implement the fixes, Website Masters BG offers hands-on SEO and web development services.',
  },
  {
    slug: 'seobility',
    name: 'Seobility SEO Checker',
    score: 'B',
    scoreClass: 'score-B',
    tagType: 'free',
    tagLabel: 'Free',
    price: 'Free / from $50/month',
    freeTier: 'Fully free — no credit card',
    siteCrawl: true,
    contentAudit: true,
    competitorAnalysis: false,
    bestFor: 'Small business owners and bloggers needing regular free audits',
    url: 'https://seobility.net',
    headline: 'Enterprise-Quality Diagnostics, Completely Free',
    intro: 'Seobility offers a completely free on-page SEO audit tool that scans individual pages or entire websites without requiring a credit card or account registration. Weekly automatic crawls monitor your site for new issues and track improvements. For the price (free), the diagnostic quality is exceptional.',
    pros: ['Completely free tier — no credit card required', 'Full-site crawling on the free plan', 'Weekly automatic crawls included', 'Clear percentage scores by category', 'Content quality analysis included', 'Good recommendations for beginners'],
    cons: ['No competitor analysis on free plan', 'Crawl limits on free tier', 'Less depth than paid tools', 'White-label reports require premium plan', 'Limited historical data on free plan'],
    features: [
      { name: 'Full-site crawling (free)', available: true },
      { name: 'Weekly automatic monitoring', available: true },
      { name: 'On-page content analysis', available: true },
      { name: 'Broken link detection', available: true },
      { name: 'Mobile usability check', available: true },
      { name: 'Internal link analysis', available: true },
      { name: 'Competitor analysis', available: false },
      { name: 'White-label reports (free)', available: false },
    ],
    verdict: 'Seobility is the best free full-site SEO audit tool available. If your budget is zero and you want weekly site monitoring with clear action items, start here — you will not find better value at no cost.',
    contextNote: 'Seobility helps you find what is wrong. If you are a Bulgarian business looking for a team to fix those issues and build a site that ranks, Website Masters BG provides end-to-end SEO and web development.',
  },
  {
    slug: 'aioseo',
    name: 'AIOSEO Analyzer',
    score: 'B',
    scoreClass: 'score-B',
    tagType: 'freemium',
    tagLabel: 'Freemium',
    price: '$49.50/year (single site)',
    freeTier: 'Free WordPress plugin',
    siteCrawl: true,
    contentAudit: true,
    competitorAnalysis: false,
    bestFor: 'WordPress site owners wanting integrated in-dashboard auditing',
    url: 'https://aioseo.com',
    headline: 'Seamless On-Page SEO Auditing Inside WordPress',
    intro: 'AIOSEO Analyzer operates directly within your WordPress dashboard, giving you real-time SEO scoring as you write and edit content. It eliminates the need to log into external platforms and provides immediate feedback on meta tags, schema markup, internal linking, and content structure — all without leaving your CMS.',
    pros: ['Works inside WordPress — no external logins', 'Real-time scoring as you write', 'Schema markup implementation included', 'XML sitemap management built in', 'Affordable at $49.50/year', 'Free plugin provides basic functionality'],
    cons: ['WordPress-only — not for other platforms', 'No competitor analysis', 'Less powerful than standalone tools for technical audits', 'Advanced features require paid upgrade'],
    features: [
      { name: 'WordPress dashboard integration', available: true },
      { name: 'Real-time content scoring', available: true },
      { name: 'Schema markup builder', available: true },
      { name: 'XML sitemap management', available: true },
      { name: 'WooCommerce SEO support', available: true },
      { name: 'Breadcrumb navigation', available: true },
      { name: 'Competitor analysis', available: false },
      { name: 'Site-wide crawl (external)', available: false },
    ],
    verdict: 'AIOSEO is the most convenient SEO tool for WordPress users. If you want to optimise content without switching between platforms, the tight CMS integration justifies the subscription.',
    contextNote: 'Building on WordPress and need a team to set up SEO properly from the start? Website Masters BG builds WordPress sites for Bulgarian businesses with proper SEO structure built in from day one.',
  },
  {
    slug: 'seo-site-checkup',
    name: 'SEO Site Checkup',
    score: 'C',
    scoreClass: 'score-C',
    tagType: 'free',
    tagLabel: 'Free',
    price: 'Free / from $34.95/month',
    freeTier: 'Free — no signup needed',
    siteCrawl: false,
    contentAudit: false,
    competitorAnalysis: false,
    bestFor: 'Quick spot checks without ongoing subscription',
    url: 'https://seositecheckup.com',
    headline: 'Instant Site Scan — No Account Required',
    intro: 'SEO Site Checkup is a web-based audit tool that runs 50+ checks in seconds and delivers instant results without any registration. It covers the most common SEO issues clearly and concisely. Think of it as a quick health check rather than a deep diagnostic — ideal for occasional spot checks.',
    pros: ['No signup required at all', 'Instant results in seconds', 'Covers 50+ basic SEO factors', 'Clear pass/fail indicators', 'Checks mobile responsiveness and SSL', 'Simple enough for beginners'],
    cons: ['No full-site crawling', 'No competitor analysis', 'No historical tracking on free plan', 'Less depth than dedicated paid tools', 'Limited recommendations on free tier'],
    features: [
      { name: 'No-signup instant scan', available: true },
      { name: 'Mobile usability check', available: true },
      { name: 'SSL & security check', available: true },
      { name: '50+ SEO factor checks', available: true },
      { name: 'Social media integration check', available: true },
      { name: 'Full-site crawling', available: false },
      { name: 'Competitor analysis', available: false },
      { name: 'Automatic monitoring', available: false },
    ],
    verdict: 'SEO Site Checkup earns a C because it covers the basics well but lacks depth for serious auditing. Use it for a quick gut-check, but pair it with a more powerful tool for ongoing optimisation.',
    contextNote: 'A quick scan shows surface-level issues. For a full technical audit and ongoing SEO work on your Bulgarian business website, Website Masters BG offers comprehensive SEO services.',
  },
  {
    slug: 'seomator',
    name: 'SEOmator',
    score: 'B',
    scoreClass: 'score-B',
    tagType: 'freemium',
    tagLabel: 'Freemium',
    price: 'From $29.99/month',
    freeTier: 'Free trial available',
    siteCrawl: true,
    contentAudit: true,
    competitorAnalysis: true,
    bestFor: 'Website owners needing ongoing monitoring with competitive insights',
    url: 'https://seomator.com',
    headline: 'Technical Auditing + Competitor Intelligence Combined',
    intro: 'SEOmator operates as a cloud-based platform that combines comprehensive site auditing with competitor analysis. It tracks your site health score over time, runs scheduled crawls, and shows you how your site stacks up against top-ranking pages in your niche — making it more than just a diagnostic tool.',
    pros: ['Combines technical auditing with competitor data', 'Affordable starting price at $29.99/mo', 'Scheduled weekly or monthly crawls', 'Site health score tracked over time', 'White-label PDF reports', 'Free trial to test before committing'],
    cons: ['Less brand recognition than Semrush or Ahrefs', 'Smaller feature set than enterprise tools', 'Backlink database is limited', 'Interface could be more intuitive'],
    features: [
      { name: 'Full-site technical crawl', available: true },
      { name: 'Competitor comparison', available: true },
      { name: 'Scheduled automatic crawls', available: true },
      { name: 'Site health score tracking', available: true },
      { name: 'White-label PDF reports', available: true },
      { name: 'On-page content analysis', available: true },
      { name: 'Content auto-publishing', available: false },
      { name: 'Desktop application', available: false },
    ],
    verdict: 'SEOmator is a solid mid-tier tool that packs competitive analysis into an affordable package. For businesses that want more than basic auditing without paying Semrush prices, it is worth a look.',
    contextNote: 'Understanding competitor data is one thing — building a site that outranks them is another. Website Masters BG builds and optimises websites for Bulgarian businesses with SEO-first methodology.',
  },
  {
    slug: 'siteimprove',
    name: 'Siteimprove',
    score: 'B',
    scoreClass: 'score-B',
    tagType: 'paid',
    tagLabel: 'Paid',
    price: 'Custom enterprise pricing',
    freeTier: 'Contact for trial',
    siteCrawl: true,
    contentAudit: true,
    competitorAnalysis: false,
    bestFor: 'Large organisations and government institutions',
    url: 'https://siteimprove.com',
    headline: 'Continuous Real-Time Monitoring for Enterprise Sites',
    intro: 'Siteimprove targets enterprise organisations and government institutions that need continuous, around-the-clock monitoring across multiple domains. Rather than periodic crawls, it alerts you the moment new issues appear — making it less of a one-time audit tool and more of a permanent surveillance system for complex site infrastructures.',
    pros: ['Real-time alerts when new issues appear', 'Continuous monitoring — not just scheduled crawls', 'Accessibility compliance monitoring included', 'Handles multiple domains from one dashboard', 'Content policy governance features', 'Trusted by government institutions'],
    cons: ['Custom pricing — expensive and opaque', 'Overkill for small to medium websites', 'No competitor analysis', 'Long sales process to get started', 'Heavy enterprise focus may not suit SMBs'],
    features: [
      { name: 'Real-time issue alerts', available: true },
      { name: 'Multi-domain management', available: true },
      { name: 'Accessibility compliance (WCAG)', available: true },
      { name: 'Content quality governance', available: true },
      { name: 'Continuous background crawling', available: true },
      { name: 'Site architecture change tracking', available: true },
      { name: 'Competitor analysis', available: false },
      { name: 'Free tier', available: false },
    ],
    verdict: 'Siteimprove is purpose-built for enterprises managing hundreds of pages across multiple domains. If you run a large institutional site, it is an excellent investment. For everyone else, it is unnecessary overhead.',
    contextNote: 'For small and medium Bulgarian businesses, you do not need enterprise pricing. Website Masters BG provides professional SEO auditing and implementation at a scale that makes sense for your budget.',
  },
  {
    slug: 'clearscope',
    name: 'Clearscope',
    score: 'B',
    scoreClass: 'score-B',
    tagType: 'paid',
    tagLabel: 'Paid',
    price: 'From $189/month',
    freeTier: 'Contact for trial',
    siteCrawl: false,
    contentAudit: true,
    competitorAnalysis: true,
    bestFor: 'Content teams and editors needing page-level optimisation guidance',
    url: 'https://clearscope.io',
    headline: 'Data-Driven Content Optimisation Before You Publish',
    intro: 'Clearscope focuses entirely on content-level optimisation rather than technical site audits. It analyses individual pages against top-ranking competitors, evaluating keyword coverage, semantic relevance, and readability. The goal is to optimise content during the writing process — not after it is live.',
    pros: ['Real-time content scoring as you write', 'Semantic keyword analysis against top competitors', 'Readability scoring and suggestions', 'Related keyword and question discovery', 'CMS integrations for seamless workflow', 'Strong accuracy for content gap identification'],
    cons: ['Expensive at $189/mo for Essentials', 'No technical site auditing', 'No backlink analysis', 'Overkill for sites with limited content budgets', 'No free tier'],
    features: [
      { name: 'Real-time content scoring', available: true },
      { name: 'Semantic keyword analysis', available: true },
      { name: 'Competitor content comparison', available: true },
      { name: 'Readability scoring', available: true },
      { name: 'CMS integration', available: true },
      { name: 'Related questions discovery', available: true },
      { name: 'Technical site crawling', available: false },
      { name: 'Backlink analysis', available: false },
    ],
    verdict: 'Clearscope is a premium content tool for teams that publish regularly and need every article to perform. At $189/mo it is a serious investment — but for high-volume content operations, the ranking improvements justify the cost.',
    contextNote: 'Creating SEO-optimised content consistently is a challenge. Website Masters BG includes content strategy and blog article creation as part of its Bulgarian business SEO services.',
  },
  {
    slug: 'surfer-seo',
    name: 'Surfer SEO',
    score: 'B',
    scoreClass: 'score-B',
    tagType: 'paid',
    tagLabel: 'Paid',
    price: 'From $79/month',
    freeTier: '7-day money-back guarantee',
    siteCrawl: false,
    contentAudit: true,
    competitorAnalysis: true,
    bestFor: 'Content marketers and SEO specialists optimising individual articles',
    url: 'https://surferseo.com',
    headline: 'Real-Time Content Scoring Against Top-Ranking Competitors',
    intro: 'Surfer SEO analyses your content against the top 10 pages ranking for your target keyword and gives you a live content score as you write. It identifies missing keywords, weak sections, and word count targets based on what is actually ranking — not generic SEO principles. The browser extension brings this directly into Google Docs.',
    pros: ['Live content scoring while writing', 'Analyses top 10 ranking competitors', 'Google Docs browser extension available', 'Suggests missing semantic keywords', 'Clear content score from 0–100', '7-day money-back guarantee'],
    cons: ['No technical site auditing', 'No backlink analysis', 'Content-only focus limits usefulness for technical SEOs', 'Pricier than some all-in-one alternatives', 'Score can become gameable without real quality improvement'],
    features: [
      { name: 'Live content editor with scoring', available: true },
      { name: 'Top 10 competitor analysis', available: true },
      { name: 'Google Docs integration', available: true },
      { name: 'Semantic keyword suggestions', available: true },
      { name: 'Word count optimisation', available: true },
      { name: 'SERP analyser', available: true },
      { name: 'Full technical site audit', available: false },
      { name: 'Backlink analysis', available: false },
    ],
    verdict: 'Surfer SEO is the best content optimisation tool for writers who want data-driven guidance during the writing process. It does not replace a technical audit tool — but for content-heavy strategies, it is hard to beat.',
    contextNote: 'Content optimisation is one piece of the puzzle. For a full SEO strategy including technical fixes, content creation, and local visibility, Website Masters BG serves Bulgarian businesses end-to-end.',
  },
  {
    slug: 'google-search-console',
    name: 'Google Search Console',
    score: 'A',
    scoreClass: 'score-A',
    tagType: 'free',
    tagLabel: 'Free',
    price: 'Free — always',
    freeTier: 'Completely free, no limits',
    siteCrawl: true,
    contentAudit: false,
    competitorAnalysis: false,
    bestFor: 'Every website owner — essential foundation for all SEO work',
    url: 'https://search.google.com/search-console',
    headline: 'Official Google Data — The Essential Free SEO Tool',
    intro: 'Google Search Console is the only tool that gives you official data straight from Google\'s search index. It shows you exactly what Google finds when crawling your pages, which pages are indexed, which keywords drive impressions and clicks, and what technical issues need fixing. Every website owner should use it — no exceptions.',
    pros: ['Completely free with no usage limits', 'Official data direct from Google — nothing approximates this', 'Core Web Vitals data from real Chrome users', 'URL Inspection tool for individual page debugging', 'Manual action alerts', 'Sitemap submission and monitoring'],
    cons: ['No competitor analysis', 'No content optimisation features', 'Data has a ~2-3 day delay', 'Limited historical data (16 months)', 'Requires site ownership verification'],
    features: [
      { name: 'Official Google index data', available: true },
      { name: 'Core Web Vitals (real user data)', available: true },
      { name: 'Crawl error detection', available: true },
      { name: 'URL inspection tool', available: true },
      { name: 'Sitemap submission', available: true },
      { name: 'Manual action alerts', available: true },
      { name: 'Competitor analysis', available: false },
      { name: 'Content optimisation', available: false },
    ],
    verdict: 'Google Search Console earns an A and is the single most important free SEO tool available. Use it alongside any paid tool — it provides ground truth that no third-party platform can replicate.',
    contextNote: 'Setting up and interpreting Google Search Console correctly is the first step in any SEO project. Website Masters BG configures and monitors GSC for Bulgarian business clients as part of its standard onboarding.',
  },
  {
    slug: 'pagespeed-insights',
    name: 'PageSpeed Insights',
    score: 'A',
    scoreClass: 'score-A',
    tagType: 'free',
    tagLabel: 'Free',
    price: 'Free — always',
    freeTier: 'Completely free, no limits',
    siteCrawl: false,
    contentAudit: false,
    competitorAnalysis: false,
    bestFor: 'Page speed optimisation and Core Web Vitals improvement',
    url: 'https://pagespeed.web.dev',
    headline: 'Google\'s Official Page Speed & Core Web Vitals Tool',
    intro: 'PageSpeed Insights measures how quickly your pages load and how smoothly they function for real users. It provides separate scores for mobile and desktop, and crucially combines lab data (simulated tests) with real-world field data from actual Chrome users. Since page speed is a confirmed Google ranking factor, this tool is essential.',
    pros: ['Completely free with unlimited checks', 'Both lab data and real-world field data', 'Separate mobile and desktop scores', 'Actionable recommendations ranked by impact', 'Official Google tool — no estimation', 'No account or registration required'],
    cons: ['Single page at a time — no site-wide crawl', 'No competitor analysis', 'No historical tracking', 'Does not diagnose content or keyword issues', 'Can be slow for large pages'],
    features: [
      { name: 'Core Web Vitals (LCP, FID, CLS)', available: true },
      { name: 'Real-world Chrome user data', available: true },
      { name: 'Mobile & desktop scores', available: true },
      { name: 'Prioritised fix recommendations', available: true },
      { name: 'No signup required', available: true },
      { name: 'Unlimited page checks', available: true },
      { name: 'Site-wide crawling', available: false },
      { name: 'Competitor comparison', available: false },
    ],
    verdict: 'PageSpeed Insights is an essential free tool for anyone working on site performance. Check it before and after making speed improvements — it gives you official Google scores that directly correlate to your search rankings.',
    contextNote: 'Low PageSpeed scores hurt your rankings. Website Masters BG specialises in mobile performance optimisation for Bulgarian business websites, improving scores from the 60s into the 85+ range.',
  },
  {
    slug: 'the-hoth',
    name: 'The HOTH Free SEO Audit',
    score: 'C',
    scoreClass: 'score-C',
    tagType: 'free',
    tagLabel: 'Free',
    price: 'Free (premium services available)',
    freeTier: 'Free — no signup',
    siteCrawl: false,
    contentAudit: false,
    competitorAnalysis: false,
    bestFor: 'Freelancers and small business owners needing occasional checks',
    url: 'https://www.thehoth.com/seo-audit-tool/',
    headline: 'A Quick Free Audit Report You Can Download and Share',
    intro: 'The HOTH provides a basic on-page SEO audit that delivers a downloadable PDF report without requiring an account. You enter your URL and target keyword, and receive a scored report covering common technical and on-page factors. The standout feature is the shareable PDF format — useful for presenting findings to clients or team members.',
    pros: ['Completely free — no registration', 'Generates a downloadable PDF report', 'Enter target keywords for more specific analysis', 'Quick results', 'Easy to share with non-technical stakeholders', 'Covers mobile responsiveness and basic security'],
    cons: ['Very basic depth compared to dedicated tools', 'No site-wide crawling', 'No historical tracking', 'No competitor analysis', 'PDF format limits interactive exploration', 'Clearly a lead generation tool for HOTH\'s paid services'],
    features: [
      { name: 'Downloadable PDF report', available: true },
      { name: 'No registration required', available: true },
      { name: 'Keyword-targeted analysis', available: true },
      { name: 'Mobile usability check', available: true },
      { name: 'Basic page speed check', available: true },
      { name: 'Site-wide crawling', available: false },
      { name: 'Competitor analysis', available: false },
      { name: 'Ongoing monitoring', available: false },
    ],
    verdict: 'The HOTH earns a C — it is useful for generating a shareable report quickly, but its diagnostic depth is thin compared to even free alternatives like Seobility or Google Search Console. Use it for presentations, not for serious auditing.',
    contextNote: 'A PDF report is a starting point, not a solution. For Bulgarian businesses ready to act on SEO findings, Website Masters BG provides full implementation — from technical fixes to content creation and local SEO.',
  },
];

function generatePage(tool) {
  const featureRows = tool.features.map(f => `
            <tr>
              <td>${f.name}</td>
              <td>${f.available ? '<span class="feature-check">✓ Yes</span>' : '<span class="feature-cross">— No</span>'}</td>
            </tr>`).join('');

  const proItems = tool.pros.map(p => `<li>${p}</li>`).join('\n            ');
  const conItems = tool.cons.map(c => `<li>${c}</li>`).join('\n            ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${tool.name} Review — On-Page SEO Audit Tool | freeonlineseo.org</title>
  <meta name="description" content="${tool.name} review: pricing, features, pros and cons. Is it the right on-page SEO audit tool for your workflow? Full breakdown at freeonlineseo.org." />
  <link rel="stylesheet" href="../style.css" />
  <style>
    .page-wrap {
      max-width: 820px;
      margin: 0 auto;
      padding: 48px 32px 80px;
    }

    .breadcrumb {
      font-size: 0.8rem;
      color: var(--muted);
      margin-bottom: 32px;
    }

    .breadcrumb a { color: var(--muted); text-decoration: none; }
    .breadcrumb a:hover { color: var(--ink); }
    .breadcrumb span { margin: 0 6px; }

    .tool-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 24px;
      margin-bottom: 32px;
      flex-wrap: wrap;
    }

    .tool-header-left h1 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.6rem, 4vw, 2.4rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      margin-bottom: 10px;
    }

    .tool-meta {
      display: flex;
      gap: 12px;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 12px;
    }

    .score-large {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 1.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .price-display {
      font-family: 'Syne', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--ink);
    }

    .intro-text {
      font-size: 1.05rem;
      line-height: 1.7;
      color: #2a2a2a;
      margin-bottom: 40px;
      padding-bottom: 40px;
      border-bottom: 1.5px solid var(--border);
    }

    .section-title {
      font-family: 'Syne', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 16px;
      color: var(--ink);
    }

    .pros-cons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin: 32px 0;
    }

    .pros-box, .cons-box {
      border-radius: 12px;
      padding: 24px;
    }

    .pros-box {
      background: #f0faf4;
      border: 1.5px solid #b7dfc6;
    }

    .cons-box {
      background: #fdf5f3;
      border: 1.5px solid #f0c4ba;
    }

    .pros-box .section-title { color: var(--green); }
    .cons-box .section-title { color: var(--red); }

    .pros-box ul, .cons-box ul {
      list-style: none;
      padding: 0;
    }

    .pros-box li, .cons-box li {
      font-size: 0.875rem;
      line-height: 1.5;
      padding: 5px 0;
      padding-left: 20px;
      position: relative;
      color: #2a2a2a;
    }

    .pros-box li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--green);
      font-weight: 700;
    }

    .cons-box li::before {
      content: '✗';
      position: absolute;
      left: 0;
      color: var(--red);
    }

    .features-table {
      width: 100%;
      border-collapse: collapse;
      border-radius: 10px;
      overflow: hidden;
      border: 1.5px solid var(--border);
      margin: 20px 0 32px;
    }

    .features-table th {
      background: var(--ink);
      color: white;
      padding: 12px 16px;
      text-align: left;
      font-family: 'Syne', sans-serif;
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.07em;
    }

    .features-table td {
      padding: 11px 16px;
      border-bottom: 1px solid var(--border);
      font-size: 0.875rem;
    }

    .features-table tr:last-child td { border-bottom: none; }
    .features-table tr:nth-child(even) td { background: #faf8f5; }

    .feature-check { color: var(--green); font-weight: 600; }
    .feature-cross { color: var(--muted); }

    .verdict-box {
      background: var(--cream);
      border-left: 4px solid var(--accent);
      border-radius: 0 10px 10px 0;
      padding: 24px 28px;
      margin: 32px 0;
    }

    .verdict-box .section-title { color: var(--accent); margin-bottom: 10px; }
    .verdict-box p { font-size: 0.95rem; line-height: 1.65; }

    .visit-btn-wrap {
      margin: 32px 0;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      color: var(--muted);
      text-decoration: none;
      margin-top: 48px;
      transition: color 0.2s;
    }

    .back-link:hover { color: var(--ink); }

    @media (max-width: 640px) {
      .pros-cons { grid-template-columns: 1fr; }
      .page-wrap { padding: 32px 20px 60px; }
    }
  </style>
</head>
<body>

<nav>
  <a class="nav-logo" href="../index.html">free<span>online</span>seo</a>
  <ul class="nav-links">
    <li><a href="../index.html#comparison">Comparison</a></li>
    <li><a href="../index.html#top-picks">Top Picks</a></li>
    <li><a href="../index.html">All Tools</a></li>
  </ul>
</nav>

<div class="page-wrap">
  <div class="breadcrumb">
    <a href="../index.html">Home</a>
    <span>›</span>
    <a href="../index.html#comparison">All Tools</a>
    <span>›</span>
    ${tool.name}
  </div>

  <div class="tool-header">
    <div class="tool-header-left">
      <div class="tool-meta">
        <span class="tag ${tool.tagType}">${tool.tagLabel}</span>
        <span class="price-display">${tool.price}</span>
        <span class="tag">${tool.freeTier}</span>
      </div>
      <h1>${tool.headline}</h1>
    </div>
    <div class="score-large ${tool.scoreClass}">${tool.score}</div>
  </div>

  <p class="intro-text">${tool.intro}</p>

  <div class="visit-btn-wrap">
    <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="btn-accent">Visit ${tool.name} →</a>
  </div>

  <div class="pros-cons">
    <div class="pros-box">
      <div class="section-title">Pros</div>
      <ul>
            ${proItems}
      </ul>
    </div>
    <div class="cons-box">
      <div class="section-title">Cons</div>
      <ul>
            ${conItems}
      </ul>
    </div>
  </div>

  <div class="section-title">Feature Breakdown</div>
  <table class="features-table">
    <thead>
      <tr><th>Feature</th><th>Available</th></tr>
    </thead>
    <tbody>
            ${featureRows}
    </tbody>
  </table>

  <div class="verdict-box">
    <div class="section-title">Our Verdict</div>
    <p>${tool.verdict}</p>
  </div>

  <div class="recommended-box">
    <div>
      <div class="rb-label">Recommended by freeonlineseo.org</div>
      <h3>Need professional SEO &amp; web development in Bulgaria?</h3>
      <p>${tool.contextNote}</p>
    </div>
    <a href="https://websitemasters.bg" target="_blank" rel="noopener" class="btn-white">Website Masters BG →</a>
  </div>

  <a href="../index.html" class="back-link">← Back to all tools</a>
</div>

<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      <a class="nav-logo" href="../index.html">free<span>online</span>seo</a>
      <p>Independent reviews of the best on-page SEO audit tools. No sponsored placements.</p>
    </div>
    <div class="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="../index.html#comparison">Comparison Table</a></li>
        <li><a href="../index.html#top-picks">Top Picks</a></li>
        <li><a href="https://websitemasters.bg" target="_blank" rel="noopener">Website Masters BG →</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2025 freeonlineseo.org — Independent SEO tool reviews</span>
    <span>Not affiliated with any reviewed tool</span>
  </div>
</footer>

</body>
</html>`;
}

// Generate all pages
tools.forEach(tool => {
  const html = generatePage(tool);
  const filePath = path.join(__dirname, 'tools', `${tool.slug}.html`);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Generated: tools/${tool.slug}.html`);
});

console.log(`\nDone! Generated ${tools.length} tool pages.`);
