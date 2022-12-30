<template>
  <v-container class="d-flex grey">
    <v-container class="mt-5">
      <div class="d-flex">
        <div class="pt-2 green--text">
          <v-img src="@/assets/logoSF.png" max-width="300px"></v-img>
        </div>
      </div>
      <div class="d-flex">
        <div class="pt-6 white--text">
          <p class="ma-0 pa-0">Jl. Magna Raya Blok MA03, Kota Bandung,</p>
          <p class="ma-0 pa-0">Rancabolang, Kec. Gedebage,</p>
          <p class="ma-0 pa-0">Jawa Barat 40296</p>
        </div>
      </div>
      <div class="d-flex">
        <div class="pt-6 white--text">
          <p>yayasan@sagaratech.com</p>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="pt-1 white--text">
          <v-btn text class="white--text pa-0 ma-0"> About </v-btn>
        </div>
        <div class="pt-1 white--text">
          <v-btn text class="white--text pa-0 ma-0"> Programs </v-btn>
        </div>
        <div class="pt-1 white--text">
          <v-btn text class="white--text pa-0 ma-0">
            Board Members
          </v-btn>
        </div>
        <div class="pt-1 white--text">
          <v-btn text class="white--text pa-0 ma-0"> Blog </v-btn>
        </div>
      </div>
      <div class="d-flex">
        <div>
            <v-btn icon color="white" large>
                <v-icon>mdi-instagram</v-icon>
            </v-btn>
        </div>
        <div>
            <v-btn icon color="white" large>
                <v-icon>mdi-youtube</v-icon>
            </v-btn>
        </div>
      </div>
    </v-container>
  </v-container>
</template>
<style>
.grey {
  background-color: #404040;
}
</style>
