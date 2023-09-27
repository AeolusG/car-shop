<template>
  <div class="card-wrapper">
    <div class="dots">
      <button>
        <img src="../assets/images/dot.svg" />
        <img src="../assets/images/dot.svg" />
        <img src="../assets/images/dot.svg" />
      </button>
    </div>
    <img src="../assets/images/mersedes 1.png" />
    <h2 class="card-title">Mercedes-Benz C-Class</h2>
    <h3 class="card-subtitle">WDB 1400321A333419</h3>
    <div class="divider"></div>
    <div class="card-footer">
      <div class="count">
        <img src="../assets/images/Vector.svg" />
        <p>30/30</p>
      </div>
      <div class="remain">3 days left</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  background: rgba(243, 246, 248, 1);
  border-radius: 10px;
  width: fit-content;
  padding: 30px 30px 10px 35px;
  margin-bottom: 30px;
}
.card-title {
  font-family: 'DMSans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;
  color: rgba(41, 49, 72, 1);
}
.card-subtitle {
  font-family: 'DMSans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
  color: rgba(41, 49, 72, 0.6);
}
.divider {
  border-bottom: solid 1px rgba(228, 228, 228, 1);
  margin-bottom: 15px;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.count {
  font-family: 'DMSans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  color: rgba(127, 199, 94, 1);
  background-color: rgba(228, 245, 221, 1);
  border-radius: 6px;
  display: flex;
  padding: 5px 10px;
  img {
    margin-right: 10px;
  }
  p {
    margin: 0;
  }
}
.remain {
  font-family: 'DMSans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  line-height: 16px;
  text-align: right;
  color: rgba(41, 49, 72, 0.6);
}
.dots {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
  button {
    border: none;
    background: none;
    margin: 0;
    padding: 0;
  }
  img {
    margin-right: 5px;
  }
}
</style>
