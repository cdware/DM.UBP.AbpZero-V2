webpackJsonp([13],{532:function(n,t,o){"use strict";function e(n){Object(d.a)().then(function(t){var o,e,r,d=new a.a("Edit Group"),s=i()(p()),l=n.getProp("Data:Condition"),u=n.getProp("Behavior:SortOrder"),v=i()(".ghb-condition",s),b=i()(".ghb-sort",s);if(!l||!u)return null;o=l.control.self.$body.clone(),e=u.control.self.$body.clone(),v.append(o),b.append(e),s.on("click",".d-fc-exp-but",function(){r=i()(this),c.a.trigger("show-expression-editor",{entity:r.prev().val(),onSave:function(n,t,o){r.prev().val(t),o.close()}})}),s.on("click",".edit-ghb",function(){n.prop("Condition",o.find("input").val()),n.prop("SortOrder",e.find(":selected").val()),d.close(),n.render(),c.a.trigger("update-properties-panel",n)}),i()(".fr-modal-content",d).html(s),t.append(d),window.DSG.head.put(t)})}var r,i,d,a,c,s,p;Object.defineProperty(t,"__esModule",{value:!0}),r=o(0),i=o.n(r),d=o(253),a=o(252),c=o(5),s=o(7),p=function(){return'\n        <div>\n            <div class="fr-modal-body edit-band">\n              <div class="ghb-content">\n                <div class="ghb-condition">\n                  <span>'+s.a.tr("GroupBandEditor Condition")+'</span>\n                </div>\n                <div class="ghb-sort">\n                  <span>'+s.a.tr("DataProcessing SortOrder")+'</span>\n                </div>\n              </div>\n            </div>\n\n            <div class="fr-modal-footer content-right">\n                <button type="button" class="fr-btn fr-btn-primary edit-ghb">\n                    '+s.a.tr("Buttons Ok")+"\n                </button>\n            </div>\n        </div>\n    "},t.create=e}});