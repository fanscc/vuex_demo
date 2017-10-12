
export default{
   mutations: {
	    addcurTime (state, num) {
        let num1 = num||0
	      state.currentTime +=num1
	    },
      reduce (state, num) {
        let  num1 = num || 0
	      state.currentTime -=num1
	    },
   }



}
