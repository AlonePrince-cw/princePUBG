<template>
  <div class="ads_content">
    <div class="ads_left_box">
      <div class="ads_left_box_top">
        <img class="img_box_logo" src="../../assets/3.png" />
        <img class="img_box" :src="left_img" />
      </div>
      <div class="ads_left_box_bottom">
        <div class="left_box_bottom">
          <div
            class="left_icon_bg"
            v-for="(item, index) in leftBoxIcon"
            :key="index"
            :class="[item.id === 2 ? 'icon_active' : '']"
          >
            <div
              class="left_icon"
              :style="{ backgroundPosition: item.backgroundPosition }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="ads_middle_box">
      <div class="middle_box_one">
        <div class="box_top_left">
          <div class="box_top_title">广告</div>
          <div class="box_top_select">
            <div class="select_box">Yuri-899-10181457-POP</div>
            <div class="select_box_icon"></div>
          </div>
        </div>
        <div class="box_top_right">
          <div class="box_top_btn1">
            <div class="box_top_btn1_text">更新时间：</div>
            <div class="box_top_btn1_text">刚刚</div>
          </div>
          <div class="box_top_btn2">
            <div class="box_top_btn2_text"></div>
          </div>
          <div class="box_top_btn3">放弃草稿</div>
          <div class="box_top_btn4">检查并发布</div>
          <div class="box_top_btn5">
            <div class="box_top_btn5_text"></div>
          </div>
        </div>
      </div>
      <div class="middle_box_two">
        <div class="middle_box_search">搜索和筛选</div>
        <div class="middle_box_date">
          <div class="middle_box_date_icon"></div>
          <div class="middle_box_date_text">2019年10月21日</div>
          <div class="middle_box_date_icon2"></div>
        </div>
      </div>

      <div class="middle_box_three">
        <div class="table_header">
          <div
            class="table_header_left table_header_box"
            @click="changeCurrentIndex(index)"
            v-for="(item, index) in middleBoxHeader"
            :key="index"
            :class="[currentIndex == index ? 'height_active' : 'mb_active']"
          >
            <div
              class="table_header_left_icon"
              :style="{
                backgroundPosition:
                  currentIndex == index
                    ? item.activeBGPosition
                    : item.BGPosition,
              }"
              :class="[currentIndex == index ? 'header_active' : '']"
            ></div>
            <div
              class="table_header_left_text"
              :style="{
                color: currentIndex == index ? 'rgb(20, 97, 204)' : '',
              }"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
        <div class="btn_box">
          <div class="top_buttom">
            <div class="top_buttom_1">
              <div class="icon_1"></div>
              <div class="btn_text">创建</div>
            </div>
            <div class="top_buttom_2">
              <div class="icon_2"></div>
              <div class="btn_text_hui">复制</div>
            </div>
            <div class="top_buttom_2">
              <div class="icon_3"></div>
              <div class="btn_text_hui">编辑</div>
            </div>
            <div class="line_box"></div>
            <div class="top_buttom_4">
              <div class="icon_4"></div>
              <div class="btn_text_hui_4">A/B 测试</div>
            </div>
            <div class="top_buttom_5">
              <div class="btn_text_hui_5">更多</div>
              <div class="icon_5"></div>
            </div>
          </div>
          <div class="top_buttom">
            <div class="div_1">
              <div class="div_icon_1"></div>
              <div class="div_text_1">列：表现</div>
              <div class="div_icon_r"></div>
            </div>
            <div class="div_1">
              <div class="div_icon_2"></div>
              <div class="div_text_1">细分条件</div>
              <div class="div_icon_r"></div>
            </div>
            <div class="div_1" style="width: 100px">
              <div class="div_icon_3"></div>
              <div class="div_text_1">报告</div>
              <div class="div_icon_r"></div>
            </div>
            <div class="div_1 div_1_report">
              <div class="div_icon_4"></div>
              <div class="div_text_1">导出</div>
              <!-- <div class="div_icon_r"></div> -->
            </div>
            <div class="div_1 div_1_box">
              <div class="div_icon_r"></div>
            </div>
          </div>
        </div>
        <!-- 内容表格 -->
        <div class="table_content">
          <div class="table_content_header">
            <div
              class="dynamic_table"
              v-for="(adsItem, adsIndex) in maxTableInfo"
              :key="adsIndex"
              :style="{ height: adsItem.customColumnHeight + 'px' }"
            >
              <div
                class="ads_column"
                v-for="(item, index) in adsItem.customTable"
                :key="index"
                :style="{
                  width: item.tabHeaderWidth + 'px',
                  height: adsIndex != 0 ? '46px' : '32px',
                }"
              >
                <!-- 重点逻辑 全是组件处理 -->
                <div
                  v-if="adsIndex == 0"
                  class="ads_column_text"
                  :style="{
                    textAlign: item.id <= 2 ? 'center' : '',
                  }"
                >
                  {{ item.text }}
                </div>
                <!-- 纯文本组件 -->
                <div
                  class="ads_center_text"
                  v-if="item.typeBox == 1 && adsIndex != 0"
                >
                  {{ item.text }}
                </div>
                <!-- 左图标右文本组件 -->
                <div
                  class="left_icon_right_text"
                  v-if="item.typeBox == 4 && adsIndex != 0"
                >
                  <div
                    class="ro_icon"
                    :class="
                      adsStatus == '投放中'
                        ? 'icon_r_x'
                        : adsStatus == '已关闭'
                        ? 'icon_r_x_o'
                        : adsStatus == '未投放'
                        ? 'icon_r_x_o_x'
                        : ''
                    "
                  ></div>
                  <div class="ro_text" style="margin-left: 8px">
                    {{ adsStatus }}
                  </div>
                </div>
                <!-- 金额组件或数字组件 -->
                <div class="t_b_c" v-if="item.typeBox == 5 && adsIndex != 0">
                  <div class="m_box">
                    <div
                      class="m_text"
                      :class="[item.isUnderline ? 'text_liner' : '']"
                    >
                      {{ item.isMoney ? '$' : ''
                      }}{{ formatNumberWithCommas(item.text) }}
                    </div>
                    <div class="m_top_b" v-if="item.isShowTop">[2]</div>
                  </div>
                  <div class="m_text_b" :class="[item.isShowTop ? 'mr14' : '']">
                    {{ item.des }}
                  </div>
                </div>
                <!-- 复选框组件 -->
                <div class="mkt-checkbox" v-if="item.typeBox == 2">
                  <div class="check-icon">
                    <input
                      type="checkbox"
                      name="check"
                      id="check"
                      v-model="ischecked"
                      @change="handleChange"
                    />
                    <label for="check" class="notice"></label>
                  </div>
                </div>

                <!-- 开关组件 -->
                <div
                  class="switch_box"
                  v-if="item.typeBox == 3 && adsIndex != 0"
                >
                  <input type="checkbox" class="switch" />
                </div>
                <div
                  class="ads_column_icon"
                  v-if="
                    item.id != 1 &&
                    item.id != 2 &&
                    item.id != 5 &&
                    adsIndex == 0
                  "
                ></div>
              </div>
            </div>
           <!-- 表格最后的逻辑 -->
          </div>
        </div>
      </div>
    </div>
    <div class="ads_right_box">
      <div
        class="ads_right_box_X"
        v-for="(item, index) in rightBoxIcon"
        :key="index"
      >
        <div
          class="ads_right_box_X_top"
          :style="{ backgroundPosition: item.backgroundPosition }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ischecked: false,
      adsStatus: '未投放',
      // typeBox 1 纯文本组件 2 复选框组件 3 开关组件 4 左图标右文本组件 5 全靠右上下组件 6 全靠右上带数字分割符组件 7 全靠右上上下组件
      maxTableInfo: [
        {
          customTable: [
            {
              id: 1,
              text: '',
              tabHeaderWidth: 20,
              typeBox: 2,
            },
            {
              id: 2,
              text: '关/开',
              tabHeaderWidth: 50,
            },
            {
              id: 3,
              text: '广告系列',
              tabHeaderWidth: 200,
            },
            {
              id: 4,
              text: '投放状态',
              tabHeaderWidth: 150,
            },
            {
              id: 5,
              text: '预算',
              tabHeaderWidth: 150,
            },
            {
              id: 6,
              text: '成效',
              tabHeaderWidth: 150,
            },
            {
              id: 7,
              text: '展示次数',
              tabHeaderWidth: 100,
            },
            {
              id: 8,
              text: '花费金额',
              tabHeaderWidth: 100,
            },
            { id: 9, text: '单次成效费用', tabHeaderWidth: 210 },
            {
              id: 10,
              text: '单次完成注册费用',
              tabHeaderWidth: 210,
            },
            { id: 11, text: '完成注册数', tabHeaderWidth: 100 },
            { id: 12, text: '点击量（全部）', tabHeaderWidth: 150 },
          ],
          customColumnHeight: 33,
        },
        {
          customTable: [
            {
              id: 1,
              text: '',
              tabHeaderWidth: 20,
              typeBox: 2,
            },
            {
              id: 2,
              text: '关/开',
              tabHeaderWidth: 50,
              typeBox: 3,
            },
            {
              id: 3,
              text: 'X003-FB-PWA-1',
              tabHeaderWidth: 200,
              typeBox: 1,
            },
            {
              id: 4,
              text: '投放状态',
              tabHeaderWidth: 150,
              typeBox: 4,
            },
            {
              id: 5,
              text: '5000',
              tabHeaderWidth: 150,
              typeBox: 5,
              des: '单日',
              isUnderline: false,
              isMoney: true,
              isShowTop: true,
            },
            {
              id: 6,
              text: '134',
              tabHeaderWidth: 150,
              typeBox: 5,
              des: '购物',
              isUnderline: true,
              isMoney: false,
              isShowTop: true,
            },
            {
              id: 7,
              text: '99801',
              tabHeaderWidth: 100,
              typeBox: 5,
              des: '',
              isUnderline: false,
              isMoney: false,
              isShowTop: false,
            },
            {
              id: 8,
              text: '9891.11',
              tabHeaderWidth: 100,
              typeBox: 5,
              des: '',
              isUnderline: false,
              isMoney: true,
              isShowTop: false,
            },
            {
              id: 9,
              text: '98981',
              tabHeaderWidth: 210,
              typeBox: 5,
              des: '单次购物',
              isUnderline: true,
              isMoney: true,
              isShowTop: false,
            },
            {
              id: 10,
              text: '98981',
              tabHeaderWidth: 210,
              typeBox: 5,
              des: '',
              isUnderline: true,
              isMoney: true,
              isShowTop: false,
            },
            {
              id: 11,
              text: '12',
              tabHeaderWidth: 100,
              typeBox: 5,
               des: '',
              isUnderline: true,
              isMoney: false,
              isShowTop: true,
            },
            { id: 12, text: '8882', tabHeaderWidth: 150, typeBox: 5,  des: '',
              isUnderline: false,
              isMoney: false,
              isShowTop: false, },
          ],
          customColumnHeight: 46,
        },
        {
          customTable: [
            {
              id: 1,
              text: '',
              tabHeaderWidth: 20,
              typeBox: 2,
            },
            {
              id: 2,
              text: '关/开',
              tabHeaderWidth: 50,
              typeBox: 3,
            },
            {
              id: 3,
              text: 'X003-FB-PWA-1',
              tabHeaderWidth: 200,
              typeBox: 1,
            },
            {
              id: 4,
              text: '投放状态',
              tabHeaderWidth: 150,
              typeBox: 4,
            },
            {
              id: 5,
              text: '5000',
              tabHeaderWidth: 150,
              typeBox: 5,
              des: '单日',
              isUnderline: false,
              isMoney: true,
              isShowTop: true,
            },
            {
              id: 6,
              text: '134',
              tabHeaderWidth: 150,
              typeBox: 5,
              des: '购物',
              isUnderline: true,
              isMoney: false,
              isShowTop: true,
            },
            {
              id: 7,
              text: '99801',
              tabHeaderWidth: 100,
              typeBox: 5,
              des: '',
              isUnderline: false,
              isMoney: false,
              isShowTop: false,
            },
            {
              id: 8,
              text: '9891.11',
              tabHeaderWidth: 100,
              typeBox: 5,
              des: '',
              isUnderline: false,
              isMoney: true,
              isShowTop: false,
            },
            {
              id: 9,
              text: '98981',
              tabHeaderWidth: 210,
              typeBox: 5,
              des: '单次购物',
              isUnderline: true,
              isMoney: true,
              isShowTop: false,
            },
            {
              id: 10,
              text: '98981',
              tabHeaderWidth: 210,
              typeBox: 5,
              des: '',
              isUnderline: true,
              isMoney: true,
              isShowTop: false,
            },
            {
              id: 11,
              text: '12',
              tabHeaderWidth: 100,
              typeBox: 5,
               des: '',
              isUnderline: true,
              isMoney: false,
              isShowTop: true,
            },
            { id: 12, text: '8882', tabHeaderWidth: 150, typeBox: 5,  des: '',
              isUnderline: false,
              isMoney: false,
              isShowTop: false, },
          ],
          customColumnHeight: 46,
        },
      ],

      leftBoxIcon: [
        {
          id: 1,
          backgroundPosition: '0px -208px',
        },
        {
          id: 2,
          backgroundPosition: '0px -558px',
        },
        {
          id: 3,
          backgroundPosition: '0px -933px',
        },
        {
          id: 4,
          backgroundPosition: '0px -758px',
        },
        {
          id: 5,
          backgroundPosition: '0px -508px',
        },
        {
          id: 6,
          backgroundPosition: '0px -108px',
        },
        {
          id: 7,
          backgroundPosition: '0px -1580px',
        },
      ],
      rightBoxIcon: [
        {
          id: 1,
          backgroundPosition: '0px -1955px',
        },
        {
          id: 2,
          backgroundPosition: '0px -2465px',
        },
        {
          id: 3,
          backgroundPosition: '0px -2176px',
        },
      ],
      currentIndex: 0,
      middleBoxHeader: [
        {
          id: 1,
          BGPosition: '0px -1265px',
          text: '广告系列',
          activeBGPosition: '0px -158px',
        },
        {
          id: 2,
          BGPosition: '0px -1244px',
          text: '广告组',
          activeBGPosition: '0px -60px',
        },
        {
          id: 3,
          BGPosition: '0px -1223px',
          text: '广告',
          activeBGPosition: '0px -33px',
        },
      ],
      left_img:
        'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.30497-1/83577589_556345944958992_2558068442594803712_n.png?stp=c81.0.275.275a_cp0_dst-png_s32x32&_nc_cat=1&ccb=1-7&_nc_sid=df5472&_nc_ohc=8fbJ9fn8OBkQ7kNvgGsaj4G&_nc_ht=scontent-hkg4-1.xx&_nc_gid=AuzAEYqNBg_wDFyES19W5l2&oh=00_AYBTqf-zaAkPVwQo71SUBHrt3taQJEdibnSyYRs-_VeOEA&oe=67313C66',
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    //复选框切换
    handleChange() {
      console.log('复选框切换')
    },
    // 切换当前表头索引
    changeCurrentIndex(index) {
      this.currentIndex = index
    },
    // 将数字转换为字符串
    formatNumberWithCommas(number) {
      if (!number) return
      let numStr = number.toString()

      // 使用正则表达式和 replace 方法插入逗号
      return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
}
</script>

<style lang="scss" scoped>
// 公用和全局样式
.icon_active {
  background: rgba(24, 119, 242, 0.1);
  border-radius: 6px;
}
.header_active {
  width: 24px !important;
  height: 24px !important;
}
.mb_active {
  margin-top: 9px !important;
}
.height_active {
  height: 49px !important;
}
.div_1_report {
  width: 80px !important;
  border-radius: 6px 0 0 6px !important;
}
.div_1_box {
  width: 40px !important;
  border-radius: 0 6px 6px 0 !important;
  margin-left: 4px !important;
}
.ads_center_text {
  font-size: 15px;
  font-weight: 400;
  color: rgb(28, 30, 33);
}
.left_icon_right_text {
  display: flex;
  align-items: center;
}
.ro_icon {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}
.ro_text {
  font-size: 15px;
  font-weight: 400 !important;
  color: rgb(28, 30, 33) !important;
}
.icon_r_x_o_x {
  background: rgba(0, 0, 0, 0.15);
}
.icon_r_x_o {
  background: rgb(162, 12, 23);
}
.icon_r_x {
  background: rgb(99, 190, 9);
}

.t_b_c {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  .m_text_b {
    font-size: 13px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    height: 16px;
  }
  .m_box {
    display: flex;
    .m_text {
      font-size: 15px;
      font-weight: 400;
      color: rgb(28, 30, 33);
    }

    .m_top_b {
      font-size: 9px;
      margin-left: 4px;
      font-weight: 400;
      color: rgb(28, 30, 33);
    }
  }
}
.text_liner {
  text-decoration: 1px dashed #333;
  text-decoration-line: underline;
}
.mr14 {
  margin-right: 14px;
}
.dynamic_table:hover {
  background: #e5e5e5 !important;
}
// 开关样式
.switch_box{
display: flex;
align-items: center;
}
/* Switch开关样式 */
/* 必须是input为 checkbox class 添加 switch 才能实现以下效果 */
input[type='checkbox'].switch {
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  width: 40px;
  height: 20px;
  background: #ccc;
  border-radius: 10px;
  transition: border-color 0.3s, background-color 0.3s;
}

input[type='checkbox'].switch::after {
  content: '';
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #1877f2;
  box-shadow: 0, 0, 2px, #999;
  transition: 0.4s;
  top: 2px;
  position: absolute;
  left: 2px;
}

input[type='checkbox'].switch:checked {
  background: #e7f1fe;
}
/* 当input[type=checkbox]被选中时：伪元素显示下面样式 位置发生变化 */
input[type='checkbox'].switch:checked::after {
  content: '';
  position: absolute;
  left: 55%;
  top: 2px;
}
// 复选框组件样式
.mkt-checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
  .check-icon {
    display: flex;
    align-items: center;
    input {
      display: none;
    }

    .notice {
      height: 20px;
      width: 20px;
      display: inline-block;
      background-image: url('https://si.geilicdn.com/img-3e190000017db7df903b0a207569-unadjust_24_24.png');
      background-repeat: no-repeat;
      background-size: 20px 20px;
    }

    input:checked + .notice {
      height: 20px;
      width: 20px;
      display: inline-block;
      background-image: url('https://si.geilicdn.com/img-680e0000017db893cf290a22d4b2-unadjust_24_24.png');
      background-repeat: no-repeat;
      background-size: 20px 20px;
    }
  }

  .is_checked {
    background-image: url('https://si.geilicdn.com/img-680e0000017db893cf290a22d4b2-unadjust_24_24.png');
  }
}
// -------------------------------------------------
.ads_content {
  width: 100%;
  height: 100%;
  background: rgb(245, 246, 247);
  display: flex;
}

.ads_left_box {
  width: 56px;
  height: 100%;
  background-color: rgb(255, 255, 255);
  .ads_left_box_top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 24px;
    .img_box_logo {
      height: 20px;
      width: 28px;
    }
    .img_box {
      height: 32px;
      width: 32px;
      border-radius: 6px;
      margin-top: 32px;
    }
  }
  .ads_left_box_bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .left_box_bottom {
      width: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 56px;
    }
    .left_icon_bg {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .left_icon {
      background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/AJDFiNiy8zx.png);
      background-size: auto;
      width: 24px;
      height: 24px;
      background-repeat: no-repeat;
      display: inline-block;
    }
  }
}
.ads_middle_box {
  padding: 16px;
  width: calc(100% - 132px);
  .middle_box_one {
    display: flex;
    justify-content: space-between;
    .box_top_left {
      display: flex;
      align-items: center;
      .box_top_title {
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 1px;
        margin-right: 16px;
      }
      .box_top_select {
        width: 300px;
        height: 36px;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 6px;
        box-shadow: none;
        color: rgba(0, 0, 0, 0.85);
        font-family: Roboto, Arial, sans-serif;
        display: flex;
        justify-content: space-between;
        padding: 0 16px;
        align-items: center;
        .select_box {
          width: 220px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: rgba(0, 0, 0, 0.85);
          font-size: 14px;
        }
        .select_box_icon {
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/wZHjRGmJ_xq.png);
          background-position-x: 0px;
          background-position-y: -1254px;
          background-repeat: no-repeat;
          background-size: auto;
          width: 16px;
          height: 16px;
          display: inline-block;
        }
      }
    }
    .box_top_right {
      display: flex;
      width: 416px;
      justify-content: space-between;
      .box_top_btn1 {
        display: flex;
        .box_top_btn1_text {
          height: 36px;
          font-size: 14px;
          font-weight: 400;
          line-height: 36px;
        }
      }
      .box_top_btn2 {
        height: 36px;
        width: 40px;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        .box_top_btn2_text {
          width: 16px;
          height: 16px;
          background: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/wZHjRGmJ_xq.png);
          background-position: 0px -438px;
          cursor: pointer;
        }
      }
      .box_top_btn3 {
        height: 36px;
        width: 88px;
        background-color: rgba(0, 0, 0, 0.05);
        line-height: 36px;
        border-radius: 6px;
        text-align: center;
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
      .box_top_btn4 {
        height: 36px;
        width: 102px;
        background-color: rgba(0, 0, 0, 0.05);
        line-height: 36px;
        border-radius: 6px;
        text-align: center;
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
      }
      .box_top_btn5 {
        height: 36px;
        width: 36px;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        text-align: center;
        color: #000;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        .box_top_btn5_text {
          width: 16px;
          height: 16px;
          background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/llvmClTohD1.png);
          background-position: -34px -239px;
        }
      }
    }
  }
  .middle_box_two {
    display: flex;
    margin-top: 24px;
    align-items: center;
    .middle_box_search {
      height: 36px;
      width: calc(100% - 180px);
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
      background: #fff;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 32px;
      font-size: 13px;
      color: rgba(28, 30, 33, 0.6);
    }
    .middle_box_date {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      height: 36px;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      margin-left: 8px;
      .middle_box_date_icon {
        width: 16px;
        height: 16px;
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/2qdc4_H3cyf.png);
        background-position: -51px -188px;
      }
      .middle_box_date_text {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.8);
        text-align: center;
        margin: 0 8px;
      }
      .middle_box_date_icon2 {
        width: 9px;
        height: 16px;
        background-image: url(/img/L-LpLWhHnK3.e6e68a80.png);
        background-position: 0px -427px;
        padding: 0 4px;
      }
    }
  }
  .middle_box_three {
    margin-top: 24px;
    .table_header {
      display: flex;
      .table_header_box {
        display: flex;
        width: 360px;
        height: 40px;
        background: #fff;
        margin-right: 8px;
        border-radius: 8px 8px 0 0;
        align-items: center;
        padding: 0 16px;
        .table_header_left_icon {
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/cnkAE7QiAAY.png);
          background-size: auto;
          width: 20px;
          height: 20px;
          background-repeat: no-repeat;
          display: inline-block;
          margin-right: 8px;
        }
        .table_header_left_text {
          font-weight: 700;
          letter-spacing: 0.5px;
        }
      }
    }
    .btn_box {
      height: 52px;
      background: #fff;
      display: flex;
      justify-content: space-between;
      padding-right: 8px;
    }
    .top_buttom {
      display: flex;
      align-items: center;

      .div_1 {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 128px;
        height: 36px;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        margin-left: 8px;
        .div_icon_4 {
          width: 16px;
          height: 16px;
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/jg3IY981y5G.png);
          background-position: -17px -186px;
        }
        .div_icon_3 {
          width: 16px;
          height: 16px;
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/eYmZdrwDEDA.png);
          background-position: -136px -221px;
        }
        .div_icon_2 {
          width: 16px;
          height: 16px;
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/VfbGYyBVjxk.png);
          background-position: 0px -1853px;
        }
        .div_icon_1 {
          width: 16px;
          height: 16px;
          background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/VfbGYyBVjxk.png);
          background-position: 0px -2193px;
        }
        .div_icon_r {
          width: 16px;
          height: 16px;
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/L-LpLWhHnK3.png);
          background-position: 0px -427px;
        }
        .div_text_1 {
          font-size: 14px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
          margin: 0 8px;
        }
      }
      .top_buttom_5 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
        height: 36px;
        width: 80px;
        .btn_text_hui_5 {
          font-size: 14px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
        }
        .icon_5 {
          width: 16px;
          height: 16px;
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/L-LpLWhHnK3.png);
          background-position: 0px -427px;
          margin-left: 8px;
        }
      }
      .line_box {
        width: 1px;
        height: 36px;
        background: rgba(0, 0, 0, 0.15);
        margin-left: 8px;
      }
      .top_buttom_4 {
        width: 108px;
        height: 36px;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
        .icon_4 {
          width: 16px;
          height: 16px;
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/llvmClTohD1.png);
          background-position: -34px -188px;
        }
        .btn_text_hui_4 {
          margin-left: 8px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.85);
        }
      }
      .top_buttom_2 {
        width: 80px;
        height: 36px;
        border-radius: 6px;
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 8px;

        .icon_2 {
          width: 16px;
          height: 16px;
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/llvmClTohD1.png);
          background-position: -51px -222px;
        }
        .icon_3 {
          width: 16px;
          height: 16px;
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/wZHjRGmJ_xq.png);
          background-position: 0px -1016px;
        }
        .btn_text_hui {
          font-size: 14px;
          font-weight: 400;
          height: 16px;
          color: rgba(0, 0, 0, 0.45);
          // line-height: 16px;
          margin-left: 8px;
        }
      }
      .top_buttom_1 {
        width: 80px;
        height: 36px;
        background-color: rgb(99, 190, 9);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 8px;
        .icon_1 {
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/VfbGYyBVjxk.png);
          background-position: 0px -2550px;
          background-size: auto;
          width: 16px;
          height: 16px;
          background-repeat: no-repeat;
          display: inline-block;
        }

        .btn_text {
          color: #fff;
          font-family: Roboto, Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-left: 8px;
        }
      }
    }
  }
}
.ads_right_box {
  background-color: rgb(97, 97, 98);
  box-shadow: rgba(0, 0, 0, 0.2) -2px 2px 4px -1px;
  color: rgb(28, 30, 33);
  width: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  .ads_right_box_X {
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    .ads_right_box_X_top {
      background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/cnkAE7QiAAY.png);
      background-size: auto;
      width: 16px;
      height: 16px;
      background-repeat: no-repeat;
      display: inline-block;
    }
  }
}

// 中间表格样式
.table_content {
  width: 100%;
  .table_content_header {
    background: #fff;
    color: rgb(28, 30, 33);
    font-family: Roboto, Arial, sans-serif;
    width: 100%;
    .select_box {
      // 固定宽高
      width: 50px;
      height: 32px;
    }
    .switch_text {
      width: 50px;
      height: 32px;
      line-height: 32px;
      font-weight: 700;
      font-size: 15px;
      color: rgb(28, 30, 33);
    }
    .dynamic_table {
      width: 100%;
      display: flex;
      .ads_column {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
        height: 32px;
        border-right: 1px solid rgb(211, 211, 211);
        border-top: 1px solid rgb(211, 211, 211);
        .ads_column_text {
          font-weight: 700;
          font-size: 15px;
          color: rgb(28, 30, 33);
        }
        .ads_column_icon {
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/dn_YRdbADMl.png);
          background-position: -43px -82px;
          background-size: auto;
          width: 12px;
          height: 12px;
          background-repeat: no-repeat;
          display: inline-block;
        }
      }
      .ads_column_content {
        display: flex;
      }
    }
  }
}
</style>
