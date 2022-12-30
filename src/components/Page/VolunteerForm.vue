<template>
  <fragment>
    <v-container class="justify-center d-flex flex-column about-bg white--text">
      <v-container>
        <form class="form">
          <div class="title">Volunteer Form</div>
          <div class="progressBar">
            <h5>Step 1 of 3</h5>
            <div class="bar">
              <div class="progress">33%</div>
            </div>
          </div>
          <div class="form-input" style="width: 100%">
            <div class="form-input__title">
              <h3>Fill the Information</h3>
            </div>
            <div class="input">
              <label for="radio-btn" class="h4 required"
                >Which Suits You Best</label
              >
              <fieldset id="radio-btn" class="radio-btn">
                <div class="h4 radio-btn__inp" style="font-weight: 400">
                  <input
                    id="r1"
                    type="radio"
                    value="Corporate"
                    name="radio-btn"
                    v-model="option"
                    checked="checked"
                    required
                  />
                  <label for="r1">Corporate/ Professional</label>
                </div>
                <div class="h4 radio-btn__inp" style="font-weight: 400">
                  <input
                    id="r2"
                    type="radio"
                    value="Individual"
                    name="radio-btn"
                    v-model="option"
                    required
                  />
                  <label for="r2">Individual/ Group</label>
                </div>
              </fieldset>
            </div>
            <div v-if="option == 'Corporate'">
              <div class="input">
                <label for="company-name" class="h4 required"
                  >Company Name</label
                >
                <input
                  id="company-name"
                  type="text"
                  v-model="companyName"
                  required
                />
              </div>
              <div class="input">
                <label for="job-title" class="h4 required">Job Title</label>
                <input id="job-title" type="text" v-model="jobTitle" required />
              </div>
            </div>
            <div class="input">
              <label for="number-of-volunteer" class="h4 required"
                >Number of Volunteer(s)/ Group Size</label
              >
              <input
                id="number-of-volunteer"
                type="number"
                min="0"
                v-model="groupSize"
                required
              />
              <p class="h5">
                If you are here for individual voluntering activities, please
                answer 1
              </p>
            </div>
            <div class="input input-btn">
              <button @click="redirectToVolunteerFormCompany()">Next</button>
              <p class="h5 underline">Save and Continue Later</p>
            </div>
          </div>
        </form>
      </v-container>
    </v-container>
  </fragment>
</template>

<script>
export default {
  data() {
    return {
      option: "Corporate",
      companyName: "",
      jobTitle: "",
      groupSize: "",
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    validateForm() {
      if (
        this.option != "" &&
        this.companyName != "" &&
        this.jobTitle != "" &&
        this.groupSize != ""
      ) {
        return true;
      }

      return false;
    },
    redirectToVolunteerFormCompany() {
      if (this.option === "Corporate" && this.validateForm()) {
        return this.$router.push("/volunteer/form-company");
      } else if (this.option != "Corporate") {
        this.$router.push("/volunteer-individual");
        window.location.reload();
      }
    },
  },
};
</script>

<style scoped>
h3,
.h3 {
  font-size: 16px;
}

h4,
.h4 {
  font-size: 14px;
  font-weight: 700;
}

h5,
.h5 {
  font-size: 12px;
}

.container {
  width: 100%;
}

.form {
  background-color: #fff;
  border-radius: 0.5em;
  color: black;
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.title {
  text-align: center;
  font-size: 20px !important;
  font-weight: 800;
}

.progressBar {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: white;
  font-size: 7px;
}

.progressBar h5 {
  color: #b5b5b5;
}

.bar,
.progress {
  height: 8px;
  border-radius: 0.5em;
  background-color: #d9d9d9;
}

.progress {
  display: flex;
  flex-direction: row;
  width: 33%;
  background-color: #51b747 !important;
  padding: 0 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.form-input {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-input__title {
  border-bottom: 2px solid black;
}

.input {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input input {
  outline: none;
  border: 1px solid #c4c4c4;
  border-radius: 0.3em;
  font-size: 14px;
  padding: 5px 15px;
  color: black;
  margin-left: 15px;
  caret-color: black !important;
}

.required::after {
  content: " *";
  color: #ae0d0d;
}

.radio-btn__inp {
  display: flex;
  gap: 7px;
}

input[type="radio"]:checked {
  accent-color: #51b747;
  background-color: white;
  color: white;
}

.radio-btn {
  border: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-start;
}

.input p {
  margin-left: 15px;
  width: 80%;
  margin-bottom: 0;
}

.input input:focus,
.input input:hover {
  border: 1px solid #51b747;
  color: black;
}

.input-btn {
  flex-direction: row !important;
  align-items: center;
}

.input-btn button {
  color: white;
  padding: 8px 16px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 0.3em;
  background-color: #ae0d0d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 35px 0px 35px 15px;
}

.underline {
  text-decoration: underline;
}
</style>
