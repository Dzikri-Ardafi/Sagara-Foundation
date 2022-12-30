<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    v-model="showDonation"
  >
    <v-card>
      <v-toolbar color="black" dark>
        <v-img src="@/assets/logoSF.png" max-width="200px"></v-img>
      </v-toolbar>
      <v-card-text class="white--text" style="background-color: black">
        <div class="text-h5 pt-5 pb-5 ma-0 pa-0">
          <b>100% of donations go directly to our programs</b>
        </div>
        <div><p>donate by transfer</p></div>
        <div><p class="ma-0 pa-0">Bank Rakyat Indonesia (BRI)</p></div>
        <div><p class="ma-0 pa-0">0018.01.002590.303</p></div>
        <div><p class="ma-0 pa-0">PT SAGARA ASIA TEKNOLOGI</p></div>
        <div class="mt-5">
          <div><p class="ma-0 pa-0">Bank Central Asia (BCA)</p></div>
          <div><p class="ma-0 pa-0">5540677745</p></div>
          <div><p class="ma-0 pa-0">PT SAGARA ASIA TEKNOLOGI</p></div>
        </div>
      </v-card-text>
      <v-card-actions class="justify-end" style="background-color: black">
        <v-btn dark text @click="showDonation = false">Close</v-btn>
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
    showDonation: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>
