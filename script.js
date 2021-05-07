console.log("RUN SCRIPT");
// Đổi style của tiêu đề Our companies thành chữ in đậm và kích thước 32px

document.getElementsByClassName("title-section")[0].style.fontWeight= "bold";
document.getElementsByClassName("title-section")[0].style.fontSize= "32px";


// Đổi màu nền của phần footer thành màu #0984e3
document.getElementById("OMG-footer").style.backgroundColor= "#0984e3";


// Đổi đoạn text ở footer từ "© 2020 One Mount Group, JSC." thành "© 2021 One Mount Group, JSC."
document.getElementsByClassName("footer-textarea")[2].innerText= "#© 2021 One Mount Group, JSC.";

// Đổi ảnh đầu tiên thành ảnh onhousing.png

//document.getElementsByClassName( "col-md-4")[0].lastElementChild.lastElementChild.src= "img/onhousing.png";
document.querySelector(".row.grid-company-row img").src ="img/onhousing.png";


