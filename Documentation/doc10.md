## Navbar Component Documentation

### Introduction

This document outlines the functionality and structure of the Navbar component in React. The component renders a navigation bar with a logo, navigation links, and a responsive hamburger menu. 

### Table of Contents

* **Functionality**
* **Dependencies**
* **Props**
* **Functions**
* **Styling**
* **Structure**

### Functionality

The Navbar component provides the following functionalities:

* Displays a fixed navigation bar at the top of the page.
* Renders the company logo.
* Presents navigation links for "Our Aim", "Team", "What we Do" and "Contact Us".
* Implements a responsive hamburger menu for mobile and tablet views.
* Allows smooth scrolling to different sections of the page when navigation links are clicked.

### Dependencies

* **React:** The fundamental JavaScript library used for building user interfaces.
* **useState:** A React Hook for managing the state of the hamburger menu.
* **Hamburger:** A custom component that handles the hamburger menu functionality.
* **SocialMedia:** A custom component used to display social media links.

### Props

| Prop Name | Data Type | Description |
|---|---|---|
| TeamRef | React.RefObject<HTMLDivElement> | A ref object pointing to the "Team" section of the page. |
| FaqRef | React.RefObject<HTMLDivElement> | A ref object pointing to the "FAQ" section of the page. |
| SocialMediaRef | React.RefObject<HTMLDivElement> | A ref object pointing to the "Social Media" section of the page. |
| ObjectivesRef | React.RefObject<HTMLDivElement> | A ref object pointing to the "Our Aim" section of the page. |

### Functions

#### `ScrollToTeam()`

* **Purpose:** Scrolls to the "Team" section of the page when called.
* **Arguments:** None.
* **Returns:**  None.
* **Logic:**
    1. Retrieves the DOM element referenced by `TeamRef`.
    2. Calculates the vertical offset of the element.
    3. Uses `window.scrollTo` to smoothly scroll the window to the calculated offset.

#### `ScrollToSocialMedia()`

* **Purpose:** Scrolls to the "What we Do" section of the page when called.
* **Arguments:** None.
* **Returns:**  None.
* **Logic:**
    1. Retrieves the DOM element referenced by `SocialMediaRef`.
    2. Calculates the vertical offset of the element.
    3. Uses `window.scrollTo` to smoothly scroll the window to the calculated offset.

#### `ScrollToObjectives()`

* **Purpose:** Scrolls to the "Our Aim" section of the page when called.
* **Arguments:** None.
* **Returns:**  None.
* **Logic:**
    1. Retrieves the DOM element referenced by `ObjectivesRef`.
    2. Calculates the vertical offset of the element.
    3. Uses `window.scrollTo` to smoothly scroll the window to the calculated offset.


### Styling

The Navbar component applies the following styles:

* `w-full h-[100px]`: Sets the width to full screen and height to 100 pixels.
* `flex items-center justify-between`: Aligns items along the center, horizontally distributes items across the available space.
* `z-10`: Places the navbar on top of other elements.
* `absolute top-0 left-0`: Fixes the navbar to the top-left corner of the viewport.
* `px-[60px]`: Adds horizontal padding of 60 pixels.
* `bg-cover bg-center`: Sets the background image to cover the entire area and center it.
* `backgroundImage: "url('purplebackdrop.svg')"`: Sets the background image to "purplebackdrop.svg".
* `backgroundSize: "cover"`: Ensures the background image covers the entire area.
* `w-[150px]`: Sets the width of the logo to 150 pixels.
* `gap-[40px] font-medium`: Adds a gap of 40 pixels between navigation links and applies a medium font weight.
* `text-[#9d9da4] hover:text-white duration-[200ms] cursor-pointer`: Sets the default text color to a specific shade of gray, changes it to white on hover with a 200ms transition, and makes the links clickable.
* `bg-[#302d50] px-5 py-3 rounded-full`: Sets the background color of the "Contact Us" button, adds padding and rounded corners.
* `hidden lg:block md:block`: Hides the navigation links and "Contact Us" button on screens smaller than medium size (md) and displays them on larger screens (lg).
* `block lg:hidden md:hidden`: Hides the hamburger menu on larger screens and displays it on smaller screens.

### Structure

The Navbar component consists of the following HTML structure:

```html
<div className="navbar-container">
  <img src="logo.svg" alt="" className="logo" />
  <div className="navigation-links">
    <p className="nav-link" onClick={ScrollToObjectives}>Our Aim</p>
    <p className="nav-link" onClick={ScrollToTeam}>Team</p>
    <p className="nav-link" onClick={ScrollToSocialMedia}>What we Do</p>
  </div>
  <p className="contact-button">Contact Us</p>
  <div className="hamburger-menu">
    <Hamburger />
  </div>
</div>
```

This structure represents a typical navigation bar with a logo, links, and a responsive hamburger menu.

