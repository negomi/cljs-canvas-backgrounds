// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16805__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16805__auto__){
return or__16805__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16805__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22004_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22004_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22009 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22010 = null;
var count__22011 = (0);
var i__22012 = (0);
while(true){
if((i__22012 < count__22011)){
var n = cljs.core._nth.call(null,chunk__22010,i__22012);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22013 = seq__22009;
var G__22014 = chunk__22010;
var G__22015 = count__22011;
var G__22016 = (i__22012 + (1));
seq__22009 = G__22013;
chunk__22010 = G__22014;
count__22011 = G__22015;
i__22012 = G__22016;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22009);
if(temp__4425__auto__){
var seq__22009__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22009__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__22009__$1);
var G__22017 = cljs.core.chunk_rest.call(null,seq__22009__$1);
var G__22018 = c__17608__auto__;
var G__22019 = cljs.core.count.call(null,c__17608__auto__);
var G__22020 = (0);
seq__22009 = G__22017;
chunk__22010 = G__22018;
count__22011 = G__22019;
i__22012 = G__22020;
continue;
} else {
var n = cljs.core.first.call(null,seq__22009__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22021 = cljs.core.next.call(null,seq__22009__$1);
var G__22022 = null;
var G__22023 = (0);
var G__22024 = (0);
seq__22009 = G__22021;
chunk__22010 = G__22022;
count__22011 = G__22023;
i__22012 = G__22024;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22063_22070 = cljs.core.seq.call(null,deps);
var chunk__22064_22071 = null;
var count__22065_22072 = (0);
var i__22066_22073 = (0);
while(true){
if((i__22066_22073 < count__22065_22072)){
var dep_22074 = cljs.core._nth.call(null,chunk__22064_22071,i__22066_22073);
topo_sort_helper_STAR_.call(null,dep_22074,(depth + (1)),state);

var G__22075 = seq__22063_22070;
var G__22076 = chunk__22064_22071;
var G__22077 = count__22065_22072;
var G__22078 = (i__22066_22073 + (1));
seq__22063_22070 = G__22075;
chunk__22064_22071 = G__22076;
count__22065_22072 = G__22077;
i__22066_22073 = G__22078;
continue;
} else {
var temp__4425__auto___22079 = cljs.core.seq.call(null,seq__22063_22070);
if(temp__4425__auto___22079){
var seq__22063_22080__$1 = temp__4425__auto___22079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22063_22080__$1)){
var c__17608__auto___22081 = cljs.core.chunk_first.call(null,seq__22063_22080__$1);
var G__22082 = cljs.core.chunk_rest.call(null,seq__22063_22080__$1);
var G__22083 = c__17608__auto___22081;
var G__22084 = cljs.core.count.call(null,c__17608__auto___22081);
var G__22085 = (0);
seq__22063_22070 = G__22082;
chunk__22064_22071 = G__22083;
count__22065_22072 = G__22084;
i__22066_22073 = G__22085;
continue;
} else {
var dep_22086 = cljs.core.first.call(null,seq__22063_22080__$1);
topo_sort_helper_STAR_.call(null,dep_22086,(depth + (1)),state);

var G__22087 = cljs.core.next.call(null,seq__22063_22080__$1);
var G__22088 = null;
var G__22089 = (0);
var G__22090 = (0);
seq__22063_22070 = G__22087;
chunk__22064_22071 = G__22088;
count__22065_22072 = G__22089;
i__22066_22073 = G__22090;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22067){
var vec__22069 = p__22067;
var x = cljs.core.nth.call(null,vec__22069,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22069,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22069,x,xs,get_deps__$1){
return (function (p1__22025_SHARP_){
return clojure.set.difference.call(null,p1__22025_SHARP_,x);
});})(vec__22069,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22103 = cljs.core.seq.call(null,provides);
var chunk__22104 = null;
var count__22105 = (0);
var i__22106 = (0);
while(true){
if((i__22106 < count__22105)){
var prov = cljs.core._nth.call(null,chunk__22104,i__22106);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22107_22115 = cljs.core.seq.call(null,requires);
var chunk__22108_22116 = null;
var count__22109_22117 = (0);
var i__22110_22118 = (0);
while(true){
if((i__22110_22118 < count__22109_22117)){
var req_22119 = cljs.core._nth.call(null,chunk__22108_22116,i__22110_22118);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22119,prov);

var G__22120 = seq__22107_22115;
var G__22121 = chunk__22108_22116;
var G__22122 = count__22109_22117;
var G__22123 = (i__22110_22118 + (1));
seq__22107_22115 = G__22120;
chunk__22108_22116 = G__22121;
count__22109_22117 = G__22122;
i__22110_22118 = G__22123;
continue;
} else {
var temp__4425__auto___22124 = cljs.core.seq.call(null,seq__22107_22115);
if(temp__4425__auto___22124){
var seq__22107_22125__$1 = temp__4425__auto___22124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22107_22125__$1)){
var c__17608__auto___22126 = cljs.core.chunk_first.call(null,seq__22107_22125__$1);
var G__22127 = cljs.core.chunk_rest.call(null,seq__22107_22125__$1);
var G__22128 = c__17608__auto___22126;
var G__22129 = cljs.core.count.call(null,c__17608__auto___22126);
var G__22130 = (0);
seq__22107_22115 = G__22127;
chunk__22108_22116 = G__22128;
count__22109_22117 = G__22129;
i__22110_22118 = G__22130;
continue;
} else {
var req_22131 = cljs.core.first.call(null,seq__22107_22125__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22131,prov);

var G__22132 = cljs.core.next.call(null,seq__22107_22125__$1);
var G__22133 = null;
var G__22134 = (0);
var G__22135 = (0);
seq__22107_22115 = G__22132;
chunk__22108_22116 = G__22133;
count__22109_22117 = G__22134;
i__22110_22118 = G__22135;
continue;
}
} else {
}
}
break;
}

var G__22136 = seq__22103;
var G__22137 = chunk__22104;
var G__22138 = count__22105;
var G__22139 = (i__22106 + (1));
seq__22103 = G__22136;
chunk__22104 = G__22137;
count__22105 = G__22138;
i__22106 = G__22139;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22103);
if(temp__4425__auto__){
var seq__22103__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22103__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__22103__$1);
var G__22140 = cljs.core.chunk_rest.call(null,seq__22103__$1);
var G__22141 = c__17608__auto__;
var G__22142 = cljs.core.count.call(null,c__17608__auto__);
var G__22143 = (0);
seq__22103 = G__22140;
chunk__22104 = G__22141;
count__22105 = G__22142;
i__22106 = G__22143;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22103__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22111_22144 = cljs.core.seq.call(null,requires);
var chunk__22112_22145 = null;
var count__22113_22146 = (0);
var i__22114_22147 = (0);
while(true){
if((i__22114_22147 < count__22113_22146)){
var req_22148 = cljs.core._nth.call(null,chunk__22112_22145,i__22114_22147);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22148,prov);

var G__22149 = seq__22111_22144;
var G__22150 = chunk__22112_22145;
var G__22151 = count__22113_22146;
var G__22152 = (i__22114_22147 + (1));
seq__22111_22144 = G__22149;
chunk__22112_22145 = G__22150;
count__22113_22146 = G__22151;
i__22114_22147 = G__22152;
continue;
} else {
var temp__4425__auto___22153__$1 = cljs.core.seq.call(null,seq__22111_22144);
if(temp__4425__auto___22153__$1){
var seq__22111_22154__$1 = temp__4425__auto___22153__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22111_22154__$1)){
var c__17608__auto___22155 = cljs.core.chunk_first.call(null,seq__22111_22154__$1);
var G__22156 = cljs.core.chunk_rest.call(null,seq__22111_22154__$1);
var G__22157 = c__17608__auto___22155;
var G__22158 = cljs.core.count.call(null,c__17608__auto___22155);
var G__22159 = (0);
seq__22111_22144 = G__22156;
chunk__22112_22145 = G__22157;
count__22113_22146 = G__22158;
i__22114_22147 = G__22159;
continue;
} else {
var req_22160 = cljs.core.first.call(null,seq__22111_22154__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22160,prov);

var G__22161 = cljs.core.next.call(null,seq__22111_22154__$1);
var G__22162 = null;
var G__22163 = (0);
var G__22164 = (0);
seq__22111_22144 = G__22161;
chunk__22112_22145 = G__22162;
count__22113_22146 = G__22163;
i__22114_22147 = G__22164;
continue;
}
} else {
}
}
break;
}

var G__22165 = cljs.core.next.call(null,seq__22103__$1);
var G__22166 = null;
var G__22167 = (0);
var G__22168 = (0);
seq__22103 = G__22165;
chunk__22104 = G__22166;
count__22105 = G__22167;
i__22106 = G__22168;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22173_22177 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22174_22178 = null;
var count__22175_22179 = (0);
var i__22176_22180 = (0);
while(true){
if((i__22176_22180 < count__22175_22179)){
var ns_22181 = cljs.core._nth.call(null,chunk__22174_22178,i__22176_22180);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22181);

var G__22182 = seq__22173_22177;
var G__22183 = chunk__22174_22178;
var G__22184 = count__22175_22179;
var G__22185 = (i__22176_22180 + (1));
seq__22173_22177 = G__22182;
chunk__22174_22178 = G__22183;
count__22175_22179 = G__22184;
i__22176_22180 = G__22185;
continue;
} else {
var temp__4425__auto___22186 = cljs.core.seq.call(null,seq__22173_22177);
if(temp__4425__auto___22186){
var seq__22173_22187__$1 = temp__4425__auto___22186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22173_22187__$1)){
var c__17608__auto___22188 = cljs.core.chunk_first.call(null,seq__22173_22187__$1);
var G__22189 = cljs.core.chunk_rest.call(null,seq__22173_22187__$1);
var G__22190 = c__17608__auto___22188;
var G__22191 = cljs.core.count.call(null,c__17608__auto___22188);
var G__22192 = (0);
seq__22173_22177 = G__22189;
chunk__22174_22178 = G__22190;
count__22175_22179 = G__22191;
i__22176_22180 = G__22192;
continue;
} else {
var ns_22193 = cljs.core.first.call(null,seq__22173_22187__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22193);

var G__22194 = cljs.core.next.call(null,seq__22173_22187__$1);
var G__22195 = null;
var G__22196 = (0);
var G__22197 = (0);
seq__22173_22177 = G__22194;
chunk__22174_22178 = G__22195;
count__22175_22179 = G__22196;
i__22176_22180 = G__22197;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16805__auto__ = goog.require__;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22198__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22198 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22199__i = 0, G__22199__a = new Array(arguments.length -  0);
while (G__22199__i < G__22199__a.length) {G__22199__a[G__22199__i] = arguments[G__22199__i + 0]; ++G__22199__i;}
  args = new cljs.core.IndexedSeq(G__22199__a,0);
} 
return G__22198__delegate.call(this,args);};
G__22198.cljs$lang$maxFixedArity = 0;
G__22198.cljs$lang$applyTo = (function (arglist__22200){
var args = cljs.core.seq(arglist__22200);
return G__22198__delegate(args);
});
G__22198.cljs$core$IFn$_invoke$arity$variadic = G__22198__delegate;
return G__22198;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22202 = cljs.core._EQ_;
var expr__22203 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22202.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22203))){
var path_parts = ((function (pred__22202,expr__22203){
return (function (p1__22201_SHARP_){
return clojure.string.split.call(null,p1__22201_SHARP_,/[\/\\]/);
});})(pred__22202,expr__22203))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22202,expr__22203){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22205){if((e22205 instanceof Error)){
var e = e22205;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22205;

}
}})());
});
;})(path_parts,sep,root,pred__22202,expr__22203))
} else {
if(cljs.core.truth_(pred__22202.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22203))){
return ((function (pred__22202,expr__22203){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22202,expr__22203){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22202,expr__22203))
);

return deferred.addErrback(((function (deferred,pred__22202,expr__22203){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22202,expr__22203))
);
});
;})(pred__22202,expr__22203))
} else {
return ((function (pred__22202,expr__22203){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22202,expr__22203))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22206,callback){
var map__22209 = p__22206;
var map__22209__$1 = ((((!((map__22209 == null)))?((((map__22209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22209):map__22209);
var file_msg = map__22209__$1;
var request_url = cljs.core.get.call(null,map__22209__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22209,map__22209__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22209,map__22209__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto__){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto__){
return (function (state_22233){
var state_val_22234 = (state_22233[(1)]);
if((state_val_22234 === (7))){
var inst_22229 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
var statearr_22235_22255 = state_22233__$1;
(statearr_22235_22255[(2)] = inst_22229);

(statearr_22235_22255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (1))){
var state_22233__$1 = state_22233;
var statearr_22236_22256 = state_22233__$1;
(statearr_22236_22256[(2)] = null);

(statearr_22236_22256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (4))){
var inst_22213 = (state_22233[(7)]);
var inst_22213__$1 = (state_22233[(2)]);
var state_22233__$1 = (function (){var statearr_22237 = state_22233;
(statearr_22237[(7)] = inst_22213__$1);

return statearr_22237;
})();
if(cljs.core.truth_(inst_22213__$1)){
var statearr_22238_22257 = state_22233__$1;
(statearr_22238_22257[(1)] = (5));

} else {
var statearr_22239_22258 = state_22233__$1;
(statearr_22239_22258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (6))){
var state_22233__$1 = state_22233;
var statearr_22240_22259 = state_22233__$1;
(statearr_22240_22259[(2)] = null);

(statearr_22240_22259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (3))){
var inst_22231 = (state_22233[(2)]);
var state_22233__$1 = state_22233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22233__$1,inst_22231);
} else {
if((state_val_22234 === (2))){
var state_22233__$1 = state_22233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22233__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22234 === (11))){
var inst_22225 = (state_22233[(2)]);
var state_22233__$1 = (function (){var statearr_22241 = state_22233;
(statearr_22241[(8)] = inst_22225);

return statearr_22241;
})();
var statearr_22242_22260 = state_22233__$1;
(statearr_22242_22260[(2)] = null);

(statearr_22242_22260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (9))){
var inst_22219 = (state_22233[(9)]);
var inst_22217 = (state_22233[(10)]);
var inst_22221 = inst_22219.call(null,inst_22217);
var state_22233__$1 = state_22233;
var statearr_22243_22261 = state_22233__$1;
(statearr_22243_22261[(2)] = inst_22221);

(statearr_22243_22261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (5))){
var inst_22213 = (state_22233[(7)]);
var inst_22215 = figwheel.client.file_reloading.blocking_load.call(null,inst_22213);
var state_22233__$1 = state_22233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22233__$1,(8),inst_22215);
} else {
if((state_val_22234 === (10))){
var inst_22217 = (state_22233[(10)]);
var inst_22223 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22217);
var state_22233__$1 = state_22233;
var statearr_22244_22262 = state_22233__$1;
(statearr_22244_22262[(2)] = inst_22223);

(statearr_22244_22262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22234 === (8))){
var inst_22213 = (state_22233[(7)]);
var inst_22219 = (state_22233[(9)]);
var inst_22217 = (state_22233[(2)]);
var inst_22218 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22219__$1 = cljs.core.get.call(null,inst_22218,inst_22213);
var state_22233__$1 = (function (){var statearr_22245 = state_22233;
(statearr_22245[(9)] = inst_22219__$1);

(statearr_22245[(10)] = inst_22217);

return statearr_22245;
})();
if(cljs.core.truth_(inst_22219__$1)){
var statearr_22246_22263 = state_22233__$1;
(statearr_22246_22263[(1)] = (9));

} else {
var statearr_22247_22264 = state_22233__$1;
(statearr_22247_22264[(1)] = (10));

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
});})(c__19061__auto__))
;
return ((function (switch__18949__auto__,c__19061__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18950__auto__ = null;
var figwheel$client$file_reloading$state_machine__18950__auto____0 = (function (){
var statearr_22251 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22251[(0)] = figwheel$client$file_reloading$state_machine__18950__auto__);

(statearr_22251[(1)] = (1));

return statearr_22251;
});
var figwheel$client$file_reloading$state_machine__18950__auto____1 = (function (state_22233){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_22233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e22252){if((e22252 instanceof Object)){
var ex__18953__auto__ = e22252;
var statearr_22253_22265 = state_22233;
(statearr_22253_22265[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22266 = state_22233;
state_22233 = G__22266;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18950__auto__ = function(state_22233){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18950__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18950__auto____1.call(this,state_22233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18950__auto____0;
figwheel$client$file_reloading$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18950__auto____1;
return figwheel$client$file_reloading$state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto__))
})();
var state__19063__auto__ = (function (){var statearr_22254 = f__19062__auto__.call(null);
(statearr_22254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto__);

return statearr_22254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto__))
);

return c__19061__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22267,callback){
var map__22270 = p__22267;
var map__22270__$1 = ((((!((map__22270 == null)))?((((map__22270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22270):map__22270);
var file_msg = map__22270__$1;
var namespace = cljs.core.get.call(null,map__22270__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22270,map__22270__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22270,map__22270__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22272){
var map__22275 = p__22272;
var map__22275__$1 = ((((!((map__22275 == null)))?((((map__22275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22275):map__22275);
var file_msg = map__22275__$1;
var namespace = cljs.core.get.call(null,map__22275__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16793__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16793__auto__){
var or__16805__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var or__16805__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16805__auto____$1)){
return or__16805__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16793__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22277,callback){
var map__22280 = p__22277;
var map__22280__$1 = ((((!((map__22280 == null)))?((((map__22280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22280):map__22280);
var file_msg = map__22280__$1;
var request_url = cljs.core.get.call(null,map__22280__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22280__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19061__auto___22368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___22368,out){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___22368,out){
return (function (state_22350){
var state_val_22351 = (state_22350[(1)]);
if((state_val_22351 === (1))){
var inst_22328 = cljs.core.nth.call(null,files,(0),null);
var inst_22329 = cljs.core.nthnext.call(null,files,(1));
var inst_22330 = files;
var state_22350__$1 = (function (){var statearr_22352 = state_22350;
(statearr_22352[(7)] = inst_22330);

(statearr_22352[(8)] = inst_22329);

(statearr_22352[(9)] = inst_22328);

return statearr_22352;
})();
var statearr_22353_22369 = state_22350__$1;
(statearr_22353_22369[(2)] = null);

(statearr_22353_22369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (2))){
var inst_22330 = (state_22350[(7)]);
var inst_22333 = (state_22350[(10)]);
var inst_22333__$1 = cljs.core.nth.call(null,inst_22330,(0),null);
var inst_22334 = cljs.core.nthnext.call(null,inst_22330,(1));
var inst_22335 = (inst_22333__$1 == null);
var inst_22336 = cljs.core.not.call(null,inst_22335);
var state_22350__$1 = (function (){var statearr_22354 = state_22350;
(statearr_22354[(11)] = inst_22334);

(statearr_22354[(10)] = inst_22333__$1);

return statearr_22354;
})();
if(inst_22336){
var statearr_22355_22370 = state_22350__$1;
(statearr_22355_22370[(1)] = (4));

} else {
var statearr_22356_22371 = state_22350__$1;
(statearr_22356_22371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (3))){
var inst_22348 = (state_22350[(2)]);
var state_22350__$1 = state_22350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22350__$1,inst_22348);
} else {
if((state_val_22351 === (4))){
var inst_22333 = (state_22350[(10)]);
var inst_22338 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22333);
var state_22350__$1 = state_22350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22350__$1,(7),inst_22338);
} else {
if((state_val_22351 === (5))){
var inst_22344 = cljs.core.async.close_BANG_.call(null,out);
var state_22350__$1 = state_22350;
var statearr_22357_22372 = state_22350__$1;
(statearr_22357_22372[(2)] = inst_22344);

(statearr_22357_22372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (6))){
var inst_22346 = (state_22350[(2)]);
var state_22350__$1 = state_22350;
var statearr_22358_22373 = state_22350__$1;
(statearr_22358_22373[(2)] = inst_22346);

(statearr_22358_22373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22351 === (7))){
var inst_22334 = (state_22350[(11)]);
var inst_22340 = (state_22350[(2)]);
var inst_22341 = cljs.core.async.put_BANG_.call(null,out,inst_22340);
var inst_22330 = inst_22334;
var state_22350__$1 = (function (){var statearr_22359 = state_22350;
(statearr_22359[(7)] = inst_22330);

(statearr_22359[(12)] = inst_22341);

return statearr_22359;
})();
var statearr_22360_22374 = state_22350__$1;
(statearr_22360_22374[(2)] = null);

(statearr_22360_22374[(1)] = (2));


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
});})(c__19061__auto___22368,out))
;
return ((function (switch__18949__auto__,c__19061__auto___22368,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18950__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18950__auto____0 = (function (){
var statearr_22364 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22364[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18950__auto__);

(statearr_22364[(1)] = (1));

return statearr_22364;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18950__auto____1 = (function (state_22350){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_22350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e22365){if((e22365 instanceof Object)){
var ex__18953__auto__ = e22365;
var statearr_22366_22375 = state_22350;
(statearr_22366_22375[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22376 = state_22350;
state_22350 = G__22376;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18950__auto__ = function(state_22350){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18950__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18950__auto____1.call(this,state_22350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18950__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18950__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___22368,out))
})();
var state__19063__auto__ = (function (){var statearr_22367 = f__19062__auto__.call(null);
(statearr_22367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___22368);

return statearr_22367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___22368,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22377,opts){
var map__22381 = p__22377;
var map__22381__$1 = ((((!((map__22381 == null)))?((((map__22381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22381):map__22381);
var eval_body__$1 = cljs.core.get.call(null,map__22381__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22381__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16793__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16793__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16793__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22383){var e = e22383;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22384_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22384_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22389){
var vec__22390 = p__22389;
var k = cljs.core.nth.call(null,vec__22390,(0),null);
var v = cljs.core.nth.call(null,vec__22390,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22391){
var vec__22392 = p__22391;
var k = cljs.core.nth.call(null,vec__22392,(0),null);
var v = cljs.core.nth.call(null,vec__22392,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22396,p__22397){
var map__22644 = p__22396;
var map__22644__$1 = ((((!((map__22644 == null)))?((((map__22644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22644):map__22644);
var opts = map__22644__$1;
var before_jsload = cljs.core.get.call(null,map__22644__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22644__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22644__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22645 = p__22397;
var map__22645__$1 = ((((!((map__22645 == null)))?((((map__22645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22645):map__22645);
var msg = map__22645__$1;
var files = cljs.core.get.call(null,map__22645__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22645__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22645__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22798){
var state_val_22799 = (state_22798[(1)]);
if((state_val_22799 === (7))){
var inst_22661 = (state_22798[(7)]);
var inst_22659 = (state_22798[(8)]);
var inst_22660 = (state_22798[(9)]);
var inst_22662 = (state_22798[(10)]);
var inst_22667 = cljs.core._nth.call(null,inst_22660,inst_22662);
var inst_22668 = figwheel.client.file_reloading.eval_body.call(null,inst_22667,opts);
var inst_22669 = (inst_22662 + (1));
var tmp22800 = inst_22661;
var tmp22801 = inst_22659;
var tmp22802 = inst_22660;
var inst_22659__$1 = tmp22801;
var inst_22660__$1 = tmp22802;
var inst_22661__$1 = tmp22800;
var inst_22662__$1 = inst_22669;
var state_22798__$1 = (function (){var statearr_22803 = state_22798;
(statearr_22803[(7)] = inst_22661__$1);

(statearr_22803[(8)] = inst_22659__$1);

(statearr_22803[(11)] = inst_22668);

(statearr_22803[(9)] = inst_22660__$1);

(statearr_22803[(10)] = inst_22662__$1);

return statearr_22803;
})();
var statearr_22804_22890 = state_22798__$1;
(statearr_22804_22890[(2)] = null);

(statearr_22804_22890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (20))){
var inst_22702 = (state_22798[(12)]);
var inst_22710 = figwheel.client.file_reloading.sort_files.call(null,inst_22702);
var state_22798__$1 = state_22798;
var statearr_22805_22891 = state_22798__$1;
(statearr_22805_22891[(2)] = inst_22710);

(statearr_22805_22891[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (27))){
var state_22798__$1 = state_22798;
var statearr_22806_22892 = state_22798__$1;
(statearr_22806_22892[(2)] = null);

(statearr_22806_22892[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (1))){
var inst_22651 = (state_22798[(13)]);
var inst_22648 = before_jsload.call(null,files);
var inst_22649 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22650 = (function (){return ((function (inst_22651,inst_22648,inst_22649,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22393_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22393_SHARP_);
});
;})(inst_22651,inst_22648,inst_22649,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22651__$1 = cljs.core.filter.call(null,inst_22650,files);
var inst_22652 = cljs.core.not_empty.call(null,inst_22651__$1);
var state_22798__$1 = (function (){var statearr_22807 = state_22798;
(statearr_22807[(14)] = inst_22649);

(statearr_22807[(15)] = inst_22648);

(statearr_22807[(13)] = inst_22651__$1);

return statearr_22807;
})();
if(cljs.core.truth_(inst_22652)){
var statearr_22808_22893 = state_22798__$1;
(statearr_22808_22893[(1)] = (2));

} else {
var statearr_22809_22894 = state_22798__$1;
(statearr_22809_22894[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (24))){
var state_22798__$1 = state_22798;
var statearr_22810_22895 = state_22798__$1;
(statearr_22810_22895[(2)] = null);

(statearr_22810_22895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (39))){
var inst_22752 = (state_22798[(16)]);
var state_22798__$1 = state_22798;
var statearr_22811_22896 = state_22798__$1;
(statearr_22811_22896[(2)] = inst_22752);

(statearr_22811_22896[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (46))){
var inst_22793 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22812_22897 = state_22798__$1;
(statearr_22812_22897[(2)] = inst_22793);

(statearr_22812_22897[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (4))){
var inst_22696 = (state_22798[(2)]);
var inst_22697 = cljs.core.List.EMPTY;
var inst_22698 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22697);
var inst_22699 = (function (){return ((function (inst_22696,inst_22697,inst_22698,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22394_SHARP_){
var and__16793__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22394_SHARP_);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22394_SHARP_));
} else {
return and__16793__auto__;
}
});
;})(inst_22696,inst_22697,inst_22698,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22700 = cljs.core.filter.call(null,inst_22699,files);
var inst_22701 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22702 = cljs.core.concat.call(null,inst_22700,inst_22701);
var state_22798__$1 = (function (){var statearr_22813 = state_22798;
(statearr_22813[(12)] = inst_22702);

(statearr_22813[(17)] = inst_22696);

(statearr_22813[(18)] = inst_22698);

return statearr_22813;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22814_22898 = state_22798__$1;
(statearr_22814_22898[(1)] = (16));

} else {
var statearr_22815_22899 = state_22798__$1;
(statearr_22815_22899[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (15))){
var inst_22686 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22816_22900 = state_22798__$1;
(statearr_22816_22900[(2)] = inst_22686);

(statearr_22816_22900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (21))){
var inst_22712 = (state_22798[(19)]);
var inst_22712__$1 = (state_22798[(2)]);
var inst_22713 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22712__$1);
var state_22798__$1 = (function (){var statearr_22817 = state_22798;
(statearr_22817[(19)] = inst_22712__$1);

return statearr_22817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22798__$1,(22),inst_22713);
} else {
if((state_val_22799 === (31))){
var inst_22796 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22798__$1,inst_22796);
} else {
if((state_val_22799 === (32))){
var inst_22752 = (state_22798[(16)]);
var inst_22757 = inst_22752.cljs$lang$protocol_mask$partition0$;
var inst_22758 = (inst_22757 & (64));
var inst_22759 = inst_22752.cljs$core$ISeq$;
var inst_22760 = (inst_22758) || (inst_22759);
var state_22798__$1 = state_22798;
if(cljs.core.truth_(inst_22760)){
var statearr_22818_22901 = state_22798__$1;
(statearr_22818_22901[(1)] = (35));

} else {
var statearr_22819_22902 = state_22798__$1;
(statearr_22819_22902[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (40))){
var inst_22773 = (state_22798[(20)]);
var inst_22772 = (state_22798[(2)]);
var inst_22773__$1 = cljs.core.get.call(null,inst_22772,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22774 = cljs.core.get.call(null,inst_22772,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22775 = cljs.core.not_empty.call(null,inst_22773__$1);
var state_22798__$1 = (function (){var statearr_22820 = state_22798;
(statearr_22820[(20)] = inst_22773__$1);

(statearr_22820[(21)] = inst_22774);

return statearr_22820;
})();
if(cljs.core.truth_(inst_22775)){
var statearr_22821_22903 = state_22798__$1;
(statearr_22821_22903[(1)] = (41));

} else {
var statearr_22822_22904 = state_22798__$1;
(statearr_22822_22904[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (33))){
var state_22798__$1 = state_22798;
var statearr_22823_22905 = state_22798__$1;
(statearr_22823_22905[(2)] = false);

(statearr_22823_22905[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (13))){
var inst_22672 = (state_22798[(22)]);
var inst_22676 = cljs.core.chunk_first.call(null,inst_22672);
var inst_22677 = cljs.core.chunk_rest.call(null,inst_22672);
var inst_22678 = cljs.core.count.call(null,inst_22676);
var inst_22659 = inst_22677;
var inst_22660 = inst_22676;
var inst_22661 = inst_22678;
var inst_22662 = (0);
var state_22798__$1 = (function (){var statearr_22824 = state_22798;
(statearr_22824[(7)] = inst_22661);

(statearr_22824[(8)] = inst_22659);

(statearr_22824[(9)] = inst_22660);

(statearr_22824[(10)] = inst_22662);

return statearr_22824;
})();
var statearr_22825_22906 = state_22798__$1;
(statearr_22825_22906[(2)] = null);

(statearr_22825_22906[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (22))){
var inst_22720 = (state_22798[(23)]);
var inst_22716 = (state_22798[(24)]);
var inst_22712 = (state_22798[(19)]);
var inst_22715 = (state_22798[(25)]);
var inst_22715__$1 = (state_22798[(2)]);
var inst_22716__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22715__$1);
var inst_22717 = (function (){var all_files = inst_22712;
var res_SINGLEQUOTE_ = inst_22715__$1;
var res = inst_22716__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22720,inst_22716,inst_22712,inst_22715,inst_22715__$1,inst_22716__$1,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22395_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22395_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22720,inst_22716,inst_22712,inst_22715,inst_22715__$1,inst_22716__$1,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22718 = cljs.core.filter.call(null,inst_22717,inst_22715__$1);
var inst_22719 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22720__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22719);
var inst_22721 = cljs.core.not_empty.call(null,inst_22720__$1);
var state_22798__$1 = (function (){var statearr_22826 = state_22798;
(statearr_22826[(26)] = inst_22718);

(statearr_22826[(23)] = inst_22720__$1);

(statearr_22826[(24)] = inst_22716__$1);

(statearr_22826[(25)] = inst_22715__$1);

return statearr_22826;
})();
if(cljs.core.truth_(inst_22721)){
var statearr_22827_22907 = state_22798__$1;
(statearr_22827_22907[(1)] = (23));

} else {
var statearr_22828_22908 = state_22798__$1;
(statearr_22828_22908[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (36))){
var state_22798__$1 = state_22798;
var statearr_22829_22909 = state_22798__$1;
(statearr_22829_22909[(2)] = false);

(statearr_22829_22909[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (41))){
var inst_22773 = (state_22798[(20)]);
var inst_22777 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22778 = cljs.core.map.call(null,inst_22777,inst_22773);
var inst_22779 = cljs.core.pr_str.call(null,inst_22778);
var inst_22780 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_22779)].join('');
var inst_22781 = figwheel.client.utils.log.call(null,inst_22780);
var state_22798__$1 = state_22798;
var statearr_22830_22910 = state_22798__$1;
(statearr_22830_22910[(2)] = inst_22781);

(statearr_22830_22910[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (43))){
var inst_22774 = (state_22798[(21)]);
var inst_22784 = (state_22798[(2)]);
var inst_22785 = cljs.core.not_empty.call(null,inst_22774);
var state_22798__$1 = (function (){var statearr_22831 = state_22798;
(statearr_22831[(27)] = inst_22784);

return statearr_22831;
})();
if(cljs.core.truth_(inst_22785)){
var statearr_22832_22911 = state_22798__$1;
(statearr_22832_22911[(1)] = (44));

} else {
var statearr_22833_22912 = state_22798__$1;
(statearr_22833_22912[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (29))){
var inst_22718 = (state_22798[(26)]);
var inst_22752 = (state_22798[(16)]);
var inst_22720 = (state_22798[(23)]);
var inst_22716 = (state_22798[(24)]);
var inst_22712 = (state_22798[(19)]);
var inst_22715 = (state_22798[(25)]);
var inst_22748 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22751 = (function (){var all_files = inst_22712;
var res_SINGLEQUOTE_ = inst_22715;
var res = inst_22716;
var files_not_loaded = inst_22718;
var dependencies_that_loaded = inst_22720;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22718,inst_22752,inst_22720,inst_22716,inst_22712,inst_22715,inst_22748,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22750){
var map__22834 = p__22750;
var map__22834__$1 = ((((!((map__22834 == null)))?((((map__22834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22834):map__22834);
var namespace = cljs.core.get.call(null,map__22834__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22718,inst_22752,inst_22720,inst_22716,inst_22712,inst_22715,inst_22748,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22752__$1 = cljs.core.group_by.call(null,inst_22751,inst_22718);
var inst_22754 = (inst_22752__$1 == null);
var inst_22755 = cljs.core.not.call(null,inst_22754);
var state_22798__$1 = (function (){var statearr_22836 = state_22798;
(statearr_22836[(16)] = inst_22752__$1);

(statearr_22836[(28)] = inst_22748);

return statearr_22836;
})();
if(inst_22755){
var statearr_22837_22913 = state_22798__$1;
(statearr_22837_22913[(1)] = (32));

} else {
var statearr_22838_22914 = state_22798__$1;
(statearr_22838_22914[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (44))){
var inst_22774 = (state_22798[(21)]);
var inst_22787 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22774);
var inst_22788 = cljs.core.pr_str.call(null,inst_22787);
var inst_22789 = [cljs.core.str("not required: "),cljs.core.str(inst_22788)].join('');
var inst_22790 = figwheel.client.utils.log.call(null,inst_22789);
var state_22798__$1 = state_22798;
var statearr_22839_22915 = state_22798__$1;
(statearr_22839_22915[(2)] = inst_22790);

(statearr_22839_22915[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (6))){
var inst_22693 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22840_22916 = state_22798__$1;
(statearr_22840_22916[(2)] = inst_22693);

(statearr_22840_22916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (28))){
var inst_22718 = (state_22798[(26)]);
var inst_22745 = (state_22798[(2)]);
var inst_22746 = cljs.core.not_empty.call(null,inst_22718);
var state_22798__$1 = (function (){var statearr_22841 = state_22798;
(statearr_22841[(29)] = inst_22745);

return statearr_22841;
})();
if(cljs.core.truth_(inst_22746)){
var statearr_22842_22917 = state_22798__$1;
(statearr_22842_22917[(1)] = (29));

} else {
var statearr_22843_22918 = state_22798__$1;
(statearr_22843_22918[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (25))){
var inst_22716 = (state_22798[(24)]);
var inst_22732 = (state_22798[(2)]);
var inst_22733 = cljs.core.not_empty.call(null,inst_22716);
var state_22798__$1 = (function (){var statearr_22844 = state_22798;
(statearr_22844[(30)] = inst_22732);

return statearr_22844;
})();
if(cljs.core.truth_(inst_22733)){
var statearr_22845_22919 = state_22798__$1;
(statearr_22845_22919[(1)] = (26));

} else {
var statearr_22846_22920 = state_22798__$1;
(statearr_22846_22920[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (34))){
var inst_22767 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
if(cljs.core.truth_(inst_22767)){
var statearr_22847_22921 = state_22798__$1;
(statearr_22847_22921[(1)] = (38));

} else {
var statearr_22848_22922 = state_22798__$1;
(statearr_22848_22922[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (17))){
var state_22798__$1 = state_22798;
var statearr_22849_22923 = state_22798__$1;
(statearr_22849_22923[(2)] = recompile_dependents);

(statearr_22849_22923[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (3))){
var state_22798__$1 = state_22798;
var statearr_22850_22924 = state_22798__$1;
(statearr_22850_22924[(2)] = null);

(statearr_22850_22924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (12))){
var inst_22689 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22851_22925 = state_22798__$1;
(statearr_22851_22925[(2)] = inst_22689);

(statearr_22851_22925[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (2))){
var inst_22651 = (state_22798[(13)]);
var inst_22658 = cljs.core.seq.call(null,inst_22651);
var inst_22659 = inst_22658;
var inst_22660 = null;
var inst_22661 = (0);
var inst_22662 = (0);
var state_22798__$1 = (function (){var statearr_22852 = state_22798;
(statearr_22852[(7)] = inst_22661);

(statearr_22852[(8)] = inst_22659);

(statearr_22852[(9)] = inst_22660);

(statearr_22852[(10)] = inst_22662);

return statearr_22852;
})();
var statearr_22853_22926 = state_22798__$1;
(statearr_22853_22926[(2)] = null);

(statearr_22853_22926[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (23))){
var inst_22718 = (state_22798[(26)]);
var inst_22720 = (state_22798[(23)]);
var inst_22716 = (state_22798[(24)]);
var inst_22712 = (state_22798[(19)]);
var inst_22715 = (state_22798[(25)]);
var inst_22723 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22725 = (function (){var all_files = inst_22712;
var res_SINGLEQUOTE_ = inst_22715;
var res = inst_22716;
var files_not_loaded = inst_22718;
var dependencies_that_loaded = inst_22720;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22718,inst_22720,inst_22716,inst_22712,inst_22715,inst_22723,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22724){
var map__22854 = p__22724;
var map__22854__$1 = ((((!((map__22854 == null)))?((((map__22854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22854):map__22854);
var request_url = cljs.core.get.call(null,map__22854__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22718,inst_22720,inst_22716,inst_22712,inst_22715,inst_22723,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22726 = cljs.core.reverse.call(null,inst_22720);
var inst_22727 = cljs.core.map.call(null,inst_22725,inst_22726);
var inst_22728 = cljs.core.pr_str.call(null,inst_22727);
var inst_22729 = figwheel.client.utils.log.call(null,inst_22728);
var state_22798__$1 = (function (){var statearr_22856 = state_22798;
(statearr_22856[(31)] = inst_22723);

return statearr_22856;
})();
var statearr_22857_22927 = state_22798__$1;
(statearr_22857_22927[(2)] = inst_22729);

(statearr_22857_22927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (35))){
var state_22798__$1 = state_22798;
var statearr_22858_22928 = state_22798__$1;
(statearr_22858_22928[(2)] = true);

(statearr_22858_22928[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (19))){
var inst_22702 = (state_22798[(12)]);
var inst_22708 = figwheel.client.file_reloading.expand_files.call(null,inst_22702);
var state_22798__$1 = state_22798;
var statearr_22859_22929 = state_22798__$1;
(statearr_22859_22929[(2)] = inst_22708);

(statearr_22859_22929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (11))){
var state_22798__$1 = state_22798;
var statearr_22860_22930 = state_22798__$1;
(statearr_22860_22930[(2)] = null);

(statearr_22860_22930[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (9))){
var inst_22691 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22861_22931 = state_22798__$1;
(statearr_22861_22931[(2)] = inst_22691);

(statearr_22861_22931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (5))){
var inst_22661 = (state_22798[(7)]);
var inst_22662 = (state_22798[(10)]);
var inst_22664 = (inst_22662 < inst_22661);
var inst_22665 = inst_22664;
var state_22798__$1 = state_22798;
if(cljs.core.truth_(inst_22665)){
var statearr_22862_22932 = state_22798__$1;
(statearr_22862_22932[(1)] = (7));

} else {
var statearr_22863_22933 = state_22798__$1;
(statearr_22863_22933[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (14))){
var inst_22672 = (state_22798[(22)]);
var inst_22681 = cljs.core.first.call(null,inst_22672);
var inst_22682 = figwheel.client.file_reloading.eval_body.call(null,inst_22681,opts);
var inst_22683 = cljs.core.next.call(null,inst_22672);
var inst_22659 = inst_22683;
var inst_22660 = null;
var inst_22661 = (0);
var inst_22662 = (0);
var state_22798__$1 = (function (){var statearr_22864 = state_22798;
(statearr_22864[(7)] = inst_22661);

(statearr_22864[(8)] = inst_22659);

(statearr_22864[(32)] = inst_22682);

(statearr_22864[(9)] = inst_22660);

(statearr_22864[(10)] = inst_22662);

return statearr_22864;
})();
var statearr_22865_22934 = state_22798__$1;
(statearr_22865_22934[(2)] = null);

(statearr_22865_22934[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (45))){
var state_22798__$1 = state_22798;
var statearr_22866_22935 = state_22798__$1;
(statearr_22866_22935[(2)] = null);

(statearr_22866_22935[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (26))){
var inst_22718 = (state_22798[(26)]);
var inst_22720 = (state_22798[(23)]);
var inst_22716 = (state_22798[(24)]);
var inst_22712 = (state_22798[(19)]);
var inst_22715 = (state_22798[(25)]);
var inst_22735 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22737 = (function (){var all_files = inst_22712;
var res_SINGLEQUOTE_ = inst_22715;
var res = inst_22716;
var files_not_loaded = inst_22718;
var dependencies_that_loaded = inst_22720;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22718,inst_22720,inst_22716,inst_22712,inst_22715,inst_22735,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22736){
var map__22867 = p__22736;
var map__22867__$1 = ((((!((map__22867 == null)))?((((map__22867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22867):map__22867);
var namespace = cljs.core.get.call(null,map__22867__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22867__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22718,inst_22720,inst_22716,inst_22712,inst_22715,inst_22735,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22738 = cljs.core.map.call(null,inst_22737,inst_22716);
var inst_22739 = cljs.core.pr_str.call(null,inst_22738);
var inst_22740 = figwheel.client.utils.log.call(null,inst_22739);
var inst_22741 = (function (){var all_files = inst_22712;
var res_SINGLEQUOTE_ = inst_22715;
var res = inst_22716;
var files_not_loaded = inst_22718;
var dependencies_that_loaded = inst_22720;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22718,inst_22720,inst_22716,inst_22712,inst_22715,inst_22735,inst_22737,inst_22738,inst_22739,inst_22740,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22718,inst_22720,inst_22716,inst_22712,inst_22715,inst_22735,inst_22737,inst_22738,inst_22739,inst_22740,state_val_22799,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22742 = setTimeout(inst_22741,(10));
var state_22798__$1 = (function (){var statearr_22869 = state_22798;
(statearr_22869[(33)] = inst_22740);

(statearr_22869[(34)] = inst_22735);

return statearr_22869;
})();
var statearr_22870_22936 = state_22798__$1;
(statearr_22870_22936[(2)] = inst_22742);

(statearr_22870_22936[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (16))){
var state_22798__$1 = state_22798;
var statearr_22871_22937 = state_22798__$1;
(statearr_22871_22937[(2)] = reload_dependents);

(statearr_22871_22937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (38))){
var inst_22752 = (state_22798[(16)]);
var inst_22769 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22752);
var state_22798__$1 = state_22798;
var statearr_22872_22938 = state_22798__$1;
(statearr_22872_22938[(2)] = inst_22769);

(statearr_22872_22938[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (30))){
var state_22798__$1 = state_22798;
var statearr_22873_22939 = state_22798__$1;
(statearr_22873_22939[(2)] = null);

(statearr_22873_22939[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (10))){
var inst_22672 = (state_22798[(22)]);
var inst_22674 = cljs.core.chunked_seq_QMARK_.call(null,inst_22672);
var state_22798__$1 = state_22798;
if(inst_22674){
var statearr_22874_22940 = state_22798__$1;
(statearr_22874_22940[(1)] = (13));

} else {
var statearr_22875_22941 = state_22798__$1;
(statearr_22875_22941[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (18))){
var inst_22706 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
if(cljs.core.truth_(inst_22706)){
var statearr_22876_22942 = state_22798__$1;
(statearr_22876_22942[(1)] = (19));

} else {
var statearr_22877_22943 = state_22798__$1;
(statearr_22877_22943[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (42))){
var state_22798__$1 = state_22798;
var statearr_22878_22944 = state_22798__$1;
(statearr_22878_22944[(2)] = null);

(statearr_22878_22944[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (37))){
var inst_22764 = (state_22798[(2)]);
var state_22798__$1 = state_22798;
var statearr_22879_22945 = state_22798__$1;
(statearr_22879_22945[(2)] = inst_22764);

(statearr_22879_22945[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22799 === (8))){
var inst_22672 = (state_22798[(22)]);
var inst_22659 = (state_22798[(8)]);
var inst_22672__$1 = cljs.core.seq.call(null,inst_22659);
var state_22798__$1 = (function (){var statearr_22880 = state_22798;
(statearr_22880[(22)] = inst_22672__$1);

return statearr_22880;
})();
if(inst_22672__$1){
var statearr_22881_22946 = state_22798__$1;
(statearr_22881_22946[(1)] = (10));

} else {
var statearr_22882_22947 = state_22798__$1;
(statearr_22882_22947[(1)] = (11));

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
});})(c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18949__auto__,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18950__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18950__auto____0 = (function (){
var statearr_22886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22886[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18950__auto__);

(statearr_22886[(1)] = (1));

return statearr_22886;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18950__auto____1 = (function (state_22798){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_22798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e22887){if((e22887 instanceof Object)){
var ex__18953__auto__ = e22887;
var statearr_22888_22948 = state_22798;
(statearr_22888_22948[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22949 = state_22798;
state_22798 = G__22949;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18950__auto__ = function(state_22798){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18950__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18950__auto____1.call(this,state_22798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18950__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18950__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19063__auto__ = (function (){var statearr_22889 = f__19062__auto__.call(null);
(statearr_22889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto__);

return statearr_22889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto__,map__22644,map__22644__$1,opts,before_jsload,on_jsload,reload_dependents,map__22645,map__22645__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19061__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22952,link){
var map__22955 = p__22952;
var map__22955__$1 = ((((!((map__22955 == null)))?((((map__22955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22955):map__22955);
var file = cljs.core.get.call(null,map__22955__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__22955,map__22955__$1,file){
return (function (p1__22950_SHARP_,p2__22951_SHARP_){
if(cljs.core._EQ_.call(null,p1__22950_SHARP_,p2__22951_SHARP_)){
return p1__22950_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__22955,map__22955__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22961){
var map__22962 = p__22961;
var map__22962__$1 = ((((!((map__22962 == null)))?((((map__22962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22962):map__22962);
var match_length = cljs.core.get.call(null,map__22962__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22962__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22957_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22957_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args22964 = [];
var len__17863__auto___22967 = arguments.length;
var i__17864__auto___22968 = (0);
while(true){
if((i__17864__auto___22968 < len__17863__auto___22967)){
args22964.push((arguments[i__17864__auto___22968]));

var G__22969 = (i__17864__auto___22968 + (1));
i__17864__auto___22968 = G__22969;
continue;
} else {
}
break;
}

var G__22966 = args22964.length;
switch (G__22966) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22964.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22971_SHARP_,p2__22972_SHARP_){
return cljs.core.assoc.call(null,p1__22971_SHARP_,cljs.core.get.call(null,p2__22972_SHARP_,key),p2__22972_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__22973){
var map__22976 = p__22973;
var map__22976__$1 = ((((!((map__22976 == null)))?((((map__22976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22976):map__22976);
var f_data = map__22976__$1;
var file = cljs.core.get.call(null,map__22976__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22978,files_msg){
var map__22985 = p__22978;
var map__22985__$1 = ((((!((map__22985 == null)))?((((map__22985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22985):map__22985);
var opts = map__22985__$1;
var on_cssload = cljs.core.get.call(null,map__22985__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__22987_22991 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__22988_22992 = null;
var count__22989_22993 = (0);
var i__22990_22994 = (0);
while(true){
if((i__22990_22994 < count__22989_22993)){
var f_22995 = cljs.core._nth.call(null,chunk__22988_22992,i__22990_22994);
figwheel.client.file_reloading.reload_css_file.call(null,f_22995);

var G__22996 = seq__22987_22991;
var G__22997 = chunk__22988_22992;
var G__22998 = count__22989_22993;
var G__22999 = (i__22990_22994 + (1));
seq__22987_22991 = G__22996;
chunk__22988_22992 = G__22997;
count__22989_22993 = G__22998;
i__22990_22994 = G__22999;
continue;
} else {
var temp__4425__auto___23000 = cljs.core.seq.call(null,seq__22987_22991);
if(temp__4425__auto___23000){
var seq__22987_23001__$1 = temp__4425__auto___23000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22987_23001__$1)){
var c__17608__auto___23002 = cljs.core.chunk_first.call(null,seq__22987_23001__$1);
var G__23003 = cljs.core.chunk_rest.call(null,seq__22987_23001__$1);
var G__23004 = c__17608__auto___23002;
var G__23005 = cljs.core.count.call(null,c__17608__auto___23002);
var G__23006 = (0);
seq__22987_22991 = G__23003;
chunk__22988_22992 = G__23004;
count__22989_22993 = G__23005;
i__22990_22994 = G__23006;
continue;
} else {
var f_23007 = cljs.core.first.call(null,seq__22987_23001__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23007);

var G__23008 = cljs.core.next.call(null,seq__22987_23001__$1);
var G__23009 = null;
var G__23010 = (0);
var G__23011 = (0);
seq__22987_22991 = G__23008;
chunk__22988_22992 = G__23009;
count__22989_22993 = G__23010;
i__22990_22994 = G__23011;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__22985,map__22985__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__22985,map__22985__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1456175398494