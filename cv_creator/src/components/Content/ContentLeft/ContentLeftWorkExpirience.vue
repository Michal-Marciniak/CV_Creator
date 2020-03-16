<template>
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
          <div class="heading heading-date">Period (from, to)</div>

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
                  success: checkDate,
                  missing: !checkDate
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
                  success: checkDate,
                  missing: !checkDate
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
</template>

<script>
import { mapGetters } from "vuex";

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
    }
  },
  computed: {
    ...mapGetters(["index", "user"]),
    checkDate() {
      var first_date = this.user.jobs[this.index].period.from;

      var first_year = first_date
        .split("")
        .splice(0, 4)
        .join("");
      var first_month = first_date
        .split("")
        .splice(5, 2)
        .join("");
      var first_day = first_date
        .split("")
        .splice(8, 2)
        .join("");

      var second_date = this.user.jobs[this.index].period.to;

      var second_year = second_date
        .split("")
        .splice(0, 4)
        .join("");
      var second_month = second_date
        .split("")
        .splice(5, 2)
        .join("");
      var second_day = second_date
        .split("")
        .splice(8, 2)
        .join("");

      if (first_year > second_year) {
        return false;
      } else if (first_year === second_year && first_month > second_month) {
        return false;
      } else if (
        first_year === second_year &&
        first_month === second_month &&
        first_day > second_day
      ) {
        return false;
      } else if (
        first_year === second_year &&
        first_month < second_month &&
        first_day > second_day
      ) {
        return true;
      } else {
        return true;
      }
    }
  }
};
</script>

<style scoped>
/******* Expirience Form *********/
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

/******** Position & Period  ********/
.position_and_period {
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.from-to {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10vw;
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
  color: red;
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
