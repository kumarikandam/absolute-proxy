/* alanode example/ */
import absoluteProxy from '../src'

(async () => {
  const res = await absoluteProxy({
    text: 'example',
  })
  console.log(res)
})()