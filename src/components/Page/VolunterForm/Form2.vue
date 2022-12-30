<template>
  <v-card class="mb-12" color="transparent" height="auto" elevation="0">
    <p class="subtitleInfo">Please Tell Us About Yourself</p>
    <hr class="mb-5 garis" />
    <!-- nameform -->
    <p class="bestOfYou">Name <span class="starRequired">*</span></p>
    <v-row>
      <v-col cols="6">
        <v-text-field
          color="green"
          class="ml-3"
          dense
          outlined
          placeholder="First Name"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field
          color="green"
          class="mr-3"
          dense
          outlined
          placeholder="Last Name"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- birthForm -->
    <v-row style="margin-top: -1em">
      <v-col cols="6">
        <p class="bestOfYou">
          Place Of Birth <span class="starRequired">*</span>
        </p>
        <v-text-field
          color="green"
          class="ml-3"
          dense
          outlined
          placeholder="Your Answer"
        ></v-text-field>
      </v-col>
      <v-col cols="6">
        <p class="bestOfYou">Date Of Birth</p>
        <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="date"
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              class="mr-3"
              color="green"
              placeholder="dd/mm/yyyy"
              append-icon="mdi-calendar"
              outlined
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(date)">
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
    </v-row>

    <!-- genderPhoneNumber -->
    <v-row style="margin-top: -1em">
      <v-col cols="6">
        <p class="bestOfYou">Gender <span class="starRequired">*</span></p>

        <v-radio-group dense>
          <div class="d-flex mt-1 justify-space-around">
            <div>
              <v-radio value="male" label="Male"></v-radio>
            </div>
            <div>
              <v-radio value="female" label="Female"></v-radio>
            </div>
          </div>
        </v-radio-group>
      </v-col>
      <v-col cols="6">
        <p class="bestOfYou">
          Phone Number <span class="starRequired">*</span>
        </p>
        <v-text-field
          color="green"
          class="mr-3"
          dense
          outlined
          placeholder="Your Answer"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- adress -->
    <div style="margin-top: -1em">
      <p class="bestOfYou">Address <span class="starRequired">*</span></p>
      <div class="px-3">
        <v-text-field color="green" outlined dense></v-text-field>
        <p class="infoAddress">Street Addres</p>
      </div>
      <v-row class="px-3">
        <v-col cols="6">
          <v-text-field color="green" dense outlined></v-text-field>
          <p class="infoAddress">City</p>
        </v-col>
        <v-col cols="6">
          <v-text-field color="green" dense outlined></v-text-field>
          <p class="infoAddress">Street/Province/Region</p>
        </v-col>
      </v-row>
      <v-row class="px-3" style="margin-top: -1px">
        <v-col cols="6">
          <v-text-field color="green" dense outlined></v-text-field>
          <p class="infoAddress">ZIP/Postcal Code</p>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            color="green"
            :item-text="name"
            :items="items"
            style="margin-top: -0.3em"
          ></v-autocomplete>
          <p class="infoAddressCountry">Country</p>
        </v-col>
      </v-row>
    </div>

    <!-- education dan CV -->
    <p class="subtitleInfo" style="">Your Education & CV</p>
    <hr class="mb-5 garis" />
    <div class="px-5">
      <p class="bestOfYou" style="margin-top: -0.5em">
        Most Recent Degree/Education <span class="starRequired">*</span>
      </p>
      <v-text-field
        color="green"
        style="margin-top: -0.5em"
        outlined
        dense
      ></v-text-field>
    </div>
    <div class="px-5">
      <p class="bestOfYou" style="margin-top: -0.5em">
        Major / Faculty <span class="starRequired">*</span>
      </p>
      <v-text-field
        color="green"
        style="margin-top: -0.5em"
        outlined
        dense
      ></v-text-field>
    </div>
    <div class="px-5">
      <p class="bestOfYou" style="margin-top: -0.5em">
        CV <span class="starRequired">*</span>
      </p>
      <v-file-input
        color="green"
        style="margin-top: -0.5em"
        placeholder="Upload CV"
        outlined
        dense
      ></v-file-input>
    </div>
    <p class="subtitleInfo" style="">Your Available Date</p>
    <hr class="mb-5 garis" />
    <v-row class="px-5">
      <v-col cols="6">
        <p class="bestOfYou">Start <span class="starRequired">*</span></p>
        <v-dialog
          ref="dialog"
          v-model="modal1"
          :return-value.sync="date"
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              color="green"
              placeholder="dd/mm/yyyy"
              append-icon="mdi-calendar"
              outlined
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date1" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal1 = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(date1)">
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col cols="6">
        <p class="bestOfYou">End <span class="starRequired">*</span></p>
        <v-dialog
          ref="dialog"
          v-model="modal2"
          :return-value.sync="date2"
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              color="green"
              placeholder="dd/mm/yyyy"
              append-icon="mdi-calendar"
              outlined
              dense
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal2 = false"> Cancel </v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(date2)">
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Form2",
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    date1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    modal: false,
    modal1: false,
    modal2: false,
  }),
};
</script>

<style>
.infoAddress {
  margin-top: -2.75em;
  font-size: 9px;
  font-weight: 400;
  color: rgb(116, 116, 116);
}
.infoAddressCountry {
  margin-top: -2.3em;
  font-size: 9px;
  font-weight: 400;
  color: rgb(116, 116, 116);
}
</style>
