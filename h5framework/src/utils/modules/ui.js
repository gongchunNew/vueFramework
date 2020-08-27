/**
 * 获取浏览器视口宽度
 */
export const getClientWidth = () => {
  let clientWidth = 0
  // eslint-disable-next-line eqeqeq
  if (document.compatMode == 'CSS1Compat') {
    clientWidth = document.documentElement.clientWidth
  } else {
    clientWidth = document.body.clientWidth
  }
  return clientWidth
}

/**
   * 获取浏览器视口高度
   */
export const getClientHeight = () => {
  let clientHeight = 0
  // eslint-disable-next-line eqeqeq
  if (document.compatMode == 'CSS1Compat') {
    clientHeight = document.documentElement.clientHeight
  } else {
    clientHeight = document.body.clientHeight
  }
  return clientHeight
}

/**
   * 获取当前页面总高度
   */
export const getScrollHeight = () => {
  let scrollHeight = 0
  let bodyScrollHeight = 0
  let documentScrollHeight = 0
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
  scrollHeight =
      bodyScrollHeight - documentScrollHeight > 0
        ? bodyScrollHeight
        : documentScrollHeight
  return scrollHeight
}

/**
   * 获取当前页面滚动高度
   */
export const getScrollTop = () => {
  let scrollTop = 0
  let bodyScrollTop = 0
  let documentScrollTop = 0
  if (document.body) {
    bodyScrollTop = document.body.scrollTop
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop
  }
  scrollTop =
      bodyScrollTop - documentScrollTop > 0 ? bodyScrollTop : documentScrollTop
  return scrollTop
}

/**
   * 获取元素相对于页面顶端的距离
   * @param {*} ele dom元素
   */
export const getEleOffsetTop = ele => {
  if (!ele) return

  // 获得元素距相对定位的父元素的top
  let eleOffetTop = ele.offsetTop
  // 将ele换成相对定位的父元素
  ele = ele.offsetParent

  while (ele !== null) {
    // 只要还有相对定位的父元素，获得父元素距他父元素的top值，累加到结果中
    eleOffetTop += ele.offsetTop
    ele = ele.offsetParent
  }

  return eleOffetTop
}

/**
   * 当前是否为iphone全面屏
   */
export const isIphoneFullScreen = () => {
  // 不是iphone机型
  if (!/iphone/gi.test(window.navigator.userAgent)) {
    return false
  }

  const devicePixelRatio = parseInt(window.devicePixelRatio)
  const width = window.screen.width
  const height = window.screen.height

  if (devicePixelRatio === 3 && width === 375 && height === 812) {
    // iphone X, iphone XS, iphone 11 Pro
    return true
  } else if (devicePixelRatio === 3 && width === 414 && height === 896) {
    // iphone XS Max, iphone 11 Pro Max
    return true
  } else if (devicePixelRatio === 2 && width === 414 && height === 896) {
    // iphone XR iphone 11
    return true
  }

  return false
}
