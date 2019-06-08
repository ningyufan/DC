<template>
    <div class='wisdomyulin'>
        <el-container>
            <el-aside width="15%">Aside</el-aside>
            <el-container>
                <el-header>Header</el-header>
                <el-main>
                    <div style="margin-left: 10vh;margin-right: 10vh">
                        <i class="el-icon-edit" style="font-size: 20px"> <b>智慧玉林</b></i>
                        <hr>
                        <br>
                        <i class="el-icon-star-off" style="font-size: 16px"> <b>智慧侨乡</b></i>
                        <hr>
                        <el-row :gutter="20" style=" margin-top: 10px">
                          <el-col :span="6">
                            <div class="grid-content bg-purple"> 
                              <el-image style="width: 180px; height:100px" :src="src1"></el-image>
                              <a href="https://www.sogou.com/link?url=DSOYnZeCC_oFmTickJ_wjzMkVIumkSMDxv33361K0LSteaJZoPMQrCXw5Pqtik-2" target="_blank" title="授旗仪式">授旗仪式</a>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <el-image style="width: 180px; height:100px" :src="src2"></el-image>
                              <a href="https://baike.sogou.com/v8443782.htm" target="_blank" title="都峤山">都峤山</a>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <el-image style="width: 180px; height:100px" :src="src3"></el-image>
                              <a href="https://baike.sogou.com/v441012.htm" target="_blank" title="真武阁">真武阁</a>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <el-image style="width: 180px; height:100px" :src="src4"></el-image>
                              <a href="http://www.sohu.com/a/239514158_100019048" target="_blank" title="工作交流会">工作交流会</a>
                            </div>
                            </el-col>
                        </el-row>
                        
                        <br>
                        <i class="el-icon-star-off" style="font-size: 16px"> <b>农业大数据</b></i>
                        <hr>
                        <el-row :gutter="20" style=" margin-top: 10px">
                          <el-col :span="6">
                            <div class="grid-content bg-purple"> 
                              <el-image style="width: 180px; height:100px" :src="src1"></el-image>
                              <a href="https://www.sogou.com/link?url=DSOYnZeCC_oFmTickJ_wjzMkVIumkSMDxv33361K0LSteaJZoPMQrCXw5Pqtik-2" target="_blank" title="授旗仪式">授旗仪式</a>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <el-image style="width: 180px; height:100px" :src="src2"></el-image>
                              <a href="https://baike.sogou.com/v8443782.htm" target="_blank" title="都峤山">都峤山</a>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <el-image style="width: 180px; height:100px" :src="src3"></el-image>
                              <a href="https://baike.sogou.com/v441012.htm" target="_blank" title="真武阁">真武阁</a>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <el-image style="width: 180px; height:100px" :src="src4"></el-image>
                              <a href="http://www.sohu.com/a/239514158_100019048" target="_blank" title="工作交流会">工作交流会</a>
                            </div>
                            </el-col>
                        </el-row>

                        <br>
                        <i class="el-icon-star-off" style="font-size: 16px"> <b>中药特色产业</b></i>
                        <hr>
                        <el-row :gutter="20" style=" margin-top: 10px">
                          <el-col :span="6">
                            <div class="grid-content bg-purple"> 
                              <el-image style="width: 180px; height:100px" :src="src1"></el-image>
                              <a href="https://www.sogou.com/link?url=DSOYnZeCC_oFmTickJ_wjzMkVIumkSMDxv33361K0LSteaJZoPMQrCXw5Pqtik-2" target="_blank" title="授旗仪式">授旗仪式</a>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <el-image style="width: 180px; height:100px" :src="src2"></el-image>
                              <a href="https://baike.sogou.com/v8443782.htm" target="_blank" title="都峤山">都峤山</a>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <el-image style="width: 180px; height:100px" :src="src3"></el-image>
                              <a href="https://baike.sogou.com/v441012.htm" target="_blank" title="真武阁">真武阁</a>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <el-image style="width: 180px; height:100px" :src="src4"></el-image>
                              <a href="http://www.sohu.com/a/239514158_100019048" target="_blank" title="工作交流会">工作交流会</a>
                            </div>
                            </el-col>
                        </el-row>

                        <br>
                        <i class="el-icon-star-off" style="font-size: 16px"> <b>玉林5G时代</b></i>
                        <hr>
                        <el-row :gutter="20" style=" margin-top: 10px">
                          <el-col :span="6">
                            <div class="grid-content bg-purple"> 
                              <el-image style="width: 180px; height:100px" :src="src1"></el-image>
                              <a href="https://www.sogou.com/link?url=DSOYnZeCC_oFmTickJ_wjzMkVIumkSMDxv33361K0LSteaJZoPMQrCXw5Pqtik-2" target="_blank" title="授旗仪式">授旗仪式</a>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <el-image style="width: 180px; height:100px" :src="src2"></el-image>
                              <a href="https://baike.sogou.com/v8443782.htm" target="_blank" title="都峤山">都峤山</a>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <el-image style="width: 180px; height:100px" :src="src3"></el-image>
                              <a href="https://baike.sogou.com/v441012.htm" target="_blank" title="真武阁">真武阁</a>
                            </div>
                          </el-col>
                          <el-col :span="6">
                            <div class="grid-content bg-purple">
                              <el-image style="width: 180px; height:100px" :src="src4"></el-image>
                              <a href="http://www.sohu.com/a/239514158_100019048" target="_blank" title="工作交流会">工作交流会</a>
                            </div>
                            </el-col>
                        </el-row>

                    </div>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
            <el-aside width="15%">Aside</el-aside>
        </el-container>

    </div>
</template>

<script>
export default {
    data(){
        return{
          src1:'http://5b0988e595225.cdn.sohucs.com/images/20180705/981c471786994142be4b8cbc36fd3c4e.jpeg',
          src2:'https://pic.baike.soso.com/ugc/baikepic2/7081/20150323101848-1118155232.jpg/0',
          src3:'https://pic.baike.soso.com/ugc/baikepic2/8998/20150119110206-672973658.jpg/0',
          src4:'http://5b0988e595225.cdn.sohucs.com/images/20180705/da6aa5958ffc4c039113cef66012acf0.jpeg',
        }
    }
}
</script>
<style>
 .wisdomyulin{
  
    
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 10vh;
  }
  .el-aside {
    background-color: rgb(255, 255, 255);
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 80vh;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
    
  }


  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #E9EEF3;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>