<template>
  <div class="_2ww0">
    <div class="left" style="">
      <div class="aa">
        <div class="im1">
          <img class="img_box_logo" src="../../assets/3.png" />
        </div>
        <div class="im2">
          <img class="img_box" src="../../assets/leftImg/a.png" />
        </div>
      </div>
      <div class="bb">
        <div
          style="
            height: 40px;
            width: 40px;
            padding-left: 8px;
            padding-right: 8px;
          "
        >
          <div class="b" v-for="(item, index) in leftIcon" :key="index">
            <img :src="item" style="height: 24px; width: 24px" />
          </div>
        </div>
      </div>
      <div class="cc">
        <div class="c">
          <img
            src="../../assets/leftImg/c1.png"
            style="height: 20px; width: 20px"
          />
        </div>
        <div class="c">
          <img
            src="../../assets/leftImg/c2.png"
            style="height: 20px; width: 20px"
          />
        </div>
        <div class="c">
          <img
            src="../../assets/leftImg/c3.png"
            style="height: 20px; width: 20px"
          />
        </div>
        <div class="c">
          <img
            src="../../assets/leftImg/c4.png"
            style="height: 20px; width: 20px"
          />
        </div>
        <div class="c">
          <img
            src="../../assets/leftImg/c5.png"
            style="height: 20px; width: 20px"
          />
        </div>
        <div class="c">
          <img
            src="../../assets/leftImg/c6.png"
            style="height: 20px; width: 20px"
          />
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="tapOne">
        <div class="topOne_a">
          <div class="topOne_a_1">广告系列</div>
          <div class="topOne_a_2">
            <div class="span_text">雨果-哈哈哈网络-10 (500987052617167)</div>
          </div>
        </div>
        <div class="topOne_b">
          <div class="topOne_b_1">
            <div class="topOne_b_1_1">更新时间：今天10:14</div>
            <div class="topOne_b_1_2">
              <img :src="refreshIcon" />


            </div>
          </div>
          <div class="topOne_b_2">
            <div class="topOne_b_2_1">放弃草稿</div>
            <div class="topOne_b_2_2">检查并发布</div>
          </div>
          <div class="topOne_b_3">...</div>
        </div>
      </div>

      <div class="tapTwo">
        <div class="tapTwo_a">
          <div class="search">
            <div class="null_box">
              <div>搜索和筛选</div>
            </div>
          </div>
          <div class="time">
            

          </div>
        </div>
        <div class="tapTwo_b">
          <div class="classify">分类1</div>
          <div class="classify">分类2</div>
          <div class="classify">分类3</div>
        </div>
        <div class="content">内容</div>
        test middle
      </div>
    </div>
    <div class="right">
      <div class="right_all">
        <img
          src="../../assets/leftImg/right1.png"
          style="height: 16px; width: 16px; background-size: auto"
        />
      </div>
      <div class="right_all">
        <img
          src="../../assets/leftImg/right2.png"
          style="height: 16px; width: 16px"
        />
      </div>
      <div class="right_all">
        <img
          src="../../assets/leftImg/right3.png"
          style="height: 16px; width: 16px"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftIcon: [
        require('../../assets/leftImg/b1.png'),
        require('../../assets/leftImg/b2.png'),
        require('../../assets/leftImg/b3.png'),
        require('../../assets/leftImg/b4.png'),
        require('../../assets/leftImg/b5.png'),
        require('../../assets/leftImg/b6.png'),
        require('../../assets/leftImg/b7.png'),
      ],
      refreshIcon:require('../../assets/leftImg/refresh.jpg'),
    }
  },
}
</script>

<style lang="scss" scoped>
._2ww0 {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}
.left {
  height: 919px;
  width: 56px;
  padding: 0 8px;
  background-color: rgba(255, 255, 255, 1);
}
.aa {
  height: 124px;
  width: 56px;
}
.im1 {
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}
.img_box_logo {
  height: 20px;
  width: 28px;
}
.im2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  .img_box {
    height: 32px;
    width: 32px;
    border-radius: 6px;
  }
}
.bb {
  margin-top: 24px;
  height: 534px;
  width: 56px;
}
.b {
  height: 24px;
  width: 24px;
  padding: 8px;
}
.cc {
  height: 229px;
  width: 40px;
  padding-right: 8px;
  padding-left: 8px;
  margin-top: 8px;
}
.c {
  height: 24px;
  width: 24px;
  padding: 8px;
}
.middle {
  padding: 16px;
  background: rgb(245, 246, 247);
  
  .null_box{
    background: #fff;
    height: 44px;
    font-size: 13px;
    padding: 0 16px;
    color: rgba(28, 43, 51, .65);
  }
}
.tapOne {
  height: 60px;
  //width: 1265px;
  display: flex;
  justify-content: space-between;
}
.topOne_a {
  height: 44px;
  width: 390px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.topOne_a_1 {
  height: 24px;
  width: 72px;
  font-size: 18px;
  font-weight: 700;
}
.topOne_a_2 {
  width: 300px;
  height: 36px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  box-shadow: none;
  color: rgba(0, 0, 0, 0.85);
  font-family: Roboto, Arial, sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .span_text {
    margin-left: 16px;
    font-size: 14px;
    width: 220px;
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行
    color: rgba(0, 0, 0, 0.85);
  }
}
.topOne_b {
  height: 44px;
  width: 445.73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topOne_b_1 {
  height: 36px;
  width: 183.73px;
  display: flex;
  justify-content: space-between;
}
.topOne_b_1_1 {
  height: 44px;
  font-size: 14px;
  font-weight: 400;
  line-height: 44px;
}
.topOne_b_1_2 {
  height: 36px;
  width: 40px;
  background-color:rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 16px;
    height: 18px;
  }
}
.topOne_b_2 {
  height: 36px;
  width: 198px;
  //   background: yellow;
  display: flex;
  justify-content: space-between;
}
.topOne_b_2_1 {
  height: 36px;
  width: 88px;
  background-color: rgba(0, 0, 0, 0.05);
  line-height: 36px;
  border-radius: 6px;
  text-align: center;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.topOne_b_2_2 {
  height: 36px;
  width: 102px;
  background-color: rgba(0, 0, 0, 0.05);
  line-height: 36px;
  border-radius: 6px;
  text-align: center;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
.topOne_b_3 {
  height: 36px;
  width: 36px;
  background-color: rgba(0, 0, 0, 0.05);
  line-height: 32px;
  border-radius: 6px;
  text-align: center;
  color: #000;
  font-size: 14px;
}
.right {
  height: 919px;
  width: 44px;
  //   background: aquamarine;
}
.right_all {
  height: 16px;
  width: 16px;
  padding: 10px;
  margin: 4px;
}
.tapTwo {
  height: calc(100% - 60px);
}
.tapTwo_a {
  height: 36px;
  display: flex;
  justify-content: space-between;
}
.tapTwo_b {
  height: 48px;
  display: flex;
  justify-content: space-between;
}
.classify {
  height: 44px;
  width: 596px;
  border-bottom: 1px;
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 4px;
}
.search {
  height: 44px;
  width: 100%;
  .null_box{
  border-radius: 12px;
    display: flex;
    align-items: center;
  }
}
.time {
  height: 36px;
  width: 139.17px;
  //   background: yellow;
}
</style>
