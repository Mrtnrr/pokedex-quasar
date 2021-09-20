<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: this.$store.getters.user
    };
  },
  mounted() {}
};
</script>
