; (function (doc, tpl, tools) {
  function MyTab (el) {
    this.el = document.querySelector(el)
    console.log(this.el)
    this._data = JSON.parse(this.el.getAttribute('data'))
    console.log(this._data)
    this._index = 0; // 记录初始位置
    this.init()
  }


  MyTab.prototype.init = function () {
    this._render()
    this._bindEvent()
  }

  MyTab.prototype._render = function () {
    const tabWrapper = doc.createElement('div')
    const pageWrapper = doc.createElement('div')
    const oFrag = doc.createDocumentFragment() // 创建文档片段准备挂载元素，子元素插入到文档片段时不会引起页面回流
    console.log(oFrag)

    tabWrapper.className = 'tab-wrapper'
    pageWrapper.className = 'page-wrapper'

    /*
      {
        "tab": " 按钮1",
        "tab-view": "页面1" 
      }
    */
    let _this = this
    this._data.forEach(function (item, index) {
      tabWrapper.innerHTML += tools.tplReplace(tpl.tab('tab'), {
        tab: item.tab,
        current: !index ? 'current' : ''
      })

      pageWrapper.innerHTML += tools.tplReplace(tpl.tab('page'), {
        page: item.tabView,
        current: !index ? 'current' : ''
      })
      oFrag.appendChild(tabWrapper)
      oFrag.appendChild(pageWrapper)
      _this.el.append(oFrag)
    })

  }

  MyTab.prototype._bindEvent = function () {
    var doms = {
      oTabItems: document.querySelectorAll('.tab-item'),
      oPageItems: doc.querySelectorAll('.page-item')
    }
    this.el.addEventListener('click', this.handleClick.bind(this, doms), false)
  }

  MyTab.prototype.handleClick = function () {
    console.log(1)
    var _doms = arguments[0],
      tar = arguments[1].target,
      className = tar.className.trim();
    console.log(className)
    if (className === 'tab-item') {
      _doms.oTabItems[this._index].className = 'tab-item';
      _doms.oPageItems[this._index].className = 'page-item';
      this._index = [].indexOf.call(_doms.oTabItems, tar);
      tar.className += ' current';
      _doms.oPageItems[this._index].className += ' current';
    }

  }
  window.MyTab = MyTab
})(document, tpl, tools)

