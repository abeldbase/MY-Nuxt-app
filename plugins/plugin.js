import SearchMixin from '~/mixins/SearchMixin'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.mixin(SearchMixin)
  })