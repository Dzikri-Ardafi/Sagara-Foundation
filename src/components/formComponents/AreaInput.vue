<template>
  <fragment>
    <div v-if="!noLabel" class="label">
      {{ label }} <span v-if="isRequired" class="required">*</span>
    </div>
    <v-textarea
      :label="placeholder"
      :value="value"
      @input="updateValue($event)"
      :rows="rows"
      outlined
    ></v-textarea>
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
    placeholder: {
      type: String,
      default: "",
    },
    isRequired: {
      type: Boolean,
      default: true,
    },
    rows: {
      type: Number,
      default: 3,
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  emits: ["update:value"],
  methods: {
    updateValue(value) {
      this.$emit("input", value);
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
