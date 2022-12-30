<template>
  <fragment>
    <div v-if="!noLabel" class="label">
      {{ label }} <span v-if="isRequired" class="required">*</span>
    </div>
    <v-radio-group :value="value" @change="updateValue($event)">
      <v-radio
        v-for="(item, i) in data"
        :label="item.name"
        :value="item.value"
        :key="i"
      ></v-radio>
    </v-radio-group>
  </fragment>
</template>

<script>
export default {
  props: {
    noLabel: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default: [],
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
