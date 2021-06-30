<template>
<div class="gradient-section">
    <div class="gradient"></div>
</div>
</template>

<script>
export default {
  name: 'Gradient',
}
</script>
<style>
  .gradient{
    width: 100vw;
    height: 200px;
     background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(160,238,154,1) 0%, rgba(255,255,255,1) 100%);
  }
</style>
