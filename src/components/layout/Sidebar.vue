<template>
    <div class="h-screen bg-[#FFFFFF]  w-20 pt-16 ">
        <div class="space-y-20">
            <RouterLink v-for="route in routes" :key="route.path" :to="route.path" @click="isActive(route.path)"
                class="flex flex-col h-14 border-l-8  items-center justify-center" :class="isActive(route.path) ? 'border-l-[#2BDA53]': 'border-l-transparent'">
                <component class="size-6" :is="route.icon" :class="isActive(route.path) ? 'text-[#2BDA53]' : 'text-[#013C61]'" />
            </RouterLink>
        </div>
    </div>
</template>

<script>
import HomeIcon from '@/components/icons/HomeIcon.vue';
import PeopleIcon from '@/components/icons/PeopleIcon.vue';
import CardIcon from '@/components/icons/CardIcon.vue';
    export default {
        components: { HomeIcon, PeopleIcon, CardIcon },
        data() {
            return {
                routes: [
                    { path: '/', icon: 'HomeIcon' },
                    { path: '/profile', icon: 'PeopleIcon' },
                    { path: '/about', icon: 'CardIcon' }
                ]
            }
        },
        methods: {
            isActive(path) {
                return this.$route.path === path;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>