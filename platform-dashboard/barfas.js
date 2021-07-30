function changeSubMenuText(id) {
  $(document).on("dblclick", id, function () {
    debugger;
    var current = $(this).text();
    $(id).html(
      '<div  class="form-control">' +
        '<textarea class="form-control" id="subMenuText" rows="1">' +
        current
        +"</textarea>" 
       
        +
      '</div>'
    );


      $("#subMenuText").focus();
      $("#subMenuText")
        .focus(function () {
          console.log("in");
        })
        .blur(function () {
          var newcont = $("#subMenuText").val();
          $(id).text(newcont);
        });
  });
}
function changeMenuNavText(id,IconId) {
  $(document).on("dblclick", id, function () {
    var current = $(this).text();
    //style="font-weight: 700";
    $(id).html(
      '<div class="sub">' +
        '<textarea class="form-control" id="newcont" rows="1">' +
        current +
        "</textarea>" +
        '<select data-show-content="true" id="iconSelect"  class="fa" >' +
        "<option selected>Icon Sec</option>" +
        '<option value="fa fa-cog">&#xf013; fa-fa-cog</option>' +
        '<option value="fa fa-align-left">&#xf036; fa-align-left</option>' +
        '<option value="fa fa-align-right">&#xf038; fa-align-right</option>' +
        '<option value="fa fa-ambulance">&#xf0f9; fa-ambulance</option>' +
        '<option value="fa fa-anchor">&#xf13d; fa-anchor</option>' +
        '<option value="fa fa-angle-double-down">&#xf103; fa-angle-double-down</option>' +
        '<option value="fa fa-angle-double-left">&#xf100; fa-angle-double-left</option>' +
        '<option value="fa fa-angle-double-right">&#xf101; fa-angle-double-right</option>' +
        '<option value="fa fa-angle-double-up">&#xf102; fa-angle-double-up</option>' +
        '<option value="fa fa-angle-left">&#xf104; fa-angle-left</option>' +
        '<option value="fa fa-angle-right">&#xf105; fa-angle-right</option>' +
        '<option value="fa fa-angle-up">&#xf106; fa-angle-up</option>' +
        '<option value="fa fa-archive">&#xf187; fa-archive</option>' +
        '<option value="fa fa-area-chart">&#xf1fe; fa-area-chart</option>' +
        '<option value="fa fa-arrow-circle-down">&#xf0ab; fa-arrow-circle-down</option>' +
        '<option value="fa fa-arrow-circle-left">&#xf0a8; fa-arrow-circle-left</option>' +
        '<option value="fa fa-arrow-circle-right">&#xf0a9; fa-arrow-circle-right</option>' +
        '<option value="fa fa-arrow-circle-up">&#xf0aa; fa-arrow-circle-up</option>' +
        '<option value="fa fa-arrow-down">&#xf063; fa-arrow-down</option>' +
        '<option value="fa fa-arrow-left">&#xf060; fa-arrow-left</option>' +
        '<option value="fa fa-arrow-right">&#xf061; fa-arrow-right</option>' +
        '<option value="fa fa-arrow-up">&#xf062; fa-arrow-up</option>' +
        '<option value="fa fa-arrows-alt">&#xf0b2; fa-arrows-alt</option>' +
        '<option value="fa fa-asterisk">&#xf069; fa-asterisk</option>' +
        '<option value="fa fa-at">&#xf1fa; fa-at</option>' +
        '<option value="fa fa-automobile">&#xf1b9; fa-automobile</option>' +
        '<option value="fa fa-backward">&#xf04a; fa-backward</option>' +
        '<option value="fa fa-balance-scale">&#xf24e; fa-balance-scale</option>' +
        '<option value="fa fa-ban">&#xf05e; fa-ban</option>' +
        '<option value="fa fa-bank">&#xf19c; fa-bank</option>' +
        '<option value="fa fa-bar-chart">&#xf080; fa-bar-chart</option>' +
        '<option value="fa fa-bar-chart-o">&#xf080; fa-bar-chart-o</option>' +
        '<option value="fa fa-connectdevelop">&#xf20e; fa-connectdevelop</option>' +
        '<option value="fa fa-contao">&#xf26d; fa-contao</option>' +
        '<option value="fa fa-copy">&#xf0c5; fa-copy</option>' +
        '<option value="fa fa-copyright">&#xf1f9; fa-copyright</option>' +
        '<option value="fa fa-creative-commons">&#xf25e; fa-creative-commons</option>' +
        '<option value="fa fa-credit-card">&#xf09d; fa-credit-card</option>' +
        '<option value="fa fa-crop">&#xf125; fa-crop</option>' +
        '<option value="fa fa-crosshairs">&#xf05b; fa-crosshairs</option>' +
        '<option value="fa fa-cube">&#xf1b2; fa-cube</option>' +
        '<option value="fa fa-cubes">&#xf1b3; fa-cubes</option>' +
        '<option value="fa fa-cut">&#xf0c4; fa-cut</option>' +
        '<option value="fa fa-dashcube">&#xf210; fa-dashcube</option>' +
        '<option value="fa fa fa-database">&#xf1c0; fa-database</option>' +
        '<option value="fa fa-dedent">&#xf03b; fa-dedent</option>' +
        '<option value="fa fa-desktop">&#xf108; fa-desktop</option>' +
        '<option value="fa fa-dollar">&#xf155; fa-dollar</option>' +
        '<option value="fa fa-download">&#xf019; fa-download</option>' +
        '<option value="fa fa-edit">&#xf044; fa-edit</option>' +
        '<option value="fa fa-eject">&#xf052; fa-eject</option>' +
        '<option value="fa fa-ellipsis-h">&#xf141; fa-ellipsis-h</option>' +
        '<option value="fa fa-ellipsis-v">&#xf142; fa-ellipsis-v</option>' +
        '<option value="fa fa-envelope">&#xf0e0; fa-envelope</option>' +
        '<option value="fa fa-eur">&#xf153; fa-eur</option>' +
        '<option value="fa fa-euro">&#xf153; fa-euro</option>' +
        '<option value="fa fa-exclamation">&#xf12a; fa-exclamation</option>' +
        "</select>" +
        '<div><button id="subMenuPlus" type="button" class=btn btn-primary>Sub Menu +</button><button id="saveChanges" class=btn btn-primary>Kaydet</button></div> </div>'
    );

    $("#saveChanges").click(function () {
      $("#newcont").focus();
      $("#newcont")
        .focus(function () {
          console.log("in");
        })
        .blur(function () {
          var newcont = $("#newcont").val();
          $(id).text(newcont);
        });
      alertify.notify("Kaydedildi", "success");
      var x=document.getElementById("iconSelect").value;

      document.getElementById(IconId).className = x;

       //window.alert(x);
    });

    $("#subMenuPlus").click(function(){
      alertify.notify("Sub Menu Eklendi","success")
    });
  });
}

function settingMenu() {
  window.showAlert = function () {
    alertify.alert(
      '<div class="row"><div class="col-md6"><div class="card"><div class="card-body">' +
        '<select data-show-content="true" id="iconSelect" style="font-weight: 700; box-sizing: border-box;" class="fa">' +
        "<option selected>Icon Sec</option>"+
        '<option value="fa-fa-cog">&#xf013; fa-fa-cog</option>' +
        '<option value="fa-align-left">&#xf036; fa-align-left</option>' +
        '<option value="fa-align-right">&#xf038; fa-align-right</option>' +
        '<option value="fa-ambulance">&#xf0f9; fa-ambulance</option>' +
        '<option value="fa-anchor">&#xf13d; fa-anchor</option>' +
        '<option value="fa-angle-double-down">&#xf103; fa-angle-double-down</option>' +
        '<option value="fa-angle-double-left">&#xf100; fa-angle-double-left</option>' +
        '<option value="fa-angle-double-right">&#xf101; fa-angle-double-right</option>' +
        '<option value="fa-angle-double-up">&#xf102; fa-angle-double-up</option>' +
        '<option value="fa-angle-left">&#xf104; fa-angle-left</option>' +
        '<option value="fa-angle-right">&#xf105; fa-angle-right</option>' +
        '<option value="fa-angle-up">&#xf106; fa-angle-up</option>' +
        '<option value="fa-archive">&#xf187; fa-archive</option>' +
        '<option value="fa-area-chart">&#xf1fe; fa-area-chart</option>' +
        '<option value="fa-arrow-circle-down">&#xf0ab; fa-arrow-circle-down</option>' +
        '<option value="fa-arrow-circle-left">&#xf0a8; fa-arrow-circle-left</option>' +
        '<option value="fa-arrow-circle-right">&#xf0a9; fa-arrow-circle-right</option>' +
        ' <option value="fa-arrow-circle-up">&#xf0aa; fa-arrow-circle-up</option>' +
        '<option value="fa-arrow-down">&#xf063; fa-arrow-down</option>' +
        '<option value="fa-arrow-left">&#xf060; fa-arrow-left</option>' +
        '<option value="fa-arrow-right">&#xf061; fa-arrow-right</option>' +
        '<option value="fa-arrow-up">&#xf062; fa-arrow-up</option>' +
        '<option value="fa-arrows-alt">&#xf0b2; fa-arrows-alt</option>' +
        '<option value="fa-asterisk">&#xf069; fa-asterisk</option>' +
        '<option value="fa-at">&#xf1fa; fa-at</option>' +
        '<option value="fa-automobile">&#xf1b9; fa-automobile</option>' +
        '<option value="fa-backward">&#xf04a; fa-backward</option>' +
        '<option value="fa-balance-scale">&#xf24e; fa-balance-scale</option>' +
        '<option value="fa-ban">&#xf05e; fa-ban</option>' +
        '<option value="fa-bank">&#xf19c; fa-bank</option>' +
        '<option value="fa-bar-chart">&#xf080; fa-bar-chart</option>' +
        '<option value="fa-bar-chart-o">&#xf080; fa-bar-chart-o</option>' +
        '<option value="fa-connectdevelop">&#xf20e; fa-connectdevelop</option>' +
        '<option value="fa-contao">&#xf26d; fa-contao</option>' +
        '<option value="fa-copy">&#xf0c5; fa-copy</option>' +
        '<option value="fa-copyright">&#xf1f9; fa-copyright</option>' +
        '<option value="fa-creative-commons">&#xf25e; fa-creative-commons</option>' +
        '<option value="fa-credit-card">&#xf09d; fa-credit-card</option>' +
        '<option value="fa-crop">&#xf125; fa-crop</option>' +
        '<option value="fa-crosshairs">&#xf05b; fa-crosshairs</option>' +
        '<option value="fa-cube">&#xf1b2; fa-cube</option>' +
        '<option value="fa-cubes">&#xf1b3; fa-cubes</option>' +
        '<option value="fa-cut">&#xf0c4; fa-cut</option>' +
        '<option value="fa-dashcube">&#xf210; fa-dashcube</option>' +
        '<option value="fa-database">&#xf1c0; fa-database</option>' +
        '<option value="fa-dedent">&#xf03b; fa-dedent</option>' +
        '<option value="fa-desktop">&#xf108; fa-desktop</option>' +
        '<option value="fa-dollar">&#xf155; fa-dollar</option>' +
        '<option value="fa-download">&#xf019; fa-download</option>' +
        '<option value="fa-edit">&#xf044; fa-edit</option>' +
        '<option value="fa-eject">&#xf052; fa-eject</option>' +
        '<option value="fa-ellipsis-h">&#xf141; fa-ellipsis-h</option>' +
        '<option value="fa-ellipsis-v">&#xf142; fa-ellipsis-v</option>' +
        '<option value="fa-envelope">&#xf0e0; fa-envelope</option>' +
        '<option value="fa-eur">&#xf153; fa-eur</option>' +
        '<option value="fa-euro">&#xf153; fa-euro</option>' +
        '<option value="fa-exclamation">&#xf12a; fa-exclamation</option>' +
        "</select>" +
        "</div></div>" +
        '<a  href="javascript:showConfirm();">Kaydet</a>' +
        '<a class="btn btn-success" href="javascript:editMenu();">Menü Düzenle</a></div></div>'
    );
    $("#iconSelect").selectpicker();
  };

  window.showConfirm = function () {
    alertify.confirm('<div class="row"><a href="javascript:showAlert();">Kaydet</a></div>');
  };
  window.editMenu = function () {
    alertify.confirm('<a href="javascript:showAlert();">Menü Düzenle</a>');
  };
  //works with modeless too
  alertify.alert().setting("modal", false);
  alertify.confirm().setting("modal", false);
  window.showAlert();
}


let menuCount = -1;
let idm = -1;
function createNavMenu(value) {
  let navMenuElement = "";
  let icon = "cog";
  for (let i = 0; i <= value; i++) {
    navMenuElement =
      navMenuElement +
      " <li class='sub-menu'><a>" +
      "<i id=" +
      i +
      " class='fa fa-" +
      icon +
      "'></i>" +
      "<span id=" +
      i +
      "menuNav" +
      " type='button'>Menu-nav</span></a>" +
      "<ul id=" +
      i +
      "subMenu" +
      " class='sub'><li><a ><i class='fa fa-plus'></i><b>Sub-Menu</b></a></li></ul></li>";
  }
  document.getElementById("mn1").innerHTML = navMenuElement;
}


function createSubMenu(array) {
  let subMenuElement = "";
  for (let i = 0; i <= array.subMenuCount; i++) {
    subMenuElement =
      subMenuElement +
      " <li><a><i  class='fa fa-cog'></i><b id="+array.subMenuId +i+">Sub-Menu</b></a></li>";
  }
  document.getElementById(array.subMenuId).innerHTML = subMenuElement;
}

function addMenu() {
  menuCount = menuCount + 1;
  idm = idm + 1;
  localStorage.setItem("key", menuCount);
  alertify.notify(menuCount+1 +":"+"Menu-Nav Eklendi","success")
}

function starMenu(array) {
  for (let i = 0; i < array.length; i++) {
      createSubMenu(array[i]);
  }
}

function menuNavClickEvent(menuNavCount){

  for(let i=0;i<=menuNavCount; i++){
    let menuNavId="#"+i;
    $(menuNavId).click(function(){
      let Idm="#"+i+"menuNav";
      changeMenuNavText(Idm,i)
     
     
    });
    
  }
}

function subMenuClickEvent(){
  for(let m=0;m<=5;m++){
    let subMenuTextId='#0subMenu'+m;
  changeSubMenuText(subMenuTextId)
  }
}


function addMenuItemToTable(menuItemValue){
  let filePath='./img/'
  let htmlCode='<td><img id="drag1" src="'+filePath+''+menuItemValue+'" width="80" height="40"></td>'
  return htmlCode;
}

function editSideBarMenuItmes() {
  $('#editSideBarMenuItem').modal('show');
    var z='<div class="modal fade" id="editSideBarMenuItem" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'+
    '<div class="modal-dialog modal-dialog-centered" role="document">'+
        '<div class="modal-content">'+
            '<div class="modal-header">'+
                '<h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>'+
                '<button id="btnClose" type="button" class="close" data-dismiss="modal" aria-label="Close">'+
                    '<span aria-hidden="true">&times;</span>'+
                '</button> </div>'+
            '<div class="modal-body"><form>'+
                    '<div class="row mb-3"> <label id="lblIcon" class="col-sm-2 col-form-label">Icon seç:</label>'+
                        '<div class="col-sm-10" id="iconList"><div class="row"><div class="col-md6"><div class="card"><div class="card-body">'+
                            '<select data-show-content="true" id="iconSelect" style="font-weight: 900; box-sizing: border-box;" class="fa  form-select" aria-label="Default select example">'+
                                '<option selected></option>'+
                                '<option value="fa-fa-cog">&#xf013; fa-fa-cog</option>'+
                                '<option value="fa-align-left">&#xf036; fa-align-left</option>'+
                                '<option value="fa-align-right">&#xf038; fa-align-right</option>'+
                                '<option value="fa-ambulance">&#xf0f9; fa-ambulance</option>'+
                                '<option value="fa-anchor">&#xf13d; fa-anchor</option>'+
                                '<option value="fa-angle-double-down">&#xf103;fa-angle-double-down</option>'+
                                '<option value="fa-angle-double-left">&#xf100;fa-angle-double-left</option>'+
                                '<option value="fa-angle-double-right">&#xf101;fa-angle-double-right</option>'+
                                '<option value="fa-angle-double-up">&#xf102;fa-angle-double-up</option>'+
                                '<option value="fa-angle-left">&#xf104; fa-angle-left</option>'+
                                '<option value="fa-angle-right">&#xf105; fa-angle-right</option>'+
                                '<option value="fa-angle-up">&#xf106; fa-angle-up</option>'+
                                '<option value="fa-archive">&#xf187; fa-archive</option>'+
                                '<option value="fa-area-chart">&#xf1fe;fa-area-chart</option>'+
                                '<option value="fa-arrow-circle-down">&#xf0ab;fa-arrow-circle-down</option>'+
                                '<option value="fa-arrow-circle-left">&#xf0a8;fa-arrow-circle-left</option>'+
                                '<option value="fa-arrow-circle-right">&#xf0a9;fa-arrow-circle-right</option>'+
                                '<option value="fa-arrow-circle-up">&#xf0aa;fa-arrow-circle-up</option>'+
                                '<option value="fa-arrow-down">&#xf063; fa-arrow-down</option>'+
                                '<option value="fa-arrow-left">&#xf060; fa-arrow-left</option>'+
                                '<option value="fa-arrow-right">&#xf061; fa-arrow-right</option>'+
                                '<option value="fa-arrow-up">&#xf062; fa-arrow-up</option>'+
                                '<option value="fa-arrows-alt">&#xf0b2; fa-arrows-alt</option>'+
                                '<option value="fa-asterisk">&#xf069; fa-asterisk</option>'+
                                '<option value="fa-at">&#xf1fa; fa-at</option>'+
                                '<option value="fa-automobile">&#xf1b9;fa-automobile</option>'+
                                '<option value="fa-backward">&#xf04a; fa-backward</option>'+
                                '<option value="fa-balance-scale">&#xf24e;fa-balance-scale</option>'+
                                '<option value="fa-ban">&#xf05e; fa-ban</option>'+
                                '<option value="fa-bank">&#xf19c; fa-bank</option>'+
                                '<option value="fa-bar-chart">&#xf080; fa-bar-chart</option>'+
                                '<option value="fa-bar-chart-o">&#xf080; fa-bar-chart-o</option>'+
                                '<option value="fa-connectdevelop">&#xf20e;fa-connectdevelop</option>'+
                                '<option value="fa-contao">&#xf26d; fa-contao</option>'+
                                '<option value="fa-copy">&#xf0c5; fa-copy</option>'+
                                '<option value="fa-copyright">&#xf1f9; fa-copyright</option>'+
                                '<option value="fa-creative-commons">&#xf25e;fa-creative-commons</option>'+
                                '<option value="fa-credit-card">&#xf09d; fa-credit-card</option>'+
                                '<option value="fa-crop">&#xf125; fa-crop</option>'+
                                '<option value="fa-crosshairs">&#xf05b; fa-crosshairs</option>'+
                                '<option value="fa-cube">&#xf1b2; fa-cube</option>'+
                                '<option value="fa-cubes">&#xf1b3; fa-cubes</option>'+
                                '<option value="fa-cut">&#xf0c4; fa-cut</option>'+
                                '<option value="fa-dashcube">&#xf210; fa-dashcube</option>'+
                                '<option value="fa-database">&#xf1c0; fa-database</option>'+
                                '<option value="fa-dedent">&#xf03b; fa-dedent</option>'+
                                '<option value="fa-desktop">&#xf108; fa-desktop</option>'+
                                '<option value="fa-dollar">&#xf155; fa-dollar</option>'+
                                '<option value="fa-download">&#xf019; fa-download</option>'+
                                '<option value="fa-edit">&#xf044; fa-edit</option>'+
                                '<option value="fa-eject">&#xf052; fa-eject</option>'+
                                '<option value="fa-ellipsis-h">&#xf141; fa-ellipsis-h</option>'+
                                '<option value="fa-ellipsis-v">&#xf142; fa-ellipsis-v</option>'+
                                '<option value="fa-envelope">&#xf0e0; fa-envelope</option>'+
                                '<option value="fa-eur">&#xf153; fa-eur</option>'+
                                '<option value="fa-euro">&#xf153; fa-euro</option>'+
                                '<option value="fa-exclamation">&#xf12a; fa-exclamation</option>'+
                            '</select></div></div></div></div></div></div>'+
                    '<div class="row mb-3"><label id="lblText" class="col-sm-2 col-form-label">Text:</label>'+
                        '<div class="col-sm-10"><input type="text" class="form-control" id="txtInput1"></div></div>'+
                    '<div class="row mb-3"><label id="lblText" class="col-sm-2 col-form-label">Sub-menu:</label>'+
                        '<div id="buttonIn" class="col-sm-10">'+
                            '<input type="text" class="form-control" id="txtInput2">'+
                            '<input id="btnAdd" class="btn btn-primary" type="button" value="Add" onclick="addSubmenu()">'+
                        '</div></div></form></div>'+
            '<div class="modal-footer">'+
                '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
                '<button type="button" class="btn btn-primary">Save changes</button>'+
            '</div></div></div></div>';
  document.getElementById("modalDiv").innerHTML = z;
}