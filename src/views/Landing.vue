<template>
  <fragment>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
  </fragment>
</template>

<script>
import FirstSection from "../components/Landing/FirstSection";
import SecondSection from "../components/Landing/SecondSection";
import ThirdSection from "../components/Landing/ThirdSection.vue";
import FourthSection from "../components/Landing/FourthSection.vue";
import FifthSection from "../components/Landing/FifthSection";

export default {
  name: "Landing",

  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
