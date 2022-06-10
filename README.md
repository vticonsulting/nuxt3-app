# Demos (codename: frontier)

> Digital Garden

## Features

- Usage examples
  - [ ] Error log viewer
  - [ ] Stored Procedures
- Dev Notes (nuxt-content)
- documentation (vitepress)
- unit testing (vitepress)
- mock (msw)
- supabase open-source firebase alternative
- plausible analytics
- Component Testing (cypress)
- End-to-End Testing (cypress, playwright)
- Headless UI Components (headless-ui)
- Any icon you want to use. instantly!
- Composition API (Composables)
- Options API - Easy to migrate
- Vuex OR Pinia
- Class Components (deprecated, but supported)

- https://github.com/viandwi24/nuxt3-awesome-starter#readme
- https://github.com/Baroshem/nuxt-shopify-tailwind#readme
- https://github.com/Atinux/content-wind#readme
- https://content.nuxtjs.org/examples/essentials/hello-world

---

## Querying for content

```ts
const { data } = await useAsyncData()
const file = await queryContent('hello').findOne()

const { data: equalQuery } = await useAsyncData('equal', () => {
  return queryContent('/').where({ director: 'Hayao Miyazaki' }).find()
})

const { data: lowerThanQuery } = await useAsyncData('lower-than', () => {
  return queryContent('/').where({
    release_date: { $lt: 1997 }
  }).find()
})

const { data: notEqualQuery } = await useAsyncData('not-equal', () => {
  return queryContent('/').where({
    director: { $ne: 'Hayao Miyazaki' }
  }).find()
})

const { data: inQuery } = await useAsyncData('in', () => {
  return queryContent('/').where({
    director: { $in: ['Hayao Miyazaki', 'Yoshifumi Kondō'] }
  }).find()
})

const { data: onlyTitle } = await useAsyncData('homepage', () => {
  return queryContent('/').only(['title']).findOne()
})

const { data: withOutTitle } = await useAsyncData('homepage', () => {
  return queryContent('/').without(['title']).findOne()
})
```

---

```ts
const skip = ref(2)
const limit = ref(2)

const { data, refresh } = await useAsyncData('homepage', () => {
  return queryContent('/').skip(skip.value).limit(limit.value).find()
})

watch([skip, limit], () => {
  refresh()
})
```
