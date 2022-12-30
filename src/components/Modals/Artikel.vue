<template>
  <v-dialog
    transition="dialog-bottom-transition"
    max-width="600"
    v-model="showArtikel"
  >
    <v-card>
      <v-toolbar color="black" dark>
        <v-img src="@/assets/logoSF.png" max-width="200px"></v-img>
      </v-toolbar>
      <v-card-text class="white--text" style="background-color: black">
        <div class="d-flex justify-center">
          <v-img
            :src="
              ' https://drive.google.com/uc?export=view&id=' + dataArtikel.img
            "
            max-height="200px"
            max-width="200px"
          ></v-img>
        </div>
        <div class="d-flex justify-center">
          <div class="text-h5 pt-5 pb-5 ma-0 pa-0">
            <b>{{ dataArtikel.name }}</b>
          </div>
        </div>
        <div class="d-flex justify-center">
          <div>
            <p>{{ dataArtikel.origin }}</p>
          </div>
        </div>
        <div class="d-flex justify-center">
          <div>
            <p>{{ dataArtikel.desc }}</p>
          </div>
        </div>
      </v-card-text>
      <v-card-actions class="justify-end" style="background-color: black">
        <v-btn dark text @click="showArtikel = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    value: Boolean,
    dataArtikel: Object,
  },
  computed: {
    showArtikel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  mounted() {
    //
  },
};
</script>
