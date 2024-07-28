## ✨ Enhanced shadcn/ui
 
*This branch has fundamental architecture from [architecture-skeleton branch](https://github.com/yuriipalam/nextjs-boilerplates/tree/architecture-skeleton)*

Enhanced [shadcn/ui](https://ui.shadcn.com/) according to *my own vision.*

### What's the problem with the original lib?
- Too contrast, which leads from having poor colors palette
- Not convienet colors modification out of the box, since they are stored as raw hsl strings
- Has feedback on hover, but nothing happens on click, e.g., button has hover effect, but on click nothing happens
- Ugly focus-visible selector, just ring with offset
- Default cursor is used where pointer cursor is supposed to be used

It's worth to mention, that *shadcn* isn't supposed to be a complete UI library. It's actually said that components should be modified according to your needs.

### What has changed?
- Colors now can (most probably should) have shades, the gradation is the following:
  - light2
  - light
  - lighter
  - DEFAULT (base color)
  - foreground (for text)
  - darker
  - dark
  - dark2
- Shades are completely optional, but usually there are always a few of them for each color
- ***colors.ts*** is the only source of truth, all the colors for dark/light/any themes must be defined and modified only in this file
- Almost all components, where applicable, now have pointer cursor and click effect. For example, button has 3 colors now: default, when hovered, and when clicked
- All components don't have ugly ring when clicked/hovered/focused, now it's beatiful
- Less contrast, everything seems to be more "alive". This comes from richer colors palette
- Rounding radius now is not the same for all elements, small elements (e.g., inputs, buttons) are less rounded, appropriately large elements are more rounded
- And much more minor adjustments

### Is there a demo?
Clone the repo and run `yarn`, or `npm`. The main page has lots of examples

### Are all original components from shadcn supported?
Almost, but not all of them. Charts, Carousel, Collapsible, Accordion, Calendar, Input-OTP aren't adopted or added yet. 