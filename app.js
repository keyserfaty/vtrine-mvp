// Constants
const d = document
const url = 'https://api.unsplash.com/photos/?client_id='
const clientId = '6322e07de0e155ba0d9eca8d67cf27bb9b45417f2feb1a234baa363a1dda3dbe'

// Model
const initialState = {
  list: [],
  currentImage: 0,
  nextImage: 1
}

const createStore = function createStoreFn (reducer) {
  var state = undefined
  var subscribers = []

  return {
    dispatch: function (action) {
      state = reducer(state, action)
      subscribers.forEach(function (handle) {
        return handle(state, action)
      })
    },
    getState: function () {
      return state
    },
    subscribe: function (handler) {
      subscribers.push(handler)
    }
  }
}

const reducer = function reducerFn (state, action) {
  if (typeof state === 'undefined') {
    state = initialState
  }

  switch (action.type) {
    case 'ON_NEW_IMAGES': {
      return Object.assign({}, state, {
        list: [].concat(state.list, action.payload.list)
      })
    }

    case 'ON_NEXT_IMAGE': {
      return Object.assign({}, state, {
        currentImage: state.nextImage,
        nextImage: state.nextImage + 1
      })
    }

    default:
      return state
  }
}

const store = createStore(reducer)

// View
function Node (elem, attrs) {
  const node = d.createElement(elem)
  Object.keys(attrs).forEach(function (key) {
    node.setAttribute(key, attrs[key])
  })

  return node
}

store.subscribe(function (state, action) {
  const root = d.querySelector('#root')

  const list = state.list
  const id = state.currentImage
  const nextId = state.nextImage

  switch (action.type) {
    case 'ON_WINDOW_LOAD':
    case 'ON_FETCH_IMAGES': {
      const xml = new XMLHttpRequest();

      xml.addEventListener('load', function () {
          store.dispatch({
            type: 'ON_NEW_IMAGES',
            payload: {
              list: JSON.parse(this.responseText)
            }
          })
        }
      );
      xml.open('GET', url + clientId);
      xml.send();

      break
    }

    case 'ON_NEW_IMAGES': {
      const images = d.querySelectorAll('img')
      images.forEach(function (image) {
        root.removeChild(image)
      })

      const currentImage = Node('img', {
        id: id,
        src: list[id].urls.small,
        style: 'width: 100%'
      })

      const nextImage = Node('img', {
        id: nextId,
        src: list[nextId].urls.small,
        style: 'width: 100%; display: none'
      })

      root.appendChild(currentImage)
      root.appendChild(nextImage)

      break
    }

    case 'ON_SPACE_BAR': {
      store.dispatch({ type: 'ON_NEXT_IMAGE' })

      if (id === list.length - 2) {
        store.dispatch({
          type: 'ON_FETCH_IMAGES'
        })
      }

      const images = root.querySelectorAll('img')
      const prevImage = images[0]
      const currentImage = images[1]
      const nextImage = Node('img', {
        id: nextId,
        src: list[nextId].urls.small,
        style: 'width: 100%; display: none'
      })

      root.removeChild(prevImage)
      currentImage.setAttribute('style', 'width: 100%;')
      root.appendChild(nextImage)

      break
    }
  }
})

// Events
const body = d.querySelector('body')

window.addEventListener('load', function () {
  store.dispatch({
    type: 'ON_WINDOW_LOAD'
  })
})

body.addEventListener('keyup', function (e) {
  if (e.keyCode === 32) {
    store.dispatch({
      type: 'ON_SPACE_BAR'
    })
  }
})
