# ReeCo website

Next.js 16 site for ReeCo — Revenue Operations & Automation.

## Editing content

All copy lives in `content/site.ts`. Fields left as `""` are hidden on the site.

- **Founder portrait** — add the image to `public/` (e.g. `public/founder.jpg`) and set `founder.portrait`. It appears in the homepage hero and on the About page.
- **Founder video** — add the MP4 (and optional poster / `.vtt` captions) to `public/video/` and fill in `video`. It appears on the About page.
- **Business email / LinkedIn** — `site.email`, `site.linkedin`.
- **Projects** — `work.projects`. Only list tools under `tools` that were actually used.

## Enquiry form

Submissions are handled by `app/actions/contact.ts` and delivered to a CRM webhook and/or by email.
Copy `.env.example` to `.env.local` for local testing and set the same variables in Vercel.
Spam protection: hidden honeypot field + minimum completion time.

## Development

```bash
npm run dev     # http://localhost:3000
npm run build
```
