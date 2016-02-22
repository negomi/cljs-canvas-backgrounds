(ns html5-canvas-backgrounds.snowfall
  (:require [html5-canvas-backgrounds.utils :as utils]))

(def offset -10)
(def fall-angle 50)
(def smallest-radius 1)
(def largest-radius 4)
(def slowest-duration 7000)
(def fastest-duration 6000)

(defn rand-angle
  [max]
  (let [val (rand-int max)]
    (if (even? (rand-int 2)) (str "+=" val) (str "-=" val))))

(defn animate-drop
  [canvas drop]
  (utils/animate-shape! drop
                        {:left (rand-angle fall-angle), :top (.-height canvas)}
                        {:duration (utils/rand-range fastest-duration slowest-duration),
                         :easing utils/linear-easing,
                         :onComplete (partial utils/remove-from-canvas! canvas drop)}))

(defn build-drop
  [canvas]
  (let [drop (utils/new-shape "Circle" {:left (rand-int (.-width canvas)),
                                        :top offset,
                                        :radius (utils/rand-range smallest-radius largest-radius),
                                        :opacity (rand 1)})]
    (utils/set-gradient! drop "fill" {:type "radial",
                                      :x1 (/ (.-width drop) 2),
                                      :y1 (/ (.-height drop) 2),
                                      :x2 (/ (.-width drop) 2),
                                      :y2 (/ (.-height drop) 2),
                                      :r1 0,
                                      :r2 80,
                                      :colorStops {:0 "white",
                                                   :0.3 "transparent"}})))

(defn trigger-animation
  [canvas]
  (let [drop (build-drop canvas)]
    (utils/add-to-canvas! canvas drop)
    (animate-drop canvas drop)
    (.requestAnimationFrame js/window (partial trigger-animation canvas))))

(defn ^:export draw
  [opts]
  (let [{:keys [id]} (js->clj opts :keywordize-keys true)]
    (let [canvas (utils/new-canvas id)]
      (.requestAnimationFrame js/window (partial trigger-animation canvas)))))
