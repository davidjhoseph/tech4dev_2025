import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "@/helpers/axios";
export const useProductStore = defineStore("product", () => {
  const products = ref([]);
  const fetchProducts = async () => {
    const response = await api.get("/products");
    products.value = response.data.data;
  };
  
  const getProducts = computed(() => products.value);

  return { products, getProducts, fetchProducts };
});
