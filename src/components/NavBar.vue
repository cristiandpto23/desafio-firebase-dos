<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" to="/">Firebase</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <template v-if="!isAuthenticated">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">Iniciar Sesión</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/signup">Registrarse</router-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Inicio</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click.prevent="logout">Cerrar Sesión</a>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { auth } from '@/auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';

export default {
    name: 'NavBar',
    data() {
        return {
            isAuthenticated: false,
        };
    },
    created() {
        onAuthStateChanged(auth, (user) => {
            this.isAuthenticated = !!user;
        });
    },
    methods: {
        async logout() {
            try {
                await signOut(auth);
                this.$router.push('/login');
            } catch (error) {
                console.error('Error al cerrar sesión:', error);
            }
        },
    },
};
</script>
