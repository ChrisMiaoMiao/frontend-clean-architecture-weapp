import { Ploc } from '../lib/core/index'


const usePlopBehavior = (ploc: Ploc<S>) => Behavior({
  data: {
    state: ''
  },
  detached: function () {
    ploc.unsubscribe(this.stateSubscription);
  },
  ready: function () {
    console.log(ploc, 'ploc')
    ploc.subscribe(this.stateSubscription);
  },
  methods: {
    stateSubscription: function (newState: S) {
      this.setData({
        state: newState
      })  
    }
  }
})

export default usePlopBehavior