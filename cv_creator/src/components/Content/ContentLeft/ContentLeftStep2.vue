<template>
  <div class="contentLeft">
    <div class="contentLeft-container">
      <ContentLeftWorkExpirience></ContentLeftWorkExpirience>

      <div class="contentLeft__buttons">
        <!----------------- Button Next -------------------->
        <div>
          <button
            class="btn btn-primary btn-lg
          nextStep"
            @click="goToStep3()"
          >
            Next Step
          </button>
        </div>
        <!----------------- Button Add More -------------------->
        <div>
          <button
            class="btn btn-md btn-secondary
          addAnotherJob"
            @click="addAnotherJob()"
          >
            Add another job
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentLeftWorkExpirience from "./ContentLeftWorkExpirience";

export default {
  methods: {
    goToStep3() {
      this.$store.dispatch("Step2Complete");
      this.$store.dispatch("Step3");
    },
    addAnotherJob() {
      this.$store.dispatch("addAnotherJob");
    }
  },
  components: {
    ContentLeftWorkExpirience
  }
};
</script>

<style scoped>
/******** Content Left Container  ********/
.contentLeft {
  margin: 3vh 0;
  box-shadow: 0px 0px 5px 1px #c5b4b4;
  height: 118vh;
}
.contentLeft-container {
  padding: 2vw;
}
.contentLeft__buttons {
  display: flex;
  justify-content: space-between;
}

/* Mobile phones */
@media screen and (max-width: 543px) {
  .nextStep {
    font-size: 3vw;
    margin: 2vh 1vw;
  }
  .addAnotherJob {
    font-size: 3vw;
    margin: 3vh 1vw;
  }
}

/* Small devices */
@media screen and (min-width: 544px) and (max-width: 767px) {
  .nextStep {
    font-size: 3vw;
    margin: 2vh 1vw;
  }
  .addAnotherJob {
    font-size: 3vw;
    margin: 3vh 1vw;
  }
}

/* Medium devices */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .nextStep {
    font-size: 2vw;
    margin: 2vh 1vw;
  }
  .addAnotherJob {
    font-size: 2vw;
    margin: 3vh 1vw;
  }
}

/* Large devices */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .nextStep {
    font-size: 1.7vw;
    margin: 2vh 1vw;
  }
  .addAnotherJob {
    font-size: 1.7vw;
    margin: 3vh 1vw;
  }
}

/* Extra Large devices */
@media screen and (min-width: 1200px) {
  .nextStep {
    font-size: 1.5vw;
    margin: 2vh 1vw;
  }
  .addAnotherJob {
    font-size: 1.5vw;
    margin: 3vh 1vw;
  }
}
</style>
