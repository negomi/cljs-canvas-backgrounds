(ns html5-canvas-backgrounds.utils
  (:require cljsjs.fabric))

(defn new-canvas
  [id]
  (js/fabric.StaticCanvas. id))

(defn new-shape
  [shape opts]
  (case shape
    "Rect" (js/fabric.Rect. (clj->js opts))
    "Circle" (js/fabric.Circle. (clj->js opts))
    "Triangle" (js/fabric.Triangle. (clj->js opts))))

(defn new-group
  [content]
  (js/fabric.Group. (clj->js content)))

(defn height-in-units
  [canvas unit-size]
  (+ 1 (.round js/Math (/ (.-height canvas) unit-size))))

(defn width-in-units
  [canvas unit-size]
  (+ 1 (.round js/Math (/ (.-width canvas) unit-size))))

(defn total-units
  [canvas unit-size]
  (* (height-in-units canvas unit-size) (width-in-units canvas unit-size)))

(defn coords
  [width index]
  {:row (.floor js/Math (/ index width)), :col (mod index width)})

(defn add-to-canvas!
  [canvas content]
  (.add canvas content))
