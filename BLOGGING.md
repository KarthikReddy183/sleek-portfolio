# Writing and publishing a blog post

Blog posts are MDX files in `src/data/blog/`. The filename becomes the URL slug: `my-first-post.mdx` is shown at `/blog/my-first-post`.

## Create a post

Create `src/data/blog/my-first-post.mdx` with this frontmatter at the top:

````mdx
---
title: 'My First Post'
description: 'A short summary that appears in the blog list and search results.'
image: '/blog/my-first-post.jpg'
tags: ['notes', 'web development']
date: '2026-10-31'
isPublished: true
---

## Start writing here

Write your post using Markdown: headings, paragraphs, lists, links, images, and code fences all work.

```js
console.log('Hello, blog!');
```
````

Put the cover image at `public/blog/my-first-post.jpg`; the `image` value is its public URL. Keep the filename lowercase and use hyphens. Set `isPublished: false` to keep a draft hidden from the blog listing. Set it to `true` when the post is ready.

## Preview locally

From the project folder, run:

```bash
npm run dev
```

Open `http://localhost:3000/blog/my-first-post` to preview the post and `http://localhost:3000/blog` to see the listing. Before publishing, run `npm run build` to check that the production build succeeds.

## Deploy to your website

This repo is a Next.js app. If your GitHub repo is already connected to Vercel, commit and push the MDX file and image to the production branch (usually `main`):

```bash
git add src/data/blog/my-first-post.mdx public/blog/my-first-post.jpg
git commit -m "Add my first blog post"
git push origin main
```

Vercel builds and deploys the new post automatically. If the repo is not connected yet, import your GitHub repository in Vercel and accept the detected Next.js defaults; then future pushes to `main` deploy automatically. Vercel creates preview deployments for other branches or pull requests.
