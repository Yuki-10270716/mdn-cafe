import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13c231de = () => interopDefault(import('../pages/concept/index.vue' /* webpackChunkName: "pages/concept/index" */))
const _0d33c5d5 = () => interopDefault(import('../pages/information/index.vue' /* webpackChunkName: "pages/information/index" */))
const _5b18f628 = () => interopDefault(import('../pages/menu/index.vue' /* webpackChunkName: "pages/menu/index" */))
const _086979c3 = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _5d33397d = () => interopDefault(import('../pages/information/_id.vue' /* webpackChunkName: "pages/information/_id" */))
const _516a1010 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/concept",
    component: _13c231de,
    name: "concept"
  }, {
    path: "/information",
    component: _0d33c5d5,
    name: "information"
  }, {
    path: "/menu",
    component: _5b18f628,
    name: "menu"
  }, {
    path: "/shop",
    component: _086979c3,
    name: "shop"
  }, {
    path: "/information/:id",
    component: _5d33397d,
    name: "information-id"
  }, {
    path: "/",
    component: _516a1010,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}