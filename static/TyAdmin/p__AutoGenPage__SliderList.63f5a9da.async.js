(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{IpcI:function(e,t,r){e.exports={container:"container___nT1ry"}},PkmJ:function(e,t,r){"use strict";r("DZo9");var n=r("8z0m"),a=r("oBTY"),c=r("fWQN"),i=r("mtLc"),l=r("yKVA"),u=r("879j"),o=r("q1tI"),s=r.n(o),p=r("ye1Q"),d=r("xvlK"),f=r("IpcI"),m=r.n(f);function b(e,t){var r=new FileReader;r.addEventListener("load",(function(){return t(r.result)})),r.readAsDataURL(e)}var h=function(e){Object(l["a"])(r,e);var t=Object(u["a"])(r);function r(e){var n;return Object(c["a"])(this,r),n=t.call(this,e),n.state={loading:!1,fileList:[]},n.handleChange=function(e){var t=Object(a["a"])(e.fileList);t=t.slice(-1),t=t.map((function(e){return e.response&&(e.url=e.response.url),e})),n.props.onChange(e),e.file&&b(t[0].originFileObj,(function(e){return n.setState({fileList:t,imageUrl:e,loading:!1})}))},n}return Object(i["a"])(r,[{key:"render",value:function(e){console.log(this.props),console.log("props");var t=s.a.createElement("div",null,this.state.loading?s.a.createElement(p["default"],null):s.a.createElement(d["default"],null),s.a.createElement("div",{className:"ant-upload-text"},"Upload")),r=this.state.imageUrl;return"img"in this.props&&"string"==typeof this.props.img&&(r=this.props.img),s.a.createElement(n["a"],{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:this.props.beforeUpload,onChange:this.handleChange,fileList:this.state.fileList},r?s.a.createElement("img",{src:r,alt:"avatar",style:{width:"100%"}}):t)}}]),r}(s.a.Component);t["a"]=function(e){return s.a.createElement("div",{className:m.a.container},s.a.createElement("div",{id:"components-upload-demo-avatar"},s.a.createElement(h,e)))}},rnrJ:function(e,t,r){"use strict";r.r(t);r("qVdP");var n=r("jsC+"),a=(r("lUTK"),r("BvKs")),c=(r("5NDa"),r("5rEg")),i=(r("+L6B"),r("2/Rp")),l=(r("P2fV"),r("NJEC")),u=(r("/zsF"),r("PArb")),o=r("PpiC"),s=r("WmNS"),p=r.n(s),d=r("k1fw"),f=(r("miYZ"),r("tsqr")),m=r("9og8"),b=r("tJVT"),h=(r("OaEy"),r("2fM7")),v=r("G3dp"),w=r("/MfK"),O=r("xvlK"),j=r("8Skl"),g=r("q1tI"),y=r.n(g),E=r("Hx5s"),x=r("56R7"),k=(r("2qtc"),r("kLXV")),C=function(e){var t=e.modalVisible,r=e.onCancel;return y.a.createElement(k["a"],{destroyOnClose:!0,title:"\u65b0\u5efa\u9996\u9875Banner",visible:t,width:600,onCancel:function(){return r()},footer:null},e.children)},R=C,S=r("io9h"),I=r("+n12");function L(e){return T.apply(this,arguments)}function T(){return T=Object(m["a"])(p.a.mark((function e(t){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(S["a"])("/api/xadmin/v1/slider",{params:t}));case 1:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}function q(e){return K.apply(this,arguments)}function K(){return K=Object(m["a"])(p.a.mark((function e(t){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(S["a"])("/api/xadmin/v1/slider/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function V(e){return B.apply(this,arguments)}function B(){return B=Object(m["a"])(p.a.mark((function e(t){var r,n;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=["img"],n=Object(I["b"])(t,r),e.abrupt("return",Object(S["a"])("/api/xadmin/v1/slider",{method:"POST",data:n}));case 3:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}function F(e,t){return U.apply(this,arguments)}function U(){return U=Object(m["a"])(p.a.mark((function e(t,r){var n,a;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=["img"],a=Object(I["b"])(t,n),e.abrupt("return",Object(S["a"])("/api/xadmin/v1/slider/".concat(r),{method:"PUT",data:a}));case 3:case"end":return e.stop()}}),e)}))),U.apply(this,arguments)}var _=function(e){var t=e.modalVisible,r=e.onCancel;return y.a.createElement(k["a"],{destroyOnClose:!0,title:"\u4fee\u6539\u9996\u9875Banner",visible:t,width:600,onCancel:function(){return r()},footer:null},e.children)},A=_,N=r("PkmJ"),P=(r("wd/R"),r("Lzxq"),h["a"].Option,function(){var e=Object(g["useState"])(!1),t=Object(b["a"])(e,2),r=t[0],s=t[1],h=Object(g["useState"])(!1),k=Object(b["a"])(h,2),C=k[0],S=k[1],T=Object(g["useState"])({}),K=Object(b["a"])(T,2),B=K[0],U=K[1],_=Object(g["useRef"])(),P=Object(g["useRef"])(),J=Object(g["useRef"])(),D=function(){var e=Object(m["a"])(p.a.mark((function e(t){var r,n,a;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=f["b"].loading("\u6b63\u5728\u6dfb\u52a0"),e.prev=1,e.next=4,V(Object(d["a"])({},t));case 4:return r(),f["b"].success("\u6dfb\u52a0\u6210\u529f"),e.abrupt("return",!0);case 9:if(e.prev=9,e.t0=e["catch"](1),"fields_errors"in e.t0.data)for(n in e.t0.data.fields_errors)a=e.t0.data.fields_errors[n],P.current.setFields([{name:n,errors:a}]);else f["b"].error("\u975e\u5b57\u6bb5\u7c7b\u578b\u9519\u8bef");return r(),f["b"].error("\u6dfb\u52a0\u5931\u8d25"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(m["a"])(p.a.mark((function e(t,r){var n,a;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=f["b"].loading("\u6b63\u5728\u4fee\u6539"),e.prev=1,e.next=4,F(t,r);case 4:return n(),f["b"].success("\u4fee\u6539\u6210\u529f"),e.abrupt("return",!0);case 9:if(e.prev=9,e.t0=e["catch"](1),"fields_errors"in e.t0.data)for(a in e.t0.data.fields_errors)t=e.t0.data.fields_errors[a],J.current.setFields([{name:a,errors:t}]);else f["b"].error("\u975e\u5b57\u6bb5\u7c7b\u578b\u9519\u8bef");return n(),f["b"].error("\u4fee\u6539\u5931\u8d25\u8bf7\u91cd\u8bd5\uff01"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,r){return e.apply(this,arguments)}}(),M=function(){var e=Object(m["a"])(p.a.mark((function e(t){var r,n;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=f["b"].loading("\u6b63\u5728\u5220\u9664"),t){e.next=3;break}return e.abrupt("return",!0);case 3:return e.prev=3,n=t.map((function(e){return e.id})).join(","),e.next=7,q(n);case 7:return r(),f["b"].success("\u5220\u9664\u6210\u529f"),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](3),r(),f["b"].error("\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5"),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),W=[],Q=[{title:"ID",dataIndex:"id",hideInForm:!0,hideInSearch:!0,rules:[{required:!0,message:"ID\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u56fe\u7247\u5730\u5740",dataIndex:"img",render:function(e,t){return y.a.createElement("img",{src:e,width:"80px",alt:""})},hideInSearch:!0,rules:[{required:!0,message:"\u56fe\u7247\u5730\u5740\u4e3a\u5fc5\u586b\u9879"}],renderFormItem:function(e,t,r){t.type,t.defaultRender,Object(o["a"])(t,["type","defaultRender"]);var n=r.getFieldValue("img");return y.a.createElement(N["a"],{img:n})}},{title:"\u8df3\u8f6c\u5730\u5740",dataIndex:"path",rules:[{required:!0,message:"\u8df3\u8f6c\u5730\u5740\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u6392\u5e8f",dataIndex:"sort",valueType:"digit",rules:[{required:!0,message:"\u6392\u5e8f\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u64cd\u4f5c",dataIndex:"option",valueType:"option",fixed:"right",width:100,render:function(e,t){return y.a.createElement(y.a.Fragment,null,y.a.createElement(v["default"],{title:"\u7f16\u8f91",className:"icon",onClick:Object(m["a"])(p.a.mark((function e(){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:S(!0),U(t);case 2:case"end":return e.stop()}}),e)})))}),y.a.createElement(u["a"],{type:"vertical"}),y.a.createElement(l["a"],{title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u9996\u9875Banner\u5417\uff1f",placement:"topRight",onConfirm:function(){M([t]),_.current.reloadAndRest()},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},y.a.createElement(w["default"],{title:"\u5220\u9664",className:"icon"})))}}],Y=Object(I["e"])(Q),Z=Object(I["k"])(Y),G=[].concat(Q),H=[].concat(Q),X=Object(g["useState"])({}),$=Object(b["a"])(X,2),ee=$[0],te=$[1],re=Object(g["useState"])({}),ne=Object(b["a"])(re,2),ae=ne[0],ce=ne[1];return y.a.createElement(E["c"],null,y.a.createElement(x["a"],{beforeSearchSubmit:function(e){return Object(I["d"])(e,W),e},params:ae,scroll:{x:"100%"},columnsStateMap:ee,onColumnsStateChange:function(e){return te(e)},headerTitle:"\u9996\u9875Banner\u8868\u683c",actionRef:_,rowKey:"id",toolBarRender:function(e,t){var r=t.selectedRows;return[y.a.createElement(i["a"],{type:"primary",onClick:function(){return s(!0)}},y.a.createElement(O["default"],null)," \u65b0\u5efa"),y.a.createElement(c["a"].Search,{style:{marginRight:20},placeholder:"\u641c\u7d22\u9996\u9875Banner ",onSearch:function(e){ce({search:e}),_.current.reload()}}),r&&r.length>0&&y.a.createElement(n["a"],{overlay:y.a.createElement(a["a"],{onClick:function(){var e=Object(m["a"])(p.a.mark((function e(t){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("remove"!==t.key){e.next=4;break}return e.next=3,M(r);case 3:_.current.reloadAndRest();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),selectedKeys:[]},y.a.createElement(a["a"].Item,{key:"remove"},"\u6279\u91cf\u5220\u9664"))},y.a.createElement(i["a"],null,"\u6279\u91cf\u64cd\u4f5c ",y.a.createElement(j["default"],null)))]},tableAlertRender:function(e){var t=e.selectedRowKeys;e.selectedRows;return t.length>0&&y.a.createElement("div",null,"\u5df2\u9009\u62e9"," ",y.a.createElement("a",{style:{fontWeight:600}},t.length)," ","\u9879\xa0\xa0")},request:function(e,t,r){return L(Object(d["a"])(Object(d["a"])({},e),{},{sorter:t,filter:r}))},columns:Z,rowSelection:{}}),y.a.createElement(R,{onCancel:function(){return s(!1)},modalVisible:r},y.a.createElement(x["a"],{formRef:P,onSubmit:function(){var e=Object(m["a"])(p.a.mark((function e(t){var r;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(I["l"])(t),e.next=3,D(t);case 3:r=e.sent,r&&(s(!1),_.current&&_.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",form:{labelCol:{span:6},labelAlign:"left"},columns:H,rowSelection:{}})),y.a.createElement(A,{onCancel:function(){return S(!1)},modalVisible:C},y.a.createElement(x["a"],{formRef:J,onSubmit:function(){var e=Object(m["a"])(p.a.mark((function e(t){var r;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(I["l"])(t),e.next=3,z(t,B.id);case 3:r=e.sent,r&&(S(!1),_.current&&_.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",form:{initialValues:B,labelCol:{span:6},labelAlign:"left"},columns:G,rowSelection:{}})))});t["default"]=P}}]);