<template>
    <div class="digitalGx" style="margin-left: 10vh;margin-right: 10vh">
        <br>
        <div class="icon-warp">
       <i class="el-icon-edit" style="font-size: 20px"> <b>建设行动</b></i>
        </div>
       <hr>
        <br>
        <el-row :gutter="20">
            <el-col :span="12">
            <div class="grid-content1 bg-purple1">
                <el-row >
                    <el-col :span="8">
                    <div class="grid-content1 bg-purple1">
                        <el-image style="width: 150px; height:100px" :src="src1"></el-image>
                    </div>
                    </el-col>
                    <el-col :span="16">
                    <div class="grid-content1 bg-purple-light1">
                        <b style="font-size:12px">把握六个基本原则</b>
                        <p style="font-size:12px">系统布局，统筹推进；突出特色，强调融合；政府引导，市场主导；
                            深化改革，创新驱动；开放带动，合作共赢；绿色低碳，安全可控</p>
                        <el-button type="primary" size="small"><a href="http://www.gxzf.gov.cn/zwgk/zfwj/20180917-713374.shtml" target="_blank">阅读详情</a></el-button>
                    </div>
                    </el-col>
                </el-row>
                <br>
                <el-row >
                    <el-col :span="8">
                    <div class="grid-content1 bg-purple1">
                        <el-image style="width: 150px; height:100px" :src="src2"></el-image>
                    </div>
                    </el-col>
                    <el-col :span="16">
                    <div class="grid-content1 bg-purple-light1">
                        <b style="font-size:12px">构建智能制造产业生态</b>
                        <p style="font-size:12px">以南宁、柳州、桂林三大智能制造城市建设为引领，推动广西制糖、石化、有色金属、汽车等传统优势制造业发展智能制造，积极培育智能高端装备、智能网联汽车等新型融合产品，形成智能制造为驱动的新型工业体系。</p>
                        <el-button type="primary" size="small"><a href="http://www.gxzf.gov.cn/zwgk/zfwj/20180917-713374.shtml" target="_blank">阅读详情</a></el-button>
                    </div>
                    </el-col>
                </el-row>
                <br>
                <el-row >
                    <el-col :span="8">
                    <div class="grid-content1 bg-purple1">
                        <el-image style="width: 150px; height:100px" :src="src3"></el-image>
                    </div>
                    </el-col>
                    <el-col :span="16">
                    <div class="grid-content1 bg-purple-light1">
                        <b style="font-size:12px">推进服务业数字化</b>
                        <p style="font-size:12px">加快推进数字技术与生活性服务业融合发展，积极培育智慧旅游、智慧健康养老、数字文化创意等新业态，提升生活服务水平，丰富百姓生活新体验。</p>
                        <el-button type="primary" size="small"><a href="http://www.gxzf.gov.cn/zwgk/zfwj/20180917-713374.shtml" target="_blank">阅读详情</a></el-button>
                    </div>
                    </el-col>
                </el-row>
            </div>
            <!-- <hr>
            <el-form :inline="true">
                <el-form-item style="float:left;">
                    <div class="icon-warp">
                    <i class="el-icon-caret-left"></i>
                    </div>
                </el-form-item>
                <el-form-item style="float:right">
                    <div class="icon-warp">
                    <i class="el-icon-caret-right"></i>
                    </div>
                </el-form-item>
            </el-form> -->
            </el-col>
            <el-col :span="12">
            <div class="grid-content1 bg-purple1">
                <el-row >
                    <div class="icon-warp">
                    <i class="el-icon-view" style="font-size: 20px" > <b>成果展示</b></i>
                    </div>
                    <br>
                    <el-carousel :interval="4000" type="card" height="200px">
                        <el-carousel-item><el-image style="width: 300px; height:200px" :src="src4"></el-image></el-carousel-item>
                        <el-carousel-item><el-image style="width: 300px; height:200px" :src="src5"></el-image></el-carousel-item>
                        <el-carousel-item><el-image style="width: 300px; height:200px" :src="src6"></el-image></el-carousel-item>
                    </el-carousel>
                </el-row>
                <br>
                <el-row >
                    <div class="icon-warp">
                    <i class="el-icon-location" style="font-size: 20px"> <b>各地区智慧数字成果</b></i>
                    </div>
                    <br>
                    <el-form :inline="true">
                        <el-form-item><el-button type="primary">南宁</el-button></el-form-item>
                        <el-form-item><el-button type="primary">桂林</el-button></el-form-item>
                        <el-form-item><el-button type="primary">钦州</el-button></el-form-item>
                        <el-form-item><el-button type="primary">百色</el-button></el-form-item>
                        <el-form-item><el-button type="primary">来宾</el-button></el-form-item>
                    </el-form>
                    <el-form :inline="true">
                        <el-form-item><el-button type="primary">柳州</el-button></el-form-item>
                        <el-form-item><el-button type="primary">梧州</el-button></el-form-item>
                        <el-form-item><el-button type="primary">贵港</el-button></el-form-item>
                        <el-form-item><el-button type="primary">河池</el-button></el-form-item>
                        <el-form-item><el-button type="primary">崇左</el-button></el-form-item>
                    </el-form>
                    <el-form :inline="true">
                        <el-form-item><el-button type="primary">北海</el-button></el-form-item>
                        <el-form-item><el-button type="primary">玉林</el-button></el-form-item>
                        <el-form-item><el-button type="primary">防城港</el-button></el-form-item>
                        <el-form-item><el-button type="primary">贺州</el-button></el-form-item>
                    </el-form>
                </el-row>
                <br>
                <el-row >
                <el-col :span="24">
                    <div class="grid-content2 bg-purple-light2">
                        数字广西动态
                    </div>
                </el-col>
                 <el-row >
                    <el-col :span="8">
                    <div class="grid-content1 bg-purple1">
                        <el-image style="width: 150px; height:100px" :src="src1"></el-image>
                    </div>
                    </el-col>
                    <el-col :span="16">
                    <div class="grid-content1 bg-purple-light1">
                        <b style="font-size:12px">把握六个基本原则</b>
                        <p style="font-size:12px">系统布局，统筹推进；突出特色，强调融合；政府引导，市场主导；
                            深化改革，创新驱动；开放带动，合作共赢；绿色低碳，安全可控</p>
                        <el-button type="primary" size="small"><a href="http://www.gxzf.gov.cn/zwgk/zfwj/20180917-713374.shtml" target="_blank">阅读详情</a></el-button>
                    </div>
                    </el-col>
                </el-row>
                <br>
                <el-row >
                    <el-col :span="8">
                    <div class="grid-content1 bg-purple1">
                        <el-image style="width: 150px; height:100px" :src="src2"></el-image>
                    </div>
                    </el-col>
                    <el-col :span="16">
                    <div class="grid-content1 bg-purple-light1">
                        <b style="font-size:12px">构建智能制造产业生态</b>
                        <p style="font-size:12px">以南宁、柳州、桂林三大智能制造城市建设为引领，推动广西制糖、石化、有色金属、汽车等传统优势制造业发展智能制造，积极培育智能高端装备、智能网联汽车等新型融合产品，形成智能制造为驱动的新型工业体系。</p>
                        <el-button type="primary" size="small"><a href="http://www.gxzf.gov.cn/zwgk/zfwj/20180917-713374.shtml" target="_blank">阅读详情</a></el-button>
                    </div>
                    </el-col>
                </el-row>
                <br>
                <el-row >
                    <el-col :span="8">
                    <div class="grid-content1 bg-purple1">
                        <el-image style="width: 150px; height:100px" :src="src3"></el-image>
                    </div>
                    </el-col>
                    <el-col :span="16">
                    <div class="grid-content1 bg-purple-light1">
                        <b style="font-size:12px">推进服务业数字化</b>
                        <p style="font-size:12px">加快推进数字技术与生活性服务业融合发展，积极培育智慧旅游、智慧健康养老、数字文化创意等新业态，提升生活服务水平，丰富百姓生活新体验。</p>
                        <el-button type="primary" size="small"><a href="http://www.gxzf.gov.cn/zwgk/zfwj/20180917-713374.shtml" target="_blank">阅读详情</a></el-button>
                    </div>
                    </el-col>
                </el-row>
                </el-row>
            </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            src1:'http://image.gxnews.com.cn/uploadpic/2018/08/30/6c5275b59a09de08b4e58e5985641190.jpg',
            src2:'http://image.gxnews.com.cn/uploadpic/2018/09/12/eaec1d96c7e6d273e46492f77b173ec0.jpg',
            src3:'http://d.gxzf.gov.cn/image/uploadpic/2018/09/17/0388e5cb85c384a36eef8c7eca6c7455.jpg',
            src4:'http://image.gxnews.com.cn/uploadpic/2017/12/28/19dd883a1f05c736bd326cb76a9eb6cc.jpg',
            src5:'http://image.gxnews.com.cn/uploadpic/2017/12/28/5996e74cfe6ee957cfc1301d22bc87fe.jpg',
            src6:'http://image.gxnews.com.cn/uploadpic/2017/12/28/50a38a558b784d21fdb86d2cd850f33f.jpg',
        }
    },
    
}
</script>

<style>
 .el-col1 {
    border-radius: 4px;
  }
  .bg-purple-dark1 {
    background: #99a9bf;
  }
  .bg-purple1 {
    background: rgb(246, 249, 252);
  }
  .bg-purple-light1 {
    background: rgb(246, 249, 252);
  }
  .grid-content1 {
    border-radius: 4px;
    min-height: 36px;

  }
  .row-bg1 {
    padding: 10px 0;
    background-color: #f9fafc;

  }
  .bg-purple-light2 {
    background: rgb(110, 177, 245);
  }
  .grid-content2 {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
    margin-top: 10px;
    line-height: 30px;

  }
  .icon-warp{
      font-size: 20px;
  }
</style>