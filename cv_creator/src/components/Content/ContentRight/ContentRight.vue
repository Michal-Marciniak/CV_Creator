<template>
  <div class="contentRight">
    <div class="contentRight__header">
      <div
        class="contentRight__header-text"
        v-if="user.name === '' && user.lastname === ''"
      >
        Your Name
      </div>
      <div v-else class="contentRight__header-text">
        {{ user.name }} {{ user.lastname }}
      </div>
    </div>
    <div class="contentRight__data">
      <!----------- Expirience & Skills ---------->
      <div class="contentRight__data-left">
        <div class="contentRight__data-left-container">
          <!----------------- Expirience -------------------->
          <div class="work-expirience-text">Work Expirience</div>
          <contentRightWorkExpirience
            v-for="(job, index) in jobs"
            :key="index"
            :index="index"
            class="single-work"
          >
          </contentRightWorkExpirience>

          <div class="skills-text">Skills</div>
          <contentRightSkills
            v-for="(skill, index) in skills"
            :key="index"
            :props_skill_index="index"
            class="single-skill"
          >
          </contentRightSkills>
        </div>
      </div>
      <!----------- Personal Data ---------->
      <div class="contentRight__data-right">
        <article class="contentRight__data-article">
          <div>
            <img class="article__image" />
          </div>
          <div class="article__text">
            <div class="article-description">
              Personal Data:
            </div>
            <div class="personal-data" v-if="showEmail">
              <i class="fa fa-envelope-square article__icon"></i>
              {{ user.email }}
            </div>
            <div class="personal-data" v-if="showNumber">
              <i class="fa fa-phone article__icon"></i>
              {{ user.number }}
            </div>
            <div class="personal-data">
              <i class="fa fa-map-marker article__icon"></i>
              {{ user.adress }}
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import contentRightWorkExpirience from "./ContentRightWorkExpirience";
import contentRightSkills from "./ContentRightSkills";

export default {
  computed: {
    ...mapGetters([
      "state",
      "currentJob",
      "user",
      "showEmail",
      "showNumber",
      "jobs",
      "skills"
    ])
  },
  components: {
    contentRightWorkExpirience,
    contentRightSkills
  }
};
</script>

<style scoped>
.contentRight {
  height: 100%;
}
.contentRight__header {
  padding: 0.2vw;
  background-color: #3e3e3e;
  color: whitesmoke;
}
.contentRight__header-text {
  letter-spacing: 0.1rem;
  font-size: 2.5vw;
  padding: 1vw 2vw;
}
.contentRight__data {
  height: 102vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
}

/******* Personal Data **********/
.contentRight__data-right {
  background-color: lightgray;
  height: 100%;
}
.contentRight__data-article {
  padding: 0.5vw;
  justify-content: center;
  align-items: center;
}
.article__image {
  transform: scale(0.5);
}
.article-description {
  padding: 0.5vw;
  font-size: 1.2vw;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
}
.article__text {
  text-align: center;
  font-size: 1vw;
}
.personal-data {
  padding: 0.2vw 0;
}
.article__icon {
  padding-right: 0.5vw;
}

/* Mobile phones */
@media screen and (max-width: 543px) {
  .contentRight__header-text {
    font-size: 5vw;
  }
  .personal-data {
    padding: 0.5vw 0;
    font-size: 2.2vw;
  }
  .article-description {
    font-size: 2.8vw;
    padding-bottom: 1vw;
  }
  .work-expirience-text {
    font-size: 2.3vw;
    margin: 2vh 2vw -0.5vh 2vw;
  }
  .skills-text {
    font-size: 2.3vw;
    margin: 2vh 2vw -0.5vh 2vw;
  }
  .single-work {
    margin: 1.5vh 0vw -5vh 0vw;
  }
}

/* Small devices */
@media screen and (min-width: 544px) and (max-width: 767px) {
  .contentRight__header-text {
    font-size: 5vw;
  }
  .personal-data {
    padding: 0.5vw 0;
    font-size: 2vw;
  }
  .article-description {
    font-size: 2.5vw;
    padding-bottom: 1vw;
  }
  .work-expirience-text {
    font-size: 2.5vw;
    margin: 2vh 2vw -1vh 2vw;
  }
  .skills-text {
    font-size: 2.5vw;
    margin: 2vh 2vw -1vh 2vw;
  }
  .single-work {
    margin: 1.5vh 0vw -7vh 0vw;
  }
}

/* Medium devices */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .contentRight__header-text {
    font-size: 4vw;
  }
  .personal-data {
    padding: 0.5vw 0;
    font-size: 1.8vw;
  }
  .article-description {
    font-size: 2.5vw;
    padding-bottom: 1vw;
  }
  .work-expirience-text {
    font-size: 2vw;
    margin: 2vh 2vw -3vh 2vw;
  }
  .skills-text {
    font-size: 2vw;
    margin: 2vh 2vw -3vh 2vw;
  }
  .single-work {
    margin: 1.5vh 0vw -7vh 0vw;
  }
}

/* Large devices */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .contentRight__header-text {
    font-size: 3vw;
  }
  .personal-data {
    padding: 0.5vw 0;
    font-size: 1.2vw;
  }
  .article-description {
    font-size: 1.5vw;
    padding-bottom: 1vw;
  }
  .work-expirience-text {
    font-size: 1.5vw;
    margin: 2vh 2vw -5vh 2vw;
  }
  .skills-text {
    font-size: 1.5vw;
    margin: 2vh 2vw -5vh 2vw;
  }
  .single-work {
    margin: 1.5vh 0vw -7vh 0vw;
  }
}

/* Extra Large devices */
@media screen and (min-width: 1200px) {
  .contentRight__header-text {
    font-size: 3vw;
  }
  .personal-data {
    padding: 0.5vw 0;
    font-size: 1.1vw;
  }
  .article-description {
    font-size: 1.5vw;
    padding-bottom: 1vw;
  }
  .work-expirience-text {
    font-size: 1.5vw;
    margin: 2vh 2vw -5vh 2vw;
  }
  .skills-text {
    font-size: 1.5vw;
    margin: 2vh 2vw -5vh 2vw;
  }
  .single-work {
    margin: 1.5vh 0vw -8vh 0vw;
  }
}

/******* Work expirience & Skills ******/
.contentRight__data-left {
  background-color: whitesmoke;
  height: 100%;
}
.work-expirience-text {
  font-weight: bold;
  border-bottom: 0.5px solid rgb(126, 117, 117);
  margin-bottom: -2.5vh;
}
.skills-text {
  font-weight: bold;
  border-bottom: 0.5px solid rgb(126, 117, 117);
  margin: 8vh 2vw 3vh 2vw;
}
.single-work {
  padding: 0.6vh 2vw;
}
.single-skill {
  margin: -1vh 0;
  padding: 0 1vw;
}
</style>
