# react-native-starter-app

React Native Starter App

## Introduction

This is source code for React Native Boilerplate application (React Native).


## Setup project for development

### 1. Installing dependencies

First, you have to clone this repository to your computer

``` bash
cd path_to_project_folder
npm install
react-native link
```

### 2. Run the app

iOS app

``` bash
cd path_to_project_folder
react-native run-ios
```

Android app

``` bash
cd path_to_project_folder
react-native run-android
```

## Directory Layout

```
.
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # main React Native source code
│   ├── /screens/               # Contain all screens of the project
│   │   └── /login/             # source code related to Flexi Waste project
│   │       ├── /components/    # module components
│   │       ├── actions.js      # module redux actions
│   │       └── reducers.js     # module redux reducer
│   ├── /components/            # Contains frequently used components
│   ├── /utils/             	# Contains all reusable functions in project
│   ├── /models/             	# Contains all models in project
│   └── /reducers.js            # Root reducer
├── README.md                   # Contain project's installation guide
├── package.json                # The list of 3rd party libraries and utilities
├── ios/           				# This is the directory where all of the native iOS code lives
├── android/              		# This is the directory where all of the native Android code lives
└── index.js             		# This is the entry point for your project into the React Native code
```

## Features

### Used libraries

- [x] [ESLint](https://eslint.org/ - https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) npm < 5
(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
- [x] [Babel Legacy Decorator plugin](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy) npm install --save-dev babel-plugin-transform-decorators-legacy
- [x] [babel-eslint](https://github.com/babel/babel-eslint) npm install eslint@4.x babel-eslint@8 --save-dev

- [x] [axios](https://github.com/axios/axios) npm install --save axios 
- [x] [React navigation](https://reactnavigation.org/) npm install --save react-navigation
- [x] [Redux](https://redux.js.org/) npm install --save redux
- [x] [React-redux](https://github.com/reactjs/react-redux) npm install --save react-redux
- [x] [React navigation redux helper](https://reactnavigation.org/docs/en/redux-integration.html) npm install --save react-navigation-redux-helpers
- [x] [Redux thunk](https://github.com/gaearon/redux-thunk) npm install --save redux-thunk
- [x] [Prop types](https://github.com/facebook/prop-types) npm install --save prop-types
- [x] [Moment](http://momentjs.com/) npm install moment --save
- [x] [Mobx State Tree](https://github.com/mobxjs/mobx-state-tree#installation) npm install mobx mobx-state-tree --save
- [x] [Mobx react]() npm install mobx-react --save



## Coding Style
### Naming
- **Filename**: Use PascalCase for filenames. E.g., `ReservationCard.js`.

- **Reference Naming**: Use PascalCase for React components and camelCase for their instances. eslint: [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md)

```jsx
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```

- **Component Naming**: Use the filename as the component name. For example, `ReservationCard.jsx` should have a reference name of `ReservationCard`. However, for root components of a directory, use `index.jsx` as the filename and use the directory name as the component name:

```jsx
// bad
import Footer from './Footer/Footer';

// bad
import Footer from './Footer/index';

// good
import Footer from './Footer';
```

- **Props Naming**: Avoid using DOM component prop names for different purposes.

  > Why? People expect props like `style` and `className` to mean one specific thing. Varying this API for a subset of your app makes the code less readable and less maintainable, and may cause bugs.

```jsx
// bad
<MyComponent style="fancy" />

// bad
<MyComponent className="fancy" />

// good
<MyComponent variant="fancy" />
```
	
### Declaration

- Do not use `displayName` for naming components. Instead, name the component by reference.

```jsx
// bad
export default React.createClass({
  displayName: 'ReservationCard',
  // stuff goes here
});

// good
export default class ReservationCard extends React.Component {
}
```
	
### Alignment

- Follow these alignment styles for JSX syntax. eslint: [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md) [`react/jsx-closing-tag-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)

```jsx
// bad
<Foo superLongParam="bar"
      anotherSuperLongParam="baz" />

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// if props fit in one line then keep it on the same line
<Foo bar="bar" />

// children get indented normally
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>
```
	
## Spacing

- Always include a single space in your self-closing tag. eslint: [`no-multi-spaces`](https://eslint.org/docs/rules/no-multi-spaces), [`react/jsx-tag-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)

```jsx
// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
  />

// good
<Foo />
```

- Do not pad JSX curly braces with spaces. eslint: [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)

```jsx
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
```
### Props

- Always use camelCase for prop names.
```jsx
// good
<Foo
  UserName="hello"
  phone_number={12345678} />

// bad
<Foo
  userName="hello"
  phoneNumber={12345678}
  />
```

- Omit the value of the prop when it is explicitly `true`. eslint: [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)

```jsx
// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>

// good
<Foo hidden />
```
### Tags

- Always self-close tags that have no children. eslint: [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)

```jsx
// bad
<Foo variant='stuff'></Foo>

// good
<Foo variant='stuff' />
```
	
- Use multi-line jsx if a component has more than two properties.
```jsx
<Component
propertyOne={...}
propertyTwo={...}
propertyThree={...}
…
/>
```

### Methods
- Use less state and more this.props in your render method.
- Do not use underscore prefix for internal methods of a React component.
    > Why? Underscore prefixes are sometimes used as a convention in other languages to denote privacy. But, unlike those languages, there is no native support for privacy in JavaScript, everything is public. Regardless of your intentions, adding underscore prefixes to your properties does not actually make them private, and any property (underscore-prefixed or not) should be treated as being public. See issues [#1024](https://github.com/airbnb/javascript/issues/1024), and [#490](https://github.com/airbnb/javascript/issues/490) for a more in-depth discussion.

```jsx
// bad
React.createClass({
  _onClickSubmit() {
    // do stuff
  },

  // other stuff
});

// good
class extends React.Component {
  onClickSubmit() {
    // do stuff
  }

  // other stuff
}
```

- Be sure to return a value in your `render` methods. eslint: [`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)

```jsx
// bad
render() {
  (<div />);
}

// good
render() {
  return (<div />);
}
```
### Ordering

- Ordering for `class extends React.Component`:

1. optional `static` methods
1. `constructor`
1. `getChildContext`
1. `componentWillMount`
1. `componentDidMount`
1. `componentWillReceiveProps`
1. `shouldComponentUpdate`
1. `componentWillUpdate`
1. `componentDidUpdate`
1. `componentWillUnmount`
1. *clickHandlers or eventHandlers* like `onClickSubmit()` or `onChangeDescription()`
1. *getter methods for `render`* like `getSelectReason()` or `getFooterContent()`
1. *optional render methods* like `renderNavigation()` or `renderProfilePicture()`
1. `render`

- How to define `propTypes`, `defaultProps`, `contextTypes`, etc...

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};

class Link extends React.Component {
  static methodsAreOk() {
    return true;
  }

  render() {
    return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;
  }
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
```

- Ordering for `React.createClass`: eslint: [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

1. `displayName`
1. `propTypes`
1. `contextTypes`
1. `childContextTypes`
1. `mixins`
1. `statics`
1. `defaultProps`
1. `getDefaultProps`
1. `getInitialState`
1. `getChildContext`
1. `componentWillMount`
1. `componentDidMount`
1. `componentWillReceiveProps`
1. `shouldComponentUpdate`
1. `componentWillUpdate`
1. `componentDidUpdate`
1. `componentWillUnmount`
1. *clickHandlers or eventHandlers* like `onClickSubmit()` or `onChangeDescription()`
1. *getter methods for `render`* like `getSelectReason()` or `getFooterContent()`
1. *optional render methods* like `renderNavigation()` or `renderProfilePicture()`
1. `render`