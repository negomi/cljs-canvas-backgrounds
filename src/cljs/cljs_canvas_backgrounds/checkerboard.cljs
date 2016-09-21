(ns cljs-canvas-backgrounds.checkerboard
  (:require [cljs-canvas-backgrounds.utils :as utils]))

(def defaults {:size 30,
               :colors ["black" "white"]})

(defn fill
  [row col colors]
  (if (even? (if (even? col) row (- row 1))) (get colors 0) (get colors 1)))

(defn build-square
  [row col size colors]
  (utils/new-shape "Rect" {:top (* row size)
                           :left (* col size)
                           :width size
                           :height size
                           :fill (fill row col colors)}))

(defn build-pattern
  ([square-size colors canvas] (build-pattern square-size colors canvas [] 0))
  ([square-size colors canvas squares counter]
   (if (= counter (utils/total-units canvas square-size))
    squares
    (let [coords (utils/coords (utils/width-in-units canvas square-size) counter)
          {:keys [row col]} coords]
      (recur square-size
             colors
             canvas
             (conj squares (build-square row col square-size colors))
             (count squares))))))

(defn ^:export draw
  [opts]
  (let [{:keys [id size colors], :or {size (:size defaults),
                                      colors (:colors defaults)}}
        (js->clj opts :keywordize-keys true)]
    (let [canvas (utils/new-canvas id)
          pattern (utils/new-group (build-pattern size colors canvas))]
      (utils/add-to-canvas! canvas pattern))))
