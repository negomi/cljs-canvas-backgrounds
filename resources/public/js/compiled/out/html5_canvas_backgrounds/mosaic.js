// Compiled by ClojureScript 1.7.170 {}
goog.provide('html5_canvas_backgrounds.mosaic');
goog.require('cljs.core');
goog.require('html5_canvas_backgrounds.utils');
html5_canvas_backgrounds.mosaic.defaults = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(39),new cljs.core.Keyword(null,"height","height",1025178622),(49),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#4A7B6F","#EEEEE7","#CCDDDD","#9EAEB3","#412E8C"], null)], null);
html5_canvas_backgrounds.mosaic.fill = (function html5_canvas_backgrounds$mosaic$fill(pos,colors){
return cljs.core.get.call(null,colors,cljs.core.mod.call(null,pos,cljs.core.count.call(null,colors)));
});
html5_canvas_backgrounds.mosaic.left_pos = (function html5_canvas_backgrounds$mosaic$left_pos(row,col,width){
if(cljs.core.even_QMARK_.call(null,row)){
return ((col * (width / (2))) - width);
} else {
return ((col * (width / (2))) - (width / (2)));
}
});
html5_canvas_backgrounds.mosaic.build_triangle = (function html5_canvas_backgrounds$mosaic$build_triangle(row,col,pos,width,height,colors){
return html5_canvas_backgrounds.utils.new_shape.call(null,"Triangle",new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"top","top",-1856271961),(row * height),new cljs.core.Keyword(null,"left","left",-399115937),html5_canvas_backgrounds.mosaic.left_pos.call(null,row,col,width),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"flipY","flipY",624880256),cljs.core.even_QMARK_.call(null,col),true,false,new cljs.core.Keyword(null,"fill","fill",883462889),html5_canvas_backgrounds.mosaic.fill.call(null,pos,colors)], null));
});
html5_canvas_backgrounds.mosaic.build_pattern = (function html5_canvas_backgrounds$mosaic$build_pattern(var_args){
var args17985 = [];
var len__17863__auto___17990 = arguments.length;
var i__17864__auto___17991 = (0);
while(true){
if((i__17864__auto___17991 < len__17863__auto___17990)){
args17985.push((arguments[i__17864__auto___17991]));

var G__17992 = (i__17864__auto___17991 + (1));
i__17864__auto___17991 = G__17992;
continue;
} else {
}
break;
}

var G__17987 = args17985.length;
switch (G__17987) {
case 4:
return html5_canvas_backgrounds.mosaic.build_pattern.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return html5_canvas_backgrounds.mosaic.build_pattern.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17985.length)].join('')));

}
});

html5_canvas_backgrounds.mosaic.build_pattern.cljs$core$IFn$_invoke$arity$4 = (function (width,height,colors,canvas){
return html5_canvas_backgrounds.mosaic.build_pattern.call(null,width,height,colors,canvas,cljs.core.PersistentVector.EMPTY,(0));
});

html5_canvas_backgrounds.mosaic.build_pattern.cljs$core$IFn$_invoke$arity$6 = (function (width,height,colors,canvas,triangles,counter){
while(true){
if(cljs.core._EQ_.call(null,counter,html5_canvas_backgrounds.utils.total_units.call(null,canvas,(width / (2)),height))){
return triangles;
} else {
var coords = html5_canvas_backgrounds.utils.coords.call(null,html5_canvas_backgrounds.utils.width_in_units.call(null,canvas,(width / (2))),counter);
var map__17988 = coords;
var map__17988__$1 = ((((!((map__17988 == null)))?((((map__17988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17988):map__17988);
var row = cljs.core.get.call(null,map__17988__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__17988__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var G__17994 = width;
var G__17995 = height;
var G__17996 = colors;
var G__17997 = canvas;
var G__17998 = cljs.core.conj.call(null,triangles,html5_canvas_backgrounds.mosaic.build_triangle.call(null,row,col,counter,width,height,colors));
var G__17999 = cljs.core.count.call(null,triangles);
width = G__17994;
height = G__17995;
colors = G__17996;
canvas = G__17997;
triangles = G__17998;
counter = G__17999;
continue;
}
break;
}
});

html5_canvas_backgrounds.mosaic.build_pattern.cljs$lang$maxFixedArity = 6;
html5_canvas_backgrounds.mosaic.draw = (function html5_canvas_backgrounds$mosaic$draw(opts){
var map__18002 = cljs.core.js__GT_clj.call(null,opts,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__18002__$1 = ((((!((map__18002 == null)))?((((map__18002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18002):map__18002);
var id = cljs.core.get.call(null,map__18002__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var width = cljs.core.get.call(null,map__18002__$1,new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(html5_canvas_backgrounds.mosaic.defaults));
var height = cljs.core.get.call(null,map__18002__$1,new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(html5_canvas_backgrounds.mosaic.defaults));
var colors = cljs.core.get.call(null,map__18002__$1,new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(html5_canvas_backgrounds.mosaic.defaults));
var canvas = html5_canvas_backgrounds.utils.new_canvas.call(null,id);
var pattern = html5_canvas_backgrounds.utils.new_group.call(null,html5_canvas_backgrounds.mosaic.build_pattern.call(null,width,height,colors,canvas));
return html5_canvas_backgrounds.utils.add_to_canvas_BANG_.call(null,canvas,pattern);
});
goog.exportSymbol('html5_canvas_backgrounds.mosaic.draw', html5_canvas_backgrounds.mosaic.draw);

//# sourceMappingURL=mosaic.js.map?rel=1456175392887