<template>
  <fragment>
    <v-container class="justify-center d-flex flex-column about-bg white--text">
      <v-container>
        <div class="d-flex flex-column">
          <div class="pa-2">
            <h1>Sagara Teknologi Peduli Foundation</h1>
          </div>
          <div class="pa-2 text-justify">
            <p>
              The expected of program to create human resources who are
              technologically capable and have the opportunity to get job
              opportunities in the fields studied.
            </p>
          </div>
          <div class="pa-2">
            <v-img src="@/assets/program/main2.png"></v-img>
          </div>
          <div class="pa-2 pt-5">
            <h1>Technology Orphaned</h1>
          </div>
          <div class="pa-2 text-justify">
            <p>
              Technology Orphaned is the main program of the Sagara Teknologi
              Peduli Foundation, which <b>focuses on building technology-based
              skills education</b> for those in need.
            </p>
            <p>
              This program aims to guide orphaned students and those from
              underprivileged families by providing technology skills that are
              much needed in this era, which is supported by great benefits from
              the Sagara Foundation to be the best digital talents (software
              engineer or UI and UX designer) and to be the best technopreneur.
            </p>
          </div>
          <div class="pr-2 pl-2 pt-2 pb-5">
            <v-img src="@/assets/program/tech.png"></v-img>
          </div>
          <div class="pr-2 pl-2 pt-5">
            <h1>Who is the Beneficiaries of This Program ?</h1>
          </div>
          <div class="d-flex flex-row pr-2 pl-2 pt-5">
            <div class="d-flex flex-column pr-5" style="width: 50%">
              <div>
                <h1 class="green--text" style="font-size: 50px">01</h1>
              </div>
              <div>
                <p>Orphans from underprivileged families</p>
              </div>
            </div>
            <div class="d-flex flex-column" style="width: 50%">
              <div>
                <h1 class="green--text" style="font-size: 50px">02</h1>
              </div>
              <div>
                <p>Active students aged 16-18 years or high school student</p>
              </div>
            </div>
          </div>
          <div class="pr-2 pl-2 pt-5">
            <h1>What is the Benefits of This Program ?</h1>
          </div>
          <div class="d-flex flex-row pr-2 pl-2 pt-5">
            <div class="d-flex flex-column pr-5" style="width: 50%">
              <div>
                <h1 class="green--text" style="font-size: 50px">01</h1>
              </div>
              <div>
                <p><b>Free Offline Course</b></p>
                <p>One Meeting in One Week and trained by a tech expert</p>
              </div>
            </div>
            <div class="d-flex flex-column" style="width: 50%">
              <div>
                <h1 class="green--text" style="font-size: 50px">02</h1>
              </div>
              <div>
                <p><b>Laptop Facilities</b></p>
                <p>Provided at Sagara's office as a learning media</p>
              </div>
            </div>
          </div>
          <div class="d-flex flex-row pr-2 pl-2 pt-5">
            <div class="d-flex flex-column pr-5" style="width: 50%">
              <div>
                <h1 class="green--text" style="font-size: 50px">03</h1>
              </div>
              <div>
                <p><b>Self Development</b></p>
                <p>
                  skill and career development with tutors, namely "Kakak Asuh"
                </p>
              </div>
            </div>
            <div class="d-flex flex-column" style="width: 50%">
              <div>
                <h1 class="green--text" style="font-size: 50px">04</h1>
              </div>
              <div>
                <p><b>Accommodation</b></p>
                <p>Operational fund and Meal</p>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </v-container>
    <v-container
      class="justify-center d-flex flex-column about-bg-next black--text"
    >
      <div class="d-flex flex-column pa-2">
        <div class="pt-5">
          <h1 class="green--text">Beneficiaries Story</h1>
        </div>
        <div class="pt-5">
          <h3>How They Feel About This Program?</h3>
        </div>
        <div class="pt-2">
          <p>
            There are many beneficiaries thats tell the testimonials and little
            hope for the future
          </p>
        </div>
        <div class="d-flex flex-row scrolling">
          <div
            class="d-flex flex-column mr-5"
            style="width: 100%"
            v-for="(item, i) in testimonial"
            :key="i"
          >
            <div class="mt-2">
              <v-img
                :src="' https://drive.google.com/uc?export=view&id=' + item.img"
                max-width="200px"
              ></v-img>
            </div>
            <div class="d-flex flex-column">
              <div class="mt-5 text-justify">
                <p>
                  {{ item.testi }}
                </p>
              </div>
              <div class="mt-2 mb-5 green--text">
                <b>{{ item.name }}</b>
              </div>
            </div>
          </div>
        </div>
        <div class="pt-5">
          <h1 class="green--text text-center">
            Do you want contribute to Technology Orphaned Program?
          </h1>
        </div>
        <div class="pt-5">
          <v-btn
            block
            x-large
            rounded
            color="green"
            dark
            @click.stop="donation = true"
          >
            START DONATE
          </v-btn>
        </div>
        <Donation v-model="donation" />
        <div class="pt-5">
          <h1 class="green--text text-center">or</h1>
        </div>
        <div class="pt-5">
          <h1 class="green--text text-center">
            If you need more info, Contact Us
          </h1>
        </div>
        <div class="pt-5 d-flex flex-row">
          <div class="d-flex flex-row" style="width: 50%">
            <div class="pr-2">
              <v-img
                src="@/assets/program/safira.png"
                max-height="80px"
                max-width="80px"
              ></v-img>
            </div>
            <div class="d-flex flex-column my-auto">
              <div>
                <h3 class="green--text">Safira Amalia</h3>
              </div>
              <div>
                <p>Foundation Manager</p>
              </div>
            </div>
          </div>
          <div class="d-flex align-end my-auto" style="width: 50%">
            <v-btn
              rounded
              x-large
              dark
              color="green"
              class="ml-auto"
              @click="redirwa()"
              >CHAT <v-icon right>mdi-whatsapp</v-icon></v-btn
            >
          </div>
        </div>
      </div>
    </v-container>
  </fragment>
</template>
<script>
import router from "@/router";
import Donation from "@/components/Modals/Donation.vue";
export default {
  components: {
    Donation,
  },
  data() {
    return {
      donation: false,
      testimonial: [
        {
          img: "1ygOJXeMA6De-Aso0YvVaT5ocFxFHTcRl",
          testi:
            "Very exciting even though a little do not understand about technology especially programming. Mentors are very kind and supportive every time. I hope the knowledge I get can be useful in the future",
          name: "Silma Nurrusiva",
        },
        {
          img: "1Fi-sN5uwUWy5YsIt9LRQ1UxaaxbVng2Q",
          testi:
            "So excited, because in the future technology will be needed more. The program of Sagara Foundation so enjoy, comfortable and so far easy to understand.  I hope can more understand about programming",
          name: "Bilqis Ajaria Fadhla",
        },
        {
          img: "1986jTJEYfQLurHwpapG342eI4kMnQjv3",
          testi:
            " With Sagara Foundation the learning is Comfortable, Effective, Friendly, and Easy to Understand. So, with new experience and skills, I hope to become a reliable web developer and Sagara can grow in the future",
          name: "Taufik Ismail",
        },
        {
          img: "1KzoHQiKSSnOAMhkDU0Fq-jLZlh9e-_nM",
          testi:
            " In class, the lessons are so interesting and don't make me bored. The Sagara Foundation gave me the facility to study but the delivery of the material was a bit fast. With Sagara Foundation, I want to be an expert in programmers so that can support my goals",
          name: "Ferdiansyah Gunawan",
        },
      ],
    };
  },
  methods: {
    back() {
      router.replace("/");
    },
    redirwa() {
      window.location.assign("https://wa.me/+6285711645558");
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
</style>
