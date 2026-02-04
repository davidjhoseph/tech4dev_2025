<template>
    <div>
        <div class="text-2xl font-bold text-center mb-10">Lezadee Register</div>
        <form @submit.prevent="register" class="flex flex-col space-y-4 w-full max-w-md">
            <input type="text" class="border-2 border-gray-300 rounded-md p-2" v-model="form.name" placeholder="Name">
            <input type="email" class="border-2 border-gray-300 rounded-md p-2" v-model="form.email" placeholder="Email">
            <input type="tel" class="border-2 border-gray-300 rounded-md p-2" v-model="form.phone_number" placeholder="Phone">
            <input type="text" class="border-2 border-gray-300 rounded-md p-2" v-model="form.address" placeholder="Address">
            <input type="password" class="border-2 border-gray-300 rounded-md p-2" v-model="form.password" placeholder="Password">
            <button type="submit" class="bg-blue-500 text-white rounded-md p-2">Register</button>
        </form>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
//State
const authStore = useAuthStore();
const form = reactive({
    name: '',
    email: '',
    phone_number: '',
    address: '',
    password: ''
});
const router = useRouter();
// Methods
const register = async () => {
    try {
        await authStore.register({name: form.name, email: form.email, phone_number: form.phone_number, address: form.address, password: form.password});
        router.push('/')
    } catch (error) {
        console.error(error);
    }
}
</script>

<style lang="scss" scoped></style>