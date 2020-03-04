<template>
  <nav class="header__nav">
    <a href="/">
      <img :src="`${logo}`" class="header__logo nav__link" />
    </a>
    <!--<router-link to="/tickets">Tickets</router-link>-->
    <router-link to="/location">Location</router-link>
    <router-link to="/artists">Artists</router-link>
    <router-link to="/camping">Camping</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
  import logo from '../assets/icons/crow.svg';
  export default {
    data() {
      return {
        logo
      };
    }
  };
</script>

<style scoped lang="scss">
  .header__logo {
    display: inline-block;
    height: 3rem;
  }
</style>
