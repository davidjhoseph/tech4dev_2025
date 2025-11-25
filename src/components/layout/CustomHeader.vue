<template>
    <div class="bg-[#FFFFFF] pl-6 w-full h-20 pr-20 text-center flex justify-between items-center space-x-6">
        <img src="@/assets/icons/logo.svg" alt="logo">
        <div class="flex items-center space-x-3" @click="handleLogout">
            <div class="size-10 rounded-full bg-[#6A7E8A]"></div>
            <span class="text-sm font-medium text-[#013C61]">Hi Joshua</span>
            <img src="@/assets/icons/down.svg" alt="notification">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleLogout() {
            localStorage.removeItem('isLoggedIn');
            this.$router.push({ name: 'auth-page' });
        }
    }
}
</script>

<style lang="scss" scoped></style>