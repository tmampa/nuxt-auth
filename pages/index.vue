<template>
  <div class="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-3xl font-bold mb-4">Nuxt + <span class="text-secondary">Better Auth</span></h1>
    <p class="text-lg mb-8">Welcome to the Nuxt application with Better Auth integration!</p>
    <div class="flex space-x-4">
        <NuxtLink to="auth/login" class="btn btn-primary">Login</NuxtLink>
        <NuxtLink to="auth/register" class="btn btn-accent btn-outline">Sign Up</NuxtLink>
    </div>
    
  </div>
</template>
