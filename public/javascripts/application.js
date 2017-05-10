//auto-complete
var EasyAutocomplete=function(a){return a.Configuration=function(a){function b(){if("xml"===a.dataType&&(a.getValue||(a.getValue=function(a){return $(a).text()}),a.list||(a.list={}),a.list.sort||(a.list.sort={}),a.list.sort.method=function(b,c){return b=a.getValue(b),c=a.getValue(c),c>b?-1:b>c?1:0},a.list.match||(a.list.match={}),a.list.match.method=function(a,b){return a.search(b)>-1}),void 0!==a.categories&&a.categories instanceof Array){for(var b=[],c=0,d=a.categories.length;d>c;c+=1){var e=a.categories[c];for(var f in h.categories[0])void 0===e[f]&&(e[f]=h.categories[0][f]);b.push(e)}a.categories=b}}function c(){function b(a,c){var d=a||{};for(var e in a)void 0!==c[e]&&null!==c[e]&&("object"!=typeof c[e]||c[e]instanceof Array?d[e]=c[e]:b(a[e],c[e]));return void 0!==c.data&&null!==c.data&&"object"==typeof c.data&&(d.data=c.data),d}h=b(h,a)}function d(){if("list-required"!==h.url&&"function"!=typeof h.url){var b=h.url;h.url=function(){return b}}if(void 0!==h.ajaxSettings.url&&"function"!=typeof h.ajaxSettings.url){var b=h.ajaxSettings.url;h.ajaxSettings.url=function(){return b}}if("string"==typeof h.listLocation){var c=h.listLocation;"XML"===h.dataType.toUpperCase()?h.listLocation=function(a){return $(a).find(c)}:h.listLocation=function(a){return a[c]}}if("string"==typeof h.getValue){var d=h.getValue;h.getValue=function(a){return a[d]}}void 0!==a.categories&&(h.categoriesAssigned=!0)}function e(){void 0!==a.ajaxSettings&&"object"==typeof a.ajaxSettings?h.ajaxSettings=a.ajaxSettings:h.ajaxSettings={}}function f(a){return void 0!==h[a]&&null!==h[a]}function g(a,b){function c(b,d){for(var e in d)void 0===b[e]&&a.log("Property '"+e+"' does not exist in EasyAutocomplete options API."),"object"==typeof b[e]&&-1===$.inArray(e,i)&&c(b[e],d[e])}c(h,b)}var h={data:"list-required",url:"list-required",dataType:"json",listLocation:function(a){return a},xmlElementName:"",getValue:function(a){return a},autocompleteOff:!0,placeholder:!1,ajaxCallback:function(){},matchResponseProperty:!1,list:{sort:{enabled:!1,method:function(a,b){return a=h.getValue(a),b=h.getValue(b),b>a?-1:a>b?1:0}},maxNumberOfElements:6,hideOnEmptyPhrase:!0,match:{enabled:!1,caseSensitive:!1,method:function(a,b){return a.search(b)>-1}},showAnimation:{type:"normal",time:400,callback:function(){}},hideAnimation:{type:"normal",time:400,callback:function(){}},onClickEvent:function(){},onSelectItemEvent:function(){},onLoadEvent:function(){},onChooseEvent:function(){},onKeyEnterEvent:function(){},onMouseOverEvent:function(){},onMouseOutEvent:function(){},onShowListEvent:function(){},onHideListEvent:function(){}},highlightPhrase:!0,theme:"",cssClasses:"",minCharNumber:0,requestDelay:0,adjustWidth:!0,ajaxSettings:{},preparePostData:function(a,b){return a},loggerEnabled:!0,template:"",categoriesAssigned:!1,categories:[{maxNumberOfElements:4}]},i=["ajaxSettings","template"];this.get=function(a){return h[a]},this.equals=function(a,b){return!(!f(a)||h[a]!==b)},this.checkDataUrlProperties=function(){return"list-required"!==h.url||"list-required"!==h.data},this.checkRequiredProperties=function(){for(var a in h)if("required"===h[a])return logger.error("Option "+a+" must be defined"),!1;return!0},this.printPropertiesThatDoesntExist=function(a,b){g(a,b)},b(),c(),h.loggerEnabled===!0&&g(console,a),e(),d()},a}(EasyAutocomplete||{}),EasyAutocomplete=function(a){return a.Logger=function(){this.error=function(a){console.log("ERROR: "+a)},this.warning=function(a){console.log("WARNING: "+a)}},a}(EasyAutocomplete||{}),EasyAutocomplete=function(a){return a.Constans=function(){var a={CONTAINER_CLASS:"easy-autocomplete-container",CONTAINER_ID:"eac-container-",WRAPPER_CSS_CLASS:"easy-autocomplete"};this.getValue=function(b){return a[b]}},a}(EasyAutocomplete||{}),EasyAutocomplete=function(a){return a.ListBuilderService=function(a,b){function c(b,c){function d(){var d,e={};return void 0!==b.xmlElementName&&(e.xmlElementName=b.xmlElementName),void 0!==b.listLocation?d=b.listLocation:void 0!==a.get("listLocation")&&(d=a.get("listLocation")),void 0!==d?"string"==typeof d?e.data=$(c).find(d):"function"==typeof d&&(e.data=d(c)):e.data=c,e}function e(){var a={};return void 0!==b.listLocation?"string"==typeof b.listLocation?a.data=c[b.listLocation]:"function"==typeof b.listLocation&&(a.data=b.listLocation(c)):a.data=c,a}var f={};if(f="XML"===a.get("dataType").toUpperCase()?d():e(),void 0!==b.header&&(f.header=b.header),void 0!==b.maxNumberOfElements&&(f.maxNumberOfElements=b.maxNumberOfElements),void 0!==a.get("list").maxNumberOfElements&&(f.maxListSize=a.get("list").maxNumberOfElements),void 0!==b.getValue)if("string"==typeof b.getValue){var g=b.getValue;f.getValue=function(a){return a[g]}}else"function"==typeof b.getValue&&(f.getValue=b.getValue);else f.getValue=a.get("getValue");return f}function d(b){var c=[];return void 0===b.xmlElementName&&(b.xmlElementName=a.get("xmlElementName")),$(b.data).find(b.xmlElementName).each(function(){c.push(this)}),c}this.init=function(b){var c=[],d={};return d.data=a.get("listLocation")(b),d.getValue=a.get("getValue"),d.maxListSize=a.get("list").maxNumberOfElements,c.push(d),c},this.updateCategories=function(b,d){if(a.get("categoriesAssigned")){b=[];for(var e=0;e<a.get("categories").length;e+=1){var f=c(a.get("categories")[e],d);b.push(f)}}return b},this.convertXml=function(b){if("XML"===a.get("dataType").toUpperCase())for(var c=0;c<b.length;c+=1)b[c].data=d(b[c]);return b},this.processData=function(c,d){for(var e=0,f=c.length;f>e;e+=1)c[e].data=b(a,c[e],d);return c},this.checkIfDataExists=function(a){for(var b=0,c=a.length;c>b;b+=1)if(void 0!==a[b].data&&a[b].data instanceof Array&&a[b].data.length>0)return!0;return!1}},a}(EasyAutocomplete||{}),EasyAutocomplete=function(a){return a.proccess=function(b,c,d){function e(a,c){var d=[],e="";if(b.get("list").match.enabled)for(var g=0,h=a.length;h>g;g+=1)e=b.get("getValue")(a[g]),f(e,c)&&d.push(a[g]);else d=a;return d}function f(a,c){return b.get("list").match.caseSensitive||("string"==typeof a&&(a=a.toLowerCase()),c=c.toLowerCase()),!!b.get("list").match.method(a,c)}function g(a){return void 0!==c.maxNumberOfElements&&a.length>c.maxNumberOfElements&&(a=a.slice(0,c.maxNumberOfElements)),a}function h(a){return b.get("list").sort.enabled&&a.sort(b.get("list").sort.method),a}a.proccess.match=f;var i=c.data,j=d;return i=e(i,j),i=g(i),i=h(i)},a}(EasyAutocomplete||{}),EasyAutocomplete=function(a){return a.Template=function(a){var b={basic:{type:"basic",method:function(a){return a},cssClass:""},description:{type:"description",fields:{description:"description"},method:function(a){return a+" - description"},cssClass:"eac-description"},iconLeft:{type:"iconLeft",fields:{icon:""},method:function(a){return a},cssClass:"eac-icon-left"},iconRight:{type:"iconRight",fields:{iconSrc:""},method:function(a){return a},cssClass:"eac-icon-right"},links:{type:"links",fields:{link:""},method:function(a){return a},cssClass:""},custom:{type:"custom",method:function(){},cssClass:""}},c=function(a){var c,d=a.fields;return"description"===a.type?(c=b.description.method,"string"==typeof d.description?c=function(a,b){return a+" - <span>"+b[d.description]+"</span>"}:"function"==typeof d.description&&(c=function(a,b){return a+" - <span>"+d.description(b)+"</span>"}),c):"iconRight"===a.type?("string"==typeof d.iconSrc?c=function(a,b){return a+"<img class='eac-icon' src='"+b[d.iconSrc]+"' />"}:"function"==typeof d.iconSrc&&(c=function(a,b){return a+"<img class='eac-icon' src='"+d.iconSrc(b)+"' />"}),c):"iconLeft"===a.type?("string"==typeof d.iconSrc?c=function(a,b){return"<img class='eac-icon' src='"+b[d.iconSrc]+"' />"+a}:"function"==typeof d.iconSrc&&(c=function(a,b){return"<img class='eac-icon' src='"+d.iconSrc(b)+"' />"+a}),c):"links"===a.type?("string"==typeof d.link?c=function(a,b){return"<a href='"+b[d.link]+"' >"+a+"</a>"}:"function"==typeof d.link&&(c=function(a,b){return"<a href='"+d.link(b)+"' >"+a+"</a>"}),c):"custom"===a.type?a.method:b.basic.method},d=function(a){return a&&a.type&&a.type&&b[a.type]?c(a):b.basic.method},e=function(a){var c=function(){return""};return a&&a.type&&a.type&&b[a.type]?function(){var c=b[a.type].cssClass;return function(){return c}}():c};this.getTemplateClass=e(a),this.build=d(a)},a}(EasyAutocomplete||{}),EasyAutocomplete=function(a){return a.main=function(b,c){function d(){return 0===t.length?void p.error("Input field doesn't exist."):o.checkDataUrlProperties()?o.checkRequiredProperties()?(e(),void g()):void p.error("Will not work without mentioned properties."):void p.error("One of options variables 'data' or 'url' must be defined.")}function e(){function a(){var a=$("<div>"),c=n.getValue("WRAPPER_CSS_CLASS");o.get("theme")&&""!==o.get("theme")&&(c+=" eac-"+o.get("theme")),o.get("cssClasses")&&""!==o.get("cssClasses")&&(c+=" "+o.get("cssClasses")),""!==q.getTemplateClass()&&(c+=" "+q.getTemplateClass()),a.addClass(c),t.wrap(a),o.get("adjustWidth")===!0&&b()}function b(){var a=t.outerWidth();t.parent().css("width",a)}function c(){t.unwrap()}function d(){var a=$("<div>").addClass(n.getValue("CONTAINER_CLASS"));a.attr("id",f()).prepend($("<ul>")),function(){a.on("show.eac",function(){switch(o.get("list").showAnimation.type){case"slide":var b=o.get("list").showAnimation.time,c=o.get("list").showAnimation.callback;a.find("ul").slideDown(b,c);break;case"fade":var b=o.get("list").showAnimation.time,c=o.get("list").showAnimation.callback;a.find("ul").fadeIn(b),c;break;default:a.find("ul").show()}o.get("list").onShowListEvent()}).on("hide.eac",function(){switch(o.get("list").hideAnimation.type){case"slide":var b=o.get("list").hideAnimation.time,c=o.get("list").hideAnimation.callback;a.find("ul").slideUp(b,c);break;case"fade":var b=o.get("list").hideAnimation.time,c=o.get("list").hideAnimation.callback;a.find("ul").fadeOut(b,c);break;default:a.find("ul").hide()}o.get("list").onHideListEvent()}).on("selectElement.eac",function(){a.find("ul li").removeClass("selected"),a.find("ul li").eq(w).addClass("selected"),o.get("list").onSelectItemEvent()}).on("loadElements.eac",function(b,c,d){var e="",f=a.find("ul");f.empty().detach(),v=[];for(var h=0,i=0,k=c.length;k>i;i+=1){var l=c[i].data;if(0!==l.length){void 0!==c[i].header&&c[i].header.length>0&&f.append("<div class='eac-category' >"+c[i].header+"</div>");for(var m=0,n=l.length;n>m&&h<c[i].maxListSize;m+=1)e=$("<li><div class='eac-item'></div></li>"),function(){var a=m,b=h,f=c[i].getValue(l[a]);e.find(" > div").on("click",function(){t.val(f).trigger("change"),w=b,j(b),o.get("list").onClickEvent(),o.get("list").onChooseEvent()}).mouseover(function(){w=b,j(b),o.get("list").onMouseOverEvent()}).mouseout(function(){o.get("list").onMouseOutEvent()}).html(q.build(g(f,d),l[a]))}(),f.append(e),v.push(l[m]),h+=1}}a.append(f),o.get("list").onLoadEvent()})}(),t.after(a)}function e(){t.next("."+n.getValue("CONTAINER_CLASS")).remove()}function g(a,b){return o.get("highlightPhrase")&&""!==b?i(a,b):a}function h(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function i(a,b){var c=h(b);return(a+"").replace(new RegExp("("+c+")","gi"),"<b>$1</b>")}t.parent().hasClass(n.getValue("WRAPPER_CSS_CLASS"))&&(e(),c()),a(),d(),u=$("#"+f()),o.get("placeholder")&&t.attr("placeholder",o.get("placeholder"))}function f(){var a=t.attr("id");return a=n.getValue("CONTAINER_ID")+a}function g(){function a(){s("autocompleteOff",!0)&&n(),b(),c(),d(),e(),f(),g()}function b(){t.focusout(function(){var a,b=t.val();o.get("list").match.caseSensitive||(b=b.toLowerCase());for(var c=0,d=v.length;d>c;c+=1)if(a=o.get("getValue")(v[c]),o.get("list").match.caseSensitive||(a=a.toLowerCase()),a===b)return w=c,void j(w)})}function c(){t.off("keyup").keyup(function(a){function b(a){function b(){var a={},b=o.get("ajaxSettings")||{};for(var c in b)a[c]=b[c];return a}function c(a,b){return o.get("matchResponseProperty")!==!1?"string"==typeof o.get("matchResponseProperty")?b[o.get("matchResponseProperty")]===a:"function"==typeof o.get("matchResponseProperty")?o.get("matchResponseProperty")(b)===a:!0:!0}if(!(a.length<o.get("minCharNumber"))){if("list-required"!==o.get("data")){var d=o.get("data"),e=r.init(d);e=r.updateCategories(e,d),e=r.processData(e,a),k(e,a),t.parent().find("li").length>0?h():i()}var f=b();void 0!==f.url&&""!==f.url||(f.url=o.get("url")),void 0!==f.dataType&&""!==f.dataType||(f.dataType=o.get("dataType")),void 0!==f.url&&"list-required"!==f.url&&(f.url=f.url(a),f.data=o.get("preparePostData")(f.data,a),$.ajax(f).done(function(b){var d=r.init(b);d=r.updateCategories(d,b),d=r.convertXml(d),c(a,b)&&(d=r.processData(d,a),k(d,a)),r.checkIfDataExists(d)&&t.parent().find("li").length>0?h():i(),o.get("ajaxCallback")()}).fail(function(){p.warning("Fail to load response data")}).always(function(){}))}}switch(a.keyCode){case 27:i(),l();break;case 38:a.preventDefault(),v.length>0&&w>0&&(w-=1,t.val(o.get("getValue")(v[w])),j(w));break;case 40:a.preventDefault(),v.length>0&&w<v.length-1&&(w+=1,t.val(o.get("getValue")(v[w])),j(w));break;default:if(a.keyCode>40||8===a.keyCode){var c=t.val();o.get("list").hideOnEmptyPhrase!==!0||8!==a.keyCode||""!==c?o.get("requestDelay")>0?(void 0!==m&&clearTimeout(m),m=setTimeout(function(){b(c)},o.get("requestDelay"))):b(c):i()}}})}function d(){t.on("keydown",function(a){a=a||window.event;var b=a.keyCode;return 38===b?(suppressKeypress=!0,!1):void 0}).keydown(function(a){13===a.keyCode&&w>-1&&(t.val(o.get("getValue")(v[w])),o.get("list").onKeyEnterEvent(),o.get("list").onChooseEvent(),w=-1,i(),a.preventDefault())})}function e(){t.off("keypress")}function f(){t.focus(function(){""!==t.val()&&v.length>0&&(w=-1,h())})}function g(){t.blur(function(){setTimeout(function(){w=-1,i()},250)})}function n(){t.attr("autocomplete","off")}a()}function h(){u.trigger("show.eac")}function i(){u.trigger("hide.eac")}function j(a){u.trigger("selectElement.eac",a)}function k(a,b){u.trigger("loadElements.eac",[a,b])}function l(){t.trigger("blur")}var m,n=new a.Constans,o=new a.Configuration(c),p=new a.Logger,q=new a.Template(c.template),r=new a.ListBuilderService(o,a.proccess),s=o.equals,t=b,u="",v=[],w=-1;a.consts=n,this.getConstants=function(){return n},this.getConfiguration=function(){return o},this.getContainer=function(){return u},this.getSelectedItemIndex=function(){return w},this.getItems=function(){return v},this.getItemData=function(a){return v.length<a||void 0===v[a]?-1:v[a]},this.getSelectedItemData=function(){return this.getItemData(w)},this.build=function(){e()},this.init=function(){d()}},a.eacHandles=[],a.getHandle=function(b){return a.eacHandles[b]},a.inputHasId=function(a){return void 0!==$(a).attr("id")&&$(a).attr("id").length>0},a.assignRandomId=function(b){var c="";do c="eac-"+Math.floor(1e4*Math.random());while(0!==$("#"+c).length);elementId=a.consts.getValue("CONTAINER_ID")+c,$(b).attr("id",c)},a.setHandle=function(b,c){a.eacHandles[c]=b},a}(EasyAutocomplete||{});!function(a){a.fn.easyAutocomplete=function(b){return this.each(function(){var c=a(this),d=new EasyAutocomplete.main(c,b);EasyAutocomplete.inputHasId(c)||EasyAutocomplete.assignRandomId(c),d.init(),EasyAutocomplete.setHandle(d,c.attr("id"))})},a.fn.getSelectedItemIndex=function(){var b=a(this).attr("id");return void 0!==b?EasyAutocomplete.getHandle(b).getSelectedItemIndex():-1},a.fn.getItems=function(){var b=a(this).attr("id");return void 0!==b?EasyAutocomplete.getHandle(b).getItems():-1},a.fn.getItemData=function(b){var c=a(this).attr("id");return void 0!==c&&b>-1?EasyAutocomplete.getHandle(c).getItemData(b):-1},a.fn.getSelectedItemData=function(){var b=a(this).attr("id");return void 0!==b?EasyAutocomplete.getHandle(b).getSelectedItemData():-1}}(jQuery);

//code js
/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript&plugins=normalize-whitespace */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=n.util.clone(e[r]));return a;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);o[s]=i[s]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var i in e)e.hasOwnProperty(i)&&(t.call(e,i,e[i],a||i),"Object"!==n.util.type(e[i])||r[n.util.objId(e[i])]?"Array"!==n.util.type(e[i])||r[n.util.objId(e[i])]||(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,i,r)):(r[n.util.objId(e[i])]=!0,n.languages.DFS(e[i],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,i=a.elements||document.querySelectorAll(a.selector),l=0;r=i[l++];)n.highlightElement(r,e===!0,a.callback)},highlightElement:function(t,a,r){for(var i,l,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(i=(o.className.match(e)||[,""])[1].toLowerCase(),l=n.languages[i]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var s=t.textContent,u={element:t,language:i,grammar:l,code:s};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),a&&_self.Worker){var c=new Worker(n.filename);c.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},c.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,r){var i=n.tokenize(e,t);return a.stringify(n.util.encode(i),r)},tokenize:function(e,t){var a=n.Token,r=[e],i=t.rest;if(i){for(var l in i)t[l]=i[l];delete t.rest}e:for(var l in t)if(t.hasOwnProperty(l)&&t[l]){var o=t[l];o="Array"===n.util.type(o)?o:[o];for(var s=0;s<o.length;++s){var u=o[s],c=u.inside,g=!!u.lookbehind,h=!!u.greedy,f=0,d=u.alias;if(h&&!u.pattern.global){var p=u.pattern.toString().match(/[imuy]*$/)[0];u.pattern=RegExp(u.pattern.source,p+"g")}u=u.pattern||u;for(var m=0,y=0;m<r.length;y+=(r[m].matchedStr||r[m]).length,++m){var v=r[m];if(r.length>e.length)break e;if(!(v instanceof a)){u.lastIndex=0;var b=u.exec(v),k=1;if(!b&&h&&m!=r.length-1){if(u.lastIndex=y,b=u.exec(e),!b)break;for(var w=b.index+(g?b[1].length:0),_=b.index+b[0].length,A=m,S=y,P=r.length;P>A&&_>S;++A)S+=(r[A].matchedStr||r[A]).length,w>=S&&(++m,y=S);if(r[m]instanceof a||r[A-1].greedy)continue;k=A-m,v=e.slice(y,S),b.index-=y}if(b){g&&(f=b[1].length);var w=b.index+f,b=b[0].slice(f),_=w+b.length,x=v.slice(0,w),O=v.slice(_),j=[m,k];x&&j.push(x);var N=new a(l,c?n.tokenize(b,c):b,d,b,h);j.push(N),O&&j.push(O),Array.prototype.splice.apply(r,j)}}}}}return r},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}}},a=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.matchedStr=a||null,this.greedy=!!r};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var i={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}n.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=(o?" ":"")+s+'="'+(i.attributes[s]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,i=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),i&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript;
!function(){function e(e){this.defaults=r({},e)}function n(e){return e.replace(/-(\w)/g,function(e,n){return n.toUpperCase()})}function t(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="	".charCodeAt(0)&&(n+=3);return e.length+n}if("undefined"!=typeof self&&self.Prism&&self.document){var r=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};e.prototype={setDefaults:function(e){this.defaults=r(this.defaults,e)},normalize:function(e,t){t=r(this.defaults,t);for(var i in t){var o=n(i);"normalize"!==i&&"setDefaults"!==o&&t[i]&&this[o]&&(e=this[o].call(this,e,t[i]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array(++n).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(new RegExp(" {"+n+"}","g"),"	")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length?(n.sort(function(e,n){return e.length-n.length}),n[0].length?e.replace(new RegExp("^"+n[0],"gm"),""):e):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++n).join("	")+"$&")},breakLines:function(e,n){n=n===!0?80:0|n||80;for(var r=e.split("\n"),i=0;i<r.length;++i)if(!(t(r[i])<=n)){for(var o=r[i].split(/(\s+)/g),a=0,s=0;s<o.length;++s){var l=t(o[s]);a+=l,a>n&&(o[s]="\n"+o[s],a=l)}r[i]=o.join("")}return r.join("\n")}},Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var n=e.element.parentNode,t=/\bno-whitespace-normalization\b/;if(!(!e.code||!n||"pre"!==n.nodeName.toLowerCase()||e.settings&&e.settings["whitespace-normalization"]===!1||t.test(n.className)||t.test(e.element.className))){for(var r=n.childNodes,i="",o="",a=!1,s=Prism.plugins.NormalizeWhitespace,l=0;l<r.length;++l){var c=r[l];c==e.element?a=!0:"#text"===c.nodeName&&(a?o+=c.nodeValue:i+=c.nodeValue,n.removeChild(c),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=i+e.element.innerHTML+o;e.element.innerHTML=s.normalize(u,e.settings),e.code=e.element.textContent}else e.code=i+e.code+o,e.code=s.normalize(e.code,e.settings)}})}}();

//sticky-nav
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
        $('#sticky-anchor').height($('#sticky').outerHeight());
    } else {
        $('#sticky').removeClass('stick');
        $('#sticky-anchor').height(0);
    }
}

$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});

var dir = 1;
var MIN_TOP = 200;
var MAX_TOP = 350;

$('main').scrollspy({ target: '#sidebar-nav' })

//random image for hero-lcc
function randomImage(){
  var images = [
   '/public/images/hero-image-1.jpg',
   '/public/images/hero-image-2.jpg',
   '/public/images/hero-image-4.jpg',
   '/public/images/hero-image-5.jpg',
   '/public/images/hero-image-6.jpg'];
  var size = images.length;
  var x = Math.floor(size * Math.random());
  console.log(x);
  var element = document.getElementsByClassName('hero-lcc-wrapper');
  console.log(element);
  if(element.length > 0)
  {
    element[0].style["background-image"] = "url("+ images[x] + ")";
  }
}

document.addEventListener("DOMContentLoaded", randomImage);

//contentful js
function load_accordion() {
    var deferred = $.Deferred();
 
    $.ajax({
        url: "https://cdn.contentful.com/spaces/7gi7vlzlqchz/entries?content_type=accordion",
        headers: {"Authorization": "Bearer 50947fbd2ca8e8538b77db100058cf4cee3d4550f6e915e1522fa0e01ffadf77"}
    })
    .done(function( data ) {
        console.log( "Data Loaded: " + data.items.length );
        data.items.map(function(item) {
            //console.log(item.fields.title);
            $('ul[data-module="accordion"]').append(
                $('<li>').append(
                    $('<div>').attr('class','accordion-drawer')
                    .append(
                        $('<a>').attr('href','#').attr('class','header')
                        .append(
                            $('<span>').attr('class', 'sr-only').attr('id','tooltip').append("Click to expand")
                        )
                        .append(item.fields.title)
                    )
                    .append(
                        $('<div>').attr('class','content-block').attr('display', 'none')
                        .append(item.fields.content)
                    )
                )
            )
 
        });
        deferred.resolve();
    });
 
    return deferred.promise();
}

function load_carousel() {
    var deferred = $.Deferred();

    $.ajax({
        url: "https://cdn.contentful.com/spaces/7gi7vlzlqchz/entries?content_type=carousel",
        headers: {"Authorization": "Bearer 50947fbd2ca8e8538b77db100058cf4cee3d4550f6e915e1522fa0e01ffadf77"}
    })
    .done(function( data ) {
        console.log( "Data Loaded: " + data.items.length );
        data.items.map(function(item, index) {
            //console.log(item.fields.title);
            $(".carousel-inner").append(
                $('<div>').attr('class',
                'item' 
                + (index === 0 ? ' active': '') 
                + (index === (data.items.length - 1) ? ' yes': ''))
                .append(
                    $('<div>')
                    .attr('class','fill')
                    .attr('style','background-image:url(' + item.fields.imageUrl + ')')
                )
                    .append(
                        $('<div>').attr('class','carousel-caption')
                        .append(
                            $('<a>').attr('href', item.fields.linkTarget)
                            .append(
                                $('<h2>').append(
                                    $('<span>').append(
                                        item.fields.title
                                    )
                                )
                            )
                            .append(
                                $('<p>').append(
                                    item.fields.description
                                )
                            )
                        )
                    )
                    
                )
 
        });

        $(".carousel-inner div").last().css("class", "yes");
        deferred.resolve();
    });
 
    return deferred.promise();

}

function load_group_promo() {
    var deferred = $.Deferred();
 
    $.ajax({
        url: "https://cdn.contentful.com/spaces/7gi7vlzlqchz/entries?content_type=groupPromo",
        headers: {"Authorization": "Bearer 50947fbd2ca8e8538b77db100058cf4cee3d4550f6e915e1522fa0e01ffadf77"}
    })
    .done(function( data ) {
        console.log( "Data Loaded: " + data.items.length );
        data.items.map(function(item) {
            //console.log(item.fields.title);
            $('ul.promo-group').append(
                $('<li>').attr('class','equal-item').append(
                    $('<a>').attr('href',item.fields.url)
                    .append(
                    $('<img>').attr('src', 'sr-only'))
                    
                    .append(
                        $('<h3>').append(item.fields.title)
                    )
                    .append(
                        $('<p>').append(item.fields.description)
                    )
                )
            )
 
        });
        deferred.resolve();
    });
 
    return deferred.promise();
}
 
$(function() {
    load_accordion().then(function() {
        LCC.modules.start($("#accordion-container"), true);
    });

    load_carousel().then(function() {
        LCC.modules.start($("#myCarousel"), true);
    });

    load_group_promo().then(function() {
        LCC.EqualHeights.applyEqualHeights();
    })
});

//search auto complete configuration
    var options = {
    url: "/public/javascripts/site-search.json",

    getValue: "page",

    template: {
        type: "description",
        fields: {
            description: "service"
        }
    },

    list: {
        maxNumberOfElements: 10,
        match: {
            enabled: true
        }
    },

    theme: "square"
};

$("#hero-site-search").easyAutocomplete(options);
