<template>
  <header
    :style="{
      backgroundImage: `url('${schedule[x].img}')`
    }"
    class="header"
  >
    <div class="screen">
      <h1 class="title">{{ title }}</h1>

      <ticket-button />
    </div>
  </header>
</template>

<script>
  import schedule from '../assets/data/schedule';
  const x = Math.floor(Math.random() * schedule.length);
  const title = 'Crowfest2020';
  export default {
    data() {
      return {
        schedule,
        title,
        x
      };
    }

    /*,
    computed: {
      username() {
        return this.$route.params.username;
      }
    },
    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/');
      }
    }*/
  };
</script>

<style scoped lang="scss">
  .header {
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    position: relative;
  }

  .title {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
  }

  .screen {
    background-color: rgba(0, 0, 0, 0.4);
    height: 100%;
    padding: 1em;
  }
</style>
