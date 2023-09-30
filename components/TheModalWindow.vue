<template>
  <div class="modal-window">
    <div class="modal-window__content">
      <form class="form">
        <label class="label">Enter the name of the vehicle</label>
        <input class="input" type="text" placeholder="Enter the name" />
        <label class="label">Enter VIN</label>
        <input class="input" type="text" placeholder="Enter VIN" />
        <button type="button" @click="closeModalWindow" class="submit-button">
          ADD!
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  setup({ emit }) {
    let isVisible = ref(false);

    function closeModalWindow() {
      // не емитится
      emit('closeModalWindow');
    }

    return {
      closeModalWindow,
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

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
}

.modal-window__content {
  position: relative;

  width: 400px;
  min-height: 350px;

  background-color: #fff;
  color: #fff;
  border-radius: 15px;
}

.submit-button {
  border: none;
  background-color: rgb(217, 14, 50);
  background-repeat: no-repeat;
  border-radius: 10px;
  background-image: url('assets/images/plus.svg');
  box-shadow: 0px 8px 24px 0px rgba(217, 14, 50, 0.12);
  font-family: 'DMSans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  color: rgb(255, 255, 255);
  padding: 10px 40px;
  background-position-y: center;
  background-position-x: 10px;
  cursor: grab;
  margin-left: 100px;
  padding-left: 50px;
}
.form {
  font-family: 'DMSans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(41, 49, 72, 0.8);
  padding: 40px;
}
.label {
  display: block;
  margin-bottom: 20px;
}
.input {
  display: block;
  margin-bottom: 30px;
  border: 1px solid rgba(228, 228, 228, 1);
  border-radius: 8px;
  padding: 10px 10px;
  width: 90%;
}
</style>
