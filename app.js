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
        return handle()
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
  if (typeof state === 'object' && Object.keys(state).length === 0) {
    state = initialState
  }

  switch (action.type) {
    case 'ON_NEW_IMAGES': {
      return Object.assign(state, {
        list: action.list
      })
    }

    case 'ON_NEXT_IMAGE': {
      return Object.assign(state, {
        currentImage: state.nextImage,
        nextImage: state.nextImage + 1
      })
    }

    default:
      return state
  }
}

const store = createStore(reducer)

//* Async operations
const url = 'https://api.unsplash.com/photos/?client_id='
const clientId = '6322e07de0e155ba0d9eca8d67cf27bb9b45417f2feb1a234baa363a1dda3dbe'
const xml = new XMLHttpRequest();

function unsplashLoadCb () {
  store.dispatch({
    type: 'ON_NEW_IMAGES',
    list: JSON.parse(this.responseText)
  })
}

xml.addEventListener('load', unsplashLoadCb);
xml.open('GET', url + clientId);
xml.send();

// View
const d = document
const root = d.querySelector('#root')
const img = d.querySelector('#image')
const body = d.querySelector('body')

store.subscribe(function () {
  const state = store.getState()

  const list = state.list
  const id = state.currentImage
  img.setAttribute('src', list[id].links.download)
})

body.addEventListener('keyup', function (e) {
  const state = store.getState()

  const list = state.list
  const id = state.nextImage

  if (e.keyCode === 32) {
    root.removeChild(img)
    const nextImage = d.createElement('img')
    nextImage.setAttribute('src', list[id].links.download)
    nextImage.setAttribute('style', 'width: 100%')
    root.appendChild(nextImage)
    store.dispatch({ type: 'ON_NEXT_IMAGE' })
  }
})
