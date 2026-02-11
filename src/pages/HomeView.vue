<template>
    <div class="flex">
        <div class="flex-1">
            <div class="underline">Products</div>
            <div v-for="product in productsStore.getProducts">
                <div>{{product.name}}</div>
                <button class="bg-green-800 p-2 rounded my-2 text-white cursor-pointer" @click="cartStore.addToCart({product_id: product.id, quantity: 1})">Add to cart</button>
            </div>
        </div>
        <div class="flex-1">
            <div class="underline">Cart Items</div>
            <div v-for="item in cartStore.getCartItems">
                <div>{{ item.name }}</div>
                <div class="flex items-center space-x-4">
                    <button @click="item.quantity > 1 ? cartStore.updateCart({ id: item.id, type: 'decrement' }) : () => {}">-</button>
                    <input type="text" class="border w-10" v-model="item.quantity">
                    <button @click="cartStore.updateCart({ id: item.id, type: 'increment'})">+</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import { useProductStore } from '@/stores/product';
import { onMounted } from 'vue';

const cartStore = useCartStore();
const productsStore = useProductStore()
onMounted(async () => {
    await cartStore.fetchCartItems();
    await productsStore.fetchProducts();
    // await Promise.all([
    //     cartStore.getCartItems(),
    //     productsStore.getProducts()
    // ])
});
</script>

<style lang="scss" scoped></style>