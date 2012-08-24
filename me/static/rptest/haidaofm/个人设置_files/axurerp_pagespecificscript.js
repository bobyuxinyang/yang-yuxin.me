
var PageName = '个人设置';
var PageId = '459341b50e504c699c38e12ddfdc8ae4'
var PageUrl = '个人设置.html'
document.title = '个人设置';
var PageNotes = 
{
"pageName":"个人设置",
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

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u21 = document.getElementById('u21');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u26 = document.getElementById('u26');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u28 = document.getElementById('u28');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
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

var u39 = document.getElementById('u39');

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u6 = document.getElementById('u6');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'top';
var u9 = document.getElementById('u9');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u40 = document.getElementById('u40');

var u41 = document.getElementById('u41');

var u45 = document.getElementById('u45');

var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u11 = document.getElementById('u11');

var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
if (window.OnLoad) OnLoad();
