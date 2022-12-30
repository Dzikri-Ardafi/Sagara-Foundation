<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="450"
    v-model="showComplete"
    class="px-0"
    scrollable="false"
  >
    <v-card>
      <v-card-text class="container">
        <v-icon @click="close()" class="justify-end pt-3" color="white"
          >mdi-close</v-icon
        >
        <v-img
          src="@/assets/icons/formCompleted.svg"
          width="50"
          height="50"
          class="image"
        ></v-img>
        <div class="white--text body-1 text-center mb-5">
          Terimakasih sudah mendaftar! Jika terdapat kendala dapat menghubungi
          CS kami atau social media kami melalui :
        </div>
        <v-card
          class="d-flex px-2 py-1 rounded-pill mb-3"
          color="#51B747"
          style="width: fit-content"
        >
          <v-icon color="black">mdi-instagram</v-icon>
          <div class="social-text">sagarafoundation</div>
        </v-card>
        <v-card
          class="d-flex px-2 py-1 rounded-pill"
          color="#51B747"
          style="width: fit-content"
        >
          <v-icon color="black">mdi-email-outline</v-icon>
          <div class="social-text">yayasan@sagaratech.com</div>
        </v-card>
      </v-card-text>
      <v-card-actions
        class="justify-center pb-5"
        style="background-color: black"
      >
        <v-btn @click="close()" color="#1AA21E" class="white--text px-7"
          >Back to Dashboard</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    value: Boolean,
  },
  computed: {
    showComplete: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    close() {
      this.showComplete = false;
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.container {
  background-color: black;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.image {
  align-self: center;
  margin-bottom: 20px;
}
.social-text {
  font-weight: 700;
  font-size: 12px;
  padding-left: 4px;
}
</style>
