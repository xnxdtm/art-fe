<template>
  <div class="header">
    <div class="logo"></div>
    <div class="menu">
      <ul>
        <li>
          <a href="#" class="active-menu">
            <span class="menu-name">书法图片</span>
            <span class="iconfont">&#xe688;</span>
          </a>
          <div class="blank"></div>
          <ul class="index-1">
            <li>各朝名家</li>
            <li>楷行草篆隶楷行草篆隶</li>
            <li>热门名家</li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span class="menu-name">书法字帖</span>
            <span class="iconfont">&#xe688;</span>
          </a>
          <div class="blank"></div>
          <ul class="index-2">
            <li>软笔书法</li>
            <li>硬笔书法</li>
            <li>篆刻艺术</li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span class="menu-name">书法视频</span>
            <span class="iconfont">&#xe688;</span>
          </a>
          <div class="blank"></div>
          <ul class="index-3">
            <li>各朝名家</li>
            <li>书友</li>
            <li>在想</li>
          </ul>
        </li>
        <li>
          <a href="#">
            <span class="menu-name">我的主页</span>
            <span class="iconfont">&#xe688;</span>
          </a>
          <div class="blank"></div>
          <ul class="index-4">
            <li>个人风采</li>
            <li>我的动态（作品展示）</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="status">
      <div class="login" @click="openLogin">登录</div>
      <div class="sign-up" @click="openLogup">注册</div>
    </div>
    <!--登录注册-->
    <login :class="$store.state.openLoginPopup ? '' : 'no-login'"></login>
    <logup :class="$store.state.openLogupPopup ? '' : 'no-login'"></logup>
  </div>
</template>

<script>
  import Login from '@/views/account/Login';
  import Logup from '@/views/account/Logup';

  export default {
    name: 'Header',
    components: {Logup, Login},
    component: {Login},
    data() {
      return {

      }
    },
    methods: {
      openLogin() {
        this.$store.commit("changeOpenLoginPopup", true)
      },
      openLogup() {
        this.$store.commit("changeOpenLogupPopup", true)
      },
    },
  }
</script>

<style scoped lang="less">
  @baseWidth: 1300px;
  @baseColor: #f54336;
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

  .header {
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    padding: 24px;
    margin: auto;
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    box-shadow: 0px 0px 20px 3px #e8e8e8;
    background-color: rgba(255, 255, 255, 0.8);

    .logo {
      cursor: pointer;
      width: 75px;
      height: 40px;
      background-image: url(../assets/img/logo.png);
      background-size: 100% 100%;
    }

    .menu {
      flex: 1;
      margin-left: 26px;
      display: flex;

      ul {
        display: flex;

        li {
          margin-right: 20px;
          color: @menuColor;
          position: relative;

          .blank {
            position: absolute;
            height: 20px;
            width: 100px;
          }

          a {
            color: @menuColor;
            .menu-name {
            }

            .iconfont {
              width: 20px;
              height: 20px;
              margin-left: 5px;
              font-size: 12px;
            }
          }

          &:hover {
            & > ul {
              display: flex;
              position: absolute;
              cursor: pointer;
            }
            a {
              color: @baseColor;
            }
          }

          ul {
            display: none;
            flex-direction: column;
            box-shadow: 0px 0px 10px 1px #e6e6e6;
            background-color: #fff;
            position: absolute;
            opacity: 1;
            text-align: left;
            box-sizing: border-box;
            min-width: 96px;
            border-radius: 8px;
            margin-top: 19px;
            padding: 18px 0 3px 0;
            white-space: nowrap;
            font-size: 14px;
            font-weight: 400;

            li {
              padding-left: 15px;
              height: 35px;
              cursor: pointer;
              color: rgb(12 18 28 / 87%);

              &:hover {
                color: @baseColor;
              }
            }
          }

          .active-menu {
            color: @baseColor;
          }
        }
      }

    }

    .status {
      display: flex;
      color: @menuColor;

      div {
        width: 52px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        border: 1px solid;
        border-radius: 25px;
      }

      .login {
        margin-right: 10px;
      }

      .sign-up {
        background-color: #e0e2e6;
        border: 1px solid #e0e2e6;
      }
    }

    .no-login {
      display: none;
    }

  }
</style>
