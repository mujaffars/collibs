var outputPicker='';
        $(document).ready(function () {
        $('.picMainDiv div').click(function(){
        if ($(this).attr('row')!==undefined){
                outputPicker+='"'+$(this).attr('row')+'_'+$(this).attr('col')+'":"light2",';
                console.log(outputPicker);
        }
        })
        });
// 19 38

        function getColors() {
        const colorThief=new ColorThief();
                var divColors='';
                for (var i=38; i<39; i++) {

        for (var j=18; j<49; j++) {
        const img=document.querySelector('#image_'+i+'_'+j);
                // Make sure image is finished loading
                if (img.complete) {
        var colors=colorThief.getColor(img);
                // console.log(colors);

                var hexColor=rgbToHex(colors[0], colors[1], colors[2]);
                $('#coldv_'+i+"_"+j).css('background-color', hexColor);
                divColors+='"'+i+'_'+j+'":"'+hexColor+'",';
        } else {
        img.addEventListener('load', function () {
        colorThief.getColor(img);
        });
        }
        }
        }

        console.log(divColors);
        }

function componentToHex(c) {
var hex=c.toString(16);
        return hex.length==1 ? "0"+hex : hex;
}

function rgbToHex(r, g, b) {
return "#"+componentToHex(r)+componentToHex(g)+componentToHex(b);
}


const colorShade=(col, amt)=>{
col=col.replace(/^#/, '')
        if (col.length===3)
        col=col[0]+col[0]+col[1]+col[1]+col[2]+col[2]

        let [r, g, b]=col.match(/.{2}/g);
        ([r, g, b]=[parseInt(r, 16)+amt, parseInt(g, 16)+amt, parseInt(b, 16)+amt])

        r=Math.max(Math.min(255, r), 0).toString(16)
        g=Math.max(Math.min(255, g), 0).toString(16)
        b=Math.max(Math.min(255, b), 0).toString(16)

        const rr=(r.length<2 ? '0' : '')+r
        const gg=(g.length<2 ? '0' : '')+g
        const bb=(b.length<2 ? '0' : '')+b

        return `#${rr}${gg}${bb}`
}

function getShades() {
var shadeColor=colorShade('#54b946', -60);
        $('.cshade1').css('background-color', '#54b946');
        $('.cshade2').css('background-color', shadeColor);
}

function drawCharacter(){

$.ajax({
url: 'collib.html',
        type: 'GET',
        dataType: 'html',
        async: true,
        error: function () {
        },
        success: function (resp) {

        var ouputKeys='';
                var objJson=JSON.parse(resp);
                for (var key in objJson) {

        if (objJson.hasOwnProperty(key)) {

        var divColor=objJson[key];
                var resmatch=divColor.match(/#44/g);
                //console.log('rematch '+resmatch);
                if (divColor==='#0c346c'){
        ouputKeys+='"'+key+'":"dark", ';
        }
        $('#coldv_'+key).css('background-color', objJson[key]);
        }

        }

        console.log(ouputKeys);
                changeHatColor();
        }
})

}

function changeHatColor(){
$.ajax({
url: 'parts/hat.html',
        type: 'GET',
        dataType: 'html',
        async: true,
        error: function () {
        },
        success: function (resp) {

        var lightColor='#'+(Math.random()*0xFFFFFF<<0).toString(16).padStart(6, '0');
                var lightColor2=getLight2Color(lightColor);
                var darkColor=getDarkColor(lightColor);
                var ouputKeys='';
                var objJson=JSON.parse(resp);
                console.log(objJson);
                for (var key in objJson) {
        if (objJson[key]==='light'){
        $('#coldv_'+key).css('background-color', lightColor);
        } else if (objJson[key]==='light2'){
        $('#coldv_'+key).css('background-color', lightColor2);
        }else if (objJson[key]==='dark'){
        $('#coldv_'+key).css('background-color', darkColor);
        }
        }
        
        }
});
        changeFaceColor();
}

function changeFaceColor(){
$.ajax({
url: 'parts/face.html',
        type: 'GET',
        dataType: 'html',
        async: true,
        error: function () {
        },
        success: function (resp) {

        var lightColor='#'+(Math.random()*0xFFFFFF<<0).toString(16).padStart(6, '0');
        var lightColor2=getLight2Color(lightColor);
                var darkColor=getDarkColor(lightColor);
                var ouputKeys='';
                var objJson=JSON.parse(resp);
                console.log(objJson);
                for (var key in objJson) {
        if (objJson[key]==='light'){
        $('#coldv_'+key).css('background-color', lightColor);
        }else if (objJson[key]==='light2'){
        $('#coldv_'+key).css('background-color', lightColor2);
        } else if (objJson[key]==='dark'){
        $('#coldv_'+key).css('background-color', darkColor);
        }
        }
        }
});

changePantColor();
}

function changePantColor(){
$.ajax({
url: 'parts/pant.html',
        type: 'GET',
        dataType: 'html',
        async: true,
        error: function () {
        },
        success: function (resp) {

        var lightColor='#'+(Math.random()*0xFFFFFF<<0).toString(16).padStart(6, '0');
                var lightColor2=getLight2Color(lightColor);
                var darkColor=getDarkColor(lightColor);
                var ouputKeys='';
                var objJson=JSON.parse(resp);
                console.log(objJson);
                for (var key in objJson) {
        if (objJson[key]==='light'){
        $('#coldv_'+key).css('background-color', lightColor);
        } else if (objJson[key]==='light2'){
        $('#coldv_'+key).css('background-color', lightColor2);
        }else if (objJson[key]==='dark'){
        $('#coldv_'+key).css('background-color', darkColor);
        }
        }
        }
});
}

function getLight2Color(lightColor){
    return colorShade(lightColor, -20);
}

function getDarkColor(lightColor){
    return colorShade(lightColor, -70);
}