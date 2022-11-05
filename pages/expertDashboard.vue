<template>
  <v-row class="mt-12">
    <v-col cols="8">
      <calendar-component></calendar-component>
    </v-col>
    <v-col cols="4">
      <v-card height="450">
        <v-list two-line>
          <template v-for="(item, index) in items.slice(0, 6)">
            <h4 v-if="item.header" :key="item.header" class="ml-4">
              {{ item.header }}
            </h4>
            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>
            <v-list-item v-else :key="item.title">
              <v-list-item-avatar>
                <img :src="item.avatar" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.subtitle"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    items: [
      { header: 'New requests' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title:
          'If you enjoy reading or know others who do, we will help creating custom bookmarks',
        subtitle: `<span class="font-weight-bold">Ali Connors</span>`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Create artwork easily online just using...',
        subtitle: `<span class="font-weight-bold">Alex Scott</span> `,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Nowadays, computer vision is the most ....',
        subtitle: '<span class="font-weight-bold">Sandra Adams</span> ',
      },
    ],
  }),
}
</script>
