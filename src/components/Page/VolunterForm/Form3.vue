<template>
  <v-card class="mb-12" color="transparent" elevation="0" height="auto">
    <p class="subtitleInfo" style="">Please Tell Us More</p>
    <hr class="mb-5 garis" />
    <p class="bestOfYou">
      How did you come across our Organization?
      <span class="starRequired">*</span>
    </p>
    <v-radio-group dense class="ml-1">
      <v-radio label="Sagara Foundation's Website" value="website"></v-radio>
      <v-radio
        label="Sagara Foundation's Instagram"
        value="instagram"
      ></v-radio>
      <v-radio label="Sagara Foundation's Youtube" value="youtube"></v-radio>
      <v-radio
        label="Other Social Network (WA/Telegram/Line)"
        value="sosmed"
      ></v-radio>
      <v-radio label="Friend" value="friend"></v-radio>
      <v-radio label="Family" value="family"></v-radio>
    </v-radio-group>
    <div>
      <p class="bestOfYou">
        Have you volunteered before? If yes, where?
        <span class="starRequired">*</span>
      </p>
      <div class="px-5">
        <v-text-field
          color="green"
          outlined
          dense
          placeholder="Your Answer"
        ></v-text-field>
      </div>
    </div>

    <div>
      <p class="bestOfYou">
        What would you like to get from this volunteer job?
        <span class="starRequired">*</span>
      </p>
      <div class="px-5">
        <v-textarea
          color="green"
          outlined
          dense
          placeholder="Your Answer"
        ></v-textarea>
      </div>
    </div>

    <div>
      <p class="bestOfYou">
        Why do you choose to donate your time to Sagara Foundation?
        <span class="starRequired">*</span>
      </p>
      <div class="px-5">
        <v-textarea
          color="green"
          outlined
          dense
          placeholder="Your Answer"
        ></v-textarea>
      </div>
    </div>

    <div>
      <p class="bestOfYou">
        What do you feel you can contibute to the program?
        <span class="starRequired">*</span>
      </p>
      <div class="px-5">
        <v-textarea
          color="green"
          outlined
          dense
          placeholder="Your Answer"
        ></v-textarea>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Form3",
};
</script>
