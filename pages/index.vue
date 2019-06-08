<template>
    <el-container>
        <el-header class="header">
            <el-row :gutter="20">
                <el-col :span="10">
                    <div>
                        <h1 style="text-align: center">Digital<span style="color:#2aacc8">China</span></h1>
                    </div>
                </el-col>
                <el-col :span="14">
                    <nav>
                    　　<a class="lable" @click="toggleTabs(cpIndex)">首页</a>
                        <a class="lable" @click="toggleTabs(cpAboutMe)">关于我们</a>
                        <a class="lable" @click="toggleTabs(cpDigitalChina)">数字中国</a>
                        <a class="lable" @click="toggleTabs(cpDigitalGX)">数字广西</a>
                        <a class="lable" @click="toggleTabs(cpWisdomYL)">智慧玉林</a>
                        <a class="lable" @click="toggleTabs(cpWisdomCampus)">智慧校园</a>
                　　</nav>
                </el-col>
            </el-row>
        </el-header>
        <el-main class="main">
            <cpIndex :is="currentView" keep-alive></cpIndex>
        </el-main>
        <el-footer class="footer">
            <el-row :gutter="20">
                <el-col :span="9">
                    <div style="float:right">
                        <a>数字中国，创精彩时代@版权所有</a>
                    </div>
                    </el-col>
                <el-col :span="9">
                    <div style="float:right">
                        <nav>
                            <a class="lable" @click="toggleTabs(cpAboutMe)">关于我们</a>
                            <a class="lable" @click="toggleTabs(cpCopyRight)">版权声明</a>
                            <a class="lable" @click="toggleTabs(cpMail)">文明邮件</a>
                            <a class="lable" @click="toggleTabs(cpFeedBack)">意见反馈</a>
                    　　</nav>
                    </div>
                    </el-col>
                <el-col :span="6">
                    <div>
                        <h1 style="text-align: center;float:right">Digital<span style="color:#2aacc8">China</span></h1>
                    </div>
                </el-col>
            </el-row>
        </el-footer>
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
    },
    data () {
            return {
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
            };
        },
        methods: {
            toggleTabs (tabText) {
                this.currentView = tabText;
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
}
.main{
    padding: 0px;
}
.lable{
    width: 80px;
    /* background-color: aquamarine; */
    padding: 10px
}

</style>