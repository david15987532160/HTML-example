export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    },
    data: function() {
      return {
        name: "David",
        age: 23,
        mail: "abc@gmail.com",
        link: 'http://facebook.com/quocanh.phamnguyen',
      };
    },
    computed: {
      reversedString: function() {
        return this.mail
          .split("")
          .reverse()
          .join("");
      }
    },
    methods: {
      changeValue: function() {
        // eslint-disable-next-line no-mixed-spaces-and-tabs
        this.mail = event.target.value;
      }
    },
  }