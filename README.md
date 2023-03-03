# rigotti.dev

This is the repository for rigotti.dev, a personal blog created using Next.js 13 and Tailwind CSS. The blog posts are static markdown files that are compiled at build time.

## Setup
To run the blog locally, you will need to have Node.js installed on your machine. Once you have Node.js installed, you can follow these steps:

1. Clone this repository to your local machine
2. Navigate to the project directory in your terminal
3. Run npm install to install the project dependencies
4. Run npm run dev to start the development server
5. The blog should now be accessible at http://localhost:3000/.

## Writing Blog Posts
To write a new blog post, you can create a new markdown file in the posts directory. The file should be named with the format `title-of-post.md`.
For example, if you were writing a post about Next.js, you might name the file `intro-to-nextjs.md`.
The markdown file should begin with a YAML front matter block that contains the post's metadata. Here is an example front matter block:

```yaml
---
title: "Introduction to Next.js"
date: "2023-03-03"
tags: ["next.js", "web development"]
---
```

After the front matter block, you can write the body of your blog post in markdown.

Deployment
The blog is deployed automatically to Vercel whenever changes are pushed to the main branch. The deployment is handled through the Vercel GitHub integration.
