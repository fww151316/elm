
<template>
  <div class="index">
    <div class="yi">
      <div>
        <h3>粥品香坊（大运村）</h3>
        <van-rate v-model="value" :size="16" color="#ffd21e" void-icon="star" void-color="#eee" />
        <i>月售690单</i>
      </div>
      <div class="xin">
        <van-rate v-model="value" :size="25" :count="1" icon="like" void-icon="like-o" />
        <p>已收藏</p>
      </div>
    </div>

    <div class="er">
      <div>
        <p>起送价</p>
        <i>
          <b>20</b>元
        </i>
      </div>
      <div>
        <p>商家配送</p>
        <i>
          <b>4</b>元
        </i>
      </div>
      <div>
        <p>平均配送时间</p>
        <i>
          <b>39</b>分钟
        </i>
      </div>
    </div>

    <div class="san">
      <h3>公告与活动</h3>
      <p>
        粥品香坊其烹饪粥料的秘方源于中国千年古法,在融和现代
        制作工艺,由世界烹饪大师屈浩先生领衔研发。坚守纯天
        然、0添加的良心品质深的消费者青睐,发展至今成为粥类
        引领品牌。是2008年奥运会和2013年园博会指定餐饮服务
        商。
      </p>
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
      value: 4
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
.yi {
  display: flex;
  div {
    margin-left: 20px;
    h3 {
      font-size: 18px;
      font-weight: 900;
    }
    .van-rate {
      margin-left: 0px;
      margin-top: 5px;
    }
    i {
      margin-left: 10px;
      font-size: 14px;
      color: #999;
    }
  }
  .xin {
    margin-left: 110px;
    p {
      margin-left: -5px;
    }
  }
}
.er {
  display: flex;
  justify-content: space-around;
  div {
    width: 25%;
    height: 80px;
    margin-top: 10px;
    text-align: center;
  }
  p {
    font-size: 14px;
    margin-top: 15px;
  }
  i {
    line-height: 40px;
    b {
      font-size: 30px;
    }
  }
}
.san{
  width: 85%;
  margin: 0 auto;
  margin-top: 10px;
  h3{
    font-size: 18px;
    font-weight: 900;
    line-height: 30px;
  }
  p{
    margin-left: 5px;
    color: coral;
    font-size: 14px;
    line-height: 25px;
  }
}
</style>