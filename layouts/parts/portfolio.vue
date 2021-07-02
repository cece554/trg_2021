<template>
  <section id="portfolioSection">
    <div class="portfolioContainer">
      <h2 class="section-title title is-3">Selected Works</h2>
      <div class="projectList tile is-ancestor is-gapless">
        <div class="tile is-6 is-vertical is-parent">
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">christina starr</p></div>
              <div class="projectImgContainer">
                <img class="projectImg" src="~/assets/img/studio-imphepo-flyer-July-v4-Approved.png" alt="" />
              </div>
            </div>
          </div>
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">Big Thought</p></div>
              <div class="projectImgContainer">
                <img
                  class="projectImg"
                  src="~/assets/img/Y2P-open-house-flyer-added links.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">BN</p></div>
              <div class="projectImgContainer">
                <img
                  class="projectImg"
                  src="~/assets/img/bn-logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">The Butter Fairy</p></div>
              <div class="projectImgContainer">
                <img
                  class="projectImg"
                  src="~/assets/img/ButterFairy-Menu.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">Timberlight Photogrphy</p></div>
              <div class="projectImgContainer">
                <img
                  class="projectImg"
                  src="~/assets/img/timberlight-emblem.png"
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
                <img class="projectImg" src="~/assets/img/y2p-flyer-irl.jpg" alt="" />
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
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">Can We Kick It?</p></div>
              <div class="projectImgContainer">
                <img
                  class="projectImg"
                  src="~/assets/img/can-we-kick-it-logo.png"
                  alt=""
                />
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
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">Christina Starr</p></div>
              <div class="projectImgContainer">
                <img
                  class="projectImg"
                  src="~/assets/img/studio-imphepo-flyer-June-new-date-Approved.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">Good Green</p></div>
              <div class="projectImgContainer">
                <img
                  class="projectImg"
                  src="~/assets/img/gg-christmas-ig-stories.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="tile is-child box">
            <div class="projectItem">
              <div class="projectFor"><p class="company">Good Green</p></div>
              <div class="projectImgContainer">
                <img
                  class="projectImg"
                  src="~/assets/img/gg-website.png"
                  alt=""
                />
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
  background: #f5f5f5;
  padding: 8em 0;
}
.title {
  color: #0075ff;
  font-size: 1em;
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
  background: #f5f5f5;
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
  max-height: 85%;
  max-width: 85%;
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
  text-align: center;
  font-weight: regular;
  position: absolute;
  right: 16px;
  bottom: 16px;
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
