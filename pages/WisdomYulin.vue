<template>
  <div >
    <ul class="pagesInner">
      <li class="page"><span class="fa fa-chevron-left" aria-hidden="true"></span></li>
      <li class="page" v-for="(item, index) in pages" :key="index">
        <span>{{item}}</span>
      </li>
      <li class="page"><span class="fa fa-chevron-right" aria-hidden="true"></span></li>
    </ul>
    <el-pagination
    :page-size="20"
    :pager-count="11"
    layout="prev, pager, next"
    :total="1000"
    >
    <div>wrwrwerwriwjiojiorwejij</div>
  </el-pagination>



  </div>
</template>
 
<script>
export default {
  computed: {
    pages() {
      return 5;
    }
  }
};
</script>
