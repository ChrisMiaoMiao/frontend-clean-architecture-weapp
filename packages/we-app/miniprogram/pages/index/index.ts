import { dependenciesLocator } from '../../lib/core/index'

const ploc = dependenciesLocator.provideToDoListPloc()

Page({
  data: {
    state: '',
    inputStr: ''
  },

  stateSubscription (newState: any) {
    this.setData({
      state: newState
    })
  },

  handleInputChange (e: WechatMiniprogram.CustomEvent) {
    this.setData({
      inputStr: e.detail.value
    })
  },
  handleBtnAddClick () {
    ploc.addToDo(this.data.inputStr)
    this.setData({
      inputStr: ''
    })
  },

  handleRemoveBtnClick (e: WechatMiniprogram.CustomEvent) {
    ploc.deleteToDo(+e.currentTarget.dataset.id)
  },

  onUnload () {
    ploc.unsubscribe(this.stateSubscription);
  },
  onLoad() {
    ploc.subscribe(this.stateSubscription);
    ploc.getToDoList()
  }
})
