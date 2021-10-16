<template>
  <nav>

    <v-snackbar v-model="snackbar" :top="true" color="primary" :timeout="3000">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

      <v-app-bar flat color="grey lighten-4">

      <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Todo</span>
          <span >Ninja</span>
        </v-toolbar-title>

      <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn plain color="grey" dark v-bind="attrs" v-on="on">
              <v-icon>mdi-menu-down</v-icon>
              <span>Menu</span>
            </v-btn>
          </template>
          <v-list color="grey lighten-4" >
            <v-list-item class="white--text" :to="{ name : 'dashboard'}">
              <v-list-item-title class="grey--text">Dashboard</v-list-item-title>
            </v-list-item>
            <v-list-item class="white--text" :to="{ name : 'projects'}">
              <v-list-item-title class="grey--text">My Projects</v-list-item-title>
            </v-list-item>
            <v-list-item class="white--text" :to="{ name : 'team'}">
              <v-list-item-title class="grey--text">Team</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn plain color="grey">
          <span>Sign Out</span>
          <v-icon>mdi-logout</v-icon>
        </v-btn>

      </v-app-bar>


    <v-navigation-drawer v-model="drawer" absolute left temporary class="deep-purple">
      <v-container>
        <v-row class="mt-5">
          <v-col class="text-center">
            <v-avatar size="100">
              <img src="/avatar-1.png">
            </v-avatar>
            <p class="grey--text subheading mt-1">Ensar Koraş</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <Popup @openSnackbar="snackbar = true" />
          </v-col>
        </v-row>
      </v-container>


      <v-list nav flat>
        <v-list-item-group v-model="group">

          <v-list-item :to="{ name : 'dashboard'}" class="white--text">
            <v-list-item-icon class="mb-4">
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name : 'projects'}" class="white--text">
            <v-list-item-icon >
              <v-icon>mdi-table</v-icon>
            </v-list-item-icon>
            <v-list-item-title>My Projects</v-list-item-title>
          </v-list-item>

          <v-list-item :to="{ name : 'team'}" class="white--text">
            <v-list-item-icon class="mb-4">
              <v-icon>mdi-group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Team</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
import Popup from "@/components/Popup";
export default {
  name: "Navbar",
  components: {Popup},
  data: () => ({
    snackbar: false,
    text: `Awesome!, you added a new project`,
    drawer: false,
    group: null,
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),

  watch: {
    group () {
      this.drawer = false
    },
}
}
</script>

<style scoped>

</style>
