
<template>
  <div class="index">
    <div class="tu">
      <div>
        <img
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2349514132,1930260968&fm=26&gp=0.jpg"
        />
      </div>
      <div>
        <span>品牌</span>
        <i>粥品香坊（大运村）</i>
        <p class="yi">蜂鸟专送 / 38分钟送达</p>
        <p class="er">在线支付满28减5 满50减10</p>
      </div>
    </div>
    <div class="kong"></div>
    <div class="mu">
      <router-link tag="span" to="goods">商品</router-link>
      <router-link tag="span" to="eval">评价</router-link>
      <router-link tag="span" to="merch">商家</router-link>
    </div>
    <div class="kong2"></div>
    <router-view></router-view>
    <div class="footer">
      <div class="car" @click="xian">购物车</div>
      <span>
        ￥
        <b>0</b>
      </span>
      <i>另需配送费￥4元</i>
      <p>
        ￥
        <b>20</b>起送
      </p>
    </div>

    <van-overlay :show="show">
      <div class="wrapper" @click.self="shi">
        <div class="block">
          <h3>购物车</h3>
          <ul>
            <li><i>莲子核桃黑米粥</i><van-stepper v-model="value" theme="round" button-size="22" disable-input /></li>
            <li><i>莲子核桃黑米粥</i><van-stepper v-model="value" theme="round" button-size="22" disable-input /></li>
            <li><i>莲子核桃黑米粥</i><van-stepper v-model="value" theme="round" button-size="22" disable-input /></li>
            <li><i>莲子核桃黑米粥</i><van-stepper v-model="value" theme="round" button-size="22" disable-input /></li>
        
          </ul>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "index",
  data() {
    return {
      show: false,
      value:''
    };
  },
  created() {
    // 实例被创建之后执行代码
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    xian() {
      this.show = true;
    },
    shi() {
      this.show = false;
    }
  },
  mounted() {
    // 页面进入时加载内容
  },
  watch: {
    // 监测变化
  }
};
</script>
<style scoped lang='scss'>
.tu {
  width: 100%;
  height: 110px;
  background: rgb(61, 60, 60);
  padding-top: 20px;
  color: #fff;
  display: flex;
  position: fixed;
  z-index: 2;
  img {
    width: 80px;
    height: 80px;
    margin: 0px 15px 0 25px;
  }
  span {
    display: inline-block;
    width: 35px;
    height: 20px;
    background: red;
    font-size: 14px;
    font-weight: 900;
    text-align: center;
    line-height: 20px;
    margin-right: 5px;
  }
  i {
    font-size: 16px;
    font-weight: 900;
  }
  .yi {
    line-height: 35px;
    color: #ccc;
    font-size: 14px;
  }
  .er {
    color: #ccc;
    font-size: 13px;
  }
}
span {
  display: inline-block;
  height: 50px;
  width: 33%;
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  font-weight: 900;
}
.router-link-exact-active {
  color: rgb(248, 85, 9);
}
.footer {
  display: flex;
  width: 100%;
  height: 60px;
  background: rgb(45, 46, 45);
  position: fixed;
  bottom: 0;
  color: #fff;
  z-index: 2;
  .car {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    left: 15px;
    bottom: 10px;
    text-align: center;
    line-height: 60px;
  }
  span {
    line-height: 60px;
    font-size: 18px;
    margin-left: 35px;
  }
  i {
    font-size: 14px;
    line-height: 60px;
    margin-left: -20px;
  }
  p {
    width: 100px;
    background: rgb(87, 87, 85);
    height: 60px;
    position: absolute;
    right: 0;
    text-align: center;
    line-height: 60px;
    font-size: 16px;
  }
}
.kong {
  height: 130px;
}
.mu {
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 2;
}
.kong2 {
  height: 50px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 100%;
  min-height: 120px;
  background-color: #fff;
  position: absolute;
  bottom: 70px;
  h3 {
    margin: 10px 0 10px 10px;
  }
  li{
    display: flex;
    font-size: 16px;
    line-height: 30px;
    i{
      margin: 0 150px 0 10px;
    }
  }
}
</style>