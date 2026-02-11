import { defineStore } from "pinia";
import { computed, ref } from "vue";
import api from "@/helpers/axios";
export const useCartStore = defineStore("cart", () => {
  const cartItems = ref([]);
  const addToCart = async(payload) => {
    const response = await api.post(`/cart/add`, payload);
    fetchCartItems()
    console.log(response);
  };
  const updateCart = async(payload) => {
    const response = await api.put(`/cart/${payload.id}`, payload);
    fetchCartItems()
    console.log(response);
  };
  const fetchCartItems = async () => {
    const response = await api.get("/cart");
    cartItems.value = response.data.data;
  };
  const deleteCartItem = async (id) => {
    const response = await api.delete(`/cart/${id}`);
    console.log(response);
  };
  const getCartItems = computed(() => cartItems.value)

  return { cartItems, addToCart, getCartItems, fetchCartItems, deleteCartItem, updateCart };
});
