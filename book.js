let plugins = [
    '-lunr',
    '-sharing', //屏蔽默认分享插件
    '-search',  //屏蔽默认搜索插件
    'search-pro', //高级搜索,支持中文
    'chapter-fold', //目录可折叠
    'expandable-chapters', //目录可折叠
    'back-to-top-button', //回到顶部
    'lightbox', //查看图片
    'splitter', //侧边目录宽度可调节
    'code', //代码插件
    'theme-lou', //主题插件
];

module.exports = {
    // 书籍信息
    title: '笔记',
    description: '一些学习中的笔记',
    author: '饶暮藏',
    language: 'zh-hans',

    // 插件列表
    plugins,

    // 插件全局配置
    pluginsConfig: {
        // gitbook-plugin-code 插件配置
        code: {
          copyButtons: true, // code插件复制按钮
        },
        // gitbook-plugin-theme-lou 主题插件配置
        'theme-lou': {
          color: '#2096FF', // 主题色
          //favicon: 'assets/favicon.ico', // 网站图标
          //logo: 'assets/logo.png', // Logo图
          //copyrightLogo: 'assets/copyright.png', // 背景水印版权图
          //autoNumber: 3, // 自动给标题添加编号(如1.1.1)
          titleColor: {
            // 自定义标题颜色(不设置则默认使用主题色)
            h1: '#8b008b', // 一级标题颜色
            h2: '#20b2aa', // 二级标题颜色
            h3: '#a52a2a', // 三级标题颜色
          },
          //forbidCopy: true, // 页面是否禁止复制（不影响code插件的复制）
          'search-placeholder': '众里寻他千百度', // 搜索框默认文本
          'hide-elements': ['.summary .gitbook-link'], // 需要隐藏的标签
          copyright: {
            author: '饶暮藏', // 底部版权展示的作者名
          },
        },
      },

    // 模板变量
    variables: {
        // 自定义
    },
};