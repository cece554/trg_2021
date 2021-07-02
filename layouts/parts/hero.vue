<template>
<section class="heroSection">
  <div class="splash">
    <div class="logo-container">
        <img class="logo" src="@/assets/logo.svg" alt="Thats Really Good Logo">
    </div>
    <h1 class="copy has-text-centered is-size-3">
          That’s Really Good is a creative studio dedicated to crafting engaging digital & IRL experiences while building frameworks for unforgettable brands
    </h1>
    <div class="cta button-group">
       <button class="button has-background-primary touch"><a href="collette@thatsreallygood.co">Get in Touch</a></button>
    </div>
    <a href="#" address="true" class="scrollDown">
       <svg version="1.1" id="svg-arrow-down" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 35" style="enable-background:new 0 0 22 35;" xml:space="preserve">
    <polygon class="arrow" style="fill:#0075FF;" points="20.58,11.584 12.004,20.158 12.004,0 9.996,0 9.996,20.158 1.42,11.584 0,13.004 11,24
					22,13.004 "></polygon>
  </svg>
    </a>
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
  background:#f5f5f5;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
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
  text-align: justify;
text-align-last: center;
}

.scrollDown {
  opacity: 1;
  -webkit-transition: all .5s ease-in 3s;
  transition: all .5s ease-in 3s;
}

.scrollDown {
  position: absolute;
  bottom: 30px;
  left: 50%;
  margin-left: -4px;
  display: block;
  width: 16px;
  height: 16px;
  background-size: 14px auto;
  border-radius: 50%;
  z-index: 2;
  -webkit-animation: bounce 2s infinite 2s;
  animation: bounce 2s infinite 2s;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  transform: scale(1)
}

.scrollDown:before {
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 6px);
    transform: rotate(-45deg);
    display: block;
    width: 12px;
    height: 12px;
}

@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}

 @media (min-width: 1000px) {

}
@media only screen and (max-width: 990px) {

}
@media only screen and (max-width: 600px) {
  .is-size-3{
   font-size: 1.5em !important;
 }
}
</style>
