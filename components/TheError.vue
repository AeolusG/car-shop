<template>
  <div class="error-wrapper" v-if="error">
    <h2>Something Went Wrong</h2>
    <h3>Sorry we ran into a problem</h3>
    <img src="../assets/images/error.png" />
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss">
.error-wrapper {
  text-align: center;
  margin: 40px;
  margin-top: 100px;
  h2 {
    font-family: 'DMSans', sans-serif;
    font-size: 34px;
    font-weight: 700;
    margin: 20px 20px;
    color: rgb(41, 49, 72);
  }
  h3 {
    font-family: 'DMSans', sans-serif;
    font-size: 25px;
    font-weight: 700;
    margin: 20px 20px;
    color: rgb(41, 49, 72);
  }
  img {
    width: 500px;
  }
}
</style>
