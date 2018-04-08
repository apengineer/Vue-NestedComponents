<template>
<header>
  <div>
    <h1> Nested components Example</h1>
  <p v-on:click="changeTitle">
    {{title}}
  </p>
  </div>
</header>
</template>

<script>

export default {

  data () {
    return {
      title: 'Click on movie name to see box office collection'
    }
  },
  methods: {
    changeTitle : function(){
      let newTitle ="Fire events example"
      this.$emit('eventChangeTitle', newTitle);
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
