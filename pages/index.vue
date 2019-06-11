<template>
    <el-container class="body">
        <el-header class="header">
            <el-row :gutter="20">
                <el-col :span="10">
                    <div>
                        <h1 style="text-align: center">Digital<span style="color:#2aacc8">China</span></h1>
                    </div>
                </el-col>
                <el-col :span="14">
                    <el-menu :default-active="activeIndex"
                             class="el-menu-demo"
                             mode="horizontal"
                             @select="handleSelect"
                            background-color="#e8ebf1"
                            text-color="black"
                            active-text-color="#2aacc8"
                            style="height:59px">
                            <el-menu-item index="1" @click="toggleTabs(cpIndex)">首页</el-menu-item>
                            <el-menu-item index="2" @click="toggleTabs(cpAboutMe)">关于我们</el-menu-item>
                            <el-submenu index="3">
                                <template slot="title" >数字中国</template>
                                <el-menu-item index="3-1" @click="toggleTabs(index3_1)">新信号催生新变革</el-menu-item>
                                <el-menu-item index="3-2" @click="toggleTabs(index3_2)">新动能引领新发展</el-menu-item>
                                <el-menu-item index="3-3" @click="toggleTabs(index3_3)">新趋势点亮新未来</el-menu-item>
                            </el-submenu>
                            <el-submenu index="4">
                                <template slot="title" >数字广西</template>
                                <el-menu-item index="4-1" @click="toggleTabs(index4_1)">把握六个基本原则</el-menu-item>
                                <el-menu-item index="4-2" @click="toggleTabs(index4_2)">构建智能制造产业生态</el-menu-item>
                                <el-menu-item index="4-3" @click="toggleTabs(index4_3)">推进服务业数字化</el-menu-item>
                            </el-submenu>
                            <el-menu-item index="5" @click="toggleTabs(cpWisdomYL)">智慧玉林</el-menu-item>
                            <!-- <el-submenu index="5">
                                <template slot="title" >智慧玉林</template>
                                <el-menu-item index="5-1" @click="toggleTabs(index5_1)">智慧侨乡</el-menu-item>
                                <el-menu-item index="5-2" @click="toggleTabs(index5_2)">农业大数据</el-menu-item>
                                <el-menu-item index="5-3" @click="toggleTabs(index5_3)">中草药特色产业</el-menu-item>
                                <el-menu-item index="5-3" @click="toggleTabs(index5_4)">玉林5G时代</el-menu-item>
                            </el-submenu> -->
                            <el-submenu index="6">
                                <template slot="title" >智慧校园</template>
                                <el-menu-item index="6-1" @click="toggleTabs(index6_1)">玉师--曙光大数据应用创新中心</el-menu-item>
                                <el-menu-item index="6-2" @click="toggleTabs(index6_2)">玉师--曙光大数据学院</el-menu-item>
                                <el-menu-item index="6-3" @click="toggleTabs(index6_3)">玉林市大数据研究院</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    <!-- <nav>
                    　　<a class="lable" @click="toggleTabs(cpIndex)">首页</a>
                        <a class="lable" @click="toggleTabs(cpAboutMe)">关于我们</a>
                        <a class="lable" @click="toggleTabs(cpDigitalChina)">数字中国</a>
                        <a class="lable" @click="toggleTabs(cpDigitalGX)">数字广西</a>
                        <a class="lable" @click="toggleTabs(cpWisdomYL)">智慧玉林</a>
                        <a class="lable" @click="toggleTabs(cpWisdomCampus)">智慧校园</a>
                　　</nav> -->
                </el-col>
            </el-row>
        </el-header>
        <el-main class="main">
            <cpIndex :is="currentView" keep-alive></cpIndex>
        </el-main>
        <el-footer class="footer">
            <el-row :gutter="20">
                <el-col :span="9">
                    <div style="margin-left:15%">
                        <a>数字中国，创精彩时代@版权所有</a>
                    </div>
                    </el-col>
                <el-col :span="10">
                    <div style="float:right">
                        <nav>
                            <a class="lable" @click="toggleTabs(cpAboutMe)">关于我们</a>
                            <a class="lable" @click="toggleTabs(cpCopyRight)">版权声明</a>
                            <a class="lable" @click="toggleTabs(cpMail)">文明邮件</a>
                            <a class="lable" @click="toggleTabs(cpFeedBack)">意见反馈</a>
                    　　</nav>
                    </div>
                    </el-col>
                <el-col :span="5">
                    <div>
                        <h1 style="text-align: center;margin-right:10%">Digital<span style="color:#2aacc8">China</span></h1>
                    </div>
                </el-col>
            </el-row>
        </el-footer>
        <script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=3mn83YpfI9VdPSZg1DfuK7lg0UqRljwt"></script>
    </el-container>
  
</template>

<script>
import cpIndex from '../components/index';
import cpAboutMe from '../components/AboutMe';
import cpDigitalChina from '../components/DigitalChina';
import cpDigitalGX from '../components/DigitalGuangxi';
import cpWisdomYL from '../components/WisdomYulin';
import cpWisdomCampus from '../components/WisdomCampus';
import cpMail from '../components/Mail';
import cpCopyRight from '../components/CopyRight';
import cpFeedBack from '../components/FeedBack'
import index1 from '../components/index'
import index3_1 from '../components/index3/index3_1'
import index3_2 from '../components/index3/index3_2'
import index3_3 from '../components/index3/index3_3'
import index4_1 from '../components/index4/index4_1'
import index4_2 from '../components/index4/index4_2'
import index4_3 from '../components/index4/index4_3'
import index5_1 from '../components/index5/index5_1'
import index5_2 from '../components/index5/index5_2'
import index5_3 from '../components/index5/index5_3'
import index5_4 from '../components/index5/index5_4'
import index6_1 from '../components/index6/index6_1'
import index6_2 from '../components/index6/index6_2'
import index6_3 from '../components/index6/index6_3'


export default {
    components: { 
        cpIndex,
        cpAboutMe,
        cpDigitalChina,
        cpDigitalGX,
        cpWisdomYL,
        cpWisdomCampus,
        cpMail,
        cpCopyRight,
        cpFeedBack,
        index3_1,
        index3_2,
        index3_3,
        index4_1,
        index4_2,
        index4_3,
        index5_1,
        index5_2,
        index5_3,
        index5_4,
        index6_1,
        index6_2,
        index6_3,
    },
    data () {
            return {
                index3_1:"index3_1",
                index3_2:"index3_2",
                index3_3:"index3_3",
                index4_1:"index4_1",
                index4_2:"index4_2",
                index4_3:"index4_3",
                index5_1:"index5_1",
                index5_2:"index5_2",
                index5_3:"index5_3",
                index5_4:"index5_4",
                index6_1:"index6_1",
                index6_2:"index6_2",
                index6_3:"index6_3",
                cpIndex:"cpIndex",
                cpAboutMe:"cpAboutMe",
                cpDigitalChina:"cpDigitalChina",
                cpDigitalGX:"cpDigitalGX",
                cpWisdomYL:"cpWisdomYL",
                cpWisdomCampus:"cpWisdomCampus",
                cpMail:"cpMail",
                cpFeedBack:"cpFeedBack",
                cpCopyRight:"cpCopyRight",
                currentView: 'cpIndex', //默认选中cpIndex子组件
                activeIndex: '1',
                activeIndex2: '1',
            };
        },
        methods: {
            toggleTabs (tabText) {
                this.currentView = tabText;
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
a:hover {color:#2aacc8;}   /* 鼠标指针移动到链接上 */
a:active {color:#2aacc8;}  /* 正在被点击的链接 */

.header,.footer{
    background-color:#e8ebf1;
    line-height: 60px;  
    height: 200px;
}
.main{
    padding: 0px;
    /* min-height: 800px; */
    background-color: rgb(246, 249, 252);
}
.lable{
    width: 80px;
    /* background-color: aquamarine; */
    padding: 10px
}
.body{
    margin:0vh 30vh 0vh 30vh;
    min-width: 1200px;
    min-height: 600px
}

</style>