// Compiled by ClojureScript 1.7.170 {}
goog.provide('html5_canvas_backgrounds.checkerboard');
goog.require('cljs.core');
goog.require('html5_canvas_backgrounds.utils');
html5_canvas_backgrounds.checkerboard.defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(30),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","white"], null)], null);
html5_canvas_backgrounds.checkerboard.fill = (function html5_canvas_backgrounds$checkerboard$fill(row,col,colors){
if(cljs.core.even_QMARK_.call(null,((cljs.core.even_QMARK_.call(null,col))?row:(row - (1))))){
return cljs.core.get.call(null,colors,(0));
} else {
return cljs.core.get.call(null,colors,(1));
}
});
html5_canvas_backgrounds.checkerboard.build_square = (function html5_canvas_backgrounds$checkerboard$build_square(row,col,size,colors){
return html5_canvas_backgrounds.utils.new_shape.call(null,"Rect",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"top","top",-1856271961),(row * size),new cljs.core.Keyword(null,"left","left",-399115937),(col * size),new cljs.core.Keyword(null,"width","width",-384071477),size,new cljs.core.Keyword(null,"height","height",1025178622),size,new cljs.core.Keyword(null,"fill","fill",883462889),html5_canvas_backgrounds.checkerboard.fill.call(null,row,col,colors)], null));
});
html5_canvas_backgrounds.checkerboard.build_pattern = (function html5_canvas_backgrounds$checkerboard$build_pattern(var_args){
var args18027 = [];
var len__17863__auto___18032 = arguments.length;
var i__17864__auto___18033 = (0);
while(true){
if((i__17864__auto___18033 < len__17863__auto___18032)){
args18027.push((arguments[i__17864__auto___18033]));

var G__18034 = (i__17864__auto___18033 + (1));
i__17864__auto___18033 = G__18034;
continue;
} else {
}
break;
}

var G__18029 = args18027.length;
switch (G__18029) {
case 3:
return html5_canvas_backgrounds.checkerboard.build_pattern.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return html5_canvas_backgrounds.checkerboard.build_pattern.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18027.length)].join('')));

}
});

html5_canvas_backgrounds.checkerboard.build_pattern.cljs$core$IFn$_invoke$arity$3 = (function (square_size,colors,canvas){
return html5_canvas_backgrounds.checkerboard.build_pattern.call(null,square_size,colors,canvas,cljs.core.PersistentVector.EMPTY,(0));
});

html5_canvas_backgrounds.checkerboard.build_pattern.cljs$core$IFn$_invoke$arity$5 = (function (square_size,colors,canvas,squares,counter){
while(true){
if(cljs.core._EQ_.call(null,counter,html5_canvas_backgrounds.utils.total_units.call(null,canvas,square_size))){
return squares;
} else {
var coords = html5_canvas_backgrounds.utils.coords.call(null,html5_canvas_backgrounds.utils.width_in_units.call(null,canvas,square_size),counter);
var map__18030 = coords;
var map__18030__$1 = ((((!((map__18030 == null)))?((((map__18030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18030):map__18030);
var row = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__18030__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var G__18036 = square_size;
var G__18037 = colors;
var G__18038 = canvas;
var G__18039 = cljs.core.conj.call(null,squares,html5_canvas_backgrounds.checkerboard.build_square.call(null,row,col,square_size,colors));
var G__18040 = cljs.core.count.call(null,squares);
square_size = G__18036;
colors = G__18037;
canvas = G__18038;
squares = G__18039;
counter = G__18040;
continue;
}
break;
}
});

html5_canvas_backgrounds.checkerboard.build_pattern.cljs$lang$maxFixedArity = 5;
html5_canvas_backgrounds.checkerboard.draw = (function html5_canvas_backgrounds$checkerboard$draw(opts){
var map__18043 = cljs.core.js__GT_clj.call(null,opts,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__18043__$1 = ((((!((map__18043 == null)))?((((map__18043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18043):map__18043);
var id = cljs.core.get.call(null,map__18043__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var size = cljs.core.get.call(null,map__18043__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(html5_canvas_backgrounds.checkerboard.defaults));
var colors = cljs.core.get.call(null,map__18043__$1,new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(html5_canvas_backgrounds.checkerboard.defaults));
var canvas = html5_canvas_backgrounds.utils.new_canvas.call(null,id);
var pattern = html5_canvas_backgrounds.utils.new_group.call(null,html5_canvas_backgrounds.checkerboard.build_pattern.call(null,size,colors,canvas));
return html5_canvas_backgrounds.utils.add_to_canvas_BANG_.call(null,canvas,pattern);
});
goog.exportSymbol('html5_canvas_backgrounds.checkerboard.draw', html5_canvas_backgrounds.checkerboard.draw);

//# sourceMappingURL=checkerboard.js.map?rel=1456175393030