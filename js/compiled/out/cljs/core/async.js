// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19106 = [];
var len__17863__auto___19112 = arguments.length;
var i__17864__auto___19113 = (0);
while(true){
if((i__17864__auto___19113 < len__17863__auto___19112)){
args19106.push((arguments[i__17864__auto___19113]));

var G__19114 = (i__17864__auto___19113 + (1));
i__17864__auto___19113 = G__19114;
continue;
} else {
}
break;
}

var G__19108 = args19106.length;
switch (G__19108) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19106.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19109 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19109 = (function (f,blockable,meta19110){
this.f = f;
this.blockable = blockable;
this.meta19110 = meta19110;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19111,meta19110__$1){
var self__ = this;
var _19111__$1 = this;
return (new cljs.core.async.t_cljs$core$async19109(self__.f,self__.blockable,meta19110__$1));
});

cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19111){
var self__ = this;
var _19111__$1 = this;
return self__.meta19110;
});

cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19109.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19110","meta19110",530271221,null)], null);
});

cljs.core.async.t_cljs$core$async19109.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19109.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19109";

cljs.core.async.t_cljs$core$async19109.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async19109");
});

cljs.core.async.__GT_t_cljs$core$async19109 = (function cljs$core$async$__GT_t_cljs$core$async19109(f__$1,blockable__$1,meta19110){
return (new cljs.core.async.t_cljs$core$async19109(f__$1,blockable__$1,meta19110));
});

}

return (new cljs.core.async.t_cljs$core$async19109(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19118 = [];
var len__17863__auto___19121 = arguments.length;
var i__17864__auto___19122 = (0);
while(true){
if((i__17864__auto___19122 < len__17863__auto___19121)){
args19118.push((arguments[i__17864__auto___19122]));

var G__19123 = (i__17864__auto___19122 + (1));
i__17864__auto___19122 = G__19123;
continue;
} else {
}
break;
}

var G__19120 = args19118.length;
switch (G__19120) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19118.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19125 = [];
var len__17863__auto___19128 = arguments.length;
var i__17864__auto___19129 = (0);
while(true){
if((i__17864__auto___19129 < len__17863__auto___19128)){
args19125.push((arguments[i__17864__auto___19129]));

var G__19130 = (i__17864__auto___19129 + (1));
i__17864__auto___19129 = G__19130;
continue;
} else {
}
break;
}

var G__19127 = args19125.length;
switch (G__19127) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19125.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19132 = [];
var len__17863__auto___19135 = arguments.length;
var i__17864__auto___19136 = (0);
while(true){
if((i__17864__auto___19136 < len__17863__auto___19135)){
args19132.push((arguments[i__17864__auto___19136]));

var G__19137 = (i__17864__auto___19136 + (1));
i__17864__auto___19136 = G__19137;
continue;
} else {
}
break;
}

var G__19134 = args19132.length;
switch (G__19134) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19132.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19139 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19139);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19139,ret){
return (function (){
return fn1.call(null,val_19139);
});})(val_19139,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19140 = [];
var len__17863__auto___19143 = arguments.length;
var i__17864__auto___19144 = (0);
while(true){
if((i__17864__auto___19144 < len__17863__auto___19143)){
args19140.push((arguments[i__17864__auto___19144]));

var G__19145 = (i__17864__auto___19144 + (1));
i__17864__auto___19144 = G__19145;
continue;
} else {
}
break;
}

var G__19142 = args19140.length;
switch (G__19142) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19140.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17708__auto___19147 = n;
var x_19148 = (0);
while(true){
if((x_19148 < n__17708__auto___19147)){
(a[x_19148] = (0));

var G__19149 = (x_19148 + (1));
x_19148 = G__19149;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19150 = (i + (1));
i = G__19150;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19154 = (function (alt_flag,flag,meta19155){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19155 = meta19155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19156,meta19155__$1){
var self__ = this;
var _19156__$1 = this;
return (new cljs.core.async.t_cljs$core$async19154(self__.alt_flag,self__.flag,meta19155__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19156){
var self__ = this;
var _19156__$1 = this;
return self__.meta19155;
});})(flag))
;

cljs.core.async.t_cljs$core$async19154.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19154.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19154.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19155","meta19155",897502342,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19154";

cljs.core.async.t_cljs$core$async19154.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async19154");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19154 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19154(alt_flag__$1,flag__$1,meta19155){
return (new cljs.core.async.t_cljs$core$async19154(alt_flag__$1,flag__$1,meta19155));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19154(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19160 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19160 = (function (alt_handler,flag,cb,meta19161){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19161 = meta19161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19162,meta19161__$1){
var self__ = this;
var _19162__$1 = this;
return (new cljs.core.async.t_cljs$core$async19160(self__.alt_handler,self__.flag,self__.cb,meta19161__$1));
});

cljs.core.async.t_cljs$core$async19160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19162){
var self__ = this;
var _19162__$1 = this;
return self__.meta19161;
});

cljs.core.async.t_cljs$core$async19160.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19160.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19160.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19160.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19161","meta19161",758976858,null)], null);
});

cljs.core.async.t_cljs$core$async19160.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19160";

cljs.core.async.t_cljs$core$async19160.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async19160");
});

cljs.core.async.__GT_t_cljs$core$async19160 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19160(alt_handler__$1,flag__$1,cb__$1,meta19161){
return (new cljs.core.async.t_cljs$core$async19160(alt_handler__$1,flag__$1,cb__$1,meta19161));
});

}

return (new cljs.core.async.t_cljs$core$async19160(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19163_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19163_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19164_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19164_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16805__auto__ = wport;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19165 = (i + (1));
i = G__19165;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16805__auto__ = ret;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16793__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16793__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16793__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___19171 = arguments.length;
var i__17864__auto___19172 = (0);
while(true){
if((i__17864__auto___19172 < len__17863__auto___19171)){
args__17870__auto__.push((arguments[i__17864__auto___19172]));

var G__19173 = (i__17864__auto___19172 + (1));
i__17864__auto___19172 = G__19173;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19168){
var map__19169 = p__19168;
var map__19169__$1 = ((((!((map__19169 == null)))?((((map__19169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19169):map__19169);
var opts = map__19169__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19166){
var G__19167 = cljs.core.first.call(null,seq19166);
var seq19166__$1 = cljs.core.next.call(null,seq19166);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19167,seq19166__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19174 = [];
var len__17863__auto___19224 = arguments.length;
var i__17864__auto___19225 = (0);
while(true){
if((i__17864__auto___19225 < len__17863__auto___19224)){
args19174.push((arguments[i__17864__auto___19225]));

var G__19226 = (i__17864__auto___19225 + (1));
i__17864__auto___19225 = G__19226;
continue;
} else {
}
break;
}

var G__19176 = args19174.length;
switch (G__19176) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19174.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19061__auto___19228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___19228){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___19228){
return (function (state_19200){
var state_val_19201 = (state_19200[(1)]);
if((state_val_19201 === (7))){
var inst_19196 = (state_19200[(2)]);
var state_19200__$1 = state_19200;
var statearr_19202_19229 = state_19200__$1;
(statearr_19202_19229[(2)] = inst_19196);

(statearr_19202_19229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (1))){
var state_19200__$1 = state_19200;
var statearr_19203_19230 = state_19200__$1;
(statearr_19203_19230[(2)] = null);

(statearr_19203_19230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (4))){
var inst_19179 = (state_19200[(7)]);
var inst_19179__$1 = (state_19200[(2)]);
var inst_19180 = (inst_19179__$1 == null);
var state_19200__$1 = (function (){var statearr_19204 = state_19200;
(statearr_19204[(7)] = inst_19179__$1);

return statearr_19204;
})();
if(cljs.core.truth_(inst_19180)){
var statearr_19205_19231 = state_19200__$1;
(statearr_19205_19231[(1)] = (5));

} else {
var statearr_19206_19232 = state_19200__$1;
(statearr_19206_19232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (13))){
var state_19200__$1 = state_19200;
var statearr_19207_19233 = state_19200__$1;
(statearr_19207_19233[(2)] = null);

(statearr_19207_19233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (6))){
var inst_19179 = (state_19200[(7)]);
var state_19200__$1 = state_19200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19200__$1,(11),to,inst_19179);
} else {
if((state_val_19201 === (3))){
var inst_19198 = (state_19200[(2)]);
var state_19200__$1 = state_19200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19200__$1,inst_19198);
} else {
if((state_val_19201 === (12))){
var state_19200__$1 = state_19200;
var statearr_19208_19234 = state_19200__$1;
(statearr_19208_19234[(2)] = null);

(statearr_19208_19234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (2))){
var state_19200__$1 = state_19200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19200__$1,(4),from);
} else {
if((state_val_19201 === (11))){
var inst_19189 = (state_19200[(2)]);
var state_19200__$1 = state_19200;
if(cljs.core.truth_(inst_19189)){
var statearr_19209_19235 = state_19200__$1;
(statearr_19209_19235[(1)] = (12));

} else {
var statearr_19210_19236 = state_19200__$1;
(statearr_19210_19236[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (9))){
var state_19200__$1 = state_19200;
var statearr_19211_19237 = state_19200__$1;
(statearr_19211_19237[(2)] = null);

(statearr_19211_19237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (5))){
var state_19200__$1 = state_19200;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19212_19238 = state_19200__$1;
(statearr_19212_19238[(1)] = (8));

} else {
var statearr_19213_19239 = state_19200__$1;
(statearr_19213_19239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (14))){
var inst_19194 = (state_19200[(2)]);
var state_19200__$1 = state_19200;
var statearr_19214_19240 = state_19200__$1;
(statearr_19214_19240[(2)] = inst_19194);

(statearr_19214_19240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (10))){
var inst_19186 = (state_19200[(2)]);
var state_19200__$1 = state_19200;
var statearr_19215_19241 = state_19200__$1;
(statearr_19215_19241[(2)] = inst_19186);

(statearr_19215_19241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19201 === (8))){
var inst_19183 = cljs.core.async.close_BANG_.call(null,to);
var state_19200__$1 = state_19200;
var statearr_19216_19242 = state_19200__$1;
(statearr_19216_19242[(2)] = inst_19183);

(statearr_19216_19242[(1)] = (10));


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
});})(c__19061__auto___19228))
;
return ((function (switch__18949__auto__,c__19061__auto___19228){
return (function() {
var cljs$core$async$state_machine__18950__auto__ = null;
var cljs$core$async$state_machine__18950__auto____0 = (function (){
var statearr_19220 = [null,null,null,null,null,null,null,null];
(statearr_19220[(0)] = cljs$core$async$state_machine__18950__auto__);

(statearr_19220[(1)] = (1));

return statearr_19220;
});
var cljs$core$async$state_machine__18950__auto____1 = (function (state_19200){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_19200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e19221){if((e19221 instanceof Object)){
var ex__18953__auto__ = e19221;
var statearr_19222_19243 = state_19200;
(statearr_19222_19243[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19244 = state_19200;
state_19200 = G__19244;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$state_machine__18950__auto__ = function(state_19200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18950__auto____1.call(this,state_19200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18950__auto____0;
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18950__auto____1;
return cljs$core$async$state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___19228))
})();
var state__19063__auto__ = (function (){var statearr_19223 = f__19062__auto__.call(null);
(statearr_19223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___19228);

return statearr_19223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___19228))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19428){
var vec__19429 = p__19428;
var v = cljs.core.nth.call(null,vec__19429,(0),null);
var p = cljs.core.nth.call(null,vec__19429,(1),null);
var job = vec__19429;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19061__auto___19611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___19611,res,vec__19429,v,p,job,jobs,results){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___19611,res,vec__19429,v,p,job,jobs,results){
return (function (state_19434){
var state_val_19435 = (state_19434[(1)]);
if((state_val_19435 === (1))){
var state_19434__$1 = state_19434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19434__$1,(2),res,v);
} else {
if((state_val_19435 === (2))){
var inst_19431 = (state_19434[(2)]);
var inst_19432 = cljs.core.async.close_BANG_.call(null,res);
var state_19434__$1 = (function (){var statearr_19436 = state_19434;
(statearr_19436[(7)] = inst_19431);

return statearr_19436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19434__$1,inst_19432);
} else {
return null;
}
}
});})(c__19061__auto___19611,res,vec__19429,v,p,job,jobs,results))
;
return ((function (switch__18949__auto__,c__19061__auto___19611,res,vec__19429,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0 = (function (){
var statearr_19440 = [null,null,null,null,null,null,null,null];
(statearr_19440[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__);

(statearr_19440[(1)] = (1));

return statearr_19440;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1 = (function (state_19434){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_19434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e19441){if((e19441 instanceof Object)){
var ex__18953__auto__ = e19441;
var statearr_19442_19612 = state_19434;
(statearr_19442_19612[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19613 = state_19434;
state_19434 = G__19613;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__ = function(state_19434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1.call(this,state_19434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___19611,res,vec__19429,v,p,job,jobs,results))
})();
var state__19063__auto__ = (function (){var statearr_19443 = f__19062__auto__.call(null);
(statearr_19443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___19611);

return statearr_19443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___19611,res,vec__19429,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19444){
var vec__19445 = p__19444;
var v = cljs.core.nth.call(null,vec__19445,(0),null);
var p = cljs.core.nth.call(null,vec__19445,(1),null);
var job = vec__19445;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17708__auto___19614 = n;
var __19615 = (0);
while(true){
if((__19615 < n__17708__auto___19614)){
var G__19446_19616 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19446_19616) {
case "compute":
var c__19061__auto___19618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19615,c__19061__auto___19618,G__19446_19616,n__17708__auto___19614,jobs,results,process,async){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (__19615,c__19061__auto___19618,G__19446_19616,n__17708__auto___19614,jobs,results,process,async){
return (function (state_19459){
var state_val_19460 = (state_19459[(1)]);
if((state_val_19460 === (1))){
var state_19459__$1 = state_19459;
var statearr_19461_19619 = state_19459__$1;
(statearr_19461_19619[(2)] = null);

(statearr_19461_19619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19460 === (2))){
var state_19459__$1 = state_19459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19459__$1,(4),jobs);
} else {
if((state_val_19460 === (3))){
var inst_19457 = (state_19459[(2)]);
var state_19459__$1 = state_19459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19459__$1,inst_19457);
} else {
if((state_val_19460 === (4))){
var inst_19449 = (state_19459[(2)]);
var inst_19450 = process.call(null,inst_19449);
var state_19459__$1 = state_19459;
if(cljs.core.truth_(inst_19450)){
var statearr_19462_19620 = state_19459__$1;
(statearr_19462_19620[(1)] = (5));

} else {
var statearr_19463_19621 = state_19459__$1;
(statearr_19463_19621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19460 === (5))){
var state_19459__$1 = state_19459;
var statearr_19464_19622 = state_19459__$1;
(statearr_19464_19622[(2)] = null);

(statearr_19464_19622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19460 === (6))){
var state_19459__$1 = state_19459;
var statearr_19465_19623 = state_19459__$1;
(statearr_19465_19623[(2)] = null);

(statearr_19465_19623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19460 === (7))){
var inst_19455 = (state_19459[(2)]);
var state_19459__$1 = state_19459;
var statearr_19466_19624 = state_19459__$1;
(statearr_19466_19624[(2)] = inst_19455);

(statearr_19466_19624[(1)] = (3));


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
});})(__19615,c__19061__auto___19618,G__19446_19616,n__17708__auto___19614,jobs,results,process,async))
;
return ((function (__19615,switch__18949__auto__,c__19061__auto___19618,G__19446_19616,n__17708__auto___19614,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0 = (function (){
var statearr_19470 = [null,null,null,null,null,null,null];
(statearr_19470[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__);

(statearr_19470[(1)] = (1));

return statearr_19470;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1 = (function (state_19459){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_19459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e19471){if((e19471 instanceof Object)){
var ex__18953__auto__ = e19471;
var statearr_19472_19625 = state_19459;
(statearr_19472_19625[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19626 = state_19459;
state_19459 = G__19626;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__ = function(state_19459){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1.call(this,state_19459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__;
})()
;})(__19615,switch__18949__auto__,c__19061__auto___19618,G__19446_19616,n__17708__auto___19614,jobs,results,process,async))
})();
var state__19063__auto__ = (function (){var statearr_19473 = f__19062__auto__.call(null);
(statearr_19473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___19618);

return statearr_19473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(__19615,c__19061__auto___19618,G__19446_19616,n__17708__auto___19614,jobs,results,process,async))
);


break;
case "async":
var c__19061__auto___19627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19615,c__19061__auto___19627,G__19446_19616,n__17708__auto___19614,jobs,results,process,async){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (__19615,c__19061__auto___19627,G__19446_19616,n__17708__auto___19614,jobs,results,process,async){
return (function (state_19486){
var state_val_19487 = (state_19486[(1)]);
if((state_val_19487 === (1))){
var state_19486__$1 = state_19486;
var statearr_19488_19628 = state_19486__$1;
(statearr_19488_19628[(2)] = null);

(statearr_19488_19628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19487 === (2))){
var state_19486__$1 = state_19486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19486__$1,(4),jobs);
} else {
if((state_val_19487 === (3))){
var inst_19484 = (state_19486[(2)]);
var state_19486__$1 = state_19486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19486__$1,inst_19484);
} else {
if((state_val_19487 === (4))){
var inst_19476 = (state_19486[(2)]);
var inst_19477 = async.call(null,inst_19476);
var state_19486__$1 = state_19486;
if(cljs.core.truth_(inst_19477)){
var statearr_19489_19629 = state_19486__$1;
(statearr_19489_19629[(1)] = (5));

} else {
var statearr_19490_19630 = state_19486__$1;
(statearr_19490_19630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19487 === (5))){
var state_19486__$1 = state_19486;
var statearr_19491_19631 = state_19486__$1;
(statearr_19491_19631[(2)] = null);

(statearr_19491_19631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19487 === (6))){
var state_19486__$1 = state_19486;
var statearr_19492_19632 = state_19486__$1;
(statearr_19492_19632[(2)] = null);

(statearr_19492_19632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19487 === (7))){
var inst_19482 = (state_19486[(2)]);
var state_19486__$1 = state_19486;
var statearr_19493_19633 = state_19486__$1;
(statearr_19493_19633[(2)] = inst_19482);

(statearr_19493_19633[(1)] = (3));


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
});})(__19615,c__19061__auto___19627,G__19446_19616,n__17708__auto___19614,jobs,results,process,async))
;
return ((function (__19615,switch__18949__auto__,c__19061__auto___19627,G__19446_19616,n__17708__auto___19614,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0 = (function (){
var statearr_19497 = [null,null,null,null,null,null,null];
(statearr_19497[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__);

(statearr_19497[(1)] = (1));

return statearr_19497;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1 = (function (state_19486){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_19486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e19498){if((e19498 instanceof Object)){
var ex__18953__auto__ = e19498;
var statearr_19499_19634 = state_19486;
(statearr_19499_19634[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19635 = state_19486;
state_19486 = G__19635;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__ = function(state_19486){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1.call(this,state_19486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__;
})()
;})(__19615,switch__18949__auto__,c__19061__auto___19627,G__19446_19616,n__17708__auto___19614,jobs,results,process,async))
})();
var state__19063__auto__ = (function (){var statearr_19500 = f__19062__auto__.call(null);
(statearr_19500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___19627);

return statearr_19500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(__19615,c__19061__auto___19627,G__19446_19616,n__17708__auto___19614,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19636 = (__19615 + (1));
__19615 = G__19636;
continue;
} else {
}
break;
}

var c__19061__auto___19637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___19637,jobs,results,process,async){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___19637,jobs,results,process,async){
return (function (state_19522){
var state_val_19523 = (state_19522[(1)]);
if((state_val_19523 === (1))){
var state_19522__$1 = state_19522;
var statearr_19524_19638 = state_19522__$1;
(statearr_19524_19638[(2)] = null);

(statearr_19524_19638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (2))){
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19522__$1,(4),from);
} else {
if((state_val_19523 === (3))){
var inst_19520 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19522__$1,inst_19520);
} else {
if((state_val_19523 === (4))){
var inst_19503 = (state_19522[(7)]);
var inst_19503__$1 = (state_19522[(2)]);
var inst_19504 = (inst_19503__$1 == null);
var state_19522__$1 = (function (){var statearr_19525 = state_19522;
(statearr_19525[(7)] = inst_19503__$1);

return statearr_19525;
})();
if(cljs.core.truth_(inst_19504)){
var statearr_19526_19639 = state_19522__$1;
(statearr_19526_19639[(1)] = (5));

} else {
var statearr_19527_19640 = state_19522__$1;
(statearr_19527_19640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (5))){
var inst_19506 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19522__$1 = state_19522;
var statearr_19528_19641 = state_19522__$1;
(statearr_19528_19641[(2)] = inst_19506);

(statearr_19528_19641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (6))){
var inst_19508 = (state_19522[(8)]);
var inst_19503 = (state_19522[(7)]);
var inst_19508__$1 = cljs.core.async.chan.call(null,(1));
var inst_19509 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19510 = [inst_19503,inst_19508__$1];
var inst_19511 = (new cljs.core.PersistentVector(null,2,(5),inst_19509,inst_19510,null));
var state_19522__$1 = (function (){var statearr_19529 = state_19522;
(statearr_19529[(8)] = inst_19508__$1);

return statearr_19529;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19522__$1,(8),jobs,inst_19511);
} else {
if((state_val_19523 === (7))){
var inst_19518 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
var statearr_19530_19642 = state_19522__$1;
(statearr_19530_19642[(2)] = inst_19518);

(statearr_19530_19642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (8))){
var inst_19508 = (state_19522[(8)]);
var inst_19513 = (state_19522[(2)]);
var state_19522__$1 = (function (){var statearr_19531 = state_19522;
(statearr_19531[(9)] = inst_19513);

return statearr_19531;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19522__$1,(9),results,inst_19508);
} else {
if((state_val_19523 === (9))){
var inst_19515 = (state_19522[(2)]);
var state_19522__$1 = (function (){var statearr_19532 = state_19522;
(statearr_19532[(10)] = inst_19515);

return statearr_19532;
})();
var statearr_19533_19643 = state_19522__$1;
(statearr_19533_19643[(2)] = null);

(statearr_19533_19643[(1)] = (2));


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
});})(c__19061__auto___19637,jobs,results,process,async))
;
return ((function (switch__18949__auto__,c__19061__auto___19637,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0 = (function (){
var statearr_19537 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19537[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__);

(statearr_19537[(1)] = (1));

return statearr_19537;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1 = (function (state_19522){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_19522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e19538){if((e19538 instanceof Object)){
var ex__18953__auto__ = e19538;
var statearr_19539_19644 = state_19522;
(statearr_19539_19644[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19645 = state_19522;
state_19522 = G__19645;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__ = function(state_19522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1.call(this,state_19522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___19637,jobs,results,process,async))
})();
var state__19063__auto__ = (function (){var statearr_19540 = f__19062__auto__.call(null);
(statearr_19540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___19637);

return statearr_19540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___19637,jobs,results,process,async))
);


var c__19061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto__,jobs,results,process,async){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto__,jobs,results,process,async){
return (function (state_19578){
var state_val_19579 = (state_19578[(1)]);
if((state_val_19579 === (7))){
var inst_19574 = (state_19578[(2)]);
var state_19578__$1 = state_19578;
var statearr_19580_19646 = state_19578__$1;
(statearr_19580_19646[(2)] = inst_19574);

(statearr_19580_19646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (20))){
var state_19578__$1 = state_19578;
var statearr_19581_19647 = state_19578__$1;
(statearr_19581_19647[(2)] = null);

(statearr_19581_19647[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (1))){
var state_19578__$1 = state_19578;
var statearr_19582_19648 = state_19578__$1;
(statearr_19582_19648[(2)] = null);

(statearr_19582_19648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (4))){
var inst_19543 = (state_19578[(7)]);
var inst_19543__$1 = (state_19578[(2)]);
var inst_19544 = (inst_19543__$1 == null);
var state_19578__$1 = (function (){var statearr_19583 = state_19578;
(statearr_19583[(7)] = inst_19543__$1);

return statearr_19583;
})();
if(cljs.core.truth_(inst_19544)){
var statearr_19584_19649 = state_19578__$1;
(statearr_19584_19649[(1)] = (5));

} else {
var statearr_19585_19650 = state_19578__$1;
(statearr_19585_19650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (15))){
var inst_19556 = (state_19578[(8)]);
var state_19578__$1 = state_19578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19578__$1,(18),to,inst_19556);
} else {
if((state_val_19579 === (21))){
var inst_19569 = (state_19578[(2)]);
var state_19578__$1 = state_19578;
var statearr_19586_19651 = state_19578__$1;
(statearr_19586_19651[(2)] = inst_19569);

(statearr_19586_19651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (13))){
var inst_19571 = (state_19578[(2)]);
var state_19578__$1 = (function (){var statearr_19587 = state_19578;
(statearr_19587[(9)] = inst_19571);

return statearr_19587;
})();
var statearr_19588_19652 = state_19578__$1;
(statearr_19588_19652[(2)] = null);

(statearr_19588_19652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (6))){
var inst_19543 = (state_19578[(7)]);
var state_19578__$1 = state_19578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19578__$1,(11),inst_19543);
} else {
if((state_val_19579 === (17))){
var inst_19564 = (state_19578[(2)]);
var state_19578__$1 = state_19578;
if(cljs.core.truth_(inst_19564)){
var statearr_19589_19653 = state_19578__$1;
(statearr_19589_19653[(1)] = (19));

} else {
var statearr_19590_19654 = state_19578__$1;
(statearr_19590_19654[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (3))){
var inst_19576 = (state_19578[(2)]);
var state_19578__$1 = state_19578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19578__$1,inst_19576);
} else {
if((state_val_19579 === (12))){
var inst_19553 = (state_19578[(10)]);
var state_19578__$1 = state_19578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19578__$1,(14),inst_19553);
} else {
if((state_val_19579 === (2))){
var state_19578__$1 = state_19578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19578__$1,(4),results);
} else {
if((state_val_19579 === (19))){
var state_19578__$1 = state_19578;
var statearr_19591_19655 = state_19578__$1;
(statearr_19591_19655[(2)] = null);

(statearr_19591_19655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (11))){
var inst_19553 = (state_19578[(2)]);
var state_19578__$1 = (function (){var statearr_19592 = state_19578;
(statearr_19592[(10)] = inst_19553);

return statearr_19592;
})();
var statearr_19593_19656 = state_19578__$1;
(statearr_19593_19656[(2)] = null);

(statearr_19593_19656[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (9))){
var state_19578__$1 = state_19578;
var statearr_19594_19657 = state_19578__$1;
(statearr_19594_19657[(2)] = null);

(statearr_19594_19657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (5))){
var state_19578__$1 = state_19578;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19595_19658 = state_19578__$1;
(statearr_19595_19658[(1)] = (8));

} else {
var statearr_19596_19659 = state_19578__$1;
(statearr_19596_19659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (14))){
var inst_19558 = (state_19578[(11)]);
var inst_19556 = (state_19578[(8)]);
var inst_19556__$1 = (state_19578[(2)]);
var inst_19557 = (inst_19556__$1 == null);
var inst_19558__$1 = cljs.core.not.call(null,inst_19557);
var state_19578__$1 = (function (){var statearr_19597 = state_19578;
(statearr_19597[(11)] = inst_19558__$1);

(statearr_19597[(8)] = inst_19556__$1);

return statearr_19597;
})();
if(inst_19558__$1){
var statearr_19598_19660 = state_19578__$1;
(statearr_19598_19660[(1)] = (15));

} else {
var statearr_19599_19661 = state_19578__$1;
(statearr_19599_19661[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (16))){
var inst_19558 = (state_19578[(11)]);
var state_19578__$1 = state_19578;
var statearr_19600_19662 = state_19578__$1;
(statearr_19600_19662[(2)] = inst_19558);

(statearr_19600_19662[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (10))){
var inst_19550 = (state_19578[(2)]);
var state_19578__$1 = state_19578;
var statearr_19601_19663 = state_19578__$1;
(statearr_19601_19663[(2)] = inst_19550);

(statearr_19601_19663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (18))){
var inst_19561 = (state_19578[(2)]);
var state_19578__$1 = state_19578;
var statearr_19602_19664 = state_19578__$1;
(statearr_19602_19664[(2)] = inst_19561);

(statearr_19602_19664[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19579 === (8))){
var inst_19547 = cljs.core.async.close_BANG_.call(null,to);
var state_19578__$1 = state_19578;
var statearr_19603_19665 = state_19578__$1;
(statearr_19603_19665[(2)] = inst_19547);

(statearr_19603_19665[(1)] = (10));


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
});})(c__19061__auto__,jobs,results,process,async))
;
return ((function (switch__18949__auto__,c__19061__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0 = (function (){
var statearr_19607 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__);

(statearr_19607[(1)] = (1));

return statearr_19607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1 = (function (state_19578){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_19578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e19608){if((e19608 instanceof Object)){
var ex__18953__auto__ = e19608;
var statearr_19609_19666 = state_19578;
(statearr_19609_19666[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19667 = state_19578;
state_19578 = G__19667;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__ = function(state_19578){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1.call(this,state_19578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18950__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto__,jobs,results,process,async))
})();
var state__19063__auto__ = (function (){var statearr_19610 = f__19062__auto__.call(null);
(statearr_19610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto__);

return statearr_19610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto__,jobs,results,process,async))
);

return c__19061__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args19668 = [];
var len__17863__auto___19671 = arguments.length;
var i__17864__auto___19672 = (0);
while(true){
if((i__17864__auto___19672 < len__17863__auto___19671)){
args19668.push((arguments[i__17864__auto___19672]));

var G__19673 = (i__17864__auto___19672 + (1));
i__17864__auto___19672 = G__19673;
continue;
} else {
}
break;
}

var G__19670 = args19668.length;
switch (G__19670) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19668.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args19675 = [];
var len__17863__auto___19678 = arguments.length;
var i__17864__auto___19679 = (0);
while(true){
if((i__17864__auto___19679 < len__17863__auto___19678)){
args19675.push((arguments[i__17864__auto___19679]));

var G__19680 = (i__17864__auto___19679 + (1));
i__17864__auto___19679 = G__19680;
continue;
} else {
}
break;
}

var G__19677 = args19675.length;
switch (G__19677) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19675.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args19682 = [];
var len__17863__auto___19735 = arguments.length;
var i__17864__auto___19736 = (0);
while(true){
if((i__17864__auto___19736 < len__17863__auto___19735)){
args19682.push((arguments[i__17864__auto___19736]));

var G__19737 = (i__17864__auto___19736 + (1));
i__17864__auto___19736 = G__19737;
continue;
} else {
}
break;
}

var G__19684 = args19682.length;
switch (G__19684) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19682.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19061__auto___19739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___19739,tc,fc){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___19739,tc,fc){
return (function (state_19710){
var state_val_19711 = (state_19710[(1)]);
if((state_val_19711 === (7))){
var inst_19706 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
var statearr_19712_19740 = state_19710__$1;
(statearr_19712_19740[(2)] = inst_19706);

(statearr_19712_19740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19711 === (1))){
var state_19710__$1 = state_19710;
var statearr_19713_19741 = state_19710__$1;
(statearr_19713_19741[(2)] = null);

(statearr_19713_19741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19711 === (4))){
var inst_19687 = (state_19710[(7)]);
var inst_19687__$1 = (state_19710[(2)]);
var inst_19688 = (inst_19687__$1 == null);
var state_19710__$1 = (function (){var statearr_19714 = state_19710;
(statearr_19714[(7)] = inst_19687__$1);

return statearr_19714;
})();
if(cljs.core.truth_(inst_19688)){
var statearr_19715_19742 = state_19710__$1;
(statearr_19715_19742[(1)] = (5));

} else {
var statearr_19716_19743 = state_19710__$1;
(statearr_19716_19743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19711 === (13))){
var state_19710__$1 = state_19710;
var statearr_19717_19744 = state_19710__$1;
(statearr_19717_19744[(2)] = null);

(statearr_19717_19744[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19711 === (6))){
var inst_19687 = (state_19710[(7)]);
var inst_19693 = p.call(null,inst_19687);
var state_19710__$1 = state_19710;
if(cljs.core.truth_(inst_19693)){
var statearr_19718_19745 = state_19710__$1;
(statearr_19718_19745[(1)] = (9));

} else {
var statearr_19719_19746 = state_19710__$1;
(statearr_19719_19746[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19711 === (3))){
var inst_19708 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19710__$1,inst_19708);
} else {
if((state_val_19711 === (12))){
var state_19710__$1 = state_19710;
var statearr_19720_19747 = state_19710__$1;
(statearr_19720_19747[(2)] = null);

(statearr_19720_19747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19711 === (2))){
var state_19710__$1 = state_19710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19710__$1,(4),ch);
} else {
if((state_val_19711 === (11))){
var inst_19687 = (state_19710[(7)]);
var inst_19697 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19710__$1,(8),inst_19697,inst_19687);
} else {
if((state_val_19711 === (9))){
var state_19710__$1 = state_19710;
var statearr_19721_19748 = state_19710__$1;
(statearr_19721_19748[(2)] = tc);

(statearr_19721_19748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19711 === (5))){
var inst_19690 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19691 = cljs.core.async.close_BANG_.call(null,fc);
var state_19710__$1 = (function (){var statearr_19722 = state_19710;
(statearr_19722[(8)] = inst_19690);

return statearr_19722;
})();
var statearr_19723_19749 = state_19710__$1;
(statearr_19723_19749[(2)] = inst_19691);

(statearr_19723_19749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19711 === (14))){
var inst_19704 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
var statearr_19724_19750 = state_19710__$1;
(statearr_19724_19750[(2)] = inst_19704);

(statearr_19724_19750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19711 === (10))){
var state_19710__$1 = state_19710;
var statearr_19725_19751 = state_19710__$1;
(statearr_19725_19751[(2)] = fc);

(statearr_19725_19751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19711 === (8))){
var inst_19699 = (state_19710[(2)]);
var state_19710__$1 = state_19710;
if(cljs.core.truth_(inst_19699)){
var statearr_19726_19752 = state_19710__$1;
(statearr_19726_19752[(1)] = (12));

} else {
var statearr_19727_19753 = state_19710__$1;
(statearr_19727_19753[(1)] = (13));

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
});})(c__19061__auto___19739,tc,fc))
;
return ((function (switch__18949__auto__,c__19061__auto___19739,tc,fc){
return (function() {
var cljs$core$async$state_machine__18950__auto__ = null;
var cljs$core$async$state_machine__18950__auto____0 = (function (){
var statearr_19731 = [null,null,null,null,null,null,null,null,null];
(statearr_19731[(0)] = cljs$core$async$state_machine__18950__auto__);

(statearr_19731[(1)] = (1));

return statearr_19731;
});
var cljs$core$async$state_machine__18950__auto____1 = (function (state_19710){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_19710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e19732){if((e19732 instanceof Object)){
var ex__18953__auto__ = e19732;
var statearr_19733_19754 = state_19710;
(statearr_19733_19754[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19755 = state_19710;
state_19710 = G__19755;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$state_machine__18950__auto__ = function(state_19710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18950__auto____1.call(this,state_19710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18950__auto____0;
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18950__auto____1;
return cljs$core$async$state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___19739,tc,fc))
})();
var state__19063__auto__ = (function (){var statearr_19734 = f__19062__auto__.call(null);
(statearr_19734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___19739);

return statearr_19734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___19739,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto__){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto__){
return (function (state_19819){
var state_val_19820 = (state_19819[(1)]);
if((state_val_19820 === (7))){
var inst_19815 = (state_19819[(2)]);
var state_19819__$1 = state_19819;
var statearr_19821_19842 = state_19819__$1;
(statearr_19821_19842[(2)] = inst_19815);

(statearr_19821_19842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19820 === (1))){
var inst_19799 = init;
var state_19819__$1 = (function (){var statearr_19822 = state_19819;
(statearr_19822[(7)] = inst_19799);

return statearr_19822;
})();
var statearr_19823_19843 = state_19819__$1;
(statearr_19823_19843[(2)] = null);

(statearr_19823_19843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19820 === (4))){
var inst_19802 = (state_19819[(8)]);
var inst_19802__$1 = (state_19819[(2)]);
var inst_19803 = (inst_19802__$1 == null);
var state_19819__$1 = (function (){var statearr_19824 = state_19819;
(statearr_19824[(8)] = inst_19802__$1);

return statearr_19824;
})();
if(cljs.core.truth_(inst_19803)){
var statearr_19825_19844 = state_19819__$1;
(statearr_19825_19844[(1)] = (5));

} else {
var statearr_19826_19845 = state_19819__$1;
(statearr_19826_19845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19820 === (6))){
var inst_19802 = (state_19819[(8)]);
var inst_19799 = (state_19819[(7)]);
var inst_19806 = (state_19819[(9)]);
var inst_19806__$1 = f.call(null,inst_19799,inst_19802);
var inst_19807 = cljs.core.reduced_QMARK_.call(null,inst_19806__$1);
var state_19819__$1 = (function (){var statearr_19827 = state_19819;
(statearr_19827[(9)] = inst_19806__$1);

return statearr_19827;
})();
if(inst_19807){
var statearr_19828_19846 = state_19819__$1;
(statearr_19828_19846[(1)] = (8));

} else {
var statearr_19829_19847 = state_19819__$1;
(statearr_19829_19847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19820 === (3))){
var inst_19817 = (state_19819[(2)]);
var state_19819__$1 = state_19819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19819__$1,inst_19817);
} else {
if((state_val_19820 === (2))){
var state_19819__$1 = state_19819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19819__$1,(4),ch);
} else {
if((state_val_19820 === (9))){
var inst_19806 = (state_19819[(9)]);
var inst_19799 = inst_19806;
var state_19819__$1 = (function (){var statearr_19830 = state_19819;
(statearr_19830[(7)] = inst_19799);

return statearr_19830;
})();
var statearr_19831_19848 = state_19819__$1;
(statearr_19831_19848[(2)] = null);

(statearr_19831_19848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19820 === (5))){
var inst_19799 = (state_19819[(7)]);
var state_19819__$1 = state_19819;
var statearr_19832_19849 = state_19819__$1;
(statearr_19832_19849[(2)] = inst_19799);

(statearr_19832_19849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19820 === (10))){
var inst_19813 = (state_19819[(2)]);
var state_19819__$1 = state_19819;
var statearr_19833_19850 = state_19819__$1;
(statearr_19833_19850[(2)] = inst_19813);

(statearr_19833_19850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19820 === (8))){
var inst_19806 = (state_19819[(9)]);
var inst_19809 = cljs.core.deref.call(null,inst_19806);
var state_19819__$1 = state_19819;
var statearr_19834_19851 = state_19819__$1;
(statearr_19834_19851[(2)] = inst_19809);

(statearr_19834_19851[(1)] = (10));


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
});})(c__19061__auto__))
;
return ((function (switch__18949__auto__,c__19061__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18950__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18950__auto____0 = (function (){
var statearr_19838 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19838[(0)] = cljs$core$async$reduce_$_state_machine__18950__auto__);

(statearr_19838[(1)] = (1));

return statearr_19838;
});
var cljs$core$async$reduce_$_state_machine__18950__auto____1 = (function (state_19819){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_19819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e19839){if((e19839 instanceof Object)){
var ex__18953__auto__ = e19839;
var statearr_19840_19852 = state_19819;
(statearr_19840_19852[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19853 = state_19819;
state_19819 = G__19853;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18950__auto__ = function(state_19819){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18950__auto____1.call(this,state_19819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18950__auto____0;
cljs$core$async$reduce_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18950__auto____1;
return cljs$core$async$reduce_$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto__))
})();
var state__19063__auto__ = (function (){var statearr_19841 = f__19062__auto__.call(null);
(statearr_19841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto__);

return statearr_19841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto__))
);

return c__19061__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args19854 = [];
var len__17863__auto___19906 = arguments.length;
var i__17864__auto___19907 = (0);
while(true){
if((i__17864__auto___19907 < len__17863__auto___19906)){
args19854.push((arguments[i__17864__auto___19907]));

var G__19908 = (i__17864__auto___19907 + (1));
i__17864__auto___19907 = G__19908;
continue;
} else {
}
break;
}

var G__19856 = args19854.length;
switch (G__19856) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19854.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto__){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto__){
return (function (state_19881){
var state_val_19882 = (state_19881[(1)]);
if((state_val_19882 === (7))){
var inst_19863 = (state_19881[(2)]);
var state_19881__$1 = state_19881;
var statearr_19883_19910 = state_19881__$1;
(statearr_19883_19910[(2)] = inst_19863);

(statearr_19883_19910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19882 === (1))){
var inst_19857 = cljs.core.seq.call(null,coll);
var inst_19858 = inst_19857;
var state_19881__$1 = (function (){var statearr_19884 = state_19881;
(statearr_19884[(7)] = inst_19858);

return statearr_19884;
})();
var statearr_19885_19911 = state_19881__$1;
(statearr_19885_19911[(2)] = null);

(statearr_19885_19911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19882 === (4))){
var inst_19858 = (state_19881[(7)]);
var inst_19861 = cljs.core.first.call(null,inst_19858);
var state_19881__$1 = state_19881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19881__$1,(7),ch,inst_19861);
} else {
if((state_val_19882 === (13))){
var inst_19875 = (state_19881[(2)]);
var state_19881__$1 = state_19881;
var statearr_19886_19912 = state_19881__$1;
(statearr_19886_19912[(2)] = inst_19875);

(statearr_19886_19912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19882 === (6))){
var inst_19866 = (state_19881[(2)]);
var state_19881__$1 = state_19881;
if(cljs.core.truth_(inst_19866)){
var statearr_19887_19913 = state_19881__$1;
(statearr_19887_19913[(1)] = (8));

} else {
var statearr_19888_19914 = state_19881__$1;
(statearr_19888_19914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19882 === (3))){
var inst_19879 = (state_19881[(2)]);
var state_19881__$1 = state_19881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19881__$1,inst_19879);
} else {
if((state_val_19882 === (12))){
var state_19881__$1 = state_19881;
var statearr_19889_19915 = state_19881__$1;
(statearr_19889_19915[(2)] = null);

(statearr_19889_19915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19882 === (2))){
var inst_19858 = (state_19881[(7)]);
var state_19881__$1 = state_19881;
if(cljs.core.truth_(inst_19858)){
var statearr_19890_19916 = state_19881__$1;
(statearr_19890_19916[(1)] = (4));

} else {
var statearr_19891_19917 = state_19881__$1;
(statearr_19891_19917[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19882 === (11))){
var inst_19872 = cljs.core.async.close_BANG_.call(null,ch);
var state_19881__$1 = state_19881;
var statearr_19892_19918 = state_19881__$1;
(statearr_19892_19918[(2)] = inst_19872);

(statearr_19892_19918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19882 === (9))){
var state_19881__$1 = state_19881;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19893_19919 = state_19881__$1;
(statearr_19893_19919[(1)] = (11));

} else {
var statearr_19894_19920 = state_19881__$1;
(statearr_19894_19920[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19882 === (5))){
var inst_19858 = (state_19881[(7)]);
var state_19881__$1 = state_19881;
var statearr_19895_19921 = state_19881__$1;
(statearr_19895_19921[(2)] = inst_19858);

(statearr_19895_19921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19882 === (10))){
var inst_19877 = (state_19881[(2)]);
var state_19881__$1 = state_19881;
var statearr_19896_19922 = state_19881__$1;
(statearr_19896_19922[(2)] = inst_19877);

(statearr_19896_19922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19882 === (8))){
var inst_19858 = (state_19881[(7)]);
var inst_19868 = cljs.core.next.call(null,inst_19858);
var inst_19858__$1 = inst_19868;
var state_19881__$1 = (function (){var statearr_19897 = state_19881;
(statearr_19897[(7)] = inst_19858__$1);

return statearr_19897;
})();
var statearr_19898_19923 = state_19881__$1;
(statearr_19898_19923[(2)] = null);

(statearr_19898_19923[(1)] = (2));


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
});})(c__19061__auto__))
;
return ((function (switch__18949__auto__,c__19061__auto__){
return (function() {
var cljs$core$async$state_machine__18950__auto__ = null;
var cljs$core$async$state_machine__18950__auto____0 = (function (){
var statearr_19902 = [null,null,null,null,null,null,null,null];
(statearr_19902[(0)] = cljs$core$async$state_machine__18950__auto__);

(statearr_19902[(1)] = (1));

return statearr_19902;
});
var cljs$core$async$state_machine__18950__auto____1 = (function (state_19881){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_19881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e19903){if((e19903 instanceof Object)){
var ex__18953__auto__ = e19903;
var statearr_19904_19924 = state_19881;
(statearr_19904_19924[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19925 = state_19881;
state_19881 = G__19925;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$state_machine__18950__auto__ = function(state_19881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18950__auto____1.call(this,state_19881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18950__auto____0;
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18950__auto____1;
return cljs$core$async$state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto__))
})();
var state__19063__auto__ = (function (){var statearr_19905 = f__19062__auto__.call(null);
(statearr_19905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto__);

return statearr_19905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto__))
);

return c__19061__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17460__auto__ = (((_ == null))?null:_);
var m__17461__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,_);
} else {
var m__17461__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20147 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20147 = (function (mult,ch,cs,meta20148){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20148 = meta20148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20149,meta20148__$1){
var self__ = this;
var _20149__$1 = this;
return (new cljs.core.async.t_cljs$core$async20147(self__.mult,self__.ch,self__.cs,meta20148__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20149){
var self__ = this;
var _20149__$1 = this;
return self__.meta20148;
});})(cs))
;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20147.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20147.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20148","meta20148",738062823,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20147";

cljs.core.async.t_cljs$core$async20147.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20147");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20147 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20147(mult__$1,ch__$1,cs__$1,meta20148){
return (new cljs.core.async.t_cljs$core$async20147(mult__$1,ch__$1,cs__$1,meta20148));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20147(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19061__auto___20368 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___20368,cs,m,dchan,dctr,done){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___20368,cs,m,dchan,dctr,done){
return (function (state_20280){
var state_val_20281 = (state_20280[(1)]);
if((state_val_20281 === (7))){
var inst_20276 = (state_20280[(2)]);
var state_20280__$1 = state_20280;
var statearr_20282_20369 = state_20280__$1;
(statearr_20282_20369[(2)] = inst_20276);

(statearr_20282_20369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (20))){
var inst_20181 = (state_20280[(7)]);
var inst_20191 = cljs.core.first.call(null,inst_20181);
var inst_20192 = cljs.core.nth.call(null,inst_20191,(0),null);
var inst_20193 = cljs.core.nth.call(null,inst_20191,(1),null);
var state_20280__$1 = (function (){var statearr_20283 = state_20280;
(statearr_20283[(8)] = inst_20192);

return statearr_20283;
})();
if(cljs.core.truth_(inst_20193)){
var statearr_20284_20370 = state_20280__$1;
(statearr_20284_20370[(1)] = (22));

} else {
var statearr_20285_20371 = state_20280__$1;
(statearr_20285_20371[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (27))){
var inst_20221 = (state_20280[(9)]);
var inst_20152 = (state_20280[(10)]);
var inst_20228 = (state_20280[(11)]);
var inst_20223 = (state_20280[(12)]);
var inst_20228__$1 = cljs.core._nth.call(null,inst_20221,inst_20223);
var inst_20229 = cljs.core.async.put_BANG_.call(null,inst_20228__$1,inst_20152,done);
var state_20280__$1 = (function (){var statearr_20286 = state_20280;
(statearr_20286[(11)] = inst_20228__$1);

return statearr_20286;
})();
if(cljs.core.truth_(inst_20229)){
var statearr_20287_20372 = state_20280__$1;
(statearr_20287_20372[(1)] = (30));

} else {
var statearr_20288_20373 = state_20280__$1;
(statearr_20288_20373[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (1))){
var state_20280__$1 = state_20280;
var statearr_20289_20374 = state_20280__$1;
(statearr_20289_20374[(2)] = null);

(statearr_20289_20374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (24))){
var inst_20181 = (state_20280[(7)]);
var inst_20198 = (state_20280[(2)]);
var inst_20199 = cljs.core.next.call(null,inst_20181);
var inst_20161 = inst_20199;
var inst_20162 = null;
var inst_20163 = (0);
var inst_20164 = (0);
var state_20280__$1 = (function (){var statearr_20290 = state_20280;
(statearr_20290[(13)] = inst_20198);

(statearr_20290[(14)] = inst_20162);

(statearr_20290[(15)] = inst_20164);

(statearr_20290[(16)] = inst_20163);

(statearr_20290[(17)] = inst_20161);

return statearr_20290;
})();
var statearr_20291_20375 = state_20280__$1;
(statearr_20291_20375[(2)] = null);

(statearr_20291_20375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (39))){
var state_20280__$1 = state_20280;
var statearr_20295_20376 = state_20280__$1;
(statearr_20295_20376[(2)] = null);

(statearr_20295_20376[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (4))){
var inst_20152 = (state_20280[(10)]);
var inst_20152__$1 = (state_20280[(2)]);
var inst_20153 = (inst_20152__$1 == null);
var state_20280__$1 = (function (){var statearr_20296 = state_20280;
(statearr_20296[(10)] = inst_20152__$1);

return statearr_20296;
})();
if(cljs.core.truth_(inst_20153)){
var statearr_20297_20377 = state_20280__$1;
(statearr_20297_20377[(1)] = (5));

} else {
var statearr_20298_20378 = state_20280__$1;
(statearr_20298_20378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (15))){
var inst_20162 = (state_20280[(14)]);
var inst_20164 = (state_20280[(15)]);
var inst_20163 = (state_20280[(16)]);
var inst_20161 = (state_20280[(17)]);
var inst_20177 = (state_20280[(2)]);
var inst_20178 = (inst_20164 + (1));
var tmp20292 = inst_20162;
var tmp20293 = inst_20163;
var tmp20294 = inst_20161;
var inst_20161__$1 = tmp20294;
var inst_20162__$1 = tmp20292;
var inst_20163__$1 = tmp20293;
var inst_20164__$1 = inst_20178;
var state_20280__$1 = (function (){var statearr_20299 = state_20280;
(statearr_20299[(14)] = inst_20162__$1);

(statearr_20299[(15)] = inst_20164__$1);

(statearr_20299[(16)] = inst_20163__$1);

(statearr_20299[(17)] = inst_20161__$1);

(statearr_20299[(18)] = inst_20177);

return statearr_20299;
})();
var statearr_20300_20379 = state_20280__$1;
(statearr_20300_20379[(2)] = null);

(statearr_20300_20379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (21))){
var inst_20202 = (state_20280[(2)]);
var state_20280__$1 = state_20280;
var statearr_20304_20380 = state_20280__$1;
(statearr_20304_20380[(2)] = inst_20202);

(statearr_20304_20380[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (31))){
var inst_20228 = (state_20280[(11)]);
var inst_20232 = done.call(null,null);
var inst_20233 = cljs.core.async.untap_STAR_.call(null,m,inst_20228);
var state_20280__$1 = (function (){var statearr_20305 = state_20280;
(statearr_20305[(19)] = inst_20232);

return statearr_20305;
})();
var statearr_20306_20381 = state_20280__$1;
(statearr_20306_20381[(2)] = inst_20233);

(statearr_20306_20381[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (32))){
var inst_20221 = (state_20280[(9)]);
var inst_20220 = (state_20280[(20)]);
var inst_20222 = (state_20280[(21)]);
var inst_20223 = (state_20280[(12)]);
var inst_20235 = (state_20280[(2)]);
var inst_20236 = (inst_20223 + (1));
var tmp20301 = inst_20221;
var tmp20302 = inst_20220;
var tmp20303 = inst_20222;
var inst_20220__$1 = tmp20302;
var inst_20221__$1 = tmp20301;
var inst_20222__$1 = tmp20303;
var inst_20223__$1 = inst_20236;
var state_20280__$1 = (function (){var statearr_20307 = state_20280;
(statearr_20307[(9)] = inst_20221__$1);

(statearr_20307[(20)] = inst_20220__$1);

(statearr_20307[(22)] = inst_20235);

(statearr_20307[(21)] = inst_20222__$1);

(statearr_20307[(12)] = inst_20223__$1);

return statearr_20307;
})();
var statearr_20308_20382 = state_20280__$1;
(statearr_20308_20382[(2)] = null);

(statearr_20308_20382[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (40))){
var inst_20248 = (state_20280[(23)]);
var inst_20252 = done.call(null,null);
var inst_20253 = cljs.core.async.untap_STAR_.call(null,m,inst_20248);
var state_20280__$1 = (function (){var statearr_20309 = state_20280;
(statearr_20309[(24)] = inst_20252);

return statearr_20309;
})();
var statearr_20310_20383 = state_20280__$1;
(statearr_20310_20383[(2)] = inst_20253);

(statearr_20310_20383[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (33))){
var inst_20239 = (state_20280[(25)]);
var inst_20241 = cljs.core.chunked_seq_QMARK_.call(null,inst_20239);
var state_20280__$1 = state_20280;
if(inst_20241){
var statearr_20311_20384 = state_20280__$1;
(statearr_20311_20384[(1)] = (36));

} else {
var statearr_20312_20385 = state_20280__$1;
(statearr_20312_20385[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (13))){
var inst_20171 = (state_20280[(26)]);
var inst_20174 = cljs.core.async.close_BANG_.call(null,inst_20171);
var state_20280__$1 = state_20280;
var statearr_20313_20386 = state_20280__$1;
(statearr_20313_20386[(2)] = inst_20174);

(statearr_20313_20386[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (22))){
var inst_20192 = (state_20280[(8)]);
var inst_20195 = cljs.core.async.close_BANG_.call(null,inst_20192);
var state_20280__$1 = state_20280;
var statearr_20314_20387 = state_20280__$1;
(statearr_20314_20387[(2)] = inst_20195);

(statearr_20314_20387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (36))){
var inst_20239 = (state_20280[(25)]);
var inst_20243 = cljs.core.chunk_first.call(null,inst_20239);
var inst_20244 = cljs.core.chunk_rest.call(null,inst_20239);
var inst_20245 = cljs.core.count.call(null,inst_20243);
var inst_20220 = inst_20244;
var inst_20221 = inst_20243;
var inst_20222 = inst_20245;
var inst_20223 = (0);
var state_20280__$1 = (function (){var statearr_20315 = state_20280;
(statearr_20315[(9)] = inst_20221);

(statearr_20315[(20)] = inst_20220);

(statearr_20315[(21)] = inst_20222);

(statearr_20315[(12)] = inst_20223);

return statearr_20315;
})();
var statearr_20316_20388 = state_20280__$1;
(statearr_20316_20388[(2)] = null);

(statearr_20316_20388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (41))){
var inst_20239 = (state_20280[(25)]);
var inst_20255 = (state_20280[(2)]);
var inst_20256 = cljs.core.next.call(null,inst_20239);
var inst_20220 = inst_20256;
var inst_20221 = null;
var inst_20222 = (0);
var inst_20223 = (0);
var state_20280__$1 = (function (){var statearr_20317 = state_20280;
(statearr_20317[(9)] = inst_20221);

(statearr_20317[(20)] = inst_20220);

(statearr_20317[(27)] = inst_20255);

(statearr_20317[(21)] = inst_20222);

(statearr_20317[(12)] = inst_20223);

return statearr_20317;
})();
var statearr_20318_20389 = state_20280__$1;
(statearr_20318_20389[(2)] = null);

(statearr_20318_20389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (43))){
var state_20280__$1 = state_20280;
var statearr_20319_20390 = state_20280__$1;
(statearr_20319_20390[(2)] = null);

(statearr_20319_20390[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (29))){
var inst_20264 = (state_20280[(2)]);
var state_20280__$1 = state_20280;
var statearr_20320_20391 = state_20280__$1;
(statearr_20320_20391[(2)] = inst_20264);

(statearr_20320_20391[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (44))){
var inst_20273 = (state_20280[(2)]);
var state_20280__$1 = (function (){var statearr_20321 = state_20280;
(statearr_20321[(28)] = inst_20273);

return statearr_20321;
})();
var statearr_20322_20392 = state_20280__$1;
(statearr_20322_20392[(2)] = null);

(statearr_20322_20392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (6))){
var inst_20212 = (state_20280[(29)]);
var inst_20211 = cljs.core.deref.call(null,cs);
var inst_20212__$1 = cljs.core.keys.call(null,inst_20211);
var inst_20213 = cljs.core.count.call(null,inst_20212__$1);
var inst_20214 = cljs.core.reset_BANG_.call(null,dctr,inst_20213);
var inst_20219 = cljs.core.seq.call(null,inst_20212__$1);
var inst_20220 = inst_20219;
var inst_20221 = null;
var inst_20222 = (0);
var inst_20223 = (0);
var state_20280__$1 = (function (){var statearr_20323 = state_20280;
(statearr_20323[(9)] = inst_20221);

(statearr_20323[(20)] = inst_20220);

(statearr_20323[(21)] = inst_20222);

(statearr_20323[(29)] = inst_20212__$1);

(statearr_20323[(12)] = inst_20223);

(statearr_20323[(30)] = inst_20214);

return statearr_20323;
})();
var statearr_20324_20393 = state_20280__$1;
(statearr_20324_20393[(2)] = null);

(statearr_20324_20393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (28))){
var inst_20220 = (state_20280[(20)]);
var inst_20239 = (state_20280[(25)]);
var inst_20239__$1 = cljs.core.seq.call(null,inst_20220);
var state_20280__$1 = (function (){var statearr_20325 = state_20280;
(statearr_20325[(25)] = inst_20239__$1);

return statearr_20325;
})();
if(inst_20239__$1){
var statearr_20326_20394 = state_20280__$1;
(statearr_20326_20394[(1)] = (33));

} else {
var statearr_20327_20395 = state_20280__$1;
(statearr_20327_20395[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (25))){
var inst_20222 = (state_20280[(21)]);
var inst_20223 = (state_20280[(12)]);
var inst_20225 = (inst_20223 < inst_20222);
var inst_20226 = inst_20225;
var state_20280__$1 = state_20280;
if(cljs.core.truth_(inst_20226)){
var statearr_20328_20396 = state_20280__$1;
(statearr_20328_20396[(1)] = (27));

} else {
var statearr_20329_20397 = state_20280__$1;
(statearr_20329_20397[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (34))){
var state_20280__$1 = state_20280;
var statearr_20330_20398 = state_20280__$1;
(statearr_20330_20398[(2)] = null);

(statearr_20330_20398[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (17))){
var state_20280__$1 = state_20280;
var statearr_20331_20399 = state_20280__$1;
(statearr_20331_20399[(2)] = null);

(statearr_20331_20399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (3))){
var inst_20278 = (state_20280[(2)]);
var state_20280__$1 = state_20280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20280__$1,inst_20278);
} else {
if((state_val_20281 === (12))){
var inst_20207 = (state_20280[(2)]);
var state_20280__$1 = state_20280;
var statearr_20332_20400 = state_20280__$1;
(statearr_20332_20400[(2)] = inst_20207);

(statearr_20332_20400[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (2))){
var state_20280__$1 = state_20280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20280__$1,(4),ch);
} else {
if((state_val_20281 === (23))){
var state_20280__$1 = state_20280;
var statearr_20333_20401 = state_20280__$1;
(statearr_20333_20401[(2)] = null);

(statearr_20333_20401[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (35))){
var inst_20262 = (state_20280[(2)]);
var state_20280__$1 = state_20280;
var statearr_20334_20402 = state_20280__$1;
(statearr_20334_20402[(2)] = inst_20262);

(statearr_20334_20402[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (19))){
var inst_20181 = (state_20280[(7)]);
var inst_20185 = cljs.core.chunk_first.call(null,inst_20181);
var inst_20186 = cljs.core.chunk_rest.call(null,inst_20181);
var inst_20187 = cljs.core.count.call(null,inst_20185);
var inst_20161 = inst_20186;
var inst_20162 = inst_20185;
var inst_20163 = inst_20187;
var inst_20164 = (0);
var state_20280__$1 = (function (){var statearr_20335 = state_20280;
(statearr_20335[(14)] = inst_20162);

(statearr_20335[(15)] = inst_20164);

(statearr_20335[(16)] = inst_20163);

(statearr_20335[(17)] = inst_20161);

return statearr_20335;
})();
var statearr_20336_20403 = state_20280__$1;
(statearr_20336_20403[(2)] = null);

(statearr_20336_20403[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (11))){
var inst_20161 = (state_20280[(17)]);
var inst_20181 = (state_20280[(7)]);
var inst_20181__$1 = cljs.core.seq.call(null,inst_20161);
var state_20280__$1 = (function (){var statearr_20337 = state_20280;
(statearr_20337[(7)] = inst_20181__$1);

return statearr_20337;
})();
if(inst_20181__$1){
var statearr_20338_20404 = state_20280__$1;
(statearr_20338_20404[(1)] = (16));

} else {
var statearr_20339_20405 = state_20280__$1;
(statearr_20339_20405[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (9))){
var inst_20209 = (state_20280[(2)]);
var state_20280__$1 = state_20280;
var statearr_20340_20406 = state_20280__$1;
(statearr_20340_20406[(2)] = inst_20209);

(statearr_20340_20406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (5))){
var inst_20159 = cljs.core.deref.call(null,cs);
var inst_20160 = cljs.core.seq.call(null,inst_20159);
var inst_20161 = inst_20160;
var inst_20162 = null;
var inst_20163 = (0);
var inst_20164 = (0);
var state_20280__$1 = (function (){var statearr_20341 = state_20280;
(statearr_20341[(14)] = inst_20162);

(statearr_20341[(15)] = inst_20164);

(statearr_20341[(16)] = inst_20163);

(statearr_20341[(17)] = inst_20161);

return statearr_20341;
})();
var statearr_20342_20407 = state_20280__$1;
(statearr_20342_20407[(2)] = null);

(statearr_20342_20407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (14))){
var state_20280__$1 = state_20280;
var statearr_20343_20408 = state_20280__$1;
(statearr_20343_20408[(2)] = null);

(statearr_20343_20408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (45))){
var inst_20270 = (state_20280[(2)]);
var state_20280__$1 = state_20280;
var statearr_20344_20409 = state_20280__$1;
(statearr_20344_20409[(2)] = inst_20270);

(statearr_20344_20409[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (26))){
var inst_20212 = (state_20280[(29)]);
var inst_20266 = (state_20280[(2)]);
var inst_20267 = cljs.core.seq.call(null,inst_20212);
var state_20280__$1 = (function (){var statearr_20345 = state_20280;
(statearr_20345[(31)] = inst_20266);

return statearr_20345;
})();
if(inst_20267){
var statearr_20346_20410 = state_20280__$1;
(statearr_20346_20410[(1)] = (42));

} else {
var statearr_20347_20411 = state_20280__$1;
(statearr_20347_20411[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (16))){
var inst_20181 = (state_20280[(7)]);
var inst_20183 = cljs.core.chunked_seq_QMARK_.call(null,inst_20181);
var state_20280__$1 = state_20280;
if(inst_20183){
var statearr_20348_20412 = state_20280__$1;
(statearr_20348_20412[(1)] = (19));

} else {
var statearr_20349_20413 = state_20280__$1;
(statearr_20349_20413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (38))){
var inst_20259 = (state_20280[(2)]);
var state_20280__$1 = state_20280;
var statearr_20350_20414 = state_20280__$1;
(statearr_20350_20414[(2)] = inst_20259);

(statearr_20350_20414[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (30))){
var state_20280__$1 = state_20280;
var statearr_20351_20415 = state_20280__$1;
(statearr_20351_20415[(2)] = null);

(statearr_20351_20415[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (10))){
var inst_20162 = (state_20280[(14)]);
var inst_20164 = (state_20280[(15)]);
var inst_20170 = cljs.core._nth.call(null,inst_20162,inst_20164);
var inst_20171 = cljs.core.nth.call(null,inst_20170,(0),null);
var inst_20172 = cljs.core.nth.call(null,inst_20170,(1),null);
var state_20280__$1 = (function (){var statearr_20352 = state_20280;
(statearr_20352[(26)] = inst_20171);

return statearr_20352;
})();
if(cljs.core.truth_(inst_20172)){
var statearr_20353_20416 = state_20280__$1;
(statearr_20353_20416[(1)] = (13));

} else {
var statearr_20354_20417 = state_20280__$1;
(statearr_20354_20417[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (18))){
var inst_20205 = (state_20280[(2)]);
var state_20280__$1 = state_20280;
var statearr_20355_20418 = state_20280__$1;
(statearr_20355_20418[(2)] = inst_20205);

(statearr_20355_20418[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (42))){
var state_20280__$1 = state_20280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20280__$1,(45),dchan);
} else {
if((state_val_20281 === (37))){
var inst_20248 = (state_20280[(23)]);
var inst_20152 = (state_20280[(10)]);
var inst_20239 = (state_20280[(25)]);
var inst_20248__$1 = cljs.core.first.call(null,inst_20239);
var inst_20249 = cljs.core.async.put_BANG_.call(null,inst_20248__$1,inst_20152,done);
var state_20280__$1 = (function (){var statearr_20356 = state_20280;
(statearr_20356[(23)] = inst_20248__$1);

return statearr_20356;
})();
if(cljs.core.truth_(inst_20249)){
var statearr_20357_20419 = state_20280__$1;
(statearr_20357_20419[(1)] = (39));

} else {
var statearr_20358_20420 = state_20280__$1;
(statearr_20358_20420[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20281 === (8))){
var inst_20164 = (state_20280[(15)]);
var inst_20163 = (state_20280[(16)]);
var inst_20166 = (inst_20164 < inst_20163);
var inst_20167 = inst_20166;
var state_20280__$1 = state_20280;
if(cljs.core.truth_(inst_20167)){
var statearr_20359_20421 = state_20280__$1;
(statearr_20359_20421[(1)] = (10));

} else {
var statearr_20360_20422 = state_20280__$1;
(statearr_20360_20422[(1)] = (11));

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
});})(c__19061__auto___20368,cs,m,dchan,dctr,done))
;
return ((function (switch__18949__auto__,c__19061__auto___20368,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18950__auto__ = null;
var cljs$core$async$mult_$_state_machine__18950__auto____0 = (function (){
var statearr_20364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20364[(0)] = cljs$core$async$mult_$_state_machine__18950__auto__);

(statearr_20364[(1)] = (1));

return statearr_20364;
});
var cljs$core$async$mult_$_state_machine__18950__auto____1 = (function (state_20280){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_20280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e20365){if((e20365 instanceof Object)){
var ex__18953__auto__ = e20365;
var statearr_20366_20423 = state_20280;
(statearr_20366_20423[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20424 = state_20280;
state_20280 = G__20424;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18950__auto__ = function(state_20280){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18950__auto____1.call(this,state_20280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18950__auto____0;
cljs$core$async$mult_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18950__auto____1;
return cljs$core$async$mult_$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___20368,cs,m,dchan,dctr,done))
})();
var state__19063__auto__ = (function (){var statearr_20367 = f__19062__auto__.call(null);
(statearr_20367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___20368);

return statearr_20367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___20368,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20425 = [];
var len__17863__auto___20428 = arguments.length;
var i__17864__auto___20429 = (0);
while(true){
if((i__17864__auto___20429 < len__17863__auto___20428)){
args20425.push((arguments[i__17864__auto___20429]));

var G__20430 = (i__17864__auto___20429 + (1));
i__17864__auto___20429 = G__20430;
continue;
} else {
}
break;
}

var G__20427 = args20425.length;
switch (G__20427) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20425.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m);
} else {
var m__17461__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,state_map);
} else {
var m__17461__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17460__auto__ = (((m == null))?null:m);
var m__17461__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,m,mode);
} else {
var m__17461__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17870__auto__ = [];
var len__17863__auto___20442 = arguments.length;
var i__17864__auto___20443 = (0);
while(true){
if((i__17864__auto___20443 < len__17863__auto___20442)){
args__17870__auto__.push((arguments[i__17864__auto___20443]));

var G__20444 = (i__17864__auto___20443 + (1));
i__17864__auto___20443 = G__20444;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((3) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17871__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20436){
var map__20437 = p__20436;
var map__20437__$1 = ((((!((map__20437 == null)))?((((map__20437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20437):map__20437);
var opts = map__20437__$1;
var statearr_20439_20445 = state;
(statearr_20439_20445[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20437,map__20437__$1,opts){
return (function (val){
var statearr_20440_20446 = state;
(statearr_20440_20446[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20437,map__20437__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20441_20447 = state;
(statearr_20441_20447[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20432){
var G__20433 = cljs.core.first.call(null,seq20432);
var seq20432__$1 = cljs.core.next.call(null,seq20432);
var G__20434 = cljs.core.first.call(null,seq20432__$1);
var seq20432__$2 = cljs.core.next.call(null,seq20432__$1);
var G__20435 = cljs.core.first.call(null,seq20432__$2);
var seq20432__$3 = cljs.core.next.call(null,seq20432__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20433,G__20434,G__20435,seq20432__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20611 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20612){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20612 = meta20612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20613,meta20612__$1){
var self__ = this;
var _20613__$1 = this;
return (new cljs.core.async.t_cljs$core$async20611(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20612__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20613){
var self__ = this;
var _20613__$1 = this;
return self__.meta20612;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20611.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20611.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20611.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async20611.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20611.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20611.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20611.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20611.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20611.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta20612","meta20612",-2048070602,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async20611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20611";

cljs.core.async.t_cljs$core$async20611.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20611");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async20611 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async20611(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20612){
return (new cljs.core.async.t_cljs$core$async20611(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20612));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async20611(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19061__auto___20774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___20774,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___20774,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20711){
var state_val_20712 = (state_20711[(1)]);
if((state_val_20712 === (7))){
var inst_20629 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
var statearr_20713_20775 = state_20711__$1;
(statearr_20713_20775[(2)] = inst_20629);

(statearr_20713_20775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (20))){
var inst_20641 = (state_20711[(7)]);
var state_20711__$1 = state_20711;
var statearr_20714_20776 = state_20711__$1;
(statearr_20714_20776[(2)] = inst_20641);

(statearr_20714_20776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (27))){
var state_20711__$1 = state_20711;
var statearr_20715_20777 = state_20711__$1;
(statearr_20715_20777[(2)] = null);

(statearr_20715_20777[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (1))){
var inst_20617 = (state_20711[(8)]);
var inst_20617__$1 = calc_state.call(null);
var inst_20619 = (inst_20617__$1 == null);
var inst_20620 = cljs.core.not.call(null,inst_20619);
var state_20711__$1 = (function (){var statearr_20716 = state_20711;
(statearr_20716[(8)] = inst_20617__$1);

return statearr_20716;
})();
if(inst_20620){
var statearr_20717_20778 = state_20711__$1;
(statearr_20717_20778[(1)] = (2));

} else {
var statearr_20718_20779 = state_20711__$1;
(statearr_20718_20779[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (24))){
var inst_20685 = (state_20711[(9)]);
var inst_20664 = (state_20711[(10)]);
var inst_20671 = (state_20711[(11)]);
var inst_20685__$1 = inst_20664.call(null,inst_20671);
var state_20711__$1 = (function (){var statearr_20719 = state_20711;
(statearr_20719[(9)] = inst_20685__$1);

return statearr_20719;
})();
if(cljs.core.truth_(inst_20685__$1)){
var statearr_20720_20780 = state_20711__$1;
(statearr_20720_20780[(1)] = (29));

} else {
var statearr_20721_20781 = state_20711__$1;
(statearr_20721_20781[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (4))){
var inst_20632 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
if(cljs.core.truth_(inst_20632)){
var statearr_20722_20782 = state_20711__$1;
(statearr_20722_20782[(1)] = (8));

} else {
var statearr_20723_20783 = state_20711__$1;
(statearr_20723_20783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (15))){
var inst_20658 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
if(cljs.core.truth_(inst_20658)){
var statearr_20724_20784 = state_20711__$1;
(statearr_20724_20784[(1)] = (19));

} else {
var statearr_20725_20785 = state_20711__$1;
(statearr_20725_20785[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (21))){
var inst_20663 = (state_20711[(12)]);
var inst_20663__$1 = (state_20711[(2)]);
var inst_20664 = cljs.core.get.call(null,inst_20663__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20665 = cljs.core.get.call(null,inst_20663__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20666 = cljs.core.get.call(null,inst_20663__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_20711__$1 = (function (){var statearr_20726 = state_20711;
(statearr_20726[(13)] = inst_20665);

(statearr_20726[(10)] = inst_20664);

(statearr_20726[(12)] = inst_20663__$1);

return statearr_20726;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20711__$1,(22),inst_20666);
} else {
if((state_val_20712 === (31))){
var inst_20693 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
if(cljs.core.truth_(inst_20693)){
var statearr_20727_20786 = state_20711__$1;
(statearr_20727_20786[(1)] = (32));

} else {
var statearr_20728_20787 = state_20711__$1;
(statearr_20728_20787[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (32))){
var inst_20670 = (state_20711[(14)]);
var state_20711__$1 = state_20711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20711__$1,(35),out,inst_20670);
} else {
if((state_val_20712 === (33))){
var inst_20663 = (state_20711[(12)]);
var inst_20641 = inst_20663;
var state_20711__$1 = (function (){var statearr_20729 = state_20711;
(statearr_20729[(7)] = inst_20641);

return statearr_20729;
})();
var statearr_20730_20788 = state_20711__$1;
(statearr_20730_20788[(2)] = null);

(statearr_20730_20788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (13))){
var inst_20641 = (state_20711[(7)]);
var inst_20648 = inst_20641.cljs$lang$protocol_mask$partition0$;
var inst_20649 = (inst_20648 & (64));
var inst_20650 = inst_20641.cljs$core$ISeq$;
var inst_20651 = (inst_20649) || (inst_20650);
var state_20711__$1 = state_20711;
if(cljs.core.truth_(inst_20651)){
var statearr_20731_20789 = state_20711__$1;
(statearr_20731_20789[(1)] = (16));

} else {
var statearr_20732_20790 = state_20711__$1;
(statearr_20732_20790[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (22))){
var inst_20670 = (state_20711[(14)]);
var inst_20671 = (state_20711[(11)]);
var inst_20669 = (state_20711[(2)]);
var inst_20670__$1 = cljs.core.nth.call(null,inst_20669,(0),null);
var inst_20671__$1 = cljs.core.nth.call(null,inst_20669,(1),null);
var inst_20672 = (inst_20670__$1 == null);
var inst_20673 = cljs.core._EQ_.call(null,inst_20671__$1,change);
var inst_20674 = (inst_20672) || (inst_20673);
var state_20711__$1 = (function (){var statearr_20733 = state_20711;
(statearr_20733[(14)] = inst_20670__$1);

(statearr_20733[(11)] = inst_20671__$1);

return statearr_20733;
})();
if(cljs.core.truth_(inst_20674)){
var statearr_20734_20791 = state_20711__$1;
(statearr_20734_20791[(1)] = (23));

} else {
var statearr_20735_20792 = state_20711__$1;
(statearr_20735_20792[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (36))){
var inst_20663 = (state_20711[(12)]);
var inst_20641 = inst_20663;
var state_20711__$1 = (function (){var statearr_20736 = state_20711;
(statearr_20736[(7)] = inst_20641);

return statearr_20736;
})();
var statearr_20737_20793 = state_20711__$1;
(statearr_20737_20793[(2)] = null);

(statearr_20737_20793[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (29))){
var inst_20685 = (state_20711[(9)]);
var state_20711__$1 = state_20711;
var statearr_20738_20794 = state_20711__$1;
(statearr_20738_20794[(2)] = inst_20685);

(statearr_20738_20794[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (6))){
var state_20711__$1 = state_20711;
var statearr_20739_20795 = state_20711__$1;
(statearr_20739_20795[(2)] = false);

(statearr_20739_20795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (28))){
var inst_20681 = (state_20711[(2)]);
var inst_20682 = calc_state.call(null);
var inst_20641 = inst_20682;
var state_20711__$1 = (function (){var statearr_20740 = state_20711;
(statearr_20740[(15)] = inst_20681);

(statearr_20740[(7)] = inst_20641);

return statearr_20740;
})();
var statearr_20741_20796 = state_20711__$1;
(statearr_20741_20796[(2)] = null);

(statearr_20741_20796[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (25))){
var inst_20707 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
var statearr_20742_20797 = state_20711__$1;
(statearr_20742_20797[(2)] = inst_20707);

(statearr_20742_20797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (34))){
var inst_20705 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
var statearr_20743_20798 = state_20711__$1;
(statearr_20743_20798[(2)] = inst_20705);

(statearr_20743_20798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (17))){
var state_20711__$1 = state_20711;
var statearr_20744_20799 = state_20711__$1;
(statearr_20744_20799[(2)] = false);

(statearr_20744_20799[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (3))){
var state_20711__$1 = state_20711;
var statearr_20745_20800 = state_20711__$1;
(statearr_20745_20800[(2)] = false);

(statearr_20745_20800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (12))){
var inst_20709 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20711__$1,inst_20709);
} else {
if((state_val_20712 === (2))){
var inst_20617 = (state_20711[(8)]);
var inst_20622 = inst_20617.cljs$lang$protocol_mask$partition0$;
var inst_20623 = (inst_20622 & (64));
var inst_20624 = inst_20617.cljs$core$ISeq$;
var inst_20625 = (inst_20623) || (inst_20624);
var state_20711__$1 = state_20711;
if(cljs.core.truth_(inst_20625)){
var statearr_20746_20801 = state_20711__$1;
(statearr_20746_20801[(1)] = (5));

} else {
var statearr_20747_20802 = state_20711__$1;
(statearr_20747_20802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (23))){
var inst_20670 = (state_20711[(14)]);
var inst_20676 = (inst_20670 == null);
var state_20711__$1 = state_20711;
if(cljs.core.truth_(inst_20676)){
var statearr_20748_20803 = state_20711__$1;
(statearr_20748_20803[(1)] = (26));

} else {
var statearr_20749_20804 = state_20711__$1;
(statearr_20749_20804[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (35))){
var inst_20696 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
if(cljs.core.truth_(inst_20696)){
var statearr_20750_20805 = state_20711__$1;
(statearr_20750_20805[(1)] = (36));

} else {
var statearr_20751_20806 = state_20711__$1;
(statearr_20751_20806[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (19))){
var inst_20641 = (state_20711[(7)]);
var inst_20660 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20641);
var state_20711__$1 = state_20711;
var statearr_20752_20807 = state_20711__$1;
(statearr_20752_20807[(2)] = inst_20660);

(statearr_20752_20807[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (11))){
var inst_20641 = (state_20711[(7)]);
var inst_20645 = (inst_20641 == null);
var inst_20646 = cljs.core.not.call(null,inst_20645);
var state_20711__$1 = state_20711;
if(inst_20646){
var statearr_20753_20808 = state_20711__$1;
(statearr_20753_20808[(1)] = (13));

} else {
var statearr_20754_20809 = state_20711__$1;
(statearr_20754_20809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (9))){
var inst_20617 = (state_20711[(8)]);
var state_20711__$1 = state_20711;
var statearr_20755_20810 = state_20711__$1;
(statearr_20755_20810[(2)] = inst_20617);

(statearr_20755_20810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (5))){
var state_20711__$1 = state_20711;
var statearr_20756_20811 = state_20711__$1;
(statearr_20756_20811[(2)] = true);

(statearr_20756_20811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (14))){
var state_20711__$1 = state_20711;
var statearr_20757_20812 = state_20711__$1;
(statearr_20757_20812[(2)] = false);

(statearr_20757_20812[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (26))){
var inst_20671 = (state_20711[(11)]);
var inst_20678 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20671);
var state_20711__$1 = state_20711;
var statearr_20758_20813 = state_20711__$1;
(statearr_20758_20813[(2)] = inst_20678);

(statearr_20758_20813[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (16))){
var state_20711__$1 = state_20711;
var statearr_20759_20814 = state_20711__$1;
(statearr_20759_20814[(2)] = true);

(statearr_20759_20814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (38))){
var inst_20701 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
var statearr_20760_20815 = state_20711__$1;
(statearr_20760_20815[(2)] = inst_20701);

(statearr_20760_20815[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (30))){
var inst_20665 = (state_20711[(13)]);
var inst_20664 = (state_20711[(10)]);
var inst_20671 = (state_20711[(11)]);
var inst_20688 = cljs.core.empty_QMARK_.call(null,inst_20664);
var inst_20689 = inst_20665.call(null,inst_20671);
var inst_20690 = cljs.core.not.call(null,inst_20689);
var inst_20691 = (inst_20688) && (inst_20690);
var state_20711__$1 = state_20711;
var statearr_20761_20816 = state_20711__$1;
(statearr_20761_20816[(2)] = inst_20691);

(statearr_20761_20816[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (10))){
var inst_20617 = (state_20711[(8)]);
var inst_20637 = (state_20711[(2)]);
var inst_20638 = cljs.core.get.call(null,inst_20637,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20639 = cljs.core.get.call(null,inst_20637,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20640 = cljs.core.get.call(null,inst_20637,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20641 = inst_20617;
var state_20711__$1 = (function (){var statearr_20762 = state_20711;
(statearr_20762[(16)] = inst_20638);

(statearr_20762[(17)] = inst_20639);

(statearr_20762[(7)] = inst_20641);

(statearr_20762[(18)] = inst_20640);

return statearr_20762;
})();
var statearr_20763_20817 = state_20711__$1;
(statearr_20763_20817[(2)] = null);

(statearr_20763_20817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (18))){
var inst_20655 = (state_20711[(2)]);
var state_20711__$1 = state_20711;
var statearr_20764_20818 = state_20711__$1;
(statearr_20764_20818[(2)] = inst_20655);

(statearr_20764_20818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (37))){
var state_20711__$1 = state_20711;
var statearr_20765_20819 = state_20711__$1;
(statearr_20765_20819[(2)] = null);

(statearr_20765_20819[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20712 === (8))){
var inst_20617 = (state_20711[(8)]);
var inst_20634 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20617);
var state_20711__$1 = state_20711;
var statearr_20766_20820 = state_20711__$1;
(statearr_20766_20820[(2)] = inst_20634);

(statearr_20766_20820[(1)] = (10));


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
});})(c__19061__auto___20774,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18949__auto__,c__19061__auto___20774,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18950__auto__ = null;
var cljs$core$async$mix_$_state_machine__18950__auto____0 = (function (){
var statearr_20770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20770[(0)] = cljs$core$async$mix_$_state_machine__18950__auto__);

(statearr_20770[(1)] = (1));

return statearr_20770;
});
var cljs$core$async$mix_$_state_machine__18950__auto____1 = (function (state_20711){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_20711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e20771){if((e20771 instanceof Object)){
var ex__18953__auto__ = e20771;
var statearr_20772_20821 = state_20711;
(statearr_20772_20821[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20822 = state_20711;
state_20711 = G__20822;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18950__auto__ = function(state_20711){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18950__auto____1.call(this,state_20711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18950__auto____0;
cljs$core$async$mix_$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18950__auto____1;
return cljs$core$async$mix_$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___20774,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19063__auto__ = (function (){var statearr_20773 = f__19062__auto__.call(null);
(statearr_20773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___20774);

return statearr_20773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___20774,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17461__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v,ch);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args20823 = [];
var len__17863__auto___20826 = arguments.length;
var i__17864__auto___20827 = (0);
while(true){
if((i__17864__auto___20827 < len__17863__auto___20826)){
args20823.push((arguments[i__17864__auto___20827]));

var G__20828 = (i__17864__auto___20827 + (1));
i__17864__auto___20827 = G__20828;
continue;
} else {
}
break;
}

var G__20825 = args20823.length;
switch (G__20825) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20823.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17460__auto__ = (((p == null))?null:p);
var m__17461__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17460__auto__)]);
if(!((m__17461__auto__ == null))){
return m__17461__auto__.call(null,p,v);
} else {
var m__17461__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17461__auto____$1 == null))){
return m__17461__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args20831 = [];
var len__17863__auto___20956 = arguments.length;
var i__17864__auto___20957 = (0);
while(true){
if((i__17864__auto___20957 < len__17863__auto___20956)){
args20831.push((arguments[i__17864__auto___20957]));

var G__20958 = (i__17864__auto___20957 + (1));
i__17864__auto___20957 = G__20958;
continue;
} else {
}
break;
}

var G__20833 = args20831.length;
switch (G__20833) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20831.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16805__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16805__auto__,mults){
return (function (p1__20830_SHARP_){
if(cljs.core.truth_(p1__20830_SHARP_.call(null,topic))){
return p1__20830_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__20830_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16805__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async20834 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20834 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20835){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20835 = meta20835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20836,meta20835__$1){
var self__ = this;
var _20836__$1 = this;
return (new cljs.core.async.t_cljs$core$async20834(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20835__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20834.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20836){
var self__ = this;
var _20836__$1 = this;
return self__.meta20835;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20834.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20834.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20834.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async20834.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20834.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20834.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20834.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20834.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20835","meta20835",775970741,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async20834.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20834";

cljs.core.async.t_cljs$core$async20834.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async20834");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async20834 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async20834(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20835){
return (new cljs.core.async.t_cljs$core$async20834(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta20835));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async20834(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19061__auto___20960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___20960,mults,ensure_mult,p){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___20960,mults,ensure_mult,p){
return (function (state_20908){
var state_val_20909 = (state_20908[(1)]);
if((state_val_20909 === (7))){
var inst_20904 = (state_20908[(2)]);
var state_20908__$1 = state_20908;
var statearr_20910_20961 = state_20908__$1;
(statearr_20910_20961[(2)] = inst_20904);

(statearr_20910_20961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (20))){
var state_20908__$1 = state_20908;
var statearr_20911_20962 = state_20908__$1;
(statearr_20911_20962[(2)] = null);

(statearr_20911_20962[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (1))){
var state_20908__$1 = state_20908;
var statearr_20912_20963 = state_20908__$1;
(statearr_20912_20963[(2)] = null);

(statearr_20912_20963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (24))){
var inst_20887 = (state_20908[(7)]);
var inst_20896 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20887);
var state_20908__$1 = state_20908;
var statearr_20913_20964 = state_20908__$1;
(statearr_20913_20964[(2)] = inst_20896);

(statearr_20913_20964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (4))){
var inst_20839 = (state_20908[(8)]);
var inst_20839__$1 = (state_20908[(2)]);
var inst_20840 = (inst_20839__$1 == null);
var state_20908__$1 = (function (){var statearr_20914 = state_20908;
(statearr_20914[(8)] = inst_20839__$1);

return statearr_20914;
})();
if(cljs.core.truth_(inst_20840)){
var statearr_20915_20965 = state_20908__$1;
(statearr_20915_20965[(1)] = (5));

} else {
var statearr_20916_20966 = state_20908__$1;
(statearr_20916_20966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (15))){
var inst_20881 = (state_20908[(2)]);
var state_20908__$1 = state_20908;
var statearr_20917_20967 = state_20908__$1;
(statearr_20917_20967[(2)] = inst_20881);

(statearr_20917_20967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (21))){
var inst_20901 = (state_20908[(2)]);
var state_20908__$1 = (function (){var statearr_20918 = state_20908;
(statearr_20918[(9)] = inst_20901);

return statearr_20918;
})();
var statearr_20919_20968 = state_20908__$1;
(statearr_20919_20968[(2)] = null);

(statearr_20919_20968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (13))){
var inst_20863 = (state_20908[(10)]);
var inst_20865 = cljs.core.chunked_seq_QMARK_.call(null,inst_20863);
var state_20908__$1 = state_20908;
if(inst_20865){
var statearr_20920_20969 = state_20908__$1;
(statearr_20920_20969[(1)] = (16));

} else {
var statearr_20921_20970 = state_20908__$1;
(statearr_20921_20970[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (22))){
var inst_20893 = (state_20908[(2)]);
var state_20908__$1 = state_20908;
if(cljs.core.truth_(inst_20893)){
var statearr_20922_20971 = state_20908__$1;
(statearr_20922_20971[(1)] = (23));

} else {
var statearr_20923_20972 = state_20908__$1;
(statearr_20923_20972[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (6))){
var inst_20887 = (state_20908[(7)]);
var inst_20889 = (state_20908[(11)]);
var inst_20839 = (state_20908[(8)]);
var inst_20887__$1 = topic_fn.call(null,inst_20839);
var inst_20888 = cljs.core.deref.call(null,mults);
var inst_20889__$1 = cljs.core.get.call(null,inst_20888,inst_20887__$1);
var state_20908__$1 = (function (){var statearr_20924 = state_20908;
(statearr_20924[(7)] = inst_20887__$1);

(statearr_20924[(11)] = inst_20889__$1);

return statearr_20924;
})();
if(cljs.core.truth_(inst_20889__$1)){
var statearr_20925_20973 = state_20908__$1;
(statearr_20925_20973[(1)] = (19));

} else {
var statearr_20926_20974 = state_20908__$1;
(statearr_20926_20974[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (25))){
var inst_20898 = (state_20908[(2)]);
var state_20908__$1 = state_20908;
var statearr_20927_20975 = state_20908__$1;
(statearr_20927_20975[(2)] = inst_20898);

(statearr_20927_20975[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (17))){
var inst_20863 = (state_20908[(10)]);
var inst_20872 = cljs.core.first.call(null,inst_20863);
var inst_20873 = cljs.core.async.muxch_STAR_.call(null,inst_20872);
var inst_20874 = cljs.core.async.close_BANG_.call(null,inst_20873);
var inst_20875 = cljs.core.next.call(null,inst_20863);
var inst_20849 = inst_20875;
var inst_20850 = null;
var inst_20851 = (0);
var inst_20852 = (0);
var state_20908__$1 = (function (){var statearr_20928 = state_20908;
(statearr_20928[(12)] = inst_20874);

(statearr_20928[(13)] = inst_20851);

(statearr_20928[(14)] = inst_20852);

(statearr_20928[(15)] = inst_20850);

(statearr_20928[(16)] = inst_20849);

return statearr_20928;
})();
var statearr_20929_20976 = state_20908__$1;
(statearr_20929_20976[(2)] = null);

(statearr_20929_20976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (3))){
var inst_20906 = (state_20908[(2)]);
var state_20908__$1 = state_20908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20908__$1,inst_20906);
} else {
if((state_val_20909 === (12))){
var inst_20883 = (state_20908[(2)]);
var state_20908__$1 = state_20908;
var statearr_20930_20977 = state_20908__$1;
(statearr_20930_20977[(2)] = inst_20883);

(statearr_20930_20977[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (2))){
var state_20908__$1 = state_20908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20908__$1,(4),ch);
} else {
if((state_val_20909 === (23))){
var state_20908__$1 = state_20908;
var statearr_20931_20978 = state_20908__$1;
(statearr_20931_20978[(2)] = null);

(statearr_20931_20978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (19))){
var inst_20889 = (state_20908[(11)]);
var inst_20839 = (state_20908[(8)]);
var inst_20891 = cljs.core.async.muxch_STAR_.call(null,inst_20889);
var state_20908__$1 = state_20908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20908__$1,(22),inst_20891,inst_20839);
} else {
if((state_val_20909 === (11))){
var inst_20863 = (state_20908[(10)]);
var inst_20849 = (state_20908[(16)]);
var inst_20863__$1 = cljs.core.seq.call(null,inst_20849);
var state_20908__$1 = (function (){var statearr_20932 = state_20908;
(statearr_20932[(10)] = inst_20863__$1);

return statearr_20932;
})();
if(inst_20863__$1){
var statearr_20933_20979 = state_20908__$1;
(statearr_20933_20979[(1)] = (13));

} else {
var statearr_20934_20980 = state_20908__$1;
(statearr_20934_20980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (9))){
var inst_20885 = (state_20908[(2)]);
var state_20908__$1 = state_20908;
var statearr_20935_20981 = state_20908__$1;
(statearr_20935_20981[(2)] = inst_20885);

(statearr_20935_20981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (5))){
var inst_20846 = cljs.core.deref.call(null,mults);
var inst_20847 = cljs.core.vals.call(null,inst_20846);
var inst_20848 = cljs.core.seq.call(null,inst_20847);
var inst_20849 = inst_20848;
var inst_20850 = null;
var inst_20851 = (0);
var inst_20852 = (0);
var state_20908__$1 = (function (){var statearr_20936 = state_20908;
(statearr_20936[(13)] = inst_20851);

(statearr_20936[(14)] = inst_20852);

(statearr_20936[(15)] = inst_20850);

(statearr_20936[(16)] = inst_20849);

return statearr_20936;
})();
var statearr_20937_20982 = state_20908__$1;
(statearr_20937_20982[(2)] = null);

(statearr_20937_20982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (14))){
var state_20908__$1 = state_20908;
var statearr_20941_20983 = state_20908__$1;
(statearr_20941_20983[(2)] = null);

(statearr_20941_20983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (16))){
var inst_20863 = (state_20908[(10)]);
var inst_20867 = cljs.core.chunk_first.call(null,inst_20863);
var inst_20868 = cljs.core.chunk_rest.call(null,inst_20863);
var inst_20869 = cljs.core.count.call(null,inst_20867);
var inst_20849 = inst_20868;
var inst_20850 = inst_20867;
var inst_20851 = inst_20869;
var inst_20852 = (0);
var state_20908__$1 = (function (){var statearr_20942 = state_20908;
(statearr_20942[(13)] = inst_20851);

(statearr_20942[(14)] = inst_20852);

(statearr_20942[(15)] = inst_20850);

(statearr_20942[(16)] = inst_20849);

return statearr_20942;
})();
var statearr_20943_20984 = state_20908__$1;
(statearr_20943_20984[(2)] = null);

(statearr_20943_20984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (10))){
var inst_20851 = (state_20908[(13)]);
var inst_20852 = (state_20908[(14)]);
var inst_20850 = (state_20908[(15)]);
var inst_20849 = (state_20908[(16)]);
var inst_20857 = cljs.core._nth.call(null,inst_20850,inst_20852);
var inst_20858 = cljs.core.async.muxch_STAR_.call(null,inst_20857);
var inst_20859 = cljs.core.async.close_BANG_.call(null,inst_20858);
var inst_20860 = (inst_20852 + (1));
var tmp20938 = inst_20851;
var tmp20939 = inst_20850;
var tmp20940 = inst_20849;
var inst_20849__$1 = tmp20940;
var inst_20850__$1 = tmp20939;
var inst_20851__$1 = tmp20938;
var inst_20852__$1 = inst_20860;
var state_20908__$1 = (function (){var statearr_20944 = state_20908;
(statearr_20944[(17)] = inst_20859);

(statearr_20944[(13)] = inst_20851__$1);

(statearr_20944[(14)] = inst_20852__$1);

(statearr_20944[(15)] = inst_20850__$1);

(statearr_20944[(16)] = inst_20849__$1);

return statearr_20944;
})();
var statearr_20945_20985 = state_20908__$1;
(statearr_20945_20985[(2)] = null);

(statearr_20945_20985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (18))){
var inst_20878 = (state_20908[(2)]);
var state_20908__$1 = state_20908;
var statearr_20946_20986 = state_20908__$1;
(statearr_20946_20986[(2)] = inst_20878);

(statearr_20946_20986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20909 === (8))){
var inst_20851 = (state_20908[(13)]);
var inst_20852 = (state_20908[(14)]);
var inst_20854 = (inst_20852 < inst_20851);
var inst_20855 = inst_20854;
var state_20908__$1 = state_20908;
if(cljs.core.truth_(inst_20855)){
var statearr_20947_20987 = state_20908__$1;
(statearr_20947_20987[(1)] = (10));

} else {
var statearr_20948_20988 = state_20908__$1;
(statearr_20948_20988[(1)] = (11));

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
});})(c__19061__auto___20960,mults,ensure_mult,p))
;
return ((function (switch__18949__auto__,c__19061__auto___20960,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18950__auto__ = null;
var cljs$core$async$state_machine__18950__auto____0 = (function (){
var statearr_20952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20952[(0)] = cljs$core$async$state_machine__18950__auto__);

(statearr_20952[(1)] = (1));

return statearr_20952;
});
var cljs$core$async$state_machine__18950__auto____1 = (function (state_20908){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_20908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e20953){if((e20953 instanceof Object)){
var ex__18953__auto__ = e20953;
var statearr_20954_20989 = state_20908;
(statearr_20954_20989[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20990 = state_20908;
state_20908 = G__20990;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$state_machine__18950__auto__ = function(state_20908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18950__auto____1.call(this,state_20908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18950__auto____0;
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18950__auto____1;
return cljs$core$async$state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___20960,mults,ensure_mult,p))
})();
var state__19063__auto__ = (function (){var statearr_20955 = f__19062__auto__.call(null);
(statearr_20955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___20960);

return statearr_20955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___20960,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args20991 = [];
var len__17863__auto___20994 = arguments.length;
var i__17864__auto___20995 = (0);
while(true){
if((i__17864__auto___20995 < len__17863__auto___20994)){
args20991.push((arguments[i__17864__auto___20995]));

var G__20996 = (i__17864__auto___20995 + (1));
i__17864__auto___20995 = G__20996;
continue;
} else {
}
break;
}

var G__20993 = args20991.length;
switch (G__20993) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20991.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args20998 = [];
var len__17863__auto___21001 = arguments.length;
var i__17864__auto___21002 = (0);
while(true){
if((i__17864__auto___21002 < len__17863__auto___21001)){
args20998.push((arguments[i__17864__auto___21002]));

var G__21003 = (i__17864__auto___21002 + (1));
i__17864__auto___21002 = G__21003;
continue;
} else {
}
break;
}

var G__21000 = args20998.length;
switch (G__21000) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20998.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21005 = [];
var len__17863__auto___21076 = arguments.length;
var i__17864__auto___21077 = (0);
while(true){
if((i__17864__auto___21077 < len__17863__auto___21076)){
args21005.push((arguments[i__17864__auto___21077]));

var G__21078 = (i__17864__auto___21077 + (1));
i__17864__auto___21077 = G__21078;
continue;
} else {
}
break;
}

var G__21007 = args21005.length;
switch (G__21007) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21005.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19061__auto___21080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___21080,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___21080,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21046){
var state_val_21047 = (state_21046[(1)]);
if((state_val_21047 === (7))){
var state_21046__$1 = state_21046;
var statearr_21048_21081 = state_21046__$1;
(statearr_21048_21081[(2)] = null);

(statearr_21048_21081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21047 === (1))){
var state_21046__$1 = state_21046;
var statearr_21049_21082 = state_21046__$1;
(statearr_21049_21082[(2)] = null);

(statearr_21049_21082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21047 === (4))){
var inst_21010 = (state_21046[(7)]);
var inst_21012 = (inst_21010 < cnt);
var state_21046__$1 = state_21046;
if(cljs.core.truth_(inst_21012)){
var statearr_21050_21083 = state_21046__$1;
(statearr_21050_21083[(1)] = (6));

} else {
var statearr_21051_21084 = state_21046__$1;
(statearr_21051_21084[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21047 === (15))){
var inst_21042 = (state_21046[(2)]);
var state_21046__$1 = state_21046;
var statearr_21052_21085 = state_21046__$1;
(statearr_21052_21085[(2)] = inst_21042);

(statearr_21052_21085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21047 === (13))){
var inst_21035 = cljs.core.async.close_BANG_.call(null,out);
var state_21046__$1 = state_21046;
var statearr_21053_21086 = state_21046__$1;
(statearr_21053_21086[(2)] = inst_21035);

(statearr_21053_21086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21047 === (6))){
var state_21046__$1 = state_21046;
var statearr_21054_21087 = state_21046__$1;
(statearr_21054_21087[(2)] = null);

(statearr_21054_21087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21047 === (3))){
var inst_21044 = (state_21046[(2)]);
var state_21046__$1 = state_21046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21046__$1,inst_21044);
} else {
if((state_val_21047 === (12))){
var inst_21032 = (state_21046[(8)]);
var inst_21032__$1 = (state_21046[(2)]);
var inst_21033 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21032__$1);
var state_21046__$1 = (function (){var statearr_21055 = state_21046;
(statearr_21055[(8)] = inst_21032__$1);

return statearr_21055;
})();
if(cljs.core.truth_(inst_21033)){
var statearr_21056_21088 = state_21046__$1;
(statearr_21056_21088[(1)] = (13));

} else {
var statearr_21057_21089 = state_21046__$1;
(statearr_21057_21089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21047 === (2))){
var inst_21009 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21010 = (0);
var state_21046__$1 = (function (){var statearr_21058 = state_21046;
(statearr_21058[(9)] = inst_21009);

(statearr_21058[(7)] = inst_21010);

return statearr_21058;
})();
var statearr_21059_21090 = state_21046__$1;
(statearr_21059_21090[(2)] = null);

(statearr_21059_21090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21047 === (11))){
var inst_21010 = (state_21046[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21046,(10),Object,null,(9));
var inst_21019 = chs__$1.call(null,inst_21010);
var inst_21020 = done.call(null,inst_21010);
var inst_21021 = cljs.core.async.take_BANG_.call(null,inst_21019,inst_21020);
var state_21046__$1 = state_21046;
var statearr_21060_21091 = state_21046__$1;
(statearr_21060_21091[(2)] = inst_21021);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21046__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21047 === (9))){
var inst_21010 = (state_21046[(7)]);
var inst_21023 = (state_21046[(2)]);
var inst_21024 = (inst_21010 + (1));
var inst_21010__$1 = inst_21024;
var state_21046__$1 = (function (){var statearr_21061 = state_21046;
(statearr_21061[(10)] = inst_21023);

(statearr_21061[(7)] = inst_21010__$1);

return statearr_21061;
})();
var statearr_21062_21092 = state_21046__$1;
(statearr_21062_21092[(2)] = null);

(statearr_21062_21092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21047 === (5))){
var inst_21030 = (state_21046[(2)]);
var state_21046__$1 = (function (){var statearr_21063 = state_21046;
(statearr_21063[(11)] = inst_21030);

return statearr_21063;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21046__$1,(12),dchan);
} else {
if((state_val_21047 === (14))){
var inst_21032 = (state_21046[(8)]);
var inst_21037 = cljs.core.apply.call(null,f,inst_21032);
var state_21046__$1 = state_21046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21046__$1,(16),out,inst_21037);
} else {
if((state_val_21047 === (16))){
var inst_21039 = (state_21046[(2)]);
var state_21046__$1 = (function (){var statearr_21064 = state_21046;
(statearr_21064[(12)] = inst_21039);

return statearr_21064;
})();
var statearr_21065_21093 = state_21046__$1;
(statearr_21065_21093[(2)] = null);

(statearr_21065_21093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21047 === (10))){
var inst_21014 = (state_21046[(2)]);
var inst_21015 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21046__$1 = (function (){var statearr_21066 = state_21046;
(statearr_21066[(13)] = inst_21014);

return statearr_21066;
})();
var statearr_21067_21094 = state_21046__$1;
(statearr_21067_21094[(2)] = inst_21015);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21046__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21047 === (8))){
var inst_21028 = (state_21046[(2)]);
var state_21046__$1 = state_21046;
var statearr_21068_21095 = state_21046__$1;
(statearr_21068_21095[(2)] = inst_21028);

(statearr_21068_21095[(1)] = (5));


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
});})(c__19061__auto___21080,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18949__auto__,c__19061__auto___21080,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18950__auto__ = null;
var cljs$core$async$state_machine__18950__auto____0 = (function (){
var statearr_21072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21072[(0)] = cljs$core$async$state_machine__18950__auto__);

(statearr_21072[(1)] = (1));

return statearr_21072;
});
var cljs$core$async$state_machine__18950__auto____1 = (function (state_21046){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_21046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e21073){if((e21073 instanceof Object)){
var ex__18953__auto__ = e21073;
var statearr_21074_21096 = state_21046;
(statearr_21074_21096[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21097 = state_21046;
state_21046 = G__21097;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$state_machine__18950__auto__ = function(state_21046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18950__auto____1.call(this,state_21046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18950__auto____0;
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18950__auto____1;
return cljs$core$async$state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___21080,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19063__auto__ = (function (){var statearr_21075 = f__19062__auto__.call(null);
(statearr_21075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___21080);

return statearr_21075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___21080,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21099 = [];
var len__17863__auto___21155 = arguments.length;
var i__17864__auto___21156 = (0);
while(true){
if((i__17864__auto___21156 < len__17863__auto___21155)){
args21099.push((arguments[i__17864__auto___21156]));

var G__21157 = (i__17864__auto___21156 + (1));
i__17864__auto___21156 = G__21157;
continue;
} else {
}
break;
}

var G__21101 = args21099.length;
switch (G__21101) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21099.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19061__auto___21159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___21159,out){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___21159,out){
return (function (state_21131){
var state_val_21132 = (state_21131[(1)]);
if((state_val_21132 === (7))){
var inst_21111 = (state_21131[(7)]);
var inst_21110 = (state_21131[(8)]);
var inst_21110__$1 = (state_21131[(2)]);
var inst_21111__$1 = cljs.core.nth.call(null,inst_21110__$1,(0),null);
var inst_21112 = cljs.core.nth.call(null,inst_21110__$1,(1),null);
var inst_21113 = (inst_21111__$1 == null);
var state_21131__$1 = (function (){var statearr_21133 = state_21131;
(statearr_21133[(9)] = inst_21112);

(statearr_21133[(7)] = inst_21111__$1);

(statearr_21133[(8)] = inst_21110__$1);

return statearr_21133;
})();
if(cljs.core.truth_(inst_21113)){
var statearr_21134_21160 = state_21131__$1;
(statearr_21134_21160[(1)] = (8));

} else {
var statearr_21135_21161 = state_21131__$1;
(statearr_21135_21161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21132 === (1))){
var inst_21102 = cljs.core.vec.call(null,chs);
var inst_21103 = inst_21102;
var state_21131__$1 = (function (){var statearr_21136 = state_21131;
(statearr_21136[(10)] = inst_21103);

return statearr_21136;
})();
var statearr_21137_21162 = state_21131__$1;
(statearr_21137_21162[(2)] = null);

(statearr_21137_21162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21132 === (4))){
var inst_21103 = (state_21131[(10)]);
var state_21131__$1 = state_21131;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21131__$1,(7),inst_21103);
} else {
if((state_val_21132 === (6))){
var inst_21127 = (state_21131[(2)]);
var state_21131__$1 = state_21131;
var statearr_21138_21163 = state_21131__$1;
(statearr_21138_21163[(2)] = inst_21127);

(statearr_21138_21163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21132 === (3))){
var inst_21129 = (state_21131[(2)]);
var state_21131__$1 = state_21131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21131__$1,inst_21129);
} else {
if((state_val_21132 === (2))){
var inst_21103 = (state_21131[(10)]);
var inst_21105 = cljs.core.count.call(null,inst_21103);
var inst_21106 = (inst_21105 > (0));
var state_21131__$1 = state_21131;
if(cljs.core.truth_(inst_21106)){
var statearr_21140_21164 = state_21131__$1;
(statearr_21140_21164[(1)] = (4));

} else {
var statearr_21141_21165 = state_21131__$1;
(statearr_21141_21165[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21132 === (11))){
var inst_21103 = (state_21131[(10)]);
var inst_21120 = (state_21131[(2)]);
var tmp21139 = inst_21103;
var inst_21103__$1 = tmp21139;
var state_21131__$1 = (function (){var statearr_21142 = state_21131;
(statearr_21142[(11)] = inst_21120);

(statearr_21142[(10)] = inst_21103__$1);

return statearr_21142;
})();
var statearr_21143_21166 = state_21131__$1;
(statearr_21143_21166[(2)] = null);

(statearr_21143_21166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21132 === (9))){
var inst_21111 = (state_21131[(7)]);
var state_21131__$1 = state_21131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21131__$1,(11),out,inst_21111);
} else {
if((state_val_21132 === (5))){
var inst_21125 = cljs.core.async.close_BANG_.call(null,out);
var state_21131__$1 = state_21131;
var statearr_21144_21167 = state_21131__$1;
(statearr_21144_21167[(2)] = inst_21125);

(statearr_21144_21167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21132 === (10))){
var inst_21123 = (state_21131[(2)]);
var state_21131__$1 = state_21131;
var statearr_21145_21168 = state_21131__$1;
(statearr_21145_21168[(2)] = inst_21123);

(statearr_21145_21168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21132 === (8))){
var inst_21103 = (state_21131[(10)]);
var inst_21112 = (state_21131[(9)]);
var inst_21111 = (state_21131[(7)]);
var inst_21110 = (state_21131[(8)]);
var inst_21115 = (function (){var cs = inst_21103;
var vec__21108 = inst_21110;
var v = inst_21111;
var c = inst_21112;
return ((function (cs,vec__21108,v,c,inst_21103,inst_21112,inst_21111,inst_21110,state_val_21132,c__19061__auto___21159,out){
return (function (p1__21098_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21098_SHARP_);
});
;})(cs,vec__21108,v,c,inst_21103,inst_21112,inst_21111,inst_21110,state_val_21132,c__19061__auto___21159,out))
})();
var inst_21116 = cljs.core.filterv.call(null,inst_21115,inst_21103);
var inst_21103__$1 = inst_21116;
var state_21131__$1 = (function (){var statearr_21146 = state_21131;
(statearr_21146[(10)] = inst_21103__$1);

return statearr_21146;
})();
var statearr_21147_21169 = state_21131__$1;
(statearr_21147_21169[(2)] = null);

(statearr_21147_21169[(1)] = (2));


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
});})(c__19061__auto___21159,out))
;
return ((function (switch__18949__auto__,c__19061__auto___21159,out){
return (function() {
var cljs$core$async$state_machine__18950__auto__ = null;
var cljs$core$async$state_machine__18950__auto____0 = (function (){
var statearr_21151 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21151[(0)] = cljs$core$async$state_machine__18950__auto__);

(statearr_21151[(1)] = (1));

return statearr_21151;
});
var cljs$core$async$state_machine__18950__auto____1 = (function (state_21131){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_21131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e21152){if((e21152 instanceof Object)){
var ex__18953__auto__ = e21152;
var statearr_21153_21170 = state_21131;
(statearr_21153_21170[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21171 = state_21131;
state_21131 = G__21171;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$state_machine__18950__auto__ = function(state_21131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18950__auto____1.call(this,state_21131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18950__auto____0;
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18950__auto____1;
return cljs$core$async$state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___21159,out))
})();
var state__19063__auto__ = (function (){var statearr_21154 = f__19062__auto__.call(null);
(statearr_21154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___21159);

return statearr_21154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___21159,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21172 = [];
var len__17863__auto___21221 = arguments.length;
var i__17864__auto___21222 = (0);
while(true){
if((i__17864__auto___21222 < len__17863__auto___21221)){
args21172.push((arguments[i__17864__auto___21222]));

var G__21223 = (i__17864__auto___21222 + (1));
i__17864__auto___21222 = G__21223;
continue;
} else {
}
break;
}

var G__21174 = args21172.length;
switch (G__21174) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21172.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19061__auto___21225 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___21225,out){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___21225,out){
return (function (state_21198){
var state_val_21199 = (state_21198[(1)]);
if((state_val_21199 === (7))){
var inst_21180 = (state_21198[(7)]);
var inst_21180__$1 = (state_21198[(2)]);
var inst_21181 = (inst_21180__$1 == null);
var inst_21182 = cljs.core.not.call(null,inst_21181);
var state_21198__$1 = (function (){var statearr_21200 = state_21198;
(statearr_21200[(7)] = inst_21180__$1);

return statearr_21200;
})();
if(inst_21182){
var statearr_21201_21226 = state_21198__$1;
(statearr_21201_21226[(1)] = (8));

} else {
var statearr_21202_21227 = state_21198__$1;
(statearr_21202_21227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (1))){
var inst_21175 = (0);
var state_21198__$1 = (function (){var statearr_21203 = state_21198;
(statearr_21203[(8)] = inst_21175);

return statearr_21203;
})();
var statearr_21204_21228 = state_21198__$1;
(statearr_21204_21228[(2)] = null);

(statearr_21204_21228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (4))){
var state_21198__$1 = state_21198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21198__$1,(7),ch);
} else {
if((state_val_21199 === (6))){
var inst_21193 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
var statearr_21205_21229 = state_21198__$1;
(statearr_21205_21229[(2)] = inst_21193);

(statearr_21205_21229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (3))){
var inst_21195 = (state_21198[(2)]);
var inst_21196 = cljs.core.async.close_BANG_.call(null,out);
var state_21198__$1 = (function (){var statearr_21206 = state_21198;
(statearr_21206[(9)] = inst_21195);

return statearr_21206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21198__$1,inst_21196);
} else {
if((state_val_21199 === (2))){
var inst_21175 = (state_21198[(8)]);
var inst_21177 = (inst_21175 < n);
var state_21198__$1 = state_21198;
if(cljs.core.truth_(inst_21177)){
var statearr_21207_21230 = state_21198__$1;
(statearr_21207_21230[(1)] = (4));

} else {
var statearr_21208_21231 = state_21198__$1;
(statearr_21208_21231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (11))){
var inst_21175 = (state_21198[(8)]);
var inst_21185 = (state_21198[(2)]);
var inst_21186 = (inst_21175 + (1));
var inst_21175__$1 = inst_21186;
var state_21198__$1 = (function (){var statearr_21209 = state_21198;
(statearr_21209[(10)] = inst_21185);

(statearr_21209[(8)] = inst_21175__$1);

return statearr_21209;
})();
var statearr_21210_21232 = state_21198__$1;
(statearr_21210_21232[(2)] = null);

(statearr_21210_21232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (9))){
var state_21198__$1 = state_21198;
var statearr_21211_21233 = state_21198__$1;
(statearr_21211_21233[(2)] = null);

(statearr_21211_21233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (5))){
var state_21198__$1 = state_21198;
var statearr_21212_21234 = state_21198__$1;
(statearr_21212_21234[(2)] = null);

(statearr_21212_21234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (10))){
var inst_21190 = (state_21198[(2)]);
var state_21198__$1 = state_21198;
var statearr_21213_21235 = state_21198__$1;
(statearr_21213_21235[(2)] = inst_21190);

(statearr_21213_21235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21199 === (8))){
var inst_21180 = (state_21198[(7)]);
var state_21198__$1 = state_21198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21198__$1,(11),out,inst_21180);
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
});})(c__19061__auto___21225,out))
;
return ((function (switch__18949__auto__,c__19061__auto___21225,out){
return (function() {
var cljs$core$async$state_machine__18950__auto__ = null;
var cljs$core$async$state_machine__18950__auto____0 = (function (){
var statearr_21217 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21217[(0)] = cljs$core$async$state_machine__18950__auto__);

(statearr_21217[(1)] = (1));

return statearr_21217;
});
var cljs$core$async$state_machine__18950__auto____1 = (function (state_21198){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_21198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e21218){if((e21218 instanceof Object)){
var ex__18953__auto__ = e21218;
var statearr_21219_21236 = state_21198;
(statearr_21219_21236[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21237 = state_21198;
state_21198 = G__21237;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$state_machine__18950__auto__ = function(state_21198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18950__auto____1.call(this,state_21198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18950__auto____0;
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18950__auto____1;
return cljs$core$async$state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___21225,out))
})();
var state__19063__auto__ = (function (){var statearr_21220 = f__19062__auto__.call(null);
(statearr_21220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___21225);

return statearr_21220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___21225,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21245 = (function (map_LT_,f,ch,meta21246){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21246 = meta21246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21247,meta21246__$1){
var self__ = this;
var _21247__$1 = this;
return (new cljs.core.async.t_cljs$core$async21245(self__.map_LT_,self__.f,self__.ch,meta21246__$1));
});

cljs.core.async.t_cljs$core$async21245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21247){
var self__ = this;
var _21247__$1 = this;
return self__.meta21246;
});

cljs.core.async.t_cljs$core$async21245.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21245.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21245.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21245.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21245.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21248 = (function (map_LT_,f,ch,meta21246,_,fn1,meta21249){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21246 = meta21246;
this._ = _;
this.fn1 = fn1;
this.meta21249 = meta21249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21250,meta21249__$1){
var self__ = this;
var _21250__$1 = this;
return (new cljs.core.async.t_cljs$core$async21248(self__.map_LT_,self__.f,self__.ch,self__.meta21246,self__._,self__.fn1,meta21249__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21250){
var self__ = this;
var _21250__$1 = this;
return self__.meta21249;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21248.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21248.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21238_SHARP_){
return f1.call(null,(((p1__21238_SHARP_ == null))?null:self__.f.call(null,p1__21238_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21248.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21246","meta21246",-755131674,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21245","cljs.core.async/t_cljs$core$async21245",-1667357973,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21249","meta21249",-242349727,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21248";

cljs.core.async.t_cljs$core$async21248.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21248");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21248 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21248(map_LT___$1,f__$1,ch__$1,meta21246__$1,___$2,fn1__$1,meta21249){
return (new cljs.core.async.t_cljs$core$async21248(map_LT___$1,f__$1,ch__$1,meta21246__$1,___$2,fn1__$1,meta21249));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21248(self__.map_LT_,self__.f,self__.ch,self__.meta21246,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16793__auto__ = ret;
if(cljs.core.truth_(and__16793__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16793__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21245.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21245.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21246","meta21246",-755131674,null)], null);
});

cljs.core.async.t_cljs$core$async21245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21245";

cljs.core.async.t_cljs$core$async21245.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21245");
});

cljs.core.async.__GT_t_cljs$core$async21245 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21245(map_LT___$1,f__$1,ch__$1,meta21246){
return (new cljs.core.async.t_cljs$core$async21245(map_LT___$1,f__$1,ch__$1,meta21246));
});

}

return (new cljs.core.async.t_cljs$core$async21245(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21254 = (function (map_GT_,f,ch,meta21255){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21255 = meta21255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21256,meta21255__$1){
var self__ = this;
var _21256__$1 = this;
return (new cljs.core.async.t_cljs$core$async21254(self__.map_GT_,self__.f,self__.ch,meta21255__$1));
});

cljs.core.async.t_cljs$core$async21254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21256){
var self__ = this;
var _21256__$1 = this;
return self__.meta21255;
});

cljs.core.async.t_cljs$core$async21254.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21254.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21254.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21255","meta21255",-507108673,null)], null);
});

cljs.core.async.t_cljs$core$async21254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21254";

cljs.core.async.t_cljs$core$async21254.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21254");
});

cljs.core.async.__GT_t_cljs$core$async21254 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21254(map_GT___$1,f__$1,ch__$1,meta21255){
return (new cljs.core.async.t_cljs$core$async21254(map_GT___$1,f__$1,ch__$1,meta21255));
});

}

return (new cljs.core.async.t_cljs$core$async21254(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21260 = (function (filter_GT_,p,ch,meta21261){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21261 = meta21261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21262,meta21261__$1){
var self__ = this;
var _21262__$1 = this;
return (new cljs.core.async.t_cljs$core$async21260(self__.filter_GT_,self__.p,self__.ch,meta21261__$1));
});

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21262){
var self__ = this;
var _21262__$1 = this;
return self__.meta21261;
});

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21260.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21261","meta21261",288240797,null)], null);
});

cljs.core.async.t_cljs$core$async21260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21260";

cljs.core.async.t_cljs$core$async21260.cljs$lang$ctorPrWriter = (function (this__17403__auto__,writer__17404__auto__,opt__17405__auto__){
return cljs.core._write.call(null,writer__17404__auto__,"cljs.core.async/t_cljs$core$async21260");
});

cljs.core.async.__GT_t_cljs$core$async21260 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21260(filter_GT___$1,p__$1,ch__$1,meta21261){
return (new cljs.core.async.t_cljs$core$async21260(filter_GT___$1,p__$1,ch__$1,meta21261));
});

}

return (new cljs.core.async.t_cljs$core$async21260(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21263 = [];
var len__17863__auto___21307 = arguments.length;
var i__17864__auto___21308 = (0);
while(true){
if((i__17864__auto___21308 < len__17863__auto___21307)){
args21263.push((arguments[i__17864__auto___21308]));

var G__21309 = (i__17864__auto___21308 + (1));
i__17864__auto___21308 = G__21309;
continue;
} else {
}
break;
}

var G__21265 = args21263.length;
switch (G__21265) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21263.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19061__auto___21311 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___21311,out){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___21311,out){
return (function (state_21286){
var state_val_21287 = (state_21286[(1)]);
if((state_val_21287 === (7))){
var inst_21282 = (state_21286[(2)]);
var state_21286__$1 = state_21286;
var statearr_21288_21312 = state_21286__$1;
(statearr_21288_21312[(2)] = inst_21282);

(statearr_21288_21312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21287 === (1))){
var state_21286__$1 = state_21286;
var statearr_21289_21313 = state_21286__$1;
(statearr_21289_21313[(2)] = null);

(statearr_21289_21313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21287 === (4))){
var inst_21268 = (state_21286[(7)]);
var inst_21268__$1 = (state_21286[(2)]);
var inst_21269 = (inst_21268__$1 == null);
var state_21286__$1 = (function (){var statearr_21290 = state_21286;
(statearr_21290[(7)] = inst_21268__$1);

return statearr_21290;
})();
if(cljs.core.truth_(inst_21269)){
var statearr_21291_21314 = state_21286__$1;
(statearr_21291_21314[(1)] = (5));

} else {
var statearr_21292_21315 = state_21286__$1;
(statearr_21292_21315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21287 === (6))){
var inst_21268 = (state_21286[(7)]);
var inst_21273 = p.call(null,inst_21268);
var state_21286__$1 = state_21286;
if(cljs.core.truth_(inst_21273)){
var statearr_21293_21316 = state_21286__$1;
(statearr_21293_21316[(1)] = (8));

} else {
var statearr_21294_21317 = state_21286__$1;
(statearr_21294_21317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21287 === (3))){
var inst_21284 = (state_21286[(2)]);
var state_21286__$1 = state_21286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21286__$1,inst_21284);
} else {
if((state_val_21287 === (2))){
var state_21286__$1 = state_21286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21286__$1,(4),ch);
} else {
if((state_val_21287 === (11))){
var inst_21276 = (state_21286[(2)]);
var state_21286__$1 = state_21286;
var statearr_21295_21318 = state_21286__$1;
(statearr_21295_21318[(2)] = inst_21276);

(statearr_21295_21318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21287 === (9))){
var state_21286__$1 = state_21286;
var statearr_21296_21319 = state_21286__$1;
(statearr_21296_21319[(2)] = null);

(statearr_21296_21319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21287 === (5))){
var inst_21271 = cljs.core.async.close_BANG_.call(null,out);
var state_21286__$1 = state_21286;
var statearr_21297_21320 = state_21286__$1;
(statearr_21297_21320[(2)] = inst_21271);

(statearr_21297_21320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21287 === (10))){
var inst_21279 = (state_21286[(2)]);
var state_21286__$1 = (function (){var statearr_21298 = state_21286;
(statearr_21298[(8)] = inst_21279);

return statearr_21298;
})();
var statearr_21299_21321 = state_21286__$1;
(statearr_21299_21321[(2)] = null);

(statearr_21299_21321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21287 === (8))){
var inst_21268 = (state_21286[(7)]);
var state_21286__$1 = state_21286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21286__$1,(11),out,inst_21268);
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
});})(c__19061__auto___21311,out))
;
return ((function (switch__18949__auto__,c__19061__auto___21311,out){
return (function() {
var cljs$core$async$state_machine__18950__auto__ = null;
var cljs$core$async$state_machine__18950__auto____0 = (function (){
var statearr_21303 = [null,null,null,null,null,null,null,null,null];
(statearr_21303[(0)] = cljs$core$async$state_machine__18950__auto__);

(statearr_21303[(1)] = (1));

return statearr_21303;
});
var cljs$core$async$state_machine__18950__auto____1 = (function (state_21286){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_21286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e21304){if((e21304 instanceof Object)){
var ex__18953__auto__ = e21304;
var statearr_21305_21322 = state_21286;
(statearr_21305_21322[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21323 = state_21286;
state_21286 = G__21323;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$state_machine__18950__auto__ = function(state_21286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18950__auto____1.call(this,state_21286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18950__auto____0;
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18950__auto____1;
return cljs$core$async$state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___21311,out))
})();
var state__19063__auto__ = (function (){var statearr_21306 = f__19062__auto__.call(null);
(statearr_21306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___21311);

return statearr_21306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___21311,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21324 = [];
var len__17863__auto___21327 = arguments.length;
var i__17864__auto___21328 = (0);
while(true){
if((i__17864__auto___21328 < len__17863__auto___21327)){
args21324.push((arguments[i__17864__auto___21328]));

var G__21329 = (i__17864__auto___21328 + (1));
i__17864__auto___21328 = G__21329;
continue;
} else {
}
break;
}

var G__21326 = args21324.length;
switch (G__21326) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21324.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto__){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto__){
return (function (state_21496){
var state_val_21497 = (state_21496[(1)]);
if((state_val_21497 === (7))){
var inst_21492 = (state_21496[(2)]);
var state_21496__$1 = state_21496;
var statearr_21498_21539 = state_21496__$1;
(statearr_21498_21539[(2)] = inst_21492);

(statearr_21498_21539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (20))){
var inst_21462 = (state_21496[(7)]);
var inst_21473 = (state_21496[(2)]);
var inst_21474 = cljs.core.next.call(null,inst_21462);
var inst_21448 = inst_21474;
var inst_21449 = null;
var inst_21450 = (0);
var inst_21451 = (0);
var state_21496__$1 = (function (){var statearr_21499 = state_21496;
(statearr_21499[(8)] = inst_21473);

(statearr_21499[(9)] = inst_21450);

(statearr_21499[(10)] = inst_21449);

(statearr_21499[(11)] = inst_21448);

(statearr_21499[(12)] = inst_21451);

return statearr_21499;
})();
var statearr_21500_21540 = state_21496__$1;
(statearr_21500_21540[(2)] = null);

(statearr_21500_21540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (1))){
var state_21496__$1 = state_21496;
var statearr_21501_21541 = state_21496__$1;
(statearr_21501_21541[(2)] = null);

(statearr_21501_21541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (4))){
var inst_21437 = (state_21496[(13)]);
var inst_21437__$1 = (state_21496[(2)]);
var inst_21438 = (inst_21437__$1 == null);
var state_21496__$1 = (function (){var statearr_21502 = state_21496;
(statearr_21502[(13)] = inst_21437__$1);

return statearr_21502;
})();
if(cljs.core.truth_(inst_21438)){
var statearr_21503_21542 = state_21496__$1;
(statearr_21503_21542[(1)] = (5));

} else {
var statearr_21504_21543 = state_21496__$1;
(statearr_21504_21543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (15))){
var state_21496__$1 = state_21496;
var statearr_21508_21544 = state_21496__$1;
(statearr_21508_21544[(2)] = null);

(statearr_21508_21544[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (21))){
var state_21496__$1 = state_21496;
var statearr_21509_21545 = state_21496__$1;
(statearr_21509_21545[(2)] = null);

(statearr_21509_21545[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (13))){
var inst_21450 = (state_21496[(9)]);
var inst_21449 = (state_21496[(10)]);
var inst_21448 = (state_21496[(11)]);
var inst_21451 = (state_21496[(12)]);
var inst_21458 = (state_21496[(2)]);
var inst_21459 = (inst_21451 + (1));
var tmp21505 = inst_21450;
var tmp21506 = inst_21449;
var tmp21507 = inst_21448;
var inst_21448__$1 = tmp21507;
var inst_21449__$1 = tmp21506;
var inst_21450__$1 = tmp21505;
var inst_21451__$1 = inst_21459;
var state_21496__$1 = (function (){var statearr_21510 = state_21496;
(statearr_21510[(14)] = inst_21458);

(statearr_21510[(9)] = inst_21450__$1);

(statearr_21510[(10)] = inst_21449__$1);

(statearr_21510[(11)] = inst_21448__$1);

(statearr_21510[(12)] = inst_21451__$1);

return statearr_21510;
})();
var statearr_21511_21546 = state_21496__$1;
(statearr_21511_21546[(2)] = null);

(statearr_21511_21546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (22))){
var state_21496__$1 = state_21496;
var statearr_21512_21547 = state_21496__$1;
(statearr_21512_21547[(2)] = null);

(statearr_21512_21547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (6))){
var inst_21437 = (state_21496[(13)]);
var inst_21446 = f.call(null,inst_21437);
var inst_21447 = cljs.core.seq.call(null,inst_21446);
var inst_21448 = inst_21447;
var inst_21449 = null;
var inst_21450 = (0);
var inst_21451 = (0);
var state_21496__$1 = (function (){var statearr_21513 = state_21496;
(statearr_21513[(9)] = inst_21450);

(statearr_21513[(10)] = inst_21449);

(statearr_21513[(11)] = inst_21448);

(statearr_21513[(12)] = inst_21451);

return statearr_21513;
})();
var statearr_21514_21548 = state_21496__$1;
(statearr_21514_21548[(2)] = null);

(statearr_21514_21548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (17))){
var inst_21462 = (state_21496[(7)]);
var inst_21466 = cljs.core.chunk_first.call(null,inst_21462);
var inst_21467 = cljs.core.chunk_rest.call(null,inst_21462);
var inst_21468 = cljs.core.count.call(null,inst_21466);
var inst_21448 = inst_21467;
var inst_21449 = inst_21466;
var inst_21450 = inst_21468;
var inst_21451 = (0);
var state_21496__$1 = (function (){var statearr_21515 = state_21496;
(statearr_21515[(9)] = inst_21450);

(statearr_21515[(10)] = inst_21449);

(statearr_21515[(11)] = inst_21448);

(statearr_21515[(12)] = inst_21451);

return statearr_21515;
})();
var statearr_21516_21549 = state_21496__$1;
(statearr_21516_21549[(2)] = null);

(statearr_21516_21549[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (3))){
var inst_21494 = (state_21496[(2)]);
var state_21496__$1 = state_21496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21496__$1,inst_21494);
} else {
if((state_val_21497 === (12))){
var inst_21482 = (state_21496[(2)]);
var state_21496__$1 = state_21496;
var statearr_21517_21550 = state_21496__$1;
(statearr_21517_21550[(2)] = inst_21482);

(statearr_21517_21550[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (2))){
var state_21496__$1 = state_21496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21496__$1,(4),in$);
} else {
if((state_val_21497 === (23))){
var inst_21490 = (state_21496[(2)]);
var state_21496__$1 = state_21496;
var statearr_21518_21551 = state_21496__$1;
(statearr_21518_21551[(2)] = inst_21490);

(statearr_21518_21551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (19))){
var inst_21477 = (state_21496[(2)]);
var state_21496__$1 = state_21496;
var statearr_21519_21552 = state_21496__$1;
(statearr_21519_21552[(2)] = inst_21477);

(statearr_21519_21552[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (11))){
var inst_21448 = (state_21496[(11)]);
var inst_21462 = (state_21496[(7)]);
var inst_21462__$1 = cljs.core.seq.call(null,inst_21448);
var state_21496__$1 = (function (){var statearr_21520 = state_21496;
(statearr_21520[(7)] = inst_21462__$1);

return statearr_21520;
})();
if(inst_21462__$1){
var statearr_21521_21553 = state_21496__$1;
(statearr_21521_21553[(1)] = (14));

} else {
var statearr_21522_21554 = state_21496__$1;
(statearr_21522_21554[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (9))){
var inst_21484 = (state_21496[(2)]);
var inst_21485 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21496__$1 = (function (){var statearr_21523 = state_21496;
(statearr_21523[(15)] = inst_21484);

return statearr_21523;
})();
if(cljs.core.truth_(inst_21485)){
var statearr_21524_21555 = state_21496__$1;
(statearr_21524_21555[(1)] = (21));

} else {
var statearr_21525_21556 = state_21496__$1;
(statearr_21525_21556[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (5))){
var inst_21440 = cljs.core.async.close_BANG_.call(null,out);
var state_21496__$1 = state_21496;
var statearr_21526_21557 = state_21496__$1;
(statearr_21526_21557[(2)] = inst_21440);

(statearr_21526_21557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (14))){
var inst_21462 = (state_21496[(7)]);
var inst_21464 = cljs.core.chunked_seq_QMARK_.call(null,inst_21462);
var state_21496__$1 = state_21496;
if(inst_21464){
var statearr_21527_21558 = state_21496__$1;
(statearr_21527_21558[(1)] = (17));

} else {
var statearr_21528_21559 = state_21496__$1;
(statearr_21528_21559[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (16))){
var inst_21480 = (state_21496[(2)]);
var state_21496__$1 = state_21496;
var statearr_21529_21560 = state_21496__$1;
(statearr_21529_21560[(2)] = inst_21480);

(statearr_21529_21560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21497 === (10))){
var inst_21449 = (state_21496[(10)]);
var inst_21451 = (state_21496[(12)]);
var inst_21456 = cljs.core._nth.call(null,inst_21449,inst_21451);
var state_21496__$1 = state_21496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21496__$1,(13),out,inst_21456);
} else {
if((state_val_21497 === (18))){
var inst_21462 = (state_21496[(7)]);
var inst_21471 = cljs.core.first.call(null,inst_21462);
var state_21496__$1 = state_21496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21496__$1,(20),out,inst_21471);
} else {
if((state_val_21497 === (8))){
var inst_21450 = (state_21496[(9)]);
var inst_21451 = (state_21496[(12)]);
var inst_21453 = (inst_21451 < inst_21450);
var inst_21454 = inst_21453;
var state_21496__$1 = state_21496;
if(cljs.core.truth_(inst_21454)){
var statearr_21530_21561 = state_21496__$1;
(statearr_21530_21561[(1)] = (10));

} else {
var statearr_21531_21562 = state_21496__$1;
(statearr_21531_21562[(1)] = (11));

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
});})(c__19061__auto__))
;
return ((function (switch__18949__auto__,c__19061__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18950__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18950__auto____0 = (function (){
var statearr_21535 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21535[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18950__auto__);

(statearr_21535[(1)] = (1));

return statearr_21535;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18950__auto____1 = (function (state_21496){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_21496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e21536){if((e21536 instanceof Object)){
var ex__18953__auto__ = e21536;
var statearr_21537_21563 = state_21496;
(statearr_21537_21563[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21564 = state_21496;
state_21496 = G__21564;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18950__auto__ = function(state_21496){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18950__auto____1.call(this,state_21496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18950__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18950__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto__))
})();
var state__19063__auto__ = (function (){var statearr_21538 = f__19062__auto__.call(null);
(statearr_21538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto__);

return statearr_21538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto__))
);

return c__19061__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21565 = [];
var len__17863__auto___21568 = arguments.length;
var i__17864__auto___21569 = (0);
while(true){
if((i__17864__auto___21569 < len__17863__auto___21568)){
args21565.push((arguments[i__17864__auto___21569]));

var G__21570 = (i__17864__auto___21569 + (1));
i__17864__auto___21569 = G__21570;
continue;
} else {
}
break;
}

var G__21567 = args21565.length;
switch (G__21567) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21565.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21572 = [];
var len__17863__auto___21575 = arguments.length;
var i__17864__auto___21576 = (0);
while(true){
if((i__17864__auto___21576 < len__17863__auto___21575)){
args21572.push((arguments[i__17864__auto___21576]));

var G__21577 = (i__17864__auto___21576 + (1));
i__17864__auto___21576 = G__21577;
continue;
} else {
}
break;
}

var G__21574 = args21572.length;
switch (G__21574) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21572.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21579 = [];
var len__17863__auto___21630 = arguments.length;
var i__17864__auto___21631 = (0);
while(true){
if((i__17864__auto___21631 < len__17863__auto___21630)){
args21579.push((arguments[i__17864__auto___21631]));

var G__21632 = (i__17864__auto___21631 + (1));
i__17864__auto___21631 = G__21632;
continue;
} else {
}
break;
}

var G__21581 = args21579.length;
switch (G__21581) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21579.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19061__auto___21634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___21634,out){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___21634,out){
return (function (state_21605){
var state_val_21606 = (state_21605[(1)]);
if((state_val_21606 === (7))){
var inst_21600 = (state_21605[(2)]);
var state_21605__$1 = state_21605;
var statearr_21607_21635 = state_21605__$1;
(statearr_21607_21635[(2)] = inst_21600);

(statearr_21607_21635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (1))){
var inst_21582 = null;
var state_21605__$1 = (function (){var statearr_21608 = state_21605;
(statearr_21608[(7)] = inst_21582);

return statearr_21608;
})();
var statearr_21609_21636 = state_21605__$1;
(statearr_21609_21636[(2)] = null);

(statearr_21609_21636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (4))){
var inst_21585 = (state_21605[(8)]);
var inst_21585__$1 = (state_21605[(2)]);
var inst_21586 = (inst_21585__$1 == null);
var inst_21587 = cljs.core.not.call(null,inst_21586);
var state_21605__$1 = (function (){var statearr_21610 = state_21605;
(statearr_21610[(8)] = inst_21585__$1);

return statearr_21610;
})();
if(inst_21587){
var statearr_21611_21637 = state_21605__$1;
(statearr_21611_21637[(1)] = (5));

} else {
var statearr_21612_21638 = state_21605__$1;
(statearr_21612_21638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (6))){
var state_21605__$1 = state_21605;
var statearr_21613_21639 = state_21605__$1;
(statearr_21613_21639[(2)] = null);

(statearr_21613_21639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (3))){
var inst_21602 = (state_21605[(2)]);
var inst_21603 = cljs.core.async.close_BANG_.call(null,out);
var state_21605__$1 = (function (){var statearr_21614 = state_21605;
(statearr_21614[(9)] = inst_21602);

return statearr_21614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21605__$1,inst_21603);
} else {
if((state_val_21606 === (2))){
var state_21605__$1 = state_21605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21605__$1,(4),ch);
} else {
if((state_val_21606 === (11))){
var inst_21585 = (state_21605[(8)]);
var inst_21594 = (state_21605[(2)]);
var inst_21582 = inst_21585;
var state_21605__$1 = (function (){var statearr_21615 = state_21605;
(statearr_21615[(10)] = inst_21594);

(statearr_21615[(7)] = inst_21582);

return statearr_21615;
})();
var statearr_21616_21640 = state_21605__$1;
(statearr_21616_21640[(2)] = null);

(statearr_21616_21640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (9))){
var inst_21585 = (state_21605[(8)]);
var state_21605__$1 = state_21605;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21605__$1,(11),out,inst_21585);
} else {
if((state_val_21606 === (5))){
var inst_21585 = (state_21605[(8)]);
var inst_21582 = (state_21605[(7)]);
var inst_21589 = cljs.core._EQ_.call(null,inst_21585,inst_21582);
var state_21605__$1 = state_21605;
if(inst_21589){
var statearr_21618_21641 = state_21605__$1;
(statearr_21618_21641[(1)] = (8));

} else {
var statearr_21619_21642 = state_21605__$1;
(statearr_21619_21642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (10))){
var inst_21597 = (state_21605[(2)]);
var state_21605__$1 = state_21605;
var statearr_21620_21643 = state_21605__$1;
(statearr_21620_21643[(2)] = inst_21597);

(statearr_21620_21643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21606 === (8))){
var inst_21582 = (state_21605[(7)]);
var tmp21617 = inst_21582;
var inst_21582__$1 = tmp21617;
var state_21605__$1 = (function (){var statearr_21621 = state_21605;
(statearr_21621[(7)] = inst_21582__$1);

return statearr_21621;
})();
var statearr_21622_21644 = state_21605__$1;
(statearr_21622_21644[(2)] = null);

(statearr_21622_21644[(1)] = (2));


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
});})(c__19061__auto___21634,out))
;
return ((function (switch__18949__auto__,c__19061__auto___21634,out){
return (function() {
var cljs$core$async$state_machine__18950__auto__ = null;
var cljs$core$async$state_machine__18950__auto____0 = (function (){
var statearr_21626 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21626[(0)] = cljs$core$async$state_machine__18950__auto__);

(statearr_21626[(1)] = (1));

return statearr_21626;
});
var cljs$core$async$state_machine__18950__auto____1 = (function (state_21605){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_21605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e21627){if((e21627 instanceof Object)){
var ex__18953__auto__ = e21627;
var statearr_21628_21645 = state_21605;
(statearr_21628_21645[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21627;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21646 = state_21605;
state_21605 = G__21646;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$state_machine__18950__auto__ = function(state_21605){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18950__auto____1.call(this,state_21605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18950__auto____0;
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18950__auto____1;
return cljs$core$async$state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___21634,out))
})();
var state__19063__auto__ = (function (){var statearr_21629 = f__19062__auto__.call(null);
(statearr_21629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___21634);

return statearr_21629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___21634,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args21647 = [];
var len__17863__auto___21717 = arguments.length;
var i__17864__auto___21718 = (0);
while(true){
if((i__17864__auto___21718 < len__17863__auto___21717)){
args21647.push((arguments[i__17864__auto___21718]));

var G__21719 = (i__17864__auto___21718 + (1));
i__17864__auto___21718 = G__21719;
continue;
} else {
}
break;
}

var G__21649 = args21647.length;
switch (G__21649) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21647.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19061__auto___21721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___21721,out){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___21721,out){
return (function (state_21687){
var state_val_21688 = (state_21687[(1)]);
if((state_val_21688 === (7))){
var inst_21683 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
var statearr_21689_21722 = state_21687__$1;
(statearr_21689_21722[(2)] = inst_21683);

(statearr_21689_21722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (1))){
var inst_21650 = (new Array(n));
var inst_21651 = inst_21650;
var inst_21652 = (0);
var state_21687__$1 = (function (){var statearr_21690 = state_21687;
(statearr_21690[(7)] = inst_21652);

(statearr_21690[(8)] = inst_21651);

return statearr_21690;
})();
var statearr_21691_21723 = state_21687__$1;
(statearr_21691_21723[(2)] = null);

(statearr_21691_21723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (4))){
var inst_21655 = (state_21687[(9)]);
var inst_21655__$1 = (state_21687[(2)]);
var inst_21656 = (inst_21655__$1 == null);
var inst_21657 = cljs.core.not.call(null,inst_21656);
var state_21687__$1 = (function (){var statearr_21692 = state_21687;
(statearr_21692[(9)] = inst_21655__$1);

return statearr_21692;
})();
if(inst_21657){
var statearr_21693_21724 = state_21687__$1;
(statearr_21693_21724[(1)] = (5));

} else {
var statearr_21694_21725 = state_21687__$1;
(statearr_21694_21725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (15))){
var inst_21677 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
var statearr_21695_21726 = state_21687__$1;
(statearr_21695_21726[(2)] = inst_21677);

(statearr_21695_21726[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (13))){
var state_21687__$1 = state_21687;
var statearr_21696_21727 = state_21687__$1;
(statearr_21696_21727[(2)] = null);

(statearr_21696_21727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (6))){
var inst_21652 = (state_21687[(7)]);
var inst_21673 = (inst_21652 > (0));
var state_21687__$1 = state_21687;
if(cljs.core.truth_(inst_21673)){
var statearr_21697_21728 = state_21687__$1;
(statearr_21697_21728[(1)] = (12));

} else {
var statearr_21698_21729 = state_21687__$1;
(statearr_21698_21729[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (3))){
var inst_21685 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21687__$1,inst_21685);
} else {
if((state_val_21688 === (12))){
var inst_21651 = (state_21687[(8)]);
var inst_21675 = cljs.core.vec.call(null,inst_21651);
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21687__$1,(15),out,inst_21675);
} else {
if((state_val_21688 === (2))){
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21687__$1,(4),ch);
} else {
if((state_val_21688 === (11))){
var inst_21667 = (state_21687[(2)]);
var inst_21668 = (new Array(n));
var inst_21651 = inst_21668;
var inst_21652 = (0);
var state_21687__$1 = (function (){var statearr_21699 = state_21687;
(statearr_21699[(7)] = inst_21652);

(statearr_21699[(10)] = inst_21667);

(statearr_21699[(8)] = inst_21651);

return statearr_21699;
})();
var statearr_21700_21730 = state_21687__$1;
(statearr_21700_21730[(2)] = null);

(statearr_21700_21730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (9))){
var inst_21651 = (state_21687[(8)]);
var inst_21665 = cljs.core.vec.call(null,inst_21651);
var state_21687__$1 = state_21687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21687__$1,(11),out,inst_21665);
} else {
if((state_val_21688 === (5))){
var inst_21655 = (state_21687[(9)]);
var inst_21660 = (state_21687[(11)]);
var inst_21652 = (state_21687[(7)]);
var inst_21651 = (state_21687[(8)]);
var inst_21659 = (inst_21651[inst_21652] = inst_21655);
var inst_21660__$1 = (inst_21652 + (1));
var inst_21661 = (inst_21660__$1 < n);
var state_21687__$1 = (function (){var statearr_21701 = state_21687;
(statearr_21701[(12)] = inst_21659);

(statearr_21701[(11)] = inst_21660__$1);

return statearr_21701;
})();
if(cljs.core.truth_(inst_21661)){
var statearr_21702_21731 = state_21687__$1;
(statearr_21702_21731[(1)] = (8));

} else {
var statearr_21703_21732 = state_21687__$1;
(statearr_21703_21732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (14))){
var inst_21680 = (state_21687[(2)]);
var inst_21681 = cljs.core.async.close_BANG_.call(null,out);
var state_21687__$1 = (function (){var statearr_21705 = state_21687;
(statearr_21705[(13)] = inst_21680);

return statearr_21705;
})();
var statearr_21706_21733 = state_21687__$1;
(statearr_21706_21733[(2)] = inst_21681);

(statearr_21706_21733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (10))){
var inst_21671 = (state_21687[(2)]);
var state_21687__$1 = state_21687;
var statearr_21707_21734 = state_21687__$1;
(statearr_21707_21734[(2)] = inst_21671);

(statearr_21707_21734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21688 === (8))){
var inst_21660 = (state_21687[(11)]);
var inst_21651 = (state_21687[(8)]);
var tmp21704 = inst_21651;
var inst_21651__$1 = tmp21704;
var inst_21652 = inst_21660;
var state_21687__$1 = (function (){var statearr_21708 = state_21687;
(statearr_21708[(7)] = inst_21652);

(statearr_21708[(8)] = inst_21651__$1);

return statearr_21708;
})();
var statearr_21709_21735 = state_21687__$1;
(statearr_21709_21735[(2)] = null);

(statearr_21709_21735[(1)] = (2));


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
});})(c__19061__auto___21721,out))
;
return ((function (switch__18949__auto__,c__19061__auto___21721,out){
return (function() {
var cljs$core$async$state_machine__18950__auto__ = null;
var cljs$core$async$state_machine__18950__auto____0 = (function (){
var statearr_21713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21713[(0)] = cljs$core$async$state_machine__18950__auto__);

(statearr_21713[(1)] = (1));

return statearr_21713;
});
var cljs$core$async$state_machine__18950__auto____1 = (function (state_21687){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_21687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e21714){if((e21714 instanceof Object)){
var ex__18953__auto__ = e21714;
var statearr_21715_21736 = state_21687;
(statearr_21715_21736[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21737 = state_21687;
state_21687 = G__21737;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$state_machine__18950__auto__ = function(state_21687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18950__auto____1.call(this,state_21687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18950__auto____0;
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18950__auto____1;
return cljs$core$async$state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___21721,out))
})();
var state__19063__auto__ = (function (){var statearr_21716 = f__19062__auto__.call(null);
(statearr_21716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___21721);

return statearr_21716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___21721,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args21738 = [];
var len__17863__auto___21812 = arguments.length;
var i__17864__auto___21813 = (0);
while(true){
if((i__17864__auto___21813 < len__17863__auto___21812)){
args21738.push((arguments[i__17864__auto___21813]));

var G__21814 = (i__17864__auto___21813 + (1));
i__17864__auto___21813 = G__21814;
continue;
} else {
}
break;
}

var G__21740 = args21738.length;
switch (G__21740) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21738.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19061__auto___21816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19061__auto___21816,out){
return (function (){
var f__19062__auto__ = (function (){var switch__18949__auto__ = ((function (c__19061__auto___21816,out){
return (function (state_21782){
var state_val_21783 = (state_21782[(1)]);
if((state_val_21783 === (7))){
var inst_21778 = (state_21782[(2)]);
var state_21782__$1 = state_21782;
var statearr_21784_21817 = state_21782__$1;
(statearr_21784_21817[(2)] = inst_21778);

(statearr_21784_21817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (1))){
var inst_21741 = [];
var inst_21742 = inst_21741;
var inst_21743 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21782__$1 = (function (){var statearr_21785 = state_21782;
(statearr_21785[(7)] = inst_21742);

(statearr_21785[(8)] = inst_21743);

return statearr_21785;
})();
var statearr_21786_21818 = state_21782__$1;
(statearr_21786_21818[(2)] = null);

(statearr_21786_21818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (4))){
var inst_21746 = (state_21782[(9)]);
var inst_21746__$1 = (state_21782[(2)]);
var inst_21747 = (inst_21746__$1 == null);
var inst_21748 = cljs.core.not.call(null,inst_21747);
var state_21782__$1 = (function (){var statearr_21787 = state_21782;
(statearr_21787[(9)] = inst_21746__$1);

return statearr_21787;
})();
if(inst_21748){
var statearr_21788_21819 = state_21782__$1;
(statearr_21788_21819[(1)] = (5));

} else {
var statearr_21789_21820 = state_21782__$1;
(statearr_21789_21820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (15))){
var inst_21772 = (state_21782[(2)]);
var state_21782__$1 = state_21782;
var statearr_21790_21821 = state_21782__$1;
(statearr_21790_21821[(2)] = inst_21772);

(statearr_21790_21821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (13))){
var state_21782__$1 = state_21782;
var statearr_21791_21822 = state_21782__$1;
(statearr_21791_21822[(2)] = null);

(statearr_21791_21822[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (6))){
var inst_21742 = (state_21782[(7)]);
var inst_21767 = inst_21742.length;
var inst_21768 = (inst_21767 > (0));
var state_21782__$1 = state_21782;
if(cljs.core.truth_(inst_21768)){
var statearr_21792_21823 = state_21782__$1;
(statearr_21792_21823[(1)] = (12));

} else {
var statearr_21793_21824 = state_21782__$1;
(statearr_21793_21824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (3))){
var inst_21780 = (state_21782[(2)]);
var state_21782__$1 = state_21782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21782__$1,inst_21780);
} else {
if((state_val_21783 === (12))){
var inst_21742 = (state_21782[(7)]);
var inst_21770 = cljs.core.vec.call(null,inst_21742);
var state_21782__$1 = state_21782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21782__$1,(15),out,inst_21770);
} else {
if((state_val_21783 === (2))){
var state_21782__$1 = state_21782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21782__$1,(4),ch);
} else {
if((state_val_21783 === (11))){
var inst_21746 = (state_21782[(9)]);
var inst_21750 = (state_21782[(10)]);
var inst_21760 = (state_21782[(2)]);
var inst_21761 = [];
var inst_21762 = inst_21761.push(inst_21746);
var inst_21742 = inst_21761;
var inst_21743 = inst_21750;
var state_21782__$1 = (function (){var statearr_21794 = state_21782;
(statearr_21794[(11)] = inst_21760);

(statearr_21794[(7)] = inst_21742);

(statearr_21794[(12)] = inst_21762);

(statearr_21794[(8)] = inst_21743);

return statearr_21794;
})();
var statearr_21795_21825 = state_21782__$1;
(statearr_21795_21825[(2)] = null);

(statearr_21795_21825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (9))){
var inst_21742 = (state_21782[(7)]);
var inst_21758 = cljs.core.vec.call(null,inst_21742);
var state_21782__$1 = state_21782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21782__$1,(11),out,inst_21758);
} else {
if((state_val_21783 === (5))){
var inst_21746 = (state_21782[(9)]);
var inst_21743 = (state_21782[(8)]);
var inst_21750 = (state_21782[(10)]);
var inst_21750__$1 = f.call(null,inst_21746);
var inst_21751 = cljs.core._EQ_.call(null,inst_21750__$1,inst_21743);
var inst_21752 = cljs.core.keyword_identical_QMARK_.call(null,inst_21743,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_21753 = (inst_21751) || (inst_21752);
var state_21782__$1 = (function (){var statearr_21796 = state_21782;
(statearr_21796[(10)] = inst_21750__$1);

return statearr_21796;
})();
if(cljs.core.truth_(inst_21753)){
var statearr_21797_21826 = state_21782__$1;
(statearr_21797_21826[(1)] = (8));

} else {
var statearr_21798_21827 = state_21782__$1;
(statearr_21798_21827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (14))){
var inst_21775 = (state_21782[(2)]);
var inst_21776 = cljs.core.async.close_BANG_.call(null,out);
var state_21782__$1 = (function (){var statearr_21800 = state_21782;
(statearr_21800[(13)] = inst_21775);

return statearr_21800;
})();
var statearr_21801_21828 = state_21782__$1;
(statearr_21801_21828[(2)] = inst_21776);

(statearr_21801_21828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (10))){
var inst_21765 = (state_21782[(2)]);
var state_21782__$1 = state_21782;
var statearr_21802_21829 = state_21782__$1;
(statearr_21802_21829[(2)] = inst_21765);

(statearr_21802_21829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21783 === (8))){
var inst_21746 = (state_21782[(9)]);
var inst_21742 = (state_21782[(7)]);
var inst_21750 = (state_21782[(10)]);
var inst_21755 = inst_21742.push(inst_21746);
var tmp21799 = inst_21742;
var inst_21742__$1 = tmp21799;
var inst_21743 = inst_21750;
var state_21782__$1 = (function (){var statearr_21803 = state_21782;
(statearr_21803[(7)] = inst_21742__$1);

(statearr_21803[(14)] = inst_21755);

(statearr_21803[(8)] = inst_21743);

return statearr_21803;
})();
var statearr_21804_21830 = state_21782__$1;
(statearr_21804_21830[(2)] = null);

(statearr_21804_21830[(1)] = (2));


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
});})(c__19061__auto___21816,out))
;
return ((function (switch__18949__auto__,c__19061__auto___21816,out){
return (function() {
var cljs$core$async$state_machine__18950__auto__ = null;
var cljs$core$async$state_machine__18950__auto____0 = (function (){
var statearr_21808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21808[(0)] = cljs$core$async$state_machine__18950__auto__);

(statearr_21808[(1)] = (1));

return statearr_21808;
});
var cljs$core$async$state_machine__18950__auto____1 = (function (state_21782){
while(true){
var ret_value__18951__auto__ = (function (){try{while(true){
var result__18952__auto__ = switch__18949__auto__.call(null,state_21782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18952__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18952__auto__;
}
break;
}
}catch (e21809){if((e21809 instanceof Object)){
var ex__18953__auto__ = e21809;
var statearr_21810_21831 = state_21782;
(statearr_21810_21831[(5)] = ex__18953__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18951__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21832 = state_21782;
state_21782 = G__21832;
continue;
} else {
return ret_value__18951__auto__;
}
break;
}
});
cljs$core$async$state_machine__18950__auto__ = function(state_21782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18950__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18950__auto____1.call(this,state_21782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18950__auto____0;
cljs$core$async$state_machine__18950__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18950__auto____1;
return cljs$core$async$state_machine__18950__auto__;
})()
;})(switch__18949__auto__,c__19061__auto___21816,out))
})();
var state__19063__auto__ = (function (){var statearr_21811 = f__19062__auto__.call(null);
(statearr_21811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19061__auto___21816);

return statearr_21811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19063__auto__);
});})(c__19061__auto___21816,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1456175396868