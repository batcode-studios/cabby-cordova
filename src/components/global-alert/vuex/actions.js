export default {
  triggerGlobalAlert: ({ commit }, payload) => {
    commit('SET_GLOBAL_ALERT', payload.condition)
    commit('SET_GLOBAL_ALERT_COLOR', payload.color)
    commit('SET_GLOBAL_ALERT_MSG', payload.message)
  }
}
