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
            <div class="step_one step_on">
              <div class="step_one_icon">
                <!-- <svg
                  viewBox="0 0 48 48"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  fill="rgb(10, 120, 190)"
                  class="x4s1yf2 xlup9mm x1kky2od"
                >
                  <g>
                    <path
                      d="m19.95 8.76-.18-.53a4 4 0 0 0-3.79-2.74H6.5c-1.66 0-3 1.34-3 3v30c0 2.21 1.79 4 4 4h33c2.21 0 4-1.79 4-4V15.5c0-2.21-1.79-4-4-4H23.74c-1.72 0-3.25-1.1-3.79-2.74z"
                      stroke="rgb(10, 120, 190)"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3px"
                      fill="rgb(10, 120, 190)"
                    ></path>
                  </g>
                </svg> -->
                <svg
                  viewBox="0 0 48 48"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="x4s1yf2 xlup9mm x1kky2od"
                >
                  <g>
                    <path
                      d="m19.95 8.76-.18-.53a4 4 0 0 0-3.79-2.74H6.5c-1.66 0-3 1.34-3 3v30c0 2.21 1.79 4 4 4h33c2.21 0 4-1.79 4-4V15.5c0-2.21-1.79-4-4-4H23.74c-1.72 0-3.25-1.1-3.79-2.74z"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3px"
                      fill="none"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="step_one_text step_one_box">FB18-F01-02</div>
            </div>
            <div class="step_arrow"></div>
            <div class="step_one step_on">
              <div class="step_one_icon">
                <svg
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="x4s1yf2 xlup9mm x1kky2od"
                >
                  <g data-name="Layer 2">
                    <g>
                      <g data-name="16">
                        <rect
                          class="xbh8q5q xi5qq39"
                          x="9.5"
                          y="0.5"
                          width="6"
                          height="6"
                          rx="1"
                        ></rect>
                        <rect
                          class="xbh8q5q xi5qq39"
                          x="0.5"
                          y="0.5"
                          width="6"
                          height="6"
                          rx="1"
                        ></rect>
                        <rect
                          class="xbh8q5q xi5qq39"
                          x="9.5"
                          y="9.5"
                          width="6"
                          height="6"
                          rx="1"
                          transform="rotate(90 12.5 12.5)"
                        ></rect>
                        <rect
                          class="xbh8q5q xi5qq39"
                          x="0.5"
                          y="9.5"
                          width="6"
                          height="6"
                          rx="1"
                          transform="rotate(90 3.5 12.5)"
                        ></rect>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="step_one_text step_one_box">219个广告组</div>
            </div>
            <div class="step_arrow"></div>
            <div class="step_one">
              <div class="step_one_icon">
                <svg
                  viewBox="0 0 16 16"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="x1qsmy5i xlup9mm x1kky2od"
                >
                  <g data-name="Layer 2">
                    <path
                      d="M13.25 1H2.75A1.76 1.76 0 0 0 1 2.75v10.5A1.76 1.76 0 0 0 2.75 15h10.5A1.76 1.76 0 0 0 15 13.25V2.75A1.76 1.76 0 0 0 13.25 1zM4.5 5.5a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8-.5h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1z"
                      data-name="16"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="step_one_text">219个广告</div>
            </div>
          </div>
        </div>
        <div class="right_top_right">
          <div class="right_text">投放中</div>
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
                    <img
                      class="n_img"
                      src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/467673716_122120570228545356_4175974165207804366_n.jpg?stp=cp0_dst-jpg_s50x50&_nc_cat=109&ccb=1-7&_nc_sid=6738e8&_nc_ohc=rvGrDHzvOSQQ7kNvgHuaYBE&_nc_zt=24&_nc_ht=scontent-hkg1-1.xx&_nc_gid=APCri8cYcF1nzwE_wnxNGku&oh=00_AYAnMzeStNvS95HGa3cAEsP6vB-vsx5RAr0S_vpqUBFbXA&oe=674A5EA0"
                    />
                    <div class="left_text_t">Abraham Declan Colin</div>
                  </div>
                  <div class="right__icon"></div>
                </div>
                <div class="div_text3">
                  <div class="div_text3_box">
                    <div class="div_text3_top">Instagram 帐户</div>
                    <div class="div_text3_box_icon"></div>
                  </div>
                </div>
                <div class="right_b">
                  <div class="div_select div_select_w262">
                    <div class="left_text left_text_d_flex">
                      <div class="left_bIcon"></div>
                      <div class="left_text_t">使用 Facebook 公共主页</div>
                    </div>
                    <div class="right__icon"></div>
                  </div>
                  <div class="text_b">或</div>
                  <div class="text_btn">绑定账户</div>
                </div>
              </div>

              <div class="top_max1 top_max_guano" style="margin-top: 16px">
                <div class="top_max1_t_icon">
                  <div class="top_max1_t_icon_l"></div>
                  <div class="top_max1_t_icon_t">广告设置</div>
                </div>
                <div class="div_select">
                  <div class="left_text left_text_d_flex">
                    <div class="left_text_t">创建广告</div>
                  </div>
                  <div class="right__icon"></div>
                </div>
                <div class="big_leftB">
                  <div class="big_top">
                    <div class="big_top_left"></div>
                    <div class="big_top_right">
                      利用进阶赋能型目录广告创建目录并提升销量
                    </div>
                  </div>
                  <div class="big_bottom">
                    <div class="top4_t">
                      根据<span class="div_show_more_text">people</span
                      >独特的兴趣、意图和操作，使用目录自动向其推广相关商品或服务。<span
                        class="div_show_more_text"
                        >详细了解</span
                      >
                    </div>
                    <div class="group_line"></div>
                  </div>
                  <div class="text_btn_box">
                    <div class="text_btn start——btn">开始</div>
                    <div class="top4_t">
                      <span class="div_show_more_text">稍后提醒我</span>
                    </div>
                  </div>
                </div>
                <div class="c_y_ly g_y">创意来源</div>
                <div class="c_y_ly2 c_y_ly">
                  选择你希望为广告提供素材的方式。
                </div>
                <div class="c_y_type">
                  <div class="c_y_type_top">
                    <div class="c_y_type_left">
                      <div class="c_y_type_left_l"></div>
                    </div>
                    <div class="c_y_type_left_text c_y_ly">手动上传</div>
                  </div>
                  <div class="c_y_type_b c_y_ly2">手动上传图片或视频。</div>
                </div>
                <div class="c_y_type">
                  <div class="c_y_type_top">
                    <div class="c_y_type_left bg_c">
                      <!-- <div class="c_y_type_left_l"></div> -->
                    </div>
                    <div class="c_y_type_left_text c_y_ly cl_c">
                      进阶赋能型目录广告
                    </div>
                    <div class="c_y_type_right"></div>
                  </div>
                  <div class="c_y_type_b c_y_ly2 cl_c">
                    自动使用目录中的素材。我们会向每位受众展示他们最有可能互动的目录商品。
                    <span class="div_show_more_text c_y_ly2"
                      >进阶赋能型目录广告</span
                    >
                  </div>
                </div>
                <div class="c_y_ly g_y">格式</div>
                <div class="c_y_ly2 c_y_ly">选择广告所呈现的样式。</div>
                <div class="c_y_type">
                  <div class="c_y_type_top">
                    <div class="c_y_type_left"></div>
                    <div class="c_y_type_left_text c_y_ly">灵活</div>
                  </div>
                  <div class="c_y_type_b c_y_ly2">
                    我们将展示预计可能表现最佳的广告格式
                  </div>
                </div>

                <div class="c_y_type">
                  <div class="c_y_type_top">
                    <div class="c_y_type_left">
                      <div class="c_y_type_left_l"></div>
                    </div>
                    <div class="c_y_type_left_text c_y_ly">单图片或视频</div>
                  </div>
                  <div class="c_y_type_b c_y_ly2">
                    单图片、单视频，或用多张图片创建的幻灯片
                  </div>
                </div>

                <div class="c_y_type">
                  <div class="c_y_type_top">
                    <div class="c_y_type_left"></div>
                    <div class="c_y_type_left_text c_y_ly">轮播</div>
                  </div>
                  <div class="c_y_type_b c_y_ly2">
                    2 张（个）或更多可滚动的图片或视频
                  </div>
                </div>

                <div class="c_y_type">
                  <div class="c_y_type_top">
                    <div class="c_y_type_left"></div>
                    <div class="c_y_type_left_text c_y_ly">精品栏</div>
                  </div>
                  <div class="c_y_type_b c_y_ly2">
                    用全屏移动体验呈现一组商品
                  </div>
                </div>
                <div class="group_line"></div>
                <div class="div_show_more">
                  <div class="div_show_more_text">显示更多选项</div>
                  <div class="div_show_more_icon"></div>
                </div>
              </div>
              <div class="top_max1 top_max_guano" style="margin-top: 16px">
                <div class="top_max1_t_icon">
                  <div class="top_max1_t_icon_l"></div>
                  <div class="top_max1_t_icon_t">广告创意</div>
                </div>
                <div class="div_text">
                  选择并优化你的广告文字、素材和美化方式。
                </div>
                <div class="chg_yi">
                  <div class="chg_yi_left">创意设置</div>
                  <div class="top4_t">
                    <span class="div_show_more_text">编辑</span>
                  </div>
                </div>
                <div class="wan_luo chg_yi_left">网站链接(0)</div>
                <div class="su_cai">
                  <div class="su_left">
                    <div class="div_text3_box">
                      <div class="div_text3_1">*</div>
                      <div class="div_text3_top">素材</div>
                      <div class="div_text3_box_icon"></div>
                    </div>
                    <div class="btt_text">18个版位</div>
                  </div>
                  <div class="su_right">
                    <div class="edit_btn">
                      <div class="edit_btn_text">编辑素材</div>
                      <div class="edit_btn_icon"></div>
                    </div>
                    <div class="del_btn">
                      <div class="del_btn_icon"></div>
                    </div>
                  </div>
                </div>
                <div class="big_leftB big_leftB_y">
                  <div class="div_flex">
                    <div class="big_top">
                      <div class="big_top__icon"></div>
                    </div>
                    <div class="top4_t top4_t_l4px">
                      视频中的文字可能会因显示位置而被主页图标或行动号召按钮遮盖。你可以先查看哪些地方适合摆放文字，再选择更改视频。
                    </div>
                  </div>
                  <div class="top4_t mt_ml">
                    <span class="div_show_more_text">了解详情</span>
                  </div>
                </div>

                <div class="img_box_li">
                  <div class="left_img">
                    <div class="img_box_a">
                      <img
                        src="https://scontent-hkg1-2.xx.fbcdn.net/v/t45.1600-4/467416385_120214948731190127_5321562059506160343_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=890911&_nc_ohc=kH1Qv9rjXIkQ7kNvgF9iA3h&_nc_zt=1&_nc_ht=scontent-hkg1-2.xx&_nc_gid=A09aCcJwsaV51WT-f0CbRFD&oh=00_AYAHfBWxOn3cnb04dl02hdPrsOOOLSQPj_eDwA-kzfh2wA&oe=674AAC3D"
                        alt=""
                      />
                    </div>
                    <div class="center_content">
                      <div class="center_content_text">
                        动态、视频和 Reels 插播广告位、搜索结果
                      </div>
                      <div class="btt_text">11个版位</div>
                    </div>
                  </div>
                  <div class="right_img"></div>
                </div>

                <div class="img_box_li">
                  <div class="left_img">
                    <div class="img_box_a bg_no">
                      <img
                        src="https://scontent-hkg1-2.xx.fbcdn.net/v/t45.1600-4/467416385_120214948731190127_5321562059506160343_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=890911&_nc_ohc=kH1Qv9rjXIkQ7kNvgF9iA3h&_nc_zt=1&_nc_ht=scontent-hkg1-2.xx&_nc_gid=A09aCcJwsaV51WT-f0CbRFD&oh=00_AYAHfBWxOn3cnb04dl02hdPrsOOOLSQPj_eDwA-kzfh2wA&oe=674AAC3D"
                        alt=""
                      />
                    </div>
                    <div class="center_content">
                      <div class="center_content_text">快拍和 Reels</div>
                      <div class="btt_text">5个版位</div>
                    </div>
                  </div>
                  <div class="right_img"></div>
                </div>
                <div class="img_box_li">
                  <div class="left_img">
                    <div class="img_box_a min_img">
                      <img
                        src="https://scontent-hkg1-2.xx.fbcdn.net/v/t45.1600-4/467416385_120214948731190127_5321562059506160343_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=890911&_nc_ohc=kH1Qv9rjXIkQ7kNvgF9iA3h&_nc_zt=1&_nc_ht=scontent-hkg1-2.xx&_nc_gid=A09aCcJwsaV51WT-f0CbRFD&oh=00_AYAHfBWxOn3cnb04dl02hdPrsOOOLSQPj_eDwA-kzfh2wA&oe=674AAC3D"
                        alt=""
                      />
                    </div>
                    <div class="center_content">
                      <div class="center_content_text">右边栏、搜索结果</div>
                      <div class="btt_text">2个版位</div>
                    </div>
                  </div>
                  <div class="right_img"></div>
                </div>
                <div class="div_text3">
                  <div class="div_text3_box">
                    <div class="div_text3_top">正文</div>
                    <div class="div_text3_box_icon"></div>
                  </div>
                  <div class="div_select">
                    <div class="left_text">向大家介绍广告内容</div>
                  </div>
                </div>
                <div class="add_div_text3">
                  <div class="add_icon"></div>
                  <div class="add_text">添加文案选项</div>
                </div>
                <div class="div_text3">
                  <div class="div_text3_box">
                    <div class="div_text3_top">广告标题</div>
                    <div class="div_text3_box_icon"></div>
                  </div>
                  <div class="div_select">
                    <div class="left_text">请输入简短标题</div>
                  </div>
                </div>
                <div class="add_div_text3">
                  <div class="add_icon"></div>
                  <div class="add_text">添加标题选项</div>
                </div>
                <div class="div_text3">
                  <div class="div_text3_box">
                    <div class="div_text3_top">描述</div>
                    <div class="div_text3_box_icon"></div>
                  </div>
                  <div class="div_select other——box">
                    <div class="left_text">添加其他详情</div>
                  </div>
                </div>
                <div class="ggx_right_box">
                  针对每位<span class="color_ggx">用户</span>显示最适合的文案
                </div>
                <div class="ggx_right_box1">已启用</div>
                <div class="div_text3">
                  <div class="div_text3_box">
                    <div class="div_text3_top">行动号召</div>
                    <div class="div_text3_box_icon"></div>
                  </div>
                </div>
                <div class="div_select">
                  <div class="left_text left_text_d_flex">
                    <div class="left_text_t">玩游戏</div>
                  </div>
                  <div class="right__icon"></div>
                </div>
                <div class="c_y_ly g_y">信息标签</div>
                <div class="top4_t bo_q">
                  使用信息标签来突显最吸引人的信息，例如公共主页获赞数或包邮。
                </div>
                <div class="div_show_more_text">详细了解</div>
                <div class="top4_t bo_q mt_mb_16">已选择0个信息标签</div>
                <div class="top4_t bo_q">11个可选信息标签</div>
                <div class="add_div_text3">
                  <div class="add_text">启用信息标签</div>
                </div>

                <div class="top_max1_t_icon ju_sb mt16">
                  <div class="top_max1_t_icon_t top_max1_t_icon_no banc——text">
                    突显优惠码
                  </div>
                  <div class="top_max1_t_icon_r">
                    <div class="top_max1_t_icon_r_l_t">关</div>
                    <div class="top_max1_t_icon_r_l">
                      <div class="top_max1_t_icon_r_l_text"></div>
                    </div>
                  </div>
                </div>
                <div class="top4_t abner">
                  Meta 会在你的广告中突显优惠码，以便促进转化。<span
                    class="div_show_more_text"
                    >详细了解</span
                  >
                </div>
              </div>
              <div class="top_max1 top_max_guano" style="margin-top: 16px">
                <div class="top_max1_t_icon no_item_center">
                  <div class="top_max1_t_icon_t no_mar">进阶赋能型素材</div>
                  <div class="top_max1_t_icon_2"></div>
                </div>
                <div class="top4_t abner">
                  让我们自动优化你的创意素材，以便为查看广告的<span
                    class="div_show_more_text"
                    >用户</span
                  >定制个性化体验。这有助于改善广告表现。
                </div>
                <div class="div_text3">
                  <div class="div_text3_box">
                    <div class="div_text3_top">美化（1/5）</div>
                    <div class="div_text3_box_icon"></div>
                  </div>
                </div>
                <div class="big_leftB big_leftB_x">
                  <div class="big_top">
                    <div class="big_top_X"></div>
                    <div class="big_top_right lisp_x">
                      添加4项进阶赋能型素材美化有助于将单次成效费用降低3%<span
                        class="lisp_x_icon"
                      ></span>
                    </div>
                  </div>
                  <div class="big_bottom">
                    <div class="top4_t">
                      让我们自动优化你的创意，以便为查看广告的用户定制个性化体验。
                    </div>
                  </div>
                  <div class="text_btn_box">
                    <div class="text_btn padd_16">添加素材美化</div>
                  </div>
                </div>
                <div class="zui_box">
                  <div class="zui_box_t">
                    <div class="zui_box_t_text">
                      <span class="one_text">已关闭：</span>视觉润色, 文案改进,
                      增强行动号召和其他1项
                    </div>
                    <div class="zui_box_t_text">
                      <span class="one_text">已开启：</span>相关评论
                    </div>
                  </div>
                  <div class="zui_box_b">
                    <div class="text_btn start——btn">编辑</div>
                  </div>
                </div>
              </div>

              <div class="top_max1 top_max_guano" style="margin-top: 16px">
                <div class="top_max1_t_icon">
                  <div class="top_max1_t_icon_l"></div>
                  <div class="top_max1_t_icon_t">广告创意</div>
                </div>
                <div class="div_text ls_text">
                  告诉我们用户轻触或点击你的广告后即刻前往的位置。<span
                    class="color_text"
                    >详细了解</span
                  >
                </div>

                <div class="g_div_arr_c">
                  <div class="div_y">
                    <div class="div_x_y c_y_type_left">
                      <div class="div_yy c_y_type_left_l"></div>
                    </div>
                    <div class="div_LL">
                      <div class="div_LL_icon"></div>
                      <div class="div_LL_icon_r">
                        <div class="oo_div">网站</div>
                        <div class="oo_div_x oo_div">把用户送往你的网站。</div>
                      </div>
                    </div>
                  </div>
                  <div class="div_xx_a">
                    <div class="div_text3_box">
                      <div class="div_text3_1">*</div>
                      <div class="div_text3_top">网址</div>
                      <div class="div_text3_box_icon"></div>
                    </div>
                    <div class="div_input_url">
                      <div class="div_select div_select_xx">
                        <div class="left_text over_hi">
                         {{attributionUrl}}
                        </div>
                      </div>
                      <div
                        class="add_div_text3 add_div_text_xx"
                        @click="jumpUrl()"
                      >
                        <div class="add_icon_xx"></div>
                        <div class="add_text">预览网址</div>
                      </div>
                    </div>
                    <div class="top4_t">
                      <span class="div_show_more_text">创建网址参数</span>
                    </div>
                    <div class="div_text3">
                      <div class="div_text3_box">
                        <div class="div_text3_top">显示链接</div>
                      </div>
                      <div class="div_select">
                        <div class="left_text">
                          输入你希望在广告中展示的链接
                        </div>
                      </div>
                    </div>
                    <div class="div_text3">
                      <div class="div_text3_box">
                        <div class="div_text3_top">浏览器附加组件</div>
                      </div>
                      <div class="top4_t ls_text mt4">
                        用户会在轻触广告后看到你的网站。你可以在浏览器中添加其他联系方式，帮助用户与你建立联结。
                      </div>
                    </div>
                    <div class="div_y mt8">
                      <div class="div_x_y c_y_type_left">
                        <div class="div_yy c_y_type_left_l"></div>
                      </div>
                      <div class="div_LL">
                        <div class="div_LL_icon_a div_LL_icon"></div>
                        <div class="div_LL_icon_r">
                          <div class="oo_div">无</div>
                          <div class="oo_div_x oo_div">不添加按钮。</div>
                        </div>
                      </div>
                    </div>
                    <div class="div_y mt8">
                      <div class="div_x_y c_y_type_left"></div>
                      <div class="div_LL">
                        <div class="div_LL_icon div_LL_icon_b"></div>
                        <div class="div_LL_icon_r">
                          <div class="oo_div">通话</div>
                          <div class="oo_div_x oo_div">
                            在你的网站上添加通话按钮。
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="div_y mt8">
                      <div class="div_x_y c_y_type_left"></div>
                      <div class="div_LL">
                        <div class="div_LL_icon div_LL_icon_c"></div>
                        <div class="div_LL_icon_r">
                          <div class="oo_div">WhatsApp</div>
                          <div class="oo_div_x oo_div">
                            在你的网站上添加 WhatsApp 按钮。
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="div_y mt8">
                    <div class="div_x_y c_y_type_left"></div>
                    <div class="div_LL">
                      <div class="div_LL_icon div_LL_icon_d"></div>
                      <div class="div_LL_icon_r">
                        <div class="oo_div">即时体验</div>
                        <div class="oo_div_x oo_div">
                          把用户送往专为移动端优化的极速体验。
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="div_y mt8">
                    <div class="div_x_y c_y_type_left"></div>
                    <div class="div_LL">
                      <div class="div_LL_icon div_LL_icon_e"></div>
                      <div class="div_LL_icon_r">
                        <div class="oo_div">Facebook 活动</div>
                        <div class="oo_div_x oo_div">
                          把用户送往 Facebook 公共主页中的活动页面。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="gg_right_box_bottom">
              <div class="r_box">
                <div class="r-top_fn">
                  <div class="r-top_fn_l">
                    <div class="switch_box">
                      <div class="cc_check">
                        <div class="cc_y"></div>
                      </div>
                    </div>
                    <div class="r-top_fn_t">广告预览</div>
                  </div>
                  <div class="r-top_fn_r">
                    <div class="add_div_text3 add_div_text3_pp">
                      <div class="add_icon_gao"></div>
                      <div class="add_text">高级预览</div>
                    </div>
                    <div class="su_right su_right36">
                      <div class="edit_btn">
                        <div class="edit_btn_text_w"></div>
                        <div class="edit_btn_icon"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="height38">
                  <div class="gg_right_box_bottom_l box_bottom_l">
                    <div class="gg_right_box_bottom_l_1"></div>
                  </div>
                  <div class="gg_right_box_bottom_l">
                    <div class="gg_right_box_bottom_l_2"></div>
                  </div>
                  <div class="gg_right_box_bottom_l">
                    <div class="gg_right_box_bottom_l_3"></div>
                  </div>
                  <div class="gg_right_box_bottom_l">
                    <div class="gg_right_box_bottom_l_4"></div>
                  </div>

                  <div class="gg_right_bottom_l">
                    <div class="one_box_1"></div>
                    <div class="one_box_2">2</div>
                  </div>
                </div>

                <div class="boot_btn">
                  <div class="big_leftB big_bottom_f">
                    <div class="big_top">
                      <div class="big_top_left"></div>
                      <div class="big_top_right">
                        你可以在预览中查看更多广告版本了
                      </div>
                    </div>
                    <div class="big_bottom_iii"></div>
                  </div>
                </div>

                <div class="video_img">
                  <div class="video_img_l">
                    <div class="video_img_l_top">
                      <div class="left_video_box">
                        <img
                          class="top_average_img"
                          src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/467673716_122120570228545356_4175974165207804366_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=3dd92b&_nc_ohc=rvGrDHzvOSQQ7kNvgHuaYBE&_nc_zt=24&_nc_ht=scontent-hkg1-1.xx&_nc_gid=ANlQTT2BoUUC-OsxkdYmH8i&oh=00_AYBZDZrzRqEj0pbHd3fxIz_VE-DG1uoelMiAywFRdY-t4Q&oe=674BE860"
                        />
                        <div class="top_average_name_text">
                          <div class="top_average_name">Atlas Damian Daxuz</div>
                          <div class="top_average_name_text1">
                            <div class="top_average_name_text2">赞助内容</div>
                            <div class="top_average_name_text2 mlr_4">·</div>
                            <img
                              class="top_average_name_icon"
                              src="../../../assets/everyone.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="right_video_box">
                        <div class="right_video_box_icon"></div>
                        <div class="right_video_box_icon2"></div>
                      </div>
                    </div>
                    <div class="center_img">
                      <div class="juz_img">
                        <img
                          class="ju_img"
                          src="../../../assets/playButton.png"
                        />
                      </div>
                      <video
                        class="_ox1 xl1xv1r"
                        data-video-width="320"
                        data-video-height="400"
                        data-interactable="|mousedown||click|"
                        :src="videoUrl"
                      ></video>

                      <div class="video_img_l_bottom">
                        <div class="lave_img">
                          <img
                            class="aa_img"
                            src="https://scontent-hkg1-2.xx.fbcdn.net/v/t15.13418-10/468099776_1372758370556132_6772809313961961271_n.jpg?stp=dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=ace027&_nc_ohc=3cLvtr69lwkQ7kNvgHkMoK8&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=ANlQTT2BoUUC-OsxkdYmH8i&oh=00_AYBOHpcuPErO4-i6AuLtGyjRuPoy1aw0B9polSMowRT_aA&oe=674BC7F7"
                            alt=""
                          />
                          <div class="tit_img">
                            <div class="tit_img_text">F18VIP.COM</div>
                            <div class="tit_img_text_2">
                              FB18.COM oferece o melhor dos populares jogos.
                              Venha comigo, torne-se o próximo milionário
                            </div>
                          </div>
                        </div>
                        <div class="right_btn_g">玩游戏</div>
                      </div>
                      <div class="video_line"></div>
                      <div class="video_img_l_bottom22">
                        <div class="video_line_2"></div>
                      </div>
                      <div class="right_bb_btn_g">
                        <div class="btn11">
                          <div class="btn11_icon"></div>
                          <div class="btn11_text">赞</div>
                        </div>
                        <div class="btn11">
                          <div class="btn22_icon"></div>
                          <div class="btn11_text">评论</div>
                        </div>
                        <div class="btn11">
                          <div class="btn33_icon"></div>
                          <div class="btn11_text">分享</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="video_img_r video_img_l">
                    <div class="video_img_r_top">
                      <img
                        class="x1agz8ms x1vqgdyp img"
                        alt=""
                        src="../../../assets/header-background-2x.png"
                      />
                      <div class="left_video_box po_abc">
                        <img
                          class="top_average_img"
                          src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/467673716_122120570228545356_4175974165207804366_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=3dd92b&_nc_ohc=rvGrDHzvOSQQ7kNvgHuaYBE&_nc_zt=24&_nc_ht=scontent-hkg1-1.xx&_nc_gid=ANlQTT2BoUUC-OsxkdYmH8i&oh=00_AYBZDZrzRqEj0pbHd3fxIz_VE-DG1uoelMiAywFRdY-t4Q&oe=674BE860"
                        />
                        <div class="top_average_name_text">
                          <div class="top_average_name">Atlas Damian Daxuz</div>
                          <div class="top_average_name_text1">
                            <div class="top_average_name_text2">赞助内容</div>
                            <div class="top_average_name_text2 mlr_4">·</div>
                            <img
                              class="top_average_name_icon"
                              src="../../../assets/everyone.png"
                            />
                          </div>
                        </div>
                      </div>
                      <video
                        autoplay=""
                        class="x1lliihq x1n2onr6 xl1xv1r xjnjwiz"
                        id="video"
                        loop=""
                        playsinline=""
                      >
                        <source
                          :src="videoUrl"
                          type="video/mp4"
                        />
                        <track default="" kind="captions" />
                      </video>
                    </div>
                    <div class="center_text">
                      <div class="center_text_left">玩游戏</div>
                      <div class="center_text_icon">
                        <i
                          class="x1kpxq89 xsmyaan img"
                          alt=""
                          data-visualcompletion="css-img"
                          style="
                            background-image: url('https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png');
                            background-position: -272px -1909px;
                            background-size: auto;
                            width: 16px;
                            height: 16px;
                            background-repeat: no-repeat;
                            display: inline-block;
                          "
                        ></i>
                      </div>
                    </div>
                    <div class="video_img_l_bottom22" style="padding-top: 0px">
                      <div class="video_line_2"></div>
                    </div>

                    <div class="btn_b">
                      <div class="left_btn_oox">
                        <div class="left_btn_oox1"></div>
                        <div class="left_btn_oox2"></div>
                        <div class="left_btn_oox3"></div>
                      </div>
                      <div class="left_btn_oox4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <template v-if="false">
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
import TreeNode from './TreeNode'
export default {
  components: {
    TreeNode,
  },
  props: {
    attributionUrl: {
      type: String,
      default: '',
    },
    videoUrl: {
      type: String,
      default: '',
    },
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
    jumpUrl() {
      window.open(this.$props.attributionUrl,'_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.ml4 {
  margin-left: 8px;
}
.xbh8q5q {
  fill: none;
}
.xi5qq39 {
  stroke: #000;
}
.x1qsmy5i {
  color: rgba(10, 120, 190, 1);
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
  .div_input_url {
    display: flex;
    align-items: center;
  }
  .add_div_text_xx {
    width: 106px !important;
    margin-top: 0px !important;
  }
  .over_hi {
    overflow: hidden;
    white-space: nowrap;
    width: 223px !important;
    color: rgb(28, 43, 51);
  }
  .big_leftB {
    padding: 12px;
    background-color: rgb(255, 255, 255);
    border-bottom-color: rgb(123, 100, 192);
    border-left-color: rgb(123, 100, 192);
    border-left-style: solid;
    border-right-color: rgb(123, 100, 192);
    border-top-color: rgb(123, 100, 192);
    border-left-width: 4px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    color: rgb(28, 30, 33);
    font-family: Roboto, Arial, sans-serif;
    font-size: 13px;
  }
  .add_div_text_xx:hover {
    background: rgb(237, 242, 247) !important;
  }
  .div_select_xx {
    width: calc(100% - 106px) !important;
    margin-right: 8px !important;
  }
  .add_icon_xx {
    background-color: rgb(28, 43, 51);
    color: rgb(28, 43, 51);
    mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/jg3IY981y5G.png);
    -webkit-mask-position-x: -17px;
    -webkit-mask-position-y: -186px;
    width: 16px;
    height: 16px;
  }
  .su_right {
    display: flex;
    align-items: center;
    .del_btn {
      border: 1px solid rgb(203, 210, 217);
      padding: 9px 12px;
      border-radius: 4px;
      margin-left: 4px;
      .del_btn_icon {
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png);
        background-position-x: -272px;
        background-position-y: -1892px;
        height: 16px;
        width: 16px;
      }
    }
    .edit_btn {
      display: flex;
      align-items: center;
      border: 1px solid rgb(203, 210, 217);
      border-radius: 4px;
      cursor: pointer;
      padding: 8px 12px 8px 16px;
      .edit_btn_text {
        color: rgb(28, 43, 51);
        cursor: pointer;
        font-family: 'Optimistic Display', system-ui, sans-serif;
        font-size: 14px;
        font-weight: 500;
      }
      .edit_btn_icon {
        margin-left: 12px;
        background-color: rgb(28, 43, 51);
        color: rgb(28, 43, 51);
        height: 16px;
        mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/L-LpLWhHnK3.png);
        width: 16px;
        -webkit-mask-position-x: 0px;
        -webkit-mask-position-y: -427px;
      }
    }
  }
  .div_xx_a {
    margin-top: 16px;

    padding-left: 32px;
  }
  .g_div_arr_c {
    margin-top: 16px;
    .div_y {
      display: flex;
      align-items: center;
      .div_x_y {
        margin-right: 16px;
      }
      .oo_div {
        color: rgb(28, 43, 51);
        cursor: pointer;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 14px;
        font-weight: 400;
      }
      .oo_div_x {
        font-size: 12px !important;
      }
      .div_LL {
        display: flex;
        align-items: center;
        .div_LL_icon {
          margin-right: 16px;
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/kyq61n7ov7d.png);
          background-position-x: 0px;
          background-position-y: -847px;
          height: 16px;
          width: 16px;
        }
        .div_LL_icon_a {
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/9S_iO-KG7tx.png) !important;
          background-position-x: 0px !important;
          background-position-y: -152px !important;
        }
        .div_LL_icon_b {
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/9S_iO-KG7tx.png) !important;
          background-position-x: 0px !important;
          background-position-y: -186px !important;
        }

        .div_LL_icon_c {
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/9S_iO-KG7tx.png) !important;
          background-position-x: 0px !important;
          background-position-y: -84px !important;
        }

        .div_LL_icon_d {
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/-GyEkqKwLX8.png) !important;
          background-position-x: 0px !important;
          background-position-y: -348px !important;
        }

        .div_LL_icon_e {
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/cX7DKT2CkS9.png) !important;
          background-position-x: -247px !important;
          background-position-y: -956px !important;
        }
      }
    }
  }
  .xl1xv1r {
    width: 231px;
    height: 407px;
  }
  .c_y_type_left {
    width: 24px;
    height: 24px;
    border: 1px solid rgb(203, 210, 217);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .c_y_type_left_l {
      width: 12px;
      height: 12px;
      background-color: rgb(10, 120, 190);
      border-radius: 50%;
    }
  }
  .mt4 {
    margin-top: 4px;
  }
  .mt8 {
    margin-top: 8px;
  }
  .boot_btn {
    margin-top: 8px;
    padding: 0 8px;
  }
  .mlr_4 {
    margin-left: 4px;
    margin-right: 4px;
  }
  .video_line {
    width: 100%;
    height: 0.5px;
    background: rgba(0, 0, 0, 0.08);
  }
  .btn_b {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background: #fff;
    justify-content: space-between;
    .left_btn_oox {
      display: flex;
      align-items: center;
      .left_btn_oox1 {
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png);
        background-position-x: -325px;
        background-position-y: -1612px;
        height: 24px;
        width: 24px;
        transform: scale(70%, 70%);
      }

      .left_btn_oox2 {
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png);
        background-position-x: -200px;
        background-position-y: -1612px;
        height: 24px;
        width: 24px;
        transform: scale(70%, 70%);
      }
      .left_btn_oox3 {
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png);
        background-position-x: -250px;
        background-position-y: -1612px;
        height: 24px;
        width: 24px;
        transform: scale(70%, 70%);
      }
    }
    .left_btn_oox4 {
      height: 24px;
      width: 24px;
      background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png);
      background-position-x: -100px;
      background-position-y: -1637px;
      transform: scale(70%, 70%);
    }
  }
  .right_bb_btn_g {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    background: #fff;
    justify-content: space-around;
    .btn11 {
      display: flex;
      align-items: center;
      .btn11_icon {
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/F1pMinsTdjF.png);
        background-position-x: -63px;
        background-position-y: -207px;
        width: 18px;
        height: 18px;
        transform: scale(70%, 70%);
      }
      .btn22_icon {
        width: 18px;
        height: 18px;
        transform: scale(70%, 70%);
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png);
        background-position-x: -357px;
        background-position-y: -1359px;
      }
      .btn33_icon {
        width: 18px;
        transform: scale(70%, 70%);
        height: 18px;
        background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png);
        background-position-x: -273px;
        background-position-y: -1767px;
      }

      .btn11_text {
        color: rgb(97, 103, 112);
        font-family: Roboto, Arial, sans-serif;
        font-size: 9px;
        font-weight: 600;
      }
    }
  }
  .video_line_2 {
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.08);
  }
  .video_img_l_bottom22 {
    padding: 16px;
    display: flex;
    justify-content: center;
    background: #fff;
    padding-bottom: 0px;
  }
  .video_img_l_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 54px;
    padding: 0 4px;
    background-color: rgb(247, 248, 250);
    .right_btn_g {
      width: 48px;
      border-radius: 4px;
      height: 25px;
      color: #000;
      font-size: 10px;
      letter-spacing: 0.5px;
      font-family: Roboto, Arial, sans-serif;
      background-color: rgb(226, 229, 233);
      line-height: 25px;
      text-align: center;
    }
    .lave_img {
      display: flex;
      align-items: center;
      .aa_img {
        width: 28px;
        height: 28px;
        border-radius: 4px;
        object-fit: cover;
      }
      .tit_img {
        margin-left: 8px;
        .tit_img_text {
          color: rgb(70, 73, 80);
          font-family: Roboto, Arial, sans-serif;
          font-size: 8px;
        }
        .tit_img_text_2 {
          color: rgb(65, 72, 85);
          font-family: Roboto, Arial, sans-serif;
          font-size: 11px;
          font-weight: 500;
          width: 111px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          overflow: hidden;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
  .x1n2onr6 {
    margin-top: -4px;
  }
  .center_text {
    margin-top: -2px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 26px;
    background: #fff;
    .center_text_left {
      color: rgb(38, 38, 38);
      font-family: 'Freight Sans Bold', Helvetica, Arial, sans-serif;
      font-size: 12px;
      font-weight: 700;
      transform: scale(80%, 80%);
    }
    .center_text_icon {
      transform: scale(70%, 70%);
    }
  }
  .po_abc {
    position: absolute;
    left: 8px;
    top: 32px;
    z-index: 999;
    .top_average_img {
      transform: scale(70%, 70%);
    }
    .top_average_name_text {
      margin-left: 0px !important;
    }
    .top_average_name {
      color: #fff !important;
      transform: scale(90%, 90%);
    }
    .top_average_name_text2 {
      transform: scale(90%, 90%);
    }
  }
  .left_video_box {
    display: flex;

    .top_average_img {
      height: 28px;
      width: 28px;
      border-radius: 50%;
    }
  }
  .video_img {
    display: flex;
    padding: 0 8px;
    justify-content: space-between;
    .video_img_r {
      .video_img_r_top {
        position: relative;
        .x1vqgdyp {
          width: 100%;
          height: 27px;
        }
      }
    }
    .top_average_name_text {
      margin-left: 8px;
      .top_average_name {
        color: rgb(29, 33, 41);
        font-family: Roboto, Arial, sans-serif;
        font-size: 10px;
        font-weight: 700;
      }
      .top_average_name_text1 {
        display: flex;
        align-items: center;
        .top_average_name_text2 {
          color: rgb(144, 148, 156);
          font-family: Roboto, Arial, sans-serif;
          font-size: 9px;
        }
        .top_average_name_icon {
          height: 7px;
          width: 7px;
        }
      }
    }
    .video_img_l {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
      background-color: rgba(0, 0, 0, 0.03);
      border-radius: 4px;
      // height: 408px;
      width: 230px;
      padding: 0 4px;
      margin-top: 64px;
      .center_img {
        position: relative;
        width: 100%;
        .juz_img {
          position: absolute;
          left: calc(50% - 25px);
          top: calc(50% - 45px);
          .ju_img {
            width: 46px;
            height: 46px;
          }
        }
      }
      .video_img_l_top {
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 35px;
        padding: 4px 8px;

        .right_video_box {
          display: flex;
          align-items: center;
          .right_video_box_icon {
            background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/zQ7tm5y8cV3.png);
            background-position-x: -31px;
            background-position-y: -451px;
            height: 14px;
            background-repeat: no-repeat;
            background-size: auto;
            width: 20px;
          }
          .right_video_box_icon2 {
            background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png);
            background-position-x: -148px;
            background-position-y: -1683px;
            height: 20px;
            width: 20px;
            background-repeat: no-repeat;
            background-size: auto;
            -moz-transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
          }
        }
      }
    }
  }
  .big_bottom_f {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .big_bottom_iii {
    background-color: rgb(28, 43, 51);
    color: rgb(28, 43, 51);
    mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/2qdc4_H3cyf.png);
    height: 16px;
    width: 16px;
    -webkit-mask-position-x: -51px;
    -webkit-mask-position-y: -205px;
  }
  .ls_text {
    letter-spacing: 1px;
  }
  .big_top_right {
    color: rgb(28, 43, 51);
    font-family: 'Optimistic Display', system-ui, sans-serif;
    font-size: 15px;
    font-weight: 700;
  }
  .add_div_text3_pp {
    width: 106px !important;
    height: 34px !important;
    margin-top: 0rem !important;
  }
  .add_div_text3 {
    border: 1px solid rgb(203, 210, 217);
    border-radius: 4px;
    text-align: center;
    color: rgb(28, 43, 51);
    cursor: pointer;
    font-family: 'Optimistic Display', system-ui, sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 34px;
    width: 134px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    .add_icon {
      background-color: rgb(28, 43, 51);
      color: rgb(28, 43, 51);
      mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/muYt7uBOIxe.png);
      height: 16px;
      width: 16px;
      -webkit-mask-position-x: 0px;
      -webkit-mask-position-y: -646px;
      margin-right: 8px;
    }
    .add_icon_gao {
      height: 16px;
      width: 16px;
      mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/pR0H_cyD6Lw.png);
      background-color: rgb(28, 43, 51);
      color: rgb(28, 43, 51);
      -webkit-mask-position-x: -88px;
      -webkit-mask-position-y: -276px;
      margin-right: 8px;
    }
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
  .btt_text {
    margin-top: 8px;
    color: rgba(28, 43, 51, 0.65);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
    font-size: 12px;
    font-weight: 400;
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
  .su_cai {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .su_left {
      .btt_text {
        margin-top: 8px;
        color: rgba(28, 43, 51, 0.65);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
  .big_top {
    display: flex;
    .big_top_left {
      margin-right: 8px;
      background-color: rgb(123, 100, 192);
      color: rgb(123, 100, 192);
      mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/-GyEkqKwLX8.png);
      height: 16px;
      width: 16px;
      -webkit-mask-position-x: 0px;
      -webkit-mask-position-y: -433px;
    }
    .big_top_X {
      margin-right: 8px;
      background-color: rgb(77, 187, 166);
      color: rgb(77, 187, 166);
      mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/7AwdGGThoJt.png);
      height: 16px;
      width: 18px;
      -webkit-mask-position-x: -17px;
      -webkit-mask-position-y: -129px;
    }
  }
  .div_text3_top {
    font-size: 14px;
    font-weight: 700;
  }
  .div_text3_box {
    display: flex;
    align-items: center;
  }
  .top_max_box {
    padding: 16px;
    padding-top: 0px;
    overflow: hidden;
    overflow-y: auto;
    height: 730px;
    .top_max_guano {
      width: 388px !important;
      .top_max1_t_icon_no {
        margin-left: 0px !important;
      }
    }
    .gg_right_box {
      display: flex;
      justify-content: space-between;

      .l_gg_right_box {
        overflow: scroll;
        height: 1000px;
      }
      .l_gg_right_box::-webkit-scrollbar {
        display: none; /* 隐藏 Webkit 浏览器（如 Chrome, Safari）的滚动条 */
      }
      .gg_right_box_bottom {
        width: 526px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 16px;
        .r_box {
          width: 96%;
          height: 100%;
          background: rgb(247, 247, 247);
          border-radius: 4px;
          padding-bottom: 64px;
          .height38 {
            height: 38px;
            width: 100%;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .gg_right_bottom_l {
              display: flex;
              align-items: center;
              position: absolute;
              right: 16px;
              .one_box_2 {
                background-color: rgb(255, 246, 220);
                height: 16px;
                width: 16px;
                color: rgb(175, 80, 0);
                margin-left: 8px;

                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                  Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                  'Segoe UI Emoji', 'Segoe UI Symbol';
                font-size: 12px;
                font-weight: 700;
                border-radius: 50%;
                text-align: center;
              }
              .one_box_1 {
                background-color: rgb(210, 120, 5);
                color: rgb(210, 120, 5);
                mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/2qdc4_H3cyf.png);
                height: 16px;
                width: 16px;
                -webkit-mask-position-x: 0px;
                -webkit-mask-position-y: -205px;
              }
            }
            .box_bottom_l {
              background-color: rgb(225, 237, 247);
              border-radius: 4px;
            }
            .gg_right_box_bottom_l {
              width: 40px;
              height: 30px;
              display: flex;
              align-items: center;
              justify-content: center;

              margin-right: 8px;
              .gg_right_box_bottom_l_1 {
                width: 16px;
                height: 16px;
                background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png);
                background-position-x: -68px;
                background-position-y: -1824px;
              }
              .gg_right_box_bottom_l_2 {
                width: 16px;
                height: 16px;
                background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png);
                background-position-x: -357px;
                background-position-y: -1875px;
              }
              .gg_right_box_bottom_l_3 {
                width: 16px;
                height: 16px;
                background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png);
                background-position-x: -136px;
                background-position-y: -1875px;
              }
              .gg_right_box_bottom_l_4 {
                width: 16px;
                height: 16px;
                -moz-transform: rotate(-90deg);
                -webkit-transform: rotate(-90deg);
                background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/IkFqefhQFHd.png);
                background-position-x: -136px;
                background-position-y: -1875px;
              }
            }
          }
          .r-top_fn {
            height: 54px;
            background: #fff;
            border-radius: 4px 4px 0 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 8px;
            border-bottom: 1px solid rgb(203, 210, 217);

            .r-top_fn_l {
              display: flex;
              align-items: center;
            }
            .r-top_fn_r {
              display: flex;
              align-items: center;
            }
            .su_right36 {
              height: 36px !important;
              width: 62px !important;
              margin-left: 8px;
              .edit_btn {
                padding: 9px 6px 9px 9px;
              }
            }
            .edit_btn_text_w {
              mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/F1pMinsTdjF.png);
              background-color: rgb(28, 43, 51);
              color: rgb(28, 43, 51);
              height: 16px;
              width: 16px;
              -webkit-mask-position-x: -150px;
              -webkit-mask-position-y: -207px;
            }
            .switch_box {
              display: flex;
              align-items: center;
              cursor: pointer;
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
            .r-top_fn_t {
              color: rgb(28, 43, 51);
              cursor: pointer;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                'Segoe UI Emoji', 'Segoe UI Symbol';
              font-size: 14px;
              font-weight: 400;
              margin-left: 8px;
            }
          }
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
      .abner {
        font-size: 14px !important;
        letter-spacing: 1px;
        margin-bottom: 16px;
      }
      .mt16 {
        margin-top: 16px;
      }
      .banc——text {
        font-size: 15px !important;
      }
      .mt_mb_16 {
        margin-top: 16px !important;
        margin-bottom: 16px;
      }
      .bo_q {
        font-size: 14px !important;
        letter-spacing: 1px;
        margin-top: 8px;
        color: rgb(28, 43, 51) !important;
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
      .chg_yi_left {
        color: rgb(28, 43, 51);
        cursor: default;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 14px;
        font-weight: 700;
      }
      .chg_yi {
        display: flex;
        justify-content: space-between;
        margin: 24px 0 8px 0;
      }
      .wan_luo {
        font-weight: 400 !important;
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
      .start——btn {
        width: 58px !important;
        height: 34px !important;
        margin-left: 24px;
        margin-right: 16px;
      }
      .text_btn_box {
        display: flex;
        align-items: center;
      }
      .other——box {
        height: 80px !important;
        align-items: flex-start !important;
      }
      .ggx_right_box1 {
        margin-top: 8px;
      }
      .ggx_right_box {
        margin-top: 16px;
        color: rgb(28, 43, 51);
        font-family: 'Optimistic Display', system-ui, sans-serif;
        font-size: 15px;
        font-weight: 700;
        .color_ggx {
          color: rgb(10, 120, 190);
        }
      }

      .text_btn {
        width: 86px;
        height: 34px;
        border: 1px solid rgb(203, 210, 217);
        border-radius: 4px;
        text-align: center;
        color: rgb(28, 43, 51);
        cursor: pointer;
        font-family: 'Optimistic Display', system-ui, sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 34px;
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
      .left_text_d_flex {
        display: flex;
        align-items: center;
        .left_bIcon {
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/muYt7uBOIxe.png);
          background-position-x: -34px;
          background-position-y: -451px;
          background-repeat: no-repeat;
          background-size: auto;
          height: 12px;
          width: 12px;
          margin-right: 8px;
        }
        .n_img {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          margin-right: 8px;
        }
        .left_text_t {
          color: rgb(28, 43, 51);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 14px;
          font-weight: 400;
        }
      }
      .right_b {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text_b {
          color: rgba(28, 43, 51, 0.65);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
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
      .div_select_w262 {
        width: 218px !important;
      }
      .c_y_type {
        // display: flex;
        margin-bottom: 16px;
        .cl_c {
          color: rgba(28, 43, 51, 0.6) !important;
        }
        .bg_c {
          background: rgb(241, 244, 247);
        }
        .c_y_type_right {
          margin-left: 4px;
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yY/r/muYt7uBOIxe.png);
          background-position-x: -34px;
          background-position-y: -425px;
          background-repeat: no-repeat;
          background-size: auto;
          height: 12px;
          width: 12px;
        }
        .c_y_type_top {
          display: flex;
          align-items: center;
          .c_y_type_left_text {
            margin-left: 8px;
            font-weight: 400 !important;
          }
        }
      }
      .g_y {
        margin-top: 24px;
      }
      .c_y_ly {
        color: rgb(28, 43, 51);
        cursor: default;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 14px;
        font-weight: 700;
      }

      .c_y_ly2 {
        font-size: 12px !important;
        font-weight: 400 !important;
        margin: 8px 0 !important;
      }
      .c_y_type_b {
        padding-left: 32px;
        margin: 0 !important;
      }
      .img_box_li {
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .center_content_text {
          color: rgb(28, 43, 51);
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 14px;
          font-weight: 700;
          width: 240px;
        }
        .left_img {
          display: flex;
          align-items: center;
          .img_box_a {
            width: 48px;
            height: 48px;
            background: rgba(0, 0, 0, 0.05);
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 8px;
          }
          img {
            width: 27px;
            height: 48px;
          }
          .bg_no {
            background: none !important;
            img {
              border-radius: 4px;
            }
          }
          .min_img {
            height: 25px !important;
            img {
              width: 14px !important;
              height: 25px !important;
            }
          }
        }
        .right_img {
          height: 16px;
          width: 16px;
          background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/kyq61n7ov7d.png);
          background-position-x: 0px;
          background-position-y: -609px;
        }
      }
      .big_leftB {
        padding: 12px;
        background-color: rgb(255, 255, 255);
        border-bottom-color: rgb(123, 100, 192);
        border-left-color: rgb(123, 100, 192);
        border-left-style: solid;
        border-right-color: rgb(123, 100, 192);
        border-top-color: rgb(123, 100, 192);
        border-left-width: 4px;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
          rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
        color: rgb(28, 30, 33);
        font-family: Roboto, Arial, sans-serif;
        font-size: 13px;
      }
      .top4_t_l4px {
        margin-left: 9px !important;
        letter-spacing: 1px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol' !important;
      }
      .big_top__icon {
        mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/-GyEkqKwLX8.png);
        background-color: rgb(210, 120, 5);
        color: rgb(210, 120, 5);
        width: 16px;
        -webkit-mask-position-x: -21px;
        -webkit-mask-position-y: -160px;
        height: 16px;
        margin-top: 4px;
      }
      .div_flex {
        display: flex;
      }
      .mt_ml {
        margin-top: 16px;
        margin-left: 24px;
      }
      .big_leftB_y {
        border-bottom-color: rgb(210, 120, 5) !important;
        border-left-color: rgb(210, 120, 5) !important;
        border-right-color: rgb(210, 120, 5) !important;
        border-top-color: rgb(210, 120, 5) !important;
        font-size: 14px !important;
        margin-top: 16px;
      }
      .big_leftB_x {
        border-bottom-color: rgb(77, 187, 166) !important;
        border-left-color: rgb(77, 187, 166) !important;
        border-right-color: rgb(77, 187, 166) !important;
        border-top-color: rgb(77, 187, 166) !important;
        font-size: 14px !important;
        margin-top: 16px;
      }
      .lisp_x {
        letter-spacing: 0.5px;
      }
      .zui_box {
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .zui_box_t {
          .zui_box_t_text {
            margin-bottom: 8px;
            color: rgb(28, 43, 51);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 12px;
            font-weight: 400;
            .one_text {
              font-weight: 700;
              margin-right: 4px;
            }
          }
        }
      }
      .lisp_x_icon {
        background-color: rgb(40, 57, 67);
        color: rgb(40, 57, 67);
        mask-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/2qdc4_H3cyf.png);
        height: 12px;
        width: 12px;
        -webkit-mask-position-x: -39px;
        -webkit-mask-position-y: -273px;
        display: inline-block;
        margin-left: 4px;
      }
      .padd_16 {
        padding: 0 16px;
        margin-left: 24px;
        margin-top: 8px;
      }

      .big_bottom {
        margin-top: 8px;
        padding-left: 24px;
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
    .no_item_center {
      align-items: flex-start !important;
    }
    .no_mar {
      margin-left: 0px !important;
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
        .step_on {
          background: none !important;
        }
        .step_one {
          display: flex;
          align-items: center;
          background: rgb(225, 237, 247);
          padding: 4px;
          border-radius: 4px;
        }
        .step_one_icon {
          margin-right: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step_two_icon {
        }
        .step_three_icon {
        }
        .step_one_text {
          color: rgb(10, 120, 190);
          // color: rgba(28, 43, 51, 0.65);
          cursor: pointer;
          font-size: 15px;
          font-weight: 400;
        }
        .step_one_box {
          color: rgba(28, 43, 51, 0.65);
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
      background: rgb(225, 237, 247);
    }
    .left_edit {
      display: flex;
      align-items: center;
      width: 76px;
      height: 36px;
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
      width: 272px;
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
