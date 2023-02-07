<template>
  <v-app>
    <div class="light-blue lighten-2 px-6 py-2">
      <div class="w-100 d-flex justify-space-between">
        <img src="/icons/bar.svg" />
        <h1 class="white--text">اپسول</h1>
        <div class="d-flex align-center">
          <div
            class="
              alarmCircle
              red
              white--text
              rounded-circle
              d-flex
              justify-center
              align-center
            "
          >
            18
          </div>
          <img src="/icons/bell.svg" />
        </div>
      </div>
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
