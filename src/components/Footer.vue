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
            <facebook-icon class="icon" />
          </a>
        </li>
      </ul>
    </div>
    <a
      target="_blank"
      href="https://www.facebook.com/pages/category/Event/Audie-J-Mincer-PTSD-Cancer-Awareness-1850863508329391/"
    >
      <mincer class="icon footer--mincer" />
    </a>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  //height: 15rem;
  padding: 2rem;
  max-height: 33vh;

  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;
}
p {
  font-size: 1.1rem;
  line-height: 1rem;
}

.icon {
  height: 1.6rem;
}

.footer--mincer {
  height: 7rem;
  width: auto;
}

h5 {
  margin-bottom: 1rem;
}

ul {
  list-style: none;
}

.footer-links {
  //display: flex;
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
