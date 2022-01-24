# 😛 class-site 😛
![A screenshot of the website available at the link below](screenshots/default-screenshot.png?raw=true)

 A Gatsby.js Template for making optimized class sites with Google Docs, Front Matter, and SCSS.

[Here is a live link.](https://stalgiag.github.io/class-site/)

 I use this to make my class websites. It is pretty easy and flexible. The syllabus is a Google Doc iframe embed. The 'Resources' and 'Schedule' sections are written in Markdown. It publish directly to Github pages with a single command.

 ### Setup:

- Step 0:
  - Run `npm install` followed by `gatsby develop` to startup the development server
- Step 1:
  - Go to `src/utilities/globals.js` and setup these variables for your own class.
- Step 2:
  - Go to `src/styles/variables.scss` and change the value for `$primary-font-family` and `$primary-color`. You can also change the other color variables but currently they are calculated based on your primary color.
- Step 3:
  - Put a new logo named `logo.png` in the `src/images/`
  - If your file has a different path just be sure to update the graphql query in `src/components/Logo`
- Step 4:
  - Fill out `src/markdown/schedule.md` and `src/markdown/resources.md`
- Step 5:
  - If your repository is named something other than 'class-site', edit the `pathPrefix` value in gatsby-config.js.
- Step 6:
  - Run `npm run deploy` and wait, after a minute or so your website should be up at the appropriate Github pages link
  - Run this step anytime you need to update the website

### Known issues
Mobile is acceptable but not awesome. I didn't put much effort into this because the Google Docs embed scales badly in responsive containers.
The weird blend of html and markdown in the schedule might be annoying to some. It works for me but I am open to other approaches.
Maybe some bad styles here and there. I went through pretty quickly.
