(ns html5-canvas-backgrounds.utils
  (:require cljsjs.fabric))

(defn new-canvas
  "Create new canvas."
  [id]
  (js/fabric.StaticCanvas. id))

(defn new-shape
  "Create new shape."
  [shape opts]
  (case shape
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
