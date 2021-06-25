<template>
  <div>
    {{ type }}
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="type"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>
        {{ message }} This alert will dismiss after
        {{ dismissCountDown }} seconds...
      </p>
      <b-progress
        :variant="type"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
  </div>
</template>

<script>
export default {
  props: {
    dismissCountDown: Number,
    dismissSecs: Number,
    message: String,
    countDownChanged: Function,
    type: String
  }
};
</script>
