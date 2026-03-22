export function isMobileDevice() {
  let isMobileDevice = false
  const mobileDevices: string[] = [
    "Android",
    "webOS",
    "iPhone",
    "iPad",
    "iPod",
    "BlackBerry",
    "Windows Phone",
  ]

  for (const device of mobileDevices) {
    if (navigator.userAgent.match(device)) isMobileDevice = true
  }

  return isMobileDevice
}
