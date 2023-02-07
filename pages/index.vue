<template>
  <div class="home white pa-4">
    <input
      type="search"
      placeholder="جستجو"
      v-model="search"
      class="search grey lighten-3 rounded-lg pa-3"
    />
    <div class="text-center my-5 ml-3">
      <router-link to="/wallet">کیف پول</router-link>
    </div>
    <HomeCard
      v-for="person in filteredList"
      :key="person.id"
      :name="person.name"
      :status="person.status"
      :city="person.city"
      :shift_date="person.shift_date"
      :get_shift_date="person.get_shift_date"
      :shift_hour="person.shift_hour"
    />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      search: "",
    };
  },
  async asyncData({ $axios, store }) {
    if (!store.state.list) {
      const data = await $axios.$get(
        "https://63d3de42c1ba499e54cad952.mockapi.io//api/v1/shifts/list"
      );
      store.commit("set", data);
      console.log(data);
    }
  },
  computed: {
    filteredList() {
      return this.$store.state.list.filter((post) => {
        return post.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
