<template>
  <div class="hello">
    <p>waterfall-demo</p>
    <p>当前列数 {{ col }}</p>
    <span class="btn" @click="sub"> - </span>
    <span class="btn" @click="add"> + </span>
    <waterfall :col="col"></waterfall>
  </div>
</template>

<script>
import waterfall from '@/components/waterfall'
export default {
  data () {
    return {
      col: 5
    }
  },
  components: {
    waterfall
  },
  methods: {
    sub() {
      this.col -= 1
    },
    add() {
      this.col += 1
    }
  }
}
</script>
<style scoped>
.btn {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  width: 80px;
  text-align: center;
  background-color: cornflowerblue;
  color: #fff;
  border: 1px solid #fff;
}
</style>

