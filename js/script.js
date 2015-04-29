jQuery(document).ready(function () {
    'use strict';
    var onMobile, revapi, formInput, sformInput, map;
    $('a.scrollto').click(function (event) {
        $('html, body').scrollTo(this.hash, this.hash, {gap: {y: -60}, animation:  {easing: 'easeInOutCubic', duration: 1700}});
        event.preventDefault();
        if ($('.navbar-collapse').hasClass('in')) {
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});
    $("a[data-rel=tooltip]").tooltip();
	onMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) { onMobile = true; }
    if (onMobile === true) {
        $("a[data-rel=tooltip]").tooltip('destroy');
        jQuery('#intro-section').css("background-attachment", "scroll");
    }
    if (onMobile === false) {
        jQuery('#intro-section').parallax("50%", -0.4);
    }
    $("#counters-section [data-to]").each(function () {
        var $this = $(this);
        $this.waypoint(function () {
            $this.countTo({speed: 3000});
        }, {offset: '100%', triggerOnce: true});
    });
    $('#owl-clients').owlCarousel({
        items : 6,
        itemsDesktop : [1000, 5],
        itemsDesktopSmall : [768, 4],
        itemsTablet: [520, 2],
        itemsMobile: [320, 2],
        lazyLoad : true,
        pagination: false,
        autoPlay: false
    });


    /* ==========================================================================
    Skill Chart
    ========================================================================== */
    $('.skill-chart-lg').waypoint(function () {
        $(".skill-chart-lg").knob({
            readOnly: true,
            fgColor: "#ffffff",
            bgColor: "rgba(255, 255, 255, 0.5)",
            thickness: 0.2,
            width: "190",
            height: "190"
        });
        $('.skill-chart-lg').each(function () {
            var $this, myVal;
            $this = $(this);
            myVal = $this.attr("data-rel");
            $({
                value: 0
            }).animate({
                value: myVal
            }, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                    $this.val(Math.ceil(this.value)).trigger('change');
                }
            });
        });
    }, { offset: '100%', triggerOnce: true });

    $('.skill-chart').waypoint(function () {
        $(".skill-chart").knob({
            readOnly: true,
            fgColor: "#ffffff",
            bgColor: "rgba(255, 255, 255, 0.5)",
            thickness: 0.2,
            width: "160",
            height: "160"
        });
        $('.skill-chart').each(function () {
            var $this, myVal;
            $this = $(this);
            myVal = $this.attr("data-rel");
            $({
                value: 0
            }).animate({
                value: myVal
            }, {
                duration: 3000,
                easing: 'swing',
                step: function () {
                    $this.val(Math.ceil(this.value)).trigger('change');
                }
            });
        });
    }, { offset: '100%', triggerOnce: true });


    /* ==========================================================================
    FORM Validation
    ========================================================================== */
    $('form#form').submit(function () {
        $('form#form .error').remove();
        $('form#form .success').remove();
        var hasError = false;
        $('.requiredField').each(function () {
            if (jQuery.trim($(this).val()) === '') {
                $(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>');
                hasError = true;
            } else if ($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w]+\.)+[\w]{2,4})?$/;
                if (!emailReg.test(jQuery.trim($(this).val()))) {
                    $(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>');
                    hasError = true;
                }
            }
        });
        if (!hasError) {
            formInput = $(this).serialize();
            $.post($(this).attr('action'), formInput, function (data) {
                $('form#form').append('<div class="success"><div class="col-md-12"><div class="alert alert-nesto"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><p>Thanks! Your email was successfully sent. We will contact you asap.</p></div></div></div>');
            });
            $('.requiredField').val('');
        }
        return false;
    });
    $('form#form input').focus(function () {
        $('form#form .error').remove();
        $('form#form .success').remove();
    });
    $('form#form textarea').focus(function () {
        $('form#form .error').remove();
        $('form#form .success').remove();
    });


    /* ==========================================================================
    Map
    ========================================================================== */
    map = new GMaps({
        el: '#map',
        scrollwheel: false,
        lat: 17.36637,
        lng: 78.55769,
        zoom: 17,
    });
    map.addMarker({
        lat: 17.36638,
        lng: 78.55756,
        icon: "images/logo.png"
    });
	
 $('form#sform').submit(function (){$('form#sform .serror').remove();$('form#sform .ssuccess').remove();var shasError=false;$('.srequiredField').each(function (){if (jQuery.trim($(this).val())===''){$(this).parent().append('<span class="serror"><i class="fa fa-exclamation-triangle"></i></span>');shasError=true;}else if ($(this).hasClass('email')){var emailReg=/^([\w-\.]+@([\w]+\.)+[\w]{2,4})?$/;if (!emailReg.test(jQuery.trim($(this).val()))){$(this).parent().append('<span class="serror"><i class="fa fa-exclamation-triangle"></i></span>');shasError=true;}}});if (!shasError){sformInput=$(this).serialize();$.post($(this).attr('action'), sformInput, function (data){$('form#sform').append('<span class="ssuccess"><i class="fa fa-check"></i></span>');});$('.srequiredField').val('');}return false;});$('form#sform input').focus(function (){$('form#sform .serror').remove();$('form#sform .ssuccess').remove();});});jQuery(window).scroll(function (){'use strict';if (jQuery(document).scrollTop() >=130){jQuery('#nav-wrapper').addClass('tinyheader');}else{jQuery('#nav-wrapper').removeClass('tinyheader');}if (jQuery(document).scrollTop() >=35){jQuery('#nav-wrapper').addClass('tiny');jQuery('#top-header').addClass('hide-top-header');}else{jQuery('#nav-wrapper').removeClass('tiny');jQuery('#top-header').removeClass('hide-top-header');}});
/**
 * touchable dial
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function($){var k={},max=Math.max,min=Math.min;k.c={};k.c.d=$(document);k.c.t=function(e){return e.originalEvent.touches.length-1};k.o=function(){var s=this;this.o=null;this.$=null;this.i=null;this.g=null;this.v=null;this.cv=null;this.x=0;this.y=0;this.w=0;this.h=0;this.$c=null;this.c=null;this.t=0;this.isInit=false;this.fgColor=null;this.pColor=null;this.dH=null;this.cH=null;this.eH=null;this.rH=null;this.scale=1;this.relative=false;this.relativeWidth=false;this.relativeHeight=false;this.$div=null;
this.run=function(){var cf=function(e,conf){var k;for(k in conf)s.o[k]=conf[k];s._carve().init();s._configure()._draw()};if(this.$.data("kontroled"))return;this.$.data("kontroled",true);this.extend();this.o=$.extend({min:this.$.data("min")!==undefined?this.$.data("min"):0,max:this.$.data("max")!==undefined?this.$.data("max"):100,stopper:true,readOnly:this.$.data("readonly")||this.$.attr("readonly")==="readonly",cursor:this.$.data("cursor")===true&&30||this.$.data("cursor")||0,thickness:this.$.data("thickness")&&
Math.max(Math.min(this.$.data("thickness"),1),.01)||.35,lineCap:this.$.data("linecap")||"butt",width:this.$.data("width")||200,height:this.$.data("height")||200,displayInput:this.$.data("displayinput")==null||this.$.data("displayinput"),displayPrevious:this.$.data("displayprevious"),fgColor:this.$.data("fgcolor")||"#87CEEB",inputColor:this.$.data("inputcolor"),font:this.$.data("font")||"Arial",fontWeight:this.$.data("font-weight")||"bold",inline:false,step:this.$.data("step")||1,draw:null,change:null,
cancel:null,release:null},this.o);if(!this.o.inputColor)this.o.inputColor=this.o.fgColor;if(this.$.is("fieldset")){this.v={};this.i=this.$.find("input");this.i.each(function(k){var $this=$(this);s.i[k]=$this;s.v[k]=$this.val();$this.bind("change blur",function(){var val={};val[k]=$this.val();s.val(val)})});this.$.find("legend").remove()}else{this.i=this.$;this.v=this.$.val();this.v===""&&(this.v=this.o.min);this.$.bind("change blur",function(){s.val(s._validate(s.$.val()))})}!this.o.displayInput&&
this.$.hide();this.$c=$(document.createElement("canvas")).attr({width:this.o.width,height:this.o.height});this.$div=$('<div style="'+(this.o.inline?"display:inline;":"")+"width:"+this.o.width+"px;height:"+this.o.height+"px;"+'"></div>');this.$.wrap(this.$div).before(this.$c);this.$div=this.$.parent();if(typeof G_vmlCanvasManager!=="undefined")G_vmlCanvasManager.initElement(this.$c[0]);this.c=this.$c[0].getContext?this.$c[0].getContext("2d"):null;if(!this.c)throw{name:"CanvasNotSupportedException",
message:"Canvas not supported. Please use excanvas on IE8.0.",toString:function(){return this.name+": "+this.message}};this.scale=(window.devicePixelRatio||1)/(this.c.webkitBackingStorePixelRatio||this.c.mozBackingStorePixelRatio||this.c.msBackingStorePixelRatio||this.c.oBackingStorePixelRatio||this.c.backingStorePixelRatio||1);this.relativeWidth=this.o.width%1!==0&&this.o.width.indexOf("%");this.relativeHeight=this.o.height%1!==0&&this.o.height.indexOf("%");this.relative=this.relativeWidth||this.relativeHeight;
this._carve();if(this.v instanceof Object){this.cv={};this.copy(this.v,this.cv)}else this.cv=this.v;this.$.bind("configure",cf).parent().bind("configure",cf);this._listen()._configure()._xy().init();this.isInit=true;this._draw();return this};this._carve=function(){if(this.relative){var w=this.relativeWidth?this.$div.parent().width()*parseInt(this.o.width)/100:this.$div.parent().width(),h=this.relativeHeight?this.$div.parent().height()*parseInt(this.o.height)/100:this.$div.parent().height();this.w=
this.h=Math.min(w,h)}else{this.w=this.o.width;this.h=this.o.height}this.$div.css({"width":this.w+"px","height":this.h+"px"});this.$c.attr({width:this.w,height:this.h});if(this.scale!==1){this.$c[0].width=this.$c[0].width*this.scale;this.$c[0].height=this.$c[0].height*this.scale;this.$c.width(this.w);this.$c.height(this.h)}return this};this._draw=function(){var d=true;s.g=s.c;s.clear();s.dH&&(d=s.dH());d!==false&&s.draw()};this._touch=function(e){var touchMove=function(e){var v=s.xy2val(e.originalEvent.touches[s.t].pageX,
e.originalEvent.touches[s.t].pageY);if(v==s.cv)return;if(s.cH&&s.cH(v)===false)return;s.change(s._validate(v));s._draw()};this.t=k.c.t(e);touchMove(e);k.c.d.bind("touchmove.k",touchMove).bind("touchend.k",function(){k.c.d.unbind("touchmove.k touchend.k");s.val(s.cv)});return this};this._mouse=function(e){var mouseMove=function(e){var v=s.xy2val(e.pageX,e.pageY);if(v==s.cv)return;if(s.cH&&s.cH(v)===false)return;s.change(s._validate(v));s._draw()};mouseMove(e);k.c.d.bind("mousemove.k",mouseMove).bind("keyup.k",
function(e){if(e.keyCode===27){k.c.d.unbind("mouseup.k mousemove.k keyup.k");if(s.eH&&s.eH()===false)return;s.cancel()}}).bind("mouseup.k",function(e){k.c.d.unbind("mousemove.k mouseup.k keyup.k");s.val(s.cv)});return this};this._xy=function(){var o=this.$c.offset();this.x=o.left;this.y=o.top;return this};this._listen=function(){if(!this.o.readOnly){this.$c.bind("mousedown",function(e){e.preventDefault();s._xy()._mouse(e)}).bind("touchstart",function(e){e.preventDefault();s._xy()._touch(e)});this.listen()}else this.$.attr("readonly",
"readonly");if(this.relative)$(window).resize(function(){s._carve().init();s._draw()});return this};this._configure=function(){if(this.o.draw)this.dH=this.o.draw;if(this.o.change)this.cH=this.o.change;if(this.o.cancel)this.eH=this.o.cancel;if(this.o.release)this.rH=this.o.release;if(this.o.displayPrevious){this.pColor=this.h2rgba(this.o.fgColor,"0.4");this.fgColor=this.h2rgba(this.o.fgColor,"0.6")}else this.fgColor=this.o.fgColor;return this};this._clear=function(){this.$c[0].width=this.$c[0].width};
this._validate=function(v){return~~((v<0?-.5:.5)+v/this.o.step)*this.o.step};this.listen=function(){};this.extend=function(){};this.init=function(){};this.change=function(v){};this.val=function(v){};this.xy2val=function(x,y){};this.draw=function(){};this.clear=function(){this._clear()};this.h2rgba=function(h,a){var rgb;h=h.substring(1,7);rgb=[parseInt(h.substring(0,2),16),parseInt(h.substring(2,4),16),parseInt(h.substring(4,6),16)];return"rgba("+rgb[0]+","+rgb[1]+","+rgb[2]+","+a+")"};this.copy=function(f,
t){for(var i in f)t[i]=f[i]}};k.Dial=function(){k.o.call(this);this.startAngle=null;this.xy=null;this.radius=null;this.lineWidth=null;this.cursorExt=null;this.w2=null;this.PI2=2*Math.PI;this.extend=function(){this.o=$.extend({bgColor:this.$.data("bgcolor")||"#EEEEEE",angleOffset:this.$.data("angleoffset")||0,angleArc:this.$.data("anglearc")||360,inline:true},this.o)};this.val=function(v,triggerRelease){if(null!=v){if(triggerRelease!==false&&v!=this.v&&this.rH&&this.rH(v)===false)return;this.cv=this.o.stopper?
max(min(v,this.o.max),this.o.min):v;this.v=this.cv;this.$.val(this.v);this._draw()}else return this.v};this.xy2val=function(x,y){var a,ret;a=Math.atan2(x-(this.x+this.w2),-(y-this.y-this.w2))-this.angleOffset;if(this.angleArc!=this.PI2&&a<0&&a>-.5)a=0;else if(a<0)a+=this.PI2;ret=~~(.5+a*(this.o.max-this.o.min)/this.angleArc)+this.o.min;this.o.stopper&&(ret=max(min(ret,this.o.max),this.o.min));return ret};this.listen=function(){var s=this,mwTimerStop,mwTimerRelease,mw=function(e){e.preventDefault();
var ori=e.originalEvent,deltaX=ori.detail||ori.wheelDeltaX,deltaY=ori.detail||ori.wheelDeltaY,v=s._validate(s.$.val())+(deltaX>0||deltaY>0?s.o.step:deltaX<0||deltaY<0?-s.o.step:0);v=max(min(v,s.o.max),s.o.min);s.val(v,false);if(s.rH){clearTimeout(mwTimerStop);mwTimerStop=setTimeout(function(){s.rH(v);mwTimerStop=null},100);if(!mwTimerRelease)mwTimerRelease=setTimeout(function(){if(mwTimerStop)s.rH(v);mwTimerRelease=null},200)}},kval,to,m=1,kv={37:-s.o.step,38:s.o.step,39:s.o.step,40:-s.o.step};this.$.bind("keydown",
function(e){var kc=e.keyCode;if(kc>=96&&kc<=105)kc=e.keyCode=kc-48;kval=parseInt(String.fromCharCode(kc));if(isNaN(kval)){kc!==13&&kc!==8&&kc!==9&&kc!==189&&(kc!==190||s.$.val().match(/\./))&&e.preventDefault();if($.inArray(kc,[37,38,39,40])>-1){e.preventDefault();var v=parseFloat(s.$.val())+kv[kc]*m;s.o.stopper&&(v=max(min(v,s.o.max),s.o.min));s.change(v);s._draw();to=window.setTimeout(function(){m*=2},30)}}}).bind("keyup",function(e){if(isNaN(kval)){if(to){window.clearTimeout(to);to=null;m=1;s.val(s.$.val())}}else s.$.val()>
s.o.max&&s.$.val(s.o.max)||s.$.val()<s.o.min&&s.$.val(s.o.min)});this.$c.bind("mousewheel DOMMouseScroll",mw);this.$.bind("mousewheel DOMMouseScroll",mw)};this.init=function(){if(this.v<this.o.min||this.v>this.o.max)this.v=this.o.min;this.$.val(this.v);this.w2=this.w/2;this.cursorExt=this.o.cursor/100;this.xy=this.w2*this.scale;this.lineWidth=this.xy*this.o.thickness;this.lineCap=this.o.lineCap;this.radius=this.xy-this.lineWidth/2;this.o.angleOffset&&(this.o.angleOffset=isNaN(this.o.angleOffset)?
0:this.o.angleOffset);this.o.angleArc&&(this.o.angleArc=isNaN(this.o.angleArc)?this.PI2:this.o.angleArc);this.angleOffset=this.o.angleOffset*Math.PI/180;this.angleArc=this.o.angleArc*Math.PI/180;this.startAngle=1.5*Math.PI+this.angleOffset;this.endAngle=1.5*Math.PI+this.angleOffset+this.angleArc;var s=max(String(Math.abs(this.o.max)).length,String(Math.abs(this.o.min)).length,2)+2;this.o.displayInput&&this.i.css({"width":(this.w/2+4>>0)+"px","height":(this.w/3>>0)+"px","position":"absolute","vertical-align":"middle",
"margin-top":(this.w/3>>0)+"px","margin-left":"-"+(this.w*3/4+2>>0)+"px","border":0,"background":"none","font":this.o.fontWeight+" "+(this.w/s>>0)+"px "+this.o.font,"text-align":"center","color":this.o.inputColor||this.o.fgColor,"padding":"0px","-webkit-appearance":"none"})||this.i.css({"width":"0px","visibility":"hidden"})};this.change=function(v){this.cv=v;this.$.val(v)};this.angle=function(v){return(v-this.o.min)*this.angleArc/(this.o.max-this.o.min)};this.draw=function(){var c=this.g,a=this.angle(this.cv),
sat=this.startAngle,eat=sat+a,sa,ea,r=1;c.lineWidth=this.lineWidth;c.lineCap=this.lineCap;this.o.cursor&&(sat=eat-this.cursorExt)&&(eat=eat+this.cursorExt);c.beginPath();c.strokeStyle=this.o.bgColor;c.arc(this.xy,this.xy,this.radius,this.endAngle-1E-5,this.startAngle+1E-5,true);c.stroke();if(this.o.displayPrevious){ea=this.startAngle+this.angle(this.v);sa=this.startAngle;this.o.cursor&&(sa=ea-this.cursorExt)&&(ea=ea+this.cursorExt);c.beginPath();c.strokeStyle=this.pColor;c.arc(this.xy,this.xy,this.radius,
sa-1E-5,ea+1E-5,false);c.stroke();r=this.cv==this.v}c.beginPath();c.strokeStyle=r?this.o.fgColor:this.fgColor;c.arc(this.xy,this.xy,this.radius,sat-1E-5,eat+1E-5,false);c.stroke()};this.cancel=function(){this.val(this.v)}};$.fn.dial=$.fn.knob=function(o){return this.each(function(){var d=new k.Dial;d.o=o;d.$=$(this);d.run()}).parent()}})(jQuery);
// SmoothScroll v1.2.1
// Licensed under the terms of the MIT license.
// People involved
//  - Balazs Galambosi (maintainer)  
//  - Patrick Brunner  (original idea)
//  - Michael Herf     (Pulse Algorithm)
function init(){if(!document.body)return;var body=document.body;var html=document.documentElement;var windowHeight=window.innerHeight;var scrollHeight=body.scrollHeight;root=document.compatMode.indexOf("CSS")>=0?html:body;activeElement=body;initTest();initDone=true;if(top!=self)isFrame=true;else if(scrollHeight>windowHeight&&(body.offsetHeight<=windowHeight||html.offsetHeight<=windowHeight)){var pending=false;var refresh=function(){if(!pending&&html.scrollHeight!=document.height){pending=true;setTimeout(function(){html.style.height=
document.height+"px";pending=false},500)}};html.style.height="auto";setTimeout(refresh,10);var config={attributes:true,childList:true,characterData:false};observer=new MutationObserver(refresh);observer.observe(body,config);if(root.offsetHeight<=windowHeight){var underlay=document.createElement("div");underlay.style.clear="both";body.appendChild(underlay)}}if(document.URL.indexOf("mail.google.com")>-1){var s=document.createElement("style");s.innerHTML=".iu { visibility: hidden }";(document.getElementsByTagName("head")[0]||
html).appendChild(s)}else if(document.URL.indexOf("www.facebook.com")>-1){var home_stream=document.getElementById("home_stream");home_stream&&(home_stream.style.webkitTransform="translateZ(0)")}if(!options.fixedBackground&&!isExcluded){body.style.backgroundAttachment="scroll";html.style.backgroundAttachment="scroll"}}var que=[];var pending=false;var lastScroll=+new Date;
function scrollArray(elem,left,top,delay){delay||(delay=1E3);directionCheck(left,top);if(options.accelerationMax!=1){var now=+new Date;var elapsed=now-lastScroll;if(elapsed<options.accelerationDelta){var factor=(1+30/elapsed)/2;if(factor>1){factor=Math.min(factor,options.accelerationMax);left*=factor;top*=factor}}lastScroll=+new Date}que.push({x:left,y:top,lastX:left<0?.99:-.99,lastY:top<0?.99:-.99,start:+new Date});if(pending)return;var scrollWindow=elem===document.body;var step=function(time){var now=
+new Date;var scrollX=0;var scrollY=0;for(var i=0;i<que.length;i++){var item=que[i];var elapsed=now-item.start;var finished=elapsed>=options.animationTime;var position=finished?1:elapsed/options.animationTime;if(options.pulseAlgorithm)position=pulse(position);var x=item.x*position-item.lastX>>0;var y=item.y*position-item.lastY>>0;scrollX+=x;scrollY+=y;item.lastX+=x;item.lastY+=y;if(finished){que.splice(i,1);i--}}if(scrollWindow)window.scrollBy(scrollX,scrollY);else{if(scrollX)elem.scrollLeft+=scrollX;
if(scrollY)elem.scrollTop+=scrollY}if(!left&&!top)que=[];if(que.length)requestFrame(step,elem,delay/options.frameRate+1);else pending=false};requestFrame(step,elem,0);pending=true}
function wheel(event){if(!initDone)init();var target=event.target;var overflowing=overflowingAncestor(target);if(!overflowing||event.defaultPrevented||isNodeName(activeElement,"embed")||isNodeName(target,"embed")&&/\.pdf/i.test(target.src))return true;var deltaX=event.wheelDeltaX||0;var deltaY=event.wheelDeltaY||0;if(!deltaX&&!deltaY)deltaY=event.wheelDelta||0;if(!options.touchpadSupport&&isTouchpad(deltaY))return true;if(Math.abs(deltaX)>1.2)deltaX*=options.stepSize/120;if(Math.abs(deltaY)>1.2)deltaY*=
options.stepSize/120;scrollArray(overflowing,-deltaX,-deltaY);event.preventDefault()}
function keydown(event){var target=event.target;var modifier=event.ctrlKey||event.altKey||event.metaKey||event.shiftKey&&event.keyCode!==key.spacebar;if(/input|textarea|select|embed/i.test(target.nodeName)||target.isContentEditable||event.defaultPrevented||modifier)return true;if(isNodeName(target,"button")&&event.keyCode===key.spacebar)return true;var shift,x=0,y=0;var elem=overflowingAncestor(activeElement);var clientHeight=elem.clientHeight;if(elem==document.body)clientHeight=window.innerHeight;
switch(event.keyCode){case key.up:y=-options.arrowScroll;break;case key.down:y=options.arrowScroll;break;case key.spacebar:shift=event.shiftKey?1:-1;y=-shift*clientHeight*.9;break;case key.pageup:y=-clientHeight*.9;break;case key.pagedown:y=clientHeight*.9;break;case key.home:y=-elem.scrollTop;break;case key.end:var damt=elem.scrollHeight-elem.scrollTop-clientHeight;y=damt>0?damt+10:0;break;case key.left:x=-options.arrowScroll;break;case key.right:x=options.arrowScroll;break;default:return true}scrollArray(elem,
x,y);event.preventDefault()}function mousedown(event){activeElement=event.target}var cache={};setInterval(function(){cache={}},10*1E3);var uniqueID=function(){var i=0;return function(el){return el.uniqueID||(el.uniqueID=i++)}}();function setCache(elems,overflowing){for(var i=elems.length;i--;)cache[uniqueID(elems[i])]=overflowing;return overflowing}
function overflowingAncestor(el){var elems=[];var rootScrollHeight=root.scrollHeight;do{var cached=cache[uniqueID(el)];if(cached)return setCache(elems,cached);elems.push(el);if(rootScrollHeight===el.scrollHeight){if(!isFrame||root.clientHeight+10<rootScrollHeight)return setCache(elems,document.body)}else if(el.clientHeight+10<el.scrollHeight){overflow=getComputedStyle(el,"").getPropertyValue("overflow-y");if(overflow==="scroll"||overflow==="auto")return setCache(elems,el)}}while(el=el.parentNode)}
var defaultOptions={frameRate:350,animationTime:1700,stepSize:100,pulseAlgorithm:true,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:true,arrowScroll:50,touchpadSupport:true,fixedBackground:true,excluded:""};var options=defaultOptions;var isExcluded=false;var isFrame=false;var direction={x:0,y:0};var initDone=false;var root=document.documentElement;var activeElement;var observer;var deltaBuffer=[120,120,120];
var key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};
function initTest(){var disableKeyboard=false;if(document.URL.indexOf("google.com/reader/view")>-1)disableKeyboard=true;if(options.excluded){var domains=options.excluded.split(/[,\n] ?/);domains.push("mail.google.com");for(var i=domains.length;i--;)if(document.URL.indexOf(domains[i])>-1){observer&&observer.disconnect();removeEvent("mousewheel",wheel);disableKeyboard=true;isExcluded=true;break}}if(disableKeyboard)removeEvent("keydown",keydown);if(options.keyboardSupport&&!disableKeyboard)addEvent("keydown",
keydown)}
function addEvent(type,fn,bubble){window.addEventListener(type,fn,bubble||false)}function removeEvent(type,fn,bubble){window.removeEventListener(type,fn,bubble||false)}function isNodeName(el,tag){return(el.nodeName||"").toLowerCase()===tag.toLowerCase()}function directionCheck(x,y){x=x>0?1:-1;y=y>0?1:-1;if(direction.x!==x||direction.y!==y){direction.x=x;direction.y=y;que=[];lastScroll=0}}var deltaBufferTimer;
function isTouchpad(deltaY){if(!deltaY)return;deltaY=Math.abs(deltaY);deltaBuffer.push(deltaY);deltaBuffer.shift();clearTimeout(deltaBufferTimer);deltaBufferTimer=setTimeout(function(){chrome.storage.local.set({deltaBuffer:deltaBuffer})},1E3);var allEquals=deltaBuffer[0]==deltaBuffer[1]&&deltaBuffer[1]==deltaBuffer[2];var allDivisable=isDivisible(deltaBuffer[0],120)&&isDivisible(deltaBuffer[1],120)&&isDivisible(deltaBuffer[2],120);return!(allEquals||allDivisable)}
function isDivisible(n,divisor){return Math.floor(n/divisor)==n/divisor}var requestFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(callback,element,delay){window.setTimeout(callback,delay||1E3/60)}}();var MutationObserver=window.MutationObserver||window.WebKitMutationObserver;
function pulse_(x){var val,start,expx;x=x*options.pulseScale;if(x<1)val=x-(1-Math.exp(-x));else{start=Math.exp(-1);x-=1;expx=1-Math.exp(-x);val=start+expx*(1-start)}return val*options.pulseNormalize}function pulse(x){if(x>=1)return 1;if(x<=0)return 0;if(options.pulseNormalize==1)options.pulseNormalize/=pulse_(1);return pulse_(x)}addEvent("mousedown",mousedown);addEvent("mousewheel",wheel);addEvent("load",init);

