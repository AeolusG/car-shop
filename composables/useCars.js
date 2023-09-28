import useCustomFetch from './useCustomFetch';

export default function () {
  let cars = reactive({
    list: [],
    error: null,
    fetching: false,
    totalCount: null,
  });
  const vin = ref('');
  const getTotalCount = async () => {
    const { response, error, fetchData, fetching, totalCount } = useCustomFetch(
      `https://api.caiman-app.de/api/cars-test?search`,
      {}
    );
    await fetchData();
    cars.totalCount = totalCount;
    return cars.totalCount;
  };
  const search = async () => {
    const { response, error, fetchData, fetching } = useCustomFetch(
      `https://api.caiman-app.de/api/cars-test?search=${vin.value}`,
      {}
    );
    await fetchData();
    cars.list = response;
    cars.error = error;
    cars.fetching = fetching;
    return cars.list;
  };
  const loadItemsPerPage = async (num = 1, total = 3) => {
    const { response, error, fetchData, fetching } = useCustomFetch(
      `https://api.caiman-app.de/api/cars-test?search=${vin.value}&per_page=${total}&page=${num}`,
      {}
    );
    await fetchData();
    cars.list = response;
    cars.error = error;
    cars.fetching = fetching;
    return cars.list;
  };
  return {
    search,
    ...toRefs(cars),
    vin,
    loadItemsPerPage,
    getTotalCount,
  };
}
