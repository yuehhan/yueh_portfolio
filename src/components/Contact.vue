<template>
  <div
    class="contact-main color-transition"
    :class="{
      sugar: !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div class="text-center" data-aos="fade" data-aos-once="true" data-aos-duration="1000">
        <span class="title text-center" :class="{ primary: !nightMode, secondary: nightMode }">contact.</span>
      </div>
      <div class="line-break"><hr></div>

      <div class="text-center">
        <div class="contact-boxes" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          <input
            type="text"
            name="user_name"
            v-model="name"
            placeholder="name"
            class="pinput"
            :class="{
              primary: !nightMode,
              'primary-dark': nightMode,
              'text-light': nightMode,
            }"
            style="transition-delay: 0.2s"
          />
        </div>

        <div class="contact-boxes" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          <input
            type="email"
            name="user_email"
            v-model="email"
            placeholder="email"
            class="pinput"
            :class="{
              primary: !nightMode,
              'primary-dark': nightMode,
              'text-light': nightMode,
            }"
            style="transition-delay: 0.4s"
          />
        </div>

        <div class="contact-boxes" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          <textarea
            name="message"
            v-model="text"
            placeholder="message"
            class="pinput"
            rows="4"
            :class="{primary: !nightMode,
              'primary-dark': nightMode,
              'text-light': nightMode
            }"
            style="transition-delay: 0.6s"
          ></textarea>
        </div>

        <button @click.prevent="sendEmail" class="save-button btn" data-aos="fade" data-aos-once="true" data-aos-duration="1000" data-aos-offset="50">
          send
        </button>
      </div>

      <Snackbar
        :showSnackbar="showSnackbar"
        @close="closeSnackbar"
        :snackbarMessage="snackbarMessage"
        :snackbarColor="snackbarColor"
      />
    </div>
  </div>
</template>

<script>
import config from "../../config";
import emailjs from "emailjs-com";

import Snackbar from "./helpers/Snackbar";

export default {
  name: "Contact",
  components: {
    Snackbar,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      email: "",
      name: "",
      text: "",
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
    };
  },
  methods: {
    closeSnackbar(val) {
      if (!val) {
        setTimeout(() => {
          this.showSnackbar = val;
        }, 1000);
      }
    },
    sendEmail() {
      if (!this.email || !this.name || !this.text) {
        this.showSnackbar = true;
        this.snackbarMessage = "Missing fields";
        this.snackbarColor = "#FAC993";
      } else {
        var obj = {
          user_email: this.email,
          from_name: this.name,
          message_html: this.text,
          to_name: "Yueh Han",
        };

        emailjs
          .send(
            config.emailjs.serviceID,
            config.emailjs.templateID,
            obj,
            config.emailjs.userID
          )
          .then(
            (result) => {
              console.log(result)
              this.showSnackbar = true;
              this.snackbarMessage = "Message recieved!";
              this.snackbarColor = "#3990AD";

              this.email = "";
              this.text = "";
              this.name = "";
            },
            (error) => {
              console.log(error)
              this.showSnackbar = true;
              this.snackbarMessage = "Oops! Something went wrong, could you try again?";
              this.snackbarColor = "red";
            }
          );
      }
    },
  }
};
</script>

<style scoped>
.contact-main {
  padding: 1.5rem 0;
}

.contact-boxes {
  margin: 1rem 0;
}

.send-button {
  margin:1rem 0;
  font-size:1.2rem;
}

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.pinput {
  font-size: 18px;
  outline: none;
  border: 1px solid #6BCDFA;
  border-radius: 5px;
  padding: 10px;
  width: 50%;
  transition: all 1s;
}

.btn {
  border:2px solid #6BCDFA;
  color: #6BCDFA;
  width: 50%;
}

.btn:hover {
  background-color: #6BCDFA;
  border:2px solid #6BCDFA;
  color: white;
}

.btn:focus {
  background-color: #3990AD;
  border:2px solid #6BCDFA;
  color: white;
}

.primary-dark {
  background-color: #3c4148 !important;
}

@media screen and (max-width: 1000px) {
  .pinput {
    width: 90%;
  }
  .pinput {
    width: 90%;
  }

  .btn {
    width: 90%;
  }
}
</style>
