<template>
  <b-container id="all-jazz">
      <b-row>
        <b-col>
          <b-card title="Miles Davis" sub-title="Blue Period">
            <b-card-img
                :src='require("../assets/images/Jazz/Miles.jpg")'
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
          <b-card title="Nina Simone" sub-title="Nina Simone">
            <b-card-img
                :src='require("../assets/images/Jazz/Nina.jpg")'
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
          <b-card title="Grover Washington jr" sub-title="Inner city blues">
            <b-card-img
                :src='require("../assets/images/Jazz/Grover.jpg")'
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
          <b-card title="Dexter Gordon" sub-title="204">
            <b-card-img
                :src='require("../assets/images/Jazz/Dexter.jpg")'
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
          <b-card title="Various Artists" sub-title="Blue Note">
            <b-card-img
                :src='require("../assets/images/Jazz/BlueNote.jpg")'
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
          <b-card title="Dexter Gordon" sub-title="Blues a la Suisse">
            <b-card-img
                :src='require("../assets/images/Jazz/DGBlues.jpg")'
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

};
</script>

<style scoped>

#all-jazz {
  font-family: 'Ubuntu', sans-serif;
}
</style>
