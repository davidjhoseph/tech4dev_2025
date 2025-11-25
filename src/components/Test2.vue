<template>
    <div class="max-w-[50%] mt-5 flex items-center gap-4 flex-wrap">
        Current Count is: {{ test2Count }}
        <!-- <button @click="handleChangeCount(number)" v-for="number in numbers" :key="number" class="size-6 text-white rounded-md flex items-center justify-center font-semibold bg-green-700">
            {{ number }}
        </button> -->
        
    </div>
</template>

<script>
    export default {
        emits:['changeCount'],
        props: ['test2Count'],
        data(){
            return {
                numbers: [5, 6,12,8, 19, 20, 81]
            }
        },
        methods: {
            handleChangeCount(value){
                this.$emit('changeCount', value)
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>