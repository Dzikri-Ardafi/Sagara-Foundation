<template>
  <fragment>
    <v-container class="justify-center d-flex flex-column about-bg white--text">
      <v-container v-bind:class="step == 4 ? 'container blur' : 'container'">
        <VolunteerFormCompany2
          v-if="step == 2"
          @nextHandler="nextHandler($event)"
        />
        <VolunteerFormCompany3
          v-if="step == 3 || step == 4"
          @nextHandler="nextHandler($event)"
        />
        <VolunteerSuccessModal v-if="step == 4" class="modal" />
      </v-container>
      <VolunteerSuccessModal
        v-if="step == 4"
        class="modal"
        @nextHandler="nextHandler($event)"
        slot=""
      />
    </v-container>
  </fragment>
</template>

<script>
import VolunteerSuccessModal from "../Modals/VolunteerSuccessModal.vue";
import VolunteerFormCompany2 from "./VolunteerFormCompany2.vue";
import VolunteerFormCompany3 from "./VolunteerFormCompany3.vue";
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    VolunteerFormCompany2,
    VolunteerFormCompany3,
    VolunteerSuccessModal,
  },
  data() {
    return {
      step: 2,
    };
  },
  methods: {
    nextHandler(step) {
      this.step = step;
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
}

.blur {
  opacity: 0.6;
}

.modal {
  opacity: 1 !important;
}
</style>
