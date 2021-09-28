<template>
  <v-dialog :value="true" :max-width="options.maxWidth || 800" persistent>
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
