<script lang="ts" setup>
import AuthContainerComponent from "@/components/auth/AuthContainerComponent.vue";
import PinkGradientBg from "@/components/bg/PinkGradientBg.vue";
import RegisterFormComponent from "@/components/auth/register/RegisterFormComponent.vue";
</script>

<template>
  <PinkGradientBg>
    <AuthContainerComponent title="Register">
      <RegisterFormComponent />
    </AuthContainerComponent>
  </PinkGradientBg>
</template>
