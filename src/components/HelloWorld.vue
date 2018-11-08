<template>
  <div class="hello">
    Hola
    <button @click="logout">Salir</button>
    <button @click="guardar">guardar</button>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      currentUser: null
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    },

    guardar() {
      this.currentUser = firebase.auth().currentUser
      console.log({usuario: this.currentUser})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
