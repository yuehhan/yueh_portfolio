<template>
  <div class="footer-main" :class="{'white': !nightMode,'bg-dark': nightMode}">
    <div class="container">
      <div class="container-wrapper">
        <span class="origin" :class="{'tertiary': nightMode,'quaternary': !nightMode,}"> made with <i class="fas fa-heart"></i> using Vue.js</span>

          <div class="text-center" :class="{linkClass: nightMode, linkClassDark: !nightMode}">
            <div class="link-wrapper" v-for="(link, index) in links" :key="index">
              <a class="link" :href="link.href" target="_blank"><i :class="link.icon"></i></a>
              <div class="tooltiptext"  :class="{ 'quaternary': !nightMode, 'tertiary': nightMode }">{{link.name}}</div>

            </div>
          </div>
      </div>    
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Footer",
  props: ['nightMode'],
  data() {
    return {
      links: [
        {'name': 'linkedin', 'icon': 'fab fa-linkedin', 'href': info.links.linkedin},
        {'name': 'github', 'icon': 'fab fa-github', 'href': info.links.github},
        {'name': 'resume', 'icon': 'fas fa-file-alt', 'href': info.links.resume},
        {'name': 'email', 'icon': 'fas fa-envelope', 'href': info.links.email},
      ]
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
};
</script>

<style scoped>
.footer-main {
  border-top: 2px solid #6BCDFA;
}

.container {
  padding: 1rem 0;
  height:111px;
}

.container-wrapper {
  padding-top:.1rem;
  align-items: center;
  display:flex;
  flex-wrap: wrap;
  margin: 0 15px;
  justify-content: space-evenly;
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

.linkClass, .linkClassDark {
  display:flex;
  width:100%;
  justify-content: center;
  font-size:1.5rem;
  padding-bottom:10px;
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

.fa-heart {
  color:red;
}
</style>
