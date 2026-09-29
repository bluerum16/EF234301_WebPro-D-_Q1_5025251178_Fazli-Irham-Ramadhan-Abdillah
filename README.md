# EF234301_WebPro(D)_Q1_5025251178_Fazli Irham Ramadhan Abdillah

| | |
|---|---|
| **Name** | Fazli Irham Ramadhan Abdillah |
| **ID** | 5025251178 |
| **Class** | Web Programming (D) |
| **Task** | Quiz 1 |

## Project Overview

A static personal website built with HTML, Tailwind CSS, and JavaScript. It introduces me, my projects, and my hometown, Tangerang, Banten. The design uses a clean light theme with a rounded black navbar, Bebas Neue for headings, and Plus Jakarta Sans for body text.

### Pages

| Page | Route | Content |
|---|---|---|
| Homepage | `/quiz1` | Landing page with a typewriter greeting and a link to the profile |
| Profile | `/quiz1/profile` | Short bio, photo, and latest projects (Petrolida 2027, Schematics 2026, Trixie Group) |
| Hometown | `/quiz1/hometown` | A brief description of Tangerang, Banten |
| Local Food | `/quiz1/food` | Laksa Tangerang, Bolu Tape, and Sate Bandeng |
| Tourist Places | `/quiz1/tourist` | Summarecon Mall Serpong, Broadway Alam Sutera, and Telaga Biru |

### Tech Stack

- HTML5
- Tailwind CSS v4 (compiled with `@tailwindcss/cli` into `output.css`)
- Vanilla JavaScript (typewriter effect on the homepage)
- Google Fonts: Bebas Neue and Plus Jakarta Sans

### Running Locally

```bash
cd quiz1
npm install
npx @tailwindcss/cli -i ./src/input.css -o ./output.css --watch
```

Then open `quiz1/index.html` with a local server such as VS Code Live Server.

### Live Demo

<!-- Add the deployed URL here -->
