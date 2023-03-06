export function isMobileDevice() {
  let isMobileDevice = false;
  let mobileDevices = [
    "Android",
    "webOS",
    "iPhone",
    "iPad",
    "iPod",
    "BlackBerry",
    "Windows Phone",
  ];

  for (let i = 0; i < mobileDevices.length; i++) {
    if (navigator.userAgent.match(mobileDevices[i])) isMobileDevice = true;
  }

  return isMobileDevice;
}
