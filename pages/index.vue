<template>
  <div class="content-section">
    <hero />
    <about />
    <portfolio />
  </div>
</template>

<script>


import Hero from '../layouts/parts/hero.vue'
import About from '../layouts/parts/about.vue'
import Portfolio from '../layouts/parts/portfolio.vue'



export default {
  components: { Hero, About, Portfolio, },
  name: 'HomePage',
}
</script>
<style lang="scss">

</style>
