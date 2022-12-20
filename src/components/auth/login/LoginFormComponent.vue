<script lang="ts" setup>
import Api from "@/api";
import { ILoginFormData } from "@/api/interfaces/auth/ILoginFormData";
import { ILoginErrors } from "@/store/modules/auth/types";
import { computed, ComputedRef, reactive } from "vue";
import { useStore } from "vuex";

const formData: ILoginFormData = reactive({
  username: "",
  password: "",
});

const store = useStore();

const errors: ComputedRef<ILoginErrors> = computed(
  () => store.getters["auth/GET_LOGIN_ERRORS"]
);

const handleLogin = () => store.dispatch("auth/LOGIN", formData);
</script>

<template>
  <form method="POST" @submit.prevent="handleLogin()">
    <div class="flex flex-col gap-3 mb-4">
      <div class="flex flex-col">
        <label class="block" for="username-inp">Username</label>
        <input
          v-model="formData.username"
          class="rounded-md p-2 mb-1 w-full focus:outline-none border border-pink-500"
          type="text"
          id="username-inp"
          placeholder="e.g. johndoe99"
        />
        <span
          v-for="(error, index) in errors.username"
          :key="index"
          class="text-red-500 text-sm"
        >
          {{ error }}
        </span>
      </div>
      <div class="flex flex-col">
        <label class="block" for="password-inp">Password</label>
        <input
          v-model="formData.password"
          class="rounded-md p-2 mb-1 w-full focus:outline-none border border-pink-500"
          type="password"
          id="password-inp"
          placeholder="********"
        />
        <span
          v-for="(error, index) in errors.password"
          :key="index"
          class="text-red-500 text-sm"
        >
          {{ error }}
        </span>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row justify-between items-center gap-3">
      <button
        class="p-2 text-white bg-pink-600 hover:bg-pink-500 hover:shadow-md rounded-md"
        type="submit"
      >
        Login
      </button>
      <router-link class="text-pink-600" to="/auth/register">
        Don't have an account yet? Register!
      </router-link>
    </div>
  </form>
</template>
