<template>
    <div>
        <header>
            <h1>Auth Layout </h1>
        </header>
        <main class="flex justify-center items-center h-screen">
            <RouterView />
        </main>
        <footer>
            <h1>Auth Layout </h1>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'AuthLayout',
    mounted() {
        console.log(this.$route.meta);
    }
}
</script>

<style lang="scss" scoped></style>