<template>
  <img class="vuetify-logo" alt="Vuetify Logo" src="/Logo.svg" />
</template>

<style>
.vuetify-logo {
  height: 150px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
