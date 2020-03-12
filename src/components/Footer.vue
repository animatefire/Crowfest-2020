<template>
  <footer class="footer">
    <div class="footer-links">
      <h5>Contact</h5>
      <ul>
        <li>
          <p>607-798-0264</p>
        </li>
        <li>
          <p>info@crowfest.org</p>
        </li>
        <li>
          <a href="https://www.facebook.com/CrowfestNY/" class="link">
            <p>Facebook</p>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  height: 15rem;
  padding: 2rem;
  max-height: 33vh;

  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;
}
p {
  font-size: 1.1rem;
}

ul {
  list-style: none;
}

a {
  line-height: 2rem;
}

.footer-links {
  display: flex;
  &__ul {
    list-style-type: none;
  }

  li {
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
  }
}
</style>
