<template>
  <div id="paradigma-capital">
    <div class="main-wrapper">
      <nav class="main-nav">
        <router-link class="main-nav-link" active-class="active" to="/" exact>Home</router-link>
        <router-link class="main-nav-link" active-class="active" to="/about">About</router-link>
        <router-link class="main-nav-link" active-class="active" to="/read">Read</router-link>
        <router-link class="main-nav-link" active-class="active" to="/contact">Contact</router-link>
      </nav>
      <main id="main">
        <router-view></router-view>
      </main>
      <div class="page-index">{{ pageIndex }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    pageIndex () {
      return this.$route.name
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  updated (event) {
    console.log(this, event)
  }
}
</script>

<style lang="scss">
  @import '../styles/main.scss';
</style>
