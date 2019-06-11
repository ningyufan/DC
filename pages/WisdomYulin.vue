<template>
  <div>
    <el-table
      :data="configs"
      border
      stripe
      style="width: 100%">
      <el-table-column
        fixed
        sortable
        prop="id"
        label="ID"
        
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        sortable
        label="名称"
        width="300">
      </el-table-column>
      <el-table-column
        sortable
        prop="value"
        label="取值"
        width="300">
      </el-table-column>
      <el-table-column
        sortable
        prop="description"
        label="描述">
      </el-table-column>
    </el-table>

    <Pagination url="/config/list" v-model="configs" :page-size="10"/>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      configs: [{id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},
      {id:'1',name:'gg',value:'10',description:'rrr'},]

    };
  }
};
</script>