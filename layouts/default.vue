<template>
  <div>
    <Navigator></Navigator>
    <nuxt />
  </div>
</template>

<script>
import Navigator from "../components/Navbar";

export default {
  components: {
    Navigator
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background: #f4f4f4;
}

a {
  color: #666;
  text-decoration: none;
}

ul {
  list-style: none;
}

.container {
  max-width: 978px;
  margin: 2rem auto;
  overflow: hidden;
  padding: 1rem;
  background: #fff;
}
</style>
