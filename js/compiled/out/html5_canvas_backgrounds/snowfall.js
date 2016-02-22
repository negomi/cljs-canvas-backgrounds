// Compiled by ClojureScript 1.7.170 {}
goog.provide('html5_canvas_backgrounds.snowfall');
goog.require('cljs.core');
goog.require('html5_canvas_backgrounds.utils');
html5_canvas_backgrounds.snowfall.offset = (-10);
html5_canvas_backgrounds.snowfall.fall_angle = (50);
html5_canvas_backgrounds.snowfall.smallest_radius = (1);
html5_canvas_backgrounds.snowfall.largest_radius = (4);
html5_canvas_backgrounds.snowfall.slowest_duration = (7000);
html5_canvas_backgrounds.snowfall.fastest_duration = (6000);
html5_canvas_backgrounds.snowfall.rand_angle = (function html5_canvas_backgrounds$snowfall$rand_angle(max){
var val = cljs.core.rand_int.call(null,max);
if(cljs.core.even_QMARK_.call(null,cljs.core.rand_int.call(null,(2)))){
return [cljs.core.str("+="),cljs.core.str(val)].join('');
} else {
return [cljs.core.str("-="),cljs.core.str(val)].join('');
}
});
html5_canvas_backgrounds.snowfall.animate_drop = (function html5_canvas_backgrounds$snowfall$animate_drop(canvas,drop){
return html5_canvas_backgrounds.utils.animate_shape_BANG_.call(null,drop,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),html5_canvas_backgrounds.snowfall.rand_angle.call(null,html5_canvas_backgrounds.snowfall.fall_angle),new cljs.core.Keyword(null,"top","top",-1856271961),canvas.height], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",1444101068),html5_canvas_backgrounds.utils.rand_range.call(null,html5_canvas_backgrounds.snowfall.fastest_duration,html5_canvas_backgrounds.snowfall.slowest_duration),new cljs.core.Keyword(null,"easing","easing",735372043),html5_canvas_backgrounds.utils.linear_easing,new cljs.core.Keyword(null,"onComplete","onComplete",-661010670),cljs.core.partial.call(null,html5_canvas_backgrounds.utils.remove_from_canvas_BANG_,canvas,drop)], null));
});
html5_canvas_backgrounds.snowfall.build_drop = (function html5_canvas_backgrounds$snowfall$build_drop(canvas){
var drop = html5_canvas_backgrounds.utils.new_shape.call(null,"Circle",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),cljs.core.rand_int.call(null,canvas.width),new cljs.core.Keyword(null,"top","top",-1856271961),html5_canvas_backgrounds.snowfall.offset,new cljs.core.Keyword(null,"radius","radius",-2073122258),html5_canvas_backgrounds.utils.rand_range.call(null,html5_canvas_backgrounds.snowfall.smallest_radius,html5_canvas_backgrounds.snowfall.largest_radius),new cljs.core.Keyword(null,"opacity","opacity",397153780),cljs.core.rand.call(null,(1))], null));
return html5_canvas_backgrounds.utils.set_gradient_BANG_.call(null,drop,"fill",new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"radial",new cljs.core.Keyword(null,"x1","x1",-1863922247),(drop.width / (2)),new cljs.core.Keyword(null,"y1","y1",589123466),(drop.height / (2)),new cljs.core.Keyword(null,"x2","x2",-1362513475),(drop.width / (2)),new cljs.core.Keyword(null,"y2","y2",-718691301),(drop.height / (2)),new cljs.core.Keyword(null,"r1","r1",690974900),(0),new cljs.core.Keyword(null,"r2","r2",252844174),(80),new cljs.core.Keyword(null,"colorStops","colorStops",-2112300650),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"0","0",351625802),"white",new cljs.core.Keyword(null,"0.3","0.3",1137093594),"transparent"], null)], null));
});
html5_canvas_backgrounds.snowfall.trigger_animation = (function html5_canvas_backgrounds$snowfall$trigger_animation(canvas){
var drop = html5_canvas_backgrounds.snowfall.build_drop.call(null,canvas);
html5_canvas_backgrounds.utils.add_to_canvas_BANG_.call(null,canvas,drop);

html5_canvas_backgrounds.snowfall.animate_drop.call(null,canvas,drop);

return window.requestAnimationFrame(cljs.core.partial.call(null,html5_canvas_backgrounds$snowfall$trigger_animation,canvas));
});
html5_canvas_backgrounds.snowfall.draw = (function html5_canvas_backgrounds$snowfall$draw(opts){
var map__18049 = cljs.core.js__GT_clj.call(null,opts,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var map__18049__$1 = ((((!((map__18049 == null)))?((((map__18049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18049):map__18049);
var id = cljs.core.get.call(null,map__18049__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var canvas = html5_canvas_backgrounds.utils.new_canvas.call(null,id);
return window.requestAnimationFrame(cljs.core.partial.call(null,html5_canvas_backgrounds.snowfall.trigger_animation,canvas));
});
goog.exportSymbol('html5_canvas_backgrounds.snowfall.draw', html5_canvas_backgrounds.snowfall.draw);

//# sourceMappingURL=snowfall.js.map?rel=1456175393086