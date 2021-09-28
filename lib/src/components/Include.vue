<template>
  <div>
    <programmatic-modal
        v-for="modal in modals"
        :key="modal.id"
        :options="modal"
        @close="removeModal(modal)"
    />
    <notifications />
  </div>
</template>

<script>
import ProgrammaticModal from './components/ProgrammaticModal'
import Notifications from "./components/Notifications";
import { state } from './state'

export default {
  components: {
    ProgrammaticModal,
    Notifications
  },
  data () {
    return {
      ...state
    }
  },
  methods: {
    removeModal (modal) {
      const index = this.modals.indexOf(modal)
      this.modals.splice(index, 1)
    }
  }
}
</script>
