(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d22d5d8"],{f6d6:function(e,t,n){"use strict";n.r(t);var a=n("be94"),s=(n("4ca3"),n("450d"),n("443e")),i=n.n(s),d=n("2f62"),l=n("b55f"),u=n("73eb"),o=n("01a8"),c=n("1fba"),r={name:"d2-layout-header-aside-menu-side",mixins:[l.a],components:{Menu:i.a,"d2-layout-header-aside-menu-item":u.a,"d2-layout-header-aside-menu-sub":o.a},data:function(){return{active:"",asideHeight:300,BS:null}},computed:Object(a.a)({},Object(d.e)("d2admin/menu",["aside","asideCollapse"])),watch:{asideCollapse:function(e){var t=this;this.scrollDestroy(),setTimeout(function(){t.scrollInit()},500)},$route:{handler:function(e){var t=this,n=e.fullPath;this.active=n,this.$nextTick(function(){t.aside.length>0&&t.$refs.menu&&(t.$refs.menu.activeIndex=n)})},immediate:!0}},mounted:function(){this.scrollInit()},beforeDestroy:function(){this.scrollDestroy()},methods:{scrollInit:function(){this.BS=new c.a(this.$el,{mouseWheel:!0})},scrollDestroy:function(){try{this.BS.destroy()}catch(e){delete this.BS,this.BS=null}}}},h=n("2877"),m=Object(h.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d2-layout-header-aside-menu-side"},[n("Menu",{ref:"menu",attrs:{collapse:e.asideCollapse,"unique-opened":!0,"default-active":e.active},on:{select:e.handleMenuSelect}},[e._l(e.aside,function(e,t){return[void 0===e.children?n("d2-layout-header-aside-menu-item",{key:t,attrs:{menu:e}}):n("d2-layout-header-aside-menu-sub",{key:t,attrs:{menu:e}})]})],2),0!==e.aside.length||e.asideCollapse?e._e():n("div",{staticClass:"d2-layout-header-aside-menu-empty",attrs:{flex:"dir:top main:center cross:center"}},[n("d2-icon",{attrs:{name:"inbox"}}),n("span",[e._v("没有侧栏菜单")])],1)],1)},[],!1,null,null,null);m.options.__file="index.vue";t.default=m.exports}}]);