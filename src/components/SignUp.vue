<template>
    <div class="signup-container">
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" v-model="email" required />
            </div>
            <div class="mb-3">
                <label class="form-label">Contraseña</label>
                <input type="password" class="form-control" v-model="password" minlength="6" required />
                <small class="form-text text-muted">La contraseña debe tener al menos 6 caracteres</small>
            </div>
            <button type="submit" class="btn btn-primary w-100">Registrarse</button>
        </form>
    </div>
</template>

<script>
import { auth } from '@/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default {
    name: 'SignUp',
    data() {
        return {
            email: '',
            password: '',
            loading: false,
            error: null,
        };
    },
    methods: {
        async handleSubmit() {
            this.loading = true;
            this.error = null;
            try {
                await createUserWithEmailAndPassword(auth, this.email, this.password);
                this.$emit('signup-success');
                this.$router.push('/');
            } catch (error) {
                this.error = 'Error al registrarse: ' + error.message;
                this.$emit('signup-error', error);
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
.signup-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 1rem;
}
</style>
