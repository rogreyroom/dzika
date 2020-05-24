export const state = () => ({
  socialMedia: [],
  homePage: [],
  eventsPage: [],
  menuPage: []
})

export const mutations = {
  SET_SOCIAL_MEDIA (state, payload) {
    state.socialMedia = payload
  },

  SET_HOME_PAGE (state, payload) {
    state.homePage = payload
  },

  SET_EVENTS_PAGE (state, payload) {
    state.eventsPage = payload
  },

  SET_FOOD_MENU (state, payload) {
    state.menuPage = payload
  }
}

export const actions = {
  async FETCH_SOCIAL ({ commit }) {
    const social = await require('~/assets/content/ui/social.json')
    await commit('SET_SOCIAL_MEDIA', social)
  },

  async FETCH_HOME ({ commit }) {
    const home = await require('~/assets/content/pages/home.json')
    await commit('SET_HOME_PAGE', home)
  },

  async FETCH_EVENTS ({ commit }) {
    const events = await require('~/assets/content/pages/events.json')
    await commit('SET_EVENTS_PAGE', events)
  },

  async FETCH_FOOD_MENU ({ commit }) {
    const files = await require.context('~/assets/content/menu/', false, /\.json$/)
    const foods = files.keys().map((key) => {
      const res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('SET_FOOD_MENU', foods)
  },

  async nuxtServerInit ({ dispatch }) {
    await dispatch('FETCH_SOCIAL')
    await dispatch('FETCH_HOME')
    await dispatch('FETCH_EVENTS')
    await dispatch('FETCH_FOOD_MENU')
  }
}
