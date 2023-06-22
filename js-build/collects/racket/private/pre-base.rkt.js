import * as $rjs_core from '../../../runtime/core.js';import * as M0 from "../../../runtime/kernel.rkt.js";import * as M1 from "./kw.rkt.js";var new_apply_proc = M1.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3264, kw_args3265, proc3266, args3267, ...rest32682101) {var rest3268 = $rjs_core.Pair.listFromArray(rest32682101);return M1.keyword_apply(proc3266,kws3264,kw_args3265,M0.apply(M0.list_times_,args3267,rest3268));}),M0.apply);var new_keyword_apply = M1.make_keyword_procedure($rjs_core.attachProcedureArity(function(kws3269, kw_args3270, proc3271, orig_kws3272, orig_kw_args3273, args3274, ...rest32752102) {var rest3275 = $rjs_core.Pair.listFromArray(rest32752102);var loop3278 = function(kws3279, kw_args3280, kws23281, kw_args23282, swapped_p3283) {if (M0.null_p(kws3279)!==false) {var if_res2107 = M0.values(kws23281,kw_args23282);} else {if (M0.null_p(kws23281)!==false) {var if_res2106 = M0.values(kws3279,kw_args3280);} else {if (M0.keyword_lt__p(M0.car(kws3279),M0.car(kws23281))!==false) {var let_result2103 = loop3278(M0.cdr(kws3279),M0.cdr(kw_args3280),kws23281,kw_args23282,false);var res_kws3284 = let_result2103.getAt(0);var res_kw_args3285 = let_result2103.getAt(1);var if_res2105 = M0.values(M0.cons(M0.car(kws3279),res_kws3284),M0.cons(M0.car(kw_args3280),res_kw_args3285));} else {if (swapped_p3283!==false) {var if_res2104 = M0.raise_mismatch_error($rjs_core.PrimitiveSymbol.make("keyword-apply"),$rjs_core.UString.make("keyword duplicated in list and direct keyword arguments: "),M0.car(kws3279));} else {var if_res2104 = loop3278(kws23281,kw_args23282,kws3279,kw_args3280,true);}var if_res2105 = if_res2104;}var if_res2106 = if_res2105;}var if_res2107 = if_res2106;}return if_res2107;};var let_result2108 = loop3278(kws3269,kw_args3270,orig_kws3272,orig_kw_args3273,false);var kws3276 = let_result2108.getAt(0);var kw_args3277 = let_result2108.getAt(1);return M1.keyword_apply(proc3271,kws3276,kw_args3277,M0.apply(M0.list_times_,args3274,rest3275));}),M1.keyword_apply);var double_flonum_p = function(x3286) {return M0.__rjs_quoted__.flonum_p(x3286);};var cl2109 = function() {return M0.random();};var cl2110 = function(x3288) {return M0.random(x3288);};var cl2111 = function(x3289, y3290) {if (M0.exact_integer_p(y3290)!==false) {if (M0.exact_integer_p(x3289)!==false) {var if_res2114 = M0.rvoid();} else {var if_res2114 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"),$rjs_core.UString.make("exact-integer?"),0,x3289,y3290);}if_res2114;if (M0.__lt_(x3289,y3290)!==false) {var if_res2115 = M0.rvoid();} else {var if_res2115 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"),M0.string_append($rjs_core.UString.make("(>/c "),M0.number__gt_string(x3289),$rjs_core.UString.make(")")),1,x3289,y3290);}if_res2115;var d3291 = y3290-x3289;if (M0.__lt__eq_(d3291,4294967087)!==false) {var if_res2116 = M0.rvoid();} else {var if_res2116 = M0.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"),$rjs_core.UString.make("difference between arguments is greater than 4294967087"),$rjs_core.UString.make("min"),x3289,$rjs_core.UString.make("max"),y3290);}if_res2116;var if_res2121 = x3289+M0.random(d3291);} else {if (M0.__rjs_quoted__.pseudo_random_generator_p(y3290)!==false) {if (M0.exact_integer_p(x3289)!==false) {var if_res2117 = M0.__lt__eq_(1,x3289,4294967087);} else {var if_res2117 = false;}if (if_res2117!==false) {var if_res2118 = M0.rvoid();} else {var if_res2118 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"),$rjs_core.UString.make("(integer-in 1 4294967087)"),0,x3289,y3290);}if_res2118;var if_res2120 = M0.random(x3289,y3290);} else {if (M0.exact_integer_p(x3289)!==false) {var if_res2119 = M0.rvoid();} else {var if_res2119 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"),$rjs_core.UString.make("exact-integer?"),0,x3289,y3290);}if_res2119;var if_res2120 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"),$rjs_core.UString.make("(or/c exact-integer? pseudo-random-generator?)"),1,x3289,y3290);}var if_res2121 = if_res2120;}return if_res2121;};var cl2112 = function(min3292, max3293, prng3294) {if (M0.exact_integer_p(min3292)!==false) {var if_res2122 = M0.rvoid();} else {var if_res2122 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"),$rjs_core.UString.make("exact-integer?"),0,min3292,max3293,prng3294);}if_res2122;if (M0.exact_integer_p(max3293)!==false) {var if_res2123 = M0.rvoid();} else {var if_res2123 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"),$rjs_core.UString.make("exact-integer?"),1,min3292,max3293,prng3294);}if_res2123;if (M0.__lt_(min3292,max3293)!==false) {var if_res2124 = M0.rvoid();} else {var if_res2124 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"),M0.string_append($rjs_core.UString.make("(>/c "),M0.number__gt_string(min3292),$rjs_core.UString.make(")")),1,min3292,max3293,prng3294);}if_res2124;var d3295 = max3293-min3292;if (M0.__lt__eq_(d3295,4294967087)!==false) {var if_res2125 = M0.rvoid();} else {var if_res2125 = M0.raise_arguments_error($rjs_core.PrimitiveSymbol.make("random"),$rjs_core.UString.make("difference between first and second arguments is greater than 4294967087"),$rjs_core.UString.make("min"),min3292,$rjs_core.UString.make("max"),max3293,$rjs_core.UString.make("rand-gen"),prng3294);}if_res2125;if (M0.__rjs_quoted__.pseudo_random_generator_p(prng3294)!==false) {var if_res2126 = M0.rvoid();} else {var if_res2126 = M0.raise_argument_error($rjs_core.PrimitiveSymbol.make("random"),$rjs_core.UString.make("pseudo-random-generator?"),2,min3292,max3293,prng3294);}if_res2126;return min3292+M0.random(d3295,prng3294);};var random3287 = $rjs_core.attachProcedureArity(function() {var fixed_lam2113 = {'0':cl2109,'1':cl2110,'2':cl2111,'3':cl2112}[arguments.length];if (fixed_lam2113!==undefined) {return fixed_lam2113.apply(null,arguments);} else {return M0.error($rjs_core.UString.make("case-lambda: invalid case"));}},[0,1,2,3]);var __random = random3287;var __rjs_quoted__ = {};export { __rjs_quoted__,__random as random,double_flonum_p,new_keyword_apply as keyword_apply,new_apply_proc };