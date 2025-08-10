const app = Vue.createApp({
  data() {
    return {
      current: '0',
      previous: null,
      operator: null
    }
  },

  methods: {
    append(number) {
      if (this.current === '0' || this.current === null) {
        this.current = number;
      } else {
        this.current += number;
      }
    },

    clear() {
      this.current = '0';
      this.previous = null;
      this.operator = null;
    },

    operand(operator) {
      this.previous = this.current;
      this.current = '0';
      this.operator = operator;
    },

    calculate() {
      let result = 0;
      const prev = parseFloat(this.previous);
      const curr = parseFloat(this.current);

      switch (this.operator) {
        case '+':
          result = prev + curr;
          break;
        case '-':
          result = prev - curr;
          break;
        case '*':
          result = prev * curr;
          break;
        case '/':
          result = prev / curr;
          break;
      }

      this.current = result.toString();
      this.previous = null;
      this.operator = null;
    },
  },

  computed: {
    displayValue() {
      if (this.operator != null && this.current === '0') {
        return this.operator;
      }
      return this.current;
    }
  }
});

app.mount('#app');
