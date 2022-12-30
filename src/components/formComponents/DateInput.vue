<template>
  <fragment>
    <div v-if="!noLabel" class="label">
      {{ label }} <span v-if="isRequired" class="required">*</span>
    </div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      max-width="290px"
      min-width="auto"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="selected"
          v-on:input="$emit('input', $event)"
          v-on="on"
          @blur="date = parseDate(value)"
          label="yyyy/mm/dd"
          append-icon="mdi-calendar-month-outline"
          outlined
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="selected"
        no-title
        @input="menu = false"
      ></v-date-picker>
    </v-menu>
  </fragment>
</template>

<script>
export default {
  props: {
    noLabel: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    isRequired: {
      type: Boolean,
      default: true,
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      menu: false,
      date: null,
    };
  },
  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
  watch: {
    date(val) {
      this.value = this.formatDate(this.date);
    },
  },
};
</script>

<style scoped>
.label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 9px;
}
.required {
  color: #ae0d0d;
}
</style>
