/**
 * Assigns Styles To Position Element Absolutely On Top Of The Target One.
 * @param {HTMLElement} obj The target element to position absolutely.
 * @param {HTMLElement} element The source element.
 */
export default function(obj, element) {
  const bb = element.getBoundingClientRect()
  const top = bb.top + window.scrollY
  const left = bb.left + window.scrollX
  const width = bb.width
  const height = bb.height

  const cs = getComputedStyle(element)
  const pt = parseInt(cs.paddingTop)
  const pl = parseInt(cs.paddingLeft)
  const bt = parseInt(cs.borderTopWidth)
  const bl = parseInt(cs.borderLeftWidth)

  obj.style.position = 'absolute'
  obj.style.top = top + pt + bt + 'px'
  obj.style.left = left - pl - bl + 'px'
  obj.style.width = width + 'px'
  obj.style.height = height + 'px'
}