<template>
  <div class="wrapper">
    <div class="test-wrapper" ref="wrapper">
      <div class="item" v-for="(item, index) in testData" :key="index"
        :style="`height: ${item.iheight}px; order: ${item.order};`" ref="items">{{ item.msg }}</div>
      <div class="split" v-for="(s, index) in col-1" :key="`${index}key`" :style="`order: ${s}`"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    col: {
      type: Number,
      default: 2,
    }
  },
  data() {
    return {
      testData: [],
      // col: 5,
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    col: {
      handler(val) {
        console.log('%c 🍾 当前列数改变val: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', val);
        this.$nextTick(()=>{
          this.init()
        })
      }
    }
  },
  methods: {
    init() {
      // 造一些数据 用于展示瀑布流中元素
      this.testData = []
      for(let i = 1; i <= 25; i++) {
        const iheight = Math.floor(Math.random()*100 + 40)
        const item = {
          iheight: iheight,
          msg: `高度：${iheight}px 排序${i}`,
          order: i % this.col || this.col
        }
        this.testData.push(item)
      }
      this.$nextTick(()=>{
        // 计算最大的高度 = 找出所有列中最大高度 + (margin + border) * 当前列元素个数
        let temp = {}
        this.$refs.items.forEach(ele => {
          temp[ele.style.order] = (temp[ele.style.order] || 0) + ele.clientHeight +17
        })
        const maxHeight = Math.max(...Object.values(temp))
        this.$refs.wrapper.style.height = `${maxHeight}px`
      })
    }
  }
}
</script>
<style>
.wrapper {
  height: 600px;
  overflow-y: auto;
}
.test-wrapper {
  height: 800px;
  margin-top: 40px;
  display: flex;
  flex-flow: column wrap;
  align-content: flex-start;
}
.wrapper .item {
  width: 80px;
  background-color: cadetblue;
  word-break: break-all;
  margin-bottom: 15px;
  border: 1px solid white;
}
.split {
  width: 15px;
  height: 100%;
  order: 1;
}
</style>
