# Stop Look Around — Affiliate Monetization Audit

Date: 2026-09-15
Status: Execution branch — no unverified partner IDs may be deployed
Owner: MatPom Digital Ventures, LLC

## Role
Stop Look Around is the first affiliate proving ground in the five-site portfolio because destination content naturally leads to lodging, activities, and selective travel gear.

## Current live strengths
- Travel Guides hub already contains planning CTAs for GetYourGuide, Booking.com, and gear.
- Destination guides such as Morocco and Budapest already use Stay Here and Experiences modules.
- Affiliate disclosure, cookie, privacy, and terms pages exist.
- Amazon gear modules already exist on the homepage and guides.

## Immediate priorities
1. Verify every Booking.com, GetYourGuide, Viator/Awin, and Amazon link contains a valid approved tracking identifier.
2. Remove or replace any search link, placeholder, dead destination, stale price, or untracked merchant URL.
3. Preserve deep links to the exact city, hotel search, tour, activity, or product whenever program rules permit.
4. Add a central affiliate registry before scaling monetization.
5. Add GA4 `affiliate_impression` and `affiliate_click` events with site, page, merchant, placement, campaign, and destination metadata.
6. Record a 28-day baseline before judging conversion changes.

## Priority conversion pages
1. Five highest-traffic destination guides — lodging + activities first, gear second.
2. Travel Guides hub — trip-planning gateway.
3. Best Travel Photography Gear — high-intent Amazon/product page.
4. What to Pack for a Two-Week Trip — high-intent gear page.
5. Best Carry-On Organization Gear / Long-Flight Essentials — high-intent gear pages.

## Placement standard
- Destination page: editorial content → Stay Here → Experiences → selective gear.
- Do not lead destination pages with Amazon product grids.
- Travel shirts or owned merchandise belong after destination inspiration, never ahead of lodging/activity actions.
- Informational pages should link internally to relevant commercial pages instead of carrying unrelated product grids.

## Disclosure standard
Place a plain-language affiliate disclosure before the first affiliate recommendation. Amazon-participating pages/sites must also carry the current required Amazon Associates identification statement. Footer-only disclosure is not sufficient for the company standard.

## Central registry schema
Recommended path: `/data/affiliate-links.json`.
Each record must contain: stable id, merchant, approved affiliate destination URL, non-affiliate fallback, originating site, page slug, placement, campaign, product/destination, active status, last verified date, and notes.

Never publish partner secrets, private credentials, placeholder IDs, or guessed tracking tags in the repository.

## GA4 measurement
Track: sessions, commercial-page sessions, affiliate module impressions, affiliate clicks, CTR by page/merchant/placement/device, merchant conversions, commission revenue, earnings per click, earnings per 1,000 sessions, and broken/inactive links.

## Decision rules
- High impressions + low clicks: improve relevance, CTA, placement, or mobile visibility.
- High clicks + low conversions: verify landing-page match, availability, price, and offer quality; replace weak offers.
- Low impressions + strong CTR: increase qualified internal and Pinterest traffic.
- Strong revenue/click + low traffic: create adjacent content around the same intent.

## Deployment gate
Do not merge monetization changes until:
- all partner approvals/tracking IDs are verified;
- zero known broken affiliate links remain;
- disclosures are visible before first affiliate links;
- GA4 affiliate events are verified;
- mobile QA passes;
- exact external destinations are manually checked.
