(ns cljs-canvas-backgrounds.polkadot
  (:require [cljs-canvas-backgrounds.utils :as utils]))

(def defaults {:size 10,
               :spacing 60,
               :colors ["rgb(230, 103, 103)" "rgb(254, 249, 231)"]})

(def offset 0.1)
(def indent 0.5)

(defn left-pos
  [row col spacing]
  (* (if (even? row) (- (+ col indent) offset) (- col offset)) spacing))

(defn build-dot
  [row col size spacing colors]
  (utils/new-shape "Circle" {:top (* (- row offset) spacing)
                             :left (left-pos row col spacing)
                             :fill (get colors 1)
                             :radius (/ size 2)}))

(defn build-pattern
  ([dot-size spacing colors canvas] (build-pattern dot-size spacing colors canvas [] 0))
  ([dot-size spacing colors canvas dots counter]
   (if (= counter (utils/total-units canvas dot-size))
    dots
    (let [coords (utils/coords (utils/width-in-units canvas dot-size) counter)
          {:keys [row col]} coords]
      (recur dot-size
             spacing
             colors
             canvas
             (conj dots (build-dot row col dot-size spacing colors))
             (count dots))))))

(defn ^:export draw
  [opts]
  (let [{:keys [id size spacing colors], :or {size (:size defaults),
                                              spacing (:spacing defaults),
                                              colors (:colors defaults)}}
        (js->clj opts :keywordize-keys true)]
    (let [canvas (utils/new-canvas id)
          pattern (utils/new-group (build-pattern size spacing colors canvas))]
      (utils/set-background-color! canvas (first colors))
      (utils/add-to-canvas! canvas pattern))))
