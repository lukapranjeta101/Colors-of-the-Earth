# Outstanding Items from Joel (Colors of the Earth)

This site has been rebranded from the original template using placeholder
content where real information was not yet available. Before launch, the
following still needs to come from Joel:

- [ ] **Official business logo.** The site currently uses a text-based
  wordmark ("COLORS OF THE EARTH") in the navbar and footer, reusing the
  original template's geometric mark in the new green color. Swap in the
  real logo file once provided — it goes in the same spot in
  `components/Navbar.tsx` and `components/Footer.tsx`.
- [ ] **Actual project photographs.** All images site-wide (hero accent,
  homepage carousel, philosophy section, parallax break, and the Work page
  gallery) are temporary stock photos of painting/remodeling work, not
  actual completed jobs. They are labeled "Sample Photo" in the UI. Replace
  the Unsplash URLs in `app/page.tsx` and `app/work/page.tsx` with real
  photos once Joel sends them.
- [ ] **Business phone number.**
- [ ] **Business email address.** The Contact page currently shows "Coming
  Soon" instead of a real email (see `app/contact/page.tsx`).
- [ ] **Confirmed list of services and any real pricing/packages.** The
  Services page currently uses broad category descriptions (Painting,
  Remodeling) with "Contact for Details" in place of prices.
- [ ] **Any desired social media links.** Footer currently shows
  placeholder Facebook / Instagram / Google links pointing to "#".
- [ ] **Domain name and hosting information.**
- [ ] **Approval of the final website copy** (headlines, body text, stat
  callouts on the homepage, etc).
- [ ] **Approval of the temporary color palette** (Primary Forest Green
  `#335B46`, Dark Forest Green `#243D30`, Sage Green `#A6B59B`, Warm
  Off-White `#F7F5EF`, Earth Beige `#DCD5C7`, Dark Charcoal `#292D29`).

## Note on the contact form

The inquiry form on the Contact page is visual only right now — it has no
backend or email integration, so submissions are not currently delivered
anywhere. Let us know if you'd like this wired up once you decide on an
email address.

## Note on the navbar wordmark at tablet width

"COLORS OF THE EARTH" is noticeably longer than the original template's
"STUDIO." wordmark. At most screen sizes this looks fine, but in the
~768–820px range (e.g. an iPad held in portrait mode) the nav bar gets a
little crowded before it settles down again on wider screens. The original
template's nav bar wasn't designed to flex its font size for a longer name,
and we didn't want to touch its CSS/breakpoints without approval. This will
most likely resolve itself once your real logo (probably an icon/mark
rather than full spelled-out text) replaces the placeholder wordmark — happy
to revisit the nav sizing in the meantime if this bothers you before then.
