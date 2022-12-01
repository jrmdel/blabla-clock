<template>
  <v-app>
    <AppBar/>

    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <v-card outlined class="rounded-xl rounded-b-0">
              <v-card-title>
                Welcome
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card outlined :elevation="hover ? 4 : 0">
                  <v-card-title>Create</v-card-title>
                  <v-card-text>
                    You can create a new shared clock here
                  </v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-col>
          <v-col cols="6">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card :elevation="hover ? 4 : 0" outlined @click="alert('hello')">
                  <v-card-title>Join</v-card-title>
                  <v-card-text>
                    Or join a clock session here
                  </v-card-text>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card outlined>
              <v-card-text>
                <v-container fluid>
                  <v-row justify="center">
                    <span class="text-h4">
                      {{ getClock }}
                    </span>
                  </v-row>
                  <v-row justify="center">
                    <v-btn plain @click="toggleStartStop">Start/Stop</v-btn>
                    <v-btn @click="resetClock">Reset</v-btn>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';

export default {
  components: {
    AppBar,
  },
  computed: {
    getClock: {
      get: function() {
        let HH = Math.floor((this.duration / (3600000)) % 24).toString().padStart(2, "0");
        let MM = Math.floor(((this.duration/1000) % 3600) / 60).toString().padStart(2, "0");
        let SS = Math.floor((this.duration / 1000) % 60).toString().padStart(2, "0");
        let ms = Math.floor((this.duration % 1000)/10).toString().padStart(2, "0");
        return `${HH}:${MM}:${SS}.${ms}`
      },
    }
  },
  watch: {
    isRunning: {
      handler(val) {
        if (val) {
          this.startDate = new Date() - this.duration;
          this.clockProcess = setInterval(() => this.incrementClock(), 10);
        } else {
          this.clockProcess != null ? clearInterval(this.clockProcess) : null;
          this.incrementClock();
        }
      }
    },
  },
  data: () => ({
    duration: 0,
    startDate: null,
    isRunning: false,
    clockProcess: null,
  }),
  methods: {
    alert(str) {
      window.alert(str)
    },
    toggleStartStop() {
      this.isRunning = !this.isRunning;
    },
    incrementClock() {
      this.duration = (new Date())-this.startDate;
    },
    resetClock() {
      if (this.isRunning) this.startDate = new Date();
      this.duration = 0;
    },
  },
};
</script>
