<template>
  <b-container id="all-rock">
      <b-row>
        <b-col>
          <b-card
            title="Fermin Muguruza"
            sub-title="B-Map"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Rock/Suicide.jpg")'
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
            title="The Grateful Dead"
            sub-title="American Beauty"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Rock/American-Beauty.jpg")'
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
            title="Bob Dylan"
            sub-title="Desire"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Rock/Desire.jpg")'
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
            title="Tangerine Dream"
            sub-title="Encore (Live)"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Rock/Encore.jpg")'
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
            title="Blondie"
            sub-title="Parallel Lines"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Rock/Parallel.jpg")'
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
            title="The Rolling Stones"
            sub-title="Sticky Fingers"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Rock/Sticky-Fingers.jpg")'
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
            title="MGMT"
            sub-title="MGMT"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Rock/MGMT.jpg")'
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
            title="Pink Floyd"
            sub-title="The Wall"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Rock/TheWall.jpg")'
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
          title="The Beatles"
          sub-title="Let it be"
          @mouseover="hover = true"
          @mouseleave="hover = false"
          :class="{active: hover}"
          >
            <b-card-img
                :src='require("../assets/images/Rock/Beatles.jpg")'
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

#all-rock {
  font-family: 'Ubuntu', sans-serif;
}
.active:hover {
  transition: transform .5s ease-in;
  transition: transform .5s ease-out;
  transform: scale(1.1);
}
</style>
