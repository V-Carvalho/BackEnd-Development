const user = {
  id: 0,
  age: "",
  name: "",
  email: "",
  password: "",
  profile: "",

  newUser: function (age, name, email, password, profile) {
    this.id += 1;
    this.age = age;
    this.password = password;
    this.email = email;
    this.name = name;
    this.profile = profile;

    return {
      id: this.id,
      age: this.age,
      name: this.name,
      email: this.email,
      password: this.password,
      profile: this.profile,
    };
  },

  updateData: function (age, name, email, password, profile) {
    this.age = age;
    this.password = password;
    this.email = email;
    this.name = name;
    this.profile = profile;

    return {
      age: this.age,
      name: this.name,
      email: this.email,
      password: this.password,
      profile: this.profile,
    };
  },

  login: function (email, password) {
    return (email == this.email && password == this.password);
  },

  logout: function (isLogged) {
    if (isLogged)
    return true   
  }
};

module.exports = {
  user,
};
