<p align="center">
  <a href='https://www.npmjs.com/package/@yaireo/ui-switch'>
      <img src="https://img.shields.io/npm/v/@yaireo/ui-switch.svg" />
  </a>
  <a href='https://simple.wikipedia.org/wiki/MIT_License'>
      <img src="https://img.shields.io/badge/license-MIT-lightgrey" />
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/@yaireo/ui-switch" />
  <img src="https://img.shields.io/npm/dw/@yaireo/ui-switch" />
</p>

<h1 align="center">
  <a href='https://yaireo.github.io/ui-switch'>ui-switch</a> - A React component
</h1>

<p align="center">
  Beautiful switch (based on native checkbox input) component which are highly customizable using CSS variables (custom properties).
  Minimal HTML footprtint,
<p>

<p align="center">
  <a href='https://codepen.io/vsync/pen/gOrVgXV'>
    <img src="./demo.png?sanitize=true" />
  </a>
<p>

<h3 align="center">
  👉 <a href='https://codepen.io/vsync/pen/gOrVgXV' target='_blank'>See Demo</a> 👈
</h3>

## install:

```
> npm install @yaireo/ui-switch
```

## Usage

```js
import Switch from '@yaireo/ui-switch'
import '@yaireo/ui-switch/src/switch.scss'
// or the pre-compiled CSS:
// import '@yaireo/ui-switch/dist/switch.css'
```

```js
// use the component in JSX:
<form>
  <Switch checked={checked} onChange={onSwitchChange}/>
  <Switch textRight>Label on the right</Switch>
  <Switch disabled checked>Disabled</Switch>
  <Switch indeterminate>Indeterminate</Switch>
  <Switch style={{'--size':'12px', '--thumb-scale':2.2, 'thumb-color-on':'green'}}>Inline styles</Switch>
</form>
```

## Compile source:

```
> npm install
> gulp
```
