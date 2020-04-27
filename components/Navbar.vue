<template>
  <header class="header">
      <h1 class="header-title">Valui UI Test</h1>
      <ul>
          <li>
              <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
              <nuxt-link to="/tags">Tags</nuxt-link>
          </li>
          <li>
              <nuxt-link to="/about">About</nuxt-link>
          </li>
      </ul>
  </header>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        padding: 1rem 0.5rem;
        border-bottom: 1px dotted #CCC;
    }

    .header-title {
        font-size: 2rem;
        color: #526488;
    }

    .header ul {
        display: flex;
        flex-direction: row;
    }

    .header a {
        display: inline-block;
        background: #333;
        color: #FFF;
        padding: 0.3rem 1rem;
        margin: 0.5rem;
    }

</style>