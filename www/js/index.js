$(function () {
    for (var i=1; i<49; i++) {
        var rowHtml = '';
        rowHtml += '<div class="picMainDiv picRow">';
        for (var j=1; j<49; j++) {
            rowHtml += '<div id="coldv_'+i+'_'+j+'" row="'+i+'" col="'+j+'" class="colDiv"></div>';
        }
        rowHtml += '</div>';
        
        $('.picMainDiv').append(rowHtml);
    }    
    
})