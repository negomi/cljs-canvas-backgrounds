// Compiled by ClojureScript 1.7.170 {}
goog.provide('html5_canvas_backgrounds.polkadot');
goog.require('cljs.core');
goog.require('html5_canvas_backgrounds.utils');
html5_canvas_backgrounds.polkadot.defaults = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),(10),new cljs.core.Keyword(null,"spacing","spacing",204422175),(60),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rgb(230, 103, 103)","rgb(254, 249, 231)"], null)], null);
html5_canvas_backgrounds.polkadot.offset = 0.1;
html5_canvas_backgrounds.polkadot.indent = 0.5;
html5_canvas_backgrounds.polkadot.left_pos = (function html5_canvas_backgrounds$polkadot$left_pos(row,col,spacing){
return (((cljs.core.even_QMARK_.call(null,row))?((col + html5_canvas_backgrounds.polkadot.indent) - html5_canvas_backgrounds.polkadot.offset):(col - html5_canvas_backgrounds.polkadot.offset)) * spacing);
});
html5_canvas_backgrounds.polkadot.build_dot = (function html5_canvas_backgrounds$polkadot$build_dot(row,col,size,spacing,colors){
return html5_canvas_backgrounds.utils.new_shape.call(null,"Circle",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),((row - html5_canvas_backgrounds.polkadot.offset) * spacing),new cljs.core.Keyword(null,"left","left",-399115937),html5_canvas_backgrounds.polkadot.left_pos.call(null,row,col,spacing),new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.get.call(null,colors,(1)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(size / (2))], null));
});
html5_canvas_backgrounds.polkadot.build_pattern = (function html5_canvas_backgrounds$polkadot$build_pattern(var_args){
var args18006 = [];
var len__17863__auto___18011 = arguments.length;
var i__17864__auto___18012 = (0);
while(true){
if((i__17864__auto___18012 < len__17863__auto___18011)){
args18006.push((arguments[i__17864__auto___18012]));

var G__18013 = (i__17864__auto___18012 + (1));
i__17864__auto___18012 = G__18013;
continue;
} else {
}
break;
}

var G__18008 = args18006.length;
switch (G__18008) {
case 4:
return html5_canvas_backgrounds.polkadot.build_pattern.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return html5_canvas_backgrounds.polkadot.build_pattern.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18006.length)].join('')));

}
});

html5_canvas_backgrounds.polkadot.build_pattern.cljs$core$IFn$_invoke$arity$4 = (function (dot_size,spacing,colors,canvas){
return html5_canvas_backgrounds.polkadot.build_pattern.call(null,dot_size,spacing,colors,canvas,cljs.core.PersistentVector.EMPTY,(0));
});

html5_canvas_backgrounds.polkadot.build_pattern.cljs$core$IFn$_invoke$arity$6 = (function (dot_size,spacing,colors,canvas,dots,counter){
while(true){
if(cljs.core._EQ_.call(null,counter,html5_canvas_backgrounds.utils.total_units.call(null,canvas,dot_size))){
return dots;
} else {
var coords = html5_canvas_backgrounds.utils.coords.call(null,html5_canvas_backgrounds.utils.width_in_units.call(null,canvas,dot_size),counter);
var map__18009 = coords;
var map__18009__$1 = ((((!((map__18009 == null)))?((((map__18009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18009):map__18009);
var row = cljs.core.get.call(null,map__18009__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.call(null,map__18009__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var G__18015 = dot_size;
var G__18016 = spacing;
var G__18017 = colors;
var G__18018 = canvas;
var G__18019 = cljs.core.conj.call(null,dots,html5_canvas_backgrounds.polkadot.build_dot.call(null,row,col,dot_size,spacing,colors));
var G__18020 = cljs.core.count.call(null,dots);
dot_size = G__18015;
spacing = G__18016;
colors = G__18017;
canvas = G__18018;
dots = G__18019;
counter = G__18020;
continue;
}
break;
}
});

html5_canvas_backgrounds.polkadot.build_pattern.cljs$lang$maxFixedArity = 6;
html5_canvas_backgrounds.polkadot.draw = (function html5_canvas_backgrounds$polkadot$draw(opts){
var map__18023 = cljs.core.js__GT_clj.call(null,opts,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__18023__$1 = ((((!((map__18023 == null)))?((((map__18023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18023):map__18023);
var id = cljs.core.get.call(null,map__18023__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var size = cljs.core.get.call(null,map__18023__$1,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(html5_canvas_backgrounds.polkadot.defaults));
var spacing = cljs.core.get.call(null,map__18023__$1,new cljs.core.Keyword(null,"spacing","spacing",204422175),new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(html5_canvas_backgrounds.polkadot.defaults));
var colors = cljs.core.get.call(null,map__18023__$1,new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(html5_canvas_backgrounds.polkadot.defaults));
var canvas = html5_canvas_backgrounds.utils.new_canvas.call(null,id);
var pattern = html5_canvas_backgrounds.utils.new_group.call(null,html5_canvas_backgrounds.polkadot.build_pattern.call(null,size,spacing,colors,canvas));
html5_canvas_backgrounds.utils.set_background_color_BANG_.call(null,canvas,cljs.core.first.call(null,colors));

return html5_canvas_backgrounds.utils.add_to_canvas_BANG_.call(null,canvas,pattern);
});
goog.exportSymbol('html5_canvas_backgrounds.polkadot.draw', html5_canvas_backgrounds.polkadot.draw);

//# sourceMappingURL=polkadot.js.map?rel=1456175392968