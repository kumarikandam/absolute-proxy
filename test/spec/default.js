import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import absoluteProxy from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof absoluteProxy, 'function')
  },
  async 'calls package without error'() {
    await absoluteProxy()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await absoluteProxy({
      text,
    })
    ok(res, text)
  },
}

export default T