/**
 * 全局监听
 */
import globalConfig from '@/assets/global/globalConfig'
import { getClientWidth, getClientHeight } from '@/utils/modules/ui'

// 设置globalConfig.ui
export const setGlobalConfigUi = () => {
  const ui = globalConfig.ui

  // 更新宽高
  ui.clientWidth = getClientWidth()
  ui.clientHeight = getClientHeight()

  // 根据视口宽度设置pxRadio
  ui.pxRadio = ui.clientWidth / ui.designWidth

  // 设置顶部安全距离safeTop
  let safeTop = 0
  let safeBottom = 0
  if (globalConfig.inApp) {
    // app端
    if (globalConfig.inIPhone && !globalConfig.inIPhoneFullScreen) {
      // iphone非全面屏
      safeTop = ui.safeTopNormal
    } else if (globalConfig.inIPhone && globalConfig.inIPhoneFullScreen) {
      // iphone全面屏
      safeTop = ui.safeTopFullScreen
      safeBottom = ui.safeBottomFullScreen
    } else if (globalConfig.inIpad) {
      // ipad
      safeTop = ui.safeTopIpad
    }
  }
  ui.safeTop = safeTop
  ui.safeBottom = safeBottom
  // 设置上部的保留高度topRemain(顶部安全距离safeTop + appBar高度)
  let topRemain = ui.safeTop
  if (globalConfig.inApp) {
    // app端带appBar
    topRemain += ui.heightAppBar * ui.pxRadio
  }
  ui.topRemain = topRemain
}

// resize处理函数
function handlerResize () {
  // 设置globalConfig.ui
  setGlobalConfigUi()
}

// 监听窗口resize
window.addEventListener('resize', handlerResize)
// 页面初始化时调用一次
handlerResize()
