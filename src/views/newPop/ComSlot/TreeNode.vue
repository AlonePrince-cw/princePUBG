<template>
  <div>
    <div class="file_x">
      <div
        class="xilie"
        @click="toggle"
        :style="{ paddingLeft: level * 20 + 'px' }"
      >
        <div class="file_l">
          <div class="left_icon"></div>
          <div class="center_text">{{ item.name }}</div>
        </div>
        <div class="right_icon">
          <!-- <span v-if="hasChildren" class="toggle-icon">{{
            isOpen ? '[-]' : '[+]'
          }}</span> -->
        </div>
      </div>
    </div>

    <!-- 递归渲染子节点 -->
    <div v-if="isOpen && hasChildren">
      <tree-node
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        :level="level + 1"
      >
      </tree-node>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    hasChildren() {
      return Array.isArray(this.item.children) && this.item.children.length > 0
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style lang="scss" scoped>
.xilie {
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  height: 46px;
}

.toggle-icon {
  font-weight: bold;
}
.file_x:hover{
  background: rgb(225, 237, 247)
;
}
.file_x {
  cursor: pointer;
  padding: 0 16px;
  .file_l {
    display: flex;
  }
  .right_icon {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/5ffohX21Pdw.png);
    background-position-x: -147px;
    background-position-y: -2227px;
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    /* // background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/Y2CLjbmxPzF.png);
          // background-position-x: 0px;
          // background-position-y: -117px; */
  }
  .left_icon {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/kyq61n7ov7d.png);
    background-position-x: 0px;
    background-position-y: -319px;
    background-repeat: no-repeat;
    background-size: auto;
    width: 16px;
    height: 16px;
    background-color: rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    margin-right: 8px;
  }
  .center_text {
    font-size: 14px;
    font-weight: 400;
    color: rgb(28, 43, 51);
  }
}
</style>
