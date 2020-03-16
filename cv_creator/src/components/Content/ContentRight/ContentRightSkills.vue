<template>
  <form class="contentLeft__form">
    <!----------------- Skills -------------------->
    <div class="skill">
      <i class="fa fa-circle"></i> {{ skills[props_skill_index] }}
    </div>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["props_skill_index"],
  computed: {
    ...mapGetters(["skills"])
  }
};
</script>

<style scoped>
/* Mobile phones */
@media screen and (max-width: 543px) {
  .skill {
    font-size: 2vw;
    font-weight: bold;
    padding: 0.6vh 0;
  }
  .fa-circle {
    font-size: 0.8vw;
    padding: 0 0.5vw 0 1vw;
  }
}

/* Small devices */
@media screen and (min-width: 544px) and (max-width: 767px) {
  .skill {
    font-size: 2vw;
    font-weight: bold;
    padding: 0.6vh 0;
  }
  .fa-circle {
    font-size: 0.8vw;
    padding: 0 0.5vw 0 1vw;
  }
}

/* Medium devices */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .skill {
    font-size: 1.6vw;
    font-weight: bold;
    padding: 0.6vh 0;
  }
  .fa-circle {
    font-size: 0.6vw;
    padding: 0 0.5vw 0 1vw;
  }
}

/* Large devices */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .skill {
    font-size: 1.4vw;
    font-weight: bold;
    padding: 0.6vh 0;
  }
  .fa-circle {
    font-size: 0.6vw;
    padding: 0 0.5vw 0 1vw;
  }
}

/* Extra Large devices */
@media screen and (min-width: 1200px) {
  .skill {
    font-size: 1vw;
    font-weight: bold;
    padding: 0.6vh 0;
  }
  .fa-circle {
    font-size: 0.4vw;
    padding: 0 0.5vw 0 1vw;
  }
}
</style>
