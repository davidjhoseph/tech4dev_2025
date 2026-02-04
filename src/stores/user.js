import { defineStore } from "pinia";
import { ref } from "vue";
import { useCounterStore } from "./counter";
export const useUserStore = defineStore("user", () => {
  const counterStore = useCounterStore();
  const user = ref(null);
  const updateUser = (data) => {
    updateCounter()
    user.value = data;
  };
  const updateCounter = () => {
    counterStore.count++;
  } 

  return { user, updateUser };
});
