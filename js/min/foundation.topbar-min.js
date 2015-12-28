!function($,t,a,e){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.5.1",settings:{index:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all"},init:function(t,a,e){Foundation.inherit(this,"add_custom_rule register_media throttle");var s=this;s.register_media("topbar","foundation-mq-topbar"),this.bindings(a,e),s.S("["+this.attr_name()+"]",this.scope).each(function(){var t=$(this),a=t.data(s.attr_name(!0)+"-init"),e=s.S("section, .top-bar-section",this);t.data("index",0);var i=t.parent();i.hasClass("fixed")||s.is_sticky(t,i,a)?(s.settings.sticky_class=a.sticky_class,s.settings.sticky_topbar=t,t.data("height",i.outerHeight()),t.data("stickyoffset",i.offset().top)):t.data("height",t.outerHeight()),a.assembled||s.assemble(t),a.is_hover?s.S(".has-dropdown",t).addClass("not-click"):s.S(".has-dropdown",t).removeClass("not-click"),s.add_custom_rule(".f-topbar-fixed { padding-top: "+t.data("height")+"px }"),i.hasClass("fixed")&&s.S("body").addClass("f-topbar-fixed")})},is_sticky:function(t,a,e){var s=a.hasClass(e.sticky_class),i=matchMedia(Foundation.media_queries.small).matches,n=matchMedia(Foundation.media_queries.medium).matches,o=matchMedia(Foundation.media_queries.large).matches;return s&&"all"===e.sticky_on?!0:s&&this.small()&&-1!==e.sticky_on.indexOf("small")&&i&&!n&&!o?!0:s&&this.medium()&&-1!==e.sticky_on.indexOf("medium")&&i&&n&&!o?!0:s&&this.large()&&-1!==e.sticky_on.indexOf("large")&&i&&n&&o?!0:s&&navigator.userAgent.match(/(iPad|iPhone|iPod)/g)?!0:!1},toggle:function(a){var e=this,s;s=a?e.S(a).closest("["+this.attr_name()+"]"):e.S("["+this.attr_name()+"]");var i=s.data(this.attr_name(!0)+"-init"),n=e.S("section, .top-bar-section",s);e.breakpoint()&&(e.rtl?(n.css({right:"0%"}),$(">.name",n).css({right:"100%"})):(n.css({left:"0%"}),$(">.name",n).css({left:"100%"})),e.S("li.moved",n).removeClass("moved"),s.data("index",0),s.toggleClass("expanded").css("height","")),i.scrolltop?s.hasClass("expanded")?s.parent().hasClass("fixed")&&(i.scrolltop?(s.parent().removeClass("fixed"),s.addClass("fixed"),e.S("body").removeClass("f-topbar-fixed"),t.scrollTo(0,0)):s.parent().removeClass("expanded")):s.hasClass("fixed")&&(s.parent().addClass("fixed"),s.removeClass("fixed"),e.S("body").addClass("f-topbar-fixed")):(e.is_sticky(s,s.parent(),i)&&s.parent().addClass("fixed"),s.parent().hasClass("fixed")&&(s.hasClass("expanded")?(s.addClass("fixed"),s.parent().addClass("expanded"),e.S("body").addClass("f-topbar-fixed")):(s.removeClass("fixed"),s.parent().removeClass("expanded"),e.update_sticky_positioning())))},timer:null,events:function(a){var e=this,s=this.S;s(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(t){t.preventDefault(),e.toggle(this)}).on("click.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(t){var a=$(this).closest("li");!e.breakpoint()||a.hasClass("back")||a.hasClass("has-dropdown")||e.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(t){var a=s(this),i=s(t.target),n=a.closest("["+e.attr_name()+"]"),o=n.data(e.attr_name(!0)+"-init");return i.data("revealId")?void e.toggle():void(e.breakpoint()||(!o.is_hover||Modernizr.touch)&&(t.stopImmediatePropagation(),a.hasClass("hover")?(a.removeClass("hover").find("li").removeClass("hover"),a.parents("li.hover").removeClass("hover")):(a.addClass("hover"),$(a).siblings().removeClass("hover"),"A"===i[0].nodeName&&i.parent().hasClass("has-dropdown")&&t.preventDefault())))}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(t){if(e.breakpoint()){t.preventDefault();var a=s(this),i=a.closest("["+e.attr_name()+"]"),n=i.find("section, .top-bar-section"),o=a.next(".dropdown").outerHeight(),r=a.closest("li");i.data("index",i.data("index")+1),r.addClass("moved"),e.rtl?(n.css({right:-(100*i.data("index"))+"%"}),n.find(">.name").css({right:100*i.data("index")+"%"})):(n.css({left:-(100*i.data("index"))+"%"}),n.find(">.name").css({left:100*i.data("index")+"%"})),i.css("height",a.siblings("ul").outerHeight(!0)+i.data("height"))}}),s(t).off(".topbar").on("resize.fndtn.topbar",e.throttle(function(){e.resize.call(e)},50)).trigger("resize").trigger("resize.fndtn.topbar").load(function(){s(this).trigger("resize.fndtn.topbar")}),s("body").off(".topbar").on("click.fndtn.topbar",function(t){var a=s(t.target).closest("li").closest("li.hover");a.length>0||s("["+e.attr_name()+"] li.hover").removeClass("hover")}),s(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(t){t.preventDefault();var a=s(this),i=a.closest("["+e.attr_name()+"]"),n=i.find("section, .top-bar-section"),o=i.data(e.attr_name(!0)+"-init"),r=a.closest("li.moved"),d=r.parent();i.data("index",i.data("index")-1),e.rtl?(n.css({right:-(100*i.data("index"))+"%"}),n.find(">.name").css({right:100*i.data("index")+"%"})):(n.css({left:-(100*i.data("index"))+"%"}),n.find(">.name").css({left:100*i.data("index")+"%"})),0===i.data("index")?i.css("height",""):i.css("height",d.outerHeight(!0)+i.data("height")),setTimeout(function(){r.removeClass("moved")},300)}),s(this.scope).find(".dropdown a").focus(function(){$(this).parents(".has-dropdown").addClass("hover")}).blur(function(){$(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var e=t.S(this),s=e.data(t.attr_name(!0)+"-init"),i=e.parent("."+t.settings.sticky_class),n;if(!t.breakpoint()){var o=e.hasClass("expanded");e.css("height","").removeClass("expanded").find("li").removeClass("hover"),o&&t.toggle(e)}t.is_sticky(e,i,s)&&(i.hasClass("fixed")?(i.removeClass("fixed"),n=i.offset().top,t.S(a.body).hasClass("f-topbar-fixed")&&(n-=e.data("height")),e.data("stickyoffset",n),i.addClass("fixed")):(n=i.offset().top,e.data("stickyoffset",n)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(t){var a=this,e=t.data(this.attr_name(!0)+"-init"),s=a.S("section, .top-bar-section",t);s.detach(),a.S(".has-dropdown>a",s).each(function(){var t=a.S(this),s=t.siblings(".dropdown"),i=t.attr("href"),n;s.find(".title.back").length||(n=$(1==e.mobile_show_parent_link&&i?'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-large-up"><a class="parent-link js-generated" href="'+i+'">'+t.html()+"</a></li>":'<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),$("h5>a",n).html(1==e.custom_back_text?e.back_text:"&laquo; "+t.html()),s.prepend(n))}),s.appendTo(t),this.sticky(),this.assembled(t)},assembled:function(t){t.data(this.attr_name(!0),$.extend({},t.data(this.attr_name(!0)),{assembled:!0}))},height:function(t){var a=0,e=this;return $("> li",t).each(function(){a+=e.S(this).outerHeight(!0)}),a},sticky:function(){var a=this;this.S(t).on("scroll",function(){a.update_sticky_positioning()})},update_sticky_positioning:function(){var a="."+this.settings.sticky_class,e=this.S(t),s=this;if(s.settings.sticky_topbar&&s.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var i=this.settings.sticky_topbar.data("stickyoffset");s.S(a).hasClass("expanded")||(e.scrollTop()>i?s.S(a).hasClass("fixed")||(s.S(a).addClass("fixed"),s.S("body").addClass("f-topbar-fixed")):e.scrollTop()<=i&&s.S(a).hasClass("fixed")&&(s.S(a).removeClass("fixed"),s.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(t).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document);