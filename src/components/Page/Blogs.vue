<template>
  <fragment>
    <!-- CATEGORIES -->
    <v-container class="blogs-bg">
      <div class="categories-text title">CATEGORIES</div>
      <v-container class="d-flex px-0">
        <v-btn
          depressed
          color="#B5B5B5"
          class="button-text subtitle-1 white--text mr-2 ml-0"
          >Press Release</v-btn
        >
        <v-btn
          depressed
          color="#B5B5B5"
          class="button-text subtitle-1 white--text"
          >Crowdfund</v-btn
        >
      </v-container>
    </v-container>

    <!-- MOST RECENT -->
    <v-container class="blogs-bg">
      <div class="recent-text title">MOST RECENT</div>
      <v-row v-for="blog in blogsData" :key="blog.key" class="mt-6 mb-0">
        <v-col cols="5" class="py-0 pr-0">
          <v-img src="@/assets/blogs/popular_blog.png" class="image-blog" />
        </v-col>
        <v-col cols="7" class="py-0">
          <v-btn
            class="button-text subtitle-2 white--text recent-btn mb-2"
            small
            color="#0D7422"
            >{{ blog.category }}</v-btn
          >
          <div class="caption ma-0">{{ blog.title }}</div>
          <div class="date-text ma-0">
            by {{ blog.author }} | {{ blog.date }}
          </div>
          <div class="link-text ma-0">Read more</div>
        </v-col>
      </v-row>
      <v-row></v-row>
    </v-container>

    <!-- BLOGS CARD -->
    <v-container class="blogs-bg">
      <v-card elevation="4" class="mt-4 pa-5 rounded-xl">
        <v-card-title class="pt-0">
          <div class="text-left title font-weight-bold">
            Bantu Beneficiaries Untuk Mewujudkan Mimpinya Menjadi Web Developer
          </div>
        </v-card-title>
        <v-card-text>
          <div class="black--text text-left desc-card my-4">
            Beneficiaries adalah seorang blablabla to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic
          </div>
          <v-progress-linear
            value="100"
            color="#E6E6E6"
            height="9"
            class="mb-6"
            rounded
          ></v-progress-linear>
          <v-container>
            <v-row>
              <v-col class="black--text px-0 py-0 font-12px"
                >Jumlah Donasi</v-col
              >
              <v-col class="donasi-blog-num py-0 ml-3 font-12px"
                >125000000</v-col
              >
            </v-row>
            <v-row>
              <v-col class="black--text px-0 py-0 font-12px"
                >Donasi Terkumpul</v-col
              >
              <v-col class="donasi-blog-num py-0 ml-3 font-12px"
                >Rp. 1.250.000</v-col
              >
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn
            block
            depressed
            color="#1AA21E"
            class="white--text title"
            @click.stop="donationModal = true"
          >
            DONATE
          </v-btn>
        </v-card-actions>
      </v-card>
      <Donation v-model="donationModal" />
    </v-container>
  </fragment>
</template>
<script>
import Donation from "../Modals/Donation.vue";
export default {
  components: {
    Donation,
  },
  data() {
    return {
      donationModal: false,
      blogsData: [
        {
          id: 1,
          category: "Press Release",
          title: "Lorem Ipsun dolor sit amet Lorem Ipsun dolor sit amet  ",
          author: "Admin",
          date: "04 April 2022",
          content:
            "Lorem Ipsun dolor sit amet Lorem Ipsun dolor sit amet  Lorem Ipsun dolor sit amet  Lorem Ipsun dolor sit amet  Lorem Ipsun dolor sit amet  Lorem Ipsun dolor sit amet Lorem Ipsun dolor sit amet  Lorem Ipsun ....",
          url: "example.com",
          image: "@/assets/blogs/popular_blog.png",
        },
        {
          id: 2,
          category: "Press Release",
          title: "Lorem Ipsun dolor sit amet Lorem Ipsun dolor sit amet  ",
          author: "Admin",
          date: "04 April 2022",
          content:
            "Lorem Ipsun dolor sit amet Lorem Ipsun dolor sit amet  Lorem Ipsun dolor sit amet  Lorem Ipsun dolor sit amet  Lorem Ipsun dolor sit amet  Lorem Ipsun dolor sit amet Lorem Ipsun dolor sit amet  Lorem Ipsun ....",
          url: "example.com",
          image: "@/assets/blogs/popular_blog.png",
        },
        {
          id: 3,
          category: "Press Release",
          title: "Lorem Ipsun dolor sit amet Lorem Ipsun dolor sit amet  ",
          author: "Admin",
          date: "04 April 2022",
          content:
            "Lorem Ipsun dolor sit amet Lorem Ipsun dolor sit amet  Lorem Ipsun dolor sit amet  Lorem Ipsun dolor sit amet  Lorem Ipsun dolor sit amet  Lorem Ipsun dolor sit amet Lorem Ipsun dolor sit amet  Lorem Ipsun ....",
          url: "example.com",
          image: "@/assets/blogs/popular_blog.png",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped>
.blogs-bg {
  background-color: black !important;
  display: flex;
  justify-content: center;
  padding: 10px 24px 20px 24px;
  flex-direction: column;
  color: white;
}
.button-text {
  text-transform: none;
}
.categories-text {
  color: #1aa21e;
  -webkit-text-stroke: 1px #81e370;
  font-weight: 600;
}
.date-text {
  font-size: 12px;
  color: #b5b5b5;
}
.desc-card {
  font-size: 14px;
  line-height: 30px;
}
.donasi-blog-num {
  color: #0d7422;
}
.font-12px {
  font-size: 12px;
  font-family: "Inter", sans-serif;
}
.image-blog {
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.link-text {
  color: #1aa21e;
  font-size: 14px;
  text-decoration: underline;
}
.recent-text {
  color: #1aa21e;
  -webkit-text-stroke: 1px #404040;
  font-weight: 600;
}
</style>
