<script lang="ts" setup>
import AuthContainerComponent from "@/components/auth/AuthContainerComponent.vue";
import PinkGradientBg from "@/components/bg/PinkGradientBg.vue";
import LoginFormComponent from "@/components/auth/login/LoginFormComponent.vue";
</script>

<template>
  <PinkGradientBg>
    <AuthContainerComponent title="Login">
      <LoginFormComponent />
    </AuthContainerComponent>
  </PinkGradientBg>
</template>
