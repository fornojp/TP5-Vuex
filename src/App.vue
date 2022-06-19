<template>
  <div id="app">
    <Header />
    <Navigator />
    <Container />
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import Header from "./components/Header.vue";
import Navigator from "./components/Navigator.vue";
export default {
  name: "App",
  components: {
    Container,
    Header,
    Navigator,
  },
  data() {
    return {};
  },
  created() {
    this.init();
  },
  updated() {},
  methods: {},
};
</script>

<style>
body {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}
h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}
</style>
