import 'alpinejs'
import LazyLoad from 'vanilla-lazyload'
import { isRTL, docReady } from './helpers'

const $html = document.querySelector('html')

if (isRTL()) {
  $html.setAttribute('dir', 'rtl')
  $html.classList.add('rtl')
}

docReady(() => {
  const lazyLoadInstance = new LazyLoad()

  document.addEventListener('ajax-content-loaded', () => {
    lazyLoadInstance.update()
  })
})
