<template>
  <v-container class="d-flex white">
    <v-container class="mt-5">
      <div class="d-flex">
        <div class="pt-2 mr-auto green--text">
          <h1>Our Donors</h1>
        </div>
        <div class="pt-2">
          <v-btn icon color="white" x-large>
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="d-flex text-justify">
        <div>
          Here are the few heroes for our community this month, thank you donors
          for the constant contribution & support for Sagara. Are you ready to
          be a part of our wonderful donors?
        </div>
      </div>
      <div class="d-flex pt-5">
        <div class="pr-2 align-self-center">
          <v-img src="@/assets/sagaraLogo.png" max-width="150px"></v-img>
        </div>
        <div class="pl-2 align-self-center text-justify">
          <p>
            Sagara Technology contributed and supports by providing two units of
            laptops as learning media and operational funds for activities every
            week.
          </p>
        </div>
      </div>
      <div class="d-flex pt-5">
        <div class="pr-2 align-self-center">
          <v-img src="@/assets/agate.png" max-width="150px" max-height="200px"></v-img>
        </div>
        <div class="pl-2 align-self-center text-justify">
          <p>
            Agate contributed and support by providing four units of laptops and two personal computers (PCs) as learning media for the Sagara Foundation class.
          </p>
        </div>
      </div>
    </v-container>
  </v-container>
</template>
<style scoped>
.white {
  background-color: #ffffff;
}
</style>
