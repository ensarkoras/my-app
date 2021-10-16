<template>
  <div>
    <h1 class="subheading grey--text">Team</h1>

    <v-container fluid class="my-4">
      <v-row dense no-gutters>
        <v-col cols="12" v-for="person in team" :key="person.title" sm="6" md="4" lg="3" xs="12">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4 px-3" >
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" >
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>
                  mdi-message
                </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>



  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer' , avatar : '/avatar-1.png'},
        { name: 'Ryu', role: 'Graphic designer', avatar : '/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar : '/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar : '/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar : '/avatar-5.png'}
      ],
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ]
    }
  }
}
</script>
