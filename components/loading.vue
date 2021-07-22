<template>
  <div class="flex flex-wrap items-center">
    <div class="spinner spinner-bounce-middle m-auto"></div>
  </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
  .spinner:before, .spinner:after, .spinner {
    width: 6px;
    height: 30px;
    background-color: #5f6368;
    border-radius: 2px;
  }

  .spinner {
    display: inline-block;
    position: relative;
  }
  .spinner:before, .spinner:after {
    content: "";
    position: absolute;
    display: block;
    top: 0px;
  }
  .spinner:before {
    left: -9px;
  }
  .spinner:after {
    left: 9px;
  }
  @-webkit-keyframes bounce-middle {
    0% {
      height: 4px;
      margin-top: 8px;
      margin-bottom: 8px;
    }
    50% {
      height: 30px;
      margin-top: 0px;
      margin-bottom: 0px;
    }
    100% {
      height: 4px;
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
  @keyframes bounce-middle {
    0% {
      height: 4px;
      margin-top: 8px;
      margin-bottom: 8px;
    }
    50% {
      height: 30px;
      margin-top: 0px;
      margin-bottom: 0px;
    }
    100% {
      height: 4px;
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
  .spinner-bounce-middle {
    -webkit-animation: bounce-middle 0.6s ease 0.1s infinite;
    animation: bounce-middle 0.6s ease 0.1s infinite;
  }
  .spinner-bounce-middle:before, .spinner-bounce-middle:after {
    top: 50%;
    transform: translateY(-10px) translateZ(0);
  }
  .spinner-bounce-middle:before {
    -webkit-animation: bounce-middle 0.6s ease 0s infinite;
    animation: bounce-middle 0.6s ease 0s infinite;
  }
  .spinner-bounce-middle:after {
    -webkit-animation: bounce-middle 0.6s ease 0.2s infinite;
    animation: bounce-middle 0.6s ease 0.2s infinite;
  }

</style>
