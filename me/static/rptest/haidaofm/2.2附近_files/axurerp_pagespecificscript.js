﻿
var PageName = '2.2附近';
var PageId = '0a76ed06986849bba2a8cd8c54a0cd4e'
var PageUrl = '2.2附近.html'
document.title = '2.2附近';
var PageNotes = 
{
"pageName":"2.2附近",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '24');
  value = value.replace(/\[\[GenMonth\]\]/g, '8');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'August');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Friday');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u50 = document.getElementById('u50');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u52 = document.getElementById('u52');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u59 = document.getElementById('u59');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u66 = document.getElementById('u66');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u68 = document.getElementById('u68');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u34 = document.getElementById('u34');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u36 = document.getElementById('u36');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u0 = document.getElementById('u0');
gv_vAlignTable['u0'] = 'top';
var u1 = document.getElementById('u1');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u3 = document.getElementById('u3');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u41 = document.getElementById('u41');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u48 = document.getElementById('u48');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
if (window.OnLoad) OnLoad();
