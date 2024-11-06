<template>
  <div class="content_box">
    <div class="_2ww0">
      <div class="left" style="">
        <div class="aa">
          <div class="im1">
            <img class="img_box_logo" src="../../assets/3.png" />
          </div>
          <div class="im2">
            <img class="img_box" :src="left_img" />
          </div>
        </div>
        <div class="bb">
          <div class="bb_b">
            <div class="b">
              <div class="b_1"></div>
            </div>
            <div class="b b_bg">
              <div class="b_2"></div>
            </div>
            <div class="b">
              <div class="b_3"></div>
            </div>
            <div class="b">
              <div class="b_4"></div>
            </div>
            <div class="b">
              <div class="b_5"></div>
            </div>
            <div class="b">
              <div class="b_6"></div>
            </div>
            <div class="b">
              <div class="b_7"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="tapOne">
          <div class="topOne_a">
            <div class="topOne_a_1">广告</div>
            <div class="topOne_a_2">
              <div class="span_text">
                <div class="span_text_1">
                  {{ adsTopText }}
                </div>
                <div class="span_text_2"></div>
              </div>
            </div>
          </div>
          <div class="topOne_b">
            <div class="topOne_b_1">
              <div class="topOne_b_1_1">更新时间：刚刚</div>
              <div class="topOne_b_1_2" @click="reload()">
                <div class="img_bx"></div>
              </div>
            </div>
            <div class="topOne_b_2">
              <div class="topOne_b_2_1">放弃草稿</div>
              <div class="topOne_b_2_2">检查并发布</div>
            </div>
            <div class="topOne_b_3">
              <div class="topOne_b_3_1"></div>
            </div>
          </div>
        </div>
        <div class="aaa">
          <div class="input_box" :style="dynamicStyle">
            <div class="left_box">
              <div class="shure"></div>
              <!-- <div class="left_zhanshi">有展示</div> -->
              <div class="left_sour">搜索和筛选</div>
            </div>
          </div>
          <div
            class="right_box"
            :style="{ width: isMultipleDates ? '300px' : '170px' }"
          >
            <div class="aaa_xx"></div>
            <!-- 2024年10月23日 – 2024年10月28日 -->
            <div class="mate" v-if="!isMultipleDates">{{ yesterdayTime }}</div>
            <div class="mate" v-if="isMultipleDates">
              {{ startDateTime }} - {{ endDateTime }}
            </div>
            <div class="bottom_sour"></div>
          </div>
        </div>
        <div class="top_label">
          <div
            class="top_label_1 mb-8"
            v-for="(adsTItem, adsIndex) in adsTable"
            :key="adsIndex"
            @click="adsTabChangeIndex(adsIndex)"
            :style="{
              height: adsIndexTable == adsIndex ? '49px' : '40px',
              'margin-bottom': adsIndexTable != adsIndex ? '-8px' : '',
            }"
          >
            <div
              class="left_icon"
              :style="{
                backgroundPositionY:
                  (adsIndexTable == adsIndex
                    ? adsTItem.positionActiveY
                    : adsTItem.positionY) + 'px',
                width: adsIndexTable == adsIndex ? '24px' : '20px',
                height: adsIndexTable == adsIndex ? '24px' : '20px',
              }"
              :class="[
                adsIndexTable == adsIndex ? adsTItem.activeIconClass : '',
              ]"
            ></div>
            <div
              class="left_text"
              :style="{
                color: adsIndexTable == adsIndex ? 'rgb(20, 97, 204)' : '',
              }"
            >
              {{ adsTItem.adsTItemName }}
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
        <div class="bottom_table">
          <div class="table_header">
            <div class="header_1 rs_box one_checkbox">
              <input type="checkbox" class="input_checkbox" />
            </div>
            <div class="header_2 rs_box" style="line-height: 36px">关/开</div>
            <div class="header_3 rs_box">
              <div class="left_text">
                {{ adsIndexTable == 0 ? '广告系列' : '广告' }}
              </div>
              <div class="icon_r"></div>
            </div>
            <div class="header_4 rs_box">
              <div class="left_text">投放状态</div>
              <div class="icon_r"></div>
            </div>
            <div class="header_5 rs_box">
              <div class="left_text">预算</div>
            </div>
            <div class="header_5 rs_box" v-if="adsIndexTable == 0">
              <div class="left_text">归因设置</div>
            </div>

            <div class="header_6 rs_box">
              <div class="left_text">花费金额</div>
              <div class="icon_r"></div>
            </div>

            <div class="header_6 rs_box" v-if="adsIndexTable != 2">
              <div class="left_text">单次成效费用</div>
              <div class="icon_r"></div>
            </div>

            <div
              class="header_6 rs_box"
              style="width: 22%"
              v-if="adsIndexTable != 2"
            >
              <div class="left_text">单次完成注册费用</div>
              <div class="icon_r"></div>
            </div>
            <div class="header_16 rs_box header_7">
              <div class="left_text">成效</div>
              <div class="icon_r"></div>
            </div>
            <div class="header_7 rs_box">
              <div class="left_text">完成注册数</div>
              <div class="icon_r"></div>
            </div>
            <div class="header_5 rs_box link_box" v-if="adsIndexTable == 2">
              <div class="left_text">链接（广告设置）</div>
            </div>
            <div class="header_8 rs_box">
              <div class="left_text">点击量（全部）</div>
              <div class="icon_r"></div>
            </div>
            <div class="header_9 rs_box" style="border-right: none">
              <div class="left_text">展示次数</div>
              <div class="icon_r"></div>
            </div>
          </div>
          <el-progress
            style="position: absolute; width: 3000px"
            :percentage="percentage"
            v-if="showPercentage"
            :show-text="false"
          ></el-progress>

          <div v-if="showDiv">
            <div
              class="table_box"
              v-for="(tabItem, tabIndex) in table_info"
              :key="tabIndex"
              :style="{
                background: tabIndex % 2 == 1 ? '#f5f6f7' : '#fff',
              }"
            >
              <div class="header_1 rs_box one_checkbox">
                <input type="checkbox" class="input_checkbox" />
              </div>
              <div class="header_2 rs_box flex_center">
                <div
                  class="switch-box"
                  :class="tabItem.adsStatus != '投放中' ? 'switchActive' : ''"
                >
                  <input id="switchButton" type="checkbox" class="switch" />
                  <label for="switchButton"></label>
                </div>
              </div>
              <div class="header_3 rs_box">
                <!-- <div class="text_c">{{ tabItem.adsName }}</div> -->
                <div class="text_c" style="display: flex; align-items: center">
                  <img
                    v-if="adsIndexTable != 0"
                    :src="tabItem.adsImg"
                    alt=""
                    style="width: 44px; height: 44px; margin-right: 4px"
                  />
                  <div class="right_bo">
                    <div
                      class="r_text"
                      style="
                        font-size: 15px;
                        font-weight: 400;
                        color: rgb(28, 30, 33);
                      "
                    >
                      {{ tabItem.adsName }}
                    </div>
                    <!-- <div class="r_text" style="height: 18px"></div> -->
                  </div>
                </div>
              </div>
              <div class="header_4 rs_box flex_start">
                <div
                  :class="
                    tabItem.adsStatus == '投放中'
                      ? 'icon_r_x'
                      : tabItem.adsStatus == '已关闭'
                      ? 'icon_r_x_o'
                      : tabItem.adsStatus == '未投放'
                      ? 'icon_r_x_o_x'
                      : ''
                  "
                ></div>
                <div class="left_text" style="margin-left: 8px">
                  {{ tabItem.adsStatus }}
                </div>
              </div>
              <div class="header_5 rs_box flex_end">
                <div class="c_bb" v-if="adsIndexTable != 0">
                  <div
                    class="left_text showeli"
                    style="height: 18px; width: 113px"
                  >
                    使用广告系列预算
                  </div>
                  <div class="danri_text"></div>
                </div>
                <div class="c_bb" v-else>
                  <div class="left_text" style="height: 16px">
                    ${{ formatNumberWithCommas(tabItem.adsBudget) }}
                  </div>
                  <div class="danri_text">单日</div>
                </div>
              </div>
              <div class="header_5 rs_box" v-if="adsIndexTable == 0">
                <div class="c_bb">
                  <div class="left_text" style="height: 16px">
                    点击后1天或观看后1天
                  </div>
                  <div class="danri_text"></div>
                </div>
              </div>

              <div class="header_6 rs_box flex_end">
                <div class="c_bb">
                  <div class="left_text" style="height: 16px">
                    ${{ formatNumberWithCommas(tabItem.adsSpend) }}
                  </div>
                  <div class="danri_text"></div>
                </div>
              </div>
              <div class="header_6 rs_box flex_end" v-if="adsIndexTable != 2">
                <div class="c_bb">
                  <div
                    class="left_text"
                    style="height: 16px"
                    :class="tabItem.a != 'Infinity' ? 'text_liner' : ''"
                  >
                    {{ isFinite(tabItem.a) ? '$' : ''
                    }}{{
                      isFinite(tabItem.a)
                        ? formatNumberWithCommas(tabItem.a)
                        : '—'
                    }}
                  </div>
                  <div
                    class="danri_text"
                    style="
                      text-align: right;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      width: 110px;
                    "
                  >
                    {{ tabItem.oneAdsText }}
                  </div>
                </div>
              </div>
              <div
                class="header_6 rs_box flex_end"
                style="width: 22%"
                v-if="adsIndexTable != 2"
              >
                <div class="c_bb">
                  <div
                    class="left_text"
                    style="height: 16px"
                    :class="tabItem.b != 'Infinity' ? 'text_liner' : ''"
                  >
                    {{ isFinite(tabItem.b) ? '$' : ''
                    }}{{
                      isFinite(tabItem.b)
                        ? formatNumberWithCommas(tabItem.b)
                        : '—'
                    }}
                  </div>
                  <div class="danri_text"></div>
                </div>
              </div>
              <div class="header_7 rs_box flex_end header_16">
                <div class="left_text">
                  <div class="top_a">
                    <div
                      class="top_d"
                      :class="tabItem.adsEffectiveness > 0 ? 'text_liner' : ''"
                    >
                      {{
                        tabItem.adsEffectiveness == 0
                          ? '—'
                          : formatNumberWithCommas(tabItem.adsEffectiveness)
                      }}
                    </div>
                    <div class="top_b" v-if="tabItem.adsEffectiveness > 0">
                      [2]
                    </div>
                  </div>
                  <div class="top_c" style="height: 17px">
                    <!-- {{ tabItem.adsEffectiveness > 0 ? tabItem.adsText : ' ' }} -->
                    {{ tabItem.adsText }}
                  </div>
                </div>
              </div>
              <!-- 注册 -->
              <div class="header_7 rs_box flex_end">
                <div class="left_text">
                  <div class="top_a">
                    <div
                      class="top_d"
                      :class="tabItem.adsEffectiveness > 0 ? 'text_liner' : ''"
                    >
                      {{
                        tabItem.adsResister == 0
                          ? '—'
                          : formatNumberWithCommas(tabItem.adsResister)
                      }}
                    </div>
                    <div class="top_b" v-if="tabItem.adsResister > 0">[2]</div>
                  </div>
                  <div class="top_c" style="height: 17px"></div>
                </div>
              </div>
              <!-- 广告链接 -->
              <div class="header_5 rs_box link_box" v-if="adsIndexTable == 2">
                <div class="c_bb">
                  <div
                    class="left_text"
                    style="
                      height: 17px;
                      white-space: nowrap;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      width: 550px;
                    "
                  >
                    {{ tabItem.adsLink }}
                  </div>
                  <div class="danri_text"></div>
                </div>
              </div>
              <div class="header_8 rs_box flex_end">
                <div class="c_bb">
                  <div class="left_text" style="height: 16px">
                    {{ formatNumberWithCommas(tabItem.adsClick) }}
                  </div>
                  <div class="danri_text"></div>
                </div>
              </div>
              <div class="header_9 rs_box flex_end border_r">
                <div class="c_bb">
                  <div class="left_text" style="height: 16px">
                    {{ formatNumberWithCommas(tabItem.adsExhibit) }}
                  </div>
                  <div class="danri_text"></div>
                </div>
              </div>
            </div>
          </div>
          <!-- 最后一个 -->
          <div class="table_box bottom_box_1" v-if="showDiv">
            <div
              class="header_1 rs_box one_checkbox"
              style="border-right: none"
            ></div>
            <div
              :style="{ 'margin-left': adsIndexTable == 2 ? '8px' : '6px' }"
              class="header_2 rs_box"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            ></div>
            <div class="header_3 rs_box">
              <div class="left_text pilei">
                <div class="pilei_top">
                  <div class="pilei_wenzi">
                    {{ table_info.length }}个广告系列的成效
                  </div>
                  <div class="pilei_icon"></div>
                </div>
                <div class="pilei_bottom">排除已删除内容</div>
              </div>
            </div>
            <div
              class="header_4 rs_box"
              style="justify-content: flex-start; border-right: none"
            ></div>
            <div
              class="header_5 rs_box"
              style="justify-content: flex-end; padding-left: 9px"
            ></div>
            <div
              class="header_5 rs_box"
              style="justify-content: flex-end"
              v-if="adsIndexTable == 0"
            ></div>

            <div class="header_6 rs_box flex_end">
              <div class="left_text">
                <div class="right_text">
                  <div class="right_text_a">
                    ${{ formatNumberWithCommas(totalCost) }}
                  </div>
                  <div class="right_tex">总花费</div>
                </div>
              </div>
            </div>
            <div class="header_6 rs_box flex_end" v-if="adsIndexTable != 2">
              <div class="left_text">
                <div class="right_text">
                  <!-- <div class="right_text_a text_liner">
                    ${{ formatNumberWithCommas(totlaA) }}
                  </div> -->
                  <div
                    class="right_text_a"
                    :class="totlaA != 'Infinity' ? 'text_liner' : 'fonw300'"
                  >
                    {{ isFinite(totlaA) ? '$' : ''
                    }}{{
                      isFinite(totlaA) ? formatNumberWithCommas(totlaA) : '—'
                    }}
                  </div>
                  <div
                    class="right_tex"
                    style="
                      text-align: right;
                      text-align: right;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      width: 110px;
                    "
                  >
                    {{ oneEffectivenessTag }}
                  </div>
                </div>
              </div>
            </div>
            <div
              class="header_6 rs_box flex_end"
              style="width: 22%"
              v-if="adsIndexTable != 2"
            >
              <div class="left_text">
                <div class="right_text">
                  <!-- <div class="right_text_a text_liner">
                    ${{ formatNumberWithCommas(totlaB) }}
                  </div> -->
                  <div
                    class="right_text_a"
                    :class="totlaB != 'Infinity' ? 'text_liner' : 'fonw300'"
                  >
                    {{ isFinite(totlaB) ? '$' : ''
                    }}{{
                      isFinite(totlaB) ? formatNumberWithCommas(totlaB) : '—'
                    }}
                  </div>
                  <div class="right_tex">每次动作</div>
                </div>
              </div>
            </div>
            <div class="header_7 rs_box flex_end header_16">
              <div class="left_text">
                <div class="top_a">
                  <div
                    class="top_d text_liner"
                    style="
                      font-weight: 700;
                      font-size: 15px;
                      color: rgb(28, 30, 33);
                    "
                  >
                    {{
                      Number(totalEffectiveness) != 0
                        ? formatNumberWithCommas(totalEffectiveness)
                        : ''
                    }}
                  </div>
                  <div
                    class="top_b"
                    style="
                      font-size: 9px;
                      font-weight: 700;
                      color: rgb(75, 79, 86);
                    "
                  >
                    {{ Number(totalEffectiveness) != 0 ? '[2]' : '—' }}
                  </div>
                </div>
                <div class="top_c">{{ effectivenessTag }}</div>
              </div>
            </div>
            <div class="header_7 rs_box flex_end">
              <div class="left_text">
                <div class="top_a">
                  <div
                    class="top_d text_liner"
                    style="
                      font-weight: 700;
                      font-size: 15px;
                      color: rgb(28, 30, 33);
                    "
                  >
                    {{
                      Number(totalResister) != 0
                        ? formatNumberWithCommas(totalResister)
                        : ''
                    }}
                  </div>
                  <div
                    class="top_b"
                    style="
                      font-size: 9px;
                      font-weight: 700;
                      color: rgb(75, 79, 86);
                    "
                  >
                    {{ Number(totalResister) != 0 ? '[2]' : '—' }}
                  </div>
                </div>
                <div class="top_c" style="height: 17px">共计</div>
              </div>
            </div>
            <!-- 广告链接 -->
            <div
              class="header_5 rs_box link_box"
              style="justify-content: flex-end; padding-left: 9px"
              v-if="adsIndexTable == 2"
            ></div>
            <div class="header_8 rs_box flex_end">
              <div class="left_text">
                <div class="right_text">
                  <div class="right_text_c">
                    {{ formatNumberWithCommas(totalClick) }}
                  </div>
                  <div class="right_tex_b">共计</div>
                </div>
              </div>
            </div>
            <div
              class="header_9 rs_box"
              style="border-right: none; justify-content: flex-end"
            >
              <div
                class="left_text"
                style="
                  display: flex;
                  flex-direction: column;
                  align-items: flex-end;
                "
              >
                <div class="right_text_c">
                  {{ formatNumberWithCommas(totalExhibit) }}
                </div>
                <div class="right_tex_b">共计</div>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom_bb"></div>
      </div>
      <div class="right">
        <div class="right_all">
          <div class="right_all_1"></div>
        </div>
        <div class="right_all">
          <div class="right_all_2"></div>
        </div>
        <div class="right_all">
          <div class="right_all_3"></div>
        </div>
      </div>
    </div>
    <div class="fun">
      <div class="click_add_tr">
        <div style="display: flex">
          <div
            class="aa_b"
            style="margin-top: 8px; margin-left: 16px; width: 160px"
          >
            <div class="label_name">请输入左边头像地址</div>
            <el-input
              v-model="left_img"
              placeholder="请输入左边头像地址"
              style="width: 160px; margin-right: 24px"
            ></el-input>
          </div>
          <div
            class="aa_b"
            style="margin-top: 8px; margin-left: 16px; width: 160px"
          >
            <div class="label_name">请输入广告账户名</div>
            <el-input
              v-model="adsTopText"
              @change="adsTopTextChanged"
              placeholder="请输入广告账户名"
              style="width: 160px; margin-right: 24px"
            ></el-input>
          </div>
          <div
            class="aa_b"
            style="margin-top: 8px; margin-left: 16px; width: 160px"
          >
            <div class="label_name">请输入单次成效费用类型</div>
            <el-input
              v-model="oneEffectivenessTag"
              placeholder="请输入单次成效费用类型"
              style="width: 160px; margin-right: 24px"
            ></el-input>
          </div>
          <div
            class="aa_b"
            style="margin-top: 8px; margin-left: 16px; width: 160px"
          >
            <div class="label_name">请输入成效类型</div>
            <el-input
              v-model="effectivenessTag"
              placeholder="请输入成效类型"
              style="width: 160px; margin-right: 24px"
            ></el-input>
          </div>
          <div
            class="aa_b"
            style="margin-top: 6px; width: 100px"
          >
            <div class="label_name" style="height: 20px"></div>
            <el-button type="info">显示单次成效/注册</el-button>
          </div>
          <div
            class="aa_b"
            style="margin-top: 6px; margin-left: 48px; width: 100px"
          >
            <div class="label_name" style="height: 20px"></div>
            <el-button type="info">是否广告链接</el-button>
          </div>
          <div
            class="aa_b"
            style="margin-top: 6px; margin-left: 16px; width: 150px"
          >
            <div class="label_name" style="height: 20px"></div>
            <el-button type="info">是否显示展示次数</el-button>
          </div>
          <div
            class="aa_b"
            style="margin-top: 6px; margin-left: 10px; width: 160px"
          >
            <div class="label_name" style="height: 20px"></div>
            <el-button type="info">是否显示点击量</el-button>
          </div>
          <div
            class="aa_b"
            style="margin-top: 6px; margin-left: -16px; width: 80px"
          >
            <div class="label_name" style="height: 20px"></div>
            <el-button
              type="primary"
              @click="
                () => {
                  isMultipleDates = !isMultipleDates
                }
              "
              >是否显示多日期量</el-button
            >
          </div>
          <div class="aa_b" v-if="isMultipleDates" style="position: absolute;right: 140px;margin-top: 10px;">
            <div class="label_name">开始日期</div>
            <el-input
              v-model="startDateTime"
              placeholder="请输入开始日期"
              style="width: 110px; margin-right: 24px"
            ></el-input>
          </div>
          <div class="aa_b" v-if="isMultipleDates" style="position: absolute;right: 10px;margin-top: 10px;">
            <div class="label_name">结束日期</div>
            <el-input
              v-model="endDateTime"
              placeholder="请输入结束日期"
              style="width: 110px; margin-right: 24px"
            ></el-input>
          </div>
        </div>
        <el-button type="success" @click="clickAddTr()" style="margin: 0 16px"
          >点击增加一行</el-button
        >
        <el-date-picker
          v-model="dataDeta"
          type="date"
          placeholder="选择日期"
          value-format="yyyy年MM月dd日"
          @change="detaChange($event)"
        >
        </el-date-picker>
        <el-button type="primary" style="margin: 0 16px" @click="dataStorage()"
          >存储为{{ dataDeta }}的数据</el-button
        >
        <el-button type="danger" style="margin: 0 16px" @click="clearStorage()"
          >清除存储</el-button
        >
        <el-button type="danger" style="margin: 0 16px" @click="AllData()"
          >根据存储数据显示时间段</el-button
        >
        <el-button
          v-for="(item, timeIndex) in timeArray"
          :key="timeIndex"
          type="danger"
          style="margin: 0 16px"
          @click="showDate(item)"
          >显示{{ item.date }}数据</el-button
        >
      </div>
      <div
        class="input"
        v-for="(tabInfo, tabInfoIndex) in table_info"
        :key="tabInfoIndex"
      >
        <div class="aa_b">
          <div class="label_name" v-if="tabInfoIndex == 0">请输入广告系列</div>
          <el-input
            v-model="tabInfo.adsName"
            placeholder="请输入广告系列"
            style="width: 110px; margin-right: 24px"
          ></el-input>
        </div>
        <div class="aa_b">
          <div class="label_name" v-if="tabInfoIndex == 0">请输入投放状态</div>
          <el-input
            v-model="tabInfo.adsStatus"
            placeholder="请输入投放状态"
            style="width: 110px; margin-right: 24px"
          ></el-input>
        </div>
        <div class="aa_b">
          <div class="label_name" v-if="tabInfoIndex == 0">请输入预算</div>
          <el-input
            v-model="tabInfo.adsBudget"
            placeholder="请输入预算"
            type="number"
            style="width: 110px; margin-right: 24px"
          ></el-input>
        </div>
        <div class="aa_b">
          <div class="label_name" v-if="tabInfoIndex == 0">请输入花费金额</div>
          <el-input
            v-model="tabInfo.adsSpend"
            placeholder="请输入花费金额"
            type="number"
            style="width: 110px; margin-right: 24px"
            @change="
              () => {
                tabInfo.a = (
                  Number(tabInfo.adsSpend) / Number(tabInfo.adsEffectiveness)
                ).toFixed(2)
                tabInfo.b = (
                  Number(tabInfo.adsSpend) / Number(tabInfo.adsResister)
                ).toFixed(2)
              }
            "
          ></el-input>
        </div>
        <div class="aa_b">
          <div class="label_name" v-if="tabInfoIndex == 0">请输入成效</div>
          <el-input
            v-model="tabInfo.adsEffectiveness"
            placeholder="请输入成效"
            type="number"
            style="width: 110px; margin-right: 24px"
            @change="
              () => {
                tabInfo.a = (
                  Number(tabInfo.adsSpend) / Number(tabInfo.adsEffectiveness)
                ).toFixed(2)
              }
            "
          ></el-input>
        </div>
        <div class="aa_b">
          <div class="label_name" v-if="tabInfoIndex == 0">请输入注册</div>
          <el-input
            v-model="tabInfo.adsResister"
            placeholder="请输入注册"
            type="number"
            style="width: 110px; margin-right: 24px"
            @change="
              () => {
                tabInfo.b = (
                  Number(tabInfo.adsSpend) / Number(tabInfo.adsResister)
                ).toFixed(2)
              }
            "
          ></el-input>
        </div>
        <div class="aa_b">
          <div class="label_name" v-if="tabInfoIndex == 0">请输入点击</div>
          <el-input
            v-model="tabInfo.adsClick"
            placeholder="请输入点击"
            type="number"
            style="width: 110px; margin-right: 24px"
          ></el-input>
        </div>
        <div class="aa_b">
          <div class="label_name" v-if="tabInfoIndex == 0">请输入展示次数</div>
          <el-input
            v-model="tabInfo.adsExhibit"
            placeholder="请输入展示次数"
            type="number"
            style="width: 110px; margin-right: 24px"
          ></el-input>
        </div>
        <div class="aa_b">
          <div class="label_name" v-if="tabInfoIndex == 0">
            请输入单次成效类型
          </div>
          <el-input
            v-model="tabInfo.oneAdsText"
            placeholder="请输入单次成效类型"
            style="width: 110px; margin-right: 24px"
          ></el-input>
        </div>
        <div class="aa_b">
          <div class="label_name" v-if="tabInfoIndex == 0">请输入成效类型</div>
          <el-input
            v-model="tabInfo.adsText"
            placeholder="请输入成效类型"
            style="width: 110px; margin-right: 24px"
          ></el-input>
        </div>
        <div class="aa_b">
          <div class="label_name" v-if="tabInfoIndex == 0">请输入广告链接</div>
          <el-input
            v-model="tabInfo.adsLink"
            placeholder="请输入广告链接"
            style="width: 110px; margin-right: 24px"
          ></el-input>
        </div>
        <div class="aa_b">
          <div class="label_name" v-if="tabInfoIndex == 0">
            请输入广告图片链接
          </div>
          <el-input
            v-model="tabInfo.adsImg"
            placeholder="请输入广告图片链接"
            style="width: 110px; margin-right: 24px"
          ></el-input>
        </div>
        <div class="aa_b" style="width: 60px; justify-content: flex-end">
          <el-button
            type="danger"
            @click="deleteRow(tabInfoIndex)"
            style="width: 60px; height: 36px; text-align: center"
            >删除</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDateTime: '2024年10月28日',
      endDateTime: '2024年10月28日',
      isMultipleDates: false, //是否是区间日期
      adsTable: [
        {
          activeIconClass: 'ads_series',
          adsTItemName: '广告系列',
          positionY: -1265,
          positionActiveY: -158,
          ids: 1,
        },
        {
          activeIconClass: 'ads_group',
          adsTItemName: '广告组',
          positionY: -1244,
          positionActiveY: -60,
          ids: 2,
        },
        {
          activeIconClass: 'ads_creative',
          adsTItemName: '广告',
          positionY: -1223,
          positionActiveY: -33,
          ids: 3,
        },
      ],
      adsIndexTable: 0,
      percentage: 0,
      showPercentage: true,
      timer: null,
      yesterdayTime: '',
      showDiv: true,
      adsTopText: localStorage.getItem('adsSNumber')
        ? localStorage.getItem('adsSNumber')
        : 'Yuri-899-10181457-POP (1060392375291233)',
      dataDeta: '',
      // 成效标签
      effectivenessTag: '购物',
      oneEffectivenessTag: '购物',
      // 表格数据
      table_info: [
        {
          id: 1,
          adsName: 'X003-FB-PWA-1',
          adsStatus: '投放中',
          adsBudget: '3000',
          adsSpend: 2497.48,
          adsEffectiveness: '124',
          adsResister: '160',
          adsClick: '1857',
          adsExhibit: '117899',
          a: '20.14',
          b: '15.61',
          adsText: '购物',
          oneAdsText: '单次购物',
          adsLink:
            'https://120bet.com?ch=8fxkj&sdmode=4&fbPixelId=1252910919395187',
          adsImg:
            'https://scontent-hkg1-2.xx.fbcdn.net/v/t15.13418-10/460682554_558886999902682_8079031271617377078_n.jpg?_nc_cat=102&ccb=1-7&_nc_ohc=f-Kx6ReIk5EQ7kNvgGL41V2&_nc_ht=scontent-hkg1-2.xx&stp=c0.5000x0.5000f_dst-emg0_p46x46_q75&ur=ace027&_nc_sid=58080a&oh=00_AYCKI17xwGTzkBkMF54LV9bjAMq27rcNMXVtNnVp70x0bQ&oe=66F74341',
        },
      ],
      timeArray: [],
      left_img:
        'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.30497-1/83577589_556345944958992_2558068442594803712_n.png?stp=c81.0.275.275a_cp0_dst-png_s32x32&_nc_cat=1&ccb=1-7&_nc_sid=df5472&_nc_ohc=8fbJ9fn8OBkQ7kNvgGsaj4G&_nc_ht=scontent-hkg4-1.xx&_nc_gid=AuzAEYqNBg_wDFyES19W5l2&oh=00_AYBTqf-zaAkPVwQo71SUBHrt3taQJEdibnSyYRs-_VeOEA&oe=67313C66',
    }
  },
  computed: {
    dynamicStyle() {
      return {
        width: `calc(100% - ${this.isMultipleDates ? this.offset : '170'}px)`,
      }
    },
    offset() {
      return 300 // 这里可以动态改变
    },
    // 总花费
    totalCost() {
      // 计算总和，解决浮点数精度问题
      const total = this.table_info.reduce((sum, item) => {
        const spend = parseFloat(item.adsSpend) || 0
        return sum + spend
      }, 0)

      // 保留两位小数
      return parseFloat(total.toFixed(2))
    },
    // 总点击量
    totalClick() {
      return this.table_info.reduce(
        (total, item) => total + Number(item.adsClick),
        0
      )
    },
    // 总展示量
    totalExhibit() {
      return this.table_info.reduce(
        (total, item) => total + Number(item.adsExhibit),
        0
      )
    },
    // 总成效
    totalEffectiveness() {
      return this.table_info.reduce(
        (total, item) => total + Number(item.adsEffectiveness),
        0
      )
    },
    // 总注册量
    totalResister() {
      return this.table_info.reduce(
        (total, item) => total + Number(item.adsResister),
        0
      )
    },
    totlaB() {
      return (this.totalCost / this.totalResister).toFixed(2)
    },
    totlaA() {
      return (this.totalCost / this.totalEffectiveness).toFixed(2)
    },
    //  costPerResult() {
    //   return this.table_info
    // },
    // singleRegistrationFee() {
    //   return this.totalCost / this.totalResister
    // },
  },
  mounted() {
    let day = new Date()
    day.setTime(day.getTime() - 24 * 60 * 60 * 1000)
    let s =
      day.getFullYear() +
      '年' +
      (day.getMonth() + 1 < 10
        ? '0' + day.getMonth() + 1
        : day.getMonth() + 1) +
      '月' +
      day.getDate() +
      '日'
    this.yesterdayTime = s // 获取��天的日期
    const storedData = localStorage.getItem(s)
    if (storedData) {
      this.table_info = JSON.parse(storedData).table_info
      this.startProgress()
    } else {
      this.$message({
        type: 'warning',
        message: `${s}缓存暂无数据`,
      })
    }

    this.$nextTick(() => {
      this.effectivenessTag = localStorage.getItem('effectivenessTag')
        ? localStorage.getItem('effectivenessTag')
        : '购物'
      this.oneEffectivenessTag = localStorage.getItem('oneEffectivenessTag')
        ? localStorage.getItem('oneEffectivenessTag')
        : '购物'
      this.startDateTime = localStorage.getItem('startDateTime') ?
      localStorage.getItem('startDateTime'):this.startDateTime
      this.endDateTime = localStorage.getItem('endDateTime') ?
      localStorage.getItem('endDateTime'):this.endDateTime

      this.adsIndexTable = localStorage.getItem('adsIndexTable')
        ? localStorage.getItem('adsIndexTable')
        : 0
    })
  },
  created() {
    // // 尝试从本地缓存读取数据
    // const cachedData = localStorage.getItem('table_info')
    // if (cachedData) {
    //   // 如果本地缓存中有数据，使用缓存的数据
    //   this.table_info = JSON.parse(cachedData).table_info
    // } else {
    //   // 如果没有缓存数据，模拟获取数据并存储到本地缓存
    //   this.fetchData()
    // }
  },
  methods: {
    adsTabChangeIndex(index) {
      if (index === 1) return
      this.adsIndexTable = index
    },
    adsTopTextChanged(e) {
      localStorage.setItem('adsSNumber', e)
    },
    startProgress() {
      this.showPercentage = true
      // 清除之前的定时器，如果有的话
      if (this.timer) {
        clearInterval(this.timer)
      }

      // 重置百分比为0%
      this.percentage = 0

      // 使用 Vue 的 $nextTick 确保 DOM 更新
      this.$nextTick(() => {
        const duration = 1000 // 总时间5000毫秒
        const steps = 100 // 从0%到100%，共100步
        const stepSize = 100 / steps // 每步增加的百分比
        const interval = duration / steps // 每步之间的间隔时间

        let currentPercentage = 0 // 从0%开始

        // 启动新的定时器
        this.timer = setInterval(() => {
          if (currentPercentage >= 100) {
            clearInterval(this.timer)
            this.timer = null // 清空定时器ID
            this.showPercentage = false
          } else {
            currentPercentage += stepSize
            this.percentage = Math.min(currentPercentage, 100) // 确保百分比不超过100
          }
        }, interval)
      })
    },
    // 显示某个时间点数据
    showDate(item) {
      this.table_info = item.tableInfo
      this.yesterdayTime = item.date
      this.showDiv = false
      let timer = setTimeout(() => {
        this.showDiv = true
        clearTimeout(timer)
      }, 100)
    },
    AllData() {
      // 创建一个对象来存储所有键值对
      const data = {}
      // 遍历 localStorage 中的所有键
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        const value = localStorage.getItem(key)
        data[key] = value
      }
      // 更新 localStorageData 显示所有数据
      // this.localStorageData = data;
      // 获取并存储所有时间点数据
      this.timeArray = this.parseData(data)
    },
    // 解析存储数据格式
    // 解析 JSON 对象
    parseData(data) {
      // 过滤掉无关数据并将数据转为数组形式
      const filteredData = Object.entries(data)
        .filter(([key]) => {
          // 仅保留日期格式的键
          return /^\d{4}年(0?\d{1,2})月(0?\d{1,2})日$/.test(key)
        })
        .map(([key, value]) => ({
          date: key,
          tableInfo: JSON.parse(value).table_info,
        }))
      // 按日期排序
      const sortedData = filteredData.sort((a, b) => {
        const dateA = new Date(a.date.replace(/年|月|日/g, '/'))
        const dateB = new Date(b.date.replace(/年|月|日/g, '/'))
        return dateA - dateB
      })
      return sortedData
    },
    removeLeadingZero(dateStr) {
      // 使用正则表达式提取年、月、日
      const regex = /(\d{4})年(\d{1,2})月(0?)(\d{1,2})日/
      const match = dateStr.match(regex)

      if (!match) {
        return '无效日期格式'
      }

      const year = match[1] // 年
      const month = match[2] // 月
      const day = match[4] // 日（去掉前导零）

      // 格式化为 "YYYY年MM月DD日"（月份保持两位数，日不加前导零）
      return `${year}年${month}月${day}日`
    },
    detaChange(e) {
      this.dataDeta = this.removeLeadingZero(e)
    },
    fetchData() {
      // 模拟数据获取
      setTimeout(() => {
        const fetchedData = this.table_info

        // 存储数据到本地缓存
        localStorage.setItem(
          this.dataDeta,
          JSON.stringify({
            table_info: fetchedData,
          })
        )

        // 设置数据到组件中
        this.table_info = fetchedData
      }, 1000)
    },

    // 点击增加一行数据
    clickAddTr() {
      this.table_info.push({
        id: this.table_info.length + 1,
        adsName: '',
        adsStatus: '投放中',
        adsBudget: '',
        adsSpend: 0,
        adsEffectiveness: '',
        adsResister: '',
        adsClick: '',
        adsExhibit: '',
        adsText: '',
        oneAdsText: '',
        adsLink:
          'https://120bet.com?ch=8fxkj&sdmode=4&fbPixelId=1252910919395187',
        adsImg:
          'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.30497-1/83577589_556345944958992_2558068442594803712_n.png?stp=c81.0.275.275a_cp0_dst-png_s32x32&_nc_cat=1&ccb=1-7&_nc_sid=df5472&_nc_ohc=8fbJ9fn8OBkQ7kNvgGsaj4G&_nc_ht=scontent-hkg4-1.xx&_nc_gid=AuzAEYqNBg_wDFyES19W5l2&oh=00_AYBTqf-zaAkPVwQo71SUBHrt3taQJEdibnSyYRs-_VeOEA&oe=67313C66',
      })
    },
    // 删除一行数据
    deleteRow(index) {
      if (this.table_info.length === 1)
        return this.$message.error('至少保留一条数据')
      this.table_info.splice(index, 1)
    },
    // 清除本地缓存
    clearStorage() {
      localStorage.clear()
      this.$message({
        type: 'success',
        message: '已清除本地存储',
      })
      location.reload()
    },
    // 数据存储本地
    dataStorage() {
      if (
        this.dataDeta == null ||
        this.dataDeta.length == 0 ||
        this.dataDeta == ''
      ) {
        this.$message({
          type: 'warning',
          message: '请先选择存储为几号数据',
        })
        return
      }
      // 尝试从本地缓存读取数据
      localStorage.setItem(
        this.dataDeta,
        JSON.stringify({ table_info: this.table_info })
      )
      localStorage.setItem('adsIndexTable', this.adsIndexTable)
      localStorage.setItem('effectivenessTag', this.effectivenessTag)
      localStorage.setItem('oneEffectivenessTag', this.oneEffectivenessTag)
      localStorage.setItem('endDateTime', this.endDateTime)
      localStorage.setItem('startDateTime', this.startDateTime)
      this.$message({
        type: 'success',
        message: `已存储为${this.dataDeta}数据`,
      })
    },
    formatNumberWithCommas(number) {
      // 将数字转换为字符串
      if (!number) return
      let numStr = number.toString()

      // 使用正则表达式和 replace 方法插入逗号
      return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    reload() {
      this.showDiv = false
      let timer = setTimeout(() => {
        this.showDiv = true
        clearTimeout(timer)
      }, 100)
      this.startProgress()
    },
  },
}
</script>

<style lang="scss" scoped>
.aaa_xx {
  width: 16px;
  height: 16px;
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/2qdc4_H3cyf.png);
  background-position: -51px -188px;
}
.header_16 {
  width: 16% !important;
}
.text_liner {
  text-decoration: 1px dashed #333;
  text-decoration-line: underline;
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
.mb-8 {
  margin-bottom: -8px;
}
.aaa {
  display: flex;
  align-items: center;
}
.b_bg {
  background: rgba(24, 119, 242, 0.1);
  border-radius: 6px;
}
.bb_b {
  height: 40px;
  width: 40px;
  padding-left: 8px;
  padding-right: 8px;
}
::v-deep .el-progress-bar__inner {
  height: 4px;
  background: #1877f2 !important;
}
::v-deep .el-progress-bar__outer {
  background: none !important;
}
.fonw300 {
  font-weight: 300 !important;
}
.input {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: 16px;
}
.aa_b {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 110px;
  margin-right: 16px;
  margin-bottom: 16px;
  .label_name {
    font-size: 12px;
    width: 160px;
    margin-bottom: 8px;
  }
}
.flex_center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex_start {
  justify-content: flex-start !important;
}

.flex_end {
  justify-content: flex-end !important;
}
.border_r {
  border-right: none !important;
}
.danri_text {
  height: 16px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
}
.b_1 {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/AJDFiNiy8zx.png);
  background-position: 0px -208px;
  background-size: auto;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  display: inline-block;
}
.b_2 {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/AJDFiNiy8zx.png);
  background-position: 0px -558px;
  background-size: auto;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  display: inline-block;
}
.b_3 {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/AJDFiNiy8zx.png);
  background-position: 0px -933px;
  background-size: auto;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  display: inline-block;
}
.b_4 {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/AJDFiNiy8zx.png);
  background-position: 0px -758px;
  background-size: auto;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  display: inline-block;
}
.b_5 {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/AJDFiNiy8zx.png);
  background-position: 0px -508px;
  background-size: auto;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  display: inline-block;
}
.b_6 {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/AJDFiNiy8zx.png);
  background-position: 0px -108px;
  background-size: auto;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  display: inline-block;
}
.b_7 {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/AJDFiNiy8zx.png);
  background-position: 0px -1580px;
  background-size: auto;
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  display: inline-block;
}
.span_text_2 {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/wZHjRGmJ_xq.png);
  background-position-x: 0px;
  background-position-y: -1254px;
  background-repeat: no-repeat;
  background-size: auto;
  width: 16px;
  height: 16px;
  display: inline-block;
}
.right_all_1 {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/cnkAE7QiAAY.png);
  background-position: 0px -1955px;
  background-size: auto;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  display: inline-block;
}

.right_all_2 {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/cnkAE7QiAAY.png);
  background-position: 0px -2465px;
  background-size: auto;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  display: inline-block;
}
.right_all_3 {
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/cnkAE7QiAAY.png);
  background-position: 0px -2176px;
  background-size: auto;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  display: inline-block;
}
.pilei {
  display: flex;
  flex-direction: column;
  .pilei_top {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    color: rgb(28, 30, 33);
    .pilei_icon {
      margin-left: 4px;
      width: 12px;
      height: 12px;
      background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/llvmClTohD1.png);
      background-position: -39px -273px;
    }
  }
  .pilei_bottom {
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    font-weight: 400;
  }
}
.right_tex_b {
  color: rgba(0, 0, 0, 0.5);
  font-size: 13px;
  font-weight: 400;
}
.right_text {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .right_tex {
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    font-weight: 400;
  }
  .right_text_a {
    font-weight: 700;
    font-size: 15px;
  }
}
.c_bb {
  display: flex;
  flex-direction: column;
  height: 46px;
  align-items: flex-end;
  justify-content: center;
}
.table_box {
  .left_text {
    // font-size: 14px !important;
    font-weight: 400 !important;
    font-family: Roboto, Arial, sans-serif !important;
    color: rgb(28, 30, 33) !important;
    .top_a {
      display: flex;
      height: 16px;
      justify-content: flex-end;
      .top_d {
        color: rgb(28, 30, 33);
        font-size: 15px;
      }
    }
    .top_c {
      // height: 42px;
      margin-right: 14px;
      color: rgba(0, 0, 0, 0.5);
      font-size: 13px;
      font-weight: 400;
    }
    .top_b {
      font-size: 9px;
      margin-left: 4px;
    }
  }
}
.icon_r_x_o_x {
  width: 12px;
  height: 12px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 50%;
}
.icon_r_x_o {
  width: 12px;
  height: 12px;
  background: rgb(162, 12, 23);
  border-radius: 50%;
}
.icon_r_x {
  width: 12px;
  height: 12px;
  background: rgb(99, 190, 9);
  border-radius: 50%;
}
/* CSS代码 */
.switch-box {
  width: 38px;
  margin-left: -16px;
}
.switch-box .switch {
  /* 隐藏checkbox默认样式 */
  display: none;
}
.switch-box label {
  /* 通过label扩大点击热区 */
  position: relative;
  display: block;
  margin: 1px;
  height: 22px;
  cursor: pointer;
}
.switchActive label::before {
  /* before设置前滚动小圆球 */
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -11px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #000 !important;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.06);
  /* 通过transform、transition属性控制元素过渡进而形成css3动画 */
  -webkit-transform: translateX(-9px) !important;
  -moz-transform: translateX(-9px) !important;
  transform: translateX(-9px) !important;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.switch-box label::before {
  /* before设置前滚动小圆球 */
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -10px;
  margin-left: -11px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #1877f2;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.06);
  /* 通过transform、transition属性控制元素过渡进而形成css3动画 */
  -webkit-transform: translateX(10px);
  -moz-transform: translateX(10px);
  transform: translateX(10px);
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.switchActive .switch:checked ~ label::before {
  /* 语义：被选中的类名为"switch"元素后面的label元素里的伪类元素，进行更改css样式 */
  /* 形成伪类结构选择器：":"冒号加布尔值"checked" */
  /* " Ele1 ~ Ele2 "波浪号在css的作用：连接的元素必须有相同的父元素，选择出现在Ele1后的Ele2（但不必跟在Ele1，也就是说可以并列）  */
  -webkit-transform: translateX(10px);
  -moz-transform: translateX(-10px);
  transform: translateX(-10px);
}
.switch-box .switch:checked ~ label::before {
  /* 语义：被选中的类名为"switch"元素后面的label元素里的伪类元素，进行更改css样式 */
  /* 形成伪类结构选择器：":"冒号加布尔值"checked" */
  /* " Ele1 ~ Ele2 "波浪号在css的作用：连接的元素必须有相同的父元素，选择出现在Ele1后的Ele2（但不必跟在Ele1，也就是说可以并列）  */
  -webkit-transform: translateX(-9px);
  -moz-transform: translateX(-9px);
  transform: translateX(-9px);
}
.switchActive label::after {
  /* after设置滚动前背景色 */
  content: '';
  display: block;
  border-radius: 30px;
  height: 20px;
  background-color: #e7f1fe;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border: 1px solid rgba(28, 30, 33, 0.1);
}

.switch-box label::after {
  /* after设置滚动前背景色 */
  content: '';
  display: block;
  border-radius: 30px;
  height: 20px;
  background-color: #e7f1fe;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
  border: 1px solid rgba(28, 30, 33, 0.1);
}
.switchActive .switch:checked ~ label::after {
  background-color: #dcdfe6;
}
.switch-box .switch:checked ~ label::after {
  background-color: #dcdfe6;
}
/* 默认状态 */
.one_checkbox {
  input[type='checkbox'] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    width: 24px;
    height: 24px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background-color: white;
    // line-height: 24px;
    border-radius: 6px;
    color: #fff;
    text-align: center;
  }
}
.table_box {
  background: #fff;
  color: rgb(28, 30, 33);
  font-family: Roboto, Arial, sans-serif;
  font-size: 13px;
  display: flex;
  align-items: center;
  height: 46px;
  border-top: 1px solid rgb(211, 211, 211);

  .rs_box {
    height: 46px !important;
    // line-height: 46px !important;
  }
}
.table_box:hover {
  background: #e5e5e5 !important;
}
.bottom_bb {
  background: #fff;
  height: 200px;
  width: 100%;
  border-radius: 0 0 6px 6px;
}
.bottom_table {
  position: relative;
  .header_1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49px;
    border-right: 1px solid rgb(211, 211, 211);
    height: 32px;
  }
  .header_2 {
    width: 5%;
    height: 32px;
    border-right: 1px solid rgb(211, 211, 211);
    font-weight: 700;
    font-size: 15px;
    padding-left: 8px;
    // line-height: 32px;
  }
  .header_3,
  .header_4,
  .header_5,
  .header_6,
  .header_7,
  .header_8,
  .header_9 {
    width: 20%;
    height: 32px;
    border-right: 1px solid rgb(211, 211, 211);
    padding: 0 8px;
    // line-height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left_text {
      font-weight: 700;
      font-size: 15px;
    }
    .icon_r {
      background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/dn_YRdbADMl.png);
      background-position: -43px -82px;
      background-size: auto;
      width: 12px;
      height: 12px;
      background-repeat: no-repeat;
      display: inline-block;
    }
  }
  .header_4 {
    width: 13%;
  }
  .header_5 {
    width: 14%;
  }
  .header_6 {
    width: 13%;
  }

  .header_7 {
    width: 13%;
  }
  .header_8 {
    width: 15%;
  }
  .header_9 {
    width: 13%;
  }
  .table_header {
    background: #fff;
    color: rgb(28, 30, 33);
    font-family: Roboto, Arial, sans-serif;
    font-size: 13px;
    display: flex;
    align-items: center;
    border-top: 1px solid rgb(211, 211, 211);
  }
}
.bottom_box_1 {
  border-top: 1px solid rgb(211, 211, 211);
  height: 64px !important;
  padding-left: 1px;
  .rs_box {
    height: 64px !important;
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
.top_label {
  display: flex;
  margin-top: 16px;
  align-items: center;

  .top_label_1 {
    display: flex;
    width: 360px;
    height: 40px;
    background: #fff;
    margin-right: 8px;
    border-radius: 8px 8px 0 0;
    align-items: center;
    padding: 0 16px;
    .left_icon {
      // background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/cnkAE7QiAAY.png);
      // background-position: 0px -158px;
      // background-size: auto;
      // width: 24px;
      // height: 24px;
      // background-repeat: no-repeat;
      // display: inline-block;
      background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/cnkAE7QiAAY.png);
      // background-position: 0px -1265px;
      background-position-x: 0px;
      background-size: auto;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
      display: inline-block;
    }
    .left_icon_1 {
      // background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/cnkAE7QiAAY.png);
      // background-position: 0px -1244px;
      // background-size: auto;
      // width: 20px;
      // height: 20px;
      // background-repeat: no-repeat;
      // display: inline-block;
    }
    .left_icon_2 {
      // background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/cnkAE7QiAAY.png);
      // background-position: 0px -1223px;
      // background-size: auto;
      // width: 20px;
      // height: 20px;
      // background-repeat: no-repeat;
      // display: inline-block;
      // background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/cnkAE7QiAAY.png);
      // background-position: 0px -33px;
      // background-size: auto;
      // width: 24px;
      // height: 24px;
      // background-repeat: no-repeat;
      // display: inline-block;
    }
    .left_text {
      font-weight: 700;
      letter-spacing: 0.5px;
      margin-left: 8px;
    }
  }
}
.img_bx {
  width: 16px;
  height: 16px;
  background: url(https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/wZHjRGmJ_xq.png);
  background-position: 0px -438px;
  cursor: pointer;
}
.right_box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 36px;
  background: rgb(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-left: 8px;

  .mate {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;
    // line-height: 36px;
    margin: 0 8px;
  }
  .bottom_sour {
    width: 9px;
    height: 16px;
    background-image: url('../../assets/L-LpLWhHnK3.png');
    background-position: 0px -427px;
    padding: 0 4px;
  }
}
.input_box {
  height: 36px;
  width: calc(100% - 170px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  background: #fff;
  border-radius: 8px;
  // padding: 0 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    // line-height: 32px;
    border-radius: 0% 8px 8px 0%;
    letter-spacing: 1px;
  }
}
.fun {
  padding: 32px;
  .click_add_tr {
    margin-bottom: 16px;
    position: relative;
  }
}
._2ww0 {
  align-items: stretch;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  cursor: pointer;
  caret-color: transparent;
}
.left {
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
  margin-top: 8px;
  height: 534px;
  width: 56px;
}
.b {
  height: 24px;
  width: 24px;
  padding: 8px;
}

.middle {
  padding: 16px;
  background: rgb(245, 246, 247);
  width: calc(100% - 86px);

  .null_box {
    background: #fff;
    height: 44px;
    font-size: 13px;
    padding: 0 16px;
    color: rgba(28, 43, 51, 0.65);
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
}
.topOne_a_1 {
  height: 24px;
  font-size: 18px;
  font-weight: 700;
  margin-right: 16px;
}
.showeli {
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    .span_text_1 {
      width: 220px;
      overflow: hidden; //超出的文本隐藏
      text-overflow: ellipsis; //溢出用省略号显示
      white-space: nowrap; //溢出不换行
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
    }
  }
}
.text_c {
  color: rgb(20, 97, 204) !important;
  font-size: 14px;
  font-weight: 400;
}
.topOne_b {
  height: 44px;
  width: 410px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.topOne_b_1 {
  height: 36px;
  width: 150px;
  display: flex;
  justify-content: space-between;
}
.topOne_b_1_1 {
  height: 36px;
  font-size: 14px;
  font-weight: 400;
  line-height: 36px;
}
.topOne_b_1_2 {
  height: 36px;
  width: 40px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
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
  // line-height: 32px;
  border-radius: 6px;
  text-align: center;
  color: #000;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  .topOne_b_3_1 {
    width: 16px;
    height: 16px;
    background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/llvmClTohD1.png);
    background-position: -34px -239px;
  }
}
.right {
  background-color: rgb(97, 97, 98);
  box-shadow: rgba(0, 0, 0, 0.2) -2px 2px 4px -1px;
  color: rgb(28, 30, 33);
  width: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.right_all {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
}

.tapTwo_b {
  height: 48px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: end;
  margin-left: 10px;
}
.classify {
  height: 44px;
  width: 596px;
  border-bottom: 1px;
  margin-left: 4px;
  margin-right: 4px;
  background: #f9f9f6;
  padding: 0 0 0 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
}

.classify_select {
  height: 50px;
  width: 596px;
  border-bottom: 1px;
  margin-left: 4px;
  margin-right: 4px;
  background: #fff;
  padding: 0 0 0 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: #dfdfdc 1px -3px 4px;
  color: #0971fd;
  font-weight: bold;
}
.classify_a {
  width: 21px;
  height: 21px;
  margin-right: 6px;
}

.search {
  height: 44px;
  width: 100%;
  .null_box {
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

.content {
  background: #fff;
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content_a {
  padding: 0 10px;
  display: flex;
  align-items: center;
}

.content_b {
  display: flex;
  align-items: center;
}

.margin-r-6 {
  margin-right: 6px;
}

::v-deep .el-button--info {
  background: #e5e5e3;
  border-color: #e5e5e3;
  color: #5a5a59;
}

::v-deep .el-switch__core:after {
  background: #000000;
}

::v-deep .el-switch__core {
  border: 1px solid #ccc !important;
}

.link_box {
  min-width: 550px !important;
  width: auto !important;
  padding: 0 8px !important;
}
</style>
