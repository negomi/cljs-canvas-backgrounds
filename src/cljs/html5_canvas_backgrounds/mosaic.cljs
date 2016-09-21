(ns cljs-canvas-backgrounds.mosaic
  (:require [cljs-canvas-backgrounds.utils :as utils]))

(def defaults {:width 39,
               :height 49,
               :colors ["#4A7B6F"
                        "#EEEEE7"
                        "#CCDDDD"
                        "#9EAEB3"
                        "#412E8C"]})

(defn fill
  [pos colors]
  (get colors (mod pos (count colors))))

(defn left-pos
  [row col width]
  (if (even? row)
    (- (* col (/ width 2)) width)
    (- (* col (/ width 2)) (/ width 2))))

(defn build-triangle
  [row col pos width height colors]
  (utils/new-shape "Triangle" {:top (* row height)
                               :left (left-pos row col width)
                               :width width
                               :height height
                               :flipY (even? col) true false
                               :fill (fill pos colors)}))

(defn build-pattern
  ([width height colors canvas] (build-pattern width height colors canvas [] 0))
  ([width height colors canvas triangles counter]
   (if (= counter (utils/total-units canvas (/ width 2) height))
    triangles
    (let [coords (utils/coords (utils/width-in-units canvas (/ width 2)) counter)
          {:keys [row col]} coords]
      (recur width
             height
             colors
             canvas
             (conj triangles (build-triangle row col counter width height colors))
             (count triangles))))))

(defn ^:export draw
  [opts]
  (let [{:keys [id width height colors], :or {width (:width defaults),
                                              height (:height defaults)
                                              colors (:colors defaults)}}
        (js->clj opts :keywordize-keys true)]
    (let [canvas (utils/new-canvas id)
          pattern (utils/new-group (build-pattern width height colors canvas))]
      (utils/add-to-canvas! canvas pattern))))
