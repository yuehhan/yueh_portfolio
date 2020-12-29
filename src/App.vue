<template>
  <div id="app" :class="{ 'text-dark': !nightMode, 'text-light': nightMode }">
    <Navbar @scroll="scrollTo" @nightMode="switchMode" :nightMode="nightMode" />
    
    <div class="parent">
      <Home :nightMode="nightMode" />
      <About id="about" :nightMode="nightMode" />
      <Skills id="skills" :nightMode="nightMode" />
      <Portfolio id="projects" :nightMode="nightMode" />
      <Contact id="contact" :nightMode="nightMode" />
      <Footer :nightMode="nightMode" />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import info from "../info";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Portfolio,
    Contact,
    Footer
  },
  data() {
    return {
      nightMode: true
    };
  },
  mounted: function() {
    ["about", "contact", "skills", "projects"].forEach((l) => {
      if (window.location.href.includes(l)) {
        var elementPosition = document.getElementById(l).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
      }
    });
  },
  methods: {
    switchMode() {
      this.nightMode = !this.nightMode;
    },
    scrollTo(ele) {
      if (ele == "home") {
        this.$router.push(`/`);
        window.scrollTo({ top: -80, behavior: "smooth" });
      } else {
        console.log(ele)
        var elementPosition = document.getElementById(ele).offsetTop;
        window.scrollTo({ top: elementPosition - 35, behavior: "smooth" });
        if (this.$router.history.current.path !== `/${ele}`)
          this.$router.push(`/${ele}`);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}

@media screen and (max-width: 580px) {
  #app {
    width: fit-content;
  }
}

body {
  margin: 0;
  padding: 0;
}

.parent {
  margin-top: 38px;
  padding-top: 40px;
  position: relative;
}

.line-break {
  width:100%;
}

.line-break hr{
  width:50%;
  border-bottom:2px solid #6BCDFA;
}

.primary {
  color: #3990AD;
}

.secondary {
  color: #6BCDFA;
}

.tertiary {
  color: #FAC993;
}

.quaternary {
  color: #AD763B;
}

.sugar {
  background-color:#EBF8FE;
}

.white {
  background-color: #fff;
}

.bg-dark2 {
  background-color: #262c30 !important;
}

.text-light {
  color: #dfdbdb;
}

.color-transition {
  transition: all 0.5s !important;
}

.keyword1 {
  color: #569CD6;
}
.keyword2 {
  color: #4EC9B0;
}
.keyword3 {
  color: #CE9178; /*string color */
}
.keyword4 {
  color: #DCDCAA; 
}
.keyword5 {
  color: #9CDCFE;
}
.keyword6 {
  color: #B267E6;
}
.keyword7 {
  color:#9CDCFE;
}

/* To set scrollbar width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 9px;
  border: 2px solid white; /* Use your background color instead of White */
  background-clip: content-box;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 9px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
