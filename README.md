# Kadam Foundation

Kadam Foundation is a youth-led nonprofit organization working at the grassroots to create lasting social impact across India. This project is the public website for the foundation, designed to share its mission, programs, success stories, team, volunteer opportunities, and ways to support the work.

## About the website

The website presents Kadam Foundation as a community-driven initiative focused on:

- Education and child literacy
- Women empowerment and skill-building
- Community outreach and volunteer engagement
- Storytelling and impact reporting
- Donations and partnership opportunities

Key sections include:

- Home
- About
- Programs
- Stories
- Gallery
- Team
- Volunteer
- Donate
- Contact

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Local image and content assets

## Local development

Prerequisites:

- Node.js 18+

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## Production build

To create a production build:

```bash
npm run build
```

To run the production server:

```bash
npm run start
```

## Project structure

```text
app/              # App routes and page components
components/       # Reusable UI components
lib/              # Site configuration and shared data
public/           # Static public assets
photos/           # Project image assets
next.config.ts    # Next.js configuration
package.json      # Scripts and dependencies
```

## Notes

This site is a static marketing and community-impact website; no additional API keys are required for normal local development. The repository includes an example environment file for compatibility with AI Studio-style setups, but the frontend itself does not depend on external service credentials to run locally.
