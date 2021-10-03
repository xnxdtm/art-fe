<template>
  <!--轮播图-->
  <div class="loop-picture">
    <div class="left">
      <div class="picture">
        <div class="preview" @click="previewLoop()">
          <span class="iconfont">&#xe685;</span>
        </div>
        <div class="main-picture">
          <img id="loopImgAddress" :src="loopImgAddress" alt="">
        </div>
        <div class="next" @click="nextLoop()">
          <span class="iconfont">&#xe689;</span>
        </div>
      </div>
      <div class="loop-control">
        <ul>
          <li v-for="(item, index) in loopData"
              :key="'ctrl' + index"
              @mouseenter="changeCurrentLoopSelect(index)"
              @mouseout="beginLoopInterval(index)"
              :class="index === currentLoopSelectIndex ? 'current-select' : ''">
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="top-title">
        <span class="iconfont">&#xe615;</span>
        <span class="title">今日推荐</span>
      </div>
      <div class="loop-content">
        <ul>
          <li v-for="(item, index) in loopData"
              :key="'cont' + index"
              :class="index === currentLoopSelectIndex ? 'current-select' : ''"
              @mouseout="beginLoopInterval(index)"
              @mouseenter="changeCurrentLoopSelect(index)">
            <span class="title">{{item.title}}</span>
            <span class="desc">{{item.desc}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoopPicture',
    data() {
      return {
        loopData: [
          {
            title: '颜真卿',
            desc: '潇洒派代表',
          },
          {
            title: '柳公权',
            desc: '潇洒派代表',
          },
          {
            title: '澈力木格',
            desc: '潇洒派代表',
          },
          {
            title: '书法必知必会',
            desc: '潇洒派代表',
          },
          {
            title: '书法教学',
            desc: '潇洒派代表',
          },
          {
            title: '王羲之',
            desc: '兰亭集序',
          },
        ],
        currentLoopSelectIndex: 0,
        loopImgAddress: require('@/assets/img/loop0.png'),

        loopInterval: '',
      }
    },
    mounted() {
      this.loopInterval = setInterval(this.nextLoop, 3000);
    },
    methods: {
      changeCurrentLoopSelect(index) {
        clearInterval(this.loopInterval)
        this.loopInterval = null
        this.currentLoopSelectIndex = index;
      },

      beginLoopInterval() {
        clearInterval(this.loopInterval)
        this.loopInterval = setInterval(this.nextLoop, 3000);
      },

      previewLoop() {
        if (this.currentLoopSelectIndex === 0) {
          this.currentLoopSelectIndex = this.loopData.length - 1;
        } else {
          this.currentLoopSelectIndex = this.currentLoopSelectIndex - 1;
        }
      },


      nextLoop() {
        if (this.currentLoopSelectIndex === this.loopData.length - 1) {
          this.currentLoopSelectIndex = 0;
        } else {
          this.currentLoopSelectIndex = this.currentLoopSelectIndex + 1;
        }

      }
    },

    watch: {
      currentLoopSelectIndex() {
        this.loopImgAddress = require('@/assets/img/loop' + this.currentLoopSelectIndex + '.png')
        this.$emit('loopChangeIndex', this.currentLoopSelectIndex)
      }
    },
  }
</script>

<style scoped lang="less">
  @baseWidth: 1300px;
  @baseColor: #f54336;
  @baseFontColor: #ff5c38;
  @menuColor: rgba(12, 18, 28, .6);

  @font-face {
    font-family: 'iconfont';
    src: url('../../assets/fonts/iconfont.ttf?t=1632597509821') format('truetype');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .loop-picture {
    width: 100%;
    height: 444px;
    display: flex;

    .left {
      flex: 1;
      display: flex;
      flex-direction: column;

      .picture {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        .preview, .next {
          width: 40px;
          height: 40px;
          margin: 40px 30px 0;
          line-height: 40px;
          text-align: center;
          border-radius: 50% 50%;
          color: #fff;
          background-color: rgba(255, 255, 255, .05);
          cursor: pointer;
          font-weight: 700;

          &:hover {
            color: @baseFontColor;
            background-color: rgba(0, 0, 0, .2);
          }
        }


        .main-picture {
          position: relative;
          width: 760px;
          height: 370px;
          /*background-image: url(@/assets/img/loop1.png);*/
          background-size: 90% auto;
          background-repeat: no-repeat;
          background-position: 50% 80%;

          img {
            position: relative;
            width: 90%;
            height: 90%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }

      .loop-control {
        width: 100%;
        height: 40px;

        ul {
          display: flex;
          justify-content: center;

          li {
            width: 10px;
            height: 10px;
            background-color: rgba(255, 255, 255, .5);
            border-radius: 50% 50%;
            margin: 0 10px;
            cursor: pointer;
          }

          .current-select {
            background-color: @baseColor;
          }
        }
      }
    }

    .right {
      width: 300px;
      background-color: rgba(50, 50, 50, 0.4);

      .top-title {
        margin: 20px 20px 0 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #939393;

        .iconfont {
          color: #ff3838;
        }

        .title {
          padding-left: 10px;
          color: #fff;
          font-size: 22px;
          font-weight: 700;
        }

      }

      .loop-content {
        ul {
          margin: 0 0 0 6px;

          li {
            cursor: pointer;
            font-size: 15px;
            padding-top: 15px;
            color: rgba(255, 255, 255, .7);

            .desc {
              display: none;
            }
          }

          li:hover {
            .title {
              font-size: 22px;
              font-weight: 700;
              color: @baseFontColor;
            }

            .desc {
              display: inline;
              color: @baseFontColor;
              font-size: 12px;
              padding-left: 10px;
            }
          }

          .current-select {
            .title {
              font-size: 22px;
              font-weight: 700;
              color: @baseFontColor;
            }

            .desc {
              display: inline;
              color: @baseFontColor;
              font-size: 12px;
              padding-left: 10px;
            }
          }
        }
      }
    }
  }

</style>
