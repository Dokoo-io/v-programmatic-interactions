<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      Programmatic Interactions
    </v-app-bar>
    <v-main>
      <div class="pa-10">
        <v-btn class="mr-4" color="primary" @click="openModal">Open Modal</v-btn>
        <v-btn color="primary" @click="notify">Open Notification</v-btn>
      </div>
    </v-main>
    <interactions />
  </v-app>
</template>

<script>
import {Interactions, addModal, notify} from '@dokoo/v-programmatic-interactions'
import ExampleModal from './ExampleModal'

export default {
  name: 'App',
  components: {
    Interactions: Interactions
  },
  methods: {
    openModal () {
      addModal({
        component: () => ExampleModal
      })
    },
    notify () {
      notify({
        text: 'This is a notification',
        type: 'success'
      })
    }
  }
};
</script>
