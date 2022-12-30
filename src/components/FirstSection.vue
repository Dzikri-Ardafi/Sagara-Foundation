<template>
  <v-container class="justify-center cons d-flex flex-column">
    <v-container>
      <div class="d-flex">
        <div class="pa-2 mr-auto">
          <v-img
            src="@/assets/logo-foundation.png"
            max-width="80px"
            max-height="80px"
          ></v-img>
        </div>
        <div class="pa-2">
          <v-btn icon color="white" x-large>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </div>
        <div class="pa-2">
            <v-btn icon color="white" x-large>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
    </div>
    </v-container>
    <v-container class="mt-auto">
      <v-row>
        <v-col>
          <div class="white--text">
            <h1>Yayasan Sagara Teknologi Peduli</h1>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="white--text">
            <p>
              Beneficiaries in part of taking action for our future, thats
              provides free digital education classes for orphand students
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="green" rounded x-large block>START DONATE</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="white--text" outlined rounded x-large block
            >BE VOLUNTEER</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<style scoped>
.cons {
  background: url("../assets/front.png");
  background-size: cover;
  height: 1000vh;
  max-height: 90vh;
}
.firstCaption {
    height: 1000vh;
  max-height: 25vh;
}
.cardColor {
   background-color: rgba(255, 255, 255, 0.5) !important;
   border-color: white !important;
 }
</style>
