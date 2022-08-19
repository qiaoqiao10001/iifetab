var tpl = (function () {
  var tab = function (type) {
    switch (type) {
      case 'tab':
        return (`
          <div class="tab-item {{current}}" >{{tab}}</div>
        `)
        break;

      case 'page':
        return (`
        <div class="page-item {{current}}">{{page}}</div>
      `)
        break;
      default:
        break;
    }
  }

  return {
    tab: tab
  }
})()