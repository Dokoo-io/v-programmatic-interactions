export const state = {
  modals: [],
  notifications: []
}

export const methods = {
  addModal (options) {
    state.modals.push({
      id: new Date().getTime(),
      ...options
    })
  },
  notify ({ timeout = 3000, type, text, color, icon }) {
    const notification = {
      type,
      text,
      color,
      icon
    }
    state.notifications.push(notification)
    setTimeout(() => {
      const index = state.notifications.indexOf(notification)
      state.notifications.splice(index, 1)
    }, timeout)
  }
}
