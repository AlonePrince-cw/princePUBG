<template>
  <div class="mock_data">
    <div class="table_data">
      <div
        class="table_data_box"
        v-for="(item, index) in mockData"
        :key="index"
      >
        <el-switch
          class="switch_box_c"
          v-model="item.switchValue"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
        <div class="adsName_text">
          <el-input
            v-model="item.adsXlName"
            @change="xlChange(index)"
            placeholder="广告系列名"
          ></el-input>
        </div>
        <div class="stat_type">
          <el-select
            v-model="item.statusValue"
            @change="statusChange(index)"
            placeholder="请选择"
          >
            <el-option
              v-for="item in item.deliveryStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="budget_text adsName_text">
          <el-input
            v-model="item.budgetText"
            @change="budgetChange(index)"
            placeholder="预算"
          ></el-input>
        </div>
        <div class="effectiveness_text adsName_text">
          <el-input
            @change="effectivenessChange(index)"
            v-model="item.effectivenessText"
            placeholder="成效"
          ></el-input>
        </div>
        <div class="exhibit_text adsName_text">
          <el-input
            v-model="item.exhibitText"
            @change="exhibitChange(index)"
            placeholder="展示"
          ></el-input>
        </div>
        <div class="spend_text adsName_text">
          <el-input
            v-model="item.spendText"
            @change="spendChange(index)"
            placeholder="花费金额"
          ></el-input>
        </div>
        <div class="register_text adsName_text">
          <el-input
            v-model="item.registerText"
            @change="registerChange(index)"
            placeholder="完成注册数"
          ></el-input>
        </div>
        <div class="click_text adsName_text">
          <el-input
            v-model="item.clickText"
            @change="clickChange(index)"
            placeholder="点击"
          ></el-input>
        </div>
        <div class="attribution_text adsName_text" v-if="currentIndex == 2">
          <el-input
            v-model="item.adsImgUrl"
            @change="adsImgUrlChange(index)"
            placeholder="广告头像"
          ></el-input>
        </div>
        <div class="attribution_text adsName_text" v-if="currentIndex == 2">
          <el-input
            v-model="item.attributionText"
            @change="attributionChange(index)"
            placeholder="投放链接"
          ></el-input>
        </div>
      </div>

      <div class="xi_tong">
        <div class="attribution_text adsName_text">
          <el-input v-model="accountName" placeholder="账户名"></el-input>
        </div>
        <div class="attribution_text adsName_text">
          <el-input v-model="attributionUrl" placeholder="预览链接"></el-input>
        </div>
        <div class="attribution_text adsName_text">
          <el-input v-model="videoUrl" placeholder="视频地址"></el-input>
        </div>
        <div class="data_date_text adsName_text">
          <el-date-picker
            v-model="dataDate"
            type="date"
            placeholder="选择日期"
            value-format="yyyy年MM月dd日"
            @change="dateChange($event)"
          >
          </el-date-picker>
        </div>
      </div>

           <div class="xi_tong">
            <el-button type="success" @click="saveData()" style="margin: 16px 0 16px 0"
          >保存数据</el-button
        >
          </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataDate: '',
      showTableFlag: false,
      showMockDom: true,
      mockData: [
        {
          switchValue: true,
          registerText: '',
          clickText: '',
          attributionText: '',
          adsXlName: 'X003-FB-PWA-1',
          statusValue: '',
          budgetText: '',
          exhibitText: '',
          spendText: '',
          effectivenessText: '',
          deliveryStatus: [
            {
              value: '1',
              label: '未投放',
            },
            {
              value: '2',
              label: '投放中',
            },
            {
              value: '3',
              label: '账户已停用',
            },
            {
              value: '4',
              label: '已关闭',
            },
            {
              value: '5',
              label: '北京烤鸭',
            },
          ],
        },
        {
          switchValue: true,
          registerText: '',
          clickText: '',
          attributionText: '',
          adsXlName: 'X003-FB-PWA-1',
          statusValue: '',
          budgetText: '',
          exhibitText: '',
          adsImgUrl: '',
          spendText: '',
          effectivenessText: '',
          deliveryStatus: [
            {
              value: '1',
              label: '未投放',
            },
            {
              value: '2',
              label: '投放中',
            },
            {
              value: '3',
              label: '账户已停用',
            },
            {
              value: '4',
              label: '已关闭',
            },
            {
              value: '5',
              label: '北京烤鸭',
            },
          ],
        },
      ],
      accountName: 'Yuri-899-10181457-POP',
    }
  },
  methods: {
    saveData() {
      localStorage.setItem('mockData', JSON.stringify(this.mockData))
    },
  },
}
</script>
<style lang="scss" scoped>

.xi_tong {
  display: flex;
  align-items: center;
}
.mock_data {
  padding: 36px;
  .adsName_text {
    width: 150px;
    height: 40px;
    margin-left: 16px;
  }
  .table_data {
    .table_data_box {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      .switch_box_c {
        width: 50px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .stat_type {
        margin-left: 16px;
        width: 140px;
        height: 40px;
      }
    }
  }
}
</style>
