<template>
    <div>
        Home View
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import api from '@/helpers/axios';
    const products = ref([]);
    const cartItems = ref([]);
    const router = useRouter();
    const goToRoute = (id) => {
        router.push({name: 'single-product', params: {id: id}, query: {learningTrack: 'Frontend'}})
    };
    const fetchCartItems = async () => {
        const response = await api.get('/cart');
        cartItems.value = response.data.data;
    };
    onMounted(() => {
        fetchCartItems();
    });
</script>

<style lang="scss" scoped></style>