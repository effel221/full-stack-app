import './assets/main.css'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import {createApp, provide, h} from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    uri: 'http://localhost:8000/graphql',
})

const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})

app.use(createPinia())

app.mount('#app')
