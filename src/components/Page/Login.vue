<template>
  <fragment>
    <v-container class="login-bg black--text">
      <br />
      <div class="iconBack">
        <v-icon color="white" @click="backToHome()"> mdi-arrow-left </v-icon>
      </div>
      <div class="header">
        <v-img
          src="@/assets/icons/SF LOGO WHITE.svg"
          width="186px"
          height="40"
          class="mt-3 mx-auto"
        ></v-img>
      </div>
      <h1 class="text-center signIn-Text mt-10">Sign In</h1>

      <div class="text-field mt-9 mb-3">
        <v-text-field
          v-model="body.email"
          color="green darken-3"
          solo
          background-color="white"
          outlined
          class="green-darken-3 rounded-lg"
          label="Email"
          dense
        >
        </v-text-field>
        <div class="passField">
          <v-text-field
            color="green darken-3"
            solo
            background-color="white"
            outlined
            class="rounded-lg passField"
            label="Password"
            dense
            v-model="body.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          >
          </v-text-field>
        </div>
        <v-alert
          v-if="alertErrorLogin"
          dense
          outlined
          type="error"
          border="left"
        >
          {{ errorInfo }}
        </v-alert>
        <v-alert
          v-if="alerSuccesLogin"
          dense
          outlined
          type="info"
          border="left"
        >
          {{ errorInfo }}
        </v-alert>
      </div>

      <div class="btn-session">
        <v-btn
          :loading="loading"
          block
          @click="() => login(body.email)"
          class="green darken-3 btnLogin white--text"
        >
          Sign In
        </v-btn>
        <p class="mt-2">Forgot Password?</p>
      </div>

      <div class="d-flex option-Login px-10 my-7">
        <v-divider color="white"></v-divider>
        <p class="white--text">Or Sign In With</p>
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
        Don't Have An Account?
        <span @click="redirect()">Sign Up</span>
      </p>
    </v-container>
  </fragment>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginComponent",
  data() {
    return {
      body: {
        email: "",
        password: "",
      },
      show1: false,
      alertErrorLogin: false,
      alerSuccesLogin: false,
      loading: false,
      errorInfo: "",
    };
  },
  mounted() {},
  methods: {
    backToHome() {
      this.$router.push("/");
    },
    login() {
      // this.loading = true;
      // const x = "dzikri.ardfai@gmail.com ";
      // console.log("sebelum di potong", x.length);
      // if (x.lastIndexOf(" ") != -1) {
      //   const xy = x.slice(0, x.length - 1);
      //   console.log("abis dipotong", xy.length);
      // }

      axios
        .post(
          `http://140.0.198.51:5005/login?email=${this.body.email}&password=${this.body.password}`
        )
        .then((response) => {
          if (response.status === 200) {
            this.loading = false;

            this.errorInfo = response.data.message;
            this.alerSuccesLogin = true;
            setTimeout(() => {
              this.alerSuccesLogin = false;
            }, 5000);
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
          // let error = err.response.data.message;
          // if (err.response.data.message === error) {
          //   this.alertErrorLogin = true;
          //   if (this.alertErrorLogin === true) {
          //     setTimeout(() => {
          //       this.alertErrorLogin = false;
          //     }, 5000);
          //   }
          // }
        });
    },
    redirect() {
      return this.$router.push("/sign-up");
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
.passField {
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
