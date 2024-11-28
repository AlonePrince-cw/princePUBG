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
              <div class="btn_text_hui btn_text_black">复制</div>
            </div>
            <div class="top_buttom_2" @click="handleEdit">
              <div class="icon_3" v-if="!editLoading"></div>
              <div class="btn_text_hui btn_text_black" v-if="!editLoading">
                编辑
              </div>
              <div class="donut" v-else></div>
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
          <el-skeleton v-if="showTableFlag" :rows="3" animated />
          <div v-else class="table_content_header">
            <div
              class="dynamic_table"
              v-for="(adsItem, adsIndex) in maxTableInfo"
              :key="adsIndex"
              :style="{ height: adsItem.customColumnHeight + 'px', backgroundColor: isDividedBy2MultipleOf2(adsIndex) ?'rgb(245, 246, 247)':'' }"
            >
              <div
                class="ads_column"
                v-for="(item, index) in adsItem.customTable"
                :class="[adsIndex == maxTableInfo.length-1 && index == 0 && currentIndex == 2 && item.id == 13 ? 'w24' : '']"
                :key="index"
                :style="{
                  width: item.tabHeaderWidth + 'px',
                  height:
                    adsIndex != 0 && adsIndex != maxTableInfo.length - 1
                      ? '46px'
                      : adsIndex == maxTableInfo.length - 1
                      ? '64px'
        : '32px',
                      borderTop:adsIndex == 0 || adsIndex == 1 || adsIndex === maxTableInfo.length -1 ? '1px solid rgb(211, 211, 211)':'',
                  borderRight:
                    item.typeBox == 'r_n' ? '' : '1px solid rgb(211, 211, 211)',
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
                <!-- 上下文本 右上图标 -->
                <div class="x_l" v-if="item.typeBox == 6 && adsIndex != 0">
                  <div class="left_x_l">
                    <div class="left_b_t">
                      <div class="left_b_te">{{ maxTableInfo.length -2 }}个广告系列的成效</div>
                      <div class="left_b_ic"></div>
                    </div>
                    <div class="pilei_bottom_text">排除已删除内容</div>
                  </div>
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
                  <!--adsStatus: 1 未投放 2 投放中 3 账户已停用 4 已关闭 -->
                  <div
                    :class="
                      item.adsStatus == 2
                        ? 'icon_r_x ro_icon'
                        : item.adsStatus == 4
                        ? 'icon_r_x_o ro_icon'
                        : item.adsStatus == 1
                        ? 'icon_r_x_o_x ro_icon'
                        : ''
                    "
                  ></div>
                  <div class="ro_text" style="margin-left: 8px">
                    {{
                      item.adsStatus == 1
                        ? '未投放'
                        : item.adsStatus == 2
                        ? '投放中'
                        : item.adsStatus == 3
                        ? '账户已停用'
                        : '已关闭'
                    }}
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
                  <!-- <div class="check-icon">
                    <input
                      type="checkbox"
                      name="check"
                      id="check"
                      v-model="item.isChecked"
                      @change="handleChange($event, item)"
                    />
                    <label for="check" class="notice"></label>
                  </div> -->
                  <div
                    @click="handleCCcheck(item)"
                    :class="[
                      item.isChecked
                        ? 'checkbox_select_active'
                        : 'checkbox_select',
                    ]"
                  ></div>
                </div>

                <!-- 开关组件 -->
                <div
                  class="switch_box"
                  v-if="item.typeBox == 3 && adsIndex != 0"
                >
                  <!-- <input type="checkbox" class="switch" /> -->
                  <div
                    class="cc_check"
                    :class="[!item.isChecked ? 'cc_check' : 'cc_check_no']"
                    @click="handleSwitch(adsItem.customTable,item)"
                  >
                    <div class="cc_y"></div>
                  </div>
                </div>
                <!-- 表头显示的排序图标 -->
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
      <div class="mock_data" v-if="showMockDom">
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
                v-model="item.attributionText"
                disabled
                placeholder="投放链接"
              ></el-input>
            </div>
            <!-- <div class="singleResult_Text adsName_text">
              <el-input v-model="singleResultText" placeholder="单次成效费用"></el-input>
            </div>
             <div class="singleRegilt_Text adsName_text">
              <el-input v-model="singleRegiltText" placeholder="单次注册费用"></el-input>
            </div> -->
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
    <div class="mask_right_box" v-if="maskSlot">
      <RightBox @closeMask="closeMask" />
    </div>
  </div>
</template>

<script>
import RightBox from './ComSlot/rightBox.vue'
export default {
  components: { RightBox },
  data() {
    return {
      showTableFlag: false,
showMockDom:true,
      effectivenessTotal: '',
      exhibitTotal: '',
      spendTotal: '',
      registerTotal: '',
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

      maskSlot: false,
      editLoading: false,
      // typeBox 1 纯文本组件 2 复选框组件 3 开关组件 4 左图标右文本组件 5 全靠右上下组件 6 全靠右上带数字分割符组件 7 全靠右上上下组件
      maxTableInfo: [
        {
          customTable: [
            {
              id: 1,
              text: '',
              tabHeaderWidth: 20,
              typeBox: 2,
              isChecked: false,
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
              tabHeaderWidth: 120,
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
            
            { id: 9, text: '单次成效费用', tabHeaderWidth: 180 },
            {
              id: 10,
              text: '单次完成注册费用',
              tabHeaderWidth: 160,
            },
            { id: 11, text: '完成注册数', tabHeaderWidth: 100 },
            { id: 12, text: '点击量（全部）', tabHeaderWidth: 150 },
            // { id: 13, text: '链接（广告设置）', tabHeaderWidth: 340 },
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
              isChecked: true,
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
              adsStatus: '2',
            },
            {
              id: 5,
              text: '5000',
              tabHeaderWidth: 120,
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
              tabHeaderWidth: 180,
              typeBox: 5,
              des: '单次购物',
              isUnderline: true,
              isMoney: true,
              isShowTop: false,
            },
            {
              id: 10,
              text: '98981',
              tabHeaderWidth: 160,
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
            {
              id: 12,
              text: '8882',
              tabHeaderWidth: 150,
              typeBox: 5,
              des: '',
              isUnderline: false,
              isMoney: false,
              isShowTop: false,
            },
            // {
            //   id: 13,
            //   text: '123',
            //   tabHeaderWidth: 340,
            //   typeBox: 5,
            //   des: '',
            //   isUnderline: false,
            //   isMoney: false,
            //   isShowTop: false,
            // },
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
              isChecked: true,
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
              adsStatus: '2',
            },
            {
              id: 5,
              text: '5000',
              tabHeaderWidth: 120,
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
              tabHeaderWidth: 180,
              typeBox: 5,
              des: '单次购物',
              isUnderline: true,
              isMoney: true,
              isShowTop: false,
            },
            {
              id: 10,
              text: '98981',
              tabHeaderWidth: 160,
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
            {
              id: 12,
              text: '8882',
              tabHeaderWidth: 150,
              typeBox: 5,
              des: '',
              isUnderline: false,
              isMoney: false,
              isShowTop: false,
            },
            // {
            //   id: 13,
            //   text: '123',
            //   tabHeaderWidth: 340,
            //   typeBox: 5,
            //   des: '',
            //   isUnderline: false,
            //   isMoney: false,
            //   isShowTop: false,
            // },
          ],
          customColumnHeight: 46,
        },
        {
          customTable: [
            {
              id: 1,
              text: '',
              tabHeaderWidth: 21,
              typeBox: 'r_n',
            },
            {
              id: 2,
              text: '关/开',
              tabHeaderWidth: 50,
              typeBox: 'x',
            },
            {
              id: 3,
              text: 'X003-FB-PWA-1',
              tabHeaderWidth: 200,
              typeBox: 6,
            },
            {
              id: 4,
              text: '投放状态',
              tabHeaderWidth: 151,
              typeBox: 'r_n',
            },
            {
              id: 5,
              text: '5000',
              tabHeaderWidth: 120,
              typeBox: 'x',
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
              tabHeaderWidth: 180,
              typeBox: 5,
              des: '单次购物',
              isUnderline: true,
              isMoney: true,
              isShowTop: false,
            },
            {
              id: 10,
              text: '98981',
              tabHeaderWidth: 160,
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
            {
              id: 12,
              text: '8882',
              tabHeaderWidth: 150,
              typeBox: 5,
              des: '',
              isUnderline: false,
              isMoney: false,
              isShowTop: false,
            },
            // {
            //   id: 13,
            //   text: '123',
            //   tabHeaderWidth: 340,
            //   typeBox: 5,
            //   des: '',
            //   isUnderline: false,
            //   isMoney: false,
            //   isShowTop: false,
            // },
          ],
          customColumnHeight: 64,
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
  computed: {
    middleItems() {
      // 返回去除首尾的部分
      return this.maxTableInfo.slice(1, this.maxTableInfo.length - 1)
    },
  },
  mounted() {},
  created() {},
  methods: {
    xlChange(index) {
      this.maxTableInfo[index + 1].customTable[2].text =
        this.mockData[index].adsXlName
    },
    statusChange(index) {
      this.maxTableInfo[index + 1].customTable[3].adsStatus =
        this.mockData[index].statusValue
    },
    budgetChange(index) {
      this.maxTableInfo[index + 1].customTable[4].text =
        this.mockData[index].budgetText
    },
    effectivenessChange (index) {
      this.effectivenessTotal=''
      this.maxTableInfo[index + 1].customTable[5].text =
        this.mockData[index].effectivenessText
      this.maxTableInfo[index + 1].customTable[8].text = (
        Number(this.maxTableInfo[index + 1].customTable[7].text) /
        Number(this.maxTableInfo[index + 1].customTable[5].text)
      ).toFixed(2)
      this.maxTableInfo.forEach((item, index) => {
        if(index === 0 || index === this.maxTableInfo.length - 1) return
         this.effectivenessTotal = Number(this.effectivenessTotal) + Number(item.customTable[5].text)
      })
      this.maxTableInfo[this.maxTableInfo.length - 1].customTable[5].text = this.effectivenessTotal
      console.log('dada',(Number(this.spendTotal)/(this.effectivenessTotal)).toFixed(2))
      this.maxTableInfo[this.maxTableInfo.length - 1].customTable[8].text = (Number(this.spendTotal)/(this.effectivenessTotal)).toFixed(2)
    },
    exhibitChange (index) {
      this.exhibitTotal=''
      this.maxTableInfo[index + 1].customTable[6].text =
        this.mockData[index].exhibitText
      
      this.maxTableInfo.forEach((item, index) => {
        if(index === 0 || index === this.maxTableInfo.length - 1) return
         this.exhibitTotal = Number(this.exhibitTotal) + Number(item.customTable[6].text)
      })
      this.maxTableInfo[this.maxTableInfo.length - 1].customTable[6].text = this.exhibitTotal
    },
    spendChange (index) {
      this.spendTotal= ''
      this.maxTableInfo[index + 1].customTable[7].text =
        this.mockData[index].spendText
      this.maxTableInfo[index + 1].customTable[9].text = (
        Number(this.maxTableInfo[index + 1].customTable[7].text) /
        Number(this.maxTableInfo[index + 1].customTable[10].text)
      ).toFixed(2)
      this.maxTableInfo[index + 1].customTable[8].text = (
        Number(this.maxTableInfo[index + 1].customTable[7].text) /
        Number(this.maxTableInfo[index + 1].customTable[5].text)
      ).toFixed(2)

      this.maxTableInfo.forEach((item, index) => {
        if(index === 0 || index === this.maxTableInfo.length - 1) return
         this.spendTotal = Number(this.spendTotal) + Number(item.customTable[7].text)
      })
      this.maxTableInfo[this.maxTableInfo.length - 1].customTable[7].text = this.spendTotal
      this.maxTableInfo[this.maxTableInfo.length - 1].customTable[8].text = (Number(this.spendTotal)/(this.effectivenessTotal)).toFixed(2)
    },
    registerChange (index) {
      this.registerTotal= ''
      this.maxTableInfo[index + 1].customTable[10].text =
        this.mockData[index].registerText
      this.maxTableInfo[index + 1].customTable[9].text = (
        Number(this.maxTableInfo[index + 1].customTable[7].text) /
        Number(this.maxTableInfo[index + 1].customTable[10].text)
      ).toFixed(2)

       this.maxTableInfo.forEach((item, index) => {
        if(index === 0 || index === this.maxTableInfo.length - 1) return
         this.registerTotal = Number(this.registerTotal) + Number(item.customTable[10].text)
       })
      
      this.maxTableInfo[this.maxTableInfo.length - 1].customTable[10].text = this.registerTotal
      console.log(this.registerTotal,this.effectivenessTotal)
      this.maxTableInfo[this.maxTableInfo.length - 1].customTable[9].text = (Number(this.spendTotal)/(this.registerTotal)).toFixed(2)
    },
    isDividedBy2MultipleOf2 (num) {
      if(num === 0) return false
      return num % 2 == 0
    },
    clickChange(index) {
      this.maxTableInfo[index + 1].customTable[11].text =
        this.mockData[index].clickText
    },
    formatNumberWithCommas(number) {
      // 将数字转换为字符串
      if (!number) return
      let numStr = number.toString()

      // 使用正则表达式和 replace 方法插入逗号
      return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },

    handleCCcheck (item) {
      item.isChecked = !item.isChecked
      this.$forceUpdate()
    },
    handleSwitch (table, item) {
      console.log(table, item)
      item.isChecked = !item.isChecked;
      if (item.isChecked) {
       table[3].adsStatus = '4'
      }else {
       table[3].adsStatus = '2'
      }
      this.$forceUpdate()
    },
    closeMask() {
      this.maskSlot = false;
      this.showMockDom = true
    },
    //编辑
    handleEdit() {
      this.editLoading = true
      this.showMockDom = false
      let timer = setTimeout(() => {
        this.editLoading = false
        this.maskSlot = true
        clearTimeout(timer)
      }, 1500)
    },
    // 切换当前表头索引
    changeCurrentIndex(index) {
      this.currentIndex = index;
      this.showTableFlag = true
      let timer = setTimeout(() => { 
        this.showTableFlag = false
        clearTimeout(timer)
      }, 1000)
      if (index == 1) {
        this.maxTableInfo[0].customTable[2].text = '广告组'
      } else if (index == 2) {
        this.maxTableInfo[0].customTable[2].text = '广告'
        // this.maxTableInfo[0].customTable[0]
      } else { 
        this.maxTableInfo[0].customTable[2].text = '广告系列'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// 公用和全局样式
@keyframes donut-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.mock_data {
  position: absolute;
  bottom: 100px;
  left: 0;
  width: 100%;

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
      .adsName_text {
        width: 150px;
        height: 40px;
        margin-left: 16px;
      }

      .stat_type {
        margin-left: 16px;
        width: 140px;
        height: 40px;
      }
    }
  }
}
*{
caret-color: rgba(0, 0, 0, 0)
}
.donut {
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left-color: rgb(10, 120, 190);
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: donut-spin 1.2s linear infinite;
}
.checkbox_select {
  width: 22px;
  height: 22px;
  border: 1px solid rgb(203, 210, 217);
  border-radius: 4px;
}
.checkbox_select_active {
  border-radius: 4px;
  height: 22px;
  width: 22px;
  display: inline-block;
  background-image: url('https://si.geilicdn.com/img-680e0000017db893cf290a22d4b2-unadjust_24_24.png');
  background-repeat: no-repeat;
  background-size: 22px 22px;
}
.cc_check_no {
  width: 36px;
  height: 20px;
  background: #fff !important;
  border: 1px solid rgb(203, 210, 217);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start !important;
  padding-left: 2px;
  .cc_y {
    width: 18px !important;
    height: 18px !important;
    background: #000 !important;
    border-radius: 50%;
  }
}
.cc_check {
  width: 36px;
  height: 20px;
  background: rgb(225, 237, 247);
  border: 1px solid rgb(203, 210, 217);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .cc_y {
    width: 20px;
    height: 20px;
    background: rgb(10, 120, 190);
    border-radius: 50%;
  }
}

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
  color: rgb(20, 97, 204);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
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
  font-size: 14px;
  font-weight: 400 !important;
  color: rgb(28, 43, 51) !important;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
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
    font-size: 12px;
    font-weight: 400;
    // color: rgba(0, 0, 0, 0.5);
    color: rgba(28, 43, 51, 0.65);
    height: 16px;
  }
  .m_box {
    display: flex;
    .m_text {
      font-size: 14px;
      font-weight: 400;
      color: rgb(28, 43, 51);
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
.switch_box {
  display: flex;
  align-items: center;
  cursor: pointer;
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
.x_l {
  .left_x_l {
    display: flex;
    flex-direction: column;
    .left_b_t {
      display: flex;
      justify-content: center;
      align-items: center;
      .left_b_te {
        font-size: 15px;
        font-weight: 700;
        color: rgb(28, 30, 33);
      }
      .left_b_ic {
        margin-left: 4px;
        width: 12px;
        height: 12px;
        background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/llvmClTohD1.png);
        background-position: -39px -273px;
      }
    }
    .pilei_bottom_text {
      color: rgba(0, 0, 0, 0.5);
      font-size: 13px;
      font-weight: 400;
    }
  }
}
// -------------------------------------------------
// 二级页面遮罩
.mask_right_box {
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background: #fff;
  overflow: hidden;
}

.ads_content {
  width: 100%;
  height: 100%;
  background: rgb(245, 246, 247);
  display: flex;
  position: relative;
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
  position: relative;
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
        cursor: pointer;

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
          background-position: 0px -1032px;
        }
        .btn_text_hui {
          font-size: 13px;
          font-weight: 400;
          height: 16px;
          color: rgba(0, 0, 0, 0.45);
          // line-height: 16px;
          margin-left: 8px;
        }
        .btn_text_black {
          color: #000 !important;
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
.w24{
  width:24px !important;
}
// 中间表格样式
.table_content {
  width: 100%;
  .table_content_header {
    background: #fff;
    color: rgb(28, 30, 33);
    font-family: Roboto, Arial, sans-serif;
    width: 100%;
    padding-bottom: 200px;
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
        // border-top: 1px solid rgb(211, 211, 211);
        .ads_column_text {
          font-weight: 700;
          font-size: 14px;
          color: rgb(28, 43, 51);
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
