<template>
  <v-container class="d-flex black white--text">
    <v-container class="mt-5">
      <div class="d-flex">
        <v-div class="pt-2 mr-auto">
          <h1>Yatim Piatu Teknologi</h1>
        </v-div>
        <div class="pt-2">
          <v-btn icon color="white" x-large>
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="d-flex">
        <div>
          Beneficiaries in part of taking action for our future, thats provides
          free digital education classes for orphand students
        </div>
      </div>
      <div class="d-flex pt-5 gallery-container">
        <v-card class="ma-2"><v-img src="@/assets/beneficiaries/alif.png" max-height="200px" max-width="200px"></v-img></v-card>
        <v-card class="ma-2"><v-img src="@/assets/beneficiaries/alif.png" max-height="200px" max-width="200px"></v-img></v-card>
        <v-card class="ma-2"><v-img src="@/assets/beneficiaries/alif.png" max-height="200px" max-width="200px"></v-img></v-card>
        <v-card class="ma-2"><v-img src="@/assets/beneficiaries/alif.png" max-height="200px" max-width="200px"></v-img></v-card>
        <v-card class="ma-2"><v-img src="@/assets/beneficiaries/alif.png" max-height="200px" max-width="200px"></v-img></v-card>
      </div>
    </v-container>
  </v-container>
</template>
<style scoped>
.black {
  background-color: #1e1e1e;
}
.gallery-container {
  display: flex;
  flex-direction: row;
  height: 200px;
  overflow-x: scroll;
}
</style>
