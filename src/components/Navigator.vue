<template>
  <section class="src-components-navigator">
    <div id="navigator">
      <button id="reset" @click="reset()">
        {{ getMensaje(this.$store.state.mensajeDisplay) }}
      </button>
      <span id="message"> {{ this.$store.state.mensajeDisplay }}</span>

      <button
        @click="hardToEasy()"
        :style="getBtn(!this.$store.state.isHardNavigator)"
      >
        easy
      </button>
      <button
        @click="easyTohard()"
        :style="getBtn(this.$store.state.isHardNavigator)"
        class="selected"
      >
        hard
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-navigator",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {
    hardToEasy() {
      this.$store.dispatch("hardToEasy");
      this.setColor();
    },
    easyTohard() {
      this.$store.dispatch("easyTohard");
      this.setColor();
    },
    reset() {
      this.$store.dispatch("reset");
      this.init();
    },
    getBtn(isHard) {
      return {
        "background-color": isHard ? "steelblue" : "white",
        color: isHard ? "white" : "steelblue",
      };
    },
    getMensaje(message) {
      return message != "You Picked Right!" ? "New colors" : "Play Again!";
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
#message {
  color: black;
  display: inline-block;
  width: 20%;
}
.selected {
  background-color: steelblue;
  color: white;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
</style>
