<template>
  <div class="contentLeft">
    <div class="contentLeft-container">
      <!----------------- Form Upper -------------------->
      <form class="contentLeft__form">
        <div class="form-group">
          <label class="form-description">Name</label>
          <div class="check-input">
            <input
              type="text"
              class="form-control contentLeft__form-input"
              placeholder="John"
              v-model="user.name"
              required="true"
            />
            <i
              class="fa fa-check-circle"
              :class="{
                success: checkValue(user.name),
                missing: !checkValue(user.name)
              }"
            ></i>
          </div>
        </div>

        <div class="form-group">
          <label class="form-description">Last Name</label>
          <div class="check-input">
            <input
              type="text"
              class="form-control contentLeft__form-input"
              placeholder="Doe"
              v-model="user.lastname"
              required="true"
            />
            <i
              class="fa fa-check-circle"
              :class="{
                success: checkValue(user.lastname),
                missing: !checkValue(user.lastname)
              }"
            ></i>
          </div>
        </div>
      </form>

      <!----------------- Upload Image -------------------->
      <div class="contentLeft__image">
        <div class="contentLeft__image-left" @click.prevent="uploadImage()">
          <i class="fa fa-camera contentLeft__image-icon">
            <input type="file" class="input-image" />
          </i>
        </div>
        <div>
          <button type="submit" class="button-upload-image btn btn-secondary">
            Upload Image
          </button>
        </div>
        <div>
          <label class="contentLeft__image-text form-description">
            Add professional photo
          </label>
        </div>
      </div>

      <!----------------- Form Lower -------------------->
      <form class="contentLeft__form lower">
        <div class="form-group">
          <label class="form-description">Email</label>
          <div class="check-input">
            <input
              type="email"
              class="contentLeft__form-input form-control"
              v-model="user.email"
              required="true"
              @keyup="validateEmail(user.email)"
            />
            <i
              class="fa fa-check-circle"
              :class="{
                success: validateEmail(user.email),
                missing: !validateEmail(user.email)
              }"
            ></i>
          </div>
        </div>

        <div class="form-group">
          <label class="form-description">Phone Number</label>
          <div class="check-input">
            <input
              type="tel"
              class="contentLeft__form-input form-control"
              v-model="user.number"
              required="true"
              validate="true"
            />
            <i
              class="fa fa-check-circle"
              :class="{
                success: validateNumber(user.number),
                missing: !validateNumber(user.number)
              }"
            ></i>
          </div>
        </div>

        <div class="form-group">
          <label class="form-description">Adress</label>
          <div class="check-input">
            <input
              type="text"
              class="contentLeft__form-input form-control"
              v-model="user.adress"
              required="true"
            />
            <i
              class="fa fa-check-circle"
              :class="{
                success: checkValue(user.adress),
                missing: !checkValue(user.adress)
              }"
            ></i>
          </div>
        </div>
      </form>
      <div class="contentLeft__buttons">
        <!------- Button Next Step ---------->
        <div>
          <button
            class="btn btn-primary btn-lg
      contentLeft__ButtonSubmit"
            @click="goToStep2()"
          >
            Next Step
          </button>
        </div>
        <div class="alert alert-danger unvisible" role="alert">
          Please fill in all fields!
        </div>
      </div>
    </div>
  </div>
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
      }
      return true;
    },
    validateEmail(email) {
      var userEmail = email;
      if (userEmail.includes("@")) {
        this.state.showEmail = true;
        return true;
      } else {
        this.state.showEmail = false;
        return false;
      }
    },
    validateNumber(number) {
      var userNumber = number;
      if (userNumber.length != 9) {
        this.state.showNumber = false;
        return false;
      } else if (userNumber != Number(userNumber)) {
        return false;
      } else {
        this.state.showNumber = true;
        return true;
      }
    },
    uploadImage() {
      let SelectedImage = document.querySelector(".input-image");
      SelectedImage.click();
    },
    goToStep2() {
      var alertDiv = document.querySelector(".alert-danger");
      if (
        this.user.name.length != 0 &&
        this.user.lastname.length != 0 &&
        this.user.email.length != 0 &&
        this.user.number.length != 0 &&
        this.user.adress.length != 0
      ) {
        alertDiv.classList.add("unvisible");
        this.state.isStep2Possible = true;
        this.$store.dispatch("Step1Complete");
        this.$store.dispatch("Step2");
      } else {
        this.state.isStep2Possible = false;
        alertDiv.classList.add("visible");
      }
    }
  },
  computed: {
    ...mapGetters(["state", "user"])
  }
};
</script>

<style scoped>
.contentLeft {
  margin: 3vh 0;
  height: 118vh;
  box-shadow: 0px 0px 5px 1px #c5b4b4;
}
.contentLeft-container {
  padding: 2vw;
}
.check-input {
  display: flex;
  align-items: center;
}
.check-input > i {
  margin-left: -5vw;
  font-size: 3vw;
}
.form-group {
  padding: 1vw 0;
}
.form-description {
  font-weight: bold;
}

.lower {
  padding-top: 1vw;
}

.success {
  color: green;
  font-size: 1.5vw;
}
.missing {
  color: red;
}

.contentLeft__form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3vw;
}

/********** Image ***********/
.contentLeft__image {
  padding: 3vh 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.contentLeft__image-left {
  cursor: pointer;
}
.input-image {
  display: none;
}
.contentLeft__image-left:hover {
  opacity: 0.8;
}
.contentLeft__image-icon {
  padding: 1.5vw;
  font-size: 10vh;
  border-style: dotted;
}
.contentLeft__image-text {
  margin-top: 10vh;
  color: #8b7d7d;
  font-size: 2vw;
  font-weight: normal;
}

.contentLeft__buttons {
  display: flex;
  justify-content: space-between;
}

.contentLeft__ButtonSubmit {
  width: 10vw;
}
.unvisible {
  visibility: hidden;
}
.visible {
  visibility: visible;
}

/* Mobile phones */
@media screen and (max-width: 543px) {
  .success {
    color: green;
  }
  .form-description {
    font-size: 3vw;
  }
  .check-input > i {
    margin-left: -5vw;
    font-size: 3vw;
  }
  .contentLeft__ButtonSubmit {
    margin-top: 5vw;
    width: 35vw;
  }
  .button-upload-image {
    margin-top: 8vh;
    font-size: 2.5vw;
  }
  .alert-danger {
    text-align: center;
    width: 35vw;
    height: 15vh;
  }
}

/* Small devices */
@media screen and (min-width: 544px) and (max-width: 767px) {
  .success {
    color: green;
  }
  .form-description {
    font-size: 2.5vw;
  }
  .check-input > i {
    margin-left: -4vw;
    font-size: 2.5vw;
  }
  .contentLeft__ButtonSubmit {
    margin-top: 5vw;
    width: 25vw;
  }
  .button-upload-image {
    margin-top: 8vh;
    font-size: 2.5vw;
  }
  .alert-danger {
    width: 30vw;
    text-align: center;
    height: 15vh;
    margin-top: 5vh;
  }
}

/* Medium devices */
@media screen and (min-width: 768px) and (max-width: 991px) {
  .success {
    color: green;
  }
  .form-description {
    font-size: 2vw;
  }
  .check-input > i {
    margin-left: -3vw;
    font-size: 2vw;
  }
  .contentLeft__ButtonSubmit {
    margin-top: 5vw;
    width: 20vw;
  }
  .button-upload-image {
    margin-top: 7vh;
    font-size: 2.5vw;
  }
  .alert-danger {
    text-align: center;
    width: 25vw;
    height: 15vh;
    margin-top: 5vh;
  }
}

/* Large devices */
@media screen and (min-width: 992px) and (max-width: 1199px) {
  .success {
    color: green;
  }
  .form-description {
    font-size: 2vw;
  }
  .check-input > i {
    margin-left: -2.5vw;
    font-size: 1.7vw;
  }
  .contentLeft__ButtonSubmit {
    margin-top: 5vw;
    width: 20vw;
  }
  .button-upload-image {
    margin-top: 10vh;
    font-size: 1.4vw;
  }
  .alert-danger {
    text-align: center;
    width: 15vw;
    height: 15vh;
    margin-top: 5vh;
  }
}

/* Extra Large devices */
@media screen and (min-width: 1200px) {
  .success {
    color: green;
  }
  .form-description {
    font-size: 1.5vw;
  }
  .check-input > i {
    margin-left: -2vw;
    font-size: 1.5vw;
  }
  .contentLeft__ButtonSubmit {
    margin-top: 5vw;
    width: 15vw;
  }
  .button-upload-image {
    margin-top: 10vh;
    font-size: 1.4vw;
  }
  .alert-danger {
    text-align: center;
    width: 20vw;
    height: 10vh;
    margin-top: 10vh;
  }
}
</style>
