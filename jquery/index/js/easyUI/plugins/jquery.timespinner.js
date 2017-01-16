(function(F){function A(G){var H=F.data(G,"timespinner").options;F(G).addClass("timespinner-f");F(G).spinner(H);F(G).unbind(".timespinner");F(G).bind("click.timespinner",function(){var K=0;if(this.selectionStart!=null){K=this.selectionStart}else{if(this.createTextRange){var I=G.createTextRange();var J=document.selection.createRange();J.setEndPoint("StartToStart",I);K=J.text.length}}if(K>=0&&K<=2){H.highlight=0}else{if(K>=3&&K<=5){H.highlight=1}else{if(K>=6&&K<=8){H.highlight=2}}}C(G)}).bind("blur.timespinner",function(){B(G)})}function C(K){var H=F.data(K,"timespinner").options;var G=0,J=0;if(H.highlight==0){G=0;J=2}else{if(H.highlight==1){G=3;J=5}else{if(H.highlight==2){G=6;J=8}}}if(K.selectionStart!=null){K.setSelectionRange(G,J)}else{if(K.createTextRange){var I=K.createTextRange();I.collapse();I.moveEnd("character",J);I.moveStart("character",G);I.select()}}F(K).focus()}function D(K,H){var G=F.data(K,"timespinner").options;if(!H){return null}var J=H.split(G.separator);for(var I=0;I<J.length;I++){if(isNaN(J[I])){return null}}while(J.length<3){J.push(0)}return new Date(1900,0,0,J[0],J[1],J[2])}function B(L){var O=F.data(L,"timespinner").options;var N=F(L).val();var I=D(L,N);if(!I){O.value="";F(L).val("");return}var H=D(L,O.min);var K=D(L,O.max);if(H&&H>I){I=H}if(K&&K<I){I=K}var G=[J(I.getHours()),J(I.getMinutes())];if(O.showSeconds){G.push(J(I.getSeconds()))}var M=G.join(O.separator);O.value=M;F(L).val(M);function J(P){return(P<10?"0":"")+P}}function E(L,H){var G=F.data(L,"timespinner").options;var K=F(L).val();if(K==""){K=[0,0,0].join(G.separator)}var J=K.split(G.separator);for(var I=0;I<J.length;I++){J[I]=parseInt(J[I],10)}if(H==true){J[G.highlight]-=G.increment}else{J[G.highlight]+=G.increment}F(L).val(J.join(G.separator));B(L);C(L)}F.fn.timespinner=function(H,G){if(typeof H=="string"){var I=F.fn.timespinner.methods[H];if(I){return I(this,G)}else{return this.spinner(H,G)}}H=H||{};return this.each(function(){var J=F.data(this,"timespinner");if(J){F.extend(J.options,H)}else{F.data(this,"timespinner",{options:F.extend({},F.fn.timespinner.defaults,F.fn.timespinner.parseOptions(this),H)});A(this)}})};F.fn.timespinner.methods={options:function(G){var H=F.data(G[0],"timespinner").options;return F.extend(H,{value:G.val(),originalValue:G.spinner("options").originalValue})},setValue:function(G,H){return G.each(function(){F(this).val(H);B(this)})},getHours:function(G){var I=F.data(G[0],"timespinner").options;var H=G.val().split(I.separator);return parseInt(H[0],10)},getMinutes:function(G){var I=F.data(G[0],"timespinner").options;var H=G.val().split(I.separator);return parseInt(H[1],10)},getSeconds:function(H){var G=F.data(H[0],"timespinner").options;var I=H.val().split(G.separator);return parseInt(I[2],10)||0}};F.fn.timespinner.parseOptions=function(G){return F.extend({},F.fn.spinner.parseOptions(G),F.parser.parseOptions(G,["separator",{showSeconds:"boolean",highlight:"number"}]))};F.fn.timespinner.defaults=F.extend({},F.fn.spinner.defaults,{separator:":",showSeconds:false,highlight:0,spin:function(G){E(this,G)}})})(jQuery);