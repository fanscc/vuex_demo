<template>
  <div class="vux-actionsheet">
     <p>{{currentTime}}</p>
     <button @click='actionadd'>增加</button>
     <button @click='reduce(10)'>减少</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import store from '@/store/index'
  import {mapMutations, mapState,mapActions} from 'vuex'

  export default {
    data(){
      return {
      }
    },
    methods: {
       ...mapMutations(['addcurTime','reduce']),
       ...mapActions(['actionadd'])
    },
    computed: {
       ...mapState(['currentTime'])
    },
    store

  }
</script>
