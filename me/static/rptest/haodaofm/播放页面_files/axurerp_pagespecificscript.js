﻿
var PageName = '播放页面';
var PageId = 'ac86565a8d914bdda318d59150bc7a38'
var PageUrl = '播放页面.html'
document.title = '播放页面';
var PageNotes = 
{
"pageName":"播放页面",
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

var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');

var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u30 = document.getElementById('u30');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u32 = document.getElementById('u32');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u35 = document.getElementById('u35');

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u37 = document.getElementById('u37');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u5 = document.getElementById('u5');

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u7 = document.getElementById('u7');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u42 = document.getElementById('u42');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u44 = document.getElementById('u44');

var u48 = document.getElementById('u48');

var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');

var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');

if (window.OnLoad) OnLoad();
