<template>
    <el-container>
        <el-header>
            <el-row :gutter="20">
                <el-col :span="12">
                    <div>
                        1
                    </div>
                </el-col>
                <el-col :span="12">
                    <nav>
                    　　<a @click="toggleTabs(cpIndex)">首页</a>
                        <a @click="toggleTabs(cpAboutMe)">关于我们</a>
                        <a @click="toggleTabs(cpDigitalChina)">数字中国</a>
                        <a @click="toggleTabs(cpDigitalGX)">数字广西</a>
                        <a @click="toggleTabs(cpWisdomYL)">智慧玉林</a>
                        <a @click="toggleTabs(cpWisdomCampus)">智慧校园</a>
                　　</nav>
                </el-col>
            </el-row>

        </el-header>
        <el-main>
            <cpIndex :is="currentView" keep-alive></cpIndex>
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
  
</template>

<script>
import cpIndex from '../components/index.vue';
import cpAboutMe from '../components/AboutMe.vue';
import cpDigitalChina from '../components/DigitalChina';
import cpDigitalGX from '../components/DigitalGuangxi.vue';
import cpWisdomYL from '../components/WisdomYulin.vue';
import cpWisdomCampus from '../components/WisdomCampus';

export default {
    components: { 
        cpIndex,
        cpAboutMe,
        cpDigitalChina,
        cpDigitalGX,
        cpWisdomYL,
        cpWisdomCampus
    },
    data () {
            return {
                cpIndex:"cpIndex",
                cpAboutMe:"cpAboutMe",
                cpDigitalChina:"cpDigitalChina",
                cpDigitalGX:"cpDigitalGX",
                cpWisdomYL:"cpWisdomYL",
                cpWisdomCampus:"cpWisdomCampus",
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

</style>
