<template>
  <fragment>
    <v-container class="justify-center d-flex flex-column about-bg white--text">
      <v-container>
        <div class="d-flex flex-column">
          <div class="pa-2">
            <h1>Be a Part of Sagara Foundation!</h1>
          </div>
          <div class="pa-2 text-justify">
            <p>
              Sagara Foundation have dedicated ourselves to making an impact and
              bringing change to young people by leveraging the world of
              technology.
            </p>
            <p>
              Be a part of the Sagara Foundation contributes to giving social
              impact to many orphaned students and from underprivileged families
              to realize their dreams as to be the best digital talents and to
              be the best technopreneur.
            </p>
          </div>
        </div>
        <div class="d-flex flex-row pa-2">
          <v-card
            class="mr-auto vol white--text mr-5"
            @click="redirectToVolunteerForm"
          >
            <div
              class="d-flex flex-row jutify-center pl-5"
              style="margin-top: 50%"
            >
              <v-spacer></v-spacer>
              <h3>Be Volunteer</h3>
              <v-btn icon rounded x-large dark>
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-card>
          <v-card
            class="mr-auto intern white--text mr-5"
            @click.stop="goToIntern"
          >
            <div
              class="d-flex flex-row jutify-center pl-5"
              style="margin-top: 50%"
            >
              <v-spacer></v-spacer>
              <h3>Join Internship</h3>
              <v-btn icon rounded x-large dark>
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-card>
        </div>
      </v-container>
    </v-container>
  </fragment>
</template>
<script>
import router from "@/router";
import ModalVol from "../Modals/VolFull.vue";
export default {
  data() {
    return {
      volModal: false,
    };
  },
  components: {
    ModalVol,
  },
  methods: {
    back() {
      router.replace("/");
    },
    goToIntern() {
      router.push("/internship");
    },
    redirectToVolunteerForm() {
      return this.$router.push("/volunteer/form");
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style>
.about-bg {
  background-color: black !important;
}

.about-bg-next {
  background-color: white !important;
}

.scrolling {
  overflow-x: scroll;
}

.vol {
  background-image: url("@/assets/volunteer/volunteer.png");
  background-position: center;
  height: 200px;
  max-width: 50%;
}
.intern {
  background-image: url("@/assets/volunteer/intern.png");
  background-position: center;
  height: 200px;
  max-width: 50%;
}
.text-justify {
  text-align: justify;
  text-justify: inter-word;
}
</style>
