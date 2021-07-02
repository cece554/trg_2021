<template>
  <section class="about">
    <div class="aboutWrapper">
      <div class="aboutbox">
        <h3 class="who">Who am i?</h3>
        <p>Hey there, you can call me Collette. I’m a self-taught designer — think of me like a home-cook who throws the best dinner parties: Skilled in a little bit of everything, knows how to utilize resources, & will make sure everything is beautiful and consumable before the guests arrive  </p>
      </div>
      <div class="aboutbox">
        <h3 class="what">What do i do?</h3>
        <p>With a background in building businesses I approach the way design with that perspective. I know what it’s like to be the janitor, the marketing team, and the ceo all at once, my goal is to make it easier for your customers/fans to reach or recognize you while looking good.  </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style>
  .about{
    height: 100vh;
    width: 100vw;
  }

  .aboutWrapper{
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10em;
  }
  .aboutbox{
    font-family: 'GT America Mono';
    padding: 2em;
    border: 1px solid #0075ff;
    height: 30em;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  .aboutbox:not(:last-child){
    margin: 0 4px 0 0;
  }

  .aboutbox > h3{
    font-family: hanson;
    text-transform: uppercase;
  }

  @media (min-width: 1000px) {
  html, body {
    min-height: 630px;
  }

  header, main, footer {
    max-width: 80vw;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 990px) {
  .aboutWrapper{
    padding: 2em;
  }
}
@media only screen and (max-width: 600px) {
  .about{
    height: 100%;
    width: 100vw;
    padding: 0 0 8em 0;
  }
  .aboutWrapper{
    flex-wrap: wrap;
    padding: 1em;
  }
  .aboutbox:not(:last-child){
    margin: 0 0 4px 0;
  }
}
</style>
