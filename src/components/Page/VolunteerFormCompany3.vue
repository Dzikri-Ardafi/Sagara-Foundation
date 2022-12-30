<template>
  <form class="form">
    <div class="title">Volunteer Form</div>
    <div class="progressBar">
      <h5>Step 3 of 3</h5>
      <div class="bar">
        <div class="progress">66%</div>
      </div>
    </div>
    <div class="form-input">
      <div class="form-input__title">
        <h3>Please Tell Us More</h3>
      </div>
      <div class="input">
        <label for="radio-btn" class="h4 required"
          >How did you come across our Organization?</label
        >
        <fieldset id="radio-btn" class="radio-btn">
          <div class="h4 radio-btn__inp" style="font-weight: 400">
            <input
              id="r1"
              type="radio"
              value="Sagara Foundation's Website"
              name="radio-btn"
              v-model="comeAcross"
              required
            />
            <label for="r1">Sagara Foundation's Website</label>
          </div>
          <div class="h4 radio-btn__inp" style="font-weight: 400">
            <input
              id="r2"
              type="radio"
              value="Sagara Foundation’s Instagram"
              name="radio-btn"
              v-model="comeAcross"
              required
            />
            <label for="r2">Sagara Foundation’s Instagram</label>
          </div>
          <div class="h4 radio-btn__inp" style="font-weight: 400">
            <input
              id="r3"
              type="radio"
              value="Sagara Foundation’s Youtube"
              name="radio-btn"
              v-model="comeAcross"
              required
            />
            <label for="r3">Sagara Foundation’s Youtube</label>
          </div>
          <div class="h4 radio-btn__inp" style="font-weight: 400">
            <input
              id="r4"
              type="radio"
              value="Other Social Network (WA/Telegram/Line)"
              name="radio-btn"
              v-model="comeAcross"
              required
            />
            <label for="r4">Other Social Network (WA/Telegram/Line)</label>
          </div>
          <div class="h4 radio-btn__inp" style="font-weight: 400">
            <input
              id="r5"
              type="radio"
              value="Friends"
              name="radio-btn"
              v-model="comeAcross"
              required
            />
            <label for="r5">Friends</label>
          </div>
          <div class="h4 radio-btn__inp" style="font-weight: 400">
            <input
              id="r6"
              type="radio"
              value="Family"
              name="radio-btn"
              v-model="comeAcross"
              required
            />
            <label for="r6">Family</label>
          </div>
        </fieldset>
      </div>
      <div class="input">
        <label for="volunteered" class="h4 required"
          >Have you volunteered before? If yes, where?</label
        >
        <input
          id="volunteered"
          type="text"
          placeholder="Your Answer"
          v-model="haveVolunteered"
          required
        />
      </div>
      <div class="input">
        <label for="getfromvolunteer" class="h4 required"
          >What would you like to get from this volunteer job?</label
        >
        <textarea
          id="getfromvolunteer"
          type="text"
          rows="3"
          placeholder="Your Answer"
          v-model="getFrom"
          required
        />
      </div>
      <div class="input">
        <label for="donateyourtime" class="h4 required"
          >Why do you choose to donate your time to Sagara Foundation?</label
        >
        <textarea
          id="donateyourtime"
          type="text"
          rows="3"
          placeholder="Your Answer"
          v-model="chooseToDonate"
          required
        />
      </div>
      <div class="input">
        <label for="feeling" class="h4 required"
          >What do you feel you can contibute to the program?</label
        >
        <textarea
          id="feeling"
          type="text"
          rows="3"
          placeholder="Your Answer"
          v-model="canContribute"
          required
        />
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
export default {
  data() {
    return {
      comeAcross: "",
      haveVolunteered: "",
      getFrom: "",
      chooseToDonate: "",
      canContribute: "",
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    validateForm() {
      if (
        this.comeAcross != "" &&
        this.haveVolunteered != "" &&
        this.getFrom != "" &&
        this.chooseToDonate != "" &&
        this.canContribute != ""
      ) {
        return true;
      }
      return false;
    },
    nextHandler() {
      if(this.validateForm()) {
        event.preventDefault();
        this.$emit("nextHandler", "4");
      }
    },
    prevHandler() {
      this.$emit("nextHandler", "2");
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
  width: 100%;
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
.input textarea {
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
.input input:hover,
.input textarea:focus,
.input textarea:hover {
  border: 1px solid #51b747;
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
