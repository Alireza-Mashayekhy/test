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
    <div
      class="dataCards my-7 rounded-lg pa-4"
      v-for="person in filteredList"
      :key="person.name"
    >
      <div class="d-flex">
        <img src="/images/cardImage.jpg" width="70" class="mb-4" alt="" />
        <div
          class="col pa-0 mb-4 mr-4 d-flex flex-column justify-space-between"
        >
          <div class="d-flex justify-space-between">
            <div>{{ person.name }}</div>
            <div
              class="px-2 rounded-lg"
              :class="{
                grayStatus: person.status == 'لغو شده',
                greenStatus: person.status == 'انجام شده',
                greenStatus2: person.status == 'تکمیل شده',
              }"
            >
              {{ person.status }}
            </div>
          </div>
          <div class="d-flex align-center">
            <img src="/icons/location.svg" height="20" class="ml-2" />
            <span>
              {{ person.city }}
            </span>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <img src="/icons/calendar.svg" class="ml-2" width="20" alt="" />
        <div class="ml-2">تاریخ اخذ شیفت:</div>
        <div>
          {{ person.shift_date }}
        </div>
      </div>
      <div class="d-flex">
        <img src="/icons/calendar.svg" class="ml-2" width="20" alt="" />
        <div class="ml-2">تاریخ شیفت:</div>
        <div>
          <span> {{ person.shift_date }}</span>
          <span>الی</span>
          <span>
            {{ person.get_shift_date }}
          </span>
        </div>
      </div>
      <div class="d-flex">
        <img src="/icons/clock.svg" class="ml-2" width="20" alt="" />
        <div class="ml-2">ساعت شیفت:</div>
        <div>
          {{ person.shift_hour }}
        </div>
      </div>
    </div>
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
