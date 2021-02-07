<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <router-link to="/">我的美团</router-link>
        <dl class="list">
          <dd>
            <router-link to="/">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="/">我的收藏</router-link>
          </dd>
          <dd>
            <router-link to="/">抵用券</router-link>
          </dd>
          <dd>
            <router-link to="/">用户设置</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <router-link to="/">手机APP</router-link>
      </li>
      <li class="list bd">
        <router-link to="/">商家中心</router-link>
        <dl>
          <dd>
            <router-link to="/">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link to="/">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link to="/">我想合作</router-link>
          </dd>
          <dd>
            <router-link to="/">手机免费开店</router-link>
          </dd>
          <dd>
            <router-link to="/">餐饮代理商招募</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <router-link to="/">网站导航</router-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>
              <router-link :to="{path: '/'}">国际机票</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">火车票</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">民宿</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">经济型酒店</router-link>
            </dd>
          </dl>

          <dl class="food">
            <dt>吃美食</dt>
            <dd>
              <router-link :to="{path: '/'}">烤鱼</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">烧烤</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">自助餐</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">特色小吃</router-link>
            </dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>
              <router-link :to="{path: '/'}">热映电影</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">热映影院</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">热映电影口碑榜</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">最受期待电影</router-link>
            </dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <img
                class="appicon"
                src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                title="美团app"
                alt="美团app"
              >
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                title="外卖app"
                alt="外卖app"
              >
            </dd>
            <dd><img
                class="appicon"
                src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png"
                title="民宿app"
                alt="民宿app"
              ></dd>
            <dd><img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                title="点评app"
                alt="点评app"
              ></dd>
            <dd><img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                title="猫眼app"
                alt="猫眼app"
              ></dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
