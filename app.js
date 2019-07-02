//app.js
App({
  onLaunch: function () {
    // 小程序提示更新
    if (wx.getUpdateManager) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调，监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。
        /* console.log('请求完新版本信息的回调', res.hasUpdate) */
      })
      updateManager.onUpdateReady(function () {
        // 监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，请重启应用！',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })
      updateManager.onUpdateFailed(function () {
        // 新版本下载失败，监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），下载失败（可能是网络原因等）后回调
        wx.showToast({
          title: '新版本下载失败,请删除小程序重新下载！',
          icon: 'none',
          duration: 3000
        })
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，部分功能使用受限，请升级到最新微信版本后重试。'
      })
    }
  },
  globalData: {
    userInfo: null
  }
})