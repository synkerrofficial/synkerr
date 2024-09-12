## HeroSectionAnimation Component Documentation

This document provides a developer's guide to the `HeroSectionAnimation` component. 

### Table of Contents
- Introduction
- Function Explanation
- Dependencies
- CSS Styling
- Usage

### Introduction
The `HeroSectionAnimation` component is responsible for rendering a dynamic hero section with a typewriter effect, showcasing different phrases related to collaboration and team building. The component utilizes the `Typewriter` library to create the animated text effect. 

### Function Explanation
```javascript
import "./HeroSectionAnimation.css";
import Typewriter from "typewriter-effect";

function HeroSectionAnimation() {
  return (
    <div className="flex h-auto justify-center items-center">
      <div className="px-10 text-center">
        <h2 className=" text-gray-400 text-3xl">Expolit the power of</h2>
        <br />
        <h1 className=" text-5xl text-white border-0px">
          <Typewriter
            options={{
              strings: [
                "Purposeful Collaborations",
                "Power of Team Building",
                "Like-Minded Peers",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
    </div>
  );
}

export default HeroSectionAnimation;
```

**Explanation:**
1. **Import Statements:**
   - `"./HeroSectionAnimation.css"`: Imports the CSS file for styling the component.
   - `Typewriter from "typewriter-effect"`: Imports the `Typewriter` component from the `typewriter-effect` library.

2. **HeroSectionAnimation Function:**
   - This function defines the component.
   - **JSX Structure:**
     - It renders a `div` with `flex`, `h-auto`, `justify-center`, and `items-center` classes, centering the content.
     - Inside, a nested `div` with `px-10` (padding), `text-center`, and other styling classes contains:
       - An `h2` element displaying the text "Expolit the power of".
       - A `br` for line break.
       - An `h1` element with `text-5xl`, `text-white`, and `border-0px` styles, containing the `Typewriter` component.

3. **Typewriter Component:**
   - The `Typewriter` component is configured with the following `options`:
     - `strings`: An array of strings to be animated, representing different phrases for the hero section.
     - `autoStart`: Set to `true` to automatically start the animation on component mount.
     - `loop`: Set to `true` to loop the animation indefinitely.

### Dependencies
- `typewriter-effect`: This library is used to create the typewriter animation effect. Install it using:
  ```bash
  npm install typewriter-effect
  ```

### CSS Styling
The `HeroSectionAnimation.css` file contains the following CSS styles:
```css
/* ... styles from previous code ... */
```

**Explanation:**
- **General Styling:**
  - `App`: Sets the flex direction of the main container to column.
  - `.social-media-container`: Defines the initial styles for the social media container, with opacity set to 0 and transform to translateX(-100%). This makes it hidden initially.
  - `.social-media-container.slide-in`: Styles the container when the `slide-in` class is applied, setting the opacity to 1 and translating it to `translateX(0)`, making it visible and sliding it in from the left.

- **Link Styling:**
  - `.TD a`: Styles the links within the social media container.
  - `.TD a svg`: Styles the SVG icons within the links.

- **Media Queries:**
  - Adjusts the styling for different screen sizes.

- **Hover Effects:**
  - `.TD a:hover`: Styles the links on hover, changing the background color, applying a scale transform, and adding a box shadow.
  - Specific hover styles for the second and third links (`nth-child(2):hover` and `nth-child(3):hover`).

- **Animation:**
  - `@keyframes floatIcon`: Defines an animation named `floatIcon` for the icons, making them float slightly up and down. 

### Usage
To use the `HeroSectionAnimation` component in your React application, simply import it and render it:
```javascript
import HeroSectionAnimation from "./HeroSectionAnimation";

function MyComponent() {
  return (
    <div>
      <HeroSectionAnimation />
    </div>
  );
}
```

### Schema Tables
This component does not utilize any database schema or data models, as it's purely a presentational component. 

