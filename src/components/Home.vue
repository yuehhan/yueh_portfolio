<template>
  <div class="color-transition home-main" :class="{ 'sugar': !nightMode, 'bg-dark': nightMode }">
    <div data-aos="fade" data-aos-once="true" data-aos-duration="1000" class="landing">
      <div class="landing-wrapper">
        <img class="landing-image" src="../assets/landing_final.svg" alt="landing-page-image">
        <div class="landing-text">
          <div id="text"></div>
        </div>
      </div>

      <div class="mobile-landing">
        <div class="mobile-text">
          <div id="text2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";
import TypeIt from "typeit"

export default {
  name: "Home",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      linkedin: info.links.linkedin,
      github: info.links.github,
      resume: info.links.resume
    };
  },
  methods: {
    open(link) {
      switch (link) {
        case "linkedin":
          window.open(this.linkedin, "_blank");
          break;
        case "github":
          window.open(this.github, "_blank");
          break;
        case "resume":
          window.open(this.resume, "_blank");
          break;
      }
    },
  },
  mounted: function(){
    var ids = ["#text", "#text2"]
    for(var id of ids){
      new TypeIt(id, {
        speed: 50,
      })
      .type('<span class="keyword1">class</span> <span class="keyword2">Yueh</span> <span class="keyword1">extends</span> <span class="keyword2">softwareDeveloper</span> <span class="keyword1">{</span>')
      .pause(800).break({delay: 800})
      .type('&emsp; <span class="keyword1">constructor</span><span class="keyword4">() {</span>')
      .pause(800).break({delay: 800})
      .type('&emsp; &emsp; <span class="keyword1">const</span> <span class="keyword5">my</span> <span class="text-light">=</span> <span class="keyword1">this</span><span class="text-light">;</span>')
      .pause(800).break({delay: 500})
      .type('&emsp; &emsp; <span class="keyword5">my</span><span class="text-light">.</span><span class="keyword5">fullName</span> <span class="text-light">=</span> <span class="keyword3">"Yueh Han"</span><span class="text-light">;</span>')
      .pause(800).break({delay: 500})
      .type('&emsp; &emsp; <span class="keyword5">my</span><span class="text-light">.</span><span class="keyword5">age</span> <span class="text-light">=</span> <span class="keyword5">new</span> <span class="keyword2">Date</span><span class="keyword6">()</span>'+
      '<span class="keyword4">.getFullYear</span><span class="keyword6">()</span> <span class="text-light">-</span> <span class="keyword7">1996</span><span class="text-light">;</span>')
      .pause(800).break({delay: 800})
      .type('&emsp; &emsp; <span class="keyword5">my</span><span class="text-light">.</span><span class="keyword5">traits</span> <span class="text-light">=</span> <span class="keyword6">[</span>')
      .pause(800).break({delay: 300})
      .type('&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <span class="keyword3">"full-stack developer"</span><span class="text-light">,</span>')
      .break({delay:300})
      .type('&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <span class="keyword3">"self-taught"</span><span class="text-light">,</span>')
      .pause(1500).break()
      .type('&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <span class="keyword3">"passionate about software"</span><span class="text-light">,</span>')
      .pause(800).break()
      .type('&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <span class="keyword3">"creative problem-solver"</span><span class="text-light">,</span>')
      .pause(800).break({delay:200})
      .type('&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <span class="keyword3">"cool guy"')
      .pause(2500)
      .move(-9)
      .type('super ')
      .pause(1200)
      .move(8)
      .delete(14)
      .pause(1200)
      .type('team player')
      .move(1).pause(500).break()
      .type('&emsp; &emsp; <span class="keyword6">]</span>')
      .break({delay: 800})
      .pause(500)
      .type('&emsp; <span class="keyword4">}</span>')
      .break({delay: 800})
      .type('<span class="keyword1">}</span>')
      .go();
    }
  }
  
};
</script>

<style scoped>
.home-main {
  height:75vh;
  /* background-image:url(../assets/clouds.jpg); */
}

.landing {
  position:relative;
  display:flex;
  justify-content: center;
}

.landing-wrapper {
  padding-top:5%;
  position:relative;
  display: inline-block;
  margin: auto 0;
}

.landing-image {
  display:block;
  max-width: 100%; 
}

.landing-text {
  position: absolute;
  width: 57.6%;
  height: 65%;
  top: 21%;
  left: 36.5%;
  padding:1%;
  overflow:hidden;
}

.mobile-landing{
  display:none;
  width:100%;
  height:90vh;
  padding:2%;
  background: #0C242D;
}

.mobile-text {
  display:block;
  height:100%;
  width:100%;
}

@media only screen and (max-width: 580px) {
  .landing-wrapper{
    display:none;
  }
  .mobile-landing {
    display:block;
  }
  .home-main {
    height:100%;
  }
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

</style>
