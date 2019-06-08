<template>
    <div class="com_index">
        <div class="top">
            <div class="top_left">
                left
            </div>
            <div class="top_right">
                right
            </div>
        </div>
        <div class="middle">

        </div>
        <div class="bottom">

        </div>
    </div>
</template>
<script>
export default {
    
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
    /* background-color: aquamarine; */
}
.top_right{
    width: 50%;
    /* background-color: antiquewhite; */
    float: right;

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

</style>