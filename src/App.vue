<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
</template>


<script>
import { defineComponent } from 'vue'
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: 'App',
  components: { Navbar },
  data() {
    return {
      key: '我是测试key'
    }
  },
  computed: {
    name() {
      return '我是测试name'
    }
  },
  methods: {
    log() {
      console.log(1);
    }
  },
  mounted() {
    this.log()
  },
})
</script>

<style>
#app{
  /*width: 600px;*/
  /*height: 400px;*/
}
</style>
