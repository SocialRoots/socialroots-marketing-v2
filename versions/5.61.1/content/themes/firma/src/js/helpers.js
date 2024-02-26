export const docReady = (fn) => {
  if (
    document.readyState === 'complete' || document.readyState === 'interactive'
  ) {
    setTimeout(fn, 1)
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

export const isRTL = () => {
  const $html = document.querySelector('html')
  return ['ar', 'he', 'fa'].includes($html.getAttribute('lang'))
}
