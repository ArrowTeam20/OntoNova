<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="mt-12 pt-12">
      <v-card class="logo py-4 d-flex justify-center" flat>
        <vuetify-logo></vuetify-logo>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card flat>
        <v-card-title class="headline font-weight-bold">
          Welcome back dear inovator
        </v-card-title>
        <v-card-subtitle class="title font-weight-light">
          After describing your idea, and being validted by our system, it's
          time to be implemented !!! Don't worry, we will guide you in evry
          step. It will a be long road, but you will see your idea grow from :
          ZERO TO HERO !!
          <br />
          <br />
          What do you need ?
        </v-card-subtitle>

        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" width="200" x-large rounded nuxt to="/inspire">
            Expert
          </v-btn>
          <span class="mx-3">OR</span>
          <v-btn color="primary" width="200" x-large rounded nuxt to="/inspire">
            BDO
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'BdosPage',
}
</script>
