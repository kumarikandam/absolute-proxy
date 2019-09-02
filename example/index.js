import positionAbsolute from '../src'

const obj = document.createElement('object')
obj.type = 'image/svg+xml'
obj.data = src

const element = document.getElementById('example')

positionAbsolute(obj, element)
window.addEventListener('resize', () => {
  positionAbsolute(obj, element)
})