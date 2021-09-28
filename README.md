# v-programmatic-interactions

This package allows you to trigger vuetify dialogs programmatically:

## Installation

```
yarn add @dokoo/v-programmatic-interactions
```
Include the `Interactions` component just before closing the `v-app` tag:

```vue
<template>
  <v-app>
    <v-app-bar>
      ...
    </v-app-bar>
    <v-main>
      ...
    </v-main>
    <!-- Here, you include the package dialogs: -->
    <interactions />
  </v-app>
</template>

<script>
import { Interactions } from '@hammerbot/v-programmatic-interactions'

export default {
  components: {
    Interactions
  }
};
</script>

```

## Usage

```javascript
import { addModal, notify } from '@dokoo/v-programmatic-interactions'
import MyForm from './MyForm.vue'

export default {
  methods: {
    openForm () {
      addModal({
        component: MyForm
      }) 
    },
    openNotification () {
      notify({
        type: 'success',
        text: 'This is a notification!'
      })
    }
  }
}
```

The opened dialogs only work as "Persistent dialogs". The dialog component must emit the `close` event to close the dialog:

```vue
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

```

## Project setup
```
cd lib
yarn link
cd ../examples
yarn link @dokoo/v-programmatic-interactions
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
