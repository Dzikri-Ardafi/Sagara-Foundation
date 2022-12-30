<template>
  <fragment>
    <Beneficiaries />
  </fragment>
</template>

<script>
import Volunteer from "@/components/Page/Volunteer.vue";
import Beneficiaries from "@/components/Page/Beneficiaries.vue";

export default {
  // name: "Donations",

  components: {
    Volunteer,
    Beneficiaries,
  },
};
</script>
