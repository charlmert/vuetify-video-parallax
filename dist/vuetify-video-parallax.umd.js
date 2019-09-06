(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.VuetifyVideoParallax = {}));
}(this, function (exports) { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    name: 'v-video-parallax',
    props: {
      src: String,
      height: String,
      width: {
        type: String,
        default: '100%'
      },
      loop: {
        type: String,
        default: 'loop'
      },
      muted: {
        type: String,
        default: 'muted'
      },
      autoplay: {
        type: String,
        default: 'autoplay'
      }
    },
    data: function data () {
      return {
        elOffsetTop: 0,
        parallax: 0,
        parallaxDist: 0,
        percentScrolled: 0,
        scrollTop: 0,
        windowHeight: 0,
        windowBottom: 0,
        isBooted: true
      }
    },
    mounted: function() {
      this.init();

      window.addEventListener('scroll', this.translate);
      window.addEventListener('resize', this.translate);

      this.translate();
    },
    methods: {
      init: function init() {
        var _this = this;

        var video = this.$refs.video;
        if (!video) { return; }
        if (video.complete) {
            this.translate();
            this.listeners();
        } else {
          video.addEventListener('load', function () {
            _this.translate();
            _this.listeners();
          }, false);
        }
      },

      calcDimensions: function calcDimensions() {
          var offset = this.$el.getBoundingClientRect();
          this.scrollTop = window.pageYOffset;
          if (typeof(this.height) == 'string') {
            this.parallaxDist = this.imgHeight - parseInt(this.height.replace(/\D/, ''));
          } else if (typeof(this.height) == 'number') {
            this.parallaxDist = this.imgHeight;
          }
          this.elOffsetTop = offset.top + this.scrollTop;
          this.windowHeight = window.innerHeight;
          this.windowBottom = this.scrollTop + this.windowHeight;
      },
      listeners: function listeners() {
          window.addEventListener('scroll', this.translate, false);
          window.addEventListener('resize', this.translate, false);
      },
      objHeight: function () {
          if (typeof(this.$refs.video.height) == 'number') {
            return this.$refs.video.height
          } else if (typeof(this.$refs.video.height) == 'string') {
            return parseInt(this.$refs.video.height.replace(/\D/, ''))
          }
      },
      translate: function translate() {
          this.calcDimensions();
          this.percentScrolled = (this.windowBottom - this.elOffsetTop) / (parseInt(this.height) + this.windowHeight);
          this.parallax = Math.round(this.parallaxDist * this.percentScrolled);
      }
    },
    computed: {
      imgHeight: function imgHeight() {
        return this.objHeight()
      },
      styles: function styles() {
        return {
          opacity: this.isBooted ? 1 : 0,
          width: this._width,
          transform: 'translate(0, ' + this.parallax + 'px)'
        }
      },
      _width: function() {
        return this.width ?  this.width : '100%'
      }

    },
    watch: {
      parallax: function parallax() {
        this.isBooted = true;
      }
    },

    beforeDestroy: function beforeDestroy() {
      window.removeEventListener('scroll', this.translate, false);
      window.removeEventListener('resize', this.translate, false);
    },
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }
  var HEAD;
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) { style.element.setAttribute('media', css.media); }

        if (HEAD === undefined) {
          HEAD = document.head || document.getElementsByTagName('head')[0];
        }

        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) { style.element.removeChild(nodes[index]); }
        if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }else { style.element.appendChild(textNode); }
      }
    }
  }

  var browser = createInjector;

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c(
        "div",
        { staticClass: "v-parallax", style: "height: " + _vm.height + "px;" },
        [
          _c("div", { staticClass: "v-parallax__image-container" }, [
            _c(
              "video",
              {
                ref: "video",
                style: _vm.styles,
                attrs: { loop: _vm.loop, autoplay: _vm.autoplay },
                domProps: { muted: _vm.muted }
              },
              [_c("source", { attrs: { src: _vm.src } })]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "v-parallax__content" },
            [_vm._t("default")],
            2
          )
        ]
      )
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    var __vue_inject_styles__ = function (inject) {
      if (!inject) { return }
      inject("data-v-1528927a_0", { source: "\n.v-parallax {\n    position: relative;\n    overflow: hidden;\n    z-index: 0;\n}\n.v-parallax__image-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n    contain: strict;\n}\n.v-parallax__content {\n    color: #000000;\n    height: 100%;\n    z-index: 2;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    padding: 0 1rem;\n}\n", map: {"version":3,"sources":["/Users/charlmert/projects/vuetify-video-parallax/src/VuetifyVideoParallax.vue"],"names":[],"mappings":";AAsIA;IACA,kBAAA;IACA,gBAAA;IACA,UAAA;AACA;AACA;IACA,kBAAA;IACA,MAAA;IACA,OAAA;IACA,QAAA;IACA,SAAA;IACA,UAAA;IACA,eAAA;AACA;AACA;IACA,cAAA;IACA,YAAA;IACA,UAAA;IACA,kBAAA;IACA,oBAAA;IACA,oBAAA;IACA,aAAA;IACA,4BAAA;IACA,6BAAA;IACA,0BAAA;IACA,sBAAA;IACA,wBAAA;IACA,qBAAA;IACA,uBAAA;IACA,eAAA;AACA","file":"VuetifyVideoParallax.vue","sourcesContent":["<template>\n<div>\n  <div class=\"v-parallax\" :style=\"'height: ' + height + 'px;'\">\n    <div class=\"v-parallax__image-container\">\n      <video ref=\"video\" :loop=\"loop\" :muted=\"muted\" :autoplay=\"autoplay\" :style=\"styles\">\n        <source :src=\"src\">\n      </video>\n    </div>\n    <div class=\"v-parallax__content\">\n      <slot/>\n    </div>\n  </div>\n</div>\n</template>\n\n<script>\nexport default {\n  name: 'v-video-parallax',\n  props: {\n    src: String,\n    height: String,\n    width: {\n      type: String,\n      default: '100%'\n    },\n    loop: {\n      type: String,\n      default: 'loop'\n    },\n    muted: {\n      type: String,\n      default: 'muted'\n    },\n    autoplay: {\n      type: String,\n      default: 'autoplay'\n    }\n  },\n  data () {\n    return {\n      elOffsetTop: 0,\n      parallax: 0,\n      parallaxDist: 0,\n      percentScrolled: 0,\n      scrollTop: 0,\n      windowHeight: 0,\n      windowBottom: 0,\n      isBooted: true\n    }\n  },\n  mounted: function() {\n    this.init()\n\n    window.addEventListener('scroll', this.translate)\n    window.addEventListener('resize', this.translate)\n\n    this.translate()\n  },\n  methods: {\n    init: function init() {\n      var _this = this;\n\n      var video = this.$refs.video;\n      if (!video) return;\n      if (video.complete) {\n          this.translate()\n          this.listeners()\n      } else {\n        video.addEventListener('load', function () {\n          _this.translate()\n          _this.listeners()\n        }, false)\n      }\n    },\n\n    calcDimensions: function calcDimensions() {\n        var offset = this.$el.getBoundingClientRect();\n        this.scrollTop = window.pageYOffset\n        if (typeof(this.height) == 'string') {\n          this.parallaxDist = this.imgHeight - parseInt(this.height.replace(/\\D/, ''))\n        } else if (typeof(this.height) == 'number') {\n          this.parallaxDist = this.imgHeight\n        }\n        this.elOffsetTop = offset.top + this.scrollTop;\n        this.windowHeight = window.innerHeight\n        this.windowBottom = this.scrollTop + this.windowHeight;\n    },\n    listeners: function listeners() {\n        window.addEventListener('scroll', this.translate, false)\n        window.addEventListener('resize', this.translate, false)\n    },\n    objHeight: function () {\n        if (typeof(this.$refs.video.height) == 'number') {\n          return this.$refs.video.height\n        } else if (typeof(this.$refs.video.height) == 'string') {\n          return parseInt(this.$refs.video.height.replace(/\\D/, ''))\n        }\n    },\n    translate: function translate() {\n        this.calcDimensions();\n        this.percentScrolled = (this.windowBottom - this.elOffsetTop) / (parseInt(this.height) + this.windowHeight)\n        this.parallax = Math.round(this.parallaxDist * this.percentScrolled)\n    }\n  },\n  computed: {\n    imgHeight: function imgHeight() {\n      return this.objHeight()\n    },\n    styles: function styles() {\n      return {\n        opacity: this.isBooted ? 1 : 0,\n        width: this._width,\n        transform: 'translate(0, ' + this.parallax + 'px)'\n      }\n    },\n    _width: function() {\n      return this.width ?  this.width : '100%'\n    }\n\n  },\n  watch: {\n    parallax: function parallax() {\n      this.isBooted = true\n    }\n  },\n\n  beforeDestroy: function beforeDestroy() {\n    window.removeEventListener('scroll', this.translate, false)\n    window.removeEventListener('resize', this.translate, false)\n  },\n}\n</script>\n\n<style>\n.v-parallax {\n    position: relative;\n    overflow: hidden;\n    z-index: 0;\n}\n.v-parallax__image-container {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 1;\n    contain: strict;\n}\n.v-parallax__content {\n    color: #000000;\n    height: 100%;\n    z-index: 2;\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    padding: 0 1rem;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject SSR */
    

    
    var component = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      browser,
      undefined
    );

  // Import vue component

  // Declare install function executed by Vue.use()
  function install(Vue) {
  	if (install.installed) { return; }
  	install.installed = true;
    Vue.component('v-video-parallax', component);
  }

  // Create module definition for Vue.use()
  var plugin = {
  	install: install,
  };

  // Auto-install when vue is found (eg. in browser via <script> tag)
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
  	GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
  	GlobalVue = global.Vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  exports.default = component;
  exports.install = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));