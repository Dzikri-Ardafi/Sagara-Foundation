<template>
  <v-container class="justify-center cons d-flex flex-column">
    <v-container class="mt-auto">
      <v-row>
        <v-col>
          <div class="white--text">
            <h1>16,3% of kids in Indonesia don’t get the best education</h1>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="white--text">
            <p>
              Most of them only receive their education in high school. Let’s
              help them and join us to make their dreams come true.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="green" rounded x-large block @click.stop="donation = true">START DONATE</v-btn>
        </v-col>
      </v-row>
      <Donation v-model="donation"/>
      <v-row>
        <v-col>
          <v-btn class="white--text" outlined rounded x-large block @click="beVolunteer()"
            >BE VOLUNTEER</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import SideMenu from "@/components/Modals/SideMenu.vue";
import router from '@/router';
import Donation from "../Modals/Donation.vue";
export default {
  components: {
    SideMenu,
    Donation
},
  data() {
    return {
      donation: false,
      notifications: false,
      sound: true,
      widgets: false,
    };
  },
  methods: {
    beVolunteer(){
      router.push('/volunteer')
    }
  }
};
</script>
<style scoped>
.cons {
  background: url("@/assets/front.png");
  background-size: cover;
  height: 1000vh;
  max-height: 85vh;
}
.firstCaption {
  height: 1000vh;
  max-height: 25vh;
}
.cardColor {
  background-color: rgba(255, 255, 255, 0.5) !important;
  border-color: white !important;
}
</style>
