
<template>
  <div class="index">
    <!-- 导航 -->
    <div>
      <ul>
        <li>热销榜</li>
        <li>单人特色套餐</li>
        <li>特色粥品</li>
        <li>精选热菜</li>
        <li>爽口凉菜</li>
        <li>半成品</li>
        <li>粥类</li>
        <li>面类</li>
      </ul>
    </div>
    <!-- 详细信息 -->
    <div class="right">
      <h3>单人特色套餐</h3>
      <div class="cont">
        <div>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2853028934,4108717030&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="ding">
          <h2>皮蛋瘦肉粥配包子套餐</h2>
          <i>畅销</i>
          <p>月售1111份 好评率100%</p>
          <span>
            ￥
            <b>24</b>
          </span>
          <div class="jia">
            <van-stepper
              v-model="value"
              theme="round"
              button-size="22"
              :show-minus="f"
              default-value
              min
              @click.native="xian"
              disable-input
            />
          </div>
        </div>
      </div>

      <h3>单人特色套餐</h3>
      <div class="cont">
        <div>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2853028934,4108717030&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="ding">
          <h2>皮蛋瘦肉粥配包子套餐</h2>
          <i>畅销</i>
          <p>月售1111份 好评率100%</p>
          <span>
            ￥
            <b>24</b>
          </span>
          <div class="jia">
            <van-stepper
              v-model="value"
              theme="round"
              button-size="22"
              :show-minus="f"
              default-value
              min
              @click.native="xian"
              disable-input
            />
          </div>
        </div>
      </div>

      <div class="cont">
        <div>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2853028934,4108717030&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="ding">
          <h2>皮蛋瘦肉粥配包子套餐</h2>
          <i>畅销</i>
          <p>月售1111份 好评率100%</p>
          <span>
            ￥
            <b>24</b>
          </span>
          <div class="jia">
            <van-stepper
              v-model="value"
              theme="round"
              button-size="22"
              :show-minus="f"
              default-value
              min
              @click.native="xian"
              disable-input
            />
          </div>
        </div>
      </div>

      <div class="cont">
        <div>
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2853028934,4108717030&fm=26&gp=0.jpg"
            alt
          />
        </div>
        <div class="ding">
          <h2>皮蛋瘦肉粥配包子套餐</h2>
          <i>畅销</i>
          <p>月售1111份 好评率100%</p>
          <span>
            ￥
            <b>24</b>
          </span>
          <div class="jia">
            <van-stepper
              v-model="value"
              theme="round"
              button-size="22"
              :show-minus="f"
              default-value
              min
              @click.native="xian"
              disable-input
            />
          </div>
        </div>
      </div>
      <div class="kong"></div>
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
      value: "",
      f: false
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
      this.f = true;
      if (this.value === 0) {
        this.f = false;
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
.index {
  display: flex;
}

li {
  font-size: 17px;
  display: block;
  width: 70px;
  text-align: center;
  margin: 30px 10px;
  &:hover {
    font-weight: 900;
  }
}
.right {
  padding-left: 10px;
  h3 {
    font-size: 15px;
    color: #777;
    line-height: 50px;
  }
}
.cont {
  display: flex;
  margin-bottom: 20px;
  img {
    width: 60px;
    height: 60px;
    margin-right: 10px;
  }
  h2 {
    font-size: 16px;
    font-weight: 900;
  }
  i,
  p {
    font-size: 12px;
    color: #aaa;
    line-height: 20px;
  }
  span {
    font-size: 12px;
    color: rgb(245, 60, 60);
    line-height: 20px;
    b {
      font-size: 18px;
      font-weight: 900;
    }
  }
}
.ding {
  position: relative;
}
.jia {
  position: absolute;
  right: -10px;
  bottom: 0;
}
.kong {
  height: 60px;
}
</style>