<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Nuxt Application - Host
        </h2>
        <div :style="styleObject">
          <h2>React Application - Remote</h2>
          <ReactApp />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {
        padding: "30px",
        marginTop: "50px",
        height: "600px",
      },
    };
  },
  name: "NuxtTutorial",
};
</script>
