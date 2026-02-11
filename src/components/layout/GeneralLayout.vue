<template>
    <div class="bg-gray-200">
        <CustomHeader />
        <div class="flex">
            <Sidebar />
            <div class="p-20 flex-1">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import CustomHeader from './CustomHeader.vue';

    export default {
        components: { Sidebar, CustomHeader }
    }
</script>

<style lang="scss" scoped>

</style>