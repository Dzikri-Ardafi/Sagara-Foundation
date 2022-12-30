<template>
  <v-card class="mb-12" color="transparent" elevation="0" height="auto">
    <p class="subtitleInfo" style="">Fill The Information</p>
    <hr class="mb-5 garis" />
    <p class="bestOfYou">
      Which Suits You Best?
      <span class="starRequired">*</span>
    </p>
    <div class="checkbox ml-5">
      <v-radio-group dense>
        <v-radio label="Corporate / Professional" value="corporate"></v-radio>
        <v-radio label="Individual / Group" value="individu"></v-radio>
      </v-radio-group>
    </div>
    <p class="subtitleInfo">
      Number of Volunteer(s) / Group Size <span class="starRequired">*</span>
    </p>
    <hr class="garis mb-5" id="garis" style="" />
    <div class="px-5">
      <v-text-field outlined dense full-width color="green"></v-text-field>
      <div class="infoIndividual">
        <p>If you are here for individual voluntering</p>
        <p>activities, please answer 1</p>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Form1",
};
</script>

<style>
.subtitleInfo {
  font-size: 17px;
  font-weight: 500;
}
.garis {
  border-width: 1px;
  border-color: black;
  background-color: black;
  margin-top: -0.5em;
}
.infoIndividual {
  margin-top: -1em;
  color: rgb(145, 145, 145);
  font-size: 13px;
  line-height: 3px;
}
span.starRequired {
  color: red;
}
.bestOfYou {
  font-weight: 500;
  font-size: 15px;
}
</style>
