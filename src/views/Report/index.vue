<template>
  <div class="centner">
    <div class="">
      <div class="input_box">
        <div class="left_box">
          <div class="shure"></div>
          <div class="left_zhanshi">有展示</div>
          <div class="left_sour">搜索和筛选</div>
        </div>
        <div class="right_box">
          <div class="time"></div>
          <div class="mate">2024年9月9日</div>
          <div class="bottom_sour"></div>
        </div>
      </div>
      <div class="table_box">
        <div class="top_table">
          <div class="top_table_left">
            <div class="left_one">数据透视表</div>
            <div class="left_two">组合细分条件</div>
          </div>
          <div class="top_table_left">
            <div class="right_one">重置列宽</div>
            <div class="right_two">格式</div>
            <div class="right_three">自定义</div>
          </div>
        </div>
        <div class="bottom_table">
          <div
            class="div_t_box"
            v-for="(item, index) in tableData"
            :key="index"
            :style="{ width: item.isCustomWidth + 'px' || '127px' }"
          >
            <div
              class="top_info_name"
              :style="{ width: item.isCustomWidth + 'px' || '127px' }"
            >
              <div class="left_img"></div>
              <div class="center_nama">{{ item.tableHeaderName }}</div>
              <div class="right_box">
                <div class="right_img"></div>
              </div>
            </div>
            <div
              class="top_info_number"
              :style="{ width: item.isCustomWidth - 24 + 'px' || '103px' }"
            >
              <div class="number_box">{{ item.tableHeaderValue }}</div>
            </div>
            <div
              class="top_info_bottom"
              :style="{ width: item.isCustomWidth + 'px' || '127px' }"
            >
              <div class="number">{{ item.tableHeaderValue }}</div>
              <div class="tongji">{{ item.tableHeaderBottom }}</div>
            </div>
          </div>
          <div class="div_t_box width_box">
            <div class="top_info_name width_box">
              <div class="center_nama"></div>
            </div>
            <div class="top_info_number width_box">
              <div class="number_box"></div>
            </div>
            <div class="top_info_bottom width_box">
              <div class="number"></div>
              <div class="tongji"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          tableHeaderName: '展示次数',
          tableHeaderValue: '986,214',
          tableHeaderBottom: '共计',
        },
        {
          tableHeaderName: '频次',
          tableHeaderValue: '1.11',
          tableHeaderBottom: '每个账户中心账户',
        },
        {
          tableHeaderName: '花费金额',
          tableHeaderValue: '$25.11',
          tableHeaderBottom: '总花费',
        },
        {
          tableHeaderName: '归因设置',
          tableHeaderValue: '点击后1天或互动观看后1天',
          tableHeaderBottom: '',
        },
        {
          tableHeaderName: '购物次数',
          tableHeaderValue: '45',
          tableHeaderBottom: '共计',
        },
        {
          tableHeaderName: '完成注册次数',
          tableHeaderValue: '66',
          tableHeaderBottom: '共计',
          isCustomWidth: 160,
        },
        {
          tableHeaderName: '点击量（全部）',
          tableHeaderValue: '66',
          tableHeaderBottom: '共计',
          isCustomWidth: 160,
        },
      ],
    }
  },

  methods: {},
}
</script>

<style scoped lang="scss">
.time {
  width: 16px;
  height: 16px;
  background-image: url(../../assets/llvmClTohD1.png);
  background-position: -1897px -1085px;
  background-size: auto;
}
.shure {
  background-image: url(../../assets/KrfIjiGCDvL.png);
  background-position: -204px -936px;
  background-size: auto;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  display: inline-block;
  margin-right: 8px;
}
.centner {
  height: 600px;
  background: #f2f2f2;
  padding-top: 48px;
  display: flex;
  justify-content: center;
  .table_box {
    margin-top: 16px;
    border-radius: 8px;
    width: 1880px;
    min-height: 200px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    background: #fff;
    .bottom_table {
      display: flex;
      .width_box {
        width: 100% !important;
        padding: 0 !important;
        border-right: none !important;
      }
      .div_t_box {
        width: 127px;
        .number_box {
          overflow: hidden; //超出的文本隐藏
          text-overflow: ellipsis; //溢出用省略号显示
          white-space: nowrap; //溢出不换行
        }
        .top_info_bottom {
          width: 127px;
          border-right: 1px solid rgb(218, 220, 222);
          height: 44px;

          .number {
            text-align: right;
            color: rgb(28, 30, 33);
            font-size: 14px;
            font-weight: 700;
            padding-right: 8px;
            padding-top: 4px;
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换行
            padding-left: 16px;
          }
          .tongji {
            font-size: 12px;
            font-weight: 400;
            text-align: right;
            padding-right: 8px;
            padding-top: 4px;
          }
        }
        .top_info_number {
          width: 103px;
          height: 36px;
          border: 1px solid rgb(218, 220, 222);
          border-left: none;
          border-top: none;
          color: rgba(0, 0, 0, 0.85);
          font-size: 14px;
          padding: 0 8px;
          text-align: left;
          line-height: 36px;
          padding-left: 16px;
        }
        .top_info_name {
          width: 127px;
          height: 38px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgb(218, 220, 222);
          border-left: none;
          .left_img {
            width: 12px;
            height: 18px;
            background-image: url('../../assets//dn1cgDr4Deq.png');
            background-position: 4px 0;
            background-repeat: no-repeat;
          }
          .center_nama {
            font-size: 14px;
            margin: 0 16px 0 2px;
          }

          .right_box {
            width: 24px;
            height: 24px;
            background: rgb(245, 246, 247);
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .right_img {
            background-image: url('../../assets/KrfIjiGCDvL.png');
            background-position: -39px -971px;
            background-size: auto;
            width: 12px;
            height: 12px;
            background-repeat: no-repeat;
            display: inline-block;
          }
        }
      }
    }
    .top_table {
      display: flex;
      justify-content: space-between;
      padding: 16px;

      .top_table_left {
        display: flex;
        .left_one,
        .right_two,
        .right_three {
          color: rgba(0, 0, 0, 0.85);
          font-size: 14px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          line-height: 34px;
          text-align: center;
          padding: 1px 16px;
          height: 34px;
          border-radius: 8px;
        }
        .right_two,
        .right_three {
          border: none;
          background: #f2f2f2;
        }
        .right_two {
          border-radius: 8px 0px 0px 8px;
          margin-left: 8px;
          font-weight: 400;
        }
        .right_three {
          border-radius: 0 8px 8px 0;
          margin-left: 4px;
          font-weight: 400;
        }
        .left_two,
        .right_one {
          background-color: #e5e5e5;
          font-size: 14px;
          height: 34px;
          padding: 1px 16px;
          border-radius: 8px;
          margin-left: 16px;
          text-align: center;
          line-height: 34px;
          color: rgba(0, 0, 0, 0.45);
        }
      }
    }
  }

  .input_box {
    width: 1816px;
    height: 44px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    background: #fff;
    border-radius: 8px;
    padding: 0 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right_box {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 162px;
      height: 36px;
      background: #f2f2f2;
      border-radius: 8px;

      .mate {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.8);
        text-align: center;
        line-height: 36px;
        margin: 0 8px;
      }
      .bottom_sour {
        width: 16px;
        height: 16px;
        background-image: url('../../assets/L-LpLWhHnK3.png');
        background-position: 0px -427px;
      }
    }
    .left_box {
      display: flex;
      align-items: center;
    }
    .left_sour {
      width: 280px;
      margin-left: 32px;
      font-size: 13px;
      color: rgba(28, 30, 33, 0.6);
    }
    .left_zhanshi {
      text-align: center;
      font-size: 14px;
      color: #000;
      background: #f2f2f2;
      width: 62px;
      height: 32px;
      line-height: 32px;
      border-radius: 0% 8px 8px 0%;
      letter-spacing: 1px;
    }
  }
}
</style>
