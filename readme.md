## React HOC Compose [![npm version](https://img.shields.io/npm/v/@srph/react-hoc-compose.svg?style=flat-square)](https://npmjs.com/packages/@srph/react-hoc-compose) [![Build Status](https://img.shields.io/travis/srph/react-hoc-compose.svg?style=flat-square)](https://travis-ci.org/srph/react-hoc-compose?branch=master)
Compose factory components (HOCs) on the go without variable assignment

## Why
You may find this useful if you're using [React Router v4](https://github.com/ReactTraining/react-router). The following no longer has "abstract" routes:

```js
<Route component={App}>
  <Route exact path="/" component={AppHome} />
</Route>
```

If you do, you'll get the following console warning:
```
You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored
```

Instead, the library advices on doing the following:

```js
<App>
  <Route exact path="/" component={AppHome} />
</App>
```

I use HOCs to apply permissions on each route (the following uses React Router as an example), like so:

```js
<App>
  <Route path="/login" component={Permission.guest(AppLogin)} />

  <Permission.auth(AppMain)>
    <Route path="/" component={AppHome} />
    <Route path="/trash" component={AppHome} />
  </Permission.auth(AppMain)>
</App>
```

Since `<Permission.auth(AppMain)>` isn't a valid syntax, we will have to assign it to a variable.

```js
const AppMainWithPermission = Permission.auth(AppMain)
```

Which gets verbose overtime. What if we could compose it on the go?

```js
<Compose hoc={Permission.auth} component={AppMain}>
  <Route path="/" component={AppHome} />
  <Route path="/trash" component={AppHome} />
</Compose>
```

## How It Works
`Compose` applies the HOC to the component once, on initial mount.

## Installation
```bash
npm install @srph/react-hoc-compose --save
```

### Script tags
If you're not using a bundler like Browserify or Webpack, simply add the script tag after your React script tag.

```html
<!-- Script tags for React and other libraries -->
<script src="https://unpkg.com/@srph/react-hoc-compose/dist/react-hoc-compose.min.js"></script>
```

This library is exposed as `ReactHOCCompose` (e.g., `<ReactHOCCompose />`).

## Usage
```js
<Compose hoc={withYolo} component={MyComponent} />
```

## Contributing
```
npm test
```

### Bundling package
```
npm run bundle
```
