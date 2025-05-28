import axios from "axios";

interface FilterParams {
  filterKey?: string;
  filterValue?: string;
  filterMin?: number | string;
  filterMax?: number | string;
  searchKey?: string;
  searchValue?: string;
}

export default async function getProducts(filters: FilterParams = {}) {
  try {
    const queryParams = new URLSearchParams();

    if (filters.filterKey && filters.filterValue) {
      queryParams.append("filterKey", filters.filterKey);
      queryParams.append("filterValue", filters.filterValue);
    }

    if (filters.filterMin !== undefined) {
      queryParams.append("filterMin", filters.filterMin.toString());
    }

    if (filters.filterMax !== undefined) {
      queryParams.append("filterMax", filters.filterMax.toString());
    }

    if (filters.searchKey && filters.searchValue) {
      queryParams.append("searchKey", filters.searchKey);
      queryParams.append("searchValue", filters.searchValue);
    }

    const proxyUrl = `/api/proxy?url=/api/records/products&${queryParams.toString()}`;

    let token = "";
    if (typeof window !== "undefined") {
      token = localStorage.getItem("adminAccessToken") || "";
    }

    const response = await axios.get(proxyUrl, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response.data.records;
  } catch (err) {
    console.error(err);
  }
}
