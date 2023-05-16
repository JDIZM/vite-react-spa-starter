# vite-react-ts-redux

## Tech Stack

- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Volta.sh](https://volta.sh/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router v6](https://reactrouter.com/en/6.5.0)
- [Husky](https://typicode.github.io/husky/#/)
- [Storybook](https://storybook.js.org/docs/react/builders/vite)
- [SASS/SCSS](https://sass-lang.com/)
- [pnpm](https://pnpm.io/)

## Getting Started

This project uses Volta.sh to manage npm versions. If you don't have it installed please see the [Volta.sh](https://volta.sh/) website for installation instructions.

```
# install dependencies
pnpm install

# start dev server
pnpm dev

# build for production
pnpm build
```

## Storybook

```
# start storybook
pnpm storybook
```

Using the updated CSF 3.0 syntax see https://storybook.js.org/blog/component-story-format-3-0/

For more on writing stories see: https://storybook.js.org/docs/react/writing-stories/introduction

## Theme

Theme styles use SASS/SCSS for preprocessing and [BEM](https://getbem.com/) naming methodology.

A base color scheme is defined using SASS [maps](https://sass-lang.com/documentation/values/maps) which is applied using mixins to set the theme based on the user preferences.

If you wish to change the color scheme then you can apply a `.light` or `.dark` class to the html/body to overwrite the existing scheme.

## Resources

- https://www.youtube.com/watch?v=poQXNp9ItL4&ab_channel=ProgrammingwithMosh
- https://react-redux.js.org/tutorials/quick-start
- https://redux-toolkit.js.org/tutorials/quick-start
- https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#rules-of-reducers
- https://cathalmacdonnacha.com/setting-up-eslint-prettier-in-vitejs
- https://reactrouter.com/docs/en/v6/getting-started/tutorial
