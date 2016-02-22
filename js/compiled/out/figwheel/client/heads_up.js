// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17870__auto__ = [];
var len__17863__auto___23213 = arguments.length;
var i__17864__auto___23214 = (0);
while(true){
if((i__17864__auto___23214 < len__17863__auto___23213)){
args__17870__auto__.push((arguments[i__17864__auto___23214]));

var G__23215 = (i__17864__auto___23214 + (1));
i__17864__auto___23214 = G__23215;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((2) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17871__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23205_23216 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23206_23217 = null;
var count__23207_23218 = (0);
var i__23208_23219 = (0);
while(true){
if((i__23208_23219 < count__23207_23218)){
var k_23220 = cljs.core._nth.call(null,chunk__23206_23217,i__23208_23219);
e.setAttribute(cljs.core.name.call(null,k_23220),cljs.core.get.call(null,attrs,k_23220));

var G__23221 = seq__23205_23216;
var G__23222 = chunk__23206_23217;
var G__23223 = count__23207_23218;
var G__23224 = (i__23208_23219 + (1));
seq__23205_23216 = G__23221;
chunk__23206_23217 = G__23222;
count__23207_23218 = G__23223;
i__23208_23219 = G__23224;
continue;
} else {
var temp__4425__auto___23225 = cljs.core.seq.call(null,seq__23205_23216);
if(temp__4425__auto___23225){
var seq__23205_23226__$1 = temp__4425__auto___23225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23205_23226__$1)){
var c__17608__auto___23227 = cljs.core.chunk_first.call(null,seq__23205_23226__$1);
var G__23228 = cljs.core.chunk_rest.call(null,seq__23205_23226__$1);
var G__23229 = c__17608__auto___23227;
var G__23230 = cljs.core.count.call(null,c__17608__auto___23227);
var G__23231 = (0);
seq__23205_23216 = G__23228;
chunk__23206_23217 = G__23229;
count__23207_23218 = G__23230;
i__23208_23219 = G__23231;
continue;
} else {
var k_23232 = cljs.core.first.call(null,seq__23205_23226__$1);
e.setAttribute(cljs.core.name.call(null,k_23232),cljs.core.get.call(null,attrs,k_23232));

var G__23233 = cljs.core.next.call(null,seq__23205_23226__$1);
var G__23234 = null;
var G__23235 = (0);
var G__23236 = (0);
seq__23205_23216 = G__23233;
chunk__23206_23217 = G__23234;
count__23207_23218 = G__23235;
i__23208_23219 = G__23236;
continue;
}
} else {
}
}
break;
}

var seq__23209_23237 = cljs.core.seq.call(null,children);
var chunk__23210_23238 = null;
var count__23211_23239 = (0);
var i__23212_23240 = (0);
while(true){
if((i__23212_23240 < count__23211_23239)){
var ch_23241 = cljs.core._nth.call(null,chunk__23210_23238,i__23212_23240);
e.appendChild(ch_23241);

var G__23242 = seq__23209_23237;
var G__23243 = chunk__23210_23238;
var G__23244 = count__23211_23239;
var G__23245 = (i__23212_23240 + (1));
seq__23209_23237 = G__23242;
chunk__23210_23238 = G__23243;
count__23211_23239 = G__23244;
i__23212_23240 = G__23245;
continue;
} else {
var temp__4425__auto___23246 = cljs.core.seq.call(null,seq__23209_23237);
if(temp__4425__auto___23246){
var seq__23209_23247__$1 = temp__4425__auto___23246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23209_23247__$1)){
var c__17608__auto___23248 = cljs.core.chunk_first.call(null,seq__23209_23247__$1);
var G__23249 = cljs.core.chunk_rest.call(null,seq__23209_23247__$1);
var G__23250 = c__17608__auto___23248;
var G__23251 = cljs.core.count.call(null,c__17608__auto___23248);
var G__23252 = (0);
seq__23209_23237 = G__23249;
chunk__23210_23238 = G__23250;
count__23211_23239 = G__23251;
i__23212_23240 = G__23252;
continue;
} else {
var ch_23253 = cljs.core.first.call(null,seq__23209_23247__$1);
e.appendChild(ch_23253);

var G__23254 = cljs.core.next.call(null,seq__23209_23247__$1);
var G__23255 = null;
var G__23256 = (0);
var G__23257 = (0);
seq__23209_23237 = G__23254;
chunk__23210_23238 = G__23255;
count__23211_23239 = G__23256;
i__23212_23240 = G__23257;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23202){
var G__23203 = cljs.core.first.call(null,seq23202);
var seq23202__$1 = cljs.core.next.call(null,seq23202);
var G__23204 = cljs.core.first.call(null,seq23202__$1);
var seq23202__$2 = cljs.core.next.call(null,seq23202__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23203,G__23204,seq23202__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17718__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17719__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17720__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17721__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17722__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__,hierarchy__17722__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__,hierarchy__17722__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17722__auto__,method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_23258 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_23258.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23258.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_23258.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_23258);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__23259,st_map){
var map__23264 = p__23259;
var map__23264__$1 = ((((!((map__23264 == null)))?((((map__23264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23264):map__23264);
var container_el = cljs.core.get.call(null,map__23264__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23264,map__23264__$1,container_el){
return (function (p__23266){
var vec__23267 = p__23266;
var k = cljs.core.nth.call(null,vec__23267,(0),null);
var v = cljs.core.nth.call(null,vec__23267,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23264,map__23264__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__23268,dom_str){
var map__23271 = p__23268;
var map__23271__$1 = ((((!((map__23271 == null)))?((((map__23271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23271):map__23271);
var c = map__23271__$1;
var content_area_el = cljs.core.get.call(null,map__23271__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__23273){
var map__23276 = p__23273;
var map__23276__$1 = ((((!((map__23276 == null)))?((((map__23276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23276):map__23276);
var content_area_el = cljs.core.get.call(null,map__23276__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto__){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto__){
return (function (state_23319){
var state_val_23320 = (state_23319[(1)]);
if((state_val_23320 === (1))){
var inst_23304 = (state_23319[(7)]);
var inst_23304__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23305 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23306 = ["10px","10px","100%","68px","1.0"];
var inst_23307 = cljs.core.PersistentHashMap.fromArrays(inst_23305,inst_23306);
var inst_23308 = cljs.core.merge.call(null,inst_23307,style);
var inst_23309 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23304__$1,inst_23308);
var inst_23310 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23304__$1,msg);
var inst_23311 = cljs.core.async.timeout.call(null,(300));
var state_23319__$1 = (function (){var statearr_23321 = state_23319;
(statearr_23321[(8)] = inst_23310);

(statearr_23321[(7)] = inst_23304__$1);

(statearr_23321[(9)] = inst_23309);

return statearr_23321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23319__$1,(2),inst_23311);
} else {
if((state_val_23320 === (2))){
var inst_23304 = (state_23319[(7)]);
var inst_23313 = (state_23319[(2)]);
var inst_23314 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23315 = ["auto"];
var inst_23316 = cljs.core.PersistentHashMap.fromArrays(inst_23314,inst_23315);
var inst_23317 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23304,inst_23316);
var state_23319__$1 = (function (){var statearr_23322 = state_23319;
(statearr_23322[(10)] = inst_23313);

return statearr_23322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23319__$1,inst_23317);
} else {
return null;
}
}
});})(c__19061__auto__))
;
return ((function (switch__18949__auto__,c__19061__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18950__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18950__auto____0 = (function (){
var statearr_23326 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23326[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18950__auto__);

(statearr_23326[(1)] = (1));

return statearr_23326;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18950__auto____1 = (function (state_23319){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_23319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e23327){if((e23327 instanceof Object)){
var ex__18953__auto__ = e23327;
var statearr_23328_23330 = state_23319;
(statearr_23328_23330[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23331 = state_23319;
state_23319 = G__23331;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18950__auto__ = function(state_23319){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18950__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18950__auto____1.call(this,state_23319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18950__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18950__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto__))
})();
var state__19063__auto__ = (function (){var statearr_23329 = f__19062__auto__.call(null);
(statearr_23329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto__);

return statearr_23329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto__))
);

return c__19061__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__23333 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__23333,(0),null);
var ln = cljs.core.nth.call(null,vec__23333,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__23336 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__23336,(0),null);
var file_line = cljs.core.nth.call(null,vec__23336,(1),null);
var file_column = cljs.core.nth.call(null,vec__23336,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__23336,file_name,file_line,file_column){
return (function (p1__23334_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__23334_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__23336,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16805__auto__ = file_line;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var and__16793__auto__ = cause;
if(cljs.core.truth_(and__16793__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16793__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__23339 = figwheel.client.heads_up.ensure_container.call(null);
var map__23339__$1 = ((((!((map__23339 == null)))?((((map__23339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23339):map__23339);
var content_area_el = cljs.core.get.call(null,map__23339__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto__){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto__){
return (function (state_23387){
var state_val_23388 = (state_23387[(1)]);
if((state_val_23388 === (1))){
var inst_23370 = (state_23387[(7)]);
var inst_23370__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23371 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23372 = ["0.0"];
var inst_23373 = cljs.core.PersistentHashMap.fromArrays(inst_23371,inst_23372);
var inst_23374 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23370__$1,inst_23373);
var inst_23375 = cljs.core.async.timeout.call(null,(300));
var state_23387__$1 = (function (){var statearr_23389 = state_23387;
(statearr_23389[(8)] = inst_23374);

(statearr_23389[(7)] = inst_23370__$1);

return statearr_23389;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23387__$1,(2),inst_23375);
} else {
if((state_val_23388 === (2))){
var inst_23370 = (state_23387[(7)]);
var inst_23377 = (state_23387[(2)]);
var inst_23378 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23379 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23380 = cljs.core.PersistentHashMap.fromArrays(inst_23378,inst_23379);
var inst_23381 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23370,inst_23380);
var inst_23382 = cljs.core.async.timeout.call(null,(200));
var state_23387__$1 = (function (){var statearr_23390 = state_23387;
(statearr_23390[(9)] = inst_23381);

(statearr_23390[(10)] = inst_23377);

return statearr_23390;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23387__$1,(3),inst_23382);
} else {
if((state_val_23388 === (3))){
var inst_23370 = (state_23387[(7)]);
var inst_23384 = (state_23387[(2)]);
var inst_23385 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23370,"");
var state_23387__$1 = (function (){var statearr_23391 = state_23387;
(statearr_23391[(11)] = inst_23384);

return statearr_23391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23387__$1,inst_23385);
} else {
return null;
}
}
}
});})(c__19061__auto__))
;
return ((function (switch__18949__auto__,c__19061__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18950__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18950__auto____0 = (function (){
var statearr_23395 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23395[(0)] = figwheel$client$heads_up$clear_$_state_machine__18950__auto__);

(statearr_23395[(1)] = (1));

return statearr_23395;
});
var figwheel$client$heads_up$clear_$_state_machine__18950__auto____1 = (function (state_23387){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_23387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e23396){if((e23396 instanceof Object)){
var ex__18953__auto__ = e23396;
var statearr_23397_23399 = state_23387;
(statearr_23397_23399[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23400 = state_23387;
state_23387 = G__23400;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18950__auto__ = function(state_23387){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18950__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18950__auto____1.call(this,state_23387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18950__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18950__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto__))
})();
var state__19063__auto__ = (function (){var statearr_23398 = f__19062__auto__.call(null);
(statearr_23398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto__);

return statearr_23398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto__))
);

return c__19061__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto__){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto__){
return (function (state_23432){
var state_val_23433 = (state_23432[(1)]);
if((state_val_23433 === (1))){
var inst_23422 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23432__$1 = state_23432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23432__$1,(2),inst_23422);
} else {
if((state_val_23433 === (2))){
var inst_23424 = (state_23432[(2)]);
var inst_23425 = cljs.core.async.timeout.call(null,(400));
var state_23432__$1 = (function (){var statearr_23434 = state_23432;
(statearr_23434[(7)] = inst_23424);

return statearr_23434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23432__$1,(3),inst_23425);
} else {
if((state_val_23433 === (3))){
var inst_23427 = (state_23432[(2)]);
var inst_23428 = figwheel.client.heads_up.clear.call(null);
var state_23432__$1 = (function (){var statearr_23435 = state_23432;
(statearr_23435[(8)] = inst_23427);

return statearr_23435;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23432__$1,(4),inst_23428);
} else {
if((state_val_23433 === (4))){
var inst_23430 = (state_23432[(2)]);
var state_23432__$1 = state_23432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23432__$1,inst_23430);
} else {
return null;
}
}
}
}
});})(c__19061__auto__))
;
return ((function (switch__18949__auto__,c__19061__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18950__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18950__auto____0 = (function (){
var statearr_23439 = [null,null,null,null,null,null,null,null,null];
(statearr_23439[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18950__auto__);

(statearr_23439[(1)] = (1));

return statearr_23439;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18950__auto____1 = (function (state_23432){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_23432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e23440){if((e23440 instanceof Object)){
var ex__18953__auto__ = e23440;
var statearr_23441_23443 = state_23432;
(statearr_23441_23443[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23444 = state_23432;
state_23432 = G__23444;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18950__auto__ = function(state_23432){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18950__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18950__auto____1.call(this,state_23432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18950__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18950__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto__))
})();
var state__19063__auto__ = (function (){var statearr_23442 = f__19062__auto__.call(null);
(statearr_23442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto__);

return statearr_23442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto__))
);

return c__19061__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1456175399833