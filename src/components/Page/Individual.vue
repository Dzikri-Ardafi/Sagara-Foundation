<template>
  <fragment>
    <v-container
      class="justify-center mt-5 d-flex flex-column individual-bg white--text"
    >
      <v-card class="mx-auto" width="100%" height="auto">
        <v-card-subtitle
          style="font-size: 19px"
          class="black--text font-weight-bold text-center"
          >Volunter form</v-card-subtitle
        >
        <div class="pa-5">
          <p style="color: #b5b5b5; font-size: 13px">Step {{ e1 + 1 }} of 3</p>
          <v-progress-linear
            style="margin-top: -0.5em"
            background-color="#D9D9D9"
            rounded
            :value="progress"
            height="6"
            color="green"
          >
            <p class="my-auto" style="font-size: 5px">
              {{ Math.ceil(progress) }}%
            </p>
          </v-progress-linear>
        </div>
        <v-stepper v-model="e1" elevation="0">
          <v-stepper-items>
            <!-- slide 1 -->
            <!-- <v-stepper-content step="1">
              <Form1> </Form1>
              <div class="d-flex px-5">
                <v-btn color="error" @click="changeProgres2()"> Next </v-btn>
                <v-btn text>
                  <p class="my-auto textSampingBotton">
                    <u> Save and Continue Later </u>
                  </p>
                </v-btn>
              </div>
            </v-stepper-content> -->
            <!-- slide 2 -->
            <v-stepper-content step="1">
              <Form2></Form2>
              <v-btn
                class="mr-3"
                color="grey lighten-1"
                @click="undoProgres3()"
              >
                Cancel
              </v-btn>

              <v-btn color="error" @click="changeProgres3()"> Next </v-btn>
            </v-stepper-content>
            <!-- slide 3 -->
            <v-stepper-content step="2">
              <Form3></Form3>
              <v-btn
                class="mr-3"
                color="grey lighten-1"
                @click="changeProgres2()"
              >
                Cancel
              </v-btn>
              <v-btn color="error" @click="changeProgres4()"> Continue </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card>
      <div class="text-center">
        <v-dialog
          v-model="dialogFinish"
          width="500"
          transition="dialog-top-transition"
          close-delay="1000"
        >
          <v-card color="black rounded-lg">
            <div style="margin-left: 90%">
              <v-btn icon @click="dialogFinish = false">
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </div>
            <div class="mb-5" style="padding-left: 42%">
              <v-avatar width="60" height="60">
                <v-img src="../../assets/icons/ceklisLogo.svg"> </v-img>
              </v-avatar>
            </div>
            <div class="px-9">
              <p class="white--text text-center">
                Terimakasih sudah mendaftar! Jika terdapat kendala dapat
                menghubungi CS kami atau social media kami melalui
              </p>
              <v-card
                color="#51B747"
                class="d-flex px-2 py-1 rounded-pill"
                width="max-content"
              >
                <v-icon class="mr-1" dense color="black">mdi-instagram</v-icon>
                <p class="my-auto" style="font-size: 11px; font-weight: 700">
                  sagarafoundation
                </p>
              </v-card>

              <v-card
                color="#51B747"
                class="d-flex px-2 py-1 rounded-pill mt-2"
                width="max-content"
              >
                <v-icon class="mr-1" dense color="black"
                  >mdi-email-outline</v-icon
                >
                <p class="my-auto" style="font-size: 11px; font-weight: 700">
                  yayasan@sagaratech.com
                </p>
              </v-card>
              <br />
              <v-card-actions>
                <v-btn
                  block
                  color="#51B747"
                  @click="goHome()"
                  class="white--text"
                >
                  Back to dashboard
                </v-btn>
              </v-card-actions>
              <br />
            </div>
          </v-card>
        </v-dialog>
      </div>
    </v-container>
  </fragment>
</template>

<script>
import Form1 from "./VolunterForm/Form1.vue";
import Form2 from "./VolunterForm/Form2.vue";
import Form3 from "./VolunterForm/Form3.vue";
// import Form2 from "./VolunterForm/Form1.vue";
// import Form3 from "./VolunterForm/Form1.vue";

export default {
  name: "IndividualVolunteerComponent",
  data() {
    return {
      dialogFinish: false,
      e1: 1,
      progress: 34,
      nilalAwal: 33.333333333333336,
    };
  },
  mounted() {},
  methods: {
    goHome() {
      return this.$router.push("/");
    },
    // nextSlideHandler
    changeProgres2() {
      this.e1 = 1;
      this.progress = this.nilalAwal;
    },
    changeProgres3() {
      this.e1 = 2;
      this.progress = this.nilalAwal * 2;
    },
    changeProgres4() {
      this.e1 = 2;
      this.progress = 100;
      this.dialogFinish = true;
    },
    // undoSlideHandler
    undoProgres3() {
      this.$router.push("/volunteer/form");
      window.location.reload();
    },
  },
  components: { Form1, Form2, Form3 },
};
</script>

<style>
.textSampingBotton {
  color: rgb(113, 113, 113);
  font-size: 8px;
}
</style>
