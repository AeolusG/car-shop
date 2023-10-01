<template>
  <div v-if="isVisible" class="modal-window">
    <div class="modal-window__content">
      <button @click="closeModalWindowByCross" class="close-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      <form class="form">
        <label class="label">{{ name }}</label>
        <input class="input" type="text" :placeholder="name" />
        <label class="label"> {{ idInfo }}</label>
        <input class="input" type="text" :placeholder="idInfo" />
        <button type="button" @click="closeModalWindow" class="submit-button">
          ADD!
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: { type: Boolean, default: true },
    name: { type: String, default: null },
    idInfo: { type: String, default: null },
  },
  setup(props, { emit }) {
    let isShown = ref(true);
    function closeModalWindowByCross() {
      emit('closeModalWindowByCross');
    }
    function closeModalWindow() {
      emit('closeModalWindow');
    }

    return {
      closeModalWindow,
      closeModalWindowByCross,
      isShown,
    };
  },
};
</script>

<style scoped>
.modal-window {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
}

.modal-window__content {
  position: relative;
  display: flex;
  justify-content: right;
  flex-direction: column;

  width: 400px;
  min-height: 350px;

  background-color: #fff;
  color: #fff;
  border-radius: 15px;
}

.submit-button {
  margin-left: 100px;
  padding-left: 50px;
  padding: 10px 40px;

  background-color: rgb(217, 14, 50);
  background-repeat: no-repeat;
  border-radius: 10px;
  background-image: url('assets/images/plus.svg');
  background-position-y: center;
  background-position-x: 10px;
  box-shadow: 0px 8px 24px 0px rgba(217, 14, 50, 0.12);

  border: none;
  cursor: grab;

  font-family: 'DMSans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: rgb(255, 255, 255);
}
.form {
  padding: 40px;

  font-family: 'DMSans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(41, 49, 72, 0.8);
}
.label {
  display: block;
  margin-bottom: 20px;
}
.input {
  display: block;

  padding: 10px 10px;
  margin-bottom: 30px;
  width: 90%;

  border: 1px solid rgba(228, 228, 228, 1);
  border-radius: 8px;
}
.close-btn {
  margin-top: 10px;
  margin-right: 10px;

  cursor: pointer;
  border: none;
  background: none;
  color: rgba(41, 49, 72, 0.8);
  text-align: end;
}
.close-btn:hover {
  color: rgba(228, 228, 228, 1);
  transition: ease 0.7s;
}
</style>
