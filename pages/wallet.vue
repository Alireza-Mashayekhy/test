<template>
  <div class="wallet white pa-4">
    <div class="card pa-10 rounded-xl">
      <div class="d-flex justify-space-between">
        <div class="d-flex flex-column align-center">
          <div>موجودی کیف پول</div>
          {{ myWallet }}
        </div>
        <div class="line"></div>
        <div class="d-flex flex-column align-center">
          <div>موجودی بلوکه شده</div>
          {{ myBlocked }}
        </div>
      </div>
      <div class="d-flex justify-space-around mt-8">
        <div class="d-flex flex-column align-center">
          <div
            @click="dialog = true"
            class="rounded-lg blue text-center mb-3 blueBg white--text px-4"
          >
            +
          </div>
          <div>افزایش موجودی</div>
        </div>
        <div class="d-flex flex-column align-center">
          <div class="rounded-lg blue text-center mb-3 blueBg white--text px-4">
            +
          </div>
          <div>درخواست استرداد</div>
        </div>
      </div>
    </div>
    <div class="status d-flex mt-10 pa-4 rounded-lg align-center">
      <div class="rounded-lg blue lighten-3 text-center blueBg px-4 ml-5">
        +
      </div>
      <div class="col pa-0">
        <div class="d-flex justify-space-between">
          <div>وضعیت درخواست استرداد</div>
          <div class="lightBlueBg rounded px-2">لغو شده</div>
        </div>
        <div class="followUp">برای پیگیری درخواست استرداد کلیک نمایید</div>
      </div>
    </div>
    <v-dialog v-model="dialog">
      <Modal @closeModal="dialog = false" />
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myWallet: "",
      myBlocked: "",
      dialog: false,
    };
  },
  mounted() {
    const str = this.$store.state.wallet;
    const str2 = this.$store.state.blocked;

    this.myWallet = str.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    this.myBlocked = str2.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  },
  watch: {
    "$store.state.wallet"() {
      const str = this.$store.state.wallet;
      const str2 = this.$store.state.blocked;

      this.myWallet = str.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
      this.myBlocked = str2.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    },
  },
};
</script>

<style>
</style>