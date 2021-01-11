<template>
  <b-container id="single7">
      <b-row>
        <b-col>
          <b-card
            title="William Bell"
            sub-title="I forgot to be your lover"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Soul&Funk/single7/YourLover.jpg")'
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
            title="George McCrae"
            sub-title="Rock your baby"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Soul&Funk/single7/RockYourBaby.jpg")'
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
            title="The Fatback Band"
            sub-title="Double Dutch"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Soul&Funk/single7/DoubleDutch.jpg")'
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
            title="Gloria Jones"
            sub-title="Tainted Love"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Soul&Funk/single7/TaintedLove.jpg")'
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
            title="Major Harris"
            sub-title="My Way"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Soul&Funk/single7/Major.jpg")'
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
            title="The Whispers"
            sub-title="This kind of lovin'"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Soul&Funk/single7/Lovin.jpg")'
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
            title="Archie Bell & The Drells"
            sub-title="Tighten up"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Soul&Funk/single7/Tighten.jpg")'
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
            title="The Dells"
            sub-title=""
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Soul&Funk/single7/Dells.jpg")'
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
            title="Stampeders"
            sub-title="Summer in the city"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Soul&Funk/single7/Summer.jpg")'
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

#single7 {
  font-family: 'Ubuntu', sans-serif;
}
.active:hover {
  transition: transform .5s ease-in;
  transition: transform .5s ease-out;
  transform: scale(1.1);
}
</style>
