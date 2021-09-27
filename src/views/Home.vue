<template>
  <div class="home">
    <Header class="no-header"></Header>
    <div class="header-loop">
      <Header></Header>
      <!--轮播图-->
      <div class="loop-picture">
        <div class="left">
          <div class="picture">
            <div class="preview">
              <span class="iconfont">&#xe685;</span>
            </div>
            <div class="main-picture"></div>
            <div class="next">
              <span class="iconfont">&#xe689;</span>
            </div>
          </div>
          <div class="loop-control">
            <ul>
              <li class="current-select"></li>
              <li></li>
              <li></li>
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
              <li>
                <span class="title">颜真卿</span>
                <span class="desc">潇洒派代表</span>
              </li>
              <li class="current-select">
                <span class="title">柳公权</span>
                <span class="desc">潇洒派代表</span>
              </li>
              <li>
                <span class="title">澈力木格</span>
                <span class="desc">潇洒派代表</span>
              </li>
              <li>
                <span class="title">书法必知必会</span>
                <span class="desc">潇洒派代表</span>
              </li>
              <li>
                <span class="title">书法教学</span>
                <span class="desc">潇洒派代表</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--热门字帖-->
    <div class="write">

      <div class="title">
        <div class="name">热门字帖</div>
        <div class="change">换一换</div>
      </div>
      <div class="display">
        <div class="p123456">
          <div class="p1245">
            <img src="../assets/img/w2.png" alt="">
            <div class="desc">
              <span class="name">王羲之 · </span>
              <span class="page-name">兰亭集序</span>
            </div>
          </div>
          <div class="p36">
            <div class="p3">
              <img src="../assets/img/w1.png" alt="">
              <div class="desc">
                <span class="name">王羲之 · </span>
                <span class="page-name">兰亭集序</span>
              </div>
            </div>
            <div class="p6">
              <img src="../assets/img/w3.png" alt="">
              <div class="desc">
                <span class="name">王羲之 · </span>
                <span class="page-name">兰亭集序</span>
              </div>
            </div>
          </div>
        </div>
        <div class="p789">
          <div class="p7">
            <img src="../assets/img/w3.png" alt="">
            <div class="desc">
              <span class="name">王羲之 · </span>
              <span class="page-name">兰亭集序</span>
            </div>
          </div>
          <div class="p8">
            <img src="../assets/img/w3.png" alt="">
            <div class="desc">
              <span class="name">王羲之 · </span>
              <span class="page-name">兰亭集序</span>
            </div>
          </div>
          <div class="p9">
            <img src="../assets/img/w3.png" alt="">
            <div class="desc">
              <span class="name">王羲之 · </span>
              <span class="page-name">兰亭集序</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--热门视频-->
    <div class="video">
      <div class="title">
        <div class="name">热门视频</div>
        <div class="change">换一换</div>
      </div>
      <div class="display">
        <div class="display-item">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
        </div>
      </div>

    </div>

    <!--热门商品-->
    <div class="goods"></div>

  </div>
</template>

<script>
  import Header from '@/components/Header';

  export default {
    name: 'Home',
    components: {Header},
    mounted() {
      window.onscroll = function() {
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (this.scrollTop > 500) {
          document.getElementsByClassName('no-header')[0].style.display = 'flex'
        } else {
          document.getElementsByClassName('no-header')[0].style.display = 'none'
        }
      }
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped lang="less">
  @baseWidth: 1300px;
  @baseColor: #f54336;
  @baseFontColor: #ff5c38;
  @menuColor: rgba(12, 18, 28, .6);

  @font-face {
    font-family: 'iconfont';
    src: url('../assets/fonts/iconfont.ttf?t=1632597509821') format('truetype');
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

    /*---------轮播图开始--------*/

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
      background-image: url(../assets/img/bg2.jpg);
      background-repeat: no-repeat;
      background-size: 100%, 100%;
      background-position: 50% 50%;

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
              width: 760px;
              height: 370px;
              background-image: url(../assets/img/loop1.png);
              background-size: 90% auto;
              background-repeat: no-repeat;
              background-position: 50% 80%;
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
    }

    /*---------轮播图结束--------*/
    .write, .video {
      width: @baseWidth;
      margin: 40px auto 0;
      .title {
        margin-bottom: 20px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name {
          color: @baseFontColor;
          font-weight: 500;
          font-size: 24px;
        }

        .change {
          color: @menuColor;
          border: 1px solid #e0e2e6;
          border-radius: 25px;
          width: 70px;
          height: 40px;
          line-height: 40px;
          text-align: center;
        }
      }
    }
    /*---------热门字帖开始--------*/
    .write {

      .title {
        margin-bottom: 20px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .name {
          color: @baseFontColor;
          font-weight: 500;
          font-size: 24px;
        }

        .change {
          color: @menuColor;
          border: 1px solid #e0e2e6;
          border-radius: 25px;
          width: 70px;
          height: 40px;
          line-height: 40px;
          text-align: center;
        }
      }

      .display {
        display: flex;
        flex-direction: column;
        width: 100%;

        .p1245, .p3, .p6, .p7, .p8, .p9 {
          position: relative;
          cursor: pointer;
          border-radius: 5px;
          box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, .1);

          img {
            display: block;
            width: 80%;
            height: 80%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }

          .desc {
            width: 20px;
            writing-mode: vertical-rl;
            position: relative;
            top: 50%;
            left: 3.5%;
            transform: translate(0, -50%);
            font-size: 14px;

            .name {
              color: #999999;
            }

            .page-name {
              color: #999999;
            }
          }
        }

        .p123456 {
          width: 100%;
          height: 484px;
          display: flex;
          justify-content: space-between;

          .p1245 {
            width: 860px;
            height: 100%;

          }

          .p36 {
            width: 420px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;

            .p3, .p6 {
              width: 100%;
              height: 232px;
            }
          }
        }
        .p789 {
          margin-top: 20px;
          height: 234px;
          display: flex;
          justify-content: space-between;

          .p7, .p8, .p9 {
            width: 420px;
            height: 100%;

          }
        }
      }
    }
    /*---------热门字帖结束--------*/

    /*---------热门视频开始--------*/
    .video {
      .display-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .item {
          width: 310px;
          height: 190px;
          margin-bottom: 20px;
          background-color: skyblue;


          position: relative;
          cursor: pointer;
          border-radius: 5px;
          box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, .1);


        }
      }
    }
    /*---------热门视频结束--------*/
    /*---------热门商品开始--------*/
    /*---------热门商品结束--------*/
  }
</style>
