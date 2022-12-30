<template>
  <v-container class="justify-center d-flex flex-column head-bg">
    <v-container>
      <div class="d-flex">
        <!-- <div v-if="this.$route.name != 'home'" class="mr-auto d-flex flex-row">
          <div class="pa-2">
            <v-btn icon color="white" x-large @click="back">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </div>
          <div class="pt-2 pr-2 pb-2 white--text">
            <p class="pt-3 pr-3 pl-1" style="font-size: 18px">
              {{ this.$route.name }}
            </p>
          </div>
        </div> -->
        <div class="mr-auto">
          <div class="py-3 d-flex">
            <div v-if="this.$route.name != 'home'">
              <v-btn icon color="white" small @click="back">
                <v-icon class="mb-2">mdi-arrow-left</v-icon>
              </v-btn>
            </div>

            <div>
              <v-img
                class="ml-1"
                src="@/assets/logoSF.png"
                max-width="175px"
                max-height="200px"
              ></v-img>
            </div>
          </div>
        </div>
        <div class="pa-2">
          <v-btn icon color="white" small @click.stop="search = true">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <Search v-model="search" :showModal="showModal" />
        </div>
        <div class="pa-2">
          <v-btn icon color="white" small @click.stop="dialog = true">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <SideMenu v-model="dialog" />
        </div>
      </div>
    </v-container>
  </v-container>
</template>
<script>
import router from "@/router";
import SideMenu from "@/components/Modals/SideMenu.vue";
import Search from "../Modals/Search.vue";
export default {
  components: {
    SideMenu,
    Search,
  },
  data() {
    return {
      dialog: false,
      search: false,
    };
  },

  methods: {
    back() {
      this.$router.push("/");
      window.location.reload();
    },
    showModal() {
      this.dialog = true;
    },
  },
};
</script>
<style>
.head-bg {
  background-color: transparent !important;
  height: 80px !important;
}
</style>
