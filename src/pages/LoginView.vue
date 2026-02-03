<template>
    <div>
        <div class="text-2xl font-bold text-center mb-10">Lezadee Login</div>
        <form action="" class="flex flex-col space-y-4 w-full max-w-md">
            <input type="email" class="border-2 border-gray-300 rounded-md p-2" v-model="email" placeholder="Email">
            <input type="password" class="border-2 border-gray-300 rounded-md p-2" v-model="password" placeholder="Password">
            <button type="submit" class="bg-blue-500 text-white rounded-md p-2">Login</button>
        </form>

    </div>
</template>

<script setup>
import CustomButton from '@/components/CustomButton.vue';
import { useCounterStore } from '@/stores/counter';
import { useUserStore } from '@/stores/user';
//State
const counterStore = useCounterStore();
const userStore = useUserStore();
// Methods

const updateComponentUser = (data) => {
    userStore.updateUser(data);
}
</script>