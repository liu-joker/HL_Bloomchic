<template>
  <div class='login'>

    <main class="main-content"
          id="MainContent">
      <div class="globoRecommendationsTop"></div>
      <div class="page-width page-content">
        <div class="grid">

          <div class="grid__item medium-up--one-third medium-up--push-one-third">

            <header class="section-header">
              <h1 class="section-header__title">Login</h1>
            </header>

            <div class="note note--success hide"
                 id="ResetSuccess">
              We've sent you an email with a link to update your password.
            </div>

            <div id="CustomerLoginForm"
                 class="form-vertical">

              <label for="CustomerEmail">Email</label>
              <input type="email"
                     name="customer[email]"
                     id="CustomerEmail"
                     class="input-full"
                     autocorrect="off"
                     autocapitalize="off"
                     autofocus="">
              <div class="grid">
                <div class="grid__item one-half">
                  <label for="CustomerPassword">Password</label>
                </div>
                <div class="grid__item one-half text-right">
                  <small class="label-info"
                         style="background:#fff;">
                    <a href="#recover"
                       id="RecoverPassword">
                      Forgot Password?
                    </a>
                  </small>
                </div>
              </div>
              <input type="password"
                     value=""
                     name="customer[password]"
                     id="CustomerPassword"
                     class="input-full">
              <p>
                <button type="submit"
                        class="btn btn--full">
                  Sign In
                </button>
              </p>
              <p><a href="#"
                   id="customer_register_link">Create Account</a></p>

            </div>

            <div id="RecoverPasswordForm"
                 class="hide">
              <div class="form-vertical">
                <h2>Reset Your Password</h2>
                <p>We will send you an email to reset your password.</p>
                <form method="post"
                      action="/account/recover"
                      accept-charset="UTF-8"
                      onsubmit="window.Shopify.recaptchaV3.addToken(this, &quot;recover_customer_password&quot;); return false;"><input type="hidden"
                         name="form_type"
                         value="recover_customer_password"><input type="hidden"
                         name="utf8"
                         value="✓">
                  <label for="RecoverEmail">Email</label>
                  <input type="email"
                         value=""
                         name="email"
                         id="RecoverEmail"
                         class="input-full"
                         autocorrect="off"
                         autocapitalize="off">

                  <p>
                    <button type="submit"
                            class="btn">
                      Submit
                    </button>
                  </p>
                  <button type="button"
                          id="HideRecoverPasswordLink">Cancel</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="globoRecommendationsBottom"></div>

    </main>
    <!-- <div class="login_cont row">
      <div class="login_left col-md-6 col-xs-12">
        <div class="left_title">NEW CUSTOMERS</div>
        <div class="left_reg">By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.</div>
        <br>
        <div class="right_btn"
             @click=toRegister>Create an Account</div>
      </div>
      <div class="login_right col-md-6 col-xs-12">
        <div class="left_title">REGISTERED CUSTOMERS</div>
        <div class="left_reg">If you have an account with us, please log in.</div>

        <div class="login_input">
          <div class="input_placeholder">Email <span>*</span> </div>
          <el-input v-model='Email'
                    ref='input1'></el-input>
        </div>
        <div class="left_info"
                 style='margin-bottom:10px;margin-top:20px;'>Password:</div>
        <div class="login_input">
          <div class="input_placeholder">Password <span>*</span> </div>
          <el-input v-model='password'
                    ref='input2'
                    type='password'></el-input>
        </div>
        <div class="lost_pass">Did you lose your password?</div>
        <br>
        <div class="right_btn"
             @click=login>Login</div>
        <div class="creat_account">Do you have an account yet? <span @click='toRegister'>Create an account</span> </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import loginList from '../../components/loginList'
import LoginList from '../../components/loginList.vue'
import top from '../../components/top'
import minxins from '../../minxins/inputAnimation'
export default {
  mixins: [minxins],
  components: {
    loginList,
    top,

  },
  data () {
    return {
      Email: '',
      password: '',
    }
  },
  created () {

  },
  methods: {
    toRegister () {
      // let currentName = this.$route.name
      // if (currentName == 'login') {
      //   this.$router.push('/register')
      // } else {
      //   this.$emit('getAccountStatus', false)
      // }

      this.$router.push('/register')
    },
    login () {
      let that = this
      let Email = this.Email
      let password = this.password
      var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (!myreg.test(Email)) {
        this.$message.error('E-Mail Address does not appear to be valid!');
        return
      }
      if (Email && password) {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.$axios({
          url: '/web/login?name=' + Email + '&webName=' + 'bag' + '&password=' + password,
          method: 'get',
          data: {

          },
          //   headers: {
          //     'Content-type': 'application/x-www-form-urlencoded'
          //   }
        }).then(res => {
          loading.close()
          if (res.code == 200) {
            this.$message.success(res.message)
            let userInfo = {
              name: Email,
            }
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
            sessionStorage.setItem('isLogin', true)
            setTimeout(() => {
              that.$router.push('/account')
            }, 2000);
          } else {
            this.$message.error(res.message)
          }
        })
      } else {
        this.$message.error('Please fill in the required fields！');
        return
      }
    },
    // awaken_focus (v) {
    //   this.getFocus(v)
    // }
    // getBlur () {
    //   console.log('login')
    //   this.blurTag = true
    //   this.focusTag = false
    // },
    // getFocus () {
    //   this.blurTag = false
    //   this.focusTag = true
    // }
  }
}
</script>

<style lang='scss' scoped>
@import "../../style/login_register.css";
@import "../../style/common.css";
.login {
  .login_cont {
    font-size: 13px;
    margin: 50px 0;
    color: #667280;
    margin-left: auto;
    margin-right: auto;

    .login_right,
    .login_left {
      text-align: left;
      background: #fff;
      padding: 19px;
    }
    .left_title {
      font-size: 25px;
      margin-bottom: 20px;
      color: $fontBodyColor;
    }
    .left_reg {
      font-size: 13px;
      // font-weight: bold;
      margin-bottom: 20px;
      color: $fontBodyColor;
    }
    .left_info {
      font-size: 13px;
      margin-bottom: 20px;
    }
    .login_input {
      width: 100%;
      position: relative;
      margin-bottom: 20px;

      .input_placeholder {
        color: $fontBodyColor;
        font-size: 14px;
        font-weight: 500;
        padding: 0 5px;
        margin-bottom: 14px;
        // z-index: -1;
        > span {
          color: red;
        }
      }
    }

    .right_btn {
      background: $backgroundColor;
      font-size: 16px;
      display: inline;
      padding: 15px 30px;
      color: #fff;

      cursor: pointer;
      text-transform: uppercase;
      &:hover {
        background: rgb(9, 9, 9);
      }
    }
    /deep/ .el-input__inner {
      width: 100%;
    }
    .lost_pass {
      font-size: 14px;
      color: #222;
      text-align: right;
      cursor: pointer;
      font-weight: 500;
      text-decoration: underline;
      &:hover {
        color: #c32929;
      }
    }
    .creat_account {
      color: #767676;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      > span {
        color: #222;
        cursor: pointer;
        text-decoration: underline;
        &:hover {
          color: #c32929;
        }
      }
    }
  }
}
</style>