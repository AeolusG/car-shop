<template>
  <div class="card-wrapper">
    <div class="dots">
      <button>
        <img src="../assets/images/dot.svg" alt="dot" />
        <img src="../assets/images/dot.svg" alt="dot" />
        <img src="../assets/images/dot.svg" alt="dot" />
      </button>
    </div>
    <img class="car-image" :src="setImage" />
    <h2 class="card-title">{{ setTitle }}</h2>
    <h3 class="card-subtitle">{{ vin }}</h3>
    <div class="divider"></div>
    <div class="card-footer">
      <div :class="setClass">
        <img src="../assets/images/Vector.svg" alt="check mark" />
        <p>{{ photosCount }}/30</p>
      </div>
      <div class="remain">3 days left</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vehicleName: {
      type: String,
      default: null,
    },
    vin: {
      type: String,
      default: null,
    },
    photo: {
      type: String,
      default: null,
    },
    photosCount: {
      type: Number,
      default: null,
    },
  },
  setup(props) {
    const defaultImage = ref('/_nuxt/assets/images/mersedes 1.png');
    const defaultTitle = ref('Транспортное средство');

    const setImage = computed(() => {
      return props.photo ?? defaultImage.value;
    });

    const setTitle = computed(() => {
      if (props.vehicleName === 'undefined undefined') {
        return defaultTitle.value
      }
      return props.vehicleName ?? defaultTitle.value;
    });
    const setClass = computed(() => {
      return props.photosCount < 30 ? 'greyTile' : 'greenTile';
    });

    return {
      defaultImage,
      setImage,
      setTitle,
      setClass,
    };
  },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  padding: 30px 30px 10px 35px;
  margin-bottom: 30px;

  background: rgba(243, 246, 248, 1);
  border-radius: 10px;
  width: fit-content;
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
.car-image {
  width: 260px;
  height: 135px;
}
.greenTile {
  display: flex;

  padding: 5px 10px;

  background-color: rgba(228, 245, 221, 1);
  border-radius: 6px;

  font-family: 'DMSans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  color: rgba(127, 199, 94, 1);

  img {
    margin-right: 10px;
  }
  p {
    margin: 0;
  }
}
.greyTile {
  display: flex;

  padding: 5px 10px;

  font-family: 'DMSans', sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  color: rgba(41, 49, 72, 0.8);

  background-color: rgba(237, 237, 237, 1);
  border-radius: 6px;

  img {
    display: none;
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
