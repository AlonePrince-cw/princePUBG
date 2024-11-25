<template>
  <div class="div_t_box">
    <div class="centner" style="caret-color: transparent">
      <div class="">
        <div class="input_box">
          <div class="left_box">
            <div class="shure"></div>
            <div class="left_zhanshi">有展示</div>
            <div class="left_sour">搜索和筛选</div>
          </div>
          <div class="right_box">
            <div class="time"></div>
            <div class="mate">{{ yesterdayTime }}</div>
            <div class="bottom_sour"></div>
          </div>
        </div>
        <div class="table_box">
          <div class="top_table">
            <div class="top_table_left">
              <div class="left_one">
                <div class="data_left_img"></div>
                <div class="center_nama" style="margin: 0 8px">数据透视表</div>
                <div class="data_right_img"></div>
              </div>
              <div class="left_two">组合细分条件</div>
            </div>
            <div class="top_table_left">
              <div class="right_one">
                <div class="cleft_img"></div>
                <div class="center_text">重置列宽</div>
              </div>
              <div class="right_two" style="display: flex; align-items: center">
                <div class="cright_img" style="margin-right: 8px"></div>
                <div class="center_text">格式</div>
              </div>
              <div
                class="right_three"
                style="display: flex; align-items: center"
              >
                <div class="ccright_img" style="margin-right: 8px"></div>
                <div class="center_text">自定义</div>
              </div>
            </div>
          </div>
          <div class="bottom_table" v-if="showDiv">
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
                <div
                  class="center_nama"
                  :style="{
                    'margin-left':
                      item.tableHeaderName == '广告系列名称' ? '-22px' : '0',
                  }"
                  :class="{ active: item.tableHeaderName === '频次' }"
                >
                  {{ item.tableHeaderName }}
                </div>
                <div class="right_box">
                  <div class="right_img"></div>
                </div>
              </div>
              <div
                class="top_info_number"
                :style="{ width: item.isCustomWidth - 24 + 'px' || '103px' }"
              >
                <div
                  class="number_box"
                  :class="{
                    gouwucishu:
                      item.tableHeaderName === '购物次数' ||
                      item.tableHeaderName === '完成注册次数',
                  }"
                  :style="{
                    'margin-left':
                      item.tableHeaderName == '广告系列名称' ? '16px' : '0',
                    color:
                      item.tableHeaderName == '广告系列名称'
                        ? 'rgb(10, 120, 190)'
                        : '#000',
                    'text-decoration':
                      item.tableHeaderName == '广告系列名称'
                        ? 'underline'
                        : 'none',
                  }"
                >
                  {{
                    item.tableHeaderName == '广告系列名称'
                      ? adsXilieName
                      : item.tableHeaderValue == '0'
                      ? '—'
                      : item.tableHeaderValue
                  }}
                  <span
                    v-if="
                      item.tableHeaderName === '购物次数' ||
                      item.tableHeaderName === '完成注册次数'
                    "
                    style="font-size: 9px"
                    >{{ item.tableHeaderValue == 0 ? '' : '[2]' }}</span
                  >
                </div>
              </div>
              <div
                class="top_info_bottom"
                :style="{ width: item.isCustomWidth + 'px' || '127px' }"
              >
                <div
                  style="display: flex; justify-content: flex-end"
                  :style="{
                    'justify-content':
                      item.tableHeaderName == '广告系列名称'
                        ? 'flex-start'
                        : 'flex-end',
                  }"
                >
                  <div
                    style="padding: 4px 16px 4px 32px"
                    v-if="item.tableHeaderName == '广告系列名称'"
                  >
                    <div class="bottom_text">总成效</div>
                    <div class="bottom_xx">已显示1/1行</div>
                  </div>
                  <div
                    v-if="item.tableHeaderName != '广告系列名称'"
                    class="number"
                    :class="{
                      gouwucishu1:
                        item.tableHeaderName === '购物次数' ||
                        item.tableHeaderName === '完成注册次数',
                    }"
                  >
                    {{
                      item.tableHeaderValue == 0 ? '' : item.tableHeaderValue
                    }}
                  </div>
                  <div
                    v-if="
                      item.tableHeaderName === '购物次数' ||
                      item.tableHeaderName === '完成注册次数'
                    "
                    style="
                      font-size: 9px;
                      margin-left: 8px;
                      position: absolute;
                      font-weight: 700;
                      right: 4px;
                      bottom: 26px;
                    "
                  >
                    {{ item.tableHeaderValue == 0 ? '—' : '[2]' }}
                  </div>
                </div>
                <div
                  class="tongji"
                  :class="{
                    tongji1:
                      item.tableHeaderName === '购物次数' ||
                      item.tableHeaderName === '完成注册次数',
                  }"
                >
                  {{ item.tableHeaderBottom }}
                </div>
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
        <div class="table_box_mo"></div>
        <!-- <img src="../../assets/photo_2024-09-10_15-38-14.jpg" style="width: 150px;height: 150px;margin-top: 32px;" /> -->

        <div class="Vo_jehu">
          <div class="top_box">
            {{fujianTimes}}
          </div>
          <el-table
            :data="tableData2"
            style="width: 100%"
            border
            :default-sort="{ prop: 'date', order: 'descending' }"
          >
            <el-table-column
              prop="shishitongji"
              align="center"
              label="实时统计"
              width="120"
            >
              <template slot-scope="scope">
                <span style="color: rgb(10, 120, 190); font-size: 14px">{{
                  scope.row.shishitongji
                }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="quad"
              align="center"
              label="渠道"
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="fangwenrenshu"
              align="center"
              label="访问人数"
              sortable
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="zhucerenshu"
              align="center"
              label="注册人数"
              sortable
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="zhukov"
              align="center"
              label="注册率"
              sortable
              width="100"
            >
              <template slot-scope="scope">
                <span class=""
                  >{{ formatNumber(Number(scope.row.zhukov) * 100) }}%</span
                >
              </template>
            </el-table-column>
            <el-table-column
              prop="dengjirenshu"
              align="center"
              label="登录人数"
              sortable
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="shouchongrenshu"
              align="center"
              label="首充人数"
              sortable
              width="80"
            >
            </el-table-column>
            <el-table-column
              prop="zhucechongzhibi"
              align="center"
              label="注册充值比"
              sortable
              width="120"
            >
              <template slot-scope="scope">
                <span class=""
                  >{{
                    formatNumber(Number(scope.row.zhucechongzhibi) * 100)
                  }}%</span
                >
              </template>
            </el-table-column>
            <el-table-column
              prop="shouchongjine"
              align="center"
              label="首充金额"
              sortable
              width="100"
            >
              <template slot-scope="scope">
                <span class="">{{
                  formatNumber(scope.row.shouchongjine)
                }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="chongzhirenshu"
              align="center"
              label="充值人数"
              sortable
              width="80"
            >
            </el-table-column>
            <el-table-column
              prop="chongzhicishu"
              align="center"
              label="充值次数"
              sortable
              width="120"
            >
            </el-table-column>
            <el-table-column
              prop="chongzhijine"
              align="center"
              label="充值金额"
              sortable
              width="120"
            >
              <template slot-scope="scope">
                <span class="">{{ formatNumber(scope.row.chongzhijine) }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>

    <div
      class="revise_input"
      style="display: flex; margin-top: 60px; margin-left: 32px"
    >
      <el-button type="success" style="margin: 0 16px" @click="reloadTable()"
        >刷新随机改变表格</el-button
      >
      <el-input
        v-model="adsXilieName"
        @change="adsXilieNameChange"
        placeholder="请输入广告系列名称"
        style="width: 240px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="input1"
        @change="input1Change"
        placeholder="请输入金额"
        style="width: 240px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="input"
        @change="inputChange"
        placeholder="请输入展示次数"
        style="width: 240px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="input4"
        @change="input4Change"
        placeholder="请输入点击量"
        style="width: 240px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="input3"
        @change="input3Change"
        placeholder="请输入注册次数"
        style="width: 240px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="input2"
        @change="input2Change"
        placeholder="请输入购物次数"
        style="width: 240px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="input5"
        @change="input5Change"
        placeholder="请输入频次"
        style="width: 240px; margin-right: 24px"
      ></el-input>
    </div>
    <el-button type="success" style="margin: 0 16px" @click="reload()"
      >刷新页面</el-button
    >
     <el-input
        v-model="fujianTimes"
        placeholder="请输入时间区间"
        style="width: 300px; margin-right: 24px"
      ></el-input>
    <div class="revise_input revise_input_no"  v-for="(item, index) in tableData2" :key="index">
       <el-input
        v-model="item.quad"
        @change="quadChange"
        placeholder="请输入渠道"
        style="width: 100px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="item.fangwenrenshu"
        @change="fangedChange(index)"
        placeholder="请输入访问人数"
        style="width: 100px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="item.zhucerenshu"
        @change="zhucerenshuChange(index)"
        placeholder="请输入注册人数"
        style="width: 100px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="item.dengjirenshu"
        @change="dengjirenshuChange"
        placeholder="请输入登录人数"
        style="width: 100px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="item.shouchongjine"
        @change="shouchongjineChange(index)"
        placeholder="请输入首充人数"
        style="width: 100px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="item.shouchongjine"
        @change="shouchongjineChange"
        placeholder="请输入首充金额"
        style="width: 100px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="item.chongzhirenshu"
        @change="chongzhirenshuChange(index)"
        placeholder="请输入充值人数"
        style="width: 100px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="item.chongzhicishu"
        @change="chongzhicishuChange"
        placeholder="请输入充值次数"
        style="width: 100px; margin-right: 24px"
      ></el-input>
      <el-input
        v-model="item.chongzhijine"
        @change="chongzhijineChange"
        placeholder="请输入充值金额"
        style="width: 100px; margin-right: 24px"
      ></el-input>
    </div>
    <el-button type="success" style="margin: 0 16px" @click="addTable()"
      >增加一行</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      fujianTimes:'2024-11-24 03:00:00 - 2024-11-25 02:59:59 (GMT+0:00)',
      showDiv: true,
      input: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      oldTable: [],
      tableData2: [
        {
          shishitongji: '实时统计',
          quad: 'F10-FB-PWA-01【-3时区】',
          fangwenrenshu: '329',
          zhucerenshu: '243',
          zhukov: '0.85',
          dengjirenshu: '123',
          shouchongrenshu: '165',
          zhucechongzhibi: '0.85',
          shouchongjine: '233',
          chongzhirenshu: '123',
          chongzhicishu: '10',
          chongzhijine: '233',
        },
        {
          shishitongji: '实时统计',
          quad: 'F10-FB-PWA-01【-3时区】',
          fangwenrenshu: '329',
          zhucerenshu: '243',
          zhukov: '0.85',
          dengjirenshu: '123',
          shouchongrenshu: '165',
          zhucechongzhibi: '0.85',
          shouchongjine: '233',
          chongzhirenshu: '123',
          chongzhicishu: '10',
          chongzhijine: '233',
        },
        {
          shishitongji: '实时统计',
          quad: 'F10-FB-PWA-01【-3时区】',
          fangwenrenshu: '329',
          zhucerenshu: '243',
          zhukov: '0.85',
          dengjirenshu: '123',
          shouchongrenshu: '165',
          zhucechongzhibi: '0.85',
          shouchongjine: '233',
          chongzhirenshu: '123',
          chongzhicishu: '10',
          chongzhijine: '233',
        },
      ],
      tableData: [
        {
          tableHeaderName: '广告系列名称',
          tableHeaderValue: 'Y04-FB-PWA-1',
          tableHeaderBottom: '',
          isCustomWidth: 200,
        },
        //   {
        //   tableHeaderName: '账户编号',
        //   tableHeaderValue: this.formatNumberWithCommas(89496),
        //   tableHeaderBottom: '共计',
        // },
        {
          tableHeaderName: '展示次数',
          tableHeaderValue: this.formatNumberWithCommas(89496),
          tableHeaderBottom: '共计',
        },
        {
          tableHeaderName: '频次',
          tableHeaderValue: '1.31',
          tableHeaderBottom: '每个账户中心账户',
        },
        {
          tableHeaderName: '花费金额',
          tableHeaderValue: `$${this.formatNumberWithCommas(2561.78)}`,
          tableHeaderBottom: '总花费',
        },
        {
          tableHeaderName: '归因设置',
          tableHeaderValue: '点击后1天或互动观看后1天',
          tableHeaderBottom: '',
        },
        {
          tableHeaderName: '购物次数',
          tableHeaderValue: '167',
          tableHeaderBottom: '共计',
        },
        {
          tableHeaderName: '完成注册次数',
          tableHeaderValue: '242',
          tableHeaderBottom: '共计',
          isCustomWidth: 160,
        },
        {
          tableHeaderName: '点击量（全部）',
          tableHeaderValue: this.formatNumberWithCommas(847),
          tableHeaderBottom: '共计',
          isCustomWidth: 160,
        },
      ],
      yesterdayTime: '',
      adsXilieName: 'Y04-FB-PWA-1',
    }
  },
  mounted() {
    let day = new Date()
    day.setTime(day.getTime() - 24 * 60 * 60 * 1000)
    let s =
      day.getFullYear() +
      '年' +
      (day.getMonth() + 1) +
      '月' +
      day.getDate() +
      '日'
    this.yesterdayTime = s // 获取��天的日期
    this.oldTable = this.tableData.slice() // 备份原始数据
  },

  methods: {
    formatNumber(num) {
      // 确保是数字并转换成字符串
      let numStr = Number(num).toFixed(2) // 保证两位小数
      let parts = numStr.split('.') // 分割整数部分和小数部分

      // 整数部分添加千分位逗号
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')

      return parts.join('.') // 重新合并整数部分和小数部分
    },
    formatter(row, column) {
      console.log(row, column)
      return row.address
    },
    reload() {
      this.showDiv = false
      let timer = setTimeout(() => {
        this.showDiv = true
        clearTimeout(timer)
      }, 50)
    },
    // 随机打乱数组：可以使用 Fisher-Yates 洗牌算法。
    // 随机抛弃一个对象：可以通过生成一个随机布尔值来决定是否抛弃一个对象，如果决定抛弃，则从打乱后的数组中随机删除一个对象。
    processArray(array) {
      if (array.length < 5) {
        return array.slice() // 长度小于5时返回原数组的副本
      }

      let shuffledArray = this.shuffleArray(array) // 打乱数组（不改变原数组）

      // 50%概率决定是否抛弃一个对象
      // if (Math.random() < 0.5 && shuffledArray.length > 0) {
      //   shuffledArray.splice(
      //     Math.floor(Math.random() * shuffledArray.length),
      //     1
      //   )
      // }

      return shuffledArray
    },
    shuffleArray(array) {
      let shuffledArray = array.slice() // 复制数组
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ] // 交换元素
      }
      return shuffledArray
    },
    reloadTable() {
      if (this.tableData.length < 5) {
        this.tableData = this.oldTable.slice() // 重置为原始数据
      } else {
        this.tableData = this.processArray(this.tableData) // 重新打乱数组
      }
    },
    inputChange() {
      console.log(this.input)
      // 查找并更新 tableHeaderName 为 '展示次数' 的项
      this.tableData.forEach((item) => {
        if (item.tableHeaderName === '展示次数') {
          item.tableHeaderValue = this.formatNumberWithCommas(this.input)
        }
      })
    },
    input1Change() {
      console.log(this.input1)
      // 查找并更新 tableHeaderName 为 '花费金额' 的项
      this.tableData.forEach((item) => {
        if (item.tableHeaderName === '花费金额') {
          item.tableHeaderValue = '$' + this.formatNumberWithCommas(this.input1)
        }
      })
    },
    input2Change() {
      console.log(this.input2)
      this.tableData.forEach((item) => {
        if (item.tableHeaderName === '购物次数') {
          item.tableHeaderValue = this.formatNumberWithCommas(this.input2)
        }
      })
    },
    input3Change() {
      console.log(this.input3)
      this.tableData.forEach((item) => {
        if (item.tableHeaderName === '完成注册次数') {
          item.tableHeaderValue = this.formatNumberWithCommas(this.input3)
        }
      })
    },
    input4Change() {
      console.log(this.input4)
      this.tableData.forEach((item) => {
        if (item.tableHeaderName === '点击量（全部）') {
          item.tableHeaderValue = this.formatNumberWithCommas(this.input4)
        }
      })
    },
    adsXilieNameChange() {},
    input5Change() {
      console.log(this.input5)
      // 查找并更新 tableHeaderName 为 '频次' 的项
      this.tableData.forEach((item) => {
        if (item.tableHeaderName === '频次') {
          if (Number(this.input5) >= 2) {
            this.$message({
              type: 'error',
              message: '你填错了!',
            })
          } else {
            item.tableHeaderValue = this.input5
          }
        }
      })
    },
    formatNumberWithCommas(number) {
      // 将数字转换为字符串
      let numStr = number.toString()

      // 使用正则表达式和 replace 方法插入逗号
      return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },

    zhucerenshuChange (index) { 
      this.tableData2[index].zhukov = Number(this.tableData2[index].zhucerenshu) / Number(this.tableData2[index].fangwenrenshu) 
      this.$forceUpdate()
    },
    fangedChange (index) {
      this.tableData2[index].zhukov = Number(this.tableData2[index].zhucerenshu) / Number(this.tableData2[index].fangwenrenshu)
      this.$forceUpdate()
    },
    chongzhirenshuChange (index) { 
      this.tableData2[index].zhucechongzhibi = Number(this.tableData2[index].shouchongrenshu) / Number(this.tableData2[index].zhucerenshu)
      this.$forceUpdate()
    },
    shouchongjineChange (index) { 
      this.tableData2[index].zhucechongzhibi = Number(this.tableData2[index].shouchongrenshu) / Number(this.tableData2[index].zhucerenshu)

     }
  },
}
</script>

<style scoped lang="scss">
.revise_input {
  display: flex;
  margin-top: 60px;
  margin-left: 32px;
}
.revise_input_no{
margin-top: 16px;
}
.Vo_jehu {
  margin-top: 100px;
  background: #fff;
  width: 100%;
  min-height: 400px;
  padding-top: 8px;
  .top_box {
    background: rgba(225, 230, 236, 0.6);
    height: 38px;
    padding: 0 16px;
    font-size: 16px;
    font-weight: 400;
    line-height: 38px;
  }
}
.table_box_mo {
  position: absolute;
  top: 0px;
  right: 0;
  width: 100%;
  height: 300px;
  font-weight: 700;
  font-size: 15px;
  color: rgb(28, 30, 33);
}
.tongji1 {
  padding-right: 4px !important;
}
.div_t_box {
  font-family: Roboto, Arial, sans-serif;
}
.gouwucishu1 {
  margin-right: 5px;
}
.bottom_text {
  font-size: 14px;
  font-weight: 700;
}
.bottom_xx {
  color: rgba(28, 43, 51, 0.65);
  font-size: 12px;
  font-weight: 400;
}
// .gouwucishu1::after {
//   content: '......';
//   position: absolute;
//   bottom: -3px;
//   /* left: -86px; */
//   right: 14px;
//   text-align: center;
//   font-size: 12px; /* 根据需要调整字体大小 */
//   color: #000; /* 根据需要调整颜色 */
// }
// .gouwucishu::after {
//   content: '......';
//   position: absolute;
//   bottom: -5px;
//   left: -86px;
//   right: 0;
//   text-align: center;
//   font-size: 12px; /* 根据需要调整字体大小 */
//   color: #000; /* 根据需要调整颜色 */
// }
.active {
  margin: 0 32px 0 8px !important;
}
.ccright_img {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/KrfIjiGCDvL.png);
  background-position: -204px -954px;
  background-size: auto;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  display: inline-block;
}
.cright_img {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/KrfIjiGCDvL.png);
  background-position: -289px -937px;
  background-size: auto;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  display: inline-block;
}
.cleft_img {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/KrfIjiGCDvL.png);
  background-position: -244px -912px;
  background-size: auto;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  display: inline-block;
  margin-right: 8px;
}
.data_left_img {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/KrfIjiGCDvL.png);
  background-position: -255px -937px;
  background-size: auto;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  display: inline-block;
}
.data_right_img {
  width: 16px;
  height: 16px;
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/L-LpLWhHnK3.png);
  background-position: 0px -427px;
}
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
  height: 1000px;
  background: #f2f2f2;
  padding-top: 48px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  .table_box {
    margin-top: 16px;
    border-radius: 8px;
    width: 1538px;
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
          position: relative;
        }
        .top_info_bottom {
          width: 127px;
          border-right: 1px solid rgb(218, 220, 222);
          height: 44px;
          position: relative;

          .number {
            text-align: right;
            color: rgb(28, 30, 33);
            font-size: 14px;
            font-weight: 700;
            padding-right: 16px;
            padding-top: 4px;
            overflow: hidden; //超出的文本隐藏
            text-overflow: ellipsis; //溢出用省略号显示
            white-space: nowrap; //溢出不换行
            padding-left: 16px;
            position: relative;
            height: 20px;
          }
          .tongji {
            font-size: 12px;
            font-weight: 400;
            text-align: right;
            padding-right: 16px;
            padding-top: 4px;
            color: rgb(96, 103, 112);
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
          justify-content: space-around;
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
            font-weight: 700;
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
        .left_one {
          display: flex;
          align-items: center;
        }
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
        .right_one {
          display: flex;
          align-items: center;
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
    height: 44px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    background: #fff;
    border-radius: 8px;
    padding: 0 18px;
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
