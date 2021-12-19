const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      username: "xDDDDslayer",
      age: "12",
      email: "John@gmail.com",
      cell: "00103203203201",
      location: "Köping",
      country: "Sweden",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/50.jpg",
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.username = results[0].login.username;
      this.age = results[0].dob.age;
      this.cell = results[0].cell;
      this.location = results[0].location.city;
      this.country = results[0].location.country;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
