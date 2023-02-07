<template>
  <div class="dataCards my-7 rounded-lg pa-4">
    <div class="d-flex">
      <img src="/images/cardImage.jpg" width="70" class="mb-4" alt="" />
      <div class="col pa-0 mb-4 mr-4 d-flex flex-column justify-space-between">
        <div class="d-flex justify-space-between">
          <div>{{ name }}</div>
          <div
            class="px-2 rounded-lg"
            :class="{
              grayStatus: status == 'لغو شده',
              greenStatus: status == 'انجام شده',
              greenStatus2: status == 'تکمیل شده',
            }"
          >
            {{ status }}
          </div>
        </div>
        <div class="d-flex align-center">
          <img src="/icons/location.svg" height="20" class="ml-2" />
          <span>
            {{ city }}
          </span>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <img src="/icons/calendar.svg" class="ml-2" width="20" alt="" />
      <div class="ml-2">تاریخ اخذ شیفت:</div>
      <div>
        {{ shift_date }}
      </div>
    </div>
    <div class="d-flex">
      <img src="/icons/calendar.svg" class="ml-2" width="20" alt="" />
      <div class="ml-2">تاریخ شیفت:</div>
      <div>
        <span> {{ shift_date }}</span>
        <span>الی</span>
        <span>
          {{ get_shift_date }}
        </span>
      </div>
    </div>
    <div class="d-flex">
      <img src="/icons/clock.svg" class="ml-2" width="20" alt="" />
      <div class="ml-2">ساعت شیفت:</div>
      <div>
        {{ shift_hour }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "key",
    "name",
    "status",
    "city",
    "shift_date",
    "get_shift_date",
    "shift_hour",
  ],
};
</script>

<style>
</style>