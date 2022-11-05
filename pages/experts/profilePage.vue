<template>
  <v-container fluid>
    <v-layout column justify="center">
      <v-card width="700" justify="center" class="profile_card">
        <v-card-text align="center">
          <v-flex class="mb-4">
            <v-avatar size="120" class="mr-4">
              <img
                src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
                alt="Avatar"
              />
            </v-avatar>
          </v-flex>
          <p class="text-h6 text--primary">Tom Hero</p>
        </v-card-text>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.5</div>
          </v-row>

          <div class="my-4">
            I am a data scientist. My principale task is solving
            business-related problems using data-driven techniques.
          </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
          <p class="text-h6 text--primary">Skills</p>
          <v-chip-group column>
            <v-chip>Data science</v-chip>

            <v-chip color="#FCB944">Project management</v-chip>

            <v-chip>NLP</v-chip>

            <v-chip color="#F0533B">Ontology</v-chip>
          </v-chip-group>

          <p class="text-h6 text--primary">Projects</p>
          <v-timeline align-top dense>
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>

        <v-card-actions>
          <v-btn color="#FCB944" text to="/experts"> Close </v-btn>
          <v-btn color="#F0533B" text> select </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,

      showAvatarPicker: false,
      messages: [
        {
          from: 'Ontology',
          message: `automatic human resources ontology genaration`,
          time: '2022',
          color: '#FCB944',
        },
        {
          from: 'Data science',
          message: 'Automatic shelf recognition',
          time: '2021',
          color: '#F8F3E2',
        },
        {
          from: 'NLP',
          message: 'Create a recommandation system',
          time: '2021',
          color: '#F0533B',
        },
      ],
    }
  },
  methods: {
    openAvatarPicker() {
      this.showAvatarPicker = true
    },
    selectAvatar(avatar) {
      this.form.avatar = avatar
    },
  },
}
</script>
<style>
.profile_card {
  margin: auto;
}
</style>
