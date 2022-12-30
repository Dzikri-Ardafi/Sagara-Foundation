<template>
  <v-container class="d-flex transparent">
    <div class="mx-auto">
      <v-container class="mt-5">
        <div class="d-flex">
          <div class="pt-2 green--text mx-auto">
            <v-img src="@/assets/logoSF.png" max-width="150px"></v-img>
          </div>
        </div>
        <div class="d-flex">
          <div class="pt-6 white--text text-center">
            <p class="ma-0 pa-0">Jl. Magna Raya Blok MA03, Kota Bandung,</p>
            <p class="ma-0 pa-0">Rancabolang, Kec. Gedebage,</p>
            <p class="ma-0 pa-0">Jawa Barat 40296</p>
          </div>
        </div>
        <div class="d-flex">
          <div class="mx-auto mt-4 white--text">
            <p>yayasan@sagaratech.com</p>
          </div>
        </div>
        <!-- <div class="d-flex flex-column">
          <v-list-item-group v-model="selectedItem" color="grey">
            <div v-for="(item, i) in items" :key="i">
              <v-list-item :to="item.to" @click="hides()">
                <v-list-item-avatar class="pt-3">
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="white--text" v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list-item-group>
          <div class="pt-1 white--text">
            <v-btn text class="white--text pa-0 ma-0"> About </v-btn>
          </div>
          <div class="pt-1 white--text">
            <v-btn text class="white--text pa-0 ma-0"> Programs </v-btn>
          </div>
          <div class="pt-1 white--text">
            <v-btn text class="white--text pa-0 ma-0">
              Board Members
            </v-btn>
          </div>
          <div class="pt-1 white--text">
            <v-btn text class="white--text pa-0 ma-0"> Blog </v-btn>
          </div>
        </div> -->
        <div class="mx-auto">
          <div class="d-flex">
            <div class="mx-auto">
              <v-btn icon color="white" x-small class="space-around">
                <v-icon class="mr-2" @click="redirInsta()"
                  >mdi-instagram</v-icon
                >
                <v-icon @click="redirYoutube()">mdi-youtube</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </v-container>
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      selectedItem: "",
      // items: [
      //   { text: "About", icon: "mdi-compass", to: "/about-us" },
      //   { text: "Program", icon: "mdi-heart-outline", to: "/program"},
      //   { text: "Donation", icon: "mdi-heart-box-outline", to:"/donation"},
      //   { text: "Beneficiaries", icon: "mdi-account-multiple", to:"/beneficiaries"},
      //   // { text: "Blog", icon: "mdi-newspaper" },
      //   // { text: "Help", icon: "mdi-comment-question-outline" },
      // ],
    };
  },
  methods: {
    redirInsta() {
      window.open("https://www.instagram.com/sagarafoundation/", "_blank");
    },
    redirYoutube() {
      window.open(
        "https://www.youtube.com/channel/UCY0T4mLAsjaddYUiB1Jlifg",
        "_blank"
      );
    },
  },
};
</script>
<style>
.grey {
  background-color: #404040;
}
</style>
