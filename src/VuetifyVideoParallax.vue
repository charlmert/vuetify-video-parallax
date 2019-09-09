<template>
<div>
  <div class="v-parallax" :style="'height: ' + height + 'px;'">
    <div class="v-parallax__image-container">
      <img ref="image" :src="img" :style="imageStyles">
      <video ref="video" :loop="loop" :muted="muted" :autoplay="autoplay" :style="videoStyles">
        <source :src="src">
      </video>
    </div>
    <div class="v-parallax__content">
      <slot/>
    </div>
  </div>
</div>
</template>

<script>
import { Loader, middleware } from 'resource-loader';

export default {
  name: 'v-video-parallax',
  props: {
    src: String,
    img: {
      type: String,
      default: ''
    },
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
    },
    onProgress: {
      type: Function,
      default: null
    },
    onError: {
      type: Function,
      default: null
    },
    onLoad: {
      type: Function,
      default: null
    },
    onComplete: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
      elOffsetTop: 0,
      parallax: 0,
      parallaxDist: 0,
      percentScrolled: 0,
      scrollTop: 0,
      windowHeight: 0,
      windowBottom: 0,
      isBooted: true,
      videoReady: false,
    }
  },
  mounted: function() {
    this.init()

    window.addEventListener('scroll', this.translate)
    window.addEventListener('resize', this.translate)

    this.translate()
  },
  methods: {
    init: function init() {
      var _this = this;

      var video = this.$refs.video;
      if (!video) return;
      if (video.complete) {
          this.translate()
          this.listeners()
      } else {
        video.addEventListener('load', function () {
          _this.translate()
          _this.listeners()
        }, false)
      }

      if (this.img != '') {
        var image = this.$refs.image;
        if (!image) return;
        if (image.complete) {
            this.translate()
            this.listeners()
        } else {
          image.addEventListener('load', function () {
            _this.translate()
            _this.listeners()
          }, false)
        }
      }
    },
    calcDimensions: function calcDimensions() {
        var offset = this.$el.getBoundingClientRect();
        this.scrollTop = window.pageYOffset
        if (typeof(this.height) == 'string') {
          this.parallaxDist = this.imgHeight - parseInt(this.height.replace(/\D/, ''))
        } else if (typeof(this.height) == 'number') {
          this.parallaxDist = this.imgHeight
        }
        this.elOffsetTop = offset.top + this.scrollTop;
        this.windowHeight = window.innerHeight
        this.windowBottom = this.scrollTop + this.windowHeight;
    },
    listeners: function listeners() {
        window.addEventListener('scroll', this.translate, false)
        window.addEventListener('resize', this.translate, false)
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
        this.percentScrolled = (this.windowBottom - this.elOffsetTop) / (parseInt(this.height) + this.windowHeight)
        this.parallax = Math.round(this.parallaxDist * this.percentScrolled)
    },
    _onComplete (after) {
        this.$data.videoReady = true
        if (typeof(after) == 'function') {
          after()
        }
    }
  },
  computed: {
    imgHeight: function imgHeight() {
      return this.objHeight()
    },
    videoStyles: function () {
      if (!this.$data.videoReady) {
        return {
          visibility: 'hidden',
          display: 'none',
        }
      } else {
        return {
          visibility: 'visible',
          display: 'block',
          opacity: this.isBooted ? 1 : 0,
          width: this._width,
          transform: 'translate(0, ' + this.parallax + 'px)'
        }
      }
    },
    imageStyles: function () {
      if (!this.$data.videoReady) {
        return {
          visibility: 'visible',
          display: 'block',
          opacity: this.isBooted ? 1 : 0,
          width: this._width,
          transform: 'translate(0, ' + this.parallax + 'px)',
        }
      } else {
        return {
          visibility: 'hidden',
          display: 'none',
        }
      }
    },
    _width: function() {
      return this.width ?  this.width : '100%'
    }
  },
  watch: {
    parallax: function parallax() {
      this.isBooted = true
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.translate, false)
    window.removeEventListener('resize', this.translate, false)
  },
  created: function() {
    const loader = new Loader();
    let options = {}
    loader
        .add(this.src, this.src, options)
        .pre(middleware.caching)
        .use(middleware.parsing)
        .load((loader, resources) => {

        });

    if (typeof(this.onProgress) == 'function') {
      loader.onProgress.add(this.onProgress);
    }
    if (typeof(this.onError) == 'function') {
      loader.onError.add(this.onError);
    }
    if (typeof(this.onLoad) == 'function') {
      loader.onLoad.add(this.onLoad);
    }
    loader.onComplete.add(() => {
      this._onComplete(this.onComplete)
    });
  }
}
</script>

<style>
.v-parallax {
    position: relative;
    overflow: hidden;
    z-index: 0;
}
.v-parallax__image-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    contain: strict;
}
.v-parallax__content {
    color: #000000;
    height: 100%;
    z-index: 2;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 1rem;
}
</style>
