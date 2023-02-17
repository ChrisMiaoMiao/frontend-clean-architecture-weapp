import { dependenciesLocator } from '../../lib/core/index'
import usePlopBehavior from '../../common/plop-behavior'
const ploc = dependenciesLocator.provideToDoListPloc()

Page({
  behaviors: [usePlopBehavior(ploc)],
  data: {
    inputStr: ''
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

  onLoad() {
    ploc.getToDoList()
  }
})
