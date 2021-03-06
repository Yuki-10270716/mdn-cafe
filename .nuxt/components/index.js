export { default as BaseButton } from '../../components/BaseButton.vue'
export { default as BaseHeading } from '../../components/BaseHeading.vue'
export { default as LayoutFooter } from '../../components/LayoutFooter.vue'
export { default as LayoutHeader } from '../../components/LayoutHeader.vue'
export { default as LayoutInformationList } from '../../components/LayoutInformationList.vue'
export { default as LayoutMenuList } from '../../components/LayoutMenuList.vue'
export { default as LayoutVisual } from '../../components/LayoutVisual.vue'
export { default as LayoutWrapper } from '../../components/LayoutWrapper.vue'

export const LazyBaseButton = import('../../components/BaseButton.vue' /* webpackChunkName: "components/BaseButton" */).then(c => c.default || c)
export const LazyBaseHeading = import('../../components/BaseHeading.vue' /* webpackChunkName: "components/BaseHeading" */).then(c => c.default || c)
export const LazyLayoutFooter = import('../../components/LayoutFooter.vue' /* webpackChunkName: "components/LayoutFooter" */).then(c => c.default || c)
export const LazyLayoutHeader = import('../../components/LayoutHeader.vue' /* webpackChunkName: "components/LayoutHeader" */).then(c => c.default || c)
export const LazyLayoutInformationList = import('../../components/LayoutInformationList.vue' /* webpackChunkName: "components/LayoutInformationList" */).then(c => c.default || c)
export const LazyLayoutMenuList = import('../../components/LayoutMenuList.vue' /* webpackChunkName: "components/LayoutMenuList" */).then(c => c.default || c)
export const LazyLayoutVisual = import('../../components/LayoutVisual.vue' /* webpackChunkName: "components/LayoutVisual" */).then(c => c.default || c)
export const LazyLayoutWrapper = import('../../components/LayoutWrapper.vue' /* webpackChunkName: "components/LayoutWrapper" */).then(c => c.default || c)
