<template>
  <fragment>
    <v-container class="login-bg black--text">
      <br />
      <div class="iconBack" @click="toLogin()">
        <v-icon color="white"> mdi-arrow-left </v-icon>
      </div>
      <div class="header">
        <v-img
          src="@/assets/icons/SF LOGO WHITE.svg"
          width="186px"
          height="40"
          class="mt-3 mx-auto"
        ></v-img>
      </div>
      <h1 class="text-center signIn-Text mt-10">Sign Up</h1>
      <div class="text-field mt-9 mb-3">
        <v-text-field
          v-model="signup.fullname"
          color="green darken-3"
          solo
          background-color="white"
          outlined
          class="rounded-lg"
          label="Fullname"
          dense
        >
        </v-text-field>
        <div class="emailField">
          <v-text-field
            v-model="signup.email"
            class="rounded-lg"
            color="green darken-3"
            solo
            background-color="white"
            outlined
            label="Email"
            dense
          >
          </v-text-field>
        </div>

        <div class="passField">
          <v-text-field
            v-model="signup.password"
            color="green darken-3"
            solo
            background-color="white"
            outlined
            class="rounded-lg passField"
            label="Password"
            dense
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          >
          </v-text-field>
        </div>
      </div>
      <v-alert v-if="alertErrorLogin" dense outlined type="error" border="left">
        {{ errorInfo }}
      </v-alert>
      <div class="btn-session">
        <v-btn
          :loading="loading"
          @click="signUp()"
          block
          class="green darken-3 btnLogin white--text"
        >
          Sign Up
        </v-btn>
      </div>

      <div class="d-flex option-Login px-10 my-7">
        <v-divider color="white"></v-divider>
        <p class="white--text">Or Sign Up With</p>
        <v-divider color="white"></v-divider>
      </div>
      <v-btn class="btn-login" block color="white" outlined>
        <v-img
          src="@/assets/icons/googleIcon.svg"
          max-width="24px"
          max-height="24px"
        ></v-img>
        <div class="ml-2 mt-1 google-text black--text">google</div>
      </v-btn>
      <p class="dontHaveAcount mt-5 white--text">
        Already Have An Account? <span @click="toLogin()">Sign In</span>
      </p>
    </v-container>
  </fragment>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUpComponent",
  data() {
    return {
      loading: false,
      alertErrorLogin: false,
      errorInfo: "",
      signup: {
        fullname: "",
        email: "",
        password: "",
      },
      show1: false,
    };
  },
  mounted() {
    //
  },
  methods: {
    signUp() {
      this.loading = true;
      axios
        .post(
          `http://140.0.198.51:5005/register?password=${this.signup.password}&fullname=${this.signup.fullname}&email=${this.signup.email}`
        )
        .then((res) => {
          if (res.status === 201) {
            this.$router.push({
              path: "/verfikasi-email",
              name: "VerificationPage",
              params: {
                userId: res.data.data.userId,
                email: this.signup.email,
              },
            });
          }
        })
        .catch((err) => {
          if (err) {
            this.errorInfo = err.response.data.message;
            this.loading = false;
            this.alertErrorLogin = true;
            setTimeout(() => {
              this.alertErrorLogin = false;
            }, 5000);
          }
        });
    },
    toLogin() {
      return this.$router.push("/login");
    },
  },
};
</script>

<style>
.iconBack:hover {
  cursor: pointer;
}
.login-bg {
  background-color: black;
  padding: 1em;
  height: 100%;
}
.signIn-Text {
  color: #0d7422;
  font-size: 36px;
  font-weight: 600;
}
.passField,
.emailField {
  margin-top: -0.5em;
  border-color: white;
}
.btn-session p {
  text-align: end;
  color: #1aa21e;
  font-weight: 600;
  font-size: 12px;
}
.btn-session p:hover {
  cursor: pointer;
}
.option-Login p {
  margin: -9px 0.5em;
  font-weight: 500;
  font-size: 12px;
}
.btn-login {
  background-color: white;
}
.google-text {
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
}
.dontHaveAcount {
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: white;
}
.dontHaveAcount span {
  color: #1aa21e;
  font-weight: 600;
}
.dontHaveAcount span:hover {
  cursor: pointer;
}
</style>
