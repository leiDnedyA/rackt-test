import * as $rjs_core from './core.js';import * as M0 from "./lib.rkt.js";var fl_times_ = M0.Core.attachProcedureArity(M0.Core.Number.mul,0);var fl_by_ = M0.Core.attachProcedureArity(M0.Core.Number.div,1);var fl_plus_ = M0.Core.attachProcedureArity(M0.Core.Number.add,0);var fl_ = M0.Core.attachProcedureArity(M0.Core.Number.sub,1);var fl_lt_ = M0.Core.attachProcedureArity(M0.Core.Number.lt,1);var fl_gt_ = M0.Core.attachProcedureArity(M0.Core.Number.gt,1);var fl_lt__eq_ = M0.Core.attachProcedureArity(M0.Core.Number.lte,1);var fl_gt__eq_ = M0.Core.attachProcedureArity(M0.Core.Number.gte,1);var fl_eq_ = M0.Core.attachProcedureArity(M0.Core.Number.equals,1);var flabs = Math.abs;var flmin = Math.min;var flmax = Math.max;var flround = Math.round;var flfloor = Math.floor;var flceiling = Math.ceil;var fltruncate = Math.trunc;var flsin = Math.sin;var flcos = Math.cos;var fltan = Math.tan;var flasin = Math.asin;var flacos = Math.acos;var flatan = Math.atan;var fllog = Math.log;var flexp = Math.exp;var flsqrt = Math.sqrt;var flexpt = Math.pow;var fx_plus_ = function(a115, b116) {return (a115+b116)|0;};var fx_ = function(a117, b118) {return (a117-b118)|0;};var fx_times_ = function(a119, b120) {return (a119*b120)|0;};var fxquotient = function(a121, b122) {return (a121/b122)|0;};var fxremainder = function(a123, b124) {return (a123%b124)|0;};var fxmodulo = function(a125, b126) {var remainder127 = a125%b126;if ((remainder127>=0)!==false) {var if_res7 = remainder127;} else {var if_res7 = remainder127+b126;}return Math.floor(if_res7);};var fxabs = function(a128) {return Math.abs(a128);};var fx_eq_ = function(a129, b130) {return a129===b130;};var fx_lt_ = function(a131, b132) {return a131<b132;};var fx_lt__eq_ = function(a133, b134) {return a133<=b134;};var fx_gt_ = function(a135, b136) {return a135>b136;};var fx_gt__eq_ = function(a137, b138) {return a137>=b138;};var fxmin = function(a139, b140) {if ((a139<b140)!==false) {var if_res8 = a139;} else {var if_res8 = b140;}return if_res8;};var fxmax = function(a141, b142) {if ((a141>b142)!==false) {var if_res9 = b142;} else {var if_res9 = a141;}return if_res9;};var fxrshift = function(a143, b144) {return (a143>>b144)|0;};var fxlshift = function(a145, b146) {return (a145<<b146)|0;};var fxand = function(a147, b148) {return (a147&&b148)|0;};var fxior = function(a149, b150) {return (a149||b150)|0;};var fxxor = function(a151, b152) {return (a151^b152)|0;};var fxnot = M0.Core.bitwiseNot;var flvector = Array.from;var flvector_p = Array.isArray;var fxvector = Array.from;var fxvector_p = Array.isArray;var __rjs_quoted__ = {};export { __rjs_quoted__,fl_times_,fl_by_,fl_plus_,fl_,fl_lt_,fl_gt_,fl_lt__eq_,fl_gt__eq_,fl_eq_,flabs,flmin,flmax,flround,flfloor,flceiling,fltruncate,flsin,flcos,fltan,flasin,flacos,flatan,fllog,flexp,flsqrt,flexpt,fx_plus_,fx_,fx_times_,fxquotient,fxremainder,fxmodulo,fxabs,fx_eq_,fx_lt_,fx_lt__eq_,fx_gt_,fx_gt__eq_,fxmin,fxmax,fxrshift,fxlshift,fxand,fxior,fxxor,fxnot,flvector,flvector_p,fxvector,fxvector_p };