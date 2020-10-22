# DEVELOPER PORTFOLIO WEBSITE

This project is my developer portfolio website.  It is built using React/javascript, Gatsby, GraphQL, Netlify, and Material UI.

Currently only the minimally viable features have implemented.
1. Skills Chip select
2. MDX - writeup, video code walkthrough,
3. Certificates

## Project Folder Structure
```
├── README.md # This file.
├── package.json # npm package manager file.
├── .gitignore # Files to ignore when uploading to Github
├── .prettierrc # Configurations for VS code Prettier code formatter
├── gatsby-browser.js # # Gatsby doesn't have an App.js, so this is used to wrap context API provider wrapper
├── gatsby-config # Configurations for Gatsby plugins
├── gatsby-node.js # Create pages function used to generate the individual project pages
└── src
    ├── assets
    │   ├── 
    │   ├── SteveHanDevResume.pdf # My resume

    ├── components
    │   └── Courses
    │   └── Projects 
    │   ├── Footer.js # Shows the copyright info and link to my dev website
    │   ├── globalStyles.js #
    │   ├── Header.js # 
    │   ├── Layout.js # 
    │   ├── MobileMenu.js # Mobile menu
    │   ├── SearchBox.js # 
    │   ├── seo.js # Uses react helmet to provide SEO metadata to all pages
    │   ├── SideBar.js # 
    │   ├── Skills.js # 
    │   └── SocialLinks.js # 
    ├── contants
    │   ├── gatsby-fragments.js
    │   └── links.js
    ├── context
    │   └── context.js # Context API currently used to hold state of whether mobile is open and used to read in submenu through GraphQL
    ├── pages
    │   ├── 404.js # Error page
    │   ├── about.js # About me page.  Gets the content from markdown file and passes it to the About component
    │   ├── contact.js # Contain form with submission to Netlify.
    │   ├── index.js # Home page shows hero images.
    │   ├── projects.js #  
    │   ├── success.js # Response to successful form submitted 
    ├── templates
    │   └── gallery-query.js # Create pages for gallery pages of each the portfolio
    └── static
        ├── FcAbout.js # Wrapper for About SVG icon
        ├── GrGallery.js # Wrapper for GrGallery SVG icon
        ├── mainBcg.jpg # Image used in case images cannot be loaded from Cloudinary
        ├── stevehan-icon.png # Image used by manifest for PWA to generate favicon
        ├── SteveHanPhotography_logo.png # Branded logo used on Navbar.  Will use SVG version of logo once ready
        └── SteveHanPhotography_white_logo.svg # SVG version of logo.  Work in progress
```
## License
Proprietary.  All rights reserved.

## Resources
- [Gatsby Tutorial and Projects Course](https://www.udemy.com/course/gatsby-tutorial-and-projects-course/)
- [React styled-components v5 (2020 edition)](https://www.udemy.com/course/react-styled-components/)
- [Cloudinary Fundamentals for Developers](https://training.cloudinary.com/courses/cloudinary-fundamentals-for-developers)
