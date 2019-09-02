const { debuglog } = require('util');

const LOG = debuglog('@lemuria/absolute-proxy')

/**
 * Assigns Styles To Position Element Absolutely On Top Of The Target One.
 * @param {_@lemuria/absolute-proxy.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} config.text A text to return.
 */
               async function absoluteProxy(config = {}) {
  const {
    shouldRun = true,
    text,
  } = config
  if (!shouldRun) return
  LOG('@lemuria/absolute-proxy called with %s', text)
  return text
}

/* documentary types/index.xml */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {_@lemuria/absolute-proxy.Config} Config Options for the program.
 */
/**
 * @suppress {nonStandardJsDocs}
 * @typedef {Object} _@lemuria/absolute-proxy.Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */


module.exports = absoluteProxy