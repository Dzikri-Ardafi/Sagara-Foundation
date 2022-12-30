<template>
  <form class="form">
    <div class="title">Volunteer Form</div>
    <div class="progressBar">
      <h5>Step 2 of 3</h5>
      <div class="bar">
        <div class="progress">66%</div>
      </div>
    </div>
    <div class="form-input">
      <div class="form-input__title">
        <h3>Please Tell Us About Yourself</h3>
      </div>
      <div class="input">
        <label for="name" class="h4 required">Name</label>
        <div class="input-row">
          <div class="input-row__field">
            <input
              id="name"
              type="text"
              placeholder="First Name"
              v-model="firstName"
              required
            />
          </div>
          <div class="input-row__field">
            <input
              id="name2"
              type="text"
              placeholder="Last Name"
              v-model="lastName"
              required
            />
          </div>
        </div>
      </div>
      <div class="input">
        <label for="place-of-birth" class="h4 required">Place Of Birth</label>
        <div class="input-row">
          <div class="input-row__field">
            <input
              id="place-of-birth"
              type="text"
              placeholder="Your Answer"
              v-model="placeOfBirth"
              required
            />
          </div>
          <div class="input-row__field">
            <label for="date-of-birth" class="h4 required alt-label"
              >Date of Birth</label
            >
            <input
              id="date-of-birth"
              type="date"
              v-model="dateOfBirth"
              required
            />
          </div>
        </div>
      </div>
      <div class="input">
        <label for="gender" class="h4 required">Gender</label>
        <div class="input-row">
          <div class="input-row__field">
            <fieldset id="radio-btn" class="radio-btn">
              <div class="h4 radio-btn__inp" style="font-weight: 400">
                <input
                  id="r1"
                  type="radio"
                  value="Male"
                  name="radio-btn"
                  v-model="gender"
                  required
                />
                <label for="r1">Male</label>
              </div>
              <div class="h4 radio-btn__inp" style="font-weight: 400">
                <input
                  id="r2"
                  type="radio"
                  value="Female"
                  name="radio-btn"
                  v-model="gender"
                  required
                />
                <label for="r2">Female</label>
              </div>
            </fieldset>
          </div>
          <div class="input-row__field">
            <label for="phone-number" class="h4 required alt-label"
              >Phone Number</label
            >
            <input
              id="phone-number"
              type="input"
              placeholder="Your Answer"
              v-model="phoneNumber"
              required
            />
          </div>
        </div>
      </div>
      <div class="input">
        <label for="name" class="h4 required">Address</label>
        <div class="input-row" style="gap: 5px">
          <div class="input-row__field">
            <input
              id="name"
              type="text"
              v-model="streetAddress"
              required
              style="margin-left: 20px"
            />
            <label for="name" class="h5">Street Address</label>
          </div>
        </div>
        <div class="input-row" style="gap: 5px">
          <div class="input-row__field">
            <input id="city" type="text" v-model="city" required />
            <label for="city" class="h5">City</label>
          </div>
          <div class="input-row__field">
            <input id="state" type="text" v-model="state" required />
            <label for="state" class="h5">State/Province/Region</label>
          </div>
        </div>
        <div class="input-row" style="gap: 5px">
          <div class="input-row__field">
            <input id="zip" type="text" v-model="zip" required />
            <label for="zip" class="h5">ZIP/Postcal Code</label>
          </div>
          <div class="input-row__field">
            <div>
              <select
                id="country"
                name="country"
                v-model="country"
                class="select-input"
                required
              >
                <option v-for="i in countries" :key="i" :value="i">
                  {{ i }}
                </option>
              </select>
              <label for="country" class="h5">Country</label>
              <div class=""></div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-input__title">
        <h3>Your Avaible Date</h3>
      </div>
      <div class="input">
        <label for="start" class="h4 required">Start</label>
        <div class="input-row" style="gap: 5px">
          <div class="input-row__field">
            <input id="start" type="date" v-model="start" required />
          </div>
          <div class="input-row__field">
            <label for="end" class="h4 required alt-label">End</label>
            <input id="end" type="date" required v-model="end" />
          </div>
        </div>
      </div>
      <div class="input input-btn">
        <button @click.prevent="prevHandler" class="back-btn">Back</button>
        <button @click="nextHandler">Next</button>
        <p class="h5 underline">Save and Continue Later</p>
      </div>
    </div>
  </form>
</template>

<script>
import countries from "../../utils/countries.js";
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      placeOfBirth: "",
      dateOfBirth: "",
      gender: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      start: "",
      end: "",
      countries: countries,
    };
  },
  methods: {
    validateForm() {
      if (
        this.firstName != "" &&
        this.lastName != "" &&
        this.placeOfBirth != "" &&
        this.dateOfBirth != "" &&
        this.gender != "" &&
        this.phoneNumber != "" &&
        this.streetAddress != "" &&
        this.city != "" &&
        this.state != "" &&
        this.zip != "" &&
        this.country != "" &&
        this.start != "" &&
        this.end != ""
      ) {
        return true;
      }
      return false;
    },
    nextHandler() {
      if (this.validateForm()) {
        event.preventDefault();
        this.$emit("nextHandler", "3");
      }
    },
    prevHandler() {
      return this.$router.push("/volunteer/form");
    },
  },
};
</script>

<style scoped>
.select {
  margin: 0;
}
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
  width: 66%;
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
  width: 100%;
}

.input-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-left: 20px;
  width: cacl(100% - 20px);
}

.input-row__field {
  position: relative;
  width: 100%;
}

.alt-label {
  position: absolute;
  top: -26px;
}

.input-row__field input {
  width: 100%;
  margin-left: 0 !important;
}

.input input,
.select-input {
  outline: none;
  border: 1px solid #c4c4c4;
  border-radius: 0.3em;
  font-size: 14px;
  padding: 5px 15px;
  color: black;
  margin-left: 15px;
  caret-color: black !important;
}

.select-input {
  margin: 0;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  border-radius: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml; utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50"><polygon points="0,0 100,0 50,50" style="fill:%2351b747" /></svg>');
  background-position: right 20px top 50%;
  background-repeat: no-repeat;
  background-size: 10px;
  padding-right: 15px;
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
  flex-direction: row;
  gap: 15px;
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
}

.select-input:hover,
.select-input:focus {
  border-bottom: 1px solid #51b747;
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

.back-btn {
  background-color: #00000040 !important;
}
</style>
