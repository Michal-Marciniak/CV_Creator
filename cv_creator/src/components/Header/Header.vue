<template>
  <div>
    <div class="header">
      <div class="header__logo">
        <div>
          <span class="header__logo-CV header__logo-text">CV</span> for
          <span class="header__logo-Free header__logo-text">Free</span>
        </div>
        <div class="header__logo-icons">
          <i class="header-icon fa fa-facebook-square"></i>
          <i class="header-icon fa fa-instagram"></i>
          <i class="header-icon fa fa-twitter"></i>
        </div>
      </div>

      <div class="header__steps">
        <div
          class="header__setp1 header__step"
          :class="{
            complete: this.$store.state.step1_complete,
            current: this.$store.state.current_step === 'step1'
          }"
          @click="Step1"
        >
          <i class="fa fa-check-square header__step-icon"></i>
          <p class="header__step-text">Step 1</p>
        </div>
        <div
          class="header__step2 header__step"
          :class="{
            complete: this.$store.state.step2_complete,
            current: this.$store.state.current_step === 'step2'
          }"
          @click="Step2"
        >
          <i class="fa fa-check-square header__step-icon"></i>
          <p class="header__step-text">Step 2</p>
        </div>
        <div
          class="header__step3 header__step"
          :class="{
            complete: this.$store.state.step3_complete,
            current: this.$store.state.current_step === 'step3'
          }"
          @click="Step3"
        >
          <i class="fa fa-check-square header__step-icon"></i>
          <p class="header__step-text">Step 3</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["Step1", "Step2", "Step3"])
  }
};
</script>

<style scoped>
.header {
  color: whitesmoke;
  background-image: linear-gradient(rgb(151, 28, 145), rgb(134, 31, 88));
  padding: 0 3vw;
  font-weight: 400;
  font-size: 3vw;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 1px #c5b4b4;
}
.header__logo {
  display: flex;
  justify-content: space-between;
}
.header__logo-CV {
  font-size: 4vw;
  color: white;
}
.header__logo-Free {
  color: #302c2c;
  font-size: 5vw;
  letter-spacing: 0.1vw;
}
.header__logo-icons {
  border: 2px solid whitesmoke;
  border-radius: 2vw;
  align-self: center;
}
.header-icon {
  padding: 0 2vw;
  cursor: pointer;
}

.current {
  color: #7ebbd8;
}
.complete {
  color: rgb(0, 0, 0);
}

.header__steps {
  display: flex;
  justify-content: center;
}
.header__step {
  padding: 0 3vw;
  cursor: pointer;
  text-align: center;
}
.header__step:hover .header__step-icon {
  transform: rotate(90deg);
  transition: 0.5s ease-out;
}

/* Mobile phones */
@media screen and (max-width: 543px) {
  .header__logo {
    padding-top: 2vw;
  }
  .header__logo-text {
    font-size: 6vw;
  }
  .header__step {
    padding: 0 1.7vw;
    font-size: 3.2vw;
  }
}

/* Small devices */
@media screen and (min-width: 544px) and (max-width: 767px) {
  .header__logo {
    padding-top: 2vw;
  }
  .header__logo-text {
    font-size: 5vw;
  }
  .header__step {
    padding: 0 2vw;
    font-size: 2.6vw;
  }
}

/* Medium devices */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .header__logo {
    padding-top: 2vw;
  }
  .header__logo-text {
    font-size: 5vw;
  }
  .header__step {
    padding: 0 2vw;
    font-size: 2.5vw;
  }
}

/* Large devices */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .header__logo {
    padding-top: 2vw;
  }
  .header__logo-text {
    font-size: 4.5vw;
  }
  .header__step {
    padding: 0 2.3vw;
    font-size: 1.9vw;
  }
}

/* Extra Large devices */
@media screen and (min-width: 1200px) {
  .header__logo {
    padding-top: 2vw;
  }
  .header__logo-text {
    font-size: 5vw;
  }
  .header__step {
    padding: 0 1.8vw;
    font-size: 2vw;
  }
}
</style>
