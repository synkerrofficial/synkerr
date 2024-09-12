## App Developer Documentation

### Introduction
This documentation provides a detailed explanation of the `App` component, along with its dependencies and child components. The `App` component serves as the main entry point for the application, and it orchestrates the rendering of various components to create the user interface.

### Table of Contents
- [App Component](#app-component)
  - [Function Explanation](#function-explanation)
  - [Dependencies](#dependencies)
- [HeroSection Component](#herosection-component)
  - [Function Explanation](#function-explanation)
  - [Dependencies](#dependencies)
- [Globe Component](#globe-component)
  - [Function Explanation](#function-explanation)
  - [Dependencies](#dependencies)
- [Footer Component](#footer-component)
  - [Function Explanation](#function-explanation)
  - [Dependencies](#dependencies)
- [HeroSectionCentre Component](#herosectioncentre-component)
  - [Function Explanation](#function-explanation)
  - [Dependencies](#dependencies)
- [Objectives Component](#objectives-component)
  - [Function Explanation](#function-explanation)
  - [Dependencies](#dependencies)
- [CSS](#css)
  - [heroSection.css](#herosectioncss)
  - [Objectives.css](#objectivescss)
- [Global Styles](#global-styles)
- [Schema Tables](#schema-tables)


### App Component
#### Function Explanation
The `App` component renders the following elements in a specific order:
1. `HeroSection`: Displays the main banner or introductory section of the application. 
2. `Globe`: Renders a globe animation, likely representing global connectivity or reach.
3. `SocialMedia`:  Displays social media icons or links.
4. `Objectives`:  Presents the application's key objectives.
5. `FAQ`: Renders a section containing frequently asked questions.
6. `Carousel`: Shows a carousel or slider, likely showcasing features, team members, or other relevant content.
7. `Footer`:  Displays the application's footer containing copyright information, links, or social media connections.

#### Dependencies
- `React`: The primary library for building user interfaces in JavaScript.
- `HeroSection`:  A custom component responsible for rendering the banner section.
- `Globe`:  A custom component for rendering the globe animation.
- `Carousel`:  A custom component for displaying a carousel.
- `SocialMedia`: A custom component for displaying social media icons or links.
- `Footer`:  A custom component rendering the application footer.
- `Objectives`: A custom component rendering the application objectives.
- `FAQ`:  A custom component displaying frequently asked questions.
- `useRef`: A React hook used for creating references to DOM elements.


### HeroSection Component
#### Function Explanation
The `HeroSection` component renders a full-screen section that likely serves as the landing page. It includes the following elements:
- `Navbar`: Renders the navigation bar.
- `HeroSectionCentre`: Displays the main content of the hero section.
- `Scroll Down Arrow`: Adds a visual cue to encourage users to scroll down.

#### Dependencies
- `React`: The core library for building user interfaces.
- `Navbar`:  A custom component responsible for the navigation bar.
- `HeroSectionCentre`: A custom component that houses the central content of the hero section.

### Globe Component
#### Function Explanation
The `Globe` component is responsible for rendering a globe animation using the `cobe` library. The animation is a 3D rotating globe, likely with markers indicating specific locations.

#### Dependencies
- `React`: The core library for building user interfaces.
- `useEffect`: A React hook for managing side effects within components.
- `useRef`: A React hook for creating references to DOM elements.
- `createGlobe`: A function from the `cobe` library for creating globe animations.

### Footer Component
#### Function Explanation
The `Footer` component displays the application's footer. It includes the following elements:
- `Logo`:  The application's logo.
- `Social Media Icons`: Links to the application's social media pages.
- `Contact Information`:  Displays the company's contact details.
- `Copyright Information`:  Displays copyright information.

#### Dependencies
- `React`: The core library for building user interfaces.
- `BsLinkedin, BsInstagram, BsTwitter`: Components from the `react-icons/bs` library for rendering social media icons.

### HeroSectionCentre Component
#### Function Explanation
The `HeroSectionCentre` component is likely responsible for rendering the primary content within the hero section. It includes a call to action (CTA) button and a message about the application's beta release.

#### Dependencies
- `React`: The core library for building user interfaces.
- `HeroSectionAnimation`:  A custom component likely responsible for an animation or visual effect within the hero section.

### Objectives Component
#### Function Explanation
The `Objectives` component presents the application's key objectives. It utilizes a card-based layout to display each objective along with its description.

#### Dependencies
- `React`: The core library for building user interfaces.
- `Bounce`:  An animation effect from the `react-awesome-reveal` library for adding visual emphasis to the objectives.


### CSS
#### HeroSection.css
- Applies background images to the `heroSection` class when the screen width is at least 767 pixels.
- The images are stacked, one on the left and one on the right, for a layered effect.

#### Objectives.css
- Defines styles for the `xyz` class, which is used to limit the maximum width of the objectives container.

### Global Styles
- Imports the "Poppins" font from Google Fonts.
- Sets the `--red` and `--gray` variables to define color values.
- Applies the "Poppins" font family to the `body` element.
- Defines styles for the `xyz` and `abc` classes.


### Schema Tables
There is no schema involved in this application as it's a front-end React application without a database. 

