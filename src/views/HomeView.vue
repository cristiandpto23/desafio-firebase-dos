<template>
    <main class="container">
        <div class="text-center py-5">
            <h1 class="display-4">¡Bienvenido a la aplicación!</h1>
            <div v-if="loading" class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Cargando...</span>
            </div>
            <div v-else class="mt-4">
                <p class="lead">
                    Has iniciado sesión como: <strong>{{ userEmail }}</strong>
                </p>
                <div class="card mt-4 mx-auto" style="max-width: 600px">
                    <div class="card-body">
                        <h5 class="card-title">Panel Principal</h5>
                        <p class="card-text">Algún día aquí estará tu área personal.</p>
                        <p>Aquí podrás, en el futuro, gestionar tu cuenta.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { auth } from '@/auth';
import { onAuthStateChanged } from 'firebase/auth';

export default {
    name: 'HomeView',
    data() {
        return {
            userEmail: '',
            loading: true,
        };
    },
    created() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // si hay usuario, guarda el mail
                this.userEmail = user.email;
            }
            this.loading = false;
        });
    },
};
</script>

<style scoped>
.container {
    margin-top: 2rem;
}
</style>
