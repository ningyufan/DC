<template>
    <div class="WisdomCampus" style="margin-left: 10vh;margin-right: 10vh">
        <br>
       <i class="el-icon-edit" style="font-size: 20px"> <b>曙光大数据学院</b></i>
        <hr><br>
        <el-row :gutter="20">
            <el-col :span="14">
            <div class="grid-content1 bg-purple1">
                <el-row >
                    <el-col :span="8">
                    <div class="grid-content1 bg-purple1">
                        <el-image style="width: 150px; height:100px" :src="src1"></el-image>
                    </div>
                    </el-col>
                    <el-col :span="16">
                    <div class="grid-content1 bg-purple-light1">
                        <b style="font-size:12px">学校举行市校共建玉林市大数据研究院揭牌仪式暨签约仪式</b>
                        <span style="font-size:12px;color:red">2018.11.29</span>
                        <p style="font-size:12px">11月29日上午，市校共建玉林市大数据研究院揭牌仪式在我校东区知行楼举行。玉林市副市长祝小东，我校校长王卓华出席仪式并发表讲话。玉林市科学技术局、工信委、教育局等单位领导、大数据研究院特聘专家、研究方向带头人、学校部分职能部门及二级学院负责人、师生代表参加仪式。仪式由学校副校长赵峰主持。</p>
                        <el-button type="primary" size="small"><a href="http://dsj.web.xinyoutk.com/jsfc/ShowArticle.asp?ArticleID=15" target="_blank">阅读详情</a></el-button>
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
                        <b style="font-size:12px">计算机学院积极推进“玉林师范学院-曙光大数据学院”的建设</b>
                        <p style="font-size:12px;color:red">2016.8.15</p>
                        <p style="font-size:12px">2016年8月，我校入选教育部首批“数据中国·百校工程”产教融合先行先试项目试点学校，并与中科曙光集团签署了共建“曙光大数据应用创新中心”（下称大数据中心）的协议。该中心依托计算机、电子通信、物理工程、数学统计、商学等专业，集培养本科应用型人才、科研创新、创业应用及服务地方于一体。“曙光大数据学院”(下称大数据学院)是大数据中心人才培养的体现，首先依托计算机科学与工程学院招收“大数据专业”学生。</p>
                        <el-button type="primary" size="small"><a href="http://www.ylu.edu.cn/html/2017/0325ybdt/16469.html" target="_blank">阅读详情</a></el-button>
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
                        <b style="font-size:12px">曙光大数据应用创新中心揭牌成立</b>
                        <p style="font-size:12px;color:red">2017.7.15</p>
                        <p style="font-size:12px">7月15日上午，玉林师范学院—曙光大数据应用创新中心（暨玉林师范学院－曙光瑞翼大数据学院）揭牌仪式在东区知行楼举行。学校校长王卓华、党委副书记兼纪委书记韦广雄、曙光集团教育合作中心总经理谢鸥、副总经理林英等领导出席仪式，学校办公室、教务处负责人及计算机科学与工程学院师生代表参加仪式。仪式由教务处处长蒋丽萍主持。 </p>
                        <el-button type="primary" size="small"><a href="http://www.ylu.edu.cn/html/2017/0715ysyw/15973.html" target="_blank">阅读详情</a></el-button>
                    </div>
                    </el-col>
                </el-row>
            </div>
            </el-col>

            <el-col :span="10">
            <div class="grid-content1 bg-purple-light1">
                <el-image style="width: 100%; height:100%" :src="src2"></el-image>

                <el-col :span="24">
                    <div class="grid-content2 bg-purple-light2">
                        学生实训、成果展示
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="grid-content1 bg-purple-light1" style="height:100%;width:100%;margin-top: 10px;">
                        <el-image :src="src4"></el-image>
                        <el-image :src="src5"></el-image>
                    </div>
                </el-col>

            </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            src1:'http://dsj.web.xinyoutk.com/jsfc/UploadFiles_3189/201805/20180517181748838.jpg',
            src2:'http://hyw.ylsfxy.com/uploadfile/2017/0325/20170325113958471.png',
            src3:'http://www.ylu.edu.cn/uploadfile/2017/0715/20170715050706326.jpg',
            src4:'http://dsj.web.xinyoutk.com/jsfc/UploadFiles_3189/201805/20180517181758790.jpg',
            src5:'http://hyw.ylsfxy.com/uploadfile/2019/0523/20190523084614210.jpg',
        }
    }
    
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
</style>