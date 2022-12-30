<template>
  <fragment>
    <v-container class="about-bg white--text">
      <v-card rounded="lg" class="ma-5 pa-2">
        <v-card-title class="justify-center font-weight-bold pt-3 pb-0">
          Internship Form
        </v-card-title>
        <v-card-text>
          <v-stepper v-model="e1" class="elevation-0">
            <v-stepper-header class="elevation-0">
              <v-stepper-step :complete="e1 > 1" step="1" class="pl-3 py-3">
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step :complete="e1 > 2" step="2" class="py-3">
              </v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3" class="pr-3 py-3"></v-stepper-step>
            </v-stepper-header>

            <!-- PAGE 1 -->
            <v-stepper-items>
              <v-stepper-content step="1" class="pa-0">
                <v-divider class="divider"></v-divider>
                <div class="body-2 black--text my-2">
                  Be a Part of Sagara Foundation! <br />
                  Sagara Foundation have dedicated ourselves to making an impact
                  and bringing change to young people by leveraging the world of
                  technology. <br />
                  <br />
                  Be a part of the Sagara Foundation contributes to giving
                  social impact to many orphaned students and from
                  underprivileged families to realize their dreams as to be the
                  best digital talents and to be the best technopreneur. <br />
                  <br />
                  Let's be a support system with the Sagara Foundation to
                  support the beneficiaries!
                </div>
                <v-divider></v-divider>

                <div class="topic-text mt-5">Fill The Information</div>
                <v-divider class="divider"></v-divider>
                <RadioInput
                  :data="programs"
                  label="Which Suits You Best?"
                  v-model="internType"
                />

                <v-btn
                  color="#AE0D0D"
                  large
                  class="rounded-md white--text mt-5"
                  @click="e1 = 2"
                >
                  Next
                </v-btn>
              </v-stepper-content>

              <!-- PAGE 2 -->
              <v-stepper-content step="2" class="pa-0">
                <div class="topic-text">Please Tell Us About Yourself</div>
                <v-divider class="divider"></v-divider>

                <v-row>
                  <v-col cols="6" class="pb-0">
                    <BaseInput
                      label="Name"
                      placeholder="First Name"
                      v-model="firstName"
                    />
                  </v-col>
                  <v-col align-self="end" cols="6" class="pb-0">
                    <BaseInput
                      noLabel
                      placeholder="Last Name"
                      v-model="lastName"
                    />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6" class="py-0">
                    <BaseInput
                      label="Place Of Birth"
                      placeholder="Your Answer"
                      v-model="placeOfBirth"
                    />
                  </v-col>
                  <v-col cols="6" class="py-0">
                    <DateInput label="Date Of Birth" v-model="dateOfBirth" />
                  </v-col>
                  <v-col cols="6" class="py-0">
                    <RadioInput
                      :data="genders"
                      label="Gender"
                      v-model="gender"
                    />
                  </v-col>
                  <v-col cols="6" class="py-0">
                    <BaseInput
                      label="Phone Number"
                      placeholder="Your Answer"
                      v-model="phoneNumber"
                    />
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" class="pb-0">
                    <BaseInput
                      label="Address"
                      placeholder="Street Address"
                      v-model="address.street"
                    />
                  </v-col>
                  <v-col cols="6" class="py-0">
                    <BaseInput
                      noLabel
                      placeholder="City"
                      v-model="address.city"
                    />
                  </v-col>
                  <v-col cols="6" class="py-0">
                    <BaseInput
                      noLabel
                      placeholder="State/Province/Region"
                      v-model="address.state"
                    />
                  </v-col>
                  <v-col cols="6" class="pt-0">
                    <BaseInput
                      noLabel
                      placeholder="ZIP/Postal Code"
                      v-model="address.zip"
                    />
                  </v-col>
                  <v-col cols="6" class="pt-0">
                    <SelectInput
                      noLabel
                      :data="countries"
                      placeholder="Country"
                      v-model="address.country"
                    />
                  </v-col>
                </v-row>

                <div class="topic-text">Your Education & CV</div>
                <v-divider class="divider"></v-divider>
                <v-row>
                  <v-col cols="12" class="pb-0">
                    <BaseInput
                      label="Most Recent Degree/Education"
                      placeholder="Education"
                      v-model="education"
                    />
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <BaseInput
                      label="Major / Faculty"
                      placeholder="Major"
                      v-model="major"
                    />
                  </v-col>
                  <v-col cols="12" class="pt-0">
                    <div class="question-text">
                      CV<span class="required-q">*</span>
                    </div>
                    <v-file-input
                      label="Choose File"
                      v-model="choosenFile"
                      accept=".pdf"
                      chips
                      outlined
                    ></v-file-input>
                    <div class="caption black--text mb-5">
                      Only .pdf is allowed
                    </div>
                  </v-col>
                </v-row>

                <div class="topic-text">Your Available Date</div>
                <v-divider class="divider"></v-divider>
                <v-row>
                  <v-col cols="6" class="pb-0">
                    <DateInput label="Start" v-model="startDate" />
                  </v-col>
                  <v-col cols="6" class="pb-0">
                    <DateInput label="End" v-model="endDate" />
                  </v-col>
                </v-row>

                <v-btn
                  color="#BFBFBF"
                  large
                  class="rounded-md white--text mt-5 mr-2"
                  @click="e1 = 1"
                >
                  Back
                </v-btn>
                <v-btn
                  color="#AE0D0D"
                  large
                  class="rounded-md white--text mt-5"
                  @click="e1 = 3"
                >
                  Next
                </v-btn>
              </v-stepper-content>

              <!-- PAGE 3 -->
              <v-stepper-content step="3" class="pa-0">
                <div class="topic-text">Please Tell Us More</div>
                <v-divider class="divider"></v-divider>
                <RadioInput
                  :data="references"
                  label="How did you come across our Organization?"
                  v-model="reference"
                />

                <v-row>
                  <v-col cols="12">
                    <BaseInput
                      label="Have you volunteered before? If yes, where?"
                      placeholder="Your Answer"
                      v-model="volunteer"
                    />
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <AreaInput
                      label="What would you like to get from this volunteer job?"
                      placeholder="Your Answer"
                      v-model="question1"
                    />
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <AreaInput
                      label="Why do you choose to donate your time to Sagara
                  Foundation?"
                      placeholder="Your Answer"
                      v-model="question2"
                    />
                  </v-col>
                  <v-col cols="12" class="py-0">
                    <AreaInput
                      label="What do you feel you can contribute to the program?"
                      placeholder="Your Answer"
                      v-model="question3"
                    />
                  </v-col>
                </v-row>

                <v-btn
                  color="#BFBFBF"
                  large
                  class="rounded-md white--text mt-5 mr-2"
                  @click="e1 = 2"
                >
                  Back
                </v-btn>
                <v-btn
                  color="#AE0D0D"
                  large
                  class="rounded-md white--text mt-5"
                  @click="completed = true"
                >
                  Submit
                </v-btn>
                <CompleteModal v-model="completed" />
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card-text>
      </v-card>
    </v-container>
  </fragment>
</template>
<script>
import AreaInput from "../formComponents/AreaInput.vue";
import BaseInput from "../formComponents/BaseInput.vue";
import DateInput from "../formComponents/DateInput.vue";
import RadioInput from "../formComponents/RadioInput.vue";
import SelectInput from "../formComponents/SelectInput.vue";
import CompleteModal from "../formComponents/CompleteModal.vue";
import countries from "../../utils/countries.js";

export default {
  components: {
    AreaInput,
    BaseInput,
    DateInput,
    RadioInput,
    SelectInput,
    CompleteModal,
  },
  data() {
    return {
      e1: 1,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: {
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      },
      education: "",
      major: "",
      choosenFile: null,
      volunteer: "",
      question1: "",
      question2: "",
      question3: "",
      placeOfBirth: "",
      dateOfBirth: "",
      startDate: "",
      endDate: "",
      internType: "",
      gender: "",
      reference: "",
      completed: false,
      programs: [
        {
          name: "Internship (All Year Long)",
          value: "internship",
        },
        {
          name: "Summer Program (Oktober-December)",
          value: "summer",
        },
      ],
      genders: [
        {
          name: "Male",
          value: "male",
        },
        {
          name: "Female",
          value: "female",
        },
      ],
      references: [
        {
          name: "Sagara Foundation’s Website",
          value: "website",
        },
        {
          name: "Sagara Foundation’s Instagram",
          value: "instagram",
        },
        {
          name: "Sagara Foundation’s Youtube",
          value: "youtube",
        },
        {
          name: "Other Social Network (WA/Telegram/Line)",
          value: "other",
        },
        {
          name: "Friends",
          value: "friends",
        },
        {
          name: "Family",
          value: "family",
        },
      ],
      countries,
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
}
.divider {
  border-width: 2px !important;
  border-color: black !important;
  width: 100%;
  margin: auto;
  margin-bottom: 12px;
  margin-top: 8px;
}
.question-text {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 9px;
}
.required-q {
  color: #ae0d0d;
}
.topic-text {
  font-size: 18px;
  font-weight: 500;
}
</style>
