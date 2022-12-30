<template>
  <v-container class="d-flex white">
    <v-container class="mt-5">
      <div class="d-flex">
        <div class="pt-2 mr-auto green--text">
          <h1>Thank You</h1>
        </div>
        <div class="pt-2">
          <v-btn icon color="green" x-large>
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="d-flex pb-5">
        <div>
          <h2>for Donation to All Contributor</h2>
        </div>
      </div>
      <div class="mt-5">
        <v-card class="d-flex" elevation="5">
          <div class="pa-5 align-self-center">
            <v-img
              src="@/assets/sampelPeople.png"
              max-width="80px"
              max-height="80px"
            ></v-img>
          </div>
          <div class="pa-5 pl-5 align-self-center">
            <div class="ma-0 pa-0">
              <p class="ma-0 pa-0"><b>Amelia Starr</b></p>
              <p class="ma-0 pa-0">
                donated <b class="green--text">Rp 200.000</b>
              </p>
              <p class="ma-0 pa-0">
                I hope this amount of money can help these kids.
              </p>
              <p class="grey--text">12 Mar 2022</p>
            </div>
          </div>
        </v-card>
      </div>
      <div class="mt-5">
        <v-card class="d-flex" elevation="5">
          <div class="pa-5 align-self-center">
            <v-img
              src="@/assets/sampelPeople.png"
              max-width="80px"
              max-height="80px"
            ></v-img>
          </div>
          <div class="pa-5 pl-5 align-self-center">
            <div class="ma-0 pa-0">
              <p class="ma-0 pa-0"><b>Amelia Starr</b></p>
              <p class="ma-0 pa-0">
                donated <b class="green--text">Rp 200.000</b>
              </p>
              <p class="ma-0 pa-0">
                I hope this amount of money can help these kids.
              </p>
              <p class="grey--text">12 Mar 2022</p>
            </div>
          </div>
        </v-card>
      </div>
      <div class="mt-5">
        <v-btn block rounded color="green" x-large class="white--text">
            START DONATE
        </v-btn>
      </div>
    </v-container>
  </v-container>
</template>
<style scoped>
.white {
  background-color: #ffffff;
}
</style>
