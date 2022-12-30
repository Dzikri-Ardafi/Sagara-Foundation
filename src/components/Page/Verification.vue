<template>
  <fragment>
    <v-container class="login-bg white--text">
      <br />
      <div class="iconBack">
        <v-icon color="white"> mdi-arrow-left </v-icon>
      </div>
      <div class="header">
        <v-img
          src="@/assets/icons/SF LOGO WHITE.svg"
          width="186px"
          height="40"
          class="mt-1 mx-auto"
        ></v-img>
      </div>
      <br />
      <div class="px-3">
        <h3 style="font-size: 18px; font-weight: 600">Verifikasi Datamu!</h3>
        <p style="font-size: 12px; font-weight: 400">
          Jangan Lupa verifikasi data diri kamu ya!
        </p>
        <br />

        <v-img
          class="mx-auto"
          width="63"
          src="@/assets/icons/iconHp.svg"
        ></v-img>
        <br />
        <p style="font-size: 12px; font-weight: 250">
          Masukkan kode verifikasi yang dikirm ke email {{ emailHide }}
        </p>
        <v-otp-input
          color="green"
          length="4"
          plain
          type="number"
          v-model="otpCode"
        ></v-otp-input>
        <div style="line-height: 5px" class="mt-3">
          <p style="font-size: 12px; font-weight: 250">Tidak menerima kode ?</p>
          <a style="text-decoration: none" href="">
            <p style="font-size: 12px; font-weight: 500; color: white">
              Kirimkan kode baru
            </p>
          </a>
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
        <br />

        <v-btn
          @click="verifikasi()"
          block
          :loading="loading"
          color="#1AA21E"
          class="white--text rounded-pill my-5"
        >
          Verifikasi
        </v-btn>

        <Footer></Footer>

        <div class="text-center">
          <v-dialog
            v-model="dialogFinish"
            width="500"
            transition="dialog-top-transition"
            close-delay="1000"
          >
            <v-card color="green darken-3 rounded-lg" elevation="3">
              <div style="margin-left: 90%">
                <v-btn icon @click="dialogFinish = false">
                  <v-icon color="black">mdi-close</v-icon>
                </v-btn>
              </div>
              <div class="mb-5" style="padding-left: 38%">
                <v-avatar width="100" height="80">
                  <v-img src="../../assets/icons/ceklisVerif.svg"> </v-img>
                </v-avatar>
              </div>
              <div class="px-9">
                <h2 class="white--text text-center">Registrasi Berhasil</h2>
                <br />
                <p
                  style="font-weight: 350; font-size: 13px"
                  class="text-center white--text"
                >
                  Terima kasih! Anda sudah sukses melakukan registrasi akun.
                  Silahkan masuk untuk mengisi survey yang Anda inginkan!
                </p>
                <br />
                <v-card-actions>
                  <v-btn
                    large
                    block
                    color="black"
                    @click="goLogin()"
                    class="white--text rounded-pill"
                  >
                    Masuk Sekarang
                  </v-btn>
                </v-card-actions>
                <br />
              </div>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-container>
  </fragment>
</template>

<script>
import axios from "axios";
import Footer from "../Landing/Footer.vue";
export default {
  name: "VerificationComponent",
  data() {
    return {
      emailHide: "",
      alertErrorLogin: false,
      otpCode: null,
      errorInfo: "",
      loading: false,
      dialogFinish: false,
    };
  },
  components: {
    Footer,
  },
  mounted() {
    let email = this.email;
    let lengthEmail = email.length;
    const idxGmailCom = email.lastIndexOf("gmail.com");
    const gmailText = email.slice(idxGmailCom - 3, lengthEmail);
    const firstIndex = email.slice(0, 2);
    this.emailHide = `${firstIndex}*****${gmailText}`;
  },
  computed: {
    email() {
      return this.$route.params.email;
    },
    userId() {
      return this.$route.params.userId;
    },
  },

  methods: {
    verifikasi() {
      this.loading = true;
      axios
        .get(
          `http://140.0.198.51:5005/auth/otp?email=${this.email}&userId=${
            this.userId
          }&otp=${parseInt(this.otpCode)}`
        )
        .then((res) => {
          if (res.status === 201) {
            this.loading = false;
            this.dialogFinish = true;
          }
        })
        .catch((err) => {
          if (err) {
            if (err) this.loading = false;
            this.errorInfo = err.response.data.message;
            this.loading = false;
            this.alertErrorLogin = true;
            setTimeout(() => {
              this.alertErrorLogin = false;
            }, 5000);
          }
        });
    },
    goLogin() {
      this.dialogFinish = false;
      return this.$router.push("/login");
    },
  },
};
</script>

<style></style>
