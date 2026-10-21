# From Yesterday to Tomorrow: Data Science & Agentic AI

Project materials for the technical blog post and conference keynote presentation.

## Project Structure

```
.
├── README.md                  # Project overview & usage instructions
├── blog_post.md               # Full, publish-ready long-form technical blog post
├── presentation_deck.html     # Interactive Reveal.js slide deck (ready to present in browser)
└── presentation_deck.marp.md  # Marp Markdown presentation (exportable to PDF / PPTX)
```

## How to Use These Materials

### 1. The Blog Post (`blog_post.md`)
* Formatted with standard YAML frontmatter, tags, reading time, and clean GitHub/Medium/Substack-friendly Markdown.
* Ready to paste directly into Medium, Substack, Dev.to, or compile with static site generators (Hugo, Jekyll, Astro).

### 2. The Interactive Slide Deck (`presentation_deck.html`)
* **To Present:** Double-click or open `presentation_deck.html` in Google Chrome, Safari, or Firefox.
* **Keyboard Shortcuts:**
  * **Arrow Keys / Spacebar:** Navigate forward and backward.
  * **`s` Key:** Open Speaker Notes window (shows timing, current slide, next slide, and complete talking points).
  * **`f` Key:** Toggle fullscreen presentation mode.
  * **`Esc` Key:** Slide overview grid (view all 25 slides at once).

### 3. The Marp Markdown Deck (`presentation_deck.marp.md`)
* Can be converted to PDF or PowerPoint (`.pptx`) using the Marp CLI:
  ```bash
  # Export to PDF
  npx @marp-team/marp-cli presentation_deck.marp.md --pdf

  # Export to PowerPoint (.pptx)
  npx @marp-team/marp-cli presentation_deck.marp.md --pptx
  ```
