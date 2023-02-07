export const state = () => ({
  list: null,
  wallet: 3845425,
  blocked: 94500,
});
export const mutations = {
  set(state: any, data: any) {
    state.list = data;
  },
  addWallet(state: any, num: any) {
    state.wallet = parseInt(state.wallet) + parseInt(num);
  },
};
