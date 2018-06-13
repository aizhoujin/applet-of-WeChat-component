// pages/components/Dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true //在组件定义时选项中启用slot
  },

  // 组件的属性列表，用于组件自定义设置
  properties: {
    // 弹窗标题
    title:{ // 属性名字
      type: String,// 类型(必填项){String,Number,Boolean,Object,null}
      value: '我是dialog'// 属性初始值
    },
    // dialog 内容
    content: {
      type: String,
      value: '我是dialog内容'
    },
    // 取消按钮
    cancelText: {
      type: String,
      value: '取消'
    },
    // 弹窗确认按钮文字
    confirmText: {
      type: String,
      value: '确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false//dialog显示隐藏
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 隐藏弹框
    hideDialog(){
      this.setData({
        isShow: !this.data.isShow
      })
    },
    // 展示弹框
    showDialog(){
      this.setData({
        isShow: !this.data.isShow
      })
    },

    cancelEvent(){
      this.triggerEvent('cancelEvent')
    },
    confirmEvent(){
      this.triggerEvent('confirmEvent')
    }
  }
})
