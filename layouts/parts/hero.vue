<template>
<section class="heroSection">
  <div class="splash">
    <div class="logo-container">
        <img class="logo" src="@/assets/new-me.svg" alt="Thats Really Good Logo" >
    </div>
    <h1 class="copy has-text-centered is-size-3">
          That’s Really Good is a creative studio dedicated to crafting engaging digital & IRL experiences while building frameworks for unforgettable brands
    </h1>
    <div class="cta button-group">
       <button class="button has-background-primary touch"><a href="collette@thatsreallygood.co">Get in Touch</a></button>
    </div>
  </div>
</section>
</template>

<script>
  export default {
  name: 'Hero',
}
</script>

<style>
.heroSection{
  background:#A0EE9A;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-content: center;
  justify-content: center;
}
.splash{
  padding: 3em 0 2em 0;
  display: flex;
  max-width: 750px;
  flex-direction: column;

}

.logo-container{
  display: flex;
  justify-content: center;

}
.logo{
  max-width: 300px;
  padding-bottom: 4em;

}
.copy{
  margin: 0 1em;
}
</style>
