import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "@/helpers/axios";
export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const pagination = ref(null);
  const loading = ref(false)
  const fetchProducts = async (page) => {
    try {
      loading.value = true;
      const response = await api.get("/products?per_page=10&page="+page);
      products.value = response.data.data;
      pagination.value = {...response.data}
      delete pagination.value.data;
    }catch(e) {
      //
    }finally {
      loading.value = false;
    }
  };
  
  const getProducts = computed(() => products.value);
  const getPagination = computed(() => pagination.value);
  const getLoadingState = computed(() => loading.value);

  return {
    products,
    getProducts,
    fetchProducts,
    getPagination,
    getLoadingState,
  };
});
