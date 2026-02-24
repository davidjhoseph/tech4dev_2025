<template>
    <div class="underline">Products</div>
    <div v-if="!productsStore.getLoadingState">
        <div v-for="product in productsStore.getProducts">
            <div>{{ product.name }}</div>
            <button class="bg-green-800 p-2 rounded my-2 text-white cursor-pointer"
                @click="cartStore.addToCart({ product_id: product.id, quantity: 1 })">Add to cart</button>
        </div>
    </div>
    <div v-else>Loading....</div>
    <div class="flex items-center space-x-4" v-if="productsStore.getPagination">
        <button @click="currentPage = page" :class="currentPage === page ? 'bg-green-600 hover:bg-green-400 text-white' : 'hover:bg-gray-200 bg-white'" class="rounded-md px-3 py-1 border transition-all ease-in duration-300 cursor-pointer " v-for="page in productsStore.getPagination.last_page">{{page}}</button>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product';
import { onMounted, watch, ref } from 'vue';

const cartStore = useCartStore();
const productsStore = useProductStore()
const currentPage = ref(1);
onMounted(async () => {
    await cartStore.fetchCartItems();
    await productsStore.fetchProducts(1);
    // await Promise.all([
    //     cartStore.getCartItems(),
    //     productsStore.getProducts()
    // ])
});
watch(currentPage, (val) => {
    if(val){
        productsStore.fetchProducts(val);
    }
})
</script>

<style lang="scss" scoped></style>