const hintDelta=108e4,transformers=new Array(3),$numeric_year=45,$numeric_value=46,$ordinal_value=47,$time=48,$date=49,$tab_crlf=50,$time_hh_mm=51,$email=52,$emoji=53,$emoticon=54,$hashtag=55,$mention=56,$url=57;var rgxDDMMYY=/^(?:0?[1-9]|[12]\d|30|31)[/.-](?:0?[1-9]|1[0-2])(?:[/.-]([12]\d)?\d\d)$/,rgxMMDDYY=/^(?:0?[1-9]|1[0-2])[/.-](?:0?[1-9]|[12]\d|30|31)(?:[/.-]([12]\d)?\d\d)$/,rgxISODate=/^(?:[12]\d\d\d)[/.-](?:0?[1-9]|1[0-2])[/.-](?:0?[1-9]|[12]\d|30|31)$/,rgxHHMM=/^(?:\d|[01]\d|2[0-3]):(?:\d|[0-5][0-9])$/,rgxPeriodComma=/[,.]/g,rgxCommaB4Period=/,(?=.*?\.)/g,rgxComma=/,/g,rgxPeriod=/\./,transformNumber=function(tv,token){var num=+(rgxPeriod.test(tv)?tv.replace(rgxCommaB4Period,""):tv.replace(rgxComma,""));return isNaN(num)?rgxDDMMYY.test(tv)||rgxMMDDYY.test(tv)||rgxISODate.test(tv)?1080049:rgxHHMM.test(tv)?1080051:token:num>=1200&&num<=2100&&tv==num?1080045:1080046};transformers[0]=function(token,cache){const tv=cache.value(token);if(void 0===tv)return token;if("\n"===tv||"\n\n"===tv||""===tv.replace(rgxPeriodComma,""))return token;var mapped=cache.property(token,"nerHint");if(mapped)return mapped+108e4;switch(cache.property(token,"tokenType")){case"number":return transformNumber(tv,token);case"ordinal":return 1080047;case"time":return 1080048;case"tabCRLF":return 1080050;case"email":return 1080052;case"emoji":return 1080053;case"emoticon":return 1080054;case"hashtag":return 1080055;case"mention":return 1080056;case"url":return 1080057;default:return token}},transformers[1]=void 0,transformers[2]=void 0,module.exports=transformers;