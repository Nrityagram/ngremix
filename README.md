# Nrityagram Website

The official website for [Nrityagram](https://nrityagram.org), a one-of-a-kind collective of artistes where dance is a way of life. Built with [Eleventy](https://www.11ty.dev/) static site generator, this project showcases the dance village, its programs, community initiatives, and performance repertoire.

## Tech Stack

- **Static Site Generator**: [Eleventy v2.0.1](https://www.11ty.dev/)
- **Template Engine**: [Nunjucks](https://mozilla.github.io/nunjucks/)
- **Styling**: [Sass/SCSS](https://sass-lang.com/)
- **Deployment**: [Netlify](https://www.netlify.com/) with serverless functions
- **Image Processing**: @11ty/eleventy-img with custom pipelines
- **JavaScript**: jQuery for sliders, vanilla JS for scroll observers and interactions

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Image Optimization**: Automated image processing with responsive formats
- **Serverless Preview**: Netlify functions for on-demand page generation
- **Social Integration**: Facebook, Instagram, YouTube links and sharing
- **Newsletter Subscription**: Integrated newsletter signup functionality
- **Interactive Components**:
  - Image sliders and carousels (Owl Carousel)
  - Video embeds (YouTube Lite Embed)
  - Scroll animations and fade-in effects
  - Google Maps integration
  - Interactive timelines
- **Search Functionality**: Built-in search capabilities
- **404 Handling**: Custom 404 page with proper routing
- **URL Redirects**: Comprehensive legacy URL redirects for SEO preservation
- **Analytics**: Google Analytics and Microsoft Clarity integration

## Prerequisites

- **Node.js**: >=0.10.3 <21
- **npm**: >=1.0.20

The project includes a `.nvmrc` file to specify the Node.js version for NVM users.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Nrityagram/ngstaging.git
cd ngstaging
```

2. Install dependencies:

```bash
npm install
```

## Available Scripts

### Development

- `npm start` - Full development build with parallel Sass compilation and Eleventy server (clean build first)
- `npm run quickstart` - Start development server without cleaning \_site/ directory

### Building

- `npm run build` - Production build (Sass compilation + Eleventy build with incremental builds)
- `npm run build:clean` - Remove \_site/ directory for clean build
- `npm run build:sass` - Compile Sass to CSS
- `npm run build:eleventy` - Build Eleventy site with incremental builds

### Watching

- `npm run watch:sass` - Watch Sass files and recompile on changes
- `npm run watch:eleventy` - Run Eleventy development server with live reload

### Debugging

- `npm run debug` - Run Eleventy with debug output
- `npm run debug:eleventy` - Debug Eleventy build process

## Project Structure

```
ngstaging/
├── eleventy.config.js           # Main Eleventy configuration
├── eleventy.config.images.js   # Image processing configuration
├── eleventy.config.pictures.js  # Picture element configuration
├── netlify.toml                 # Netlify deployment config and redirects
├── package.json                 # Dependencies and scripts
├── img/                         # Static images and icons
├── src/                         # Source directory
│   ├── _data/                   # Global data files
│   │   ├── metadata.json        # Site metadata
│   │   └── pages.js             # Page configuration
│   ├── _includes/               # Reusable templates and components
│   │   └── layouts/             # Page layouts
│   │       ├── base.njk         # Base HTML structure
│   │       ├── navigation.njk   # Navigation component
│   │       └── page.njk         # Standard page layout
│   ├── css/                     # Compiled CSS (generated from Sass)
│   ├── fonts/                   # Custom fonts (EB Garamond, Lato)
│   ├── sass/                    # Sass source files
│   │   ├── abstracts/          # Design tokens (colors, fonts, breakpoints)
│   │   ├── base/               # Base styles
│   │   ├── components/         # Component styles
│   │   └── utilities/          # Utility classes
│   ├── utils/                   # JavaScript utilities
│   │   ├── navigation.js       # Mobile navigation
│   │   ├── fadein-observer.js  # Scroll animation observer
│   │   ├── owl-custom.js       # Carousel customization
│   │   └── [other utilities]
│   ├── 404.njk                  # Custom 404 page
│   ├── index.njk                # Homepage
│   ├── about.njk                # About page
│   ├── donate.njk               # Donation pages
│   ├── [other pages].njk        # Additional content pages
├── netlify/                     # Netlify serverless functions
│   └── functions/
│       └── preview/             # Preview function for on-demand pages
└── _site/                       # Build output (generated)
```

## Development

The development workflow uses parallel processes:

1. **Sass Compilation**: Watches and compiles Sass files to CSS in the `_site/css/` directory
2. **Eleventy Server**: Serves the site with live reload, watching for template changes
3. **BrowserSync**: Automatically refreshes the browser when CSS changes (without full rebuild)

### Image Processing

The project uses two image configuration modules:

- **eleventy.config.images.js**: Basic image processing pipeline
- **eleventy.config.pictures.js**: Advanced `<picture>` element generation with responsive sources

Images are watched and processed automatically during development.

## Deployment

The site is configured for Netlify deployment with:

- **Build Command**: `npm run build`
- **Publish Directory**: `_site`
- **Plugins**: netlify-plugin-cache for caching images and build artifacts
- **Serverless Functions**: Located in `netlify/functions/preview/`
- **Redirects**: Extensive URL redirects defined in `netlify.toml` to preserve legacy URLs

## Key Dependencies

### Core

- `@11ty/eleventy` (v2.0.1) - Static site generator
- `@11ty/eleventy-img` (v3.1.0) - Image processing
- `@11ty/eleventy-navigation` (v0.3.5) - Navigation tree generation
- `@11ty/eleventy-plugin-syntaxhighlight` (v5.0.0) - Code syntax highlighting

### Styling

- `sass` (v1.62.1) - Sass compiler

### Utilities

- `luxon` (v3.3.0) - Date/time manipulation
- `markdown-it` (v13.0.1) - Markdown parsing
- `markdown-it-anchor` (v8.6.7) - Anchor links in headers
- `npm-run-all` (v4.1.5) - Run npm scripts in parallel
- `dotenv` (v16.4.1) - Environment variable management
- `get-youtube-id` (v1.0.1) - YouTube ID extraction

## Browser Support

The site supports modern browsers with features like:

- CSS Grid and Flexbox
- ES6+ JavaScript
- Intersection Observer API for scroll animations
- CSS Custom Properties
- Font loading with `preload`

## SEO and Analytics

- **Google Analytics**: Tracking with UA-166089693-1
- **Microsoft Clarity**: User behavior analytics
- **Open Graph**: Social media sharing metadata
- **Twitter Cards**: Twitter-specific sharing metadata
- **Sitemap**: Automatically generated at `/sitemap.xml`
- **Robots.txt**: Search engine crawling rules

## Contributing

1. Follow the existing code style and structure
2. Use Nunjucks templates for new pages
3. Add new components to `src/_includes/`
4. Follow the Sass architecture in `src/sass/`
5. Test responsiveness on desktop, tablet, and mobile
6. Ensure all links and images are properly optimized

## License

MIT License - See LICENSE file for details

## Credits

- **Developer**: Amrita Chanda (amrita@nrityagram.org)
- **Organization**: Nrityagram - Odissi Dance Centre
- **Registration**: E 7242 MUMBAI dated 23/07/1979

## Contact

- **Email**: info@nrityagram.org
- **Phone**: +91 80 28466312 / 3 / 4
- **Address**: Nrityagram, Hessaraghatta Post, Kodihalli Village, Bangalore 560088, India
- **Website**: https://nrityagram.org

## Visit Information

**Visiting Hours**: 10am - 2pm (Friday, Saturday, and Sunday)
**Closed**: Mondays, National, State, and School Holidays (Call to confirm)
