<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    v-model="showInter"
  >
    <v-card>
      <v-toolbar color="black" dark>
        <v-img src="@/assets/logoSF.png" max-width="200px"></v-img>
      </v-toolbar>
      <v-card-text class="white--text" style="background-color: black">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdyi1Xcso9fvA_z9me3MkFEm7ZiL7ZdFMYpmc0jfjAFO71tvg/viewform?embedded=true"
          width="100%"
          height="400"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          >Memuat…</iframe
        >
      </v-card-text>
      <v-card-actions class="justify-end" style="background-color: black">
        <v-btn dark text @click="showInter = false">Close</v-btn>
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
    showInter: {
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
