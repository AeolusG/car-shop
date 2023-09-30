<template>
  <div class="wrapper">
    <div class="title">
      <h1>Vehicles</h1>
      <div class="number">{{ totalCount }}</div>
    </div>
    <div class="user">
      <button class="btn">
        <img src="../assets/images/Default.svg" alt="btn image" />
      </button>
      <div class="user-info">
        <img src="../assets/images/johndoe.svg" /> <span>John Doe</span>
      </div>
      <TheSelect
        :defaultOption="option"
        :options="optionsLang"
        @get-value="getValue"
      >
        <template v-slot:image>
          <img class="language-img" :src="setImage" alt="flag" />
        </template>
      </TheSelect>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalCount: {
      type: Number,
      default: null,
    },
  },
  setup() {
    let option = ref('En');

    const optionsLang = ref([
      { name: 'En' },
      { name: 'Pt' },
      { name: 'Us' },
      { name: 'De' },
    ]);

    function getValue(value) {
      option.value = value;
    }
    const setImage = computed(() => {
      return `/_nuxt/assets/images/${option.value}.svg`;
    });
    return {
      option,
      optionsLang,
      getValue,
      setImage,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/fonts/fonts.css';
.wrapper {
  margin-left: 260px;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px rgba(228, 228, 228, 1);
}
.title {
  display: flex;
  align-items: center;
  h1 {
    font-family: 'DMSans', sans-serif;
    font-size: 34px;
    font-weight: 700;
    margin: 20px 20px;
    color: rgba(41, 49, 72, 1);
  }
  .number {
    background-color: rgb(243, 246, 248);
    font-size: 15px;
    font-weight: 700;
    color: rgba(41, 49, 72, 0.8);
    font-family: 'DMSans', sans-serif;
    padding: 5px 14px;
    border-radius: 6px;
  }
}
.user {
  display: flex;
  .user-info {
    display: flex;
    align-items: center;
    margin-right: 40px;
    img {
      margin-right: 20px;
    }
    span {
      font-family: 'DMSans', sans-serif;
      font-size: 15px;
      font-weight: 500;
      color: rgba(41, 49, 72, 1);
    }
  }
  .btn {
    border: none;
    background: none;
    cursor: grab;
    margin-right: 40px;
  }
  .language-img {
    margin-right: 20px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .wrapper {
    margin-left: 100px;
    display: flex;
    justify-content: space-between;
    border-bottom: none;
  }
}
@media (max-width: 767px) {
  .wrapper {
    margin-left: 100px;
    display: flex;
    justify-content: space-between;
    border-bottom: none;
  }
}
</style>
