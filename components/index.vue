<template>
    <div class="com_index">
        <div class="top">
            <el-carousel :interval="4000" type="card" height="460px">
                <el-carousel-item>
                    <a href="http://www.ylu.edu.cn/html/2017/0715ysyw/15973.html" target="_blank">
                        <el-image :src="carousel1" style="width: 100%; height:100%"></el-image>
                    </a>
                </el-carousel-item>
                <el-carousel-item>
                    <a href="http://www.sohu.com/a/239514158_100019048" target="_blank">
                        <el-image :src="carousel2" style="width: 100%; height:100%"></el-image>
                    </a>
                </el-carousel-item>
                <el-carousel-item>
                    <a href="http://dsj.web.xinyoutk.com/jsfc/ShowArticle.asp?ArticleID=15" target="_blank">
                        <el-image :src="carousel3" style="width: 100%; height:100%"></el-image>
                    </a>
                </el-carousel-item>
                <el-carousel-item>
                    <a href="http://www.ylu.edu.cn/html/2017/0715ysyw/15973.html" target="_blank">
                        <el-image :src="carousel4" style="width: 100%; height:100%"></el-image>
                    </a>
                </el-carousel-item>
                <el-carousel-item>
                    <a href="http://www.gxzf.gov.cn/zwgk/zfwj/20180917-713374.shtml" target="_blank">
                        <el-image :src="carousel5" style="width: 100%; height:100%"></el-image>
                    </a>
                </el-carousel-item>
                <el-carousel-item>
                    <a href="http://www.gxylnews.com/html/news/2019/05/179511.html" target="_blank">
                        <el-image :src="carousel6" style="width: 100%; height:100%"></el-image>
                    </a>
                </el-carousel-item>
            </el-carousel>

            <!-- <div class="top_left">
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
            </div> -->
        </div>
        <div class="middle">
            <el-row class="mid_row1">
                <el-col :span="12">
                    <div class="mid_aboutme">
                        <h3>关于我们</h3>
                        <p style="margin-top:10px">青春活力，满怀激情的玉师学子</p>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div style="padding:10px">
                        <el-image :src="aboutme"></el-image>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="6">
                    <div class="mid_content" style="float:right">
                        <el-image :src="digitalChina"></el-image>
                        <h3 style="margin:5px">数字中国</h3>
                        <nav>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank">新信号催生新变革</a><br>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank">心动能引领新发展</a><br>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank">新趋势点亮新未来</a><br>
                        </nav>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="mid_content">
                        <el-image :src="heart"></el-image>
                        <h3 style="margin:5px">数字广西</h3>
                        <nav>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank">把握六个基本原则</a><br>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank">构建智能制造产业生态</a><br>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank">推进服务业数字化</a><br>
                        </nav>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="mid_content">
                        <el-image :src="WisdomYL"></el-image>
                        <h3 style="margin:5px">智慧玉林</h3>
                        <nav>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank" @click="emit('wisdomYL',WisdomYL_pg)">智慧侨乡</a><br>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank">农业大数据</a><br>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank">中草药特色产业</a><br>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank">玉林5G时代</a><br>
                        </nav>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="mid_content">
                        <el-image :src="heart"></el-image>
                        <h3 style="margin:5px">智慧校园</h3>
                        <nav>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank">玉师--曙光大数据应用创新中心</a><br>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank">玉师--曙光大数据学院</a><br>
                            <a href="http://news.ifeng.com/c/7mXUHt4aNIa" target="_blank">玉林市大数据研究院</a><br>
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
            WisdomYL_pg:"wisdomYL",
            bigdata:require('../assets/image/bigdata.png'),
            aboutme:require('../assets/image/sy_aboutme.png'),
            digitalChina:require('../assets/image/sy_dc.png'),
            WisdomYL:require('../assets/image/sy_WisdomYL.png'),
            heart:require('../assets/image/sy_heart.png'),
            carousel1:'http://dsj.web.xinyoutk.com/jsfc/UploadFiles_3189/201805/20180517181748838.jpg',
            carousel2:'http://5b0988e595225.cdn.sohucs.com/images/20180705/981c471786994142be4b8cbc36fd3c4e.jpeg',
            carousel3:'http://dsj.web.xinyoutk.com/jsfc/UploadFiles_3189/201805/20180517181758790.jpg',
            carousel4:'http://www.ylu.edu.cn/uploadfile/2017/0715/20170715050706326.jpg',
            carousel5:'http://image.gxnews.com.cn/uploadpic/2018/09/12/eaec1d96c7e6d273e46492f77b173ec0.jpg',
            carousel6:'http://dingyue.ws.126.net/qh48pDZpo60z6Z9OH0OGKyeqRWFQ5V8NJPIxXVFO8J=k31557207062622.jpg',
        }
    }
    
}
</script>

<style>
a:link {color:black;text-decoration:none;}		/* 未被访问的链接 */
a:visited {color:black;}	/* 已被访问的链接 */
a:hover {color:#2aacc8;}	/* 鼠标指针移动到链接上 */
a:active {color:#2aacc8;}

.top{
    background-image:url(../assets/image/sy_bg1.png);
    background-repeat: no-repeat;
    background-size:cover;
    height: 500px; 
    padding: 10px;
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
    /* height: 300px; */
    /* background-image: url(../assets/image/sy_bg2.png); */
    /* color: white; */
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
.mid_content{
    text-align: center;
    margin: 10%;
}
.bottom{
    background-image:url(../assets/image/sy_bg2.png);
    background-repeat: no-repeat;
    background-size:cover;
    height:300px; 
}

</style>