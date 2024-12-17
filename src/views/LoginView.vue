<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="text-center mb-4">Iniciar Sesión</h2>
                        <Login />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Login from '@/components/Login.vue';

export default {
    name: 'LoginView',
    components: {
        Login,
    },
};
</script>

<style scoped>
.container {
    margin-top: 2rem;
}
</style>
