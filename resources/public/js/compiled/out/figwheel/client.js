// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23447 = cljs.core._EQ_;
var expr__23448 = (function (){var or__16805__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e23451){if((e23451 instanceof Error)){
var e = e23451;
return false;
} else {
throw e23451;

}
}})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23447.call(null,"true",expr__23448))){
return true;
} else {
if(cljs.core.truth_(pred__23447.call(null,"false",expr__23448))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23448)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e23453){if((e23453 instanceof Error)){
var e = e23453;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e23453;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17870__auto__ = [];
var len__17863__auto___23455 = arguments.length;
var i__17864__auto___23456 = (0);
while(true){
if((i__17864__auto___23456 < len__17863__auto___23455)){
args__17870__auto__.push((arguments[i__17864__auto___23456]));

var G__23457 = (i__17864__auto___23456 + (1));
i__17864__auto___23456 = G__23457;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23454){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23454));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23458){
var map__23461 = p__23458;
var map__23461__$1 = ((((!((map__23461 == null)))?((((map__23461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23461):map__23461);
var message = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23461__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16805__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16793__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16793__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16793__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19061__auto___23623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___23623,ch){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___23623,ch){
return (function (state_23592){
var state_val_23593 = (state_23592[(1)]);
if((state_val_23593 === (7))){
var inst_23588 = (state_23592[(2)]);
var state_23592__$1 = state_23592;
var statearr_23594_23624 = state_23592__$1;
(statearr_23594_23624[(2)] = inst_23588);

(statearr_23594_23624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (1))){
var state_23592__$1 = state_23592;
var statearr_23595_23625 = state_23592__$1;
(statearr_23595_23625[(2)] = null);

(statearr_23595_23625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (4))){
var inst_23545 = (state_23592[(7)]);
var inst_23545__$1 = (state_23592[(2)]);
var state_23592__$1 = (function (){var statearr_23596 = state_23592;
(statearr_23596[(7)] = inst_23545__$1);

return statearr_23596;
})();
if(cljs.core.truth_(inst_23545__$1)){
var statearr_23597_23626 = state_23592__$1;
(statearr_23597_23626[(1)] = (5));

} else {
var statearr_23598_23627 = state_23592__$1;
(statearr_23598_23627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (15))){
var inst_23552 = (state_23592[(8)]);
var inst_23567 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23552);
var inst_23568 = cljs.core.first.call(null,inst_23567);
var inst_23569 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23568);
var inst_23570 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23569)].join('');
var inst_23571 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23570);
var state_23592__$1 = state_23592;
var statearr_23599_23628 = state_23592__$1;
(statearr_23599_23628[(2)] = inst_23571);

(statearr_23599_23628[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (13))){
var inst_23576 = (state_23592[(2)]);
var state_23592__$1 = state_23592;
var statearr_23600_23629 = state_23592__$1;
(statearr_23600_23629[(2)] = inst_23576);

(statearr_23600_23629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (6))){
var state_23592__$1 = state_23592;
var statearr_23601_23630 = state_23592__$1;
(statearr_23601_23630[(2)] = null);

(statearr_23601_23630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (17))){
var inst_23574 = (state_23592[(2)]);
var state_23592__$1 = state_23592;
var statearr_23602_23631 = state_23592__$1;
(statearr_23602_23631[(2)] = inst_23574);

(statearr_23602_23631[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (3))){
var inst_23590 = (state_23592[(2)]);
var state_23592__$1 = state_23592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23592__$1,inst_23590);
} else {
if((state_val_23593 === (12))){
var inst_23551 = (state_23592[(9)]);
var inst_23565 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23551,opts);
var state_23592__$1 = state_23592;
if(cljs.core.truth_(inst_23565)){
var statearr_23603_23632 = state_23592__$1;
(statearr_23603_23632[(1)] = (15));

} else {
var statearr_23604_23633 = state_23592__$1;
(statearr_23604_23633[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (2))){
var state_23592__$1 = state_23592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23592__$1,(4),ch);
} else {
if((state_val_23593 === (11))){
var inst_23552 = (state_23592[(8)]);
var inst_23557 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23558 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23552);
var inst_23559 = cljs.core.async.timeout.call(null,(1000));
var inst_23560 = [inst_23558,inst_23559];
var inst_23561 = (new cljs.core.PersistentVector(null,2,(5),inst_23557,inst_23560,null));
var state_23592__$1 = state_23592;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23592__$1,(14),inst_23561);
} else {
if((state_val_23593 === (9))){
var inst_23552 = (state_23592[(8)]);
var inst_23578 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23579 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23552);
var inst_23580 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23579);
var inst_23581 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23580)].join('');
var inst_23582 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23581);
var state_23592__$1 = (function (){var statearr_23605 = state_23592;
(statearr_23605[(10)] = inst_23578);

return statearr_23605;
})();
var statearr_23606_23634 = state_23592__$1;
(statearr_23606_23634[(2)] = inst_23582);

(statearr_23606_23634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (5))){
var inst_23545 = (state_23592[(7)]);
var inst_23547 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23548 = (new cljs.core.PersistentArrayMap(null,2,inst_23547,null));
var inst_23549 = (new cljs.core.PersistentHashSet(null,inst_23548,null));
var inst_23550 = figwheel.client.focus_msgs.call(null,inst_23549,inst_23545);
var inst_23551 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23550);
var inst_23552 = cljs.core.first.call(null,inst_23550);
var inst_23553 = figwheel.client.autoload_QMARK_.call(null);
var state_23592__$1 = (function (){var statearr_23607 = state_23592;
(statearr_23607[(9)] = inst_23551);

(statearr_23607[(8)] = inst_23552);

return statearr_23607;
})();
if(cljs.core.truth_(inst_23553)){
var statearr_23608_23635 = state_23592__$1;
(statearr_23608_23635[(1)] = (8));

} else {
var statearr_23609_23636 = state_23592__$1;
(statearr_23609_23636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (14))){
var inst_23563 = (state_23592[(2)]);
var state_23592__$1 = state_23592;
var statearr_23610_23637 = state_23592__$1;
(statearr_23610_23637[(2)] = inst_23563);

(statearr_23610_23637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (16))){
var state_23592__$1 = state_23592;
var statearr_23611_23638 = state_23592__$1;
(statearr_23611_23638[(2)] = null);

(statearr_23611_23638[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (10))){
var inst_23584 = (state_23592[(2)]);
var state_23592__$1 = (function (){var statearr_23612 = state_23592;
(statearr_23612[(11)] = inst_23584);

return statearr_23612;
})();
var statearr_23613_23639 = state_23592__$1;
(statearr_23613_23639[(2)] = null);

(statearr_23613_23639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23593 === (8))){
var inst_23551 = (state_23592[(9)]);
var inst_23555 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23551,opts);
var state_23592__$1 = state_23592;
if(cljs.core.truth_(inst_23555)){
var statearr_23614_23640 = state_23592__$1;
(statearr_23614_23640[(1)] = (11));

} else {
var statearr_23615_23641 = state_23592__$1;
(statearr_23615_23641[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19061__auto___23623,ch))
;
return ((function (switch__18949__auto__,c__19061__auto___23623,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18950__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18950__auto____0 = (function (){
var statearr_23619 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23619[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18950__auto__);

(statearr_23619[(1)] = (1));

return statearr_23619;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18950__auto____1 = (function (state_23592){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_23592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e23620){if((e23620 instanceof Object)){
var ex__18953__auto__ = e23620;
var statearr_23621_23642 = state_23592;
(statearr_23621_23642[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23643 = state_23592;
state_23592 = G__23643;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18950__auto__ = function(state_23592){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18950__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18950__auto____1.call(this,state_23592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18950__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18950__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___23623,ch))
})();
var state__19063__auto__ = (function (){var statearr_23622 = f__19062__auto__.call(null);
(statearr_23622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___23623);

return statearr_23622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___23623,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__23644_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__23644_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_23651 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_23651){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_23649 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_23650 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23650;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23649;
}}catch (e23648){if((e23648 instanceof Error)){
var e = e23648;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_23651], null));
} else {
var e = e23648;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_23651))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__23652){
var map__23659 = p__23652;
var map__23659__$1 = ((((!((map__23659 == null)))?((((map__23659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23659):map__23659);
var opts = map__23659__$1;
var build_id = cljs.core.get.call(null,map__23659__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__23659,map__23659__$1,opts,build_id){
return (function (p__23661){
var vec__23662 = p__23661;
var map__23663 = cljs.core.nth.call(null,vec__23662,(0),null);
var map__23663__$1 = ((((!((map__23663 == null)))?((((map__23663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23663):map__23663);
var msg = map__23663__$1;
var msg_name = cljs.core.get.call(null,map__23663__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23662,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__23662,map__23663,map__23663__$1,msg,msg_name,_,map__23659,map__23659__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__23662,map__23663,map__23663__$1,msg,msg_name,_,map__23659,map__23659__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__23659,map__23659__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__23669){
var vec__23670 = p__23669;
var map__23671 = cljs.core.nth.call(null,vec__23670,(0),null);
var map__23671__$1 = ((((!((map__23671 == null)))?((((map__23671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23671):map__23671);
var msg = map__23671__$1;
var msg_name = cljs.core.get.call(null,map__23671__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23670,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__23673){
var map__23683 = p__23673;
var map__23683__$1 = ((((!((map__23683 == null)))?((((map__23683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23683):map__23683);
var on_compile_warning = cljs.core.get.call(null,map__23683__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__23683__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__23683,map__23683__$1,on_compile_warning,on_compile_fail){
return (function (p__23685){
var vec__23686 = p__23685;
var map__23687 = cljs.core.nth.call(null,vec__23686,(0),null);
var map__23687__$1 = ((((!((map__23687 == null)))?((((map__23687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23687):map__23687);
var msg = map__23687__$1;
var msg_name = cljs.core.get.call(null,map__23687__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__23686,(1));
var pred__23689 = cljs.core._EQ_;
var expr__23690 = msg_name;
if(cljs.core.truth_(pred__23689.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__23690))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__23689.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__23690))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__23683,map__23683__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto__,msg_hist,msg_names,msg){
return (function (state_23906){
var state_val_23907 = (state_23906[(1)]);
if((state_val_23907 === (7))){
var inst_23830 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
if(cljs.core.truth_(inst_23830)){
var statearr_23908_23954 = state_23906__$1;
(statearr_23908_23954[(1)] = (8));

} else {
var statearr_23909_23955 = state_23906__$1;
(statearr_23909_23955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (20))){
var inst_23900 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23910_23956 = state_23906__$1;
(statearr_23910_23956[(2)] = inst_23900);

(statearr_23910_23956[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (27))){
var inst_23896 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23911_23957 = state_23906__$1;
(statearr_23911_23957[(2)] = inst_23896);

(statearr_23911_23957[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (1))){
var inst_23823 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_23906__$1 = state_23906;
if(cljs.core.truth_(inst_23823)){
var statearr_23912_23958 = state_23906__$1;
(statearr_23912_23958[(1)] = (2));

} else {
var statearr_23913_23959 = state_23906__$1;
(statearr_23913_23959[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (24))){
var inst_23898 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23914_23960 = state_23906__$1;
(statearr_23914_23960[(2)] = inst_23898);

(statearr_23914_23960[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (4))){
var inst_23904 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23906__$1,inst_23904);
} else {
if((state_val_23907 === (15))){
var inst_23902 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23915_23961 = state_23906__$1;
(statearr_23915_23961[(2)] = inst_23902);

(statearr_23915_23961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (21))){
var inst_23861 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23916_23962 = state_23906__$1;
(statearr_23916_23962[(2)] = inst_23861);

(statearr_23916_23962[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (31))){
var inst_23885 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_23906__$1 = state_23906;
if(cljs.core.truth_(inst_23885)){
var statearr_23917_23963 = state_23906__$1;
(statearr_23917_23963[(1)] = (34));

} else {
var statearr_23918_23964 = state_23906__$1;
(statearr_23918_23964[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (32))){
var inst_23894 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23919_23965 = state_23906__$1;
(statearr_23919_23965[(2)] = inst_23894);

(statearr_23919_23965[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (33))){
var inst_23883 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23920_23966 = state_23906__$1;
(statearr_23920_23966[(2)] = inst_23883);

(statearr_23920_23966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (13))){
var inst_23844 = figwheel.client.heads_up.clear.call(null);
var state_23906__$1 = state_23906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23906__$1,(16),inst_23844);
} else {
if((state_val_23907 === (22))){
var inst_23865 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23866 = figwheel.client.heads_up.append_message.call(null,inst_23865);
var state_23906__$1 = state_23906;
var statearr_23921_23967 = state_23906__$1;
(statearr_23921_23967[(2)] = inst_23866);

(statearr_23921_23967[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (36))){
var inst_23892 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23922_23968 = state_23906__$1;
(statearr_23922_23968[(2)] = inst_23892);

(statearr_23922_23968[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (29))){
var inst_23876 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23923_23969 = state_23906__$1;
(statearr_23923_23969[(2)] = inst_23876);

(statearr_23923_23969[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (6))){
var inst_23825 = (state_23906[(7)]);
var state_23906__$1 = state_23906;
var statearr_23924_23970 = state_23906__$1;
(statearr_23924_23970[(2)] = inst_23825);

(statearr_23924_23970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (28))){
var inst_23872 = (state_23906[(2)]);
var inst_23873 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23874 = figwheel.client.heads_up.display_warning.call(null,inst_23873);
var state_23906__$1 = (function (){var statearr_23925 = state_23906;
(statearr_23925[(8)] = inst_23872);

return statearr_23925;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23906__$1,(29),inst_23874);
} else {
if((state_val_23907 === (25))){
var inst_23870 = figwheel.client.heads_up.clear.call(null);
var state_23906__$1 = state_23906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23906__$1,(28),inst_23870);
} else {
if((state_val_23907 === (34))){
var inst_23887 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23906__$1 = state_23906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23906__$1,(37),inst_23887);
} else {
if((state_val_23907 === (17))){
var inst_23852 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23926_23971 = state_23906__$1;
(statearr_23926_23971[(2)] = inst_23852);

(statearr_23926_23971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (3))){
var inst_23842 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_23906__$1 = state_23906;
if(cljs.core.truth_(inst_23842)){
var statearr_23927_23972 = state_23906__$1;
(statearr_23927_23972[(1)] = (13));

} else {
var statearr_23928_23973 = state_23906__$1;
(statearr_23928_23973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (12))){
var inst_23838 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23929_23974 = state_23906__$1;
(statearr_23929_23974[(2)] = inst_23838);

(statearr_23929_23974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (2))){
var inst_23825 = (state_23906[(7)]);
var inst_23825__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_23906__$1 = (function (){var statearr_23930 = state_23906;
(statearr_23930[(7)] = inst_23825__$1);

return statearr_23930;
})();
if(cljs.core.truth_(inst_23825__$1)){
var statearr_23931_23975 = state_23906__$1;
(statearr_23931_23975[(1)] = (5));

} else {
var statearr_23932_23976 = state_23906__$1;
(statearr_23932_23976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (23))){
var inst_23868 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_23906__$1 = state_23906;
if(cljs.core.truth_(inst_23868)){
var statearr_23933_23977 = state_23906__$1;
(statearr_23933_23977[(1)] = (25));

} else {
var statearr_23934_23978 = state_23906__$1;
(statearr_23934_23978[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (35))){
var state_23906__$1 = state_23906;
var statearr_23935_23979 = state_23906__$1;
(statearr_23935_23979[(2)] = null);

(statearr_23935_23979[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (19))){
var inst_23863 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_23906__$1 = state_23906;
if(cljs.core.truth_(inst_23863)){
var statearr_23936_23980 = state_23906__$1;
(statearr_23936_23980[(1)] = (22));

} else {
var statearr_23937_23981 = state_23906__$1;
(statearr_23937_23981[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (11))){
var inst_23834 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23938_23982 = state_23906__$1;
(statearr_23938_23982[(2)] = inst_23834);

(statearr_23938_23982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (9))){
var inst_23836 = figwheel.client.heads_up.clear.call(null);
var state_23906__$1 = state_23906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23906__$1,(12),inst_23836);
} else {
if((state_val_23907 === (5))){
var inst_23827 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_23906__$1 = state_23906;
var statearr_23939_23983 = state_23906__$1;
(statearr_23939_23983[(2)] = inst_23827);

(statearr_23939_23983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (14))){
var inst_23854 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_23906__$1 = state_23906;
if(cljs.core.truth_(inst_23854)){
var statearr_23940_23984 = state_23906__$1;
(statearr_23940_23984[(1)] = (18));

} else {
var statearr_23941_23985 = state_23906__$1;
(statearr_23941_23985[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (26))){
var inst_23878 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_23906__$1 = state_23906;
if(cljs.core.truth_(inst_23878)){
var statearr_23942_23986 = state_23906__$1;
(statearr_23942_23986[(1)] = (30));

} else {
var statearr_23943_23987 = state_23906__$1;
(statearr_23943_23987[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (16))){
var inst_23846 = (state_23906[(2)]);
var inst_23847 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23848 = figwheel.client.format_messages.call(null,inst_23847);
var inst_23849 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23850 = figwheel.client.heads_up.display_error.call(null,inst_23848,inst_23849);
var state_23906__$1 = (function (){var statearr_23944 = state_23906;
(statearr_23944[(9)] = inst_23846);

return statearr_23944;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23906__$1,(17),inst_23850);
} else {
if((state_val_23907 === (30))){
var inst_23880 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23881 = figwheel.client.heads_up.display_warning.call(null,inst_23880);
var state_23906__$1 = state_23906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23906__$1,(33),inst_23881);
} else {
if((state_val_23907 === (10))){
var inst_23840 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23945_23988 = state_23906__$1;
(statearr_23945_23988[(2)] = inst_23840);

(statearr_23945_23988[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (18))){
var inst_23856 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23857 = figwheel.client.format_messages.call(null,inst_23856);
var inst_23858 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_23859 = figwheel.client.heads_up.display_error.call(null,inst_23857,inst_23858);
var state_23906__$1 = state_23906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23906__$1,(21),inst_23859);
} else {
if((state_val_23907 === (37))){
var inst_23889 = (state_23906[(2)]);
var state_23906__$1 = state_23906;
var statearr_23946_23989 = state_23906__$1;
(statearr_23946_23989[(2)] = inst_23889);

(statearr_23946_23989[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23907 === (8))){
var inst_23832 = figwheel.client.heads_up.flash_loaded.call(null);
var state_23906__$1 = state_23906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23906__$1,(11),inst_23832);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19061__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18949__auto__,c__19061__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18950__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18950__auto____0 = (function (){
var statearr_23950 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23950[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18950__auto__);

(statearr_23950[(1)] = (1));

return statearr_23950;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18950__auto____1 = (function (state_23906){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_23906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e23951){if((e23951 instanceof Object)){
var ex__18953__auto__ = e23951;
var statearr_23952_23990 = state_23906;
(statearr_23952_23990[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23991 = state_23906;
state_23906 = G__23991;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18950__auto__ = function(state_23906){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18950__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18950__auto____1.call(this,state_23906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18950__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18950__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto__,msg_hist,msg_names,msg))
})();
var state__19063__auto__ = (function (){var statearr_23953 = f__19062__auto__.call(null);
(statearr_23953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto__);

return statearr_23953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto__,msg_hist,msg_names,msg))
);

return c__19061__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19061__auto___24054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___24054,ch){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___24054,ch){
return (function (state_24037){
var state_val_24038 = (state_24037[(1)]);
if((state_val_24038 === (1))){
var state_24037__$1 = state_24037;
var statearr_24039_24055 = state_24037__$1;
(statearr_24039_24055[(2)] = null);

(statearr_24039_24055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (2))){
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24037__$1,(4),ch);
} else {
if((state_val_24038 === (3))){
var inst_24035 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24037__$1,inst_24035);
} else {
if((state_val_24038 === (4))){
var inst_24025 = (state_24037[(7)]);
var inst_24025__$1 = (state_24037[(2)]);
var state_24037__$1 = (function (){var statearr_24040 = state_24037;
(statearr_24040[(7)] = inst_24025__$1);

return statearr_24040;
})();
if(cljs.core.truth_(inst_24025__$1)){
var statearr_24041_24056 = state_24037__$1;
(statearr_24041_24056[(1)] = (5));

} else {
var statearr_24042_24057 = state_24037__$1;
(statearr_24042_24057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (5))){
var inst_24025 = (state_24037[(7)]);
var inst_24027 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24025);
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24037__$1,(8),inst_24027);
} else {
if((state_val_24038 === (6))){
var state_24037__$1 = state_24037;
var statearr_24043_24058 = state_24037__$1;
(statearr_24043_24058[(2)] = null);

(statearr_24043_24058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (7))){
var inst_24033 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
var statearr_24044_24059 = state_24037__$1;
(statearr_24044_24059[(2)] = inst_24033);

(statearr_24044_24059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (8))){
var inst_24029 = (state_24037[(2)]);
var state_24037__$1 = (function (){var statearr_24045 = state_24037;
(statearr_24045[(8)] = inst_24029);

return statearr_24045;
})();
var statearr_24046_24060 = state_24037__$1;
(statearr_24046_24060[(2)] = null);

(statearr_24046_24060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19061__auto___24054,ch))
;
return ((function (switch__18949__auto__,c__19061__auto___24054,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18950__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18950__auto____0 = (function (){
var statearr_24050 = [null,null,null,null,null,null,null,null,null];
(statearr_24050[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18950__auto__);

(statearr_24050[(1)] = (1));

return statearr_24050;
});
var figwheel$client$heads_up_plugin_$_state_machine__18950__auto____1 = (function (state_24037){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_24037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e24051){if((e24051 instanceof Object)){
var ex__18953__auto__ = e24051;
var statearr_24052_24061 = state_24037;
(statearr_24052_24061[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24062 = state_24037;
state_24037 = G__24062;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18950__auto__ = function(state_24037){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18950__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18950__auto____1.call(this,state_24037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18950__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18950__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___24054,ch))
})();
var state__19063__auto__ = (function (){var statearr_24053 = f__19062__auto__.call(null);
(statearr_24053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___24054);

return statearr_24053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___24054,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto__){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto__){
return (function (state_24083){
var state_val_24084 = (state_24083[(1)]);
if((state_val_24084 === (1))){
var inst_24078 = cljs.core.async.timeout.call(null,(3000));
var state_24083__$1 = state_24083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24083__$1,(2),inst_24078);
} else {
if((state_val_24084 === (2))){
var inst_24080 = (state_24083[(2)]);
var inst_24081 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24083__$1 = (function (){var statearr_24085 = state_24083;
(statearr_24085[(7)] = inst_24080);

return statearr_24085;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24083__$1,inst_24081);
} else {
return null;
}
}
});})(c__19061__auto__))
;
return ((function (switch__18949__auto__,c__19061__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18950__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18950__auto____0 = (function (){
var statearr_24089 = [null,null,null,null,null,null,null,null];
(statearr_24089[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18950__auto__);

(statearr_24089[(1)] = (1));

return statearr_24089;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18950__auto____1 = (function (state_24083){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_24083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e24090){if((e24090 instanceof Object)){
var ex__18953__auto__ = e24090;
var statearr_24091_24093 = state_24083;
(statearr_24091_24093[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24094 = state_24083;
state_24083 = G__24094;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18950__auto__ = function(state_24083){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18950__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18950__auto____1.call(this,state_24083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18950__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18950__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto__))
})();
var state__19063__auto__ = (function (){var statearr_24092 = f__19062__auto__.call(null);
(statearr_24092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto__);

return statearr_24092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto__))
);

return c__19061__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24095){
var map__24102 = p__24095;
var map__24102__$1 = ((((!((map__24102 == null)))?((((map__24102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24102):map__24102);
var ed = map__24102__$1;
var formatted_exception = cljs.core.get.call(null,map__24102__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24102__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24102__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24104_24108 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24105_24109 = null;
var count__24106_24110 = (0);
var i__24107_24111 = (0);
while(true){
if((i__24107_24111 < count__24106_24110)){
var msg_24112 = cljs.core._nth.call(null,chunk__24105_24109,i__24107_24111);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24112);

var G__24113 = seq__24104_24108;
var G__24114 = chunk__24105_24109;
var G__24115 = count__24106_24110;
var G__24116 = (i__24107_24111 + (1));
seq__24104_24108 = G__24113;
chunk__24105_24109 = G__24114;
count__24106_24110 = G__24115;
i__24107_24111 = G__24116;
continue;
} else {
var temp__4425__auto___24117 = cljs.core.seq.call(null,seq__24104_24108);
if(temp__4425__auto___24117){
var seq__24104_24118__$1 = temp__4425__auto___24117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24104_24118__$1)){
var c__17608__auto___24119 = cljs.core.chunk_first.call(null,seq__24104_24118__$1);
var G__24120 = cljs.core.chunk_rest.call(null,seq__24104_24118__$1);
var G__24121 = c__17608__auto___24119;
var G__24122 = cljs.core.count.call(null,c__17608__auto___24119);
var G__24123 = (0);
seq__24104_24108 = G__24120;
chunk__24105_24109 = G__24121;
count__24106_24110 = G__24122;
i__24107_24111 = G__24123;
continue;
} else {
var msg_24124 = cljs.core.first.call(null,seq__24104_24118__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24124);

var G__24125 = cljs.core.next.call(null,seq__24104_24118__$1);
var G__24126 = null;
var G__24127 = (0);
var G__24128 = (0);
seq__24104_24108 = G__24125;
chunk__24105_24109 = G__24126;
count__24106_24110 = G__24127;
i__24107_24111 = G__24128;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24129){
var map__24132 = p__24129;
var map__24132__$1 = ((((!((map__24132 == null)))?((((map__24132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24132):map__24132);
var w = map__24132__$1;
var message = cljs.core.get.call(null,map__24132__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16793__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16793__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16793__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24140 = cljs.core.seq.call(null,plugins);
var chunk__24141 = null;
var count__24142 = (0);
var i__24143 = (0);
while(true){
if((i__24143 < count__24142)){
var vec__24144 = cljs.core._nth.call(null,chunk__24141,i__24143);
var k = cljs.core.nth.call(null,vec__24144,(0),null);
var plugin = cljs.core.nth.call(null,vec__24144,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24146 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24140,chunk__24141,count__24142,i__24143,pl_24146,vec__24144,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24146.call(null,msg_hist);
});})(seq__24140,chunk__24141,count__24142,i__24143,pl_24146,vec__24144,k,plugin))
);
} else {
}

var G__24147 = seq__24140;
var G__24148 = chunk__24141;
var G__24149 = count__24142;
var G__24150 = (i__24143 + (1));
seq__24140 = G__24147;
chunk__24141 = G__24148;
count__24142 = G__24149;
i__24143 = G__24150;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24140);
if(temp__4425__auto__){
var seq__24140__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24140__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__24140__$1);
var G__24151 = cljs.core.chunk_rest.call(null,seq__24140__$1);
var G__24152 = c__17608__auto__;
var G__24153 = cljs.core.count.call(null,c__17608__auto__);
var G__24154 = (0);
seq__24140 = G__24151;
chunk__24141 = G__24152;
count__24142 = G__24153;
i__24143 = G__24154;
continue;
} else {
var vec__24145 = cljs.core.first.call(null,seq__24140__$1);
var k = cljs.core.nth.call(null,vec__24145,(0),null);
var plugin = cljs.core.nth.call(null,vec__24145,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24155 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24140,chunk__24141,count__24142,i__24143,pl_24155,vec__24145,k,plugin,seq__24140__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24155.call(null,msg_hist);
});})(seq__24140,chunk__24141,count__24142,i__24143,pl_24155,vec__24145,k,plugin,seq__24140__$1,temp__4425__auto__))
);
} else {
}

var G__24156 = cljs.core.next.call(null,seq__24140__$1);
var G__24157 = null;
var G__24158 = (0);
var G__24159 = (0);
seq__24140 = G__24156;
chunk__24141 = G__24157;
count__24142 = G__24158;
i__24143 = G__24159;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24160 = [];
var len__17863__auto___24163 = arguments.length;
var i__17864__auto___24164 = (0);
while(true){
if((i__17864__auto___24164 < len__17863__auto___24163)){
args24160.push((arguments[i__17864__auto___24164]));

var G__24165 = (i__17864__auto___24164 + (1));
i__17864__auto___24164 = G__24165;
continue;
} else {
}
break;
}

var G__24162 = args24160.length;
switch (G__24162) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24160.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24171 = arguments.length;
var i__17864__auto___24172 = (0);
while(true){
if((i__17864__auto___24172 < len__17863__auto___24171)){
args__17870__auto__.push((arguments[i__17864__auto___24172]));

var G__24173 = (i__17864__auto___24172 + (1));
i__17864__auto___24172 = G__24173;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24168){
var map__24169 = p__24168;
var map__24169__$1 = ((((!((map__24169 == null)))?((((map__24169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24169):map__24169);
var opts = map__24169__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24167){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24167));
});

//# sourceMappingURL=client.js.map?rel=1456175400505