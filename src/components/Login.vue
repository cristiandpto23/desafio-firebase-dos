<template>
    <div class="login-container">
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" v-model="email" required />
            </div>
            <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input type="password" class="form-control" v-model="password" required />
            </div>
            <button type="submit" class="btn btn-primary w-100">Ingresar</button>
        </form>
    </div>
</template>

<script>
import { auth } from '@/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async handleSubmit() {
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password);
                this.$router.push('/');
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style scoped>
.login-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
}
</style>
