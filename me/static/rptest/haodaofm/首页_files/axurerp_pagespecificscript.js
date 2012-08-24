
var PageName = '首页';
var PageId = '2166c5e819384d8f990ff291482b63fc'
var PageUrl = '首页.html'
document.title = '首页';
var PageNotes = 
{
"pageName":"首页",
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

var u80 = document.getElementById('u80');

var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u82 = document.getElementById('u82');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u85 = document.getElementById('u85');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u91 = document.getElementById('u91');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u110 = document.getElementById('u110');

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u112 = document.getElementById('u112');

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u114 = document.getElementById('u114');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u25 = document.getElementById('u25');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u101 = document.getElementById('u101');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u108 = document.getElementById('u108');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
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

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u94 = document.getElementById('u94');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u96 = document.getElementById('u96');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u98 = document.getElementById('u98');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u116 = document.getElementById('u116');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u119 = document.getElementById('u119');

var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u42 = document.getElementById('u42');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u44 = document.getElementById('u44');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u46 = document.getElementById('u46');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u48 = document.getElementById('u48');

var u49 = document.getElementById('u49');

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

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u51 = document.getElementById('u51');

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

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u64 = document.getElementById('u64');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u69 = document.getElementById('u69');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u71 = document.getElementById('u71');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u73 = document.getElementById('u73');

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u76 = document.getElementById('u76');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u78 = document.getElementById('u78');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
if (window.OnLoad) OnLoad();
