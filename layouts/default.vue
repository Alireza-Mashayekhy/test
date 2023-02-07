<template>
  <v-app>
    <div class="light-blue lighten-2 px-6 py-2">
      <Header />
    </div>
    <v-main class="light-blue lighten-2">
      <Nuxt class="rounded-t-xl" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
};
</script>
