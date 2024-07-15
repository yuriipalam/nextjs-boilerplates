## Architecture Skeleton

*Disclaimer: it's just my own view*

This branch has fundamental architecture to start building a robust [Next.js](https://nextjs.org/) app. It's a modular architecture and fits the best for small-medium projects.

### Brief explanation:
- all the source code is stored under the ***src*** directory. 
- ***ui*** contains bare view logic, e.g., dropdowns, buttons, no business logic at all
- ***components*** contains reusable components across the app which are built of ***ui*** package
- ***modules*** complete and independent parts of the application which are simply inserted into pages
- ***styles*** just styles using Sass preprocessor
- ***lib*** has services (e.g. api, auth), hooks, utils, reusable types and anything else
- ***entities*** aka models, usually they have types, api calls, etc.
- ***middleware.ts*** file is required to be in the root, and it does what it says

So ***ui*** is a fundamental part, ***components*** are built of ***ui*** and modules are built of ***components***. Child packages must not know anything about they parent, but parent can and should use anything from its children. In other words, it's a one-directional system.

***ui*** -> ***components*** -> ***modules***

### Also important:
- any package must have public API (index.ts)
- React Compound pattern is a must for well-readable code, see https://www.patterns.dev/
- inspired by [Feature-Sliced Design](https://feature-sliced.design/), but a simpler version since the original architecture might be an overkill for S-M size projects.

Follow best practices and take care!