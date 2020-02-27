<template>
  <header class="header">
    <a href="tickets.html">
      <button class="btn btn--color-primary btn--center">Tickets</button>
    </a>
  </header>
</template>

<script>
export default {
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username;
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  }
};
</script>