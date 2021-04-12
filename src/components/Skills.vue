<template>
  <div :class="{ 'sugar': !nightMode, 'bg-dark': nightMode }" class="color-transition skills-main">
    <div class="container">
      <div class="text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
        <span class="title text-center" :class="{ primary: !nightMode, secondary: nightMode }">skills.</span>
      </div>
      <div class="line-break"><hr></div>
      <br />

      <div class="skill-items">
        <div
          class="skill text-center"
          v-for="(skill, index) in skills" :key="skill.title"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"          
          :style="{ 'transition-delay': index / 4 + 's' }"
        >
          <div :class="{quaternary: !nightMode, tertiary: nightMode}"><i :class="skill.icon"></i></div>
          <div class="title2" :class="{quaternary: !nightMode, tertiary: nightMode}">{{ skill.title }}</div>
          <div class="line-break"><hr></div>
          <span class="title3">{{ skill.info.join(", ") }}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Skills",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      skills: info.skills,
    };
  },
};
</script>

<style scoped>
.skills-main {
  position:relative;
}

.skills-pic {
  position:absolute;
  height:120%;
  top:-10%;
}

.container {
  padding: 1.5rem 0;
}

.skill-items {
  display:flex;
  flex-wrap:wrap;
  margin:0 15px;
}

.skill {
  padding:0 1.5rem 3rem 1.5rem;
  position:relative;
  width: 100%;

}

@media(min-width: 1200px){
  .skill {
    flex: 0 0 33.3%;
    max-width: 33.3%;
  }
}

@media(max-width: 1500px){
  .skills-pic{
    display:none;
  }
}

.title {
  font-size: 2rem;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 500;
  padding-top:.5rem;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.fa {
  font-size: 40px;
  transition: all 0.5s;
}

.fas {
  font-size: 40px;
  /* font-weight: bold; */
  transition: all 0.5s;
}
</style>
