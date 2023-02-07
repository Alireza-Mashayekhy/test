<template>
  <v-card>
    <div class="dialogHead d-flex justify-space-between align-center">
      <v-card-title> افزایش اعتبار </v-card-title>
      <button
        class="
          ml-3
          closeBtn
          rounded-circle
          d-flex
          justify-center
          align-center
          pa-1
        "
        @click="closeModal"
      >
        <img src="/icons/x.svg" alt="" width="20" />
      </button>
    </div>
    <v-card-text class="py-7 px-4 inputDiv">
      <input
        type="number"
        v-model="increase"
        class="grey lighten-3 rounded-lg pa-3 increaseInput"
        placeholder="مبلغ درخواستی خود را وارد کنید."
      />
      <p v-if="error" class="red--text mt-3 mr-1 mb-0">
        لطفا فیلد را پر نمایید
      </p>
    </v-card-text>
    <v-card-actions>
      <button
        class="
          addBtn
          white--text
          light-blue
          lighten-2
          rounded-lg
          text-center
          py-2
        "
        @click="add"
      >
        افزایش
      </button>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      increase: null,
      error: false,
    };
  },
  methods: {
    add() {
      if (this.increase) {
        this.$store.commit("addWallet", this.increase);
        this.error = false;
      } else {
        this.error = true;
      }
    },
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style>
</style>