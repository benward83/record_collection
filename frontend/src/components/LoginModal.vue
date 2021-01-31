<template>
  <div v-if="isVisible">
    <div class="overlay" />

        <!-- Modal -->
      <div class="login-modal">
        <div class="modal-header">
          <button
          v-if="!isLoginForm"
            class="btn-back"
            @click="returnToLogin()"
          >
            back to login
          </button>
          <h2 id="modal-header-text">
            {{ title }}
          </h2>
        </div>

        <!-- Form 1 - login -->
        <form
          v-if="isLoginForm"
          method="post"
          @submit.prevent="login"
        >
          <div class="modal-body">
            <span
              v-if="errorMessage"
            > {{errorMessage}}
            </span>
            <div class="form-group">
              <input
                ref="usernameInput"
                v-model="username"
                type="text"
                required
                class="form-control"
                placeholder="Username.."
                name="login"
              >
            </div>
            <div class="form-group">
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="My password..."
                name="password"
              >
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn-big btn-success"
              @click="login()"
            >
              Login
            </button>
            <button
              type="button"
              class="btn-big btn-discrete"
              @click="retrievePassword()"
            >
              Password forgotten?
            </button>
          </div>
        </form>

        <!-- Form 2: Password forgotten form -->
      <form
        v-else
        method="post"
        @submit.prevent="sendInstructions"
      >
        <div class="modal-body">
          <div class="form-group">
            <input
              ref="emailInput"
              v-model="email"
              type="email"
              required
              class="form-control"
              placeholder="Your email...;"
            >
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="submit"
            class="btn-big btn-success"
          >
            Send instructions
          </button>
          <button
            type="button"
            class="btn-big btn-discrete"
            @click="returnToLogin()"
          >
            Back to login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

const MODES = {
  login: 'LOGIN',
  forgotten: 'FORGOTTEN',
};

const TITLES = {};
TITLES[MODES.login] = 'Mr Bens Login';
TITLES[MODES.forgotten] = 'Recover Password';

export default {
  name: 'LoginModal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isVisible: null,
    username: '',
    password: '',
    email: '',
    mode: MODES.login,
    errorMessage: null,
  }),
  computed: {
    title() {
      return TITLES[this.mode];
    },
    isLoginForm() {
      return this.mode === MODES.login;
    },
  },
  created() {
    this.isVisible = this.visible;
  },
  methods: {
    open() {
      this.isVisible = true;
      this.focusOnInput();
    },
    login() {
      // LoginService.login(this.username, this.password)
      //   .catch((err) => {
      //     if (err instanceof MiniKlaroError) {
      //       this.errorMessage = err.message;
      //     } else {
      //       this.errorMessage = 'Something wrong happened, please try or contact us.';
      //     }
      //   });
    },
    sendInstructions() {
      // LoginService.passwordForgotten(this.username);
    },
    focusOnInput() {
      this.$nextTick(() => {
        let input;
        if (this.mode === MODES.login) {
          input = this.$refs.usernameInput;
        } else {
          input = this.$refs.emailInput;
        }
        input.focus();
      });
    },
    retrievePassword() {
      this.mode = MODES.forgotten;
      this.focusOnInput();
    },
    returnToLogin() {
      this.mode = MODES.login;
      this.focusOnInput();
    },
  },
};

</script>
