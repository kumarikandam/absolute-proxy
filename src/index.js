/**
 * Assigns Styles To Position Element Absolutely On Top Of The Target One.
 * @param {!HTMLElement} obj The target element to position absolutely.
 * @param {!HTMLElement} element The source element.
 */
export default function(obj, element) {
  const rect = element.getBoundingClientRect()
  const top = rect.top + window.scrollY
  const left = rect.left + window.scrollX
  const width = rect.width
  const height = rect.height

  const cs = getComputedStyle(element)
  const pt = parseInt(cs.paddingTop, 10)
  const pb = parseInt(cs.paddingBottom, 10)
  const pl = parseInt(cs.paddingLeft, 10)
  const pr = parseInt(cs.paddingRight, 10)
  const bt = parseInt(cs.borderTopWidth, 10)
  const bl = parseInt(cs.borderLeftWidth, 10)
  const br = parseInt(cs.borderRightWidth, 10)
  const bb = parseInt(cs.borderBottomWidth, 10)

  obj.style.position = 'absolute'
  obj.style.top = top + (pt + bt) + 'px'
  obj.style.left = left + (pl + bl) + 'px'
  obj.style.width = width - (pl + pr + bl + br) + 'px'
  obj.style.height = height - (pt + pb + bt + bb) + 'px'
}