<template>
  <div class="m-istyle">
    <dl
      @mouseover="over"
      :class="nav.class"
    >
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active:kind == item.tab}"
        :data-type=item.tab
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="(item, index) in resultsData[kind]"
        :key="index"
      >
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never"
        >
          <img
            :src="item.image"
            class="image"
          >
          <div
            style="padding: 0 14px;"
            class="cbody"
          >
            <p class="product-title">{{item.title.titleone}}</p>
            <p class="sub-title">
              <span>{{item.title.titletwo}}</span>
              <span>{{item.title.titlethree}}</span>
              <span>{{item.title.titlefor}}</span>
            </p>
            <p class="price-number numfont price"><span class="price-icon">￥</span>{{item.price}}</p>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      kind: 'all',
      resultsData: {}
    }
  },
  created () {
    api.getResultProducts().then(res => {
      this.resultsData = res.data.data
    })
  },
  props: [
    'nav'
  ],
  methods: {
    over (e) {
      let dom = e.target
      let tarName = dom.tagName.toLowerCase()
      if (tarName !== 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/css/index/artistic.scss';
</style>
