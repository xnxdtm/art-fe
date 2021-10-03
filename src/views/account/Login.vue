<template>
  <div class="login">
    <div class="login-main">
      <div class="close" @click="closeLogin">
        <span class="iconfont">&#xe687;</span>
      </div>
      <div class="title">登录</div>
      <div class="email">
        <input type="text" id="username" placeholder="请输入邮箱或用户名" v-model="username">
      </div>
      <div class="password">
        <input type="password" id="password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="login-btn">登录</div>
      <div class="forget-password">忘记密码?</div>
      <div class="no-account-tip">还没有免费账号？</div>
      <div class="create-account" @click="goLogup">创建账号</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      closeLogin() {
        this.$store.commit('changeOpenLoginPopup', false)
        this.username = ''
        this.password = ''
      },
      goLogup() {
        this.$store.commit('changeOpenLogupPopup', true)
        this.$store.commit('changeOpenLoginPopup', false)
      },
    },
  }
</script>

<style scoped lang="less">
  @baseWidth: 1300px;
  @baseColor: rgb(245, 67, 54);
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

  .login {
    position: fixed;
    top: 0;
    z-index: 99999999;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: center;

    .login-main {
      box-sizing: border-box;
      padding: 30px 45px;
      transform: translate(-50% -50%);
      width: 440px;
      height: 555px;
      background-color: #fff;
      border-radius: 20px;
      display: flex;
      flex-direction: column;

      .close {
        align-self: flex-end;
        padding-bottom: 10px;
        cursor: pointer;

        span {
          color: rgba(12, 18, 28, .6);
          font-size: 20px;
          height: 20px;
        }
      }

      .title {
        color: rgba(12, 18, 28, .87);
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 30px;
      }

      .email, .password {
        box-sizing: border-box;
        margin-bottom: 20px;
        input {
          padding: 0 10px;
          box-sizing: border-box;
          width: 100%;
          height: 30px;
          border-radius: 15px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          font-size: 15px;
          outline-style: none;
        }
      }

      .login-btn, .create-account {
        margin-top: 10px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #ffffff;
        font-weight: 500;
        background-color: @baseColor;
        border-radius: 25px;
        cursor: pointer;
      }

      .login-btn:hover {
        background-color: #c9372d;
      }

      .create-account:hover {
        background-color: #333;
        color: #fff;
      }

      .forget-password {
        padding: 30px 0 20px;
        color: #0070f0;
        font-size: 13px;
        border-bottom: 1px solid rgba(12,18,28,.12);
        cursor: pointer;
      }

      .no-account-tip {
        color: rgba(12,18,28,.87);
        font-size: 13px;
        padding: 30px 0;
      }

      .create-account {
        background-color: #fff;
        color: #292f38;
        border: 1px solid #292f38;
      }


    }
  }
</style>








































