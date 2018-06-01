<template>
  <div id="paradigma-capital">
    <div class="main-wrapper">
      <nav class="main-nav">
        <router-link class="main-nav-link" active-class="active" to="/" exact>Homepage</router-link>
        <router-link class="main-nav-link" active-class="active" to="/about">About</router-link>
        <router-link class="main-nav-link" active-class="active" to="/read">Read</router-link>
        <router-link class="main-nav-link" active-class="active" to="/contact">Contact</router-link>
      </nav>
      <main id="main">
        <router-view></router-view>
      </main>
<!--       <div class="page-index">
        <p class="page-index-text" :class="{'active': pageIndex === 'Homepage'}">Homepage</p>
        <p class="page-index-text" :class="{'active': pageIndex === 'About'}">About</p>
        <p class="page-index-text" :class="{'active': pageIndex === 'Read'}">Read</p>
        <p class="page-index-text" :class="{'active': pageIndex === 'Contact'}">Contact</p>
      </div> -->
    </div>
    <div class="scene">
      <div class="scene-item scene-mountain"></div>
      <div class="scene-item scene-person"></div>
      <div class="scene-item scene-spaceship"></div>
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
  }
}
</script>

<style lang="scss">
  @import '../styles/main.scss';
</style>
