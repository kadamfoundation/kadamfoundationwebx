# Approved Image Assets

Store original, approved Kadam Foundation photographs in the folders below. Use descriptive, lowercase filenames and update the matching page component when an image is supplied. Keep the existing media wrappers so their aspect ratios and page layout remain stable, and provide alt text describing the actual image.

## Folders

- `leadership/`: central leadership portraits.
- `team/`: city heads and department coordinators.
- `programs/`: Project Siksha, Project Samanvay, and Women Empowerment photographs.
- `stories/`: approved photographs for the story cards.
- `events/`: future event photographs.
- `homepage/`: homepage feature and community photographs.

## Current Image Slots

- About: hero photo, portrait ratio `4:5`.
- Home: community feature `4:5`, India chapter map visual `4:3`, community voice portrait `1:1`.
- Programs: Shiksha, Samanvay, and Women Empowerment panels, `4:3` on small screens and `5:6` on large screens.
- Stories: eight story-card thumbnails in fixed-height media areas (`12rem`).
- Volunteer: learning-circle feature, portrait ratio `4:5`.
- Team: leadership and city profiles already have optional local image paths in `lib/team-data.ts`; no real member photographs are currently included.
- Navbar: the existing Kadam emblem remains at `public/assets/aistudio/Image_1_0f0bcb58.jpeg`.

Current image slots show accessible neutral placeholders. Replace an `ImagePlaceholder` with `next/image` in the same wrapper when an approved original is available; preserve the wrapper sizing and write alt text for the actual photograph. The homepage map slot should use a verified map asset, not a photograph.