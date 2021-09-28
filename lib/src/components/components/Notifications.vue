<template>
  <div class="notifications-wrapper d-flex justify-end flex-column">
    <v-slide-y-reverse-transition class="d-flex flex-column-reverse" group>
      <v-alert
          v-for="(notification, index) in notifications"
          :key="index + '-notification'"
          :type="notification.type"
          :color="notification.color || notification.type || 'secondary'"
          dismissible
          dark
      >
        <v-icon
            v-if="notification.icon"
            left
        >
          {{ notification.icon }}
        </v-icon>
        {{ notification.text }}
      </v-alert>
    </v-slide-y-reverse-transition>
  </div>
</template>

<script>
import { state } from '../state'
export default {
  data () {
    return {
      ...state
    }
  }
}
</script>

<style scoped>
.notifications-wrapper {
  position: fixed;
  right: 20px;
  bottom: 30px;
  width: 350px;
}
</style>
