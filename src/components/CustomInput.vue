<template>
    <input type class="border-2 border-gray-300 rounded-md p-2" v-model="modelValue" :placeholder="placeholder">
</template>

<script setup>
const props = defineProps({
    placeholder: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: [String, Number],
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

</script>