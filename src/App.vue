<template>
  <v-app class="grey-main justify-center">
    <v-main class="d-flex flex-row main-content" id="main">
      <my-header
        v-if="
          this.$route.name !== 'LoginPage' &&
          this.$route.name != 'SignUpPage' &&
          this.$route.name != 'VerificationPage'
        "
      ></my-header>
      <router-view />
      <my-footer
        v-if="
          this.$route.name !== 'LoginPage' &&
          this.$route.name != 'SignUpPage' &&
          this.$route.name != 'VerificationPage'
        "
      ></my-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
    if (this.$route.name === "VolunteerIndividual") {
      document.getElementById("main").style.background =
        "linear-gradient(180deg, #51B747 0%, #000000 30%)";
    } else {
      document.getElementById("main").style.background = "black";
    }
  },
};
</script>
<style>
.grey-main {
  background-color: black !important;
}

.main-content {
  width: 480px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 480px) {
  .main-content {
    max-width: 100%;
  }
}
</style>
