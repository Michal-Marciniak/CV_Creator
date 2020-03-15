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
        <form class="contentLeft__form">
          <div class="form-group">
            <!----------------- Expirience -------------------->
            <div class="expirience-text">Work Expirience</div>

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
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    showEmail() {
      return this.$store.state.showEmail;
    },
    showNumber() {
      return this.$store.state.showNumber;
    },
    index() {
      return this.$store.state.index;
    }
  }
};
</script>

<style scoped>
.contentRight__header {
  padding: 1vw;
  background-color: #3e3e3e;
  color: whitesmoke;
}
.contentRight__header-text {
  letter-spacing: 0.1rem;
  font-size: 2.5vw;
  padding: 1vw 2vw;
}

.contentRight__data {
  height: 85vh;
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.contentRight__data-left {
  background-color: whitesmoke;
  height: 100%;
}

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
}

/*********   Expirience **********/
.contentLeft__form {
  padding: 2vw 3vw;
}
.form-group {
  display: flex;
  flex-direction: column;
}
.expirience-text {
  color: black;
  border-bottom: 1px solid black;
  font-weight: bold;
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
  .contentLeft__form {
    padding: 3vw 3.5vw;
  }
  .expirience-text {
    font-size: 3vw;
  }
  .heading {
    font-size: 2.3vw;
  }
  .heading-description {
    font-size: 2vw;
  }
  .check-input {
    padding: 0.6vw 0;
  }
}

/* Small devices */
@media screen and (min-width: 544px) and (max-width: 767px) {
  .contentLeft__form {
    padding: 3vw 3.5vw;
  }
  .expirience-text {
    font-size: 2.8vw;
  }
  .heading {
    font-size: 2.2vw;
  }
  .heading-description {
    font-size: 2vw;
  }
  .check-input {
    padding: 0.6vw 0;
  }
}

/* Medium devices */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .contentLeft__form {
    padding: 3vw 3.5vw;
  }
  .expirience-text {
    font-size: 2.6vw;
  }
  .heading {
    font-size: 1.8vw;
  }
  .heading-description {
    font-size: 2vw;
  }
  .check-input {
    padding: 0.6vw 0;
  }
}

/* Large devices */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .contentLeft__form {
    padding: 2vw;
  }
  .expirience-text {
    font-size: 2vw;
  }
  .heading {
    font-size: 1.4vw;
  }
  .heading-description {
    font-size: 1.2vw;
  }
  .check-input {
    padding: 0.3vw 0;
  }
}

/* Extra Large devices */
@media screen and (min-width: 1200px) {
  .contentLeft__form {
    padding: 2vw;
  }
  .expirience-text {
    font-size: 1.8vw;
  }
  .heading {
    font-size: 1.3vw;
  }
  .heading-description {
    font-size: 1.1vw;
  }
  .check-input {
    padding: 0.3vw 0;
  }
}
</style>
