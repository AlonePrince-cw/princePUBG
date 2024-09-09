<template>
  <div>
    <div class="content_table" style="padding: 32px">
      <div
        class="number_box"
        style="margin-bottom: 32px; width: 1000px; display: flex"
      >
        <div class="nom">
          <div style="margin: 32px; margin-left: 0">编号筛选器：</div>
          <div
            style="
              margin: 32px;
              margin-left: 0;
              color: red;
              text-align: center;
              font-size: 28px;
            "
          >
            需要什么样的功能！可以提需求！但我不一定会做 你的账户只有
            {{
              showNumber.length
            }}个，支持账户从小到大排序，支持账户过滤已禁用账户
          </div>
          <div
            ref="myDiv"
            style="width: auto; display: flex"
            v-for="(item, index) in showNumber"
            :key="index"
            @copy="disableCopy($event)"
          >
            <div style="font-size: 16px; margin-right: 32px; width: 120px">
              编号： {{ item.numberNo }}
            </div>
            <div class="number">{{ item.serialNumber }}</div>
          </div>
        </div>
      </div>

      <div style="display: flex">
        <div>
          <div>
            <el-button type="success" @click="getAllNumber()"
              >提取所有编号并复制</el-button
            >
            <!-- <el-button type="warning" @click="copyNumber()">复制编号</el-button> -->
            <el-button type="warning" @click="clearInput()"
              >一键清空输入框</el-button
            >
          </div>

          <div style="margin-top: 32px; font-size: 14px; color: chocolate">
            把你的账户复制出来放到里面就可以了
          </div>
        </div>

        <div style="width: 600px; margin-top: -28px">
          <div style="margin-left: 48px; margin-bottom: 8px">
            输入你提取的编号的排序位置：
          </div>
          <div style="display: flex">
            <el-input
              style="width: 150px; margin-left: 32px"
              type="number"
              v-model="input1"
            />
            <el-input
              style="width: 150px; margin-left: 32px"
              type="number"
              v-model="input2"
            />
            <el-button
              type="success"
              style="margin-left: 16px"
              @click="getFilterNumber()"
              >提取筛选编号并复制</el-button
            >
          </div>
        </div>
      </div>
      <el-input
        style="margin-top: 32px; width: 1000px"
        type="textarea"
        :autosize="{ minRows: 20, maxRows: 20 }"
        placeholder="请输入内容"
        v-model="textarea2"
      >
      </el-input>
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
    this.$refs.myDiv.addEventListener('copy', this.disableCopy)
  },
  beforeDestroy() {
    // 记得移除事件监听以避免内存泄漏
    this.$refs.myDiv.removeEventListener('copy', this.disableCopy)
  },
  methods: {
    disableCopy(event) {
      event.preventDefault()
      this.$message({
        type: 'error',
        message: '你小子不准复制!',
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
      const lines = this.textarea2.split('\n')
      const numbers = []
      const numbersNo = []
      const statuses = []
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()
        if (line.startsWith('编号：')) {
          const number = line.substring(3).trim()
          numbers.push(number)
        }
        if (
          line.startsWith('雨果') ||
          line.startsWith('亿帆') ||
          line.startsWith('钛动1') ||
          line.startsWith('钛动2') ||
          line.startsWith('钛动')
        ) {
          numbersNo.push(line.split('-').pop())
        }
        if (line === '使用中' || line === '已停用') {
          statuses.push(line)
        }
      }
      const viewData = numbers.map((item, index) => ({
        serialNumber: item,
        numberNo: numbersNo[index],
      }))
      const sortedDataDesc = viewData.sort((a, b) => {
        return parseInt(a.numberNo) - parseInt(b.numberNo)
      })
      this.allNumber = sortedDataDesc
      const validNumbers = []
      for (let i = 0; i < numbers.length; i++) {
        if (statuses[i] === '使用中') {
          validNumbers.push(numbers[i])
        }
      }
      this.showDataB = validNumbers
      const showData = []
      sortedDataDesc.map((item) => {
        const numberNo = item.serialNumber
        validNumbers.includes(numberNo) ? showData.push(item) : ''
      })

      this.showNumber = showData

      let timer = setTimeout(() => {
        this.copyNumber()
        clearTimeout(timer)
      }, 500)
    },
    getFilterNumber() {
      const lines = this.textarea2.split('\n')
      const numbers = []
      const numbersNo = []
      const statuses = []
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim()
        if (line.startsWith('编号：')) {
          const number = line.substring(3).trim()
          numbers.push(number)
        }
        if (
          line.startsWith('雨果') ||
          line.startsWith('亿帆') ||
          line.startsWith('钛动1') ||
          line.startsWith('钛动2') ||
          line.startsWith('钛动')
        ) {
          numbersNo.push(line.split('-').pop())
        }
        if (line === '使用中' || line === '已停用') {
          statuses.push(line)
        }
      }
      const viewData = numbers.map((item, index) => ({
        serialNumber: item,
        numberNo: numbersNo[index],
      }))
      const sortedDataDesc = viewData.sort((a, b) => {
        return parseInt(a.numberNo) - parseInt(b.numberNo)
      })
      const filteredData = sortedDataDesc.filter((item) => {
        const number = parseInt(item.numberNo, 10)
        return number >= this.input1 && number <= this.input2
      })
      const validNumbers = []
      for (let i = 0; i < numbers.length; i++) {
        if (statuses[i] === '使用中') {
          validNumbers.push(numbers[i])
        }
      }
      const showData = []
      filteredData.map((item) => {
        const numberNo = item.serialNumber
        validNumbers.includes(numberNo) ? showData.push(item) : ''
        console.log('validNumbers', item)
      })
      console.log('validNumbers', showData)
      this.showNumber = showData

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
</style>
