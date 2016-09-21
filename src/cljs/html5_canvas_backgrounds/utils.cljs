(ns cljs-canvas-backgrounds.utils
  (:require cljsjs.fabric))

(defn linear-easing
  "Linear easing function."
  [t b c d]
  (+ b (/ (* c t) d)))

(defn rand-range
  "Return a random integer within a given range."
  [min max]
  (+ min (rand-int (- max min))))

(defn new-canvas
  "Create new canvas."
  [id]
  (js/fabric.StaticCanvas. id))

(defn new-shape
  "Create new shape."
  [shape opts & [coords]]
  (case shape
    "Line" (js/fabric.Line. (clj->js coords) (clj->js opts))
    "Rect" (js/fabric.Rect. (clj->js opts))
    "Circle" (js/fabric.Circle. (clj->js opts))
    "Triangle" (js/fabric.Triangle. (clj->js opts))))

(defn new-group
  "Create new group from a vector."
  [content]
  (js/fabric.Group. (clj->js content)))

(defn height-in-units
  "Calculate number of vertical units in a canvas."
  [canvas unit-size]
  (+ 3 (.round js/Math (/ (.-height canvas) unit-size))))

(defn width-in-units
  "Calculate number of horizontal units in a canvas."
  [canvas unit-size]
  (+ 3 (.round js/Math (/ (.-width canvas) unit-size))))

(defn total-units
  "Calculate total units in a canvas area."
  ([canvas unit-size]
   (* (height-in-units canvas unit-size) (width-in-units canvas unit-size)))
  ([canvas width height]
   (* (height-in-units canvas height) (width-in-units canvas width))))

(defn coords
  "Calculate coordinates of a given unit."
  [width index]
  {:row (.floor js/Math (/ index width)), :col (mod index width)})

(defn set-gradient!
  "Set gradient for a given shape."
  [shape type opts]
  (.setGradient shape type (clj->js opts)))

(defn animate-shape!
  "Animate a given shape."
  [shape props opts]
  (.animate shape (clj->js props) (clj->js opts)))

(defn render-all!
  "Force render after change to canvas."
  [canvas]
  (.renderAll canvas canvas))

(defn set-background-color!
  "Set canvas background color."
  [canvas color]
  (.setBackgroundColor canvas color (partial render-all! canvas)))

(defn add-to-canvas!
  "Add shape(s) to canvas."
  [canvas content]
  (.add canvas content))

(defn remove-from-canvas!
  "Remove shape(s) from canvas."
  [canvas content]
  (.remove canvas content))
