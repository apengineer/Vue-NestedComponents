<template>
  <div id="app">
    <app-header v-on:eventChangeTitle="changeTitle($event)"></app-header>
    <app-content v-bind:moviesProp="movies"></app-content>
    <app-footer v-bind:footerTitle="footerTitle"></app-footer>

  </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import Content from './components/content.vue'
export default {
  name: 'app',
  components :{
    'app-header': Header,
    'app-footer': Footer,
    'app-content': Content
  },
  data () {
    return {
      movies : [
        {name: 'The Blind Side' , IMDBRtaing: 8.7, show: false, boxOffice : '10M'},
        {name: 'Ghost Rider' , IMDBRtaing: 6.5, show: false, boxOffice: '2M'},
        {name: 'Inception' , IMDBRtaing: 9.0, show: false, boxOffice: '50M'},
      ],
      footerTitle: 'Footer title'
    }
  },
  methods: {
    changeTitle: function(updatedFooterTitle){
      this.footerTitle =updatedFooterTitle;
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
