
<template>
  <div class="index">
    <div class="fen">
      <div class="left">
        <h1>3.9</h1>
        <p>综合评分</p>
      </div>
      <div class="right">
        <i>服务态度</i>
        <van-rate v-model="value" :size="16" color="#ffd21e" void-icon="star" void-color="#eee" />
        <br />
        <i>服务态度</i>
        <van-rate v-model="value1" :size="16" color="#ffd21e" void-icon="star" void-color="#eee" />
        <br />
        <i>
          送达时间
          <b>44分钟</b>
        </i>
      </div>
    </div>
    <mt-button type="danger" @click.native="go(1)">全部</mt-button>
    <mt-button type="primary" @click.native="go(2)">满意</mt-button>
    <mt-button type="default" @click.native="go(3)">不满意</mt-button>

    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab-container1" style="display: block">
        <div class="tu">
          <img src="https://seopic.699pic.com/photo/50086/2215.jpg_wh1200.jpg" alt />
          <div>
            <h3>用户</h3>
            <van-rate
              v-model="value3"
              :size="12"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <p>突出法语课如今房价与UK概括为粗打工苦瓜色多人参加GV传统据公一个库ry</p>
          </div>
        </div>

        <div class="tu">
          <img src="https://seopic.699pic.com/photo/50086/2215.jpg_wh1200.jpg" alt />
          <div>
            <h3>用户</h3>
            <van-rate
              v-model="value3"
              :size="12"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <p>突出法语课如今房价与UK概括为粗打工苦瓜色多人参加GV传统据公一个库ry</p>
          </div>
        </div>

        <div class="tu">
          <img src="https://seopic.699pic.com/photo/50086/2215.jpg_wh1200.jpg" alt />
          <div>
            <h3>用户</h3>
            <van-rate
              v-model="value3"
              :size="12"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <p>突出法语课如今房价与UK概括为粗打工苦瓜色多人参加GV传统据公一个库ry</p>
          </div>
        </div>

        <div class="tu">
          <img src="https://seopic.699pic.com/photo/50086/2215.jpg_wh1200.jpg" alt />
          <div>
            <h3>用户</h3>
            <van-rate
              v-model="value3"
              :size="12"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <p>突出法语课如今房价与UK概括为粗打工苦瓜色多人参加GV传统据公一个库ry</p>
          </div>
        </div>
        <div class="kong"></div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container2" style="display: block">
        <div class="tu">
          <img src="https://seopic.699pic.com/photo/50086/2215.jpg_wh1200.jpg" alt />
          <div>
            <h3>用户</h3>
            <van-rate
              v-model="value3"
              :size="12"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <p>突出法语课如今房价与UK概括为粗打工苦瓜色多人参加GV传统据公一个库ry</p>
          </div>
        </div>

        <div class="tu">
          <img src="https://seopic.699pic.com/photo/50086/2215.jpg_wh1200.jpg" alt />
          <div>
            <h3>用户</h3>
            <van-rate
              v-model="value3"
              :size="12"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <p>突出法语课如今房价与UK概括为粗打工苦瓜色多人参加GV传统据公一个库ry</p>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab-container3" style="display: block">
        <div class="tu">
          <img src="https://seopic.699pic.com/photo/50086/2215.jpg_wh1200.jpg" alt />
          <div>
            <h3>用户</h3>
            <van-rate
              v-model="value3"
              :size="12"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
            <p>突出法语课如今房价与UK概括为粗打工苦瓜色多人参加GV传统据公一个库ry</p>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
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
      value: 2,
      value1: 3,
      value3: 5,
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
.fen {
  display: flex;
  width: 100%;
  height: 100px;
  .left {
    width: 40%;
    height: 100%;
    text-align: center;
    h1 {
      font-size: 35px;
      color: rgb(223, 118, 48);
      line-height: 50px;
    }
    p {
      font-size: 14px;
      font-weight: 900;
    }
  }
  .right {
    font-size: 16px;
    font-weight: 900;
    i {
      margin-right: 10px;
      line-height: 30px;
      b {
        font-size: 14px;
        color: #888;
        margin-left: 8px;
      }
    }
  }
}
.mint-button {
  width: 70px;
  height: 30px;
  margin: 10px 0px 20px 20px;
  font-size: 14px;
}
.mint-tab-container,
.mint-tab-container-wrap,
.mint-tab-container-item {
  min-height: 100px;
}
.tu {
  display: flex;
  margin-bottom: 20px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;
    margin-right: 10px;
  }
  div {
    h3 {
      font-weight: 900;
      margin-bottom: 5px;
    }
    p {
      font-size: 14px;
      width: 280px;
      margin-top: 5px;
      line-height: 20px;
    }
  }
}
.kong {
  height: 50px;
}
</style>