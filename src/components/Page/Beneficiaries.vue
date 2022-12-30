<template>
  <fragment>
    <v-container class="justify-center d-flex flex-column about-bg white--text">
      <v-container>
        <div class="d-flex flex-column">
          <div class="pa-2">
            <h1>Our Beneficiaries</h1>
          </div>
          <div class="pa-2">
            <v-img src="@/assets/volunteer/all.png"></v-img>
          </div>
          <div class="pa-2 text-justify">
            <p>
              <b>Pursue your dream</b> as the motto of the Sagara Foundation as part of
              an agent of change, contributing to helping orphans and those from
              underprivileged families to become the best digital talents.
            </p>
          </div>
        </div>
        <v-row class="pa-2">
          <v-col cols="6" v-for="(item,i) in people" :key="i">
            <div class="d-flex flex-column">
              <div><v-img :src="' https://drive.google.com/uc?export=view&id='+item.img" max-width="200px"></v-img></div>
              <div class="pt-4">{{item.name}}</div>
              <div class="grey--text">{{item.origin}}</div>
              <div class="pt-4">{{item.desc}}</div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </fragment>
</template>
<script>
import router from "@/router";
export default {
  data(){
    return{
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
    }
  }, 
  methods: {
    back() {
      router.replace("/");
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
</style>
