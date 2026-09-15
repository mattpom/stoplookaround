# Stop Look Around — Affiliate Implementation Status

Updated: 2026-09-15

## Verified implementation

- Booking.com tracking ID found in the live repository: `aid=2860959`.
- GetYourGuide partner ID found in the live repository: `partner_id=X8AICJ6`.
- GetYourGuide source attribution: `utm_source=stoplookaround`, `utm_medium=online_publisher`.
- Budapest guide uses `rel="noopener sponsored"` on merchant links.
- Budapest guide contains contextual affiliate disclosures before/adjacent to commercial actions.
- Budapest guide sends a GA4 `travel_affiliate_click` event with partner, URL, link text, and page path.
- Central registry added at `data/affiliate-links.json`.

## Conversion architecture confirmed

The preferred destination-guide flow is:

1. Editorial destination value.
2. Stay module — Booking.com.
3. Experience module — GetYourGuide.
4. Bottom trip-planner action.
5. Internal travel sheet / related guides.

## Do not change without verification

- Do not invent or replace partner IDs.
- Do not replace working deep links with generic homepages.
- Do not add prices or availability claims unless supplied by an approved live partner mechanism.
- Do not add affiliate modules where they do not match reader intent.

## Next implementation pass

- Inventory other high-intent destination guides against the Budapest standard.
- Normalize missing `sponsored` relationship attributes.
- Normalize GA4 affiliate-click tracking across Booking.com and GetYourGuide placements.
- Flag Viator links separately until their current affiliate parameters are verified.
- Audit Amazon gear links separately because Amazon program/link requirements differ.
- Prioritize the highest-intent travel guides rather than adding more affiliate inventory indiscriminately.
