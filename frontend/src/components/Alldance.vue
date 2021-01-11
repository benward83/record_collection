<template>
  <b-container id="all-dance">
      <b-row>
        <b-col>
          <b-card
            title="Aphex Twin"
            sub-title="Windowlicker"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Dance/Aphex.jpg")'
                alt="Image"
                class="rounded-0"
                >
              </b-card-img>
                <b-card-text>
                  Some info here
                </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Leftfield"
            sub-title="Leftfield"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Dance/Leftfield.jpg")'
                alt="Image"
                class="rounded-0"
                >
              </b-card-img>
                <b-card-text>
                  Some info here
                </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Kruder & Dorfmeister"
            sub-title="The K&D sessions"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Dance/KandD.jpg")'
                alt="Image"
                class="rounded-0"
                >
              </b-card-img>
                <b-card-text>
                  Some info here
                </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <b-col>
          <b-card
            title="Stanton Warriors"
            sub-title="Da Antidote"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Dance/StantonAntidote.jpg")'
                alt="Image"
                class="rounded-0"
                >
              </b-card-img>
                <b-card-text>
                  Some info here
                </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Stanton Warriors"
            sub-title="Da Virus"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Dance/StantonVirus.jpg")'
                alt="Image"
                class="rounded-0"
                >
              </b-card-img>
                <b-card-text>
                  Some info here
                </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Depeche Mode"
            sub-title="Box set - Best of"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Dance/Depeche.jpg")'
                alt="Image"
                class="rounded-0"
                >
              </b-card-img>
                <b-card-text>
                  Some info here
                </b-card-text>
          </b-card>
        </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>

#all-dance {
  font-family: 'Ubuntu', sans-serif;
}
.active:hover {
  transition: transform .5s ease-in;
  transition: transform .5s ease-out;
  transform: scale(1.1);
}
</style>
