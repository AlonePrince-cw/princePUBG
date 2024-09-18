<template>
  <div>
    <div
      class="content_table"
      style="padding: 32px; display: flex; justify-content: center"
    >
      <div>
        <div style="margin-top: 132px; font-size: 14px; color: chocolate">
          把你的账户复制出来放到里面就可以了
        </div>
        <el-input
          style="margin-top: 32px; width: 800px"
          type="textarea"
          :autosize="{ minRows: 20, maxRows: 20 }"
          placeholder="请输入内容"
          v-model="textarea2"
        >
        </el-input>
      </div>
      <div
        class="number_box"
        style="margin-bottom: 32px; width: 800px; margin-left: 48px"
      >
        <div class="nom">
          <div style="margin: 32px; margin-left: 0">账户编号筛选器：</div>
          <div
            style="
              margin: 32px;
              margin-left: 0;
              text-align: center;
              font-size: 16px;
            "
          >
            你的账户只有
           <span style="color: red;font-size: 18px;margin: 0 4px;"> {{
              showNumber.length
            }}</span>个，支持账户从小到大排序，支持账户过滤已禁用账户
          </div>
          <div
            ref="myDiv"
            style="
              width: 500px;
              display: flex;
              justify-content: space-between;
              margin-bottom: 4px;
            "
            v-for="(item, index) in showNumber"
            :key="index"
          >
            <div
              style="
                font-size: 16px;
                margin-right: 32px;
                width: 300px;
                user-select: none;
              "
            >
              {{ item.agentName }}-
              <span style="color: #000; font-weight: 900">{{
                item.sortNo
              }}</span>
            </div>
            <div class="number">{{ item.id }}</div>
          </div>
        </div>
        <div style="display: flex; margin-top: 32px; justify-content: center">
          <div>
            <div>
              <el-button type="success" @click="getAllNumber()"
                >提取所有编号并复制</el-button
              >
              <el-button type="warning" @click="clearInput()"
                >一键清空输入框</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      textarea2: '',
      showNumber: '',
      adsProxyName: '',
      input1: '',
      input2: '',
      allNumber: [],
    }
  },
  mounted() {
    // 也可以直接添加事件监听
    this.preventCopyForElement('no-copy')
  },
  beforeDestroy() {
    // 记得移除事件监听以避免内存泄漏
  },
  methods: {
    preventCopyForElement(elementId) {
      const element = document.getElementById(elementId)
      document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 'c') {
          const selection = window.getSelection()
          const selectedText = selection.toString()

          // 使用正则表达式匹配所有超过5位数的数字
          const regex = /\b\d{6,}\b/g
          const matches = selectedText.match(regex)

          // 将匹配的数字用换行符连接
          const result = matches ? matches.join('\n') : ''

          // 输出结果
          // console.log(result)

          //----------------------------------------------------------

          // 创建一个临时的textarea元素
          const needCopyDom = document.createElement('textarea')

          needCopyDom.value = result
          document.body.appendChild(needCopyDom)
          needCopyDom.select()
          needCopyDom.setSelectionRange(0, 99999) // For mobile devices

          try {
            // 执行复制操作
            document.execCommand('copy')
            this.$message({
              type: 'success',
              message: '文本已复制到剪贴板!',
            })
          } catch (err) {
            this.$message({
              type: 'error',
              message: '复制失败!',
            })
          }

          // 移除临时的textarea元素
          document.body.removeChild(needCopyDom)

          //----------------------------------------------------------

          if (
            selection.anchorNode &&
            selection.anchorNode.parentElement === element
          ) {
            event.preventDefault()
          }
        }
      })
    },
    clearInput() {
      this.textarea2 = ''
    },
    copyNumber() {
      // 选择所有具有相同类名的div元素
      const viewDom = document.querySelectorAll('.number') // 替换为实际的类名选择器

      // 提取每个div中的文本，并用换行符分隔
      const texts = Array.from(viewDom)
        .map((div) => div.textContent.trim())
        .join('\n') // 使用 '\n\n' 作为段落分隔符

      // 创建一个临时的textarea元素
      const textarea = document.createElement('textarea')
      textarea.value = texts
      document.body.appendChild(textarea)
      textarea.select()
      textarea.setSelectionRange(0, 99999) // For mobile devices

      try {
        // 执行复制操作
        document.execCommand('copy')
        this.$message({
          type: 'success',
          message: '文本已复制到剪贴板!',
        })
      } catch (err) {
        this.$message({
          type: 'error',
          message: '复制失败!',
        })
      }

      // 移除临时的textarea元素
      document.body.removeChild(textarea)
    },
    getAllNumber() {
      let resultArray = []
      let ownerArray = []
      const text = `${this.textarea2}` // 将数据文本放在这里
      for (let i = 0; i < this.textarea2.split('\n').length; i++) {
        const line = this.textarea2.split('\n')[i].trim()
        if (
          line.startsWith('雨果') ||
          line.startsWith('亿帆') ||
          line.startsWith('亿帆1') ||
          line.startsWith('亿帆2') ||
          line.startsWith('亿帆3') ||
          line.startsWith('钛动1') ||
          line.startsWith('钛动2') ||
          line.startsWith('钛动') ||
          line.startsWith('猎豹') ||
          line.startsWith('猎豹1') ||
          line.startsWith('猎豹2') ||
          line.startsWith('猎豹3')
        ) {
          const filterNumber = line.split('-').slice(0, -1)
          let result = filterNumber.join('-')
          resultArray.push(result)
         resultArray = [...new Set(resultArray)]
        }
        if (line.startsWith('所有者：')) {
          ownerArray.push(line.split('：')[1].trim())
          // ownerArray = [...new Set(ownerArray)]
        }
      }
      const dataArray = []

      resultArray.forEach((item,index) => {
        const regexString = `${item}-(\\d+)\\n编号：(\\d+)\\n所有者：${ownerArray[index]}\\n(使用中|已停用)`
        const regex = new RegExp(regexString, 'g')
        let match
        while ((match = regex.exec(text)) !== null) {
          dataArray.push({
            agentName: item,
            sortNo: Number(match[1]),
            id: match[2],
            status: match[3],
          })
        }
      })
      const filterArray = dataArray
        .filter((item) => {
          return item.status === '使用中'
        })
        .sort((a, b) => {
          return parseInt(a.sortNo) - parseInt(b.sortNo)
        })
      this.showNumber = filterArray

      let timer = setTimeout(() => {
        this.copyNumber()
        clearTimeout(timer)
      }, 500)
    },
  },
}
</script>
<style lang="scss" scoped>
.r_nom {
  display: flex;
  align-items: center;
}
.nom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
