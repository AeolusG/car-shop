<template>
  <div class="select">
    <slot name="image"></slot>
    <div class="choice">
      <div class="chosen-item">{{ defaultOption }}</div>
      <div class="options" v-if="isVisible">
        <div
          class="option"
          @click="chooseOption(option.name), getValue(option.name)"
          v-for="option in options"
          :key="option.value"
        >
          {{ option.name }}
        </div>
      </div>
    </div>

    <button class="btn" @click="changeVisibility">
      <img src="../assets/images/chevron_down.svg" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: [],
    },
    defaultOption: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    chooseOption(option) {
      this.currentValue = option;
      this.isVisible = !this.isVisible;
    },

    changeVisibility() {
      this.isVisible = !this.isVisible;
    },
    getValue(option) {
      this.$emit('getValue', option);
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  background: none;
  cursor: grab;
}
.options {
  display: block;
  position: absolute;
  background-color: white;
  z-index: 1;
  width: 60px;
  margin-left: -10px;
}
.option {
  margin-bottom: 10px;
  padding-left: 10px;
}
.option:hover {
  background-color: rgba(228, 228, 228, 1);
  transition: 0.5s ease-out;
  cursor: grab;
}
.choice {
  display: block;
  margin-top: 5px;
  .chosen-item {
    margin-bottom: 10px;
  }
}
.select {
  display: flex;
  align-items: center;
  margin-right: 40px;
  font-family: 'DMSans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: rgba(41, 49, 72, 1);
  span {
    font-family: 'DMSans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: rgba(41, 49, 72, 1);
  }
}
</style>
