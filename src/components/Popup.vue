<template>
  <v-dialog v-model="dialog" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="#26de81" dark v-bind="attrs" v-on="on">
        ADD NEW PROJECT
      </v-btn>
    </template>

    <v-card >
      <v-card-title class="text-h5 grey lighten-2">
        Add New Project
      </v-card-title>

      <v-divider></v-divider>

      <v-form class="pa-3" ref="form">
        <v-text-field
            :rules="[ () => title.length >= 3 || 'Title must be bigger than 3 characters'] "
            v-model="title"
            label="Title"
            required
            prepend-icon="mdi-pencil"
        ></v-text-field>

        <v-textarea
            :rules="[ () => content.length >= 3 || 'Content must be bigger than 3 characters'] "
            v-model="content"
            label="Information"
            required
            clearable
            clear-icon="mdi-close-circle"
            prepend-icon="mdi-pencil-outline"
        ></v-textarea>

        <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            max-width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                :rules="[() => !!computedDateFormattedDatefns || 'This field is required']"
                prepend-icon="mdi-calendar"
                :value="computedDateFormattedDatefns"
                clearable
                label="Due date"
                readonly
                v-bind="attrs"
                v-on="on"
                @click:clear="date = null"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="date"
              @change="menu2 = false"
          ></v-date-picker>
        </v-menu>

        <v-spacer></v-spacer>
        <v-btn :loading="loading" plain class="mx-0 mt-3" color="purple" type="submit" text @click.prevent="submit">
          Add Project
        </v-btn>


      </v-form>

      <v-card-actions>


      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { format, parseISO } from 'date-fns'


import db from '@/db'


export default {
  name : 'Popup',
  data () {
    return {
      dialog: false,
      title : '',
      content : '',
      date :'',
      menu2: false,
      documents: [],
      loading : false
    }
  },
  methods : {
    submit(){
      if (this.$refs.form.validate()){
        this.loading = true
        //console.log(this.title, this.content, this.date)
        const project = {
          title : this.title,
          content : this.content,
          due : format(parseISO(this.date), 'do MMMM yyy'),
          person : 'Humeyra',
          status : 'ongoing'
        }

        db.collection("projects").add({project})
            .then((docRef) => {
              console.log("Document written with ID: ", docRef.id);
              this.loading = false
              this.dialog = false
              this.$emit('openSnackbar')
            })
            .catch((error) => {
              console.error("Error adding document: ", error);
              this.loading = false
            });

      }

    }
  },
  computed : {
    computedDateFormattedDatefns () {
      return this.date ? format(parseISO(this.date), 'do MMMM yyy') : ''
    },
  }
}
</script>
