<template>
  <v-container class="d-flex black white--text">
    <v-container class="mt-5">
      <div class="d-flex">
        <div class="pt-2 mr-auto">
          <h1>Sagara Foundation</h1>
        </div>
        <div class="pt-2">
          <v-btn icon color="white" x-large @click="gotos()">
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="d-flex pb-5 text-justify">
        <div>
          Sagara Foundation is the Corporate Social Responsibility of Sagara
          Technology aims to support orphaned students and those from
          underprivileged families to be the best digital talents and to be the
          best technopreneur.
        </div>
      </div>
      <div class="pt-5">
        <v-img src="@/assets/program/tech.png" max-height="250px"></v-img>
      </div>
      <div class="d-flex pt-5 text-justify">
        <p>Beneficiaries in part of taking action for our future, thats provides free digital education classes for orphand students.</p>
      </div>
    </v-container>
  </v-container>
</template>
<script>
import router from '@/router'
export default {
  methods: {
    gotos(){
      router.push('/program')
    }
  }
}
</script>
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
