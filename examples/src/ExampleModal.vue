<template>
  <v-card>
    <v-card-title>
      Exemple
    </v-card-title>
    <v-card-text>
      This is a programmatic modal!
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="warning" text @click="$emit('close')">
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
