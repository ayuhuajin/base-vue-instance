<template>
  <div class="excel-demo">
    <el-button @click="excelImport">导入</el-button>
    <el-button @click="excelExport">导出</el-button>
  </div>
</template>

<script>
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      data: '导入导出',
      data1: [
        {
          options: [
            {
              name: 'A',
              value: '3',
              isCheck: false
            },
            {
              name: 'B',
              value: '5',
              isCheck: true
            },
            {
              name: 'C',
              value: '44',
              isCheck: false
            }
          ],
          chooseList: [],
          answer: ['B'],
          _id: '5eaff8186903d3044886c190',
          questionNum: 3,
          questionType: 1,
          questionTitle: '55',
          level: 2,
          subject: 1,
          testPaper: '5ead9adab5bd814c084e6e6f',
          questionDesc: '56456456',
          time: '2020-05-04T11:10:16.843Z',
          reply: '',
          __v: 0
        },
        {
          options: [
            {
              name: 'A',
              value: '鼠来宝',
              isCheck: false
            },
            {
              name: 'B',
              value: '树大根深',
              isCheck: true
            },
            {
              name: 'C',
              value: '书书书',
              isCheck: false
            }
          ],
          chooseList: [],
          answer: ['B'],
          _id: '5eafdadaf5afe1476c59ba63',
          questionNum: 3,
          questionType: 1,
          questionTitle: '阅读下面的文字,按要求作答。睿智的思想,高尚的情感,灵动的才智,无不贮藏于根深叶茂的文学之树',
          level: 2,
          subject: 1,
          testPaper: '5ead9adab5bd814c084e6e6f',
          questionDesc: '答案选B',
          time: '2020-05-04T09:05:30.281Z',
          reply: '',
          __v: 0
        }
      ]
    };
  },
  methods: {
    excelImport() {
      console.log('导入');
    },
    excelExport() {
      console.log('导出');
    }
  }
});
</script>
<style lang="scss" scoped></style>
