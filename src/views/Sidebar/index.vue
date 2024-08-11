<template>
    <div class="_2ww0">
      <div class="left" style="">
        <div class="aa">
          <div class="im1" >
            <img src="../../assets/leftImg/2.png">
          </div>
          <div class="im2">
            <img src="../../assets/leftImg/a.png">
          </div>
        </div>
        <div class="bb">
          <div style="height: 40px; width: 40px; padding-left: 8px; padding-right: 8px">
            <div class="b"><img src="../../assets/leftImg/b1.png" style="height: 24px;width: 24px"></div>
          </div>
          <div style="height: 40px; width: 40px; padding-left: 8px; padding-right: 8px">
            <div class="b"><img src="../../assets/leftImg/b2.png" style="height: 24px;width: 24px"></div>
          </div>
          <div style="height: 40px; width: 40px; padding-left: 8px; padding-right: 8px">
            <div class="b"><img src="../../assets/leftImg/b3.png" style="height: 24px;width: 24px"></div>
          </div>
          <div style="height: 40px; width: 40px; padding-left: 8px; padding-right: 8px">
            <div class="b"><img src="../../assets/leftImg/b4.png" style="height: 24px;width: 24px"></div>
          </div>
          <div style="height: 40px; width: 40px; padding-left: 8px; padding-right: 8px">
            <div class="b"><img src="../../assets/leftImg/b5.png" style="height: 24px;width: 24px"></div>
          </div>
          <div style="height: 40px; width: 40px; padding-left: 8px; padding-right: 8px">
            <div class="b"><img src="../../assets/leftImg/b6.png" style="height: 24px;width: 24px"></div>
          </div>
          <div style="height: 40px; width: 40px; padding-left: 8px; padding-right: 8px">
            <div class="b"><img src="../../assets/leftImg/b7.png" style="height: 24px;width: 24px"></div>
          </div>


        </div>
        <div class="cc">
          <div class="c" ><img src="../../assets/leftImg/c1.png" style="height: 20px;width: 20px"></div>
          <div class="c" ><img src="../../assets/leftImg/c2.png" style="height: 20px;width: 20px"></div>
          <div class="c" ><img src="../../assets/leftImg/c3.png" style="height: 20px;width: 20px"></div>
          <div class="c" ><img src="../../assets/leftImg/c4.png" style="height: 20px;width: 20px"></div>
          <div class="c" ><img src="../../assets/leftImg/c5.png" style="height: 20px;width: 20px"></div>
          <div class="c" ><img src="../../assets/leftImg/c6.png" style="height: 20px;width: 20px"></div>
        </div>
      </div>
      <div class="middle">
        <div class="tapOne">
          <div class="topOne_a" >
            <div class="topOne_a_1">
                广告
            </div>
            <div class="topOne_a_2">
              搜索
            </div>

          </div>
          <div class="topOne_b" >
            <div class="topOne_b_1">
              <div class="topOne_b_1_1" >
                更新时间
              </div>
              <div class="topOne_b_1_2" >
                刷新
              </div>

            </div>
            <div class="topOne_b_2">
              <div class="topOne_b_2_1">
                放弃草稿
              </div>
              <div class="topOne_b_2_2">
                检查并发布
              </div>
            </div>
            <div class="topOne_b_3">
              设置
            </div>

          </div>
        </div>

        <div class="tapTwo">
          <div class="tapTwo_a">
            <div class="search">
              搜索
            </div>
            <div class="time">
              时间
            </div>
          </div>
          <div class="tapTwo_b">
            <div class="classify" style="background: yellow">
              分类1
            </div>
            <div class="classify" style="background: white">
              分类2
            </div>
            <div class="classify" style="background: pink">
              分类3
            </div>
          </div>
          <div class="content">
            内容
          </div>
          test middle
        </div>

      </div>
      <div class="right">
        <div class="right_all">
          <img src="../../assets/leftImg/right1.png" style="height: 16px; width: 16px; background-size: auto">
        </div>
        <div class="right_all">
          <img src="../../assets/leftImg/right2.png" style="height: 16px; width: 16px">
        </div>
        <div class="right_all">
          <img src="../../assets/leftImg/right3.png" style="height: 16px; width: 16px">
        </div>
      </div>
    </div>
</template>

<script>

    export default {

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

}
.aa {
  height: 124px;
  width: 56px;

}
.im1 {
  height: 44px;
  width: 40px;
}
.im2 {
  height: 60px;
  width: 56px;
}
.bb {
  height: 534px;
  width: 56px;
}
.b {
  height: 24PX;
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
  height: 919px;
  width: calc(100% - 100px);
  background: aqua;

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
  margin-top: 8px;
  margin-left: 4px;
  margin-right: 4px;
  background: beige;
  display: flex;
  justify-content: space-between;
}
.topOne_a_1 {
  height: 24px;
  width: 72px;
}
.topOne_a_2 {
  width: 298px;
  height: 34px;
  border: 1px;
}
.topOne_b {
  height: 44px;
  width: 445.73px;
  display: flex;
  justify-content: space-between;
}
.topOne_b_1 {
  height: 36px;
  width: 183.73px;
  background: pink;
  display: flex;
  justify-content: space-between;
}
.topOne_b_1_1 {
  height: 17px;
  width: 127.73px;
}
.topOne_b_1_2 {
  height: 36px;
  width: 40px;
}
.topOne_b_2 {
  height: 36px;
  width: 198px;
  background: yellow;
  display: flex;
  justify-content: space-between;
}
.topOne_b_2_1 {
  height: 36px;
  width: 88px;
}
.topOne_b_2_2 {
  height: 36px;
  width: 102px;
}
.topOne_b_3 {
  height: 40px;
  width: 36px;
  background: white;
}
.right {
  height: 919px;
  width: 44px;
  background: aquamarine;

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
  padding: 8px;
  margin-right: 8px;
  margin-left: 8px;
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
  height: 36px;
  width: 1105.83px;
  background: blue;

}
.time {
  height: 36px;
  width: 139.17px;
  background: yellow;

}
</style>