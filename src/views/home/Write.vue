<template>
  <!--热门字帖-->
  <div class="write">

    <div class="title">
      <div class="name">热门字帖</div>
      <div class="change">换一换</div>
    </div>
    <div class="display">
      <div class="p123456">
        <div class="p1245">
          <img src="@/assets/img/w2.png" alt="">
          <div class="desc">
            <span class="name">王羲之 · </span>
            <span class="page-name">兰亭集序</span>
          </div>
        </div>
        <div class="p36">
          <div class="p3">
            <img src="@/assets/img/w1.png" alt="">
            <div class="desc">
              <span class="name">王羲之 · </span>
              <span class="page-name">兰亭集序</span>
            </div>
          </div>
          <div class="p6">
            <img src="@/assets/img/w3.png" alt="">
            <div class="desc">
              <span class="name">王羲之 · </span>
              <span class="page-name">兰亭集序</span>
            </div>
          </div>
        </div>
      </div>
      <div class="p789">
        <div class="p7">
          <img src="@/assets/img/w3.png" alt="">
          <div class="desc">
            <span class="name">王羲之 · </span>
            <span class="page-name">兰亭集序</span>
          </div>
        </div>
        <div class="p8">
          <img src="@/assets/img/w3.png" alt="">
          <div class="desc">
            <span class="name">王羲之 · </span>
            <span class="page-name">兰亭集序</span>
          </div>
        </div>
        <div class="p9">
          <img src="@/assets/img/w3.png" alt="">
          <div class="desc">
            <span class="name">王羲之 · </span>
            <span class="page-name">兰亭集序</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Write'
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

  /*---------热门字帖开始--------*/

  .write {
    width: @baseWidth;
    margin: 40px auto 0;

    .title {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .name {
        color: @baseFontColor;
        font-weight: 500;
        font-size: 24px;
        cursor: pointer;
      }

      .change {
        color: @menuColor;
        border: 1px solid #e0e2e6;
        border-radius: 25px;
        width: 70px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
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

        &:hover {
          & {
            top: -5px;
            box-shadow: 1px 1px 18px 1px rgba(@baseColor, .1);
          }
        }

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

</style>
