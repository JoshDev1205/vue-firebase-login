<template>
    <div class="signup">
        <h3>Vamos, crea una nueva cuenta.</h3>
        <input type="email" v-model="email" placeholder="email"><br>
        <input type="password"  v-model="password" placeholder="password"><br>
        <button @click="signup">Registrarse</button>
        <span>Regresar al <router-link to="/login">inicio de sesion</router-link>.</span>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "",

  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },

          err => {
            alert("error: " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
.signup {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
