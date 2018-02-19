export default {
  SET_GLOBAL_ALERT: (state, payload) => {
    state.globalAlert = payload
  },
  SET_GLOBAL_ALERT_COLOR: (state, payload) => {
    state.globalAlertColor = payload
  },
  SET_GLOBAL_ALERT_MSG: (state, payload) => {
    state.globalAlertMSG = payload
  }
}
