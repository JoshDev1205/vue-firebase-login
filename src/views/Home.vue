<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import EventBus from "@/plugins/event-bus";
export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
