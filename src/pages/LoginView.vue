<template>
    <div>
        <div class="text-2xl font-bold">User: {{ user ?? 'No User Found' }}</div>
        <div class="flex items-center space-x-4">
            <button class="px-6 py-2 mt-10 bg-green-600 text-white rounded-xl"
                @click="updateCounter('decrement')">-</button>
            <CustomButton class="bg-green-500 text-white px-6 py-2 rounded-lg text-2xl">{{ counter }}
            </CustomButton>
            <button class="px-6 py-2 mt-10 bg-green-600 text-white rounded-xl"
                @click="updateCounter('increment')">+</button>
        </div>
        <button class="px-6 py-2 mt-10 bg-green-600 text-white rounded-xl"
            @click="updateComponentUser(null)">Clear User</button>
        <button class="px-6 py-2 mt-10 bg-green-600 text-white rounded-xl"
            @click="updateComponentUser({ name: 'Funmi', age: 40, email: 'funmi@email.com' })">Update User</button>

    </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';
import { mapState, mapActions } from 'vuex';
export default {
    name: 'LoginView',
    components: { CustomButton },
    methods: {
        ...mapActions('counterStore', [
            'updateCounter'
        ]),
        ...mapActions('userStore', { updateComponentUser: 'updateUser' }),
    },
    computed: {
        ...mapState('counterStore', { counter: 'count' }),
        ...mapState('userStore', ['user']),
    }

}

</script>

<style lang="scss" scoped></style>