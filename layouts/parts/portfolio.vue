<template>
  <div id="portfolio-section">
    <div class="portfolio-container">
      <h2 class="section-title title is-2">Selected Works</h2>
      <div class="tile is-ancestor is-gapless projectList">
        <div class="tile is-6 is-vertical is-parent">
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">the company</p></div>
              <div class="projectImgContainer">
                <img class="projectImg" src="~/assets/img/ButterFairy-Menu.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">Christina Starr</p></div>
              <div class="projectImgContainer">
                <img
                  class="projectImg"
                  src="~/assets/img/studio-imphepho-aug-flyer.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-6 is-vertical is-parent">
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">Big Thought</p></div>
              <div class="projectImgContainer">
                <img class="projectImg" src="~/assets/img/Y2P-open-house-flyer-added links.png" alt="" />
              </div>
            </div>
          </div>
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">the company</p></div>
              <div class="projectImgContainer">
                <img class="projectImg" src="~/assets/img/AfroHouse-Memorial-Day-Party-Flyer.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio"
};
</script>

<style>
#portfolio-section {
  width: 100vw;
  min-height: 10vh;
  background: white;
  padding: 20vh;
}
.title {
  color: #0075ff;
}
.tile {
  display: flex !important;
  justify-items: center;
}
.tile.is-parent {
  padding: 2px;
}
.section-title {
  margin-bottom: 4rem !important;
  text-align: center;
}
.porfolio-container {
  max-width: 768px;
  display: flex;
}
.box {
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #0075ff;
  flex: 1;
  min-width: 250px;
  min-height: 250px;
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
}
.box:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.tile.is-vertical > .tile.is-child:not(:last-child) {
  margin-bottom: 4px !important;
}
.projectList{
  display: flex;
  flex-wrap:wrap;
}
.projectItem {
  display: flex;
  justify-content: center;
  align-items: center;
}
.projectImgContainer {
  max-height: 80%;
  max-width: 80%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  flex-direction: row;
}
.projectImg {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain !important;
}
.company {
  text-transform: uppercase;
  font-family: 'GT America Mono';
  color: #0075ff;
  font-weight: regular;
  position: absolute;
  bottom: 50%;
  right: 25px;
  -webkit-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -o-transform: rotate(270deg);
  transform: rotate(270deg);
  -webkit-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  transform-origin: right;
}

</style>
