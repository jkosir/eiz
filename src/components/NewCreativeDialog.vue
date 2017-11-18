<style lang="less">
  @import '../main';

  img.figure {
    position: absolute;
    z-index: 25;
    height: 40px;
  }

  .cover-container {
    width: 100%;
  }

  .board-container {
    position: relative;
    img.board {
      width: 1129px;
    }
    img.platform {
      position: absolute;
      height: 14px;
    }
  }
</style>


<template>
  <div class="site-wrapper">

    <div class="site-wrapper-inner">

      <div class="cover-container">

        <div class="masthead clearfix">
          <div class="inner">
            <h3 class="masthead-brand">Glasba</h3>
            <nav class="nav nav-masthead">
              <a class="nav-link active" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Contact</a>
            </nav>
          </div>
        </div>
        <div class="board-container">
          <img class="platform" src="/assets/images/platform.gif" alt="" style="transform: translate(150px,191px)">
          <img class="platform" src="/assets/images/platform.gif" alt="" style="transform: translate(250px,171px)">
          <img id="figure" src="/assets/images/mario.png" alt="" class="figure"
               :style="figureStyle">
          <img class="board" src="/assets/images/crtovje.PNG" alt="">
        </div>
        <div class="inner cover">
          <h1 class="cover-heading">Vadnica glasbenih lestvic</h1>
          <p class="lead">
            Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p class="lead">
            <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
          </p>
          <button class="btn btn-default" @click="animate">Animate</button>
        </div>

        <div class="mastfoot">
          <div class="inner">
            <p>Cover template for <a href="https://getbootstrap.com">Bootstrap</a>, by <a
                href="https://twitter.com/mdo">@mdo</a>.</p>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import _ from "lodash";

  export default {
    data() {
      return {
        v0: 50, //m/s
        g: 20,
        timeFactor: 5,
        angle: Math.PI / 3, //45 degrees
        startTimestamp: null,
        figurePosition: [150, 152]
      }
    },
    created() {
      this.$nextTick(() => this.figure = this.$el.querySelector('#figure'));
    },
    computed: {
      figureStyle() {
        return `transform: translate(${this.figurePosition[0]}px, ${this.figurePosition[1]}px)`
      }
    },
    methods: {
      xt(t) {
        return this.v0 * t * Math.cos(this.angle)
      },
      yt(t) {
        return this.v0 * t * Math.sin(this.angle) - 0.5 * Math.pow(t, 2) * this.g
      },
      animate() {
        this.startTimestamp = null;
        this.initialPosition = _.clone(this.figurePosition);
        window.requestAnimationFrame(this.animationStep);
      },
      animationStep(timestamp) {
        if (!this.startTimestamp) this.startTimestamp = timestamp;
        let t = this.timeFactor * (timestamp - this.startTimestamp) / 1000;
        this.figurePosition = [this.initialPosition[0] + this.xt(t), this.initialPosition[1] - this.yt(t)];
        if (t < 4) {
          window.requestAnimationFrame(this.animationStep);
        }
      }
    }
  }
</script>
