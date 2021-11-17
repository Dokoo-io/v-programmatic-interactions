<template>
  <v-dialog :value="true" :max-width="options.fullscreen ? undefined : (options.maxWidth || 800)" persistent :fullscreen="options.fullscreen">
    <component v-bind="options.options || {}" :is="options.component()" @close="$emit('close')" />
  </v-dialog>
</template>

<script>
export default {
  props: {
    options: {
      required: true,
      type: Object
    }
  },
  data () {
    return {}
  },
  created () {
  },
  methods: {
  }
}
</script>
