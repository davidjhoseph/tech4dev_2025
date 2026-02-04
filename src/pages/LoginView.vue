<template>
    <div>
        <div class="text-2xl font-bold text-center mb-10">Lezadee Login</div>
        <form @submit.prevent="login" class="flex flex-col space-y-4 w-full max-w-md">
            <input type="email" class="border-2 border-gray-300 rounded-md p-2" v-model="email" placeholder="Email">
            <input type="password" class="border-2 border-gray-300 rounded-md p-2" v-model="password"
                placeholder="Password">
            <button type="submit" class="bg-blue-500 text-white rounded-md p-2">Login</button>
        </form>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
//State
const authStore = useAuthStore();
const email = ref('');
const password = ref('');
const router = useRouter();
// Methods
const login = async () => {
    try {
        await authStore.login(email.value, password.value);
        router.push('/');
    } catch (error) {
        console.error(error);
        // toast.error(error.response.data.message);
    }
}
</script>