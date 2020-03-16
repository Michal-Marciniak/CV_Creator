<template>
  <form class="contentLeft__form">
    <div class="form-group">
      <!----------------- Position & Period -------------------->
      <div class="position_and_period">
        <!----------------- Position -------------------->
        <div class="check-input">
          <div class="input-icon">
            <div class="heading">
              <i class="fa fa-caret-right"></i> Position -
            </div>
            <div class="heading-description">
              {{ user.jobs[index].position }}
            </div>
          </div>
        </div>

        <!----------------- Period -------------------->
        <div class="check-input">
          <div class="from-to">
            <!----------------- From -------------------->
            <div class="input-icon">
              <div class="heading">
                <i class="fa fa-caret-right"></i> From -
              </div>
              <div class="heading-description">
                <i>{{ user.jobs[index].period.from }}</i>
              </div>
            </div>
            <!----------------- To -------------------->
            <div class="input-icon">
              <div class="heading">
                To -
              </div>
              <div class="heading-description">
                <i>{{ user.jobs[index].period.to }}</i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!----------------- Description -------------------->
      <div class="check-input">
        <div class="input-icon">
          <div class="heading">
            <i class="fa fa-caret-right"></i> Description:
          </div>
          <div class="heading-description">
            {{ user.jobs[index].description }}
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["index"],
  computed: {
    ...mapGetters(["user", "currentJob"])
  }
};
</script>

<style scoped>
/*********   Expirience **********/
.contentLeft__form {
  padding: 2vw 3vw 0 3vw;
  margin-bottom: -7vh;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.heading {
  font-weight: bold;
  padding-right: 1vw;
  color: black;
  font-size: 2vw;
}
.heading-description {
  font-size: 2vw;
}

.position_and_period {
  padding-top: 2vw;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.from-to {
  display: flex;
  justify-content: space-between;
}

.check-input {
  display: flex;
  flex-direction: column;
  padding: 1vw 0;
}
.input-icon {
  display: flex;
  align-items: center;
  justify-content: left;
}

/* Mobile phones */
@media screen and (max-width: 543px) {
  .heading {
    font-size: 1.8vw;
  }
  .heading-description {
    font-size: 1.6vw;
  }
  .check-input {
    padding: 0;
  }
  .fa-caret-right {
    font-size: 1.8vw;
  }
}

/* Small devices */
@media screen and (min-width: 544px) and (max-width: 767px) {
  .heading {
    font-size: 1.8vw;
  }
  .heading-description {
    font-size: 1.5vw;
  }
  .check-input {
    padding: 0;
  }
  .fa-caret-right {
    font-size: 1.3vw;
  }
}

/* Medium devices */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .heading {
    font-size: 1.5vw;
  }
  .heading-description {
    font-size: 1.3vw;
  }
  .check-input {
    padding: 0;
  }
  .fa-caret-right {
    font-size: 1.2vw;
  }
}

/* Large devices */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .heading {
    font-size: 1.3vw;
  }
  .heading-description {
    font-size: 1.1vw;
  }
  .check-input {
    padding: 0;
  }
  .fa-caret-right {
    font-size: 1vw;
  }
}

/* Extra Large devices */
@media screen and (min-width: 1200px) {
  .heading {
    font-size: 1vw;
  }
  .heading-description {
    font-size: 0.8vw;
  }
  .check-input {
    padding: 0;
  }
  .fa-caret-right {
    font-size: 0.8vw;
  }
}
</style>
