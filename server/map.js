export const BaiduMap = {
    init: function() {

        const BMapURL = 'https://api.map.baidu.com/api?v=3.0&ak=' + 's1wYA7G1OYwzylgyxkqgRYpS5tpk4Mh8' + 's1wYA7G1OYwzylgyxkqgRYpS5tpk4Mh8'
　　　　 return new Promise((resolve, reject) => {
            // 如果已加载直接返回
            if (typeof BMap !== 'undefined') {
                resolve(BMap)
                return true
            }
            // 百度地图异步加载回调处理
            window.onBMapCallback = function() {
                console.log('百度地图脚本初始化成功...')
                resolve(BMap)
            };
            // 插入script脚本
            let scriptNode = document.createElement('script')
            scriptNode.setAttribute('type', 'text/javascript')
            scriptNode.setAttribute('src', BMapURL)
            document.body.appendChild(scriptNode)
        })
    }
}