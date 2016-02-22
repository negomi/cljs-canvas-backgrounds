// Compiled by ClojureScript 1.7.170 {}
goog.provide('html5_canvas_backgrounds.utils');
goog.require('cljs.core');
goog.require('cljsjs.fabric');
/**
 * Linear easing function.
 */
html5_canvas_backgrounds.utils.linear_easing = (function html5_canvas_backgrounds$utils$linear_easing(t,b,c,d){
return (b + ((c * t) / d));
});
/**
 * Return a random integer within a given range.
 */
html5_canvas_backgrounds.utils.rand_range = (function html5_canvas_backgrounds$utils$rand_range(min,max){
return (min + cljs.core.rand_int.call(null,(max - min)));
});
/**
 * Create new canvas.
 */
html5_canvas_backgrounds.utils.new_canvas = (function html5_canvas_backgrounds$utils$new_canvas(id){
return (new fabric.StaticCanvas(id));
});
/**
 * Create new shape.
 */
html5_canvas_backgrounds.utils.new_shape = (function html5_canvas_backgrounds$utils$new_shape(var_args){
var args__17870__auto__ = [];
var len__17863__auto___17972 = arguments.length;
var i__17864__auto___17973 = (0);
while(true){
if((i__17864__auto___17973 < len__17863__auto___17972)){
args__17870__auto__.push((arguments[i__17864__auto___17973]));

var G__17974 = (i__17864__auto___17973 + (1));
i__17864__auto___17973 = G__17974;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((2) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((2)),(0))):null);
return html5_canvas_backgrounds.utils.new_shape.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17871__auto__);
});

html5_canvas_backgrounds.utils.new_shape.cljs$core$IFn$_invoke$arity$variadic = (function (shape,opts,p__17969){
var vec__17970 = p__17969;
var coords = cljs.core.nth.call(null,vec__17970,(0),null);
var G__17971 = shape;
switch (G__17971) {
case "Line":
return (new fabric.Line(cljs.core.clj__GT_js.call(null,coords),cljs.core.clj__GT_js.call(null,opts)));

break;
case "Rect":
return (new fabric.Rect(cljs.core.clj__GT_js.call(null,opts)));

break;
case "Circle":
return (new fabric.Circle(cljs.core.clj__GT_js.call(null,opts)));

break;
case "Triangle":
return (new fabric.Triangle(cljs.core.clj__GT_js.call(null,opts)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(shape)].join('')));

}
});

html5_canvas_backgrounds.utils.new_shape.cljs$lang$maxFixedArity = (2);

html5_canvas_backgrounds.utils.new_shape.cljs$lang$applyTo = (function (seq17966){
var G__17967 = cljs.core.first.call(null,seq17966);
var seq17966__$1 = cljs.core.next.call(null,seq17966);
var G__17968 = cljs.core.first.call(null,seq17966__$1);
var seq17966__$2 = cljs.core.next.call(null,seq17966__$1);
return html5_canvas_backgrounds.utils.new_shape.cljs$core$IFn$_invoke$arity$variadic(G__17967,G__17968,seq17966__$2);
});
/**
 * Create new group from a vector.
 */
html5_canvas_backgrounds.utils.new_group = (function html5_canvas_backgrounds$utils$new_group(content){
return (new fabric.Group(cljs.core.clj__GT_js.call(null,content)));
});
/**
 * Calculate number of vertical units in a canvas.
 */
html5_canvas_backgrounds.utils.height_in_units = (function html5_canvas_backgrounds$utils$height_in_units(canvas,unit_size){
return ((3) + Math.round((canvas.height / unit_size)));
});
/**
 * Calculate number of horizontal units in a canvas.
 */
html5_canvas_backgrounds.utils.width_in_units = (function html5_canvas_backgrounds$utils$width_in_units(canvas,unit_size){
return ((3) + Math.round((canvas.width / unit_size)));
});
/**
 * Calculate total units in a canvas area.
 */
html5_canvas_backgrounds.utils.total_units = (function html5_canvas_backgrounds$utils$total_units(var_args){
var args17976 = [];
var len__17863__auto___17979 = arguments.length;
var i__17864__auto___17980 = (0);
while(true){
if((i__17864__auto___17980 < len__17863__auto___17979)){
args17976.push((arguments[i__17864__auto___17980]));

var G__17981 = (i__17864__auto___17980 + (1));
i__17864__auto___17980 = G__17981;
continue;
} else {
}
break;
}

var G__17978 = args17976.length;
switch (G__17978) {
case 2:
return html5_canvas_backgrounds.utils.total_units.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return html5_canvas_backgrounds.utils.total_units.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17976.length)].join('')));

}
});

html5_canvas_backgrounds.utils.total_units.cljs$core$IFn$_invoke$arity$2 = (function (canvas,unit_size){
return (html5_canvas_backgrounds.utils.height_in_units.call(null,canvas,unit_size) * html5_canvas_backgrounds.utils.width_in_units.call(null,canvas,unit_size));
});

html5_canvas_backgrounds.utils.total_units.cljs$core$IFn$_invoke$arity$3 = (function (canvas,width,height){
return (html5_canvas_backgrounds.utils.height_in_units.call(null,canvas,height) * html5_canvas_backgrounds.utils.width_in_units.call(null,canvas,width));
});

html5_canvas_backgrounds.utils.total_units.cljs$lang$maxFixedArity = 3;
/**
 * Calculate coordinates of a given unit.
 */
html5_canvas_backgrounds.utils.coords = (function html5_canvas_backgrounds$utils$coords(width,index){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),Math.floor((index / width)),new cljs.core.Keyword(null,"col","col",-1959363084),cljs.core.mod.call(null,index,width)], null);
});
/**
 * Set gradient for a given shape.
 */
html5_canvas_backgrounds.utils.set_gradient_BANG_ = (function html5_canvas_backgrounds$utils$set_gradient_BANG_(shape,type,opts){
return shape.setGradient(type,cljs.core.clj__GT_js.call(null,opts));
});
/**
 * Animate a given shape.
 */
html5_canvas_backgrounds.utils.animate_shape_BANG_ = (function html5_canvas_backgrounds$utils$animate_shape_BANG_(shape,props,opts){
return shape.animate(cljs.core.clj__GT_js.call(null,props),cljs.core.clj__GT_js.call(null,opts));
});
/**
 * Force render after change to canvas.
 */
html5_canvas_backgrounds.utils.render_all_BANG_ = (function html5_canvas_backgrounds$utils$render_all_BANG_(canvas){
return canvas.renderAll(canvas);
});
/**
 * Set canvas background color.
 */
html5_canvas_backgrounds.utils.set_background_color_BANG_ = (function html5_canvas_backgrounds$utils$set_background_color_BANG_(canvas,color){
return canvas.setBackgroundColor(color,cljs.core.partial.call(null,html5_canvas_backgrounds.utils.render_all_BANG_,canvas));
});
/**
 * Add shape(s) to canvas.
 */
html5_canvas_backgrounds.utils.add_to_canvas_BANG_ = (function html5_canvas_backgrounds$utils$add_to_canvas_BANG_(canvas,content){
return canvas.add(content);
});
/**
 * Remove shape(s) from canvas.
 */
html5_canvas_backgrounds.utils.remove_from_canvas_BANG_ = (function html5_canvas_backgrounds$utils$remove_from_canvas_BANG_(canvas,content){
return canvas.remove(content);
});

//# sourceMappingURL=utils.js.map?rel=1456175392758