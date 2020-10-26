<p align="center">
  <a href='https://www.npmjs.com/package/@yaireo/ui-switch'>
      <img src="https://img.shields.io/npm/v/@yaireo/ui-switch.svg" />
  </a>
  <a href='https://simple.wikipedia.org/wiki/MIT_License'>
      <img src="https://img.shields.io/badge/license-MIT-lightgrey" />
  </a>
  <img src="https://img.shields.io/bundlephobia/minzip/@yaireo/ui-switch" />
</p>

<h1 align="center">
  <a href='https://yaireo.github.io/ui-switch'>ui-switch</a> - A React component
</h1>

<h3 align="center">
  👉 Demos: <a href='https://codepen.io/vsync/pen/gOrVgXV' target='_blank'>Codepen</a> |
  <a href='https://codesandbox.io/s/ui-switch-demo-page-8ij3p?file=/src/App.js' target='_blank'>Codesandbox</a>
   👈
</h3>

<p align="center">
<br>
  <a href='https://codepen.io/vsync/pen/gOrVgXV'>
    <img src="./demo.png?sanitize=true" />
  </a>
<br>
<p>

----

I wanted a solid, beautiful *Switch* component, with absolutly minimal footprint.

I did not want to install a full components-lib, even if I would be using only a single component, I wanted it to be really lightweight
but also highly customizable, and [CSS variables](https://github.com/yairEO/ui-switch/blob/master/src/switch.scss#L5-L14) are perfect for this, since they are much better than pre-compiled variabled, since they
are computed on-the-fly, the CSS itself if kept to a minimum, when wanted to create different design versions of the Switch component.


## Install:

```
npm i @yaireo/ui-switch
```

## Usage

```js
import Switch from '@yaireo/ui-switch'
import '@yaireo/ui-switch/src/switch.scss'
// or the pre-compiled CSS:
// import '@yaireo/ui-switch/dist/switch.css'
```

```js
// use in JSX:
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
