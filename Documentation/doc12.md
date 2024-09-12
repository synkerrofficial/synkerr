## Carousel Component Documentation

### Introduction

This document provides a comprehensive overview of the `Carousel` component, a React component responsible for displaying a scrollable list of team members with interactive tabs for filtering by team category. This component utilizes NextUI library for styling and functionality.

### Table of Contents

- Function Explanations
- Dependencies
- API Specs
- Schema Tables

### Function Explanations

#### 1. `Carousel(props, ref)`

This is the main component function that receives props and a ref. It initializes state variables for selected tab, auto-slide, and defines functions for tab selection, scrolling, and auto-slide control.

**Parameters:**

- `props`: Object containing any custom props passed to the component.
- `ref`: Ref object used to access the component element from outside.

**State Variables:**

- `selectedTab`:  Stores the currently selected tab (e.g., "All", "Founders", "webTeam", etc.)
- `autoSlideEnabled`: Controls whether automatic sliding is enabled.

**Functions:**

- `getTabClassName(tabName)`: Returns a className based on whether the given `tabName` is the currently selected tab.
- `scrollCarousel(direction)`: Scrolls the carousel horizontally in the specified `direction` (either "left" or "right").
- `startAutoSlide()`: Enables automatic sliding of the carousel.
- `stopAutoSlide()`: Disables automatic sliding of the carousel.

#### 2. `useEffect()`:

This hook is used to implement automatic sliding functionality. It sets an interval to continuously scroll the carousel rightward when `autoSlideEnabled` is true. The interval is cleared upon component unmounting or when `autoSlideEnabled` becomes false.

**Dependencies:**

- `autoSlideEnabled`: The effect re-runs whenever this state variable changes.

#### 3. `return`:

This section defines the JSX structure of the `Carousel` component, including:

- Header with "OUR TEAM" title.
- Tab navigation with buttons for selecting different team categories.
- Carousel container with scrollable team member cards.
- Left and right scroll buttons to manually navigate the carousel.

### Dependencies

- **React:** Provides the core framework and components.
- **NextUI:** Used for styling and components like `Tabs`, `Tab`, and `Avatar`.

### API Specs

**Props:**

- None - This component does not accept any custom props currently.

**Methods:**

- None - The component doesn't expose any public methods.

### Schema Tables

**Team Data Schema:**

| Field | Type | Description |
|---|---|---|
| name | String | Name of the team member |
| role | String | Role of the team member |
| image | String | URL of the team member's image |

**Example Team Data Structure:**

```json
{
  "All": [
    {
      "name": "Abhay Tai",
      "role": "Founder",
      "image": "https://media.licdn.com/dms/image/..." 
    },
    {
      "name": "Sahil Mengji",
      "role": "Co-Founder",
      "image": "https://media.licdn.com/dms/image/..." 
    },
    // ... other team members
  ],
  "Founders": [
    // ... founders data
  ],
  "webTeam": [
    // ... web team data
  ],
  // ... other team categories
}
```
