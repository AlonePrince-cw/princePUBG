<template>
  <div style="margin: 40px">
    <el-table :data="tableData" border show-summary :summary-method="getSummaries" :span-method="arraySpanMethod">
      <el-table-column type="selection" width="55" fixed />
      <el-table-column prop="checked" label="关/开" fixed width="66">
        <template slot="header">
          <div class="header_name">
            <div class="left_name">关/开</div>
            <div class="right_icon_none"></div>
          </div>
        </template>
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.switchValue"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="adsXlName" fixed label="广告系列" width="150">
        <template slot="header">
          <div class="header_name">
            <div class="left_name">广告系列</div>
            <div class="right_icon"></div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="statusValue" label="投放状态" width="150">
        <template slot="header">
          <div class="header_name">
            <div class="left_name">投放状态</div>
            <div class="right_icon"></div>
          </div>
        </template>
        <template slot-scope="scope">
          <div class="left_icon_right_text">
            <!--adsStatus: 1 未投放 2 投放中 3 账户已停用 4 已关闭 -->
            <div
              :class="
                scope.row.statusValue == 2
                  ? 'icon_r_x ro_icon'
                  : scope.row.statusValue == 4
                  ? 'icon_r_x_o ro_icon'
                  : scope.row.statusValue == 1
                  ? 'icon_r_x_o_x ro_icon'
                  : ''
              "
            ></div>
            <div class="ro_text" style="margin-left: 8px">
              {{
                scope.row.statusValue == 1
                  ? '未投放'
                  : scope.row.statusValue == 2
                  ? '投放中'
                  : scope.row.statusValue == 3
                  ? '账户已停用'
                  : '已关闭'
              }}
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="budgetText" label="预算" width="150">
        <template slot="header">
          <div class="header_name">
            <div class="left_name">预算</div>
            <div class="right_icon_none"></div>
          </div>
        </template>
        <template slot-scope="scope">
          <div class="budget_box flex-column align-end">
            <div class="budget_box_top flex">
              <div class="budget__left">
                ${{ formatNumberWithCommas(scope.row.budgetText) }}
              </div>
              <div class="budget__right">[2]</div>
            </div>
            <div class="budget_box_bottom">
              <div class="budget_box_text">单日</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="effectivenessText" label="成效" width="150">
        <template slot="header">
          <div class="header_name">
            <div class="left_name">成效</div>
            <div class="right_icon"></div>
          </div>
        </template>
        <template slot-scope="scope">
          <div class="budget_box flex-column align-end">
            <div class="budget_box_top flex">
              <div class="budget__left">
                ${{ formatNumberWithCommas(scope.row.effectivenessText) }}
              </div>
              <div class="budget__right">[2]</div>
            </div>
            <div class="budget_box_bottom">
              <div class="budget_box_text">网站购物</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="exhibitText" label="展示次数" width="150">
        <template slot="header">
          <div class="header_name">
            <div class="left_name">展示次数</div>
            <div class="right_icon"></div>
          </div>
        </template>
        <template slot-scope="scope">
          <div class="budget_box flex-column align-end">
            <div class="budget_box_top flex">
              <div class="budget__left">
                {{ formatNumberWithCommas(scope.row.exhibitText) }}
              </div>
            </div>
            <div class="budget_box_bottom">
              <div class="budget_box_text"></div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="spendText" label="花费金额" width="150">
        <template slot="header">
          <div class="header_name">
            <div class="left_name">花费金额</div>
            <div class="right_icon"></div>
          </div>
        </template>
        <template slot-scope="scope">
          <div class="budget_box flex-column align-end">
            <div class="budget_box_top flex">
              <div class="budget__left">
                ${{ formatNumberWithCommas(scope.row.spendText) }}
              </div>
            </div>
            <div class="budget_box_bottom">
              <div class="budget_box_text"></div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="singleEffectivenessCostText"
        label="单次成效费用"
        width="150"
      >
        <template slot="header">
          <div class="header_name">
            <div class="left_name">单次成效费用</div>
            <div class="right_icon"></div>
          </div>
        </template>
        <template slot-scope="scope">
          <div class="budget_box flex-column align-end">
            <div class="budget_box_top flex">
              <div class="budget__left">
                {{
                  formatNumberWithCommas(scope.row.singleEffectivenessCostText)
                }}
              </div>
               <div class="budget__right">[2]</div>
            </div>
            <div class="budget_box_bottom">
              <div class="budget_box_text">单次购物</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="singleCompleteRegistrationCostText"
        label="单次完成注册费用"
        width="150"
      >
        <template slot="header">
          <div class="header_name">
            <div class="left_name">单次完成注册费用</div>
            <div class="right_icon"></div>
          </div>
        </template>
        <template slot-scope="scope">
          <div class="budget_box flex-column align-end">
            <div class="budget_box_top flex">
              <div class="budget__left">
                ${{
                  formatNumberWithCommas(scope.row.singleCompleteRegistrationCostText)
                }}
              </div>
               <div class="budget__right">[2]</div>
            </div>
            <div class="budget_box_bottom">
              <div class="budget_box_text"></div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="completeRegistrationText"
        label="完成注册数"
        width="150"
      >
        <template slot="header">
          <div class="header_name">
            <div class="left_name">完成注册数</div>
            <div class="right_icon"></div>
          </div>
        </template>
        <template slot-scope="scope">
          <div class="budget_box flex-column align-end">
            <div class="budget_box_top flex">
              <div class="budget__left">
                {{
                  formatNumberWithCommas(scope.row.completeRegistrationText)
                }}
              </div>
               <div class="budget__right">[2]</div>
            </div>
            <div class="budget_box_bottom">
              <div class="budget_box_text"></div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="clickText" label="点击量(全部)" width="150">
        <template slot="header">
          <div class="header_name">
            <div class="left_name">点击量(全部)</div>
            <div class="right_icon"></div>
          </div>
        </template>
        <template slot-scope="scope">
          <div class="budget_box flex-column align-end">
            <div class="budget_box_top flex">
              <div class="budget__left">
                {{
                  formatNumberWithCommas(scope.row.clickText)
                }}
              </div>
            </div>
            <div class="budget_box_bottom">
              <div class="budget_box_text"></div>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          checked: true,
          switchValue: true,
          adsXlName: '广告系列',
          statusValue: 1,
          budgetText: '12345',
          effectivenessText: '12',
          exhibitText: '145',
          spendText: '111',
          singleEffectivenessCostText: '1451',
          singleCompleteRegistrationCostText: '1451',
          completeRegistrationText: '1451',
          clickText: '1451',
        },
        {
          checked: true,
          switchValue: true,
          adsXlName: '广告系列',
          statusValue: 1,
          budgetText: '12345',
          effectivenessText: '12',
          exhibitText: '145',
          spendText: '111',
          singleEffectivenessCostText: '1451',
          singleCompleteRegistrationCostText: '1451',
          completeRegistrationText: '1451',
          clickText: '1451',
        },
        {
          checked: true,
          switchValue: true,
          adsXlName: '广告系列',
          statusValue: 1,
          budgetText: '12345',
          effectivenessText: '12',
          exhibitText: '145',
          spendText: '111',
          singleEffectivenessCostText: '1451',
          singleCompleteRegistrationCostText: '1451',
          completeRegistrationText: '1451',
          clickText: '1451',
        },
        {
          checked: true,
          switchValue: true,
          adsXlName: '广告系列',
          statusValue: 1,
          budgetText: '12345',
          effectivenessText: '12',
          exhibitText: '145',
          spendText: '111',
          singleEffectivenessCostText: '1451',
          singleCompleteRegistrationCostText: '1451',
          completeRegistrationText: '1451',
          clickText: '1451',
        },
        {
          checked: true,
          switchValue: true,
          adsXlName: '广告系列',
          statusValue: 1,
          budgetText: '12345',
          effectivenessText: '12',
          exhibitText: '145',
          spendText: '111',
          singleEffectivenessCostText: '1451',
          singleCompleteRegistrationCostText: '1451',
          completeRegistrationText: '1451',
          clickText: '1451',
        },
        {
          checked: true,
          switchValue: true,
          adsXlName: '广告系列',
          statusValue: 1,
          budgetText: '12345',
          effectivenessText: '12',
          exhibitText: '145',
          spendText: '111',
          singleEffectivenessCostText: '1451',
          singleCompleteRegistrationCostText: '1451',
          completeRegistrationText: '1451',
          clickText: '1451',
        },
      ],
    }
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(row, column, rowIndex, columnIndex)
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
    getSummaries(param){
      console.log(param)
       const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价22';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
    },
    formatNumberWithCommas(number) {
      // 将数字转换为字符串
      if (!number) return
      let numStr = number.toString()

      // 使用正则表达式和 replace 方法插入逗号
      return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
}
</script>

<style scoped lang="scss">
* {
  cursor: pointer;
}
.flex {
  display: flex;
}
.flex-align {
  display: flex;
  align-items: center;
}
.align-end {
  align-items: flex-end;
}
.flex-content {
  display: flex;
  justify-content: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.header_name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right_icon {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/dn_YRdbADMl.png);
    background-position: -43px -82px;
    background-size: auto;
    width: 12px;
    height: 12px;
    background-repeat: no-repeat;
    display: inline-block;
  }
  .left_name {
    font-weight: 700;
    font-size: 14px;
    color: rgb(28, 43, 51);
  }
}
::v-deep .el-table--enable-row-transition .el-table__body td.el-table__cell {
  padding: 0 !important;
}
.budget_box {
  .budget_box_bottom {
    margin-right: 14px;
    font-size: 12px;
    font-weight: 400;
    color: rgba(28, 43, 51, 0.65);
  }
  .budget__left {
    font-size: 14px;
    font-weight: 400;
    color: rgb(28, 43, 51);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
  .budget__right {
    font-size: 9px;
    margin-left: 4px;
    font-weight: 400;
    color: rgb(28, 30, 33);
    margin-top: -4px;
  }
  .budget_box_text{
    height: 23px;
  }
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
.left_icon_right_text {
  display: flex;
  align-items: center;
  .icon_r_x_o_x {
    background: rgba(0, 0, 0, 0.15);
  }
  .icon_r_x_o {
    background: rgb(162, 12, 23);
  }
  .icon_r_x {
    background: rgb(99, 190, 9);
  }
  .ro_text {
    font-size: 14px;
    font-weight: 400 !important;
    color: rgb(28, 43, 51) !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
  .ro_icon {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
}
</style>
