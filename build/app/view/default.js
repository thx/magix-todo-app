define("app/view/default",["require","module","exports","magix"],function(i,e,t){var n=i("magix");e.exports=n.View.extend({tmpl:'<div class="container"><div mx-view="app/view/common/header"></div><div id="magix_vf_main">main content</div><div mx-view="app/view/common/footer"></div></div>',init:function(){this.observe(null,!0)},render:function(){this.setHTML(this.id,this.tmpl);var i=n.Router.parse();this.owner.mountVframe("magix_vf_main","app/view"+i.path)}})});