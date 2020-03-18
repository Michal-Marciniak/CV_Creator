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
        <!----------------- Button Danger -------------------->
        <div class="alert alert-danger alertDanger2 unvisible" role="alert">
          Please fill in all fields!
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
import { mapGetters } from "vuex";
import ContentLeftWorkExpirience from "./ContentLeftWorkExpirience";

export default {
  methods: {
    goToStep3() {
      var alertDiv2 = document.querySelector(".alertDanger2");
      if (
        this.user.jobs[this.index].position.length != 0 &&
        this.user.jobs[this.index].period.from.length != 0 &&
        this.user.jobs[this.index].period.to.length != 0 &&
        this.user.jobs[this.index].description.length != 0
      ) {
        alertDiv2.classList.add("unvisible");
        this.state.isStep3Possible = true;
        this.$store.dispatch("Step2Complete");
        this.$store.dispatch("Step3");
      } else {
        this.state.isStep3Possible = false;
        alertDiv2.classList.add("visible");
      }
    },
    addAnotherJob() {
      var alertDiv2 = document.querySelector(".alertDanger2");
      if (
        this.user.jobs[this.index].position.length != 0 &&
        this.user.jobs[this.index].period.from.length != 0 &&
        this.user.jobs[this.index].period.to.length != 0 &&
        this.user.jobs[this.index].description.length != 0
      ) {
        alertDiv2.classList.add("unvisible");
        this.$store.dispatch("addAnotherJob");
      } else {
        this.state.isStep3Possible = false;
        alertDiv2.classList.add("visible");
      }
    }
  },
  computed: {
    ...mapGetters(["index", "user", "state"])
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
  justify-content: space-around;
}
.visible {
  visibility: visible;
}
.unvisible {
  visibility: hidden;
}

/* Mobile phones */
@media screen and (max-width: 543px) {
  .nextStep {
    font-size: 3vw;
    margin: 2vh 1vw;
  }
  .addAnotherJob {
    font-size: 3vw;
    margin: 2vh 1vw;
  }
  .alert-danger {
    text-align: center;
    width: 30vw;
    margin-top: 2vh;
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
    margin: 2vh 1vw;
  }
  .alert-danger {
    width: 30vw;
    text-align: center;
    margin-top: 2vh;
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
    margin: 2vh 1vw;
  }
  .alert-danger {
    text-align: center;
    width: 25vw;
    margin-top: 2vh;
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
    margin: 2vh 1vw;
  }
  .alert-danger {
    text-align: center;
    width: 15vw;
    margin-top: 2vh;
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
    margin: 2vh 1vw;
  }
  .alert-danger {
    text-align: center;
    width: 15vw;
    margin-top: 2vh;
  }
}
</style>
