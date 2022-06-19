import Vue from "vue";

const miMixinGlobal = {
  methods: {
    init() {
      this.$store.state.colors =
        this.colorCount == 6
          ? this.createNewColors(this.$store.state.colorCount)
          : this.createNewColors(this.$store.state.colorCount);
      this.colorHeader();
    },
    setColor() {
      if (this.$store.state.colors.length != this.$store.state.colorCount) {
        this.$store.state.colors = this.createNewColors(
          this.$store.state.colorCount
        );
        this.colorHeader();
      }
    },
    colorHeader() {
      this.$store.state.colorHeaderVar =
        this.$store.state.colors[this.PickColor()];
    },
    PickColor() {
      var quantity;
      if (this.$store.state.isHardNavigator) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },
    randomInt() {
      return Math.floor(Math.random() * 256);
    },
    createRandomStringColor() {
      var newColor =
        "rgb(" +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ", " +
        this.randomInt() +
        ")";

      return newColor;
    },
    createNewColors(numbers) {
      var arr = [];
      for (var i = 0; i < numbers; i++) {
        arr.push({
          id: i,
          style: { backgroundColor: this.createRandomStringColor() },
        });
      }
      return arr;
    },
  },
};

Vue.mixin(miMixinGlobal);
