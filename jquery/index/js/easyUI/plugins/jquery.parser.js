(function(A){A.parser={auto:true,onComplete:function(B){},plugins:["draggable","droppable","resizable","pagination","tooltip","linkbutton","menu","menubutton","splitbutton","progressbar","tree","combobox","combotree","combogrid","numberbox","validatebox","searchbox","numberspinner","timespinner","calendar","datebox","datetimebox","slider","layout","panel","datagrid","propertygrid","treegrid","tabs","accordion","window","dialog"],parse:function(D){var G=[];for(var B=0;B<A.parser.plugins.length;B++){var E=A.parser.plugins[B];var C=A(".easyui-"+E,D);if(C.length){if(C[E]){C[E]()}else{G.push({name:E,jq:C})}}}if(G.length&&window.easyloader){var F=[];for(var B=0;B<G.length;B++){F.push(G[B].name)}easyloader.load(F,function(){for(var I=0;I<G.length;I++){var H=G[I].name;var J=G[I].jq;J[H]()}A.parser.onComplete.call(A.parser,D)})}else{A.parser.onComplete.call(A.parser,D)}},parseOptions:function(J,I){var D=A(J);var E={};var B=A.trim(D.attr("data-options"));if(B){if(B.substring(0,1)!="{"){B="{"+B+"}"}E=(new Function("return "+B))()}if(I){var F={};for(var G=0;G<I.length;G++){var C=I[G];if(typeof C=="string"){if(C=="width"||C=="height"||C=="left"||C=="top"){F[C]=parseInt(J.style[C])||undefined}else{F[C]=D.attr(C)}}else{for(var H in C){var K=C[H];if(K=="boolean"){F[H]=D.attr(H)?(D.attr(H)=="true"):undefined}else{if(K=="number"){F[H]=D.attr(H)=="0"?0:parseFloat(D.attr(H))||undefined}}}}}A.extend(E,F)}return E}};A(function(){var B=A('<div style="position:absolute;top:-1000px;width:100px;height:100px;padding:5px"></div>').appendTo("body");B.width(100);A._boxModel=parseInt(B.width())==100;B.remove();if(!window.easyloader&&A.parser.auto){A.parser.parse()}});A.fn._outerWidth=function(B){if(B==undefined){if(this[0]==window){return this.width()||document.body.clientWidth}return this.outerWidth()||0}return this.each(function(){if(A._boxModel){A(this).width(B-(A(this).outerWidth()-A(this).width()))}else{A(this).width(B)}})};A.fn._outerHeight=function(B){if(B==undefined){if(this[0]==window){return this.height()||document.body.clientHeight}return this.outerHeight()||0}return this.each(function(){if(A._boxModel){A(this).height(B-(A(this).outerHeight()-A(this).height()))}else{A(this).height(B)}})};A.fn._scrollLeft=function(B){if(B==undefined){return this.scrollLeft()}else{return this.each(function(){A(this).scrollLeft(B)})}};A.fn._propAttr=A.fn.prop||A.fn.attr;A.fn._fit=function(C){C=C==undefined?true:C;var E=this[0];var D=(E.tagName=="BODY"?E:this.parent()[0]);var B=D.fcount||0;if(C){if(!E.fitted){E.fitted=true;D.fcount=B+1;A(D).addClass("panel-noscroll");if(D.tagName=="BODY"){A("html").addClass("panel-fit")}}}else{if(E.fitted){E.fitted=false;D.fcount=B-1;if(D.fcount==0){A(D).removeClass("panel-noscroll");if(D.tagName=="BODY"){A("html").removeClass("panel-fit")}}}}return{width:A(D).width(),height:A(D).height()}}})(jQuery);(function(G){var E=null;var H=null;var F=false;function B(I){if(I.touches.length!=1){return}if(!F){F=true;dblClickTimer=setTimeout(function(){F=false},500)}else{clearTimeout(dblClickTimer);F=false;A(I,"dblclick")}E=setTimeout(function(){A(I,"contextmenu",3)},1000);A(I,"mousedown");if(G.fn.draggable.isDragging||G.fn.resizable.isResizing){I.preventDefault()}}function D(I){if(I.touches.length!=1){return}if(E){clearTimeout(E)}A(I,"mousemove");if(G.fn.draggable.isDragging||G.fn.resizable.isResizing){I.preventDefault()}}function C(I){if(E){clearTimeout(E)}A(I,"mouseup");if(G.fn.draggable.isDragging||G.fn.resizable.isResizing){I.preventDefault()}}function A(I,L,K){var J=new G.Event(L);J.pageX=I.changedTouches[0].pageX;J.pageY=I.changedTouches[0].pageY;J.which=K||1;G(I.target).trigger(J)}if(document.addEventListener){document.addEventListener("touchstart",B,true);document.addEventListener("touchmove",D,true);document.addEventListener("touchend",C,true)}})(jQuery);