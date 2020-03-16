<template>
  <nav class="header__nav">
    <a href="/">
      <logo class="header__logo" />
      <!--<img :src="`${logo}`" class="header__logo nav__link" />-->
    </a>
    <!--<router-link to="/tickets">Tickets</router-link>-->
    <div class="nav-links">
      <a
        target="_blank"
        href="https://www.eventbrite.com/e/crowfest-2020-tickets-92799043437#tickets"
      >Tickets</a>
      <router-link to="/artists">Schedule</router-link>
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
    font-size: 1rem;
    padding: 0 0.6rem;
  }
}

@media screen and (min-width: 35.9rem) {
  .header__logo {
    height: 6rem;
  }
  .header__nav {
    a {
      font-size: 1.8rem;
      padding: 0 0.8rem;
    }
  }
}

@media screen and (min-width: 56rem) {
  .header__logo {
    height: 8rem;
  }
  .header__nav {
    a {
      font-size: 2rem;
      padding: 0 1rem;
    }
  }
}
</style>