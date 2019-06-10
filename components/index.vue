<template>
    <div class="com_index">
        <div class="top">
            <div class="top_left">
                <div class="image_bg">
                    <div class="images">
                        <el-image :src="bigdata"></el-image>
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
            <el-row class="mid_row1">
                <el-col :span="12">
                    <div class="mid_aboutme">
                        <h3>关于我们</h3>
                        <p style="margin-top:10px">青春活力，满怀激情的玉师学子</p>
                    </div>
                </el-col>
                <el-col :span="12"><div>2</div></el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="mid_content" style="float:right">
                        <el-image :src="digitalChina"></el-image>
                        <h3 style="margin:5px">数字中国</h3>
                        <nav>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">新信号催生新变革</a>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">心动能引领新发展</a>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">新趋势点亮新未来</a>
                        </nav>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="mid_content">
                        <el-image :src="digitalChina"></el-image>
                        <h3 style="margin:5px">数字广西</h3>
                        <nav>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">把握六个基本原则</a>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">构建智能制造产业生态</a>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">推进服务业数字化</a>
                        </nav>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="mid_content">
                        <el-image :src="digitalChina"></el-image>
                        <h3 style="margin:5px">智慧玉林</h3>
                        <nav>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">智慧侨乡</a>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">农业大数据</a>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">中草药特色产业</a>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">玉林5G时代</a>
                        </nav>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="mid_content">
                        <el-image :src="digitalChina"></el-image>
                        <h3 style="margin:5px">智慧校园</h3>
                        <nav>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">玉师--曙光大数据应用创新中心</a>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">玉师--曙光大数据学院</a>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa">玉林市大数据研究院</a>
                        </nav>
                    </div>
                </el-col>
            </el-row>

        </div>
        <!-- <div class="bottom">
            <el-carousel>
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>

        </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            bigdata:require('../assets/image/bigdata.png'),
            digitalChina:require('../assets/image/sy_dc.png'),
            wisdomCompus:'http://dsj.web.xinyoutk.com/jsfc/UploadFiles_3189/201805/20180517181748838.jpg',
        }
    }
    
}
</script>

<style>
a:link {color:black;text-decoration:none;}		/* 未被访问的链接 */
a:visited {color:black;}	/* 已被访问的链接 */
a:hover {color:#2aacc8;}	/* 鼠标指针移动到链接上 */
a:active {color:#2aacc8;}
.com_index{
    height: 1500px;
}
.top{
    background-image:url(../assets/image/sy_bg1.png);
    background-repeat: no-repeat;
    background-size:cover;
    height: 40%; 
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
    height: 30%;
}
.mid_row1{
    height: 100px;
    /* background-color: #99a9bf; */
}
.mid_row2{
    height: 200px;
    /* background-color: aqua; */
}
.mid_aboutme{
    height: 100;
    float: right;
    padding: 20px;
    text-align: center;
}
.el-col{
    /* background-color: aquamarine; */
}
.mid_content{
    height: 150px;
    width: 130px;
    text-align: center;
    /* background-color: brown; */
    /* padding:10px 40px 10px 40px; */
    margin:25px 0px 25px 0px;
}
.bottom{
    background-image:url(../assets/image/sy_bg2.png);
    background-repeat: no-repeat;
    background-size:cover;
    height: 30%; 
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