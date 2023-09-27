<template>
  <TheNavigation />
  <TheHeader />
  <div class="content-wrapper">
    <div class="search-wrapper">
      <div class="divider">
        <div class="input-wrapper">
          <input type="text" placeholder="Search VIN" />
        </div>
        <div class="select-wrapper">
          <div class="text">Select vehicles per page:</div>
          <TheSelect class="select" :options="options" @get-value="getNumber" />
        </div>
      </div>
      <button class="button">ADD VEHICLE</button>
    </div>
    <div class="cards-container">
      <TheCard v-for="time in times" :key="time.value" />
    </div>
    <div class="content-footer">
      <div class="footer-info">Showing {{ times }} out of 256</div>
      <div class="pagination">
        <img src="./assets/images/chevron_left.svg" />
        <p class="first-page">1</p>
        <p>of</p>
        <p class="last-page">28</p>
        <img src="./assets/images/chevron_right.svg" />
      </div>
    </div>
  </div>
</template>

<script setup>
let times = ref(3);

const options = ref([{ name: 3 }, { name: 6 }, { name: 9 }, { name: 12 }]);
function getNumber(value) {
  times.value = value;
}
</script>

<style lang="scss" scoped>
@import 'assets/fonts/fonts.css';
.content-wrapper {
  margin-left: 300px;
  margin-top: 30px;
  margin-right: 30px;
  position: relative;
}
.search-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.select-wrapper {
  display: flex;
  font-family: 'DMSans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(41, 49, 72, 1);

  align-items: center;
}
.select {
  border: 1px solid rgba(228, 228, 228, 1);
  border-radius: 8px;
  padding-left: 10px;
}
.divider {
  display: flex;
  margin-bottom: 30px;
}
.input-wrapper {
  margin-right: 20px;
}
input {
  background-image: url('assets/images/zoom.svg');
  background-repeat: no-repeat;
  background-position-y: center;
  background-position: 280px;
  border: 1px solid rgba(228, 228, 228, 1);
  border-radius: 8px;
  padding: 10px 10px;
  width: 300px;
  outline: none;
}
input::placeholder {
  font-family: 'DMSans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgba(41, 49, 72, 0.8);
}
.text {
  margin-right: 10px;
}
.button {
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
  margin-bottom: 30px;
  cursor: grab;
}
.cards-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.content-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-info {
  font-family: 'DMSans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: rgba(41, 49, 72, 0.8);
}
.pagination {
  display: flex;
  font-family: 'DMSans', sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  p {
    margin-right: 5px;
    padding: 1px 8px;
  }
  img {
    margin-right: 5px;
  }
  .first-page {
    border: solid 1px rgba(228, 228, 228, 1);
    border-radius: 6px;
  }
  .last-page {
    border: solid 1px rgba(228, 228, 228, 1);
    border-radius: 6px;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .content-wrapper {
    margin-left: 160px;
    margin-top: 30px;
    margin-right: 30px;
    position: relative;
  }
  input {
    background-image: url('assets/images/zoom.svg');
    background-repeat: no-repeat;
    background-position-y: center;
    background-position: 280px;
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 8px;
    padding: 10px 10px;
    width: 160px;
    outline: none;
  }
  .button {
    margin-inline: auto;
  }
  .search-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
@media (max-width: 768px) {
  .content-wrapper {
    margin-left: 250px;
    margin-top: 30px;
    margin-right: 30px;
    position: relative;
  }
  input {
    background-image: url('assets/images/zoom.svg');
    background-repeat: no-repeat;
    background-position-y: center;
    background-position: 280px;
    border: 1px solid rgba(228, 228, 228, 1);
    border-radius: 8px;
    padding: 10px 10px;
    width: 160px;
    outline: none;
  }
  .button {
    margin-inline: auto;
  }
  .search-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .divider {
    display: flex;
    margin-bottom: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .input-wrapper {
    margin-right: 20px;
    margin-bottom: 30px;
  }
  .select-wrapper {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
