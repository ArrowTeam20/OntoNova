<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" class="mt-12 pt-12">
      <v-card class="logo py-4 d-flex justify-center" flat>
        <vuetify-logo></vuetify-logo>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card flat>
        <v-card-title class="headline font-weight-bold"> Welcome </v-card-title>
        <v-card-subtitle class="title font-weight-light">
          In a world where humans are facing a lot of difficulties, efficient
          solutions to solve them are needed. That's what we call "INVENTIONS".
          However, innovators are struggling to implement their ideas. That's
          where "OntoNova" came to help inventors evaluating their ideas by
          experts and take them from the idea to the project stage.
          <br />
          <br />
          Sign as
        </v-card-subtitle>

        <v-card-actions class="d-flex justify-center">
          <v-btn
            color="primary"
            width="200"
            x-large
            rounded
            nuxt
            to="/expertDashboard"
          >
            Expert
          </v-btn>
          <span class="mx-3">OR</span>
          <v-btn
            color="primary"
            width="200"
            x-large
            rounded
            nuxt
            to="/inventors"
          >
            Inventor
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
