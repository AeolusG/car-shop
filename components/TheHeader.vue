<template>
  <div class="wrapper">
    <div class="title">
      <h1>Vehicles</h1>
      <div class="number">{{ totalCount }}</div>
    </div>
    <div class="user">
      <button @click="changeVisibility" class="btn">
        <img src="../assets/images/Default.svg" alt="btn image" />
      </button>
      <TheModalWindow
        :isVisible="isVisible"
        :name="userInfo"
        :idInfo="idInfo"
        @close-modal-window="changeVisibility(isVisible)"
        @close-modal-window-by-cross="changeVisibility(isVisible)"
        v-if="isVisible"
      />
      <div class="user-info">
        <img src="../assets/images/johndoe.svg" /> <span>John Doe</span>
      </div>
      <TheSelect
        :defaultOption="option"
        :options="optionsLang"
        @get-value="getValue"
      >
        <template v-slot:image>
          <img
            v-if="option.name === 'En'"
            class="language-img"
            src="../assets/images/En.svg"
            alt="flag"
          />
          <img
            v-if="option.name === 'De'"
            class="language-img"
            src="../assets/images/De.svg"
            alt="flag"
          />
          <img
            v-if="option.name === 'Pt'"
            class="language-img"
            src="../assets/images/Pt.svg"
            alt="flag"
          />
          <img
            v-if="option.name === 'Us'"
            class="language-img"
            src="../assets/images/Us.svg"
            alt="flag"
          />
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
    let isVisible = ref(false);
    const userInfo = "Enter the user's name";
    const idInfo = "Enter the user's id";

    function changeVisibility() {
      isVisible.value = !isVisible.value;
    }

    return {
      option,
      optionsLang,
      getValue,
      setImage,
      changeVisibility,
      isVisible,
      userInfo,
      idInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/fonts/fonts.css';
.wrapper {
  display: flex;
  justify-content: space-between;

  margin-left: 260px;

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
    padding: 5px 14px;

    background-color: rgb(243, 246, 248);

    font-size: 15px;
    font-weight: 700;
    color: rgba(41, 49, 72, 0.8);
    font-family: 'DMSans', sans-serif;

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
    margin-right: 40px;

    border: none;
    background: none;
    cursor: grab;
  }
  .btn:hover {
    opacity: 0.5;
  }
  .language-img {
    margin-right: 20px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .wrapper {
    display: flex;
    justify-content: space-between;

    margin-left: 100px;

    border-bottom: none;
  }
}
@media (max-width: 767px) {
  .wrapper {
    display: flex;
    justify-content: space-between;

    margin-left: 100px;

    border-bottom: none;
  }
}
</style>
