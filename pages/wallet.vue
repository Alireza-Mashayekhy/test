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
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myWallet: "",
      myBlocked: "",
      dialog: true,
      increase: null,
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
  methods: {
    add() {
      this.$store.commit("addWallet", this.increase);
      console.log(this.$store.state.wallet);
    },
  },
};
</script>

<style>
</style>