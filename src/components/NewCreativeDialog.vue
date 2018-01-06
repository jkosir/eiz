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

  .piano-key {
    transition: opacity 0.1s ease;
  }

  .piano-key:hover {
    opacity: 0.8;
  }

  .piano-key:active {
    opacity: 0.5;
  }
</style>


<template>
  <div class="site-wrapper">

    <div class="site-wrapper-inner">

      <div class="cover-container">

        <div style="right: 50px; top:40px;position: absolute">
          <img style="display: inline-block" src="/assets/images/MC_Heart.png" alt="" width="20px">
          <a style="display: inline-block" class="nav-link active" href="#">{{ this.lives }}</a>
        </div>
        <div class="masthead clearfix">
          <div class="inner">
            <h3 class="masthead-brand">Vadnica durovih lestvic</h3>
            <nav class="nav nav-masthead">
              <a class="nav-link active" href="#">{{ lestvica.label }}</a>
            </nav>
          </div>
        </div>
        <div class="board-container">
          <img v-for="(pos, idx) in lestvica.positions"
               class="platform" src="/assets/images/platform.gif" alt=""
               :style="'transform: translate('+(150+100*idx)+'px,'+positions[pos]+'px)'">
          <img id="figure" src="/assets/images/mario.png" alt="" class="figure"
               :style="figureStyle">
          <img class="board" src="/assets/images/crtovje.PNG" alt="">
        </div>
        <div class="piano">
          <svg width="500px" viewBox="0 0 1120 400" version="1.1" xmlns="http://www.w3.org/2000/svg"
               xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="piano-keyboard">
              <g id="octave-1">
                <rect @click="press" id="octave-1-C-key" class="piano-key white-key" data-piano-key="C3"
                      stroke="#555555" fill="#FFFFF7" x="0" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-1-D-key" class="piano-key white-key" data-piano-key="D3"
                      stroke="#555555" fill="#FFFFF7" x="80" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-1-E-key" class="piano-key white-key" data-piano-key="E3"
                      stroke="#555555" fill="#FFFFF7" x="160" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-1-F-key" class="piano-key white-key" data-piano-key="F3"
                      stroke="#555555" fill="#FFFFF7" x="240" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-1-G-key" class="piano-key white-key" data-piano-key="G3"
                      stroke="#555555" fill="#FFFFF7" x="320" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-1-A-key" class="piano-key white-key" data-piano-key="A3"
                      stroke="#555555" fill="#FFFFF7" x="400" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-1-H-key" class="piano-key white-key" data-piano-key="B3"
                      stroke="#555555" fill="#FFFFF7" x="480" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-1-C#-key" class="piano-key black-key" data-piano-key="C#3"
                      stroke="#979797" fill="#4B4B4B" x="60" y="0" width="40" height="280"></rect>
                <rect @click="press" id="octave-1-D#-key" class="piano-key black-key" data-piano-key="D#3"
                      stroke="#979797" fill="#4B4B4B" x="140" y="0" width="40" height="280"></rect>
                <rect @click="press" id="octave-1-F#-key" class="piano-key black-key" data-piano-key="F#3"
                      stroke="#979797" fill="#4B4B4B" x="300" y="0" width="40" height="280"></rect>
                <rect @click="press" id="octave-1-G#-key" class="piano-key black-key" data-piano-key="G#3"
                      stroke="#979797" fill="#4B4B4B" x="380" y="0" width="40" height="280"></rect>
                <rect @click="press" id="octave-1-A#-key" class="piano-key black-key" data-piano-key="A#3"
                      stroke="#979797" fill="#4B4B4B" x="460" y="0" width="40" height="280"></rect>
              </g>
              <g id="octave-2" transform="translate(560.000000, 0.000000)">
                <rect @click="press" id="octave-2-C-key" class="piano-key white-key" data-piano-key="C4"
                      stroke="#555555" fill="#FFFFF7" x="0" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-2-D-key" class="piano-key white-key" data-piano-key="D4"
                      stroke="#555555" fill="#FFFFF7" x="80" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-2-E-key" class="piano-key white-key" data-piano-key="E4"
                      stroke="#555555" fill="#FFFFF7" x="160" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-2-F-key" class="piano-key white-key" data-piano-key="F4"
                      stroke="#555555" fill="#FFFFF7" x="240" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-2-G-key" class="piano-key white-key" data-piano-key="G4"
                      stroke="#555555" fill="#FFFFF7" x="320" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-2-A-key" class="piano-key white-key" data-piano-key="A4"
                      stroke="#555555" fill="#FFFFF7" x="400" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-2-H-key" class="piano-key white-key" data-piano-key="B4"
                      stroke="#555555" fill="#FFFFF7" x="480" y="0" width="80" height="400"></rect>
                <rect @click="press" id="octave-2-C#-key" class="piano-key black-key" data-piano-key="C#4"
                      stroke="#979797" fill="#4B4B4B" x="60" y="0" width="40" height="280"></rect>
                <rect @click="press" id="octave-2-D#-key" class="piano-key black-key" data-piano-key="D#4"
                      stroke="#979797" fill="#4B4B4B" x="140" y="0" width="40" height="280"></rect>
                <rect @click="press" id="octave-2-F#-key" class="piano-key black-key" data-piano-key="F#4"
                      stroke="#979797" fill="#4B4B4B" x="300" y="0" width="40" height="280"></rect>
                <rect @click="press" id="octave-2-G#-key" class="piano-key black-key" data-piano-key="G#4"
                      stroke="#979797" fill="#4B4B4B" x="380" y="0" width="40" height="280"></rect>
                <rect @click="press" id="octave-2-A#-key" class="piano-key black-key" data-piano-key="A#4"
                      stroke="#979797" fill="#4B4B4B" x="460" y="0" width="40" height="280"></rect>
              </g>
            </g>
          </svg>

        </div>
        <div class="inner cover">
          <button class="btn btn-default" @click="playAgain">Play again</button>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import _ from "lodash";
  import Tone from 'tone';

  export default {
    data() {
      return {
        v0: 50, //m/s
        g: 20,
        positions: require('../constants/positions.json')['positions'],
        lestvica: {},
        lestvice: require('../constants/positions.json'),
        idx: 0,
        lives: 1,
        timeFactor: 5,
        angle: Math.PI / 3, // 45 degrees
        startTimestamp: null,
        mirrorFigure: false,
        figurePosition: [150, 152],
      }
    },
    mounted() {
      this.$nextTick(() => this.figure = this.$el.querySelector('#figure'));
      this.synth = new Tone.Synth().toMaster();
      this.polySynth = new Tone.PolySynth(4, Tone.Synth).chain(new Tone.Distortion(0.6), new Tone.Tremolo().start(), Tone.Master)
      this.membraneSynth = new Tone.MembraneSynth().toMaster()
      this.playAgain()
    },
    computed: {
      positionReset() {
        return [150, this.positions[this.lestvica.positions[0]] - 40]
      },
      figureStyle() {
        let position = `transform: translate(${this.figurePosition[0]}px, ${this.figurePosition[1]}px)`
        if (this.mirrorFigure) {
          return position + ' scale(-1, -1)'
        }
        return position;
      }
    },
    methods: {
      playAgain() {
        let rand = Math.floor(Math.random() * this.lestvice['lestvice'].length);
        this.lestvica = this.lestvice['lestvice'][rand];
        this.figurePosition = this.positionReset
        this.idx = 0
        this.lives = 1;
        this.$el.querySelectorAll('rect').forEach(r => r.setAttribute('fill', r.dataset.pianoKey.includes('#') ? '#4B4B4B' : '#FFFFF7'))
        this.$el.querySelector('[data-piano-key="' + this.lestvica.tones[0] + '"]').setAttribute('fill', '#8CB1B2')
      },
      xt(t) {
        return this.v0 * t * Math.cos(this.angle)
      },
      yt(t) {
        return this.v0 * t * Math.sin(this.angle) - 0.5 * Math.pow(t, 2) * this.g
      },
      animate() {
        this.v0 = 50;
        this.startTimestamp = null;
        this.initialPosition = _.clone(this.figurePosition);
        window.requestAnimationFrame(this.animationStep);
      },
      animateFall() {
        this.v0 = 50;
        this.startTimestamp = null;
        this.initialPosition = _.clone(this.figurePosition);
        window.requestAnimationFrame(this.animationStepFall);
      },
      animateMiniJump() {
        this.v0 = 25;
        this.startTimestamp = null;
        this.initialPosition = _.clone(this.figurePosition);
        window.requestAnimationFrame(this.animationStepMiniJump);
      },
      animationStepMiniJump(timestamp) {
        if (!this.startTimestamp) this.startTimestamp = timestamp;
        let t = this.timeFactor * (timestamp - this.startTimestamp) / 1000;
        this.figurePosition = [this.initialPosition[0], this.initialPosition[1] - this.yt(t)];
        if (t < 2) {
          window.requestAnimationFrame(this.animationStepMiniJump);
        }
      },
      animationStep(timestamp) {
        if (!this.startTimestamp) this.startTimestamp = timestamp;
        let t = this.timeFactor * (timestamp - this.startTimestamp) / 1000;
        this.figurePosition = [this.initialPosition[0] + this.xt(t), this.initialPosition[1] - this.yt(t)];
        if (t < 3.9) {
          window.requestAnimationFrame(this.animationStep);
        }
      },
      animationStepFall(timestamp) {
        if (!this.startTimestamp) this.startTimestamp = timestamp;
        let t = this.timeFactor * (timestamp - this.startTimestamp) / 1000;
        this.mirrorFigure = !!(Math.floor(t) % 2);
        this.figurePosition = [this.initialPosition[0] + this.xt(t)/3, this.initialPosition[1] - this.yt(t)];

        if (t < 8) {
          window.requestAnimationFrame(this.animationStepFall);
        }
      },
      press(ev) {
        if (this.lestvica.tones[this.idx] === ev.target.dataset.pianoKey) {
          this.synth.triggerAttackRelease(ev.target.dataset.pianoKey, "8n");
          this.animate()
        } else {
          this.animateMiniJump();
          this.lives--;
          if (this.lives >= 0)
            this.polySynth.triggerAttackRelease(['C4', 'E4', 'G4', 'B4'], 0.5)
          else {
            this.animateFall()
            this.membraneSynth.triggerAttackRelease("C1", "1n")
            setTimeout(this.playAgain, 2000)
          }
        }
        this.idx++
      }
    }
  }
</script>
