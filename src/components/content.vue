<template>
<header>
  <div>
    <ul>
      <li v-for ="movie in moviesProp" v-on:click="movie.show = !movie.show">
        <h2> {{movie.name}}</h2>
        <p>
          {{movie.IMDBRtaing}}
        </p>
        <p v-show="movie.show">
          Box office : {{movie.boxOffice}}
        </p>
      </li>
    </ul>
  </div>
</header>
</template>

<script>
export default {
  props: {
    moviesProp: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

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
  display: inline-table;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
