<template>
  <div class="contentLeft">
    <div class="contentLeft-container">
      <!----------------- Form Upper -------------------->
      <form class="contentLeft__form">
        <div class="form-group">
          <!----------------- Expirience -------------------->
          <div class="expirience-text">Work Expirience</div>

          <!----------------- Position & Period -------------------->
          <div class="position_and_period">
            <!----------------- Position -------------------->
            <div class="check-input">
              <div class="heading">Position</div>
              <div class="input-icon">
                <input
                  id="input"
                  type="text"
                  class="form-control contentLeft__form-input"
                  placeholder="Position"
                  v-model="user.jobs[index].position"
                  required="true"
                />
                <i
                  class="fa fa-check-circle"
                  :class="{
                    success: checkValue(user.jobs[index].position),
                    missing: !checkValue(user.jobs[index].position)
                  }"
                ></i>
              </div>
            </div>

            <!----------------- Period -------------------->
            <div class="check-input">
              <div class="heading">Period (from, to)</div>

              <div class="from-to">
                <!----------------- From -------------------->
                <div class="input-icon">
                  <input
                    id="input"
                    type="date"
                    class="form-control contentLeft__form-input"
                    v-model="user.jobs[index].period.from"
                    required="true"
                  />
                  <i
                    class="fa fa-check-circle"
                    :class="{
                      success: checkValue(user.jobs[index].period.from),
                      missing: !checkValue(user.jobs[index].period.from)
                    }"
                  ></i>
                </div>
                <!----------------- To -------------------->
                <div class="input-icon">
                  <input
                    id="input"
                    type="date"
                    class="form-control contentLeft__form-input"
                    v-model="user.jobs[index].period.to"
                    required="true"
                  />
                  <i
                    class="fa fa-check-circle"
                    :class="{
                      success: checkValue(user.jobs[index].period.to),
                      missing: !checkValue(user.jobs[index].period.to)
                    }"
                  ></i>
                </div>
              </div>
            </div>
          </div>

          <!----------------- Description -------------------->
          <div class="check-input">
            <div class="heading">Description <i class="fa fa-pencil"></i></div>
            <div class="input-icon">
              <textarea
                id="input"
                type="text"
                class="form-control contentLeft__form-input"
                placeholder="Achievments, merits..."
                v-model="user.jobs[index].description"
                required="true"
              >
              </textarea>
              <i
                class="fa fa-check-circle"
                :class="{
                  success: checkValue(user.jobs[index].description),
                  missing: !checkValue(user.jobs[index].description)
                }"
              ></i>
            </div>
          </div>
        </div>
      </form>

      <div class="contentLeft__buttons">
        <!----------------- Button Next -------------------->
        <div>
          <button
            class="btn btn-primary btn-lg
      contentLeft__ButtonSubmit"
            @click="goToStep3()"
          >
            Next Step
          </button>
        </div>
        <!----------------- Button Add More -------------------->
        <div>
          <button class="btn btn-md btn-secondary" @click="addAnotherJob()">
            Add another job
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      success: false
    };
  },
  methods: {
    checkValue(value) {
      if (value.length === 0) {
        return false;
      } else {
        return true;
      }
    },
    goToStep3() {
      this.$store.dispatch("Step2Complete");
      this.$store.dispatch("Step3");
    },
    addAnotherJob() {
      this.$store.dispatch("addAnotherJob");
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    index() {
      return this.$store.state.index;
    }
  }
};
</script>

<style scoped>
.contentLeft {
  margin: 3vh 0;
  box-shadow: 0px 0px 5px 1px #c5b4b4;
}
.contentLeft-container {
  padding: 2vw;
}
.contentLeft__form {
  padding: 1vw;
}

.form-group {
  display: flex;
  flex-direction: column;
}
.expirience-text {
  font-size: 4vw;
  font-weight: bold;
}

.position_and_period {
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.from-to {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10vw;
}

.contentLeft__buttons {
  display: flex;
  justify-content: space-between;
}

.check-input {
  display: flex;
  flex-direction: column;
  line-height: 5vh;
  padding: 2vw 0;
}
.heading {
  font-weight: bold;
}
.input-icon {
  display: flex;
  align-items: center;
}
.input-icon > i {
  margin-left: -5vw;
}
.success {
  color: green;
  font-size: 4vw;
}
.missing {
  visibility: hidden;
}

/* Mobile phones */
@media screen and (max-width: 543px) {
  .success {
    color: green;
    font-size: 4vw;
  }
  .expirience-text {
    font-size: 4vw;
    font-weight: bold;
  }
  .input-icon > i {
    margin-left: -5vw;
  }
}

/* Small devices */
@media screen and (min-width: 544px) and (max-width: 767px) {
  .success {
    color: green;
    font-size: 2.5vw;
  }
  .expirience-text {
    font-size: 3vw;
    font-weight: bold;
  }
  .input-icon > i {
    margin-left: -4vw;
  }
}

/* Medium devices */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .success {
    color: green;
    font-size: 2vw;
  }
  .expirience-text {
    font-size: 2vw;
    font-weight: bold;
  }
  .input-icon > i {
    margin-left: -3vw;
  }
}

/* Large devices */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .success {
    color: green;
    font-size: 2vw;
  }
  .expirience-text {
    font-size: 2vw;
    font-weight: bold;
  }
  .input-icon > i {
    margin-left: -2.5vw;
  }
}

/* Extra Large devices */
@media screen and (min-width: 1200px) {
  .success {
    color: green;
    font-size: 1.5vw;
  }
  .expirience-text {
    font-size: 2vw;
    font-weight: bold;
  }
  .input-icon > i {
    margin-left: -2vw;
  }
}
</style>
