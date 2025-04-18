import axios from "axios";

interface FilterParams {
  filterKey?: string;
  filterValue?: string;
  filterMin?: number | string;
  filterMax?: number | string;
}

export default async function getProducts(filters: FilterParams = {}) {
  try {
    const queryParams = new URLSearchParams();

    if (filters.filterKey && filters.filterValue) {
      queryParams.append("filterKey", filters.filterKey);
      queryParams.append("filterValue", filters.filterValue);
    }

    if (filters.filterMin) {
      queryParams.append("filterMin", filters.filterMin.toString());
    }

    if (filters.filterMax) {
      queryParams.append("filterMax", filters.filterMax.toString());
    }

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/records/products?${queryParams.toString()}`,
      {
        headers: {
          api_key: `${process.env.NEXT_PUBLIC_API_KEY}`,
          Authorization: `Bearer ${localStorage.getItem("adminAccessToken")}`,
        },
      }
    );

    return response.data.records;
  } catch (err) {
    console.error(err);
  }
}
