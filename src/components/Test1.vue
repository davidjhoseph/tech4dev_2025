<template>
    <div>
        <button @click="$emit('updateCount', test1Count + 1)" class="px-6 py-2 bg-green-600 text-white rounded-xl">Increase Current Count</button>
    </div>
</template>

<script>
import Test2 from './Test2.vue';
export default {
    components: { Test2 },
    props: ['test1Count'],
    data() {
        return {
        }
    },
    methods: {
       
    },
    emits: ['updateCount'],
}
</script>

<style lang="scss" scoped></style>