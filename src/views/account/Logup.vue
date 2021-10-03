<template>
  <div class="logup">
    <div class="logup-main">
      <div class="close" @click="closeLogup">
        <span class="iconfont">&#xe687;</span>
      </div>
      <div class="title">注册</div>
      <div class="email">
        <input type="text" id="username" placeholder="请输入邮箱或用户名" v-model="username">
      </div>
      <div class="password">
        <input type="password" id="password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="logup-btn">继续</div>
      <div class="forget-password">
        <span>创建帐户，即表示我同意Huayi的</span>
        <span class="highlight">网站条款</span>、
        <span class="highlight">隐私政策</span>和
        <span class="highlight">许可条款</span>。
      </div>
      <div class="no-account-tip">已有账号？<span class="highlight" @click="goLogin">登录</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Logup',
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      closeLogup() {
        this.$store.commit('changeOpenLogupPopup', false)
        this.username = ''
        this.password = ''
      },
      goLogin() {
        this.$store.commit('changeOpenLogupPopup', false)
        this.$store.commit('changeOpenLoginPopup', true)
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

  .logup {
    position: fixed;
    top: 0;
    z-index: 99999999;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    justify-content: center;
    align-items: center;

    .logup-main {
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

      .logup-btn, .create-account {
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

      .logup-btn:hover {
        background-color: #c9372d;
      }

      .create-account:hover {
        background-color: #333;
        color: #fff;
      }

      .forget-password {
        padding: 30px 0 20px;
        font-size: 13px;
        font-weight: 400;
        border-bottom: 1px solid rgba(12,18,28,.12);

      }

      .no-account-tip {
        color: rgba(12,18,28,.87);
        font-size: 13px;
        font-weight: 400;
        padding: 30px 0;
      }

      .highlight {
        color: #0070f0;
        cursor: pointer;
      }
    }
  }
</style>
