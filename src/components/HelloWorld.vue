<template>
  <div class="hello">
    Hola
    <button @click="logout">Salir</button>
    <button @click="guardar">guardar</button>
  </div>
</template>

<script>
import firebase from "firebase/app";
import EventBus from "@/plugins/event-bus";

export default {
  name: "HelloWorld",
  props: {
    msg: String
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
      EventBus.$on("userActive", data => {
        console.log(data)
      });
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
