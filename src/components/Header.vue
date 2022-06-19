<template>
  <section class="src-components-header">
    <div id="header">
      <h1>
        The Great <br />
        <span id="colorDisplay">{{
          this.$store.state.colorHeaderVar.style.backgroundColor
        }}</span>
        <br />
        Guessing Game
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-header",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    metodo() {},
  },
  computed: {},
};
</script>

<style scoped lang="css">
#header {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
#colorDisplay {
  font-size: 200%;
}
</style>
