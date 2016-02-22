// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23028_23042 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23029_23043 = null;
var count__23030_23044 = (0);
var i__23031_23045 = (0);
while(true){
if((i__23031_23045 < count__23030_23044)){
var f_23046 = cljs.core._nth.call(null,chunk__23029_23043,i__23031_23045);
cljs.core.println.call(null,"  ",f_23046);

var G__23047 = seq__23028_23042;
var G__23048 = chunk__23029_23043;
var G__23049 = count__23030_23044;
var G__23050 = (i__23031_23045 + (1));
seq__23028_23042 = G__23047;
chunk__23029_23043 = G__23048;
count__23030_23044 = G__23049;
i__23031_23045 = G__23050;
continue;
} else {
var temp__4425__auto___23051 = cljs.core.seq.call(null,seq__23028_23042);
if(temp__4425__auto___23051){
var seq__23028_23052__$1 = temp__4425__auto___23051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23028_23052__$1)){
var c__17608__auto___23053 = cljs.core.chunk_first.call(null,seq__23028_23052__$1);
var G__23054 = cljs.core.chunk_rest.call(null,seq__23028_23052__$1);
var G__23055 = c__17608__auto___23053;
var G__23056 = cljs.core.count.call(null,c__17608__auto___23053);
var G__23057 = (0);
seq__23028_23042 = G__23054;
chunk__23029_23043 = G__23055;
count__23030_23044 = G__23056;
i__23031_23045 = G__23057;
continue;
} else {
var f_23058 = cljs.core.first.call(null,seq__23028_23052__$1);
cljs.core.println.call(null,"  ",f_23058);

var G__23059 = cljs.core.next.call(null,seq__23028_23052__$1);
var G__23060 = null;
var G__23061 = (0);
var G__23062 = (0);
seq__23028_23042 = G__23059;
chunk__23029_23043 = G__23060;
count__23030_23044 = G__23061;
i__23031_23045 = G__23062;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23063 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16805__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23063);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23063)))?cljs.core.second.call(null,arglists_23063):arglists_23063));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23032 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23033 = null;
var count__23034 = (0);
var i__23035 = (0);
while(true){
if((i__23035 < count__23034)){
var vec__23036 = cljs.core._nth.call(null,chunk__23033,i__23035);
var name = cljs.core.nth.call(null,vec__23036,(0),null);
var map__23037 = cljs.core.nth.call(null,vec__23036,(1),null);
var map__23037__$1 = ((((!((map__23037 == null)))?((((map__23037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23037):map__23037);
var doc = cljs.core.get.call(null,map__23037__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23037__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23064 = seq__23032;
var G__23065 = chunk__23033;
var G__23066 = count__23034;
var G__23067 = (i__23035 + (1));
seq__23032 = G__23064;
chunk__23033 = G__23065;
count__23034 = G__23066;
i__23035 = G__23067;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23032);
if(temp__4425__auto__){
var seq__23032__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23032__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__23032__$1);
var G__23068 = cljs.core.chunk_rest.call(null,seq__23032__$1);
var G__23069 = c__17608__auto__;
var G__23070 = cljs.core.count.call(null,c__17608__auto__);
var G__23071 = (0);
seq__23032 = G__23068;
chunk__23033 = G__23069;
count__23034 = G__23070;
i__23035 = G__23071;
continue;
} else {
var vec__23039 = cljs.core.first.call(null,seq__23032__$1);
var name = cljs.core.nth.call(null,vec__23039,(0),null);
var map__23040 = cljs.core.nth.call(null,vec__23039,(1),null);
var map__23040__$1 = ((((!((map__23040 == null)))?((((map__23040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23040):map__23040);
var doc = cljs.core.get.call(null,map__23040__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23040__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23072 = cljs.core.next.call(null,seq__23032__$1);
var G__23073 = null;
var G__23074 = (0);
var G__23075 = (0);
seq__23032 = G__23072;
chunk__23033 = G__23073;
count__23034 = G__23074;
i__23035 = G__23075;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1456175398672