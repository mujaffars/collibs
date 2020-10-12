$(document).ready(function () {

});

function getColors() {
    const colorThief = new ColorThief();
    var divColors = '';

    for (var i = 1; i < 19; i++) {

        for (var j = 1; j < 49; j++) {
            const img = document.querySelector('#image_' + i + '_' + j);

            // Make sure image is finished loading
            if (img.complete) {
                var colors = colorThief.getColor(img);
                // console.log(colors);

                var hexColor = rgbToHex(colors[0], colors[1], colors[2]);

                $('#coldv_' + i + "_" + j).css('background-color', hexColor);
                divColors += i + "_" + j + "_" + hexColor + ",";

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
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


const colorShade = (col, amt) => {
    col = col.replace(/^#/, '')
    if (col.length === 3)
        col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2]

    let [r, g, b] = col.match(/.{2}/g);
    ([r, g, b] = [parseInt(r, 16) + amt, parseInt(g, 16) + amt, parseInt(b, 16) + amt])

    r = Math.max(Math.min(255, r), 0).toString(16)
    g = Math.max(Math.min(255, g), 0).toString(16)
    b = Math.max(Math.min(255, b), 0).toString(16)

    const rr = (r.length < 2 ? '0' : '') + r
    const gg = (g.length < 2 ? '0' : '') + g
    const bb = (b.length < 2 ? '0' : '') + b

    return `#${rr}${gg}${bb}`
}

function getShades() {
    var shadeColor = colorShade('#54b946', -60);

    $('.cshade1').css('background-color', '#54b946');
    $('.cshade2').css('background-color', shadeColor);
}