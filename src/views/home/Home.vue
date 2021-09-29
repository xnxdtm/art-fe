<template>
  <div class="home">
    <!--固定头部-->
    <Header class="no-header"></Header>
    <!--头部轮播-->
    <div class="header-loop" :style="{'background-image': `url(${loopBgImgAddress})`}">
      <Header class="header"></Header>
      <loop-picture @loopChangeIndex="loopChangeEvent"></loop-picture>
    </div>
    <!--热门字帖-->
    <write></write>
    <!--热门视频-->
    <Video></Video>
    <!--热门商品-->
    <div class="goods"></div>
    <!--网站备案信息-->
    <div class="legal">
      <span>京公网安备11000002000001号京ICP证030173号©2021 </span>
      <span>Huayi 互联网文化信息服务资格证书 </span>
      <span>(京)-经营性-2017-0020信息网络传播视听节目许可证 0110516</span>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import LoopPicture from '@/views/home/LoopPicture';
  import Write from '@/views/home/Write';
  import Video from '@/views/home/Video';

  export default {
    name: 'Home',
    components: {Video, Write, LoopPicture, Header},
    mounted() {
      window.onscroll = function () {
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (this.scrollTop > 500) {
          document.getElementsByClassName('no-header')[0].style.display = 'flex'
        } else {
          document.getElementsByClassName('no-header')[0].style.display = 'none'
        }
      }
      this.loopInterval = setInterval(this.nextLoop, 3000);
    },
    data() {
      return {
        loopBgImgAddress: require('@/assets/img/bg0.png'),
      }
    },
    methods: {
      loopChangeEvent(data) {
        this.loopBgImgAddress = require('@/assets/img/bg' + data + '.png')
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

  .home {
    width: 100%;

    .no-header {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      background-color: #fff;
    }

    .header-loop {
      width: 100%;
      height: 500px;
      /*background-image: url(@/assets/img/bg2.png);*/
      background-repeat: no-repeat;
      background-size: 100%, 100%;
      background-position: 50% 50%;

      .header {
        position: relative;
        z-index: 9999999;
      }
    }

    /*---------网站备案开始--------*/

    .legal {
      color: #333;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0 40px 0;

      span {
        height: 20px;
        line-height: 20px;
      }
    }

    /*---------网站备案结束--------*/
  }
</style>
