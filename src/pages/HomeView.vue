<template>
    <div>
        Home View
    </div>
</template>

<script>
export default {
    created() {
        // Fetch the products;
        this.products = Response;
    },
    data(){
        return {
            products: []
        }
    },
    methods: {
        goToRoute(id){
            this.$router.push({name: 'single-product', params: {id: id}, query: {learningTrack: 'Frontend'}})
        }
    }
}
</script>

<style lang="scss" scoped></style>