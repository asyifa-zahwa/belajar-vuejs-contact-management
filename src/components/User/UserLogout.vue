<script setup>
import { useLocalStorage } from '@vueuse/core';
import { onBeforeMount } from 'vue';
import { userLogout } from '../../lib/api/UserApi';
import { alertError } from '../../lib/alert';
import { useRouter } from 'vue-router';
const token = useLocalStorage('token', '');
const router = useRouter();
async function handleLogout() {
    // Logic to handle user logout
    console.log('Logging out');
    const response = await userLogout(token.value);
    if (response.status === 200) {
        token.value = null; // Clear token from local storage
        //alertSuccess('Logout successful');
        await router.push('/login');
    } else {
        alertError('Logout failed. Please try again.');
    }
    // Optionally redirect to login or home page
    
}
onBeforeMount(async () => {
    await handleLogout();
});
</script>
<template>

</template>
<style scoped>
</style>