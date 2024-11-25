<template>
  <div class="content-box">
    <div class="content-box__left">
      <div class="left_top_box">
        <div class="close" @click="closeMask">
          <div class="c_icon"></div>
        </div>
        <div class="close_no">
          <div class="c_icon_1"></div>
        </div>
        <div class="close"><div class="c_icon_2"></div></div>
        <div class="close_no"><div class="c_icon_3"></div></div>
      </div>
      <div class="center_top_box">
        <div class="c_icon_4"></div>
      </div>
    </div>
    <div class="content-box__middle">
      <div class="s_box_inner">
        <div class="s_box">
          <div class="s_box_inner"></div>
          <div class="s_box_inner_1">搜索</div>
        </div>
      </div>
      <div class="s_box_inner_2"></div>
      <div class="s_box_inner_3">
        <tree-node
          v-for="(node, index) in treeData"
          :key="index"
          :item="node"
          :level="0"
        >
        </tree-node>
      </div>
    </div>
    <div class="content-box__right">
      <div class="right_top_box_44">
        <div class="left_top_left">
          <div class="left_icon_bor">
            <div class="left_icon"></div>
          </div>
          <div class="step">
            <div class="step_one">
              <div class="step_one_icon"></div>
              <div class="step_one_text step_one_box">FB18-F01-02</div>
            </div>
            <div class="step_arrow"></div>
            <div class="step_two">
              <div class="step_two_icon"></div>
              <div class="step_one_text">219个广告组</div>
            </div>
            <div class="step_arrow"></div>
            <div class="step_three">
              <div class="step_three_icon"></div>
              <div class="step_one_text">219个广告</div>
            </div>
          </div>
        </div>
        <div class="right_top_right">
          <div class="right_text">帐户已停用</div>
          <div class="line"></div>
          <div class="right_check">
            <div class="right_check_icon"></div>
          </div>
          <div class="elise">
            <div class="elise_icon"></div>
          </div>
        </div>
      </div>
      <div class="right_top_height_44">
        <div class="left_edit left_edit_mr">
          <div class="left_edit_icon"></div>
          <div class="left_edit_text">编辑</div>
        </div>
        <div class="left_edit">
          <div class="right_edit_icon"></div>
          <div class="left_edit_text">检查</div>
        </div>
      </div>
      <div class="top_max_box">
        <div class="top_max1" v-if="false">
          <div class="top_max1_t_icon">
            <div class="top_max1_t_icon_l"></div>
            <div class="top_max1_t_icon_t">广告系列名称</div>
          </div>
          <div class="top_max2_t_icon">
            <div class="left_max2_input">广告组名称</div>
            <div class="right_max2_btn">创建模板</div>
          </div>
        </div>

        <!-- 广告 -->
        <template>
          <div class="gg_right_box">
            <div class="l_gg_right_box">
              <div class="top_max1 top_max_guano" style="margin-top: 16px">
                <div class="top_max1_t_icon">
                  <div class="top_max1_t_icon_l"></div>
                  <div class="top_max1_t_icon_t">广告</div>
                </div>
                <div class="top_max2_t_icon">
                  <div class="left_max2_input">广告组名称</div>
                  <div class="right_max2_btn">创建模板</div>
                </div>
              </div>
              <div class="top_max1 top_max_guano" style="margin-top: 16px">
                <div class="top_max1_t_icon ju_sb">
                  <div class="top_max1_t_icon_t top_max1_t_icon_no">
                    合创广告
                  </div>
                  <div class="top_max1_t_icon_r">
                    <div class="top_max1_t_icon_r_l_t">关</div>
                    <div class="top_max1_t_icon_r_l">
                      <div class="top_max1_t_icon_r_l_text"></div>
                    </div>
                  </div>
                </div>
                <div class="top4_t">
                  与创作者、品牌和其他商企合作投放广告。这些广告会在标题中同时展示两个身份。<span
                    class="div_show_more_text"
                    >详细了解</span
                  >
                </div>
              </div>
              <div class="top_max1 top_max_guano" style="margin-top: 16px">
                <div class="top_max1_t_icon">
                  <div class="top_max1_t_icon_l"></div>
                  <div class="top_max1_t_icon_t">身份</div>
                </div>
                <div class="top4_t">
                  选择将与这条广告关联的 Facebook 公共主页和 Instagram 账户。
                </div>
                <div class="div_text3">
                  <div class="div_text3_box">
                    <div class="div_text3_1">*</div>
                    <div class="div_text3_top">Facebook 公共主页</div>
                    <div class="div_text3_box_icon"></div>
                  </div>
                </div>
                <div class="div_select">
              <div class="left_text left_text_d_flex">
                <img class="n_img" src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/463407696_122114165570531414_1528360974430912850_n.jpg?stp=c0.67.928.928a_cp0_dst-jpg_s50x50_tt6&_nc_cat=106&ccb=1-7&_nc_sid=6738e8&_nc_ohc=dOMLTE29wMcQ7kNvgFhGULy&_nc_zt=24&_nc_ht=scontent-hkg4-1.xx&_nc_gid=AUphsE-CyyMgnGYZ_eT9kc7&oh=00_AYBQJj8eLp3-sGo9xMvOZWS1MWVy6b1L7y5_BTp5_-bGKg&oe=6749078C" />
                <div class="left_text_t">Abraham Declan Colin</div>
              </div>
              <div class="right__icon"></div>
            </div>
              </div>
            </div>
            <div class="gg_right_box_bottom">
              <div class="r_box"></div>
            </div>
          </div>
        </template>

        <template>
          <!-- 广告组 -->
          <div class="top_max1" style="margin-top: 16px">
            <div class="top_max1_t_icon">
              <div class="top_max1_t_icon_l"></div>
              <div class="top_max1_t_icon_t">转化</div>
            </div>
            <div class="g_div_text">转化发生位置</div>
            <div class="g_div_text1">选择要在哪里推动销量。</div>
            <div class="g_div_text2">转化发生位置简介</div>

            <div class="g_div_arr">
              <div
                class="item_box"
                v-for="(item, index) in groupData"
                :key="index"
              >
                <div class="item_left">
                  <div class="div_y">
                    <div class="div_yy" v-if="item.isSelect"></div>
                  </div>
                </div>
                <div class="item_right">
                  <div class="item_right_text">{{ item.top_text }}</div>
                  <div class="item_right_b">{{ item.bottom_text }}</div>
                </div>
              </div>
            </div>

            <div class="div_text3 mb24px">
              <div class="div_text3_box">
                <div class="div_text3_top">成效目标</div>
                <div class="div_text3_box_icon"></div>
              </div>
              <div class="div_select div_s_bg">
                <div class="left_text">转化量最大化</div>
                <div
                  class="right__icon"
                  :class="[isGroupInfo ? 'right__icon_hui' : '']"
                ></div>
              </div>
            </div>

            <div class="div_text3 mb24px">
              <div class="div_text3_box">
                <div class="div_text3_top">数据集</div>
                <div class="div_text3_box_icon"></div>
              </div>
              <div class="div_select div_s_bg">
                <div class="left_text">
                  牛 购物VO-F18-2线 Gan-9、11线 青雉F18-01
                </div>
                <div
                  class="right__icon"
                  :class="[isGroupInfo ? 'right__icon_hui' : '']"
                ></div>
              </div>
            </div>

            <div class="div_text3 mb24px">
              <div class="div_text3_box">
                <div class="div_text3_top">转化事件</div>
                <div class="div_text3_box_icon"></div>
              </div>
              <div class="div_select div_s_bg">
                <div class="left_text">购物</div>
                <div
                  class="right__icon"
                  :class="[isGroupInfo ? 'right__icon_hui' : '']"
                ></div>
              </div>
            </div>

            <div class="div_text3">
              <div class="div_text3_box">
                <div class="div_text3_top">单次成效费用目标∙ 非必要</div>
                <div class="div_text3_box_icon"></div>
              </div>
              <div class="div_select">
                <div class="left_text">$X.XX</div>
                <div class="more_icon">USD</div>
              </div>
            </div>
            <div class="div_text2_b">
              使用最高数量竞价策略时，Meta
              将尽力花完全部预算，并获得最多购物。如果有必要将单次成效平均费用维持在特定值左右，请输入单次成效费用目标。
            </div>
            <div class="group_line"></div>
            <div class="div_show_more">
              <div class="div_show_more_text">显示更多选项</div>
              <div class="div_show_more_icon"></div>
            </div>
          </div>
          <div class="top_max1" style="margin-top: 16px">
            <div class="top_max1_t_icon">
              <div class="top_max1_t_icon_l"></div>
              <div class="top_max1_t_icon_t">动态素材</div>
            </div>
            <div class="g_div_1">
              <div class="g_div_1_right">
                <div class="g_div_1_left_icon"></div>
                <div class="g_div_1_right_text">动态素材已停用</div>
              </div>
              <div class="g_div_1_right_text1">
                不过，你可以在广告创建流程中选择灵活广告格式。这让你能够继续提供创意元素，以便系统自动生成为你的受众量身定制的组合。我们还会以预测可能表现最佳的格式展示你的广告。<span
                  class="color_text"
                  >关于灵活广告格式
                </span>
              </div>
            </div>
          </div>

          <div class="top_max1" style="margin-top: 16px">
            <div class="top_max1_t_icon">
              <div class="top_max1_t_icon_l"></div>
              <div class="top_max1_t_icon_t">预算和排期</div>
            </div>
            <div class="div_text3">
              <div class="div_text3_box">
                <div class="div_text3_top">预算</div>
                <div class="div_text3_box_icon"></div>
              </div>
              <div class="div_text">
                你的预算已设置为使用<span class="color_text"
                  >赋能型广告系列预算优化</span
                >，你可以在广告系列层级更新预算。
              </div>
            </div>
            <div class="div_text3">
              <div class="div_text3_box">
                <div class="div_text3_top">排期</div>
                <div class="div_text3_box_icon"></div>
              </div>
            </div>
            <div class="div_text3">
              <div class="div_text3_box">
                <div class="div_text3_top">开始日期</div>
              </div>
              <div class="div_date_box">
                <div class="left_box">
                  <div class="left_icon"></div>
                  <div class="left_text">2024年11月24日</div>
                </div>
                <div class="right_box left_box">
                  <div class="right_icon"></div>
                  <div class="right_text left_text">
                    16:34<span class="ml4">-03</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="div_text3">
              <div class="div_text3_box">
                <div class="div_text3_top">结束日期</div>
              </div>
              <div class="cus_select">
                <div class="left_box"></div>
                <div class="right_text">设置结束日期</div>
              </div>
            </div>
            <div class="group_line"></div>
            <div class="div_show_more">
              <div class="div_show_more_text">隐藏选项</div>
              <div class="div__more_icon div_show_more_icon"></div>
            </div>
            <div class="div_text3">
              <div class="div_text3_box">
                <div class="div_text3_top">广告组花费限额</div>
                <div class="div_text3_box_icon"></div>
              </div>
              <div class="div_text">未添加</div>
            </div>
            <div class="div_text3">
              <div class="div_text3_box">
                <div class="div_text3_top">预算排期</div>
                <div class="div_text3_box_icon"></div>
              </div>
              <div class="div_text" style="margin-top: 4px">
                <span class="color_text">为广告系列设置添加条目</span>
              </div>
            </div>
          </div>
          <div class="top_max1" style="margin-top: 16px">
            <div class="top_max1_t_icon">
              <div class="top_max1_t_icon_l"></div>
              <div class="top_max1_t_icon_t">受众控制选项</div>
              <div class="div_text3_box_icon"></div>
            </div>
            <div class="div_text">
              为广告系列中的广告设置条件来控制投放范围。<span class="color_text"
                >详细了解</span
              >
            </div>
            <div class="g_div_1" style="margin-top: 16px">
              <div class="g_div_1_right">
                <div class="g_div_1_left_icon"></div>
                <div class="div_text">
                  你可以为这个广告账户设置适用其下所有广告系列的受众控制选项。
                </div>
              </div>
              <div class="g_div_1_right_text1">
                <span class="color_text" style="letter-spacing: 0px"
                  >请在广告设置中查看受众控制选项</span
                >
              </div>
            </div>
            <div class="use_box">
              <div class="use_box_left">使用预存受众</div>
              <div class="use_box_icon"></div>
            </div>
            <div class="group_line"></div>
            <div class="div_text3">
              <div class="div_text3_box">
                <div class="div_text3_1">*</div>
                <div class="div_text3_top">地区</div>
                <div class="div_text3_box_icon"></div>
              </div>
              <div class="div_bahn3 div_bahn">包含的地区：</div>
              <div class="div_bahn">
                <div class="div_bahn1"></div>
                <div class="div_bahn2">巴西</div>
              </div>
            </div>
            <div class="group_line"></div>
            <div class="div_show_more">
              <div class="div_show_more_text">隐藏选项</div>
              <div class="div__more_icon div_show_more_icon"></div>
            </div>
            <div class="div_text3">
              <div class="div_text3_box">
                <div class="div_text3_top">年龄下限</div>
                <div class="div_text3_box_icon"></div>
              </div>
              <div class="div_bahn3 div_bahn">20</div>
            </div>
            <div class="div_text3">
              <div class="div_text3_box">
                <div class="div_text3_top">排除这些自定义受众</div>
                <div class="div_text3_box_icon"></div>
              </div>
              <div class="div_select div_select_start">
                <div class="left_search"></div>
                <div class="left_text">搜索现有受众</div>
              </div>
            </div>
            <div class="div_text3">
              <div class="div_text3_box">
                <div class="div_text3_top">语言</div>
                <div class="div_text3_box_icon"></div>
              </div>
              <div class="div_bahn3 div_bahn">所有语言</div>
            </div>
          </div>
        </template>
        <!-- 广告系列 -->
        <template v-if="false">
          <div class="top_max1" style="margin-top: 16px">
            <div class="top_max1_t_icon">
              <div class="top_max1_t_icon_l"></div>
              <div class="top_max1_t_icon_t">特殊广告类别</div>
            </div>
            <div class="div_text">
              如果你的广告与金融产品和服务、就业、住房、社会议题、选举或政治相关，请声明广告类别。各个国家/地区的要求有所不同。
              <span class="color_text">详细了解特殊广告类别</span>
            </div>
            <div class="div_text2">
              <div class="div_text2_top">声明特殊广告类别的好处</div>
              <div class="div_text2_b">
                准确声明广告类别，有助于你投放符合广告发布守则的广告，降低广告遭拒的风险。
              </div>
            </div>
            <div class="div_btn1 right_max2_btn">声明广告类别</div>
            <div class="div_text3">
              <div class="div_text3_top">类别</div>
              <div class="div_text3_b">
                请选择最符合广告系列推广内容的类别。
              </div>
            </div>
            <div class="div_select">
              <div class="left_text">声明类别（如适用）</div>
              <div class="right__icon"></div>
            </div>
          </div>
          <div class="top_max1" style="margin-top: 16px">
            <div class="top_max1_t_icon">
              <div class="top_max1_t_icon_l"></div>
              <div class="top_max1_t_icon_t">广告系列详情</div>
            </div>
            <div class="div_text3 mb24px">
              <div class="div_text3_top">购买类型</div>
              <div class="div_select div_s_bg">
                <div class="left_text">竞拍</div>
                <div class="right__icon"></div>
              </div>
            </div>
            <div class="div_text3 mb24px">
              <div class="div_text3_box">
                <div class="div_text3_top">广告系列目标</div>
                <div class="div_text3_box_icon"></div>
              </div>
              <div class="div_select div_s_bg">
                <div class="left_text">销量</div>
                <div class="right__icon"></div>
              </div>
            </div>
            <div class="div_show_more">
              <div class="div_show_more_text">显示更多选项</div>
              <div class="div_show_more_icon"></div>
            </div>
          </div>
          <div class="top_max1" style="margin-top: 16px">
            <div class="div_2top">
              <div class="top_max1_t_icon">
                <div class="top_max1_t_icon_t ml0">进阶赋能型目录广告</div>
                <div class="top_max1_t_icon_2"></div>
              </div>
              <div class="right_check_box">
                <div class="right_check_box_t">关</div>
                <div class="right_check_box_1">
                  <div class="right_check_box_icon"></div>
                </div>
              </div>
            </div>
            <div class="div_3top_text">
              <div class="top3_t">利用进阶赋能型目录广告创建目录并提升销量</div>
              <div class="top4_t">
                根据<span class="div_show_more_text">people</span
                >独特的兴趣、意图和操作，使用目录自动向其推广相关商品或服务。<span
                  class="div_show_more_text"
                  >详细了解</span
                >
              </div>
            </div>
            <div class="div_4top_box">创建目录</div>
          </div>
        </template>
      </div>

      <!-- 页脚 -->
      <div class="footer_box">
        <div class="footer_text">
          点击“发布”按钮，即表明你同意 Facebook 的<span class="footer_span"
            >条款和广告发布准则</span
          >。
        </div>
        <div class="footer_btn">
          <div class="footer_btn_l">关闭</div>
          <div class="footer_btn_r">
            <div class="footer_btn_r1 footer_btn_l">放弃草稿</div>
            <div class="footer_btn_r2 footer_btn_l">发布</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TreeNode from './TreeNode.vue'
export default {
  components: {
    TreeNode,
  },
  data() {
    return {
      isGroupInfo: true,
      // 树形数据
      treeData: [
        {
          name: 'FB18-F01-02',
          children: [
            {
              name: '子节点 1-1',
              children: [
                {
                  name: '子节点 1-1-1',
                  children: [],
                },
                {
                  name: '子节点 1-1-2',
                  children: [],
                },
              ],
            },
            {
              name: '子节点 1-2',
              children: [],
            },
          ],
        },
        {
          name: 'FB18-F01-02',
          children: [
            {
              name: '子节点 2-1',
              children: [],
            },
          ],
        },
      ],
      // 组数据
      groupData: [
        {
          isSelect: true,
          top_text: '网站',
          bottom_text: '提升网站中的销量和转化量。',
        },
        {
          isSelect: false,
          top_text: '应用',
          bottom_text: '提升应用中的销量和转化量。',
        },
        {
          isSelect: false,
          top_text: '网站和应用',
          bottom_text: '提升网站或应用中的销量和转化量。',
        },
        {
          isSelect: false,
          top_text: '消息应用',
          bottom_text:
            '借助 Messenger、Instagram 和 WhatsApp 提升销量和转化量。',
        },
        {
          isSelect: false,
          top_text: '通话',
          bottom_text: '通过打电话提升销量和转化量。',
        },
      ],

      groupData2: [
        {
          name: '组1',
          children: [],
        },
      ],
    }
  },
  methods: {
    closeMask() {
      this.$emit('closeMask')
    },
  },
}
</script>

<style lang="scss" scoped>
.ml4 {
  margin-left: 8px;
}
.content-box__right {
  width: 990px;
  position: relative;
  background-image: radial-gradient(
      103.89% 81.75% at 95.41% 106.34%,
      rgb(234, 248, 239) 6%,
      rgba(234, 248, 239, 0) 79.68%
    ),
    radial-gradient(
      297.85% 151.83% at -21.39% 8.81%,
      rgb(250, 241, 241) 0%,
      rgb(250, 241, 241) 15.29%,
      rgb(243, 237, 245) 21.39%,
      rgb(229, 240, 250) 40.79%
    );
  .div_text3_1 {
    margin-right: 4px;
  }
  .div_text3_box_icon {
    -webkit-mask-position-x: -39px;
    -webkit-mask-position-y: -273px;
    mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/2qdc4_H3cyf.png);
    width: 12px;
    height: 12px;
    background-color: rgb(28, 43, 51);
    color: rgb(28, 43, 51);
    margin-left: 4px;
  }
  .footer_box {
    width: 98%;
    padding: 12px;
    position: absolute;
    bottom: -2px;
    right: 0;
    background: #fff;
    .footer_text {
      margin-bottom: 16px;
      color: rgb(28, 43, 51);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
      font-size: 14px;
      font-weight: 400;
      .footer_span {
        color: rgb(56, 88, 152);
      }
    }
    .footer_btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgb(28, 43, 51);
      cursor: pointer;
      font-family: 'Optimistic Display', system-ui, sans-serif;
      font-size: 14px;
      font-weight: 500;
      .footer_btn_l {
        width: 60px;
        height: 34px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        text-align: center;
        line-height: 34px;
      }
      .footer_btn_r {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .footer_btn_r1 {
          margin-right: 16px;
          width: 88px;
          color: rgba(28, 43, 51, 0.6);
        }
        .footer_btn_r2 {
          width: 60px;
          background: rgb(195, 225, 200);
          color: rgba(255, 255, 255, 0.9);
          border: none !important;
        }
      }
    }
  }
  .top_max_box {
    padding: 16px;
    overflow: hidden;
    overflow-y: auto;
    height: 720px;
    .top_max_guano {
      width: 412px !important;
      .top_max1_t_icon_no {
        margin-left: 0px !important;
      }
    }
    .gg_right_box {
      display: flex;
      justify-content: space-between;

      .l_gg_right_box {
      }
      .gg_right_box_bottom {
        width: 500px;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        .r_box {
          width: 90%;
          height: 200px;
          background: #000;
        }
      }
    }
    .top_max1 {
      width: 583px;
      padding: 16px;
      background: #fff;
      color: rgb(28, 30, 33);
      font-size: 13px;
      font-family: Roboto, Arial, sans-serif;
      border-radius: 4px;
      font-weight: 400;
      .g_div_text {
        color: rgb(28, 43, 51);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .g_div_text2 {
        color: rgb(10, 120, 190);
        margin-top: 8px;
      }
      .g_div_arr {
        margin-top: 32px;
        .item_box {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          .item_left {
            margin-right: 8px;
          }
          .item_right {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            color: rgb(28, 43, 51);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 12px;
            font-weight: 400;
            .item_right_text {
              font-size: 14px;
            }
          }
          .div_y {
            width: 22px;
            height: 22px;
            border: 1px solid rgb(203, 210, 217);
            background: rgb(241, 244, 247);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            .div_yy {
              width: 11px;
              height: 11px;
              background: rgb(229, 232, 240);
              border-radius: 50%;
            }
          }
        }
      }
      .top_max1_t_icon_r {
        display: flex;
        .top_max1_t_icon_r_l_t {
          color: rgb(28, 43, 51);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 14px;
          font-weight: 400;
        }
        .top_max1_t_icon_r_l {
          width: 36px;
          height: 20px;
          border: 1px solid rgb(203, 210, 217);
          border-radius: 16px;
          background: #fff;
          margin-left: 8px;
          display: flex;
          align-items: center;
          padding-left: 2px;
          .top_max1_t_icon_r_l_text {
            width: 16px;
            height: 16px;
            background: #000;
            border-radius: 50%;
          }
        }
      }
      .div_2top {
        display: flex;
        justify-content: space-between;

        .right_check_box {
          display: flex;
          align-items: center;
          margin-top: -12px;
        }
        .right_check_box_t {
          margin-right: 8px;
          color: rgba(28, 43, 51, 0.6);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 14px;
          font-weight: 400;
        }
        .right_check_box_1 {
          width: 36px;
          height: 20px;
          background-color: rgb(241, 244, 247);
          border: 1px solid rgb(203, 210, 217);
          border-radius: 16px;
          display: flex;
          align-items: center;
          padding-left: 2px;
          .right_check_box_icon {
            width: 16px;
            height: 16px;
            background: rgba(40, 57, 67, 0.6);
            border-radius: 50%;
          }
        }
      }
      .color_text {
        color: rgb(10, 120, 190);
      }
      .div_text {
        color: rgb(28, 43, 51);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 14px;
        font-weight: 400;
      }
      .div_4top_box {
        margin-top: 8px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        background: rgba(0, 0, 0, 0);
        width: 100%;
        height: 34px;
        text-align: center;
        line-height: 36px;
        border-radius: 4px;
        color: rgb(28, 43, 51);
        font-family: 'Optimistic Display', system-ui, sans-serif;
        font-size: 14px;
        font-weight: 500;
      }
      .div_3top_text {
        .top3_t {
          color: rgb(28, 43, 51);
          font-family: 'Optimistic Display', system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
        }
        .top4_t {
          color: rgb(28, 43, 51);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 14px;
          font-weight: 400;
        }
      }
      .div_btn1 {
        width: 116px !important;
        margin-left: 0px !important;
        margin-top: 24px;
      }
      .div_show_more_text {
        color: rgb(10, 120, 190);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 14px;
        font-weight: 400;
      }
      .right_max2_btn {
        width: 88px;
        height: 34px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        color: rgb(28, 43, 51);
        border-radius: 4px;
        text-align: center;
        line-height: 36px;
        margin-left: 12px;
      }
      .div_show_more {
        display: flex;
        align-items: center;
        .div__more_icon {
          mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/rmRrb0G9Mn7.png) !important;
          -webkit-mask-position-x: 0px !important;
          -webkit-mask-position-y: -868px !important;
        }
        .div_show_more_icon {
          margin-left: 4px;
          background-color: rgb(10, 120, 190);
          color: rgb(10, 120, 190);
          mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/rmRrb0G9Mn7.png);
          width: 12px;
          -webkit-mask-position-x: 0px;
          -webkit-mask-position-y: -855px;
          height: 12px;
        }
      }
      .left_search {
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/nE-IqUyaDyq.png);
        background-position-x: -150px;
        background-position-y: -1271px;
        background-repeat: no-repeat;
        background-size: auto;
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
           .left_text_d_flex{
              display: flex;
              align-items: center;
              .n_img{
              width: 16px;height: 16px;border-radius: 50%;
              margin-right: 8px;
              }
              .left_text_t{
                color: rgb(28, 43, 51);
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
font-size: 14px;
font-weight: 400;
              }
            }
      .div_text3 {
        margin-top: 16px;
        color: rgb(28, 43, 51);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        .div_text3_top {
          font-size: 14px;
          font-weight: 700;
        }
        .div_text3_box {
          display: flex;
          align-items: center;
        }
        .div_bahn3 {
          margin-top: 8px;
        }
        .div_bahn {
          display: flex;
          align-items: center;
          font-family: Roboto, Arial, sans-serif;
          font-size: 14px;
          overflow-wrap: normal;
          text-align: left;
          color: rgba(0, 0, 0, 0.85);
          .div_bahn1 {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #000;
            margin-right: 8px;
          }
        }
        .cus_select {
          display: flex;
          align-items: center;
          margin-top: 8px;
          .left_box {
            width: 24px;
            height: 24px;
            border: 1px solid rgb(203, 210, 217);
            border-radius: 4px;
            margin-right: 8px;
          }
        }
        .div_date_box {
          display: flex;
          width: 100%;
          margin-top: 8px;
          .right_box {
            border-radius: 0 4px 4px 0 !important;
            border-right: 1px solid rgb(203, 210, 217) !important;
          }
          .right_icon {
            mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/-GyEkqKwLX8.png);
            background-color: rgba(40, 57, 67, 0.6);
            color: rgba(40, 57, 67, 0.6);
            width: 16px;
            -webkit-mask-position-x: -21px;
            -webkit-mask-position-y: -194px;
            height: 16px;
          }

          .left_box {
            display: flex;
            align-items: center;
            background-color: rgb(241, 244, 247);
            border: 1px solid rgb(203, 210, 217);
            border-right: none;
            width: 50%;
            padding: 7px 11px;
            border-radius: 4px 0 0 4px;

            .left_text {
              color: rgba(28, 43, 51, 0.6);
              font-weight: 400;
              font-size: 14px;
              margin-left: 8px;
            }
       
            .left_icon {
              background-color: rgba(40, 57, 67, 0.6);
              color: rgba(40, 57, 67, 0.6);
              mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/cX7DKT2CkS9.png);
              width: 16px;
              -webkit-mask-position-x: -244px;
              -webkit-mask-position-y: -1817px;
              height: 16px;
            }
          }
        }

        .div_text3_b {
          font-size: 12px;
          font-weight: 400;
        }
      }
      .div_text2 {
        margin-top: 24px;
        .div_text2_top {
          color: rgb(28, 43, 51);
          font-family: 'Optimistic Display', system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .div_text2_b {
          color: rgb(28, 43, 51);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 14px;
          font-weight: 400;
        }
      }
      .group_line {
        margin: 16px 0;
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.15);
      }
      .use_box {
        display: flex;
        align-items: center;
        margin-top: 4px;
      }
      .use_box_left {
        font-family: Roboto, Arial, sans-serif;
        font-size: 12px;
      }
      .use_box_icon {
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/eZDoyho77o1.png);
        background-position-x: 0px;
        background-position-y: -149px;
        background-repeat: no-repeat;
        background-size: auto;
        width: 12px;
        height: 12px;
        margin-left: 4px;
      }

      .g_div_1 {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
          rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        border-radius: 4px;
        border-left: 4px solid rgb(10, 120, 190);
        padding: 12px;
        .g_div_1_right {
          display: flex;
          align-items: center;
          margin-bottom: 4px;
        }
        .g_div_1_left_icon {
          margin-right: 8px;
          mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/HGmJ44gM4Ce.png);
          background-color: rgb(10, 120, 190);
          color: rgb(10, 120, 190);
          width: 16px;
          -webkit-mask-position-x: 0px;
          -webkit-mask-position-y: -475px;
          height: 16px;
        }
        .g_div_1_right_text1 {
          color: rgb(28, 43, 51);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 14px;
          font-weight: 400;
          margin-left: 22px;
          letter-spacing: 1px;
        }
        .g_div_1_right_text {
          color: rgb(28, 43, 51);
          font-family: 'Optimistic Display', system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
        }
      }
      .ju_sb {
        justify-content: space-between !important;
      }
      .top_max1_t_icon {
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        .top_max1_t_icon_t {
          color: rgb(28, 43, 51);
          font-family: 'Optimistic Display', system-ui, sans-serif;
          font-size: 16px;
          font-weight: 700;
          margin-left: 8px;
        }
        .top_max1_t_icon_r {
        }
      }
      .div_s_bg {
        background: rgb(241, 244, 247);
      }
      .mb24px {
        margin-bottom: 24px;
      }
      .div_select_start {
        justify-content: flex-start !important;
      }
      .div_select {
        margin-top: 8px;
        border: 1px solid rgb(203, 210, 217);
        height: 34px;
        border-radius: 4px;
        padding: 0 12px;
        line-height: 34px;
        color: rgba(28, 43, 51, 0.65);
        font-size: 14px;
        font-weight: 400;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        .right__icon {
          width: 16px;
          height: 16px;
          background-color: rgb(28, 43, 51);
          color: rgb(28, 43, 51);
          -webkit-mask-position-x: 0px;
          -webkit-mask-position-y: -427px;
          mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/L-LpLWhHnK3.png);
        }
        .right__icon_hui {
          background-color: rgba(40, 57, 67, 0.6) !important;
          color: rgba(40, 57, 67, 0.6) !important;
        }
      }
      .top_max2_t_icon {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left_max2_input {
          border: 1px solid rgb(203, 210, 217);
          width: calc(100% - 88px);
          height: 34px;
          border-radius: 4px;
          padding-left: 12px;
          line-height: 34px;
          color: rgb(28, 43, 51);
        }
      }
    }
    .top_max1_t_icon_l {
      mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/-GyEkqKwLX8.png);
      width: 16px;
      height: 16px;
      -webkit-mask-position-x: -21px;
      -webkit-mask-position-y: -177px;
      background-color: rgb(0, 126, 89);
      color: rgb(0, 126, 89);
    }
    .ml0 {
      margin-left: 0px !important;
    }
    .top_max1_t_icon_2 {
      background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/muYt7uBOIxe.png);
      background-position-x: -34px;
      background-position-y: -425px;
      width: 12px;
      height: 12px;
      margin-left: 4px;
    }
  }
  .right_top_box_44 {
    height: 44px;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 12px;
    justify-content: space-between;
    .step_arrow {
      background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/OuLIowoBdDh.png);
      background-position-x: -107px;
      background-position-y: -327px;
      background-repeat: no-repeat;
      height: 12px;
      width: 12px;
      margin: 0 8px;
    }
    .right_top_right {
      display: flex;
      align-items: center;
      .right_text {
        font-size: 14px;
        font-weight: 400;
        color: rgba(28, 43, 51, 0.65);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
      }
      .line {
        width: 1px;
        height: 16px;
        background: rgb(208, 211, 215);
        margin: 0 12px;
      }
      .right_check {
        width: 38px;
        height: 20px;
        background: rgb(225, 237, 247);
        border: 1px solid rgb(203, 210, 217);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 16px;
        .right_check_icon {
          background: rgb(10, 120, 190);
          height: 20px;
          width: 20px;
          border-radius: 50%;
        }
      }
      .elise {
        width: 36px;
        height: 34px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        .elise_icon {
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/2qdc4_H3cyf.png);
          background-position-x: -34px;
          background-position-y: -239px;
          width: 16px;
          height: 16px;
        }
      }
    }
    .left_icon_bor {
      width: 45px;
      height: 34px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 24px;
      .left_icon {
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/OuLIowoBdDh.png);
        background-position-x: -231px;
        background-position-y: -300px;
        background-repeat: no-repeat;
        background-size: auto;
        width: 16px;
        height: 16px;
      }
    }
    .left_top_left {
      height: 44px;
      display: flex;
      align-items: center;
      .step {
        width: 100%;
        display: flex;
        align-items: center;
        .step_one_icon {
        }
        .step_one_text {
          // color: rgb(10, 120, 190);
          color: rgba(28, 43, 51, 0.65);
          cursor: pointer;
          font-size: 15px;
          font-weight: 400;
        }
        .step_one_box {
          background: rgb(225, 237, 247);
          padding: 4px;
          border-radius: 4px;
          color: rgb(10, 120, 190);
          font-family: 'Optimistic Display', system-ui, sans-serif;
          font-size: 15px;
        }
      }
    }
  }
  .right_top_height_44 {
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    .left_edit_mr {
      margin-right: 16px;
    }
    .left_edit {
      display: flex;
      align-items: center;
      width: 76px;
      height: 36px;
      background: rgb(225, 237, 247);
      border: 0px solid rgba(0, 0, 0, 0.4);
      border-radius: 4px;
      justify-content: center;
      .left_edit_icon {
        width: 16px;
        height: 16px;
        background-position-x: 0px;
        background-position-y: -949px;
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/kyq61n7ov7d.png);
      }
      .right_edit_icon {
        background: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/OuLIowoBdDh.png);
        background-position: -146px -300px;
        width: 16px;
        height: 16px;
      }
      .left_edit_text {
        margin-left: 8px;
        // color: rgb(10, 120, 190);
        color: rgb(28, 43, 51);
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 14px;
        // font-weight: 700;
        font-weight: 400;
      }
    }
  }
}
.content-box {
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  position: absolute;
  width: 100%;
  height: 99.8%;
  right: 0;
  top: 0;
  display: flex;
  .content-box__left {
    width: 44px;
    height: 100%;
    background-color: rgb(28, 43, 51);
    box-shadow: rgba(0, 0, 0, 0.2) -2px 2px 4px -1px;
    color: rgb(28, 30, 33);
    .center_top_box {
      width: 44px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      .c_icon_4 {
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/DeKP7dAAazZ.png);
        background-position-x: -136px;
        background-position-y: -333px;
        background-repeat: no-repeat;
        background-size: auto;
        width: 16px;
        height: 16px;
        color: rgb(255, 255, 255);
      }
    }
    .left_top_box {
      height: 340px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 8px;
      .close_no {
        background-color: transparent;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
      }
      .c_icon_1 {
        mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/kyq61n7ov7d.png);
        -webkit-mask-position-x: 0px;
        -webkit-mask-position-y: -439px;
        background-repeat: no-repeat;
        background-size: auto;
        width: 16px;
        height: 16px;
        background-color: rgb(255, 255, 255);
        color: rgb(255, 255, 255);
      }
      .c_icon_2 {
        mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/kyq61n7ov7d.png);
        -webkit-mask-position-x: 0;
        -webkit-mask-position-y: -915px;
        background-repeat: no-repeat;
        background-size: auto;
        width: 16px;
        height: 16px;
        background-color: rgb(255, 255, 255);
        color: rgb(255, 255, 255);
      }
      .c_icon_3 {
        mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/-GyEkqKwLX8.png);
        -webkit-mask-position-x: -21px;
        -webkit-mask-position-y: -194px;
        background-repeat: no-repeat;
        background-size: auto;
        width: 16px;
        height: 16px;
        background-color: rgb(255, 255, 255);
        color: rgb(255, 255, 255);
      }
      .close {
        background-color: rgb(52, 72, 84);
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
        .c_icon {
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/DeKP7dAAazZ.png);
          background-position-x: -306px;
          background-position-y: -333px;
          background-repeat: no-repeat;
          background-size: auto;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  .content-box__middle {
    width: 360px;
    height: 100%;
    border-right: 1px solid rgb(203, 210, 217);
    display: flex;
    flex-direction: column;
    padding-top: 8px;
    z-index: 1;
    .s_box_inner_3 {
      .xilie {
        align-items: center;
        display: flex;
        justify-content: space-between;
        height: 46px;
      }
    }
    .s_box_inner_2 {
      width: 100%;
      height: 1px;
      margin-top: 8px;
      background-color: rgb(198, 201, 204);
    }
    .s_box_inner {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .s_box {
      width: 314px;
      height: 36px;
      border: 1px solid rgb(198, 201, 204);
      border-radius: 4px;
      display: flex;
      align-items: center;
      padding: 0 8px;
      .s_box_inner {
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/cX7DKT2CkS9.png);
        background-position-x: -51px;
        background-position-y: -1968px;
        width: 16px;
        height: 16px;
        margin-right: 8px;
      }
      .s_box_inner_1 {
        color: rgba(28, 43, 51, 0.65);
        font-weight: 400;
        font-size: 14px;
      }
    }
  }
}
</style>
