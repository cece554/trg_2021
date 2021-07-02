<template>
  <section id="portfolioSection">
    <div class="portfolioContainer">
      <h2 class="section-title title is-2">Selected Works</h2>
      <div class="projectList tile is-ancestor is-gapless">
        <div class="tile is-6 is-vertical is-parent">
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">the butter fairy</p></div>
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
              <div class="projectFor"><p class="company">christina starr</p></div>
              <div class="projectImgContainer">
                <img class="projectImg" src="~/assets/img/AfroHouse-Memorial-Day-Party-Flyer.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio"
};
</script>

<style>
#portfolioSection {
  width: 100vw;
  background: white;
  padding: 8em 0;
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
  margin-bottom: 4em !important;
  text-align: center;
}
.portfolioContainer {
 padding: 0 4em;
}
.box {
  border-radius: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #0075ff;
  flex: 1;
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
  margin: 2em;
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
  bottom: 16px;
  right: 16px;
}

 @media (min-width: 1000px) {

}
@media only screen and (max-width: 990px) {
 .title.is-2{
   font-size: 2em;
 }
}
@media only screen and (max-width: 600px) {
.projectList{
  display: flex;
  flex-direction: column;
}
.portfolioContainer{
  padding: 0 1em;
}
}
</style>
