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
        <div class="attribution_text adsName_text">
          <el-input
            v-model="item.adsImgUrl"
            @change="adsImgUrlChange(index)"
            placeholder="广告头像"
          ></el-input>
        </div>
        <div class="attribution_text adsName_text">
          <el-input
            v-model="item.attributionText"
            @change="attributionChange(index)"
            placeholder="投放链接"
          ></el-input>
        </div>
      </div>

      <div class="xi_tong">
         <div class="adsName_text">
          <el-input v-model="BMIMG" placeholder="BM头像"></el-input>
        </div>
         <div class="attribution_text adsName_text">
          <el-input v-model="accountName" placeholder="账户名"></el-input>
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
        <el-button
          type="success"
          @click="saveData()"
          style="margin: 16px 0 16px 0"
          >保存数据</el-button
        >
      </div>
    </div>
    <div class="details_data">详细数据</div>
    <div class="table_data details_content">
      <div
        class="table_data_box"
        v-for="(treeItem, treeIndex) in treeData"
        :key="treeIndex"
      >
        <div class="stat_type">
          <el-select
            v-model="treeItem.adsType"
            @change="statusChange(treeIndex)"
            placeholder="请选择"
          >
            <el-option
              v-for="item in treeItem.adsStatus"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <div class="adsName_text">
          <el-input
            v-model="treeItem.label"
            @change="labelChange(treeIndex)"
            placeholder="广告名"
          ></el-input>
        </div>
        <div class="adsName_text">
          <el-button type="danger" @click="deleteTreeData(treeIndex)"
            >删除</el-button
          >
        </div>
      </div>
      <div class="flex_div">
        <div class="adsName_text adsName_text_120">
          <el-button type="primary" @click="addTreeData()">增加数据</el-button>
        </div>
        <div class="adsName_text adsName_text_120">
          <el-button type="primary" @click="saveTreeData()">保存数据</el-button>
        </div>
        <div class="adsName_text adsName_text_120">
          <el-button type="danger" @click="clearTreeData()">删除数据</el-button>
        </div>
      </div>
      <div class="details_data">广告数据</div>
      <div class="flex_div">
        <div class="adsName_text">
          <el-input
            v-model="dataset"
            @change="labelChange(treeIndex)"
            placeholder="就是像素名字"
          ></el-input>
        </div>
        <div class="adsName_text">
          <el-input
            v-model="conversionEvent"
            @change="labelChange(treeIndex)"
            placeholder="转化事件"
          ></el-input>
        </div>
        <div class="adsName_text">
          <el-input
            v-model="area"
            @change="labelChange(treeIndex)"
            placeholder="地区"
          ></el-input>
        </div>
        <div class="adsName_text">
          <el-input
            v-model="pageName"
            @change="labelChange(treeIndex)"
            placeholder="公共主页名称"
          ></el-input>
        </div>
        <div class="adsName_text">
          <el-input
            v-model="pageAvatarUrl"
            @change="labelChange(treeIndex)"
            placeholder="公共主页头像"
          ></el-input>
        </div>
        <div class="adsName_text">
          <el-input
            v-model="adPicturesUrl"
            @change="labelChange(treeIndex)"
            placeholder="广告位图片地址"
          ></el-input>
        </div>
         <div class="attribution_text adsName_text">
          <el-input v-model="attributionUrl" placeholder="预览链接"></el-input>
        </div>
        <div class="attribution_text adsName_text">
          <el-input v-model="videoUrl" placeholder="视频地址"></el-input>
        </div>
         <div class="attribution_text adsName_text">
          <el-input v-model="LinkWebsite" placeholder="链接官网"></el-input>
        </div>
         <div class="attribution_text adsName_text">
          <el-input v-model="LinkDetails" placeholder="链接详情"></el-input>
        </div>
         <div class="adsName_text adsName_text_120">
          <el-button type="primary" @click="saveDeadlyData()">保存数据</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 数据集 就是像素名字
      dataset: '',
      // 转化事件
      conversionEvent: '',
      // 地区
      area: '',
      // 公共主页名称
      pageName: '',
      // 公共主页头像
      pageAvatarUrl: '',
      // 广告位图片
      adPicturesUrl: '',
      // 链接官网
      LinkWebsite: '',
      // 链接详情
      LinkDetails: '',
      //BM头像
      BMIMG: '',
      treeData: [
        {
          id: 1,
          label: 'FB18-F01-022',
          adsType: '1',
          adsStatus: [
            {
              value: '1',
              label: '广告系列',
            },
            {
              value: '2',
              label: '广告组',
            },
            {
              value: '3',
              label: '广告',
            },
          ],
        },
        {
          id: 2,
          label: '广告组66',
          adsType: '2',
          adsStatus: [
            {
              value: '1',
              label: '广告系列',
            },
            {
              value: '2',
              label: '广告组',
            },
            {
              value: '3',
              label: '广告',
            },
          ],
        },
        {
          id: 3,
          label: '广告',
          adsType: '3',
          adsStatus: [
            {
              value: '1',
              label: '广告系列',
            },
            {
              value: '2',
              label: '广告组',
            },
            {
              value: '3',
              label: '广告',
            },
          ],
        },
      ],
      dataDate: '',
      showTableFlag: false,
      showMockDom: true,
      attributionUrl: '',
      videoUrl: '',
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
    deleteTreeData(index) {
      if (this.treeData.length === 1)
        return this.$message.error('至少保留一条数据')
      this.treeData.splice(index, 1)
    },
    addTreeData() {
      this.treeData.push({
        id: this.treeData[this.treeData.length - 1].id + 1,
        label: '',
        adsType: '1',
        adsStatus: [
          {
            value: '1',
            label: '广告系列',
          },
          {
            value: '2',
            label: '广告组',
          },
          {
            value: '3',
            label: '广告',
          },
        ],
      })
    },
    saveTreeData() {
      localStorage.setItem('treeData', JSON.stringify(this.treeData))
    },
    clearTreeData() {
      localStorage.removeItem('treeData')
    },
    saveDeadlyData() {
      localStorage.setItem('dataset', JSON.stringify(this.dataset));
      localStorage.setItem('conversionEvent', JSON.stringify(this.conversionEvent));
      localStorage.setItem('area', JSON.stringify(this.area));
      localStorage.setItem('pageName', JSON.stringify(this.pageName));
      localStorage.setItem('pageAvatarUrl', JSON.stringify(this.pageAvatarUrl));
      localStorage.setItem('adPicturesUrl', JSON.stringify(this.adPicturesUrl));
      localStorage.setItem('attributionUrl', JSON.stringify(this.attributionUrl));
      localStorage.setItem('videoUrl', JSON.stringify(this.videoUrl));
      localStorage.setItem('LinkWebsite', JSON.stringify(this.LinkWebsite));
      localStorage.setItem('LinkDetails', JSON.stringify(this.LinkDetails));
      this.$message.success('保存成功')
    },
  },
}
</script>
<style lang="scss" scoped>
.flex_div {
  display: flex;
  align-items: center;
}
.details_data {
  font-size: 24px;
  margin: 32px 0;
}
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
  .adsName_text_120 {
    width: 120px !important;
  }
  .details_content {
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
