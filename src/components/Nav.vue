<template>
  <nav class="header__nav">
    <a href="/">
      <logo class="header__logo" />
      <!--<img :src="`${logo}`" class="header__logo nav__link" />-->
    </a>
    <!--<router-link to="/tickets">Tickets</router-link>-->
    <div class="nav-links">
      <router-link to="/artists">Artists</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/location">Location</router-link>
      <router-link to="/camping">Camping</router-link>
    </div>
  </nav>
</template>

<script>
//import logo from "../assets/icons/crow.svg";

export default {
  data() {
    return {
      //logo
    };
  }
};
</script>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;
  height: 10rem;
}

.nav-links {
  display: flex;
}

.header__logo {
  height: 3rem;
  width: auto;
  display: flex;
  fill: #eee;
}

.header__nav {
  a {
    text-decoration: none;
    font-size: 1.3rem;
    padding: 0 0.6rem;
  }
}
</style>
