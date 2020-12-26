<template>
  <div class="about-page color-transition" :class="{ 'white': !nightMode, 'bg-dark2': nightMode }" >

    <div class="container" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
      <div class="container-content">
        <span class="about-title" :class="{ primary: !nightMode, secondary: nightMode }"> about me. </span>
        <div class="line-break"><hr></div>
     
        <div class="content-half text-center">
          <img :src="picture" />
        </div>
        
        <div class="content-half">
          <span class="home-title" :class="{ quaternary: !nightMode, tertiary: nightMode }">greetings!</span>
          <div>
            <p v-html="description"></p>
          </div>
          
          <div class="text-center" :class="{linkClass: nightMode, linkClassDark: !nightMode}">
            <div class="link-wrapper" v-for="(link, index) in links" :key="index">
              <a class="link" :href="link.href" target="_blank"><i :class="link.icon"></i></a>
              <div class="tooltiptext"  :class="{ 'quaternary': !nightMode, 'tertiary': nightMode }">{{link.name}}</div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Home",
  props: ['nightMode'],
  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      links: [
        {'name': 'linkedin', 'icon': 'fab fa-linkedin', 'href': info.links.linkedin},
        {'name': 'github', 'icon': 'fab fa-github', 'href': info.links.github},
        {'name': 'resume', 'icon': 'fas fa-file-alt', 'href': info.links.resume},
        {'name': 'email', 'icon': 'fas fa-envelope', 'href': info.links.email},
      ]
    };
  }
};
</script>

<style scoped>
.about-page {
  padding-top: 3rem;
}

.container .container-content {
  align-items:center;
  display:flex;
  flex-wrap:wrap;
  margin: 0 15px;
}

.container .container-content .content-half {
  flex: 0 0 50%;
  width:50%;
}

.home-title {
  font-size: 28px;
  font-weight: 500;
}

.about-title {
  font-size: 30px;
  font-weight: 500;
  text-align:center;
  width:100%;
}

img {
  max-width: 300px;
  margin-bottom: 60px;
}

.link-wrapper {
  display:inline-block;
  position:relative;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.link-wrapper .tooltiptext {
  visibility: hidden;
  font-size:1rem;
  width: 80px;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
}

.link-wrapper:hover .tooltiptext {
  visibility: visible;
}

@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid #FAC993;
  }

  .about-title {
    display:block;
  }

  .content-half {
    width: 100% !important;
  }
  .container-content {
    display:block !important;
  }
}

.linkClass, .linkClassDark {
  display:flex;
  width:100%;
  justify-content: center;
  font-size:1.5rem;
  padding-bottom:20px;
}

.linkClass a {
  color: #FAC993;
  border:solid 2px #FAC993;
  padding: 2px 4px;
  border-radius:60px;
  margin:10px;
}

.linkClass a:hover {
  color: #6BCDFA;
  border-color: #8f9496;
}

.linkClassDark a {
  color: #AD763B;
  border:solid 2px #AD763B;
  padding: 2px 4px;
  border-radius:60px;
  margin:10px;
}

.linkClassDark a:hover {
  color: #3990AD;
  border-color: #3990AD;
}

p {
  text-align: justify;
  font-weight: 400;
}

</style>
