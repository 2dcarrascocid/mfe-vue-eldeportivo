<script setup>
import LoginGoogle from '@/components/login/LoginGoogle.vue';
import LoginFacebook from '@/components/login/LoginFacebook.vue';
</script>
<template>
  <div class="w-full h-screen flex items-center justify-center bg-gray-800">
    <div class="bg-red-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
      <LoginGoogle />
      <LoginFacebook />
    </div>
  </div>
</template>
