<template>
  <v-row>
    <v-col cols="12">
      <v-card class="rounded-t-xl">
        <v-progress-linear color="primary" height="20" value="100">
        </v-progress-linear>
        <v-card-title>Filters</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="search"
                label="Name"
                class="mx-4"
                outlined
                dense
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col v-for="(expert, i) in experts" :key="i" cols="12" sm="6" md="4">
      <v-card class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="250" :src="expert.image"></v-img>

        <v-card-title>{{ expert.name }}</v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="expert.score"
              color="amber"
              dense
              half-increments
              readonly
              size="15"
            ></v-rating>

            <div class="grey--text ms-4">
              {{ expert.score }} matching with your idea
            </div>
          </v-row>

          <div class="my-4 text-subtitle-1">{{ expert.job }}</div>

          <div>
            {{ expert.description }}
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" outlined width="100" to="/experts/profilePage">
            View
          </v-btn>
          <v-btn color="green" outlined width="100" @click="NotifExpert">
            Choose
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-col cols="12">
      <alert-comp
        v-if="showNotif"
        couleur="green"
        borderPos="left"
        message="Your request is sent to the expert."
      ></alert-comp>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ExpertsPage',
  data() {
    return {
      search: '',
      data: [
        {
          name: 'Tom Hero',
          score: 4.5,
          job: 'Data analyse expert',
          description:
            'Data cleaning and preparation - Data analysis and exploration - Statistical knowledge - Creating data visualizations - Creating dashboards and reports - Writing and communication - Domain knowledge Problem solving',
          image:
            'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=',
        },
        {
          name: 'Sandra Turo',
          score: 4.5,
          job: 'Data analyse expert',
          description:
            'Data cleaning and preparation - Data analysis and exploration - Statistical knowledge - Creating data visualizations - Creating dashboards and reports - Writing and communication - Domain knowledge Problem solving',
          image:
            'https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?b=1&k=20&m=1154642632&s=612x612&w=0&h=StstyxyDdiJQgUSTlaWv2ITXSMb029KzXijHtsaTQEg=',
        },
        {
          name: 'Tom Hero',
          score: 4,
          job: 'Data analyse expert',
          description:
            'Data cleaning and preparation - Data analysis and exploration - Statistical knowledge - Creating data visualizations - Creating dashboards and reports - Writing and communication - Domain knowledge Problem solving',
          image:
            'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
        },
        {
          name: 'Tom Hero',
          score: 3,
          job: 'Data analyse expert',
          description:
            'Data cleaning and preparation - Data analysis and exploration - Statistical knowledge - Creating data visualizations - Creating dashboards and reports - Writing and communication - Domain knowledge Problem solving',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQk-s4LvdL-PghBryP-7X8TJFbrAkQF_KvA&usqp=CAU',
        },
        {
          name: 'Tom Hero',
          score: 3,
          job: 'Data analyse expert',
          description:
            'Data cleaning and preparation - Data analysis and exploration - Statistical knowledge - Creating data visualizations - Creating dashboards and reports - Writing and communication - Domain knowledge Problem solving',
          image:
            'https://edtech4beginnerscom.files.wordpress.com/2021/05/1.png',
        },
        {
          name: 'Tom Hero',
          score: 3,
          job: 'Data analyse expert',
          description:
            'Data cleaning and preparation - Data analysis and exploration - Statistical knowledge - Creating data visualizations - Creating dashboards and reports - Writing and communication - Domain knowledge Problem solving',
          image:
            'https://www.bestmastersdegrees.com/wp-content/uploads/2016/01/Lisa-Randall-Most-Innovative-Women-Professors.jpg',
        },
      ],
      showNotif: false,
    }
  },
  computed: {
    experts() {
      return this.data
    },
  },
  watch: {
    // whenever question changes, this function will run
    showNotif(showOld, showNew) {
      if (this.showNotif) {
        setTimeout(() => {
          this.showNotif = false
        }, 3000)
      }
    },
  },
  methods: {
    NotifExpert() {
      this.showNotif = true
    },
  },
}
</script>
