import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createTypeTender = async (type) => {
  const { data } = await $authHost.post("api/type_tender", type);
  return data;
};

export const fetchTypesTender = async () => {
  const { data } = await $host.get("api/type_tender"); //type_tender  //typeTender
  return data;
};

// export const createBrand = async (brand) => {
//     const {data} = await $authHost.post('api/brand', brand)
//     return data
// }

// export const fetchBrands = async () => {
//     const {data} = await $host.get('api/brand', )
//     return data
// }

export const createTender = async (tender) => {
  const { data } = await $authHost.post("api/tender", tender);
  return data;
};

export const fetchTenders = async (typeId, page, limit = 5) => {
  const { data } = await $host.get("api/tender", {
    params: {
      typeId,
      page,
      limit,
    },
  });
  return data;
};

export const fetchOneTender = async (id) => {
  const { data } = await $host.get("api/tender/" + id);
  return data;
};

