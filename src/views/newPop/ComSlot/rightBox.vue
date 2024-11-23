<template>
  <div class="content-box">
    <div class="content-box__left">
      <div class="left_top_box">
        <div class="close">
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
        <!-- <div class="file_x" v-for="(item,index) in childArray" :key="index">
          <div class="xilie" >
            <div class="file_l">
              <div class="left_icon"></div>
              <div class="center_text">{{item.name}}</div>
            </div>
            <div class="right_icon"></div>
          </div>
        </div> -->
        <tree-node v-for="(node, index) in treeData" 
               :key="index" 
               :item="node" 
               :level="0">
    </tree-node>
      </div>
    </div>
    <div class="content-box__right"></div>
  </div>
</template>

<script>
import TreeNode from './TreeNode.vue';
export default {
  components: {
    TreeNode
  },
  data() {
    return {
      // 树形数据
      treeData: [
        {
          name: '根节点 1',
          children: [
            {
              name: '子节点 1-1',
              children: [
                {
                  name: '子节点 1-1-1',
                  children: []
                },
                {
                  name: '子节点 1-1-2',
                  children: []
                }
              ]
            },
            {
              name: '子节点 1-2',
              children: []
            }
          ]
        },
        {
          name: '根节点 2',
          children: [
            {
              name: '子节点 2-1',
              children: []
            }
          ]
        }
      ],
      childArray: [
        {
          name: '拌面-GAN-6线',
          type: 1,
          fileType: 1,
          childArray: [
            {
              name: '��面-GAN-6线',
              type: 2,
              fileType: 2,
              childArray: [
                {
                  name: '��面-GAN-6线',
                  type: 3,
                  fileType: 3
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.content-box {
  cursor: pointer;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  position: absolute;
  width: 70%;
  height: 99.8%;
  right: 0;
  top: 0;
  border: 1px solid black;
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
    border-right: 1px solid rgb(198, 201, 204);
    display: flex;
    flex-direction: column;
    padding-top: 8px;
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
