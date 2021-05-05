<template>
  <header class="text-gray-600 body-font dark:bg-gray-800">
    1234
    <div
      class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row"
    >
      <RouterLink
        :to="{ name: 'Home' }"
        class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0"
      >
        <img alt="Vite logo" src="@/assets/vite-logo.svg" width="36px" />
        <span class="ml-3 text-xl dark:text-white">
          {{ appName }}
        </span>
      </RouterLink>
      <nav
        class="flex flex-wrap items-center justify-center text-base md:ml-auto"
      >
        <RouterLink
          class="flex items-center justify-center mr-2 text-black w-9 h-9 dark:text-white"
          to="/aliens"
        >
          <icon-MdiAlien />
        </RouterLink>
        <a
          href="https://github.com/lstoeferle/vite-vue2-windicss-starter"
          target="_blank"
          class="flex items-center justify-center mr-2 text-black w-9 h-9 dark:text-white"
        >
          <icon-MdiGithub />
        </a>
        <button
          @click="toggle"
          class="flex items-center justify-center w-9 h-9 focus:outline-none"
        >
          <icon-MdiWhiteBalanceSunny class="text-yellow-500" v-if="isDark" />
          <icon-MdiMoonWaningCrescent class="text-gray-800" v-else />
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup: (_, ctx) => {
    // Import config from .evn
    const appName = import.meta.env.VITE_APP_NAME;

    return { appName,};
  },
});
</script>
