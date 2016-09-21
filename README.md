# cljs-canvas-backgrounds

Geometric repeating patterns for the HTML5 Canvas, written in ClojureScript.

They use [Fabric.js](http://fabricjs.com/) but are otherwise framework agnostic, so can be easily included in any JavaScript project.

## Usage

```
npm install cljs-canvas-backgrounds --save
```

Load the script at `resources/public/js/compiled/cljs_canvas_backgrounds.js` in your project.

This will give you a global `cljs_canvas_backgrounds` object, with the backgrounds as properties. Each has a `draw` function which you need to call, passing an options object, containing at least the `id` of your canvas element.

So, to initialize the checkerboard background:

`cljs_canvas_backgrounds.checkerboard.draw({ id: "my-canvas-id" });`

Replace the name to use a different background.

## Other options

|Background |`colors` |`size` |`spacing` |`width` |`height` |
|-----------|---------|-------|----------|--------|---------|
|`checkerboard` |Array of strings, max. 2 |Number (size of squares) ||||
|`polkadot` |Array of strings, max. 2 |Number (size of dots) |Number (space between dots) |||
|`mosaic` |Array of strings, no max. |||Number (width of triangles) |Number (height of triangles) |

## Running locally

Make sure you have [Leiningen](http://leiningen.org/) installed.

To get an interactive development environment, run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein do clean, cljsbuild once min

And open your browser in `resources/public/index.html`. You will not get live reloading, nor a REPL.
