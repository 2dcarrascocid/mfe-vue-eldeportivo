<template>
<div>
    <button @click="handleClick" 
        class="bg-red-200">
            Iniciar sesión con Facebook
    </button>
</div>
</template>
<script setup>
import { useFacebookLogin } from '@/composables/useFacebookLogin';
const { loginWithFacebook } = useFacebookLogin();
const handleClick = () => loginWithFacebook();
</script>


