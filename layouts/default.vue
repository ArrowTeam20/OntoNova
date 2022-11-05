<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      app
      v-if="$nuxt.$route.path !== '/'"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="$nuxt.$route.path !== '/'"
      />

      <v-toolbar-title class="primary--text" v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/inventors',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Experts',
          to: '/experts',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'BDOs',
          to: '/bdos',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'OntoNova',
    }
  },
}
</script>
