<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="text-center mb-4">Registro</h2>
                        <SignUp />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SignUp from '@/components/SignUp.vue';

export default {
    name: 'SignUpView',
    components: {
        SignUp,
    },
};
</script>

<style scoped>
.container {
    margin-top: 2rem;
}
</style>
