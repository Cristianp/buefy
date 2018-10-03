// Polyfills for SSR

export const isSSR = typeof window === 'undefined'

export const HTMLElement = isSSR ? Object : window.HTMLElement
