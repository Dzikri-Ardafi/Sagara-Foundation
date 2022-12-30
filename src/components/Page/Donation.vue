<template>
  <fragment>
    <v-container class="cons d-flex flex-column">
      <v-container>
        <div class="d-flex flex-column">
          <div class="white--text mb-auto">
            <h1>Thank You</h1>
            <h3>to all Contributors for Donation</h3>
          </div>
        </div>
      </v-container>
      <v-container class="mt-auto">
        <div class="d-flex flex-row white--text">
          <div><h3>Total Donation</h3></div>
          <div class="ml-auto">Last Updated, 9 Oct 2022</div>
        </div>
        <div class="d-flex flex-row white--text">
          <div><h1>Rp</h1></div>
          <div class="ml-auto"><h1 class="green--text">61,339,100</h1></div>
        </div>
        <div class="d-flex flex-row white--text mt-5">
          <div class="d-flex flex-column mr-auto">
            <div><h3>Device Donated</h3></div>

            <div class="d-flex flex-row">
              <h1 class="green--text">8</h1>
              <p class="my-auto ml-2">pcs</p>
            </div>
          </div>
          <div class="d-flex flex-column">
            <div><h3>Volunteer Joined</h3></div>

            <div class="d-flex flex-row">
              <h1 class="green--text">36</h1>
              <p class="my-auto ml-2">People</p>
            </div>
          </div>
        </div>
      </v-container>
      <v-container>
        <v-row>
          <v-col>
            <v-btn
              color="green"
              rounded
              x-large
              block
              @click.stop="donationModal = true"
              >START DONATE</v-btn
            >
          </v-col>
        </v-row>
        <Donation v-model="donationModal" />
        <v-row>
          <v-col>
            <v-btn
              class="white--text"
              outlined
              rounded
              x-large
              block
              @click="beVolunteer()"
              >BE VOLUNTEER</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <v-container class="d-flex white-donate">
      <v-container class="mt-5">
        <div class="d-flex">
          <div class="pt-2 mr-auto green--text">
            <h1>Donation Income</h1>
          </div>
        </div>
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item, i) in donation" :key="i">
            <v-expansion-panel-header>
              <div style="max-width: 50%">
                <v-img
                  src="@/assets/sagaraIcon.png"
                  max-width="60px"
                  max-height="60px"
                  v-if="item.donatur == 'Sagara Technology'"
                ></v-img>
                <v-img
                  src="@/assets/agate.png"
                  max-width="60px"
                  max-height="60px"
                  v-else
                ></v-img>
              </div>
              <div class="align-self-center">
                <div class="ma-0 pa-0">
                  <p>
                    <b>{{ item.donatur }}</b>
                  </p>
                  <p>
                    Donated <b class="green--text">{{ item.amount }}</b>
                  </p>
                  <p class="grey--text">{{ item.date }}</p>
                </div>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p v-for="(don, i) in item.list" :key="i" class="grey--text">
                {{ `${don.ket} | ${don.nom}` }}
              </p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- <div class="mt-5">
        <v-btn block rounded color="green" x-large class="white--text">
            ANNUAL REPORT
        </v-btn>
      </div> -->
      </v-container>
    </v-container>
  </fragment>
</template>
<script>
import router from "@/router";
import Donation from "../Modals/Donation.vue";
export default {
  components: {
    Donation,
  },
  data() {
    return {
      donationModal: false,
      donation: [
        {
          donatur: "Sagara Technology",
          amount: "Rp6,600,000",
          date: "September",
          desc: "We Support develop digital talents skills for orphaned students and underprivileged families",
          list: [
            {
              ket: "1. Consumption Fee",
              nom: "Rp1,860,000",
            },
            {
              ket: "2. Transportation Fee",
              nom: "Rp2,940,000",
            },
            {
              ket: "3. Tutor Fee",
              nom: "Rp1,800,000",
            },
          ],
        },
        {
          donatur: "Sagara Technology",
          amount: "Rp6,600,000",
          date: "Agustus",
          desc: "Support and contribute to creating digital talents for Indonesia's smart nation.",
          list: [
            {
              ket: "1. Consumption Fee",
              nom: "Rp1,860,000",
            },
            {
              ket: "2. Transportation Fee",
              nom: "Rp2,940,000",
            },
            {
              ket: "3. Tutor Fee",
              nom: "Rp1,800,000",
            },
          ],
        },
        {
          donatur: "Sagara Technology",
          amount: "Rp6,600,000",
          date: "Juli",
          desc: "We hope they can become successful digital talents.",
          list: [
            {
              ket: "1. Consumption Fee",
              nom: "Rp1,860,000",
            },
            {
              ket: "2. Transportation Fee",
              nom: "Rp2,940,000",
            },
            {
              ket: "3. Tutor Fee",
              nom: "Rp1,800,000",
            },
          ],
        },
        {
          donatur: "Sagara Technology",
          amount: "Rp5,400,000",
          date: "Juni",
          desc: "We hope that orphans Will succeed in getting jobs in technology companies.",
          list: [
            {
              ket: "1. Consumption Fee",
              nom: "Rp1,710,000",
            },
            {
              ket: "2. Transportation Fee",
              nom: "Rp1,890,000",
            },
            {
              ket: "3. Tutor Fee",
              nom: "Rp1,800,000",
            },
          ],
        },
        {
          donatur: "Agate",
          amount: "Devices",
          date: "Mei",
          desc: "We hope this amount can support orphaned students to achieve their dreams.",
          list: [
            {
              ket: "Laptop Lenovo Thinkpad X220 (Intel core i7 Gen2, RAM 8GB)	",
              nom: "3 Unit",
            },
            {
              ket: "Laptop Lenovo Thinkpad T420 (Intel core i5 Gen2, RAM 8GB)	",
              nom: "1 Unit",
            },
            {
              ket: "Personal Computer	",
              nom: "2 Unit",
            },
          ],
        },
        {
          donatur: "Sagara Technology",
          amount: "Rp5,195,000",
          date: "April",
          desc: "Support orphaned students to be the best technopreneur.",
          list: [
            {
              ket: "1. Consumption Fee",
              nom: "Rp1,645,000",
            },
            {
              ket: "2. Transportation Fee",
              nom: "Rp1,750,000",
            },
            {
              ket: "3. Tutor Fee",
              nom: "Rp1,800,000",
            },
          ],
        },
        {
          donatur: "Sagara Technology",
          amount: "Rp8,950,000",
          date: "April",
          desc: "Support orphaned students to be the best technopreneur.",
          list: [
            {
              ket: "1. Consumption Fee",
              nom: "Rp3,400,000",
            },
            {
              ket: "2. Transportation Fee",
              nom: "Rp3,750,000",
            },
            {
              ket: "3. Tutor Fee",
              nom: "Rp1,800,000",
            },
          ],
        },
        {
          donatur: "Sagara Technology",
          amount: "Rp5,934,300",
          date: "Maret",
          desc: "Support the Sagara Foundation to create the best digital talents.",
          list: [
            {
              ket: "1. Consumption Fee",
              nom: "Rp1,584,300",
            },
            {
              ket: "2. Transportation Fee",
              nom: "Rp2,550,000",
            },
            {
              ket: "3. Tutor Fee",
              nom: "Rp1,800,000",
            },
          ],
        },
        {
          donatur: "Sagara Technology",
          amount: "Rp16,059,800",
          date: "Februari",
          desc: "We hope this amount of money can help beneficiaries.",
          list: [
            {
              ket: "2 Unit Laptop Acer Aspire 3 R3",
              nom: "Rp14,000,000",
            },
            {
              ket: "Maintenance Fee",
              nom: "Rp2,059,800",
            },
          ],
        },
      ],
    };
  },
  methods: {
    beVolunteer() {
      router.push("/volunteer");
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
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

.white-donate {
  background-color: #ffffff;
}
</style>
