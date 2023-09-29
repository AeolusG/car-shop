export default function (url) {
  const state = reactive({
    carsList: [],
    totalCount: null,
    error: null,
    // fetching: false,
  });
  const fetchData = async () => {
    state.fetching = true;
    try {
      const res = await fetch(url);
      const json = await res.json();
      state.carsList = json.data;
      state.totalCount = json.meta.total;
    } catch (errors) {
      state.error = errors;
    }
    // finally {
    //   state.fetching = false;
    // }
  };
  return { ...toRefs(state), fetchData };
}
