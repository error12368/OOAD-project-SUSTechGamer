function login() {
    window.location.href = "Login.html";
    //todo: 若已经登陆，则不显示登陆按钮，显示用户头像
}

function search(){
    //todo: 向服务器发出请求，并跳转到搜索结果页面
    return;
}


//todo: 把此功能用Vue轮播组件重写
let GAME_RECOMMEND_SLIDE_COUNTER = 0;// 我知道定义全局变量不优雅，但我找不到其他方法了，有好的优化的话务必告诉我😂
function game_recommend_slide(){
    //todo: 将images改为从服务器获取图片地址
    let images = [
        '../../figures/images/AnimalCrossing.jpg',
        '../../figures/images/Cyberpunk2077.jpg',
        '../../figures/images/LegendOfZelda.jpg',
        '../../figures/images/RedDeadRedemption2.jpg'
    ]
    let curr_img = document.getElementById("img_content");
    curr_img.src = images[GAME_RECOMMEND_SLIDE_COUNTER];
    window.setInterval(image_change, 4000);
}
function image_change(){
    //todo: 将images改为从服务器获取图片地址
    let images = [
        '../../figures/images/AnimalCrossing.jpg',
        '../../figures/images/Cyberpunk2077.jpg',
        '../../figures/images/LegendOfZelda.jpg',
        '../../figures/images/RedDeadRedemption2.jpg'
    ]
    let curr_img = document.getElementById("img_content");
    curr_img.src = images[GAME_RECOMMEND_SLIDE_COUNTER];
    GAME_RECOMMEND_SLIDE_COUNTER++;
    if (GAME_RECOMMEND_SLIDE_COUNTER === images.length) GAME_RECOMMEND_SLIDE_COUNTER = 0;
}

