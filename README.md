# @vouchpanel/react

[![Package Version][package-image]][package-url]
[![Open Issues][issues-image]][issues-url]
[![Build Status][build-image]][build-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Dependencies Status][dependencies-image]][dependencies-url]
[![Dev Dependencies Status][dev-dependencies-image]][dev-dependencies-url]
[![Commitizen Friendly][commitizen-image]][commitizen-url]

Quickly embed a vouchpanel into your React project.

### How To Use

Install with yarn (or `npm install`):

```bash
yarn add @vouchpanel/react
```

Include it as a JSX element:
```tsx
import Wall from "@vouchpanel/react";

const MyWall = (props: {}) => {
  return (
    <div>
      <Wall id={4}></Wall>
    </div>
  );
};
```

[project-url]: https://github.com/vouchpanel/vouchpanel-react
[package-image]: https://img.shields.io/npm/v/@vouchpanel/react
[package-url]: https://www.npmjs.com/package/@vouchpanel/react
[issues-image]: https://img.shields.io/github/issues/vouchpanel/vouchpanel-react.svg?style=popout
[issues-url]: https://github.com/vouchpanel/vouchpanel-react/issues
[build-image]: https://travis-ci.org/vouchpanel/vouchpanel-react.svg?branch=master
[build-url]: https://travis-ci.org/vouchpanel/vouchpanel-react
[coverage-image]: https://coveralls.io/repos/github/vouchpanel/vouchpanel-react/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/vouchpanel/vouchpanel-react?branch=master
[dependencies-image]: https://img.shields.io/david/vouchpanel/vouchpanel-react
[dependencies-url]: https://www.npmjs.com/package/@vouchpanel/react
[dev-dependencies-image]: https://img.shields.io/david/dev/vouchpanel/vouchpanel-react
[dev-dependencies-url]: https://www.npmjs.com/package/@vouchpanel/react
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli