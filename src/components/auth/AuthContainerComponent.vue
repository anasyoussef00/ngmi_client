<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  title: string;
}>();
console.log(props);
</script>

<template>
  <div class="bg-gray-100 p-6 rounded-md">
    <h1 class="text-center text-2xl mb-3">{{ props.title }}</h1>
    <slot></slot>
  </div>
</template>
