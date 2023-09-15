import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createTypeTender = async (type) => {
  const { data } = await $authHost.post("api/type_tender", type);
  return data;
};

export const fetchTypesTender = async () => {
  const { data } = await $host.get("api/type_tender"); //type_tender
  return data;
};

export const createSubTypeTender = async (sub_type) => {
  const { data } = await $authHost.post("api/sub_type_tender", sub_type);
  return data;
};

export const fetchSubTypesTender = async () => {
  const { data } = await $host.get("api/sub_type_tender"); //sub_type_tender
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

export const fetchTenders = async (typeTenderId, page, limit = 3) => {
  const { data } = await $host.get("api/tender", {
    params: {
      typeTenderId,
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
