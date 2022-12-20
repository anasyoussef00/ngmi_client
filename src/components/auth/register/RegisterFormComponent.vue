<script lang="ts" setup>
import { computed, ComputedRef, reactive } from "vue";
import {
  Gender,
  IRegisterFormData,
} from "@/api/interfaces/auth/IRegisterFormData";
import { useStore } from "vuex";
import { IRegisterErrors } from "@/store/modules/auth/types";

const store = useStore();

const formData: IRegisterFormData = reactive({
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  password_confirmation: "",
  // type: UserType.None,
  gender: Gender.None,
  birthDate: "",
});

const errors: ComputedRef<IRegisterErrors> = computed(
  () => store.getters["auth/GET_REGISTER_ERRORS"]
);

const handleRegister = () => store.dispatch("auth/REGISTER", formData);
</script>

<template>
  <form method="POST" @submit.prevent="handleRegister">
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      <div class="flex flex-col">
        <label class="block" for="first-name-inp">First Name</label>
        <input
          v-model="formData.firstName"
          class="rounded-md p-2 mb-1 w-full focus:outline-none border border-pink-500"
          type="text"
          id="first-name-inp"
          placeholder="e.g. John"
        />
        <span
          v-for="(error, index) in errors.firstName"
          :key="index"
          class="text-red-500 text-sm"
        >
          {{ error }}
        </span>
      </div>
      <div class="flex flex-col">
        <label class="block" for="last-name-inp">Last Name</label>
        <input
          v-model="formData.lastName"
          class="rounded-md p-2 mb-1 w-full focus:outline-none border border-pink-500"
          type="text"
          id="last-name-inp"
          placeholder="e.g. Doe"
        />
        <span
          v-for="(error, index) in errors.lastName"
          :key="index"
          class="text-red-500 text-sm"
        >
          {{ error }}
        </span>
      </div>
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
        <label class="block" for="email-inp">Email Address</label>
        <input
          v-model="formData.email"
          class="rounded-md p-2 mb-1 w-full focus:outline-none border border-pink-500"
          type="email"
          id="email-inp"
          placeholder="e.g. john.doe_99@example.com"
        />
        <span
          v-for="(error, index) in errors.email"
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
      <div class="flex flex-col">
        <label class="block" for="confirm-password-inp">Confirm Password</label>
        <input
          v-model="formData.password_confirmation"
          class="rounded-md p-2 mb-1 w-full focus:outline-none border border-pink-500"
          type="password"
          id="confirm-password-inp"
          placeholder="********"
        />
      </div>
      <!-- <div class="flex flex-col">
        <label class="block" for="user-type-sel">Type</label>
        <select
          v-model="formData.type"
          class="rounded-md p-2 mb-1 w-full bg-white focus:outline-none border border-pink-500"
          id="user-type-sel"
        >
          <option :value="UserType.None" selected disabled>Are you a...</option>
          <option :value="UserType.R">Reader</option>
          <option :value="UserType.A">Author</option>
        </select>
        <span
          v-for="(error, index) in errors.type"
          :key="index"
          class="text-red-500 text-sm"
        >
          {{ error }}
        </span>
      </div> -->
      <div class="flex flex-col">
        <label class="block" for="gender-sel">Gender</label>
        <select
          v-model="formData.gender"
          class="rounded-md p-2 mb-1 w-full bg-white focus:outline-none border border-pink-500"
          id="user-type-sel"
        >
          <option :value="Gender.None" selected disabled>
            Please select your gender
          </option>
          <option :value="Gender.M">Male</option>
          <option :value="Gender.F">Female</option>
          <option :value="Gender.O">Other</option>
        </select>
        <span
          v-for="(error, index) in errors.gender"
          :key="index"
          class="text-red-500 text-sm"
        >
          {{ error }}
        </span>
      </div>
      <div class="flex flex-col">
        <label class="block" for="birth-date">Date Of Birth</label>
        <input
          v-model="formData.birthDate"
          class="rounded-md p-1.5 mb-1 w-full bg-white focus:outline-none border border-pink-500"
          type="date"
        />
        <span
          v-for="(error, index) in errors.birthDate"
          :key="index"
          class="text-red-500 text-sm"
        >
          {{ error }}
        </span>
      </div>
    </div>
    <div
      class="flex flex-col sm:flex-row gap-3 sm:justify-between items-center"
    >
      <button
        class="p-2 text-white bg-pink-600 hover:bg-pink-500 hover:shadow-md rounded-md"
        type="submit"
      >
        Register
      </button>
      <router-link class="text-pink-600" to="/auth/login">
        Already have an account? Login!
      </router-link>
    </div>
  </form>
</template>
