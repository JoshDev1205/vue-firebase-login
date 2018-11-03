<template>
    <div class="login">
        <h3>Login</h3>
        <input type="email" v-model="email" placeholder="email"><br>
        <input type="password" v-model="password" placeholder="password"><br>
        <button @click="signin">Conectar</button>
        <p>¿No tienes cuenta? <router-link to="/signup">create una</router-link>.</p>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "login",

  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
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
.login {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}

p {
  margin-top: 40px;
  font-size: 13px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
