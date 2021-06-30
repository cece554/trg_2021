<template>
  <div class="content-section">
    <hero />
    <portfolio />
  </div>
</template>

<script>

import Hero from '../layouts/parts/hero.vue'
import Portfolio from '../layouts/parts/portfolio.vue'



export default {
  components: { Hero, Portfolio, },
  name: 'HomePage',
}
</script>
<style lang="scss">

</style>
