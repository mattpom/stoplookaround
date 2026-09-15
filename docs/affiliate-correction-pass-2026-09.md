# Stop Look Around — Affiliate Correction Pass

Status: implementation QA
Branch: affiliate-monetization-audit-2026-09

## Verified IDs — preserve exactly
- Booking.com: `aid=2860959`
- GetYourGuide: `partner_id=X8AICJ6`
- GetYourGuide campaign source: `utm_source=stoplookaround`

## Morocco — best-places-to-visit-in-morocco.html
Verified corrections:
1. Change the Experiences disclosure from `Affiliate links via GetYourGuide & Viator` to `Affiliate links via GetYourGuide` because the current experience cards in this module point to GetYourGuide.
2. Add `data-affiliate-partner="Booking.com"` to each Booking.com stay card.
3. Add `data-affiliate-partner="GetYourGuide"` to each GetYourGuide experience card.
4. Preserve `rel="noopener sponsored"` and all verified partner parameters.
5. Preserve the existing `travel_affiliate_click` event during normalization so historical GA4 reporting is not silently broken.

## Budget Europe — budget-travel-tips-europe.html
Verified corrections:
1. Add `data-affiliate-partner="Booking.com"` to Booking.com stay cards.
2. Add `data-affiliate-partner="GetYourGuide"` to GetYourGuide experience cards.
3. Preserve Booking.com `aid=2860959` and GetYourGuide `partner_id=X8AICJ6`.
4. Preserve the existing disclosure and `travel_affiliate_click` event.
5. Do not convert editorial mentions of Hostelworld/Airbnb into affiliate links unless a verified approved affiliate destination exists.

## Tracking rule
Travel merchant clicks should be measurable with partner, URL, link text and page path. Do not create a second event for the same merchant click. Existing generic outbound tracking may remain, but reporting must use the dedicated travel affiliate event for Booking.com/GetYourGuide conversion analysis.

## Editorial rule
Do not add affiliate links merely to increase link count. Monetization remains adjacent to a natural trip-planning action.

## QA gate
Before merge: verify destination URLs, disclosures, mobile layout, merchant attributes, GA4 event firing, internal links and absence of placeholder/unverified affiliate IDs.