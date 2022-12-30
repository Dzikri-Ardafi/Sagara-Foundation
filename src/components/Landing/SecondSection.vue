<template>
  <v-container class="d-flex black white--text">
    <v-container class="mt-5">
      <div class="pa-2">
        <iframe
          width="100%"
          height="250px"
          src="https://www.youtube.com/embed/DUdStZWN7M8"
          style="border: none"
        >
        </iframe>
      </div>
      <div class="d-flex">
        <div class="pt-2 mr-auto">
          <h1>Our Beneficiaries</h1>
        </div>
        <div class="pt-2">
          <v-btn icon color="white" x-large @click="goBen()">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="d-flex">
        <div class="text-justify">
          <b>Pursue your dream </b>as the motto of the Sagara Foundation as part
          of an agent of change, contributing help orphans and those from
          underprivileged families to become the best digital talents.
        </div>
      </div>
      <div class="d-flex pt-5 gallery-container">
        <v-card
          class="ma-2 white--text"
          v-for="(items, i) in people"
          :key="i"
          style="background-color: black"
          @click="goArtikel(items)"
          ><v-img
            :src="' https://drive.google.com/uc?export=view&id=' + items.img"
            max-height="200px"
            max-width="200px"
            
          ></v-img>
          <div class="ma-2">{{ items.name }}</div>
          <div class="ma-2">{{ items.origin }}</div>
        </v-card>
        <Artikel v-model="artikel" :dataArtikel="artikelData"/>
      </div>
      <div class="pt-5 mr-auto">
          <h1>Our Target</h1>
        </div>
      <div class="d-flex flex-row">
        <vue-ellipse-progress
          color="green"
          emptyColorFill="transparent"
          emptyColor="grey"
          fontColor="green"
          :size="150"
          :progress="benPercent"
          :legend="true"
          :legendValue="benefi"
          :legendFormatter="
            ({ currentValue }) =>
              new Intl.NumberFormat('de-DE').format(currentValue)
          "
          legendClass="legend-custom-style"
          class="mt-5"
        >
        <span slot="legend-caption"><b>Beneficiaries</b></span>
          <span slot="legend-value" class="white--text"> / 1000</span>
        </vue-ellipse-progress>
        <vue-ellipse-progress
          color="green"
          emptyColorFill="transparent"
          emptyColor="grey"
          fontColor="green"
          :size="150"
          :progress="donPercent"
          :legend="true"
          :legendValue="don"
          :legendFormatter="
            ({ currentValue }) =>
              new Intl.NumberFormat('de-DE').format(currentValue)
          "
          legendClass="legend-custom-style"
          class="mt-5 ml-auto"
        >
        <span slot="legend-caption"><b>Donation</b></span>
          <span slot="legend-value" class="white--text">M/ 1B IDR</span>
        </vue-ellipse-progress>
      </div>
    </v-container>
  </v-container>
</template>
<script>
import router from "@/router";
import RadialProgressBar from "vue-radial-progress";
import Artikel from "../Modals/Artikel.vue";

export default {
  components: {
    RadialProgressBar,
    Artikel
},
  data() {
    return {
      benefi: 23,
      don: 61.3,
      artikel: false,
      artikelData: "",
      people: [
        {
          img: "16rtT2uVEUy-effxivq1cA59FJf_Fhxhc",
          name: "Ferdiansyah",
          origin: "18th y.o — Bandung",
          desc: "What’s in the code Electronic e-commerce front-end for software developers",
        },
        {
          img: "1DJp0PLpZ56A8yalze1q9qJxDDDzificz",
          name: "Zahidah",
          origin: "18th y.o — Bandung",
          desc: "The Story of Zahidah, Sagara’s student who wants to build a robotic company in Indonesia",
        },
        {
          img: "1d70EAx6FwFzHhJypopD44aP8cNm5Q3Sx",
          name: "Bilqis Ajaria ",
          origin: "17th y.o — Bandung",
          desc: "Bilqis Combine Healthcare and Technology for Indonesia",
        },
        {
          img: "1NJDjofsArGj1J39R_qKJ9QoYVT9XxWQI",
          name: "Fajar",
          origin: "18th y.o — Bandung",
          desc: "Fajar’s Vision of Military tech in Indonesia’s defense system",
        },
        {
          img: "1sxX9Pam8aUu2OV-ws33VaT2OxWnemuun",
          name: "Alif Alfarizi",
          origin: "16th y.o — Bandung",
          desc: "Back-end code insight for computerlive.io by Alif Alfarizi",
        },
        {
          img: "1RPkUCVIIiw8ZFzwATGvhgs4o8jiiInk-",
          name: "Zaki Fauzah",
          origin: "18th y.o — Bandung",
          desc: "Zaki’s Vision in Health Tech in Indonesia",
        },
        {
          img: "1qYYE0AaciGkWScwj9CzMCrbsoY3esZpJ",
          name: "Taufik Ismail",
          origin: "17th y.o — Bandung",
          desc: "The Front-end technology behind computerlive.io by Taufik Ismail",
        },
        {
          img: "18P7bqzJYUlr_LiREpxg7y_MdcLkC-HTM",
          name: "Ade Hasni K",
          origin: "16th y.o — Bandung",
          desc: "Ade’s goal is to make it easier for doctors to use health technology in Indonesia",
        },
      ],
    };
  },
  computed: {
    benPercent(){
      return (this.benefi * 100) / 1000;
    },
    donPercent(){
      return (this.don * 100) / 1000;
    }
  }, 
  methods: {
    goBen() {
      router.push("/beneficiaries");
    },
    goArtikel(data) {
      this.artikelData = data;
      this.artikel = true;
    }
  },
};
</script>
<style scoped>
.black {
  background-color: #1e1e1e;
}
.gallery-container {
  display: flex;
  flex-direction: row;
  height: auto;
  overflow-x: scroll;
}
.text-justify {
  text-align: justify;
  text-justify: inter-word;
}
</style>
