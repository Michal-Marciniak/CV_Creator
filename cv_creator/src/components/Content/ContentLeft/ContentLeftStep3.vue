<template>
  <form class="contentLeft__form">
    <div class="contentLeft-container">
      <div class="skills-heading">
        Skills
      </div>
      <!----------------- Skills -------------------->
      <div class="check-input">
        <div>
          <input
            type="text"
            class="form-control"
            placeholder="Your skills..."
            v-model="skills[skillsIndex]"
          />
        </div>
        <div>
          <button
            class="btn btn-secondary 
          button-new-skill"
            @click.prevent="addAnotherSkill()"
          >
            Add New
          </button>
        </div>
      </div>

      <div>
        <button
          class="btn btn-primary btn-lg
          button-complete
          "
          @click.prevent="completeCV()"
        >
          Complete
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    addAnotherSkill() {
      this.$store.dispatch("addAnotherSkill");
    }
  },
  computed: {
    ...mapGetters(["skills", "skillsIndex"])
  }
};
</script>

<style scoped>
/*********   Skills **********/
.contentLeft__form {
  margin-top: 3vh;
  padding: 2vw 3vw 0 3vw;
  box-shadow: 0px 0px 5px 1px #c5b4b4;
}
.contentLeft-container {
  display: flex;
  flex-direction: column;
}
.skills-heading {
  font-weight: bold;
  font-size: 1.8vw;
  padding: 1vh 0 3vh 1vw;
}
.check-input {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1vh 0 5vh 0;
}

/* Mobile phones */
@media screen and (max-width: 543px) {
  .skills-heading {
    font-size: 3.2vw;
    padding: 1vh 0 0.5vh 0;
  }
  .button-new-skill {
    width: 30vw;
  }
  .button-complete {
    font-size: 4vw;
    margin: 3vh 0;
  }
}

/* Small devices */
@media screen and (min-width: 544px) and (max-width: 767px) {
  .skills-heading {
    font-size: 3.2vw;
    padding: 1vh 0 0.5vh 0;
  }
  .button-new-skill {
    width: 20vw;
  }
  .button-complete {
    font-size: 3vw;
    margin: 3vh 0;
  }
}

/* Medium devices */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .skills-heading {
    font-size: 3.2vw;
    padding: 1vh 0 2vh 0;
  }
  .button-new-skill {
    width: 15vw;
  }
  .button-complete {
    font-size: 2.5vw;
    margin: 3vh 0;
  }
}

/* Large devices */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .skills-heading {
    font-size: 2vw;
    padding: 1vh 0 2vh 0;
  }
  .button-new-skill {
    width: 10vw;
  }
  .button-complete {
    font-size: 2vw;
    margin: 3vh 0;
  }
}

/* Extra Large devices */
@media screen and (min-width: 1200px) {
  .skills-heading {
    font-size: 2vw;
    padding: 1vh 0 2vh 0;
  }
  .button-new-skill {
    width: 10vw;
  }
  .button-complete {
    font-size: 2vw;
    margin: 3vh 0;
  }
}
</style>
