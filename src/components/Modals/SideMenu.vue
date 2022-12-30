<template>
  <v-dialog
    v-model="show"
    width="480px"
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card height="100vh" color="black">
      <v-toolbar color="black">
        <v-toolbar-title class="pt-4 pl-5">
          <v-img src="@/assets/logoSF.png" max-width="200px"></v-img>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="pt-4 pr-4">
          <v-btn dark text @click="show = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container
        v-if="isLogged"
        class="d-flex flex-column white--text px-9 pt-5 pb-0"
      >
        <v-row>
          <v-col cols="3" class="mb-2 pr-0">
            <v-img
              src="@/assets/sampelPeople.png"
              max-height="50"
              max-width="50"
              class="profile-image"
            ></v-img>
          </v-col>
          <v-col
            cols="9"
            class="d-flex align-center text-left align-center pl-0"
          >
            <h3 class="subtitle-2 green-text">Aldy Taher</h3>
          </v-col>
        </v-row>
        <p class="ma-0 green-text">Donasiku :</p>
        <p>Rp 100.000,-</p>
      </v-container>
      <div
        v-else
        class="d-flex white--text mx-9 mt-5 rounded-lg"
        style="background-color: #424242"
      >
        <div class="pa-3 pr-0 py-3 mr-auto align-self-center caption">
          Please login to contribute on Sagara Foundation
        </div>
        <div class="pa-3">
          <v-btn @click="redirect()" color="green" rounded outlined small
            >LOGIN</v-btn
          >
        </div>
      </div>
      <v-list three-line color="black" dark>
        <v-list-item-group v-model="selectedItem" color="primary">
          <div v-for="(item, i) in items" :key="i">
            <v-list-item :to="item.to" @click="hides()">
              <v-list-item-avatar class="pt-3 mx-3">
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    value: Boolean,
  },
  data() {
    return {
      selectedItem: "",
      items: [
        { text: "About Us", icon: "mdi-compass", to: "/about-us" },
        { text: "Programs", icon: "mdi-heart-outline", to: "/program" },
        { text: "Blogs", icon: "mdi-newspaper-variant-outline", to: "/blogs" },
        { text: "Donations", icon: "mdi-heart-box-outline", to: "/donation" },
        {
          text: "Beneficiaries",
          icon: "mdi-account-multiple",
          to: "/beneficiaries",
        },
        // { text: "Blog", icon: "mdi-newspaper" },
        // { text: "Help", icon: "mdi-comment-question-outline" },
      ],
      isLogged: false,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    hides() {
      this.show = false;
    },
    redirect() {
      return this.$router.push("/login");
    },
  },
};
</script>
<style>
.grey {
  background: black !important;
}
.green-text {
  color: #51b747 !important;
  font-weight: 600;
  font-size: 10px;
  font-family: "Inter", sans-serif;
}
.profile-image {
  object-fit: cover;
  overflow: hidden;
  border-radius: 50%;
}
</style>
