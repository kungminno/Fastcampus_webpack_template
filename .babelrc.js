module.exports = {
    presets: ['@babel/preset-env'], //일일 따로 명시해야하는 자바스크립트 기능을 한번에 지원
    plugins:[
        ['@babel/plugin-transform-runtime'] //비동기 처리를 위하여
    ]
}