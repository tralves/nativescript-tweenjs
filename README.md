[![npm](https://img.shields.io/npm/v/nativescript-tweenjs.svg)](https://www.npmjs.com/package/nativescript-tweenjs) [![npm](https://img.shields.io/npm/l/nativescript-tweenjs.svg)](https://www.npmjs.com/package/nativescript-tweenjs) [![npm](https://img.shields.io/npm/dt/nativescript-tweenjs.svg?label=npm%20d%2fls)](https://www.npmjs.com/package/nativescript-tweenjs)

# nativescript-tweenjs

This plugin will expose a `TWEEN` global variable and create a bunch of polyfills so you can use tweenjs in your NativeScript app.

Tween.js will tween variable, which you can then attach to ANY UI attribute.

> NOTE: NativeScript's [declarative and imperative animations](https://docs.nativescript.org/ui/animation) will always be more performant. Use Tween.js sparingly and only if you need to tween a paramenter not available in the current NativeScript APIs.

## Installation

### NativeScript 4.x

```bash
tns plugin add nativescript-tweenjs
```

## License

This is released under the MIT License, meaning you are free to include this in any type of program -- However for entities that need a support contract, changes, enhancements and/or a commercial license please contact me at [http://nativescript.tools](http://nativescript.tools).

## Sample Snapshot

![Sample1](docs/tweenjs.gif)

## Usage

To use the module you just `require()` it:

```js
require('nativescript-tweenjs')
```

### Example (from the [demo app](demo/))

In this example we will tween a label's text and its height.

- `main-page.xml`

```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd" loaded="pageLoaded" class="page"
  xmlns:ui="nativescript-tweenjs">
  <StackLayout class="p-20">
    <Label text="{{ message }}" height="{{ bungee }}" class="t-20 text-center c-black bg-primary" textWrap="true"/>
  </StackLayout>
</Page>
```

- `main-page.ts`

```typescript
import * as observable from 'tns-core-modules/data/observable'
import * as pages from 'tns-core-modules/ui/page'
import { HelloWorldModel } from './main-view-model'

// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
  // Get the event sender
  let page = <pages.Page>args.object
  page.bindingContext = new HelloWorldModel()

  var tween = new TWEEN.Tween({ x: 50 })
    .to({ x: 400 }, 5000)
    .easing(TWEEN.Easing.Elastic.InOut)
    .onUpdate(function(object) {
      page.bindingContext.set('message', Math.round(object.x))
      page.bindingContext.set('bungee', object.x)
    })
    .start()
}
```

For more information on how to use `tween.js`, see the [tween.js documentation](https://github.com/tweenjs/tween.js).
