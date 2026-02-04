<template>
    <div>
        <h1>Full Name: {{ fullName }}</h1>
        <button @click="updateFirstName">Update First Name</button>
        <button @click="updateLastName">Update Last Name</button>
    </div>
</template>

<script setup lang="ts">
import { watch, ref, reactive, computed, onMounted } from 'vue'


// const props = defineProps({
//     counter: {
//         type: Number,
//         required: true
//     },
//     heavyCalculationResult: {
//         type: Number,
//         required: true
//     },
//     products: Array<any>
// })

// watch()

const emits = defineEmits(['updateCount','updateHeavyCalculationResult','updateProducts', 'updateFirstName', 'updateLastName'])
    
// State - Data Properties
const names = reactive({
    firstName: 'John',
    lastName: 'Doe'
})

const firstName = ref('John')

const products = ref([])

//Methods
const updateFirstName = () => {
    names.firstName = 'Jessica'
    firstName.value = 'Jessica'
    emits('updateFirstName', names.firstName)
}
const updateLastName = () => {
    names.lastName = 'Funmi'
    emits('updateLastName', names.lastName)
}

const heavyCalculation = () => {
    // heavy calculation
    return 1000000000
}

const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    products.value = await response.json()
}


// Computed
const fullName = computed(() =>  {
    // calculation using state variables
    return `${names.firstName} ${names.lastName}`
})
const filteredProducts = computed(() => {
    return products.value.filter(product => product.price > 100)
})

// Watchers
watch(firstName, (newVal) => {
    console.log('fullName changed', newVal)
})

// LifeCycle Hooks

onMounted(() => {
    console.log('Mounted')
})



</script>

<style scoped>

</style>