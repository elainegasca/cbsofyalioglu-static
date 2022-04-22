# SEO-focused, Multilanguage, NextJS Blog with Tailwind CSS.
A blog theme that is built with NextJS and Tailwind CSS.  This is the theme that powers my [blog](https://www.cbsofyalioglu.com). 


## Features
A sample frontmatter file for a post look like this.
```yaml
---
title: "Awesome Content Creation Tools: +70 Tools for Creators"
description: "A collection of tools to make your life easier. This wondergful list includes written and visual content creation tools."
date: "2021-08-04"
modified: "2022-02-15"
cover: "/posts/covers/content-creation-tools.webp"
slug: "content-creation-tools"
topic: "productivity"
canonical: "https://www.cbsofyalioglu.com/productivity/content-creation-tools/"
language: "eng"
categories:
  - "productivity"
  - "design"
  - "post"
  - "featured"
tags:
  - "content creation"
  - "content research tools"
  - "grammar and punctuation checkers"
  - "visual content creation tools"
  - "content aggregation tools"
  - "infographic maker tools"
  - "presentation maker tools"
  - "productivity tools"
keywords:
  - "content creation tools"
  - "content development tools"
  - "content creator apps"
  - "best apps for content creators"
  - "best content creation tools for research"
  - "great apps for content marketers"
  - "content creator software"
  - "content writing tools"
  - "infographic maker"
  - "content marketing tools"
monetize: true
related:
  - 'free-design-resources'
mentions:
  - { type: "Thing", name: "Canva", sameAs: "https://www.wikidata.org/wiki/Q35997" }
---
```

<br/>

### Topic Hubs
An example frontmatter part of post is as follows


There should be only one topic. The topic keyword becomes the URL category. 

By doing that you can put similar posts under the same URL directory. 

The following example, make the post visible under "productivity" directory.

```yaml
---
topic: "productivity"
slug: "content-creation-tools"
---
```

```yaml
/productivity/content-creation-tools
```

### Similar Posts
You can suggest different posts to the reader by adding their `slug` fields to the `related` section of a post. In the following example, The post have `free-design-resources` slug will be suggested. 

```YAML
related:
  - 'free-design-resources'
```
