<template>
  <v-dialog
    v-model="show"
    width="480px"
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card color="black" style="overflow-y: hidden; height: 100vh">
      <div style="margin-top: 10px">
        <v-toolbar color="black">
          <v-toolbar-items>
            <v-btn dark text @click="show = false" icon>
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-toolbar-items>
          <div class="search-input">
            <input
              type="text"
              class="search-input__inp"
              placeholder="Type Here.."
              v-model="searchText"
            />
            <v-icon v-if="searchText.length == 0">mdi-magnify</v-icon>
            <v-icon v-else @click.stop="searchText = ''">mdi-close</v-icon>
          </div>
          <v-toolbar-items>
            <v-btn dark text @click="showModal" @click.stop="show = false">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <div class="suggestion" v-if="searchText.length == 0">
          <div v-for="i in suggestion" v-bind:key="i" class="btn-group">
            <button>{{ i }}</button>
          </div>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    showModal: function () {
      this.dialog = true;
    },
  },
  data() {
    return {
      search: false,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      searchText: "",
      suggestion: [
        "Android Developer",
        "Website",
        "Charity",
        "Robotic Company Indonesia",
        "Beneficaries",
      ],
    };
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    hides() {
      this.show = false;
    },
  },
};
</script>

<style>
.head-bg {
  background-color: black !important;
  height: 80px !important;
}

.search-input {
  border: 1px solid white;
  border-radius: 1em;
  background-color: white;
  padding: 5px 15px;
  width: 100% !important;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.2em;
}

.back-arrow {
  height: 50px;
}

.search-input__inp {
  width: 80% !important;
}

.search-input:hover,
.search-input:focus,
.search-input__inp:hover,
.search-input__inp:focus {
  outline: none;
}

.suggestion {
  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;
  padding: 0px 30px;
  gap: 14px;
  margin-top: 10px;
}

.btn-group {
  display: flex;
  justify-content: stretch;
  flex-wrap: wrap;
  flex-grow: 1.2;
  flex-shrink: 1;
  background-color: #51b747;
  color: white;
  padding: 5px 15px;
  border-radius: 0.5em;
}

.btn-group button {
  width: 100%;
}
</style>
