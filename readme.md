- 1. 思路 搭架子，考虑一些初始化函数， init render bindEvent
- 2. 考虑模板里面需要渲染什么 构造 tab 类 根据传入不同参数（考虑是 tab,还是 page）渲染不同的 dom 元素
- 3. 考虑解析模板，填入不同的数据
- 4. 考虑需要构造的 dom 结构 构造 Tpl 类渲染 tab 实例和 tab-view 实力 <!-- 这里要构造这样一个dom结构 --> 使用 document.createFragment 可以减少插入文档造成的回流
- 5. 解析模板中的{{}} 语法替换为数据
- 6. 绑定事件
- 7. 添加样式

<!--  -->

#### 在线查看效果

https://qiaoqiao10001.github.io/iifetab/src/index.html

- 思考
- 利用 iife（立即执行函数）封装代码
- 使用构造函数 myTab 实现插件化
- 其他逻辑挂在到 prototype 上实现低耦合
- 使用 window 暴露给全局对象 myTab 可以全局直接初始化插件
- 提取初始化逻辑 init，初始化逻辑聚合在一起
- 数据和模板的处理，事件处理单独封装到函数中，实现逻辑的解耦
