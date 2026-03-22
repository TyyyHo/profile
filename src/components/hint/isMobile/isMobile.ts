export function isMobileDevice() {
  let isMobileDevice = false;
  const mobileDevices: string[] = [
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
