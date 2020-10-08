
<template>
  <div class="index">
    <header id="book">
      <mt-header title="详情" id="ti">
        <router-link to slot="left">
          <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
        </router-link>
      </mt-header>
    </header>
    <img
      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2732061170,1855119445&fm=26&gp=0.jpg"
      alt
    />

    <div class="yi">
      <h3>皮蛋瘦肉粥</h3>
      <p>月售1132份 好评率100%</p>
      <i>
        ￥
        <b>24</b>
      </i>
      <van-button round type="info">加入购物车</van-button>
    </div>

    <div class="er">
      <h2>商品介绍</h2>
      <p>
        一碗皮蛋瘦肉粥 ,总是我到粥店时的不_之选。香浓软滑
        饱腹暖心,皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口,让人
        喝这样的一-碗粥也觉得心满意足。
      </p>
    </div>

    <div class="san">
      <h2>商品评价</h2>
      <van-button type="info" @click.native="go(1)">全部</van-button>
      <van-button type="info" @click.native="go(2)" color="rgb(92, 197, 238)">推荐</van-button>
      <van-button type="info" @click.native="go(3)" color="#aaa">吐槽</van-button>

      <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1" style="display: block">
         
          <div class="ping">
            <div class="top">
              <p>2020-10-08 12:04</p>
              <i>mingcheng</i>
              <img
                src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
                alt
              />
            </div>
            <div class="but">
              <p>万色让他发一个耳朵合同法如何腾飞</p>
            </div>
          </div>

          <div class="ping">
            <div class="top">
              <p>2020-10-08 12:04</p>
              <i>mingcheng</i>
              <img
                src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
                alt
              />
            </div>
            <div class="but">
              <p>万色让他发一个耳朵合同法如何腾飞</p>
            </div>
          </div>

          <div class="ping">
            <div class="top">
              <p>2020-10-08 12:04</p>
              <i>mingcheng</i>
              <img
                src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
                alt
              />
            </div>
            <div class="but">
              <p>万色让他发一个耳朵合同法如何腾飞</p>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2" style="display: block">
          <div class="ping">
            <div class="top">
              <p>2020-10-08 12:04</p>
              <i>mingcheng</i>
              <img
                src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
                alt
              />
            </div>
            <div class="but">
              <p>万色让他发一个耳朵合同法如何腾飞</p>
            </div>
          </div>

          <div class="ping">
            <div class="top">
              <p>2020-10-08 12:04</p>
              <i>mingcheng</i>
              <img
                src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
                alt
              />
            </div>
            <div class="but">
              <p>万色让他发一个耳朵合同法如何腾飞</p>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3" style="display: block">
          <div class="ping">
            <div class="top">
              <p>2020-10-08 12:04</p>
              <i>mingcheng</i>
              <img
                src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg"
                alt
              />
            </div>
            <div class="but">
              <p>万色让他发一个耳朵合同法如何腾飞</p>
            </div>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
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
      active: ""
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
    go(id) {
      if (id === 1) {
        this.active = "tab-container1";
      }
      if (id === 2) {
        this.active = "tab-container2";
      }
      if (id === 3) {
        this.active = "tab-container3";
      }
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
img {
  width: 100%;
}
.yi {
  h3 {
    font-size: 22px;
    font-weight: 900;
    margin: 10px 0 5px 20px;
  }
  p {
    font-size: 16px;
    margin: 0 0 0 20px;
  }
  i {
    margin: 0 180px 0 20px;
    font-size: 16px;
    color: rgb(250, 83, 6);
    b {
      font-size: 22px;
      font-weight: 900;
    }
  }
  .van-button {
    width: 110px;
    height: 35px;
  }
}
.er {
  width: 86%;
  margin: 0 auto;
  padding: 20px 0;
  h2 {
    font-size: 20px;
    font-weight: 900;
  }
  p {
    font-size: 14px;
    line-height: 25px;
    color: rgb(105, 103, 103);
  }
}
.san {
  width: 86%;
  margin: 0 auto;
  h2 {
    font-size: 20px;
    font-weight: 900;
  }
  .van-button {
    width: 60px;
    height: 40px;
    margin: 10px 10px 20px 0;
  }
  .mint-tab-container,
  .mint-tab-container-wrap,
  .mint-tab-container-item {
    min-height: 100px;
  }
  .ping {
    margin-bottom: 40px;
  }
  .top {
    display: flex;
    text-align: center;
    p {
      font-size: 14px;
    }
    i {
      font-size: 14px;
      margin-left: 100px;
      margin-right: 10px;
    }
    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }
  }
  .but {
    p {
      font-size: 16px;
    }
  }
}
</style>