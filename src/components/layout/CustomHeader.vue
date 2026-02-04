<template>
    <div class="bg-[#FFFFFF] pl-6 w-full h-20 pr-20 text-center flex justify-between items-center space-x-6">
        <img src="@/assets/icons/logo.svg" alt="logo">
        <div class="flex items-center space-x-3" @click="handleLogout">
            <div class="size-10 rounded-full bg-[#6A7E8A]"></div>
            <span class="text-sm font-medium text-[#013C61]">Hi {{ user.name }}</span>
            <img src="@/assets/icons/down.svg" alt="notification">
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
const router = useRouter();
const authStore = useAuthStore();
const user = authStore.getUser;
const handleLogout = () => {
    // localStorage.removeItem('authToken');
    // localStorage.removeItem('user');
    authStore.logout();
    router.push('/auth/login');
}
</script>

<style lang="scss" scoped></style>