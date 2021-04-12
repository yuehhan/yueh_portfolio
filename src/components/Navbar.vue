<template>
  <div>
    <nav class="navbar navbar-expand-lg color-transition" :class="{'sugar': !nightMode,'bg-dark2': nightMode}">
      <div class="container">
        <a class="navbar-brand" href="/" @click.prevent="$emit('scroll', 'home')">
          <div class="name">
            <div class="title-name" :class="{ primary: !nightMode, 'text-light': nightMode }">
              <span class="braces">{</span> yueh han <span class="braces">}</span>
            </div>
          </div>
        </a>
        
        <button class="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"          
          aria-expanded="false"          
          data-toggle="collapse"          
          data-target="#navbarSupportedContent"
        >
          <span class="burger"><i class="fas fa-bars"></i></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">

            <li class="nav-item" v-for="(link, index) in navItems" :key="index">
              <a class="nav-link" :href="link" @click.prevent="$emit('scroll', link)" :class="{primary: !nightMode, 'text-light': nightMode }">
                <span class="braces">{</span> {{link}} <span class="braces">}</span>
              </a>
            </li>
            
            <li class="nav-item moon-item">
              <a class="nav-link" href="#" @click.prevent="changeMode">
                <i class="fas fa-moon" :class="{'tertiary': nightMode,'secondary': !nightMode}"></i>
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ['nightMode'],
  data() {
    return {
      navbarNightMode: this.nightMode,
      navItems: ['home', 'about', 'skills', 'projects', 'contact'],
    };
  },
  methods: {
    changeMode() {
      this.navbarNightMode = !this.navbarNightMode;
      this.$emit("nightMode", this.navbarNightMode);
    },
  },
};
</script>

<style scoped>
nav {
  border-bottom: 2px solid #6BCDFA;
  position: fixed !important;
  top:0;
  right:0;
  left:0;
  z-index:1030;
}

.braces {
  color:#6BD7FA;
  transition: 0.3s all;
  margin:0 2px;
}

.title-name {
  font-size: 35px;
  font-weight: 500;
  letter-spacing: 2px;
  transition: 0.5s all;
}

.container {
  width:100%;
  margin: 0 auto;
  padding:0;
  max-width:95rem;
}

.text-light.title-name:hover {
  color: #FAC993 !important;
}

.primary.title-name:hover {
  color: #AD763B;
}

a.primary:hover {
  color: #AD763B;
}

a.text-light:hover {
  color: #FAC993 !important;
}

.nav-item {
  position:relative;
}

.nav-item a {
  margin:0 10px;
}

.nav-link {
  font-weight: 600;
}

.navbar-collapse {
   justify-content: flex-end;
}

.navbar-nav {
  align-items: center;
}

.burger {
  color: #3990AD;
  font-size: 23px;
}

button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

.fa-moon:hover {
  transform:rotate(-20deg);
  transition: .3s ease;
}

.moon-text{
  position:absolute;
  width:100px;
  right:-25px;
  visibility: hidden;
  opacity: 0;
  top:40px;
  right:-25px;
  transition: all ease .5s;
  background:#262c30;
  padding:5px;
  border:1px solid;
  border-radius:10px;
}

.moon-item:hover .moon-text {
  visibility:visible;
  opacity:1;
}

.secondary-background {
  color: #6BCDFA;
  background:#EBF8FE;
}

.tertiary-background {
  color: #FAC993;
  background: #262c30;
}

</style>
