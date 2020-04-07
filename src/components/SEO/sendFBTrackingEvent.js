const sendFBTrackingEvent = (name, params) => {
  if (window && window.fbq) {
    window.fbq('track', name, params)
  }
}

export default sendFBTrackingEvent
