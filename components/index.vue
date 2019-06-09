<template>
    <div class="com_index">
        <div class="top">
            <div class="top_left">
                <div class="image_bg">
                    <div class="images">
                        <el-image :src="src1"></el-image>
                    </div>
                </div>
            </div>
            <div class="top_right">
                <div class="top_content">
                    <h2>数字中国，创精彩时代</h2>
                    <p style="margin-top:20px">"数字中国"让我们的城市更智慧、生活更便捷、工作更带科技感。
                        从乘车出行到看病就医，从智慧养老到便民服务，都插上了“数字”的翅膀。
                    </p>
                    <div style="margin-top:20px">
                        <el-button type="success">Chinese</el-button>
                        <span class="or">pr</span>
                        <el-button type="primary">English</el-button>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="middle">

        </div>
        <div class="bottom">
            <el-carousel height="300px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>

        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            src1:require('../assets/image/bigdata.png'),
        }
    }
    
}
</script>

<style>
.top{
    background-image:url(../assets/image/sy_bg1.png);
    background-repeat: no-repeat;
    background-size:cover;
    height: 400px; 
}
.top_left{
    width: 50%;
    height: 100%;
    float: left;
    padding: 30px;
}
.image_bg{
    width: 280px;
    height: 280px;
    background-color: antiquewhite;
    float: right;
    margin-top:40px; 
    border-radius: 15px;
}
.images{
    padding: 30px;
}
.top_right{
    width: 50%;
    height: 100%;
    float: right;
    margin-left: -100%;
    padding: 30px;
}
.top_content{
     width: 280px;
    height: 280px;
    float: left;
    margin-top:50px; 
    text-align: center;
    color: white;
}
.or{
    background-color: antiquewhite;
    position:relative;
    border-radius: 15px;
}
.middle{
    height: 300px;
}

.bottom{
    background-image:url(../assets/image/sy_bg2.png);
    background-repeat: no-repeat;
    background-size:cover;
    height: 300px; 
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

</style>