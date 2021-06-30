<template>
  <div id="main">
   <section>
      <div class="container">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>

<style>
@import '~assets/styles/css/main.css';
body{
  font-family: 'Hanson' !important;
  color: #0075FF;
  line-height: 1.1;
}



</style>
