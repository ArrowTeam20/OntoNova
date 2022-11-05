<template>
  <div>
    <v-alert :border="borderPos" :color="couleur" dark min-width="600px">
      {{ message }}
    </v-alert>
  </div>
</template>
<script>
export default {
  name: 'AlertComp',
  props: ['message', 'borderPos', 'couleur'],
}
</script>
<style scoped>
.v-alert {
  position: fixed;
  left: 50%;
  bottom: 15px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
</style>
