﻿var imgViewer;
var cropper;
var currentImage;

$(function () {
    initCropper();
})

function initCropper() {

    imgViewer = document.getElementById('image-container');
    cropper = new Cropper(imgViewer, {
        background: false,
        autoCrop: false,
        dragMode: "move",
        wheelZoomRatio: 0.3
    });
}

function scanTest() {
    scan.scanTest();
}

function rotateRight() {
    cropper.rotate(30);
}

function rotateLeft() {
    cropper.rotate(-30);
}


function zoomIn() {

    cropper.zoom(0.1);
}

function zoomOut() {
    cropper.zoom(-0.1);
}

function save() {

    var data = cropper.getCroppedCanvas().toDataURL();

    if (currentImage) {
        $(currentImage).attr('src', data);

        cropper.replace(data);
    }
}

function clearCropper() {
    cropper.clear();
}
function setCrop() {

    cropper.crop();
}

function setImageToViewer(data) {

    //cropper.destroy();

    currentImage = $(data);

    var src = $(data).attr("src");

    $("#image-list li img").each(function (i) {
        $(this).removeClass("active");
    })

    $(data).addClass("active");

    $("#image-container").attr("src", src);

    cropper.replace(src);

    //initCropper();

}