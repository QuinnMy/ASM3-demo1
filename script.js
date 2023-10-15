"use strict";

//ASM3-9 thêm hộp dữ liệu và ẩn phần thông tin cá nhân
const guiXTemail = document.querySelector("#guixtemail");
const baoloi = document.querySelector(".luuy");

//sự kiện click gửi email của người dùng
guiXTemail.addEventListener("click", function () {
  //b1 Lấy dữ liệu từ input mà người dùng đã nhập-dạng giá trị-áp về viết thường dù họ nhập hoa
  const giatriMail = document
    .querySelector("#nhapemail")
    .value.toLocaleLowerCase();

  //b2 tạo biến chứa mẫu định dạng để check mail và check xem giá trị input đúng ko = hàm match
  const codecheckdangMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkMail = giatriMail.match(codecheckdangMail);

  if (checkMail) {
    document.querySelector(".email-phanhoi").classList.add("hidden");
    document.querySelector(".an-info").style.display = "block";
  } else {
    baoloi.textContent = "Lỗi định dạng Email";
    baoloi.classList.add("canhbao");
  }
});

//ASM3-10. Chức năng ẩn thông tin nghề nghiệp
//b1-diễn giải hàm: khi rê chuột vào vị trí thẻ có thuột tính được đặt tên là reChuotvao tại HTML thì hàm sẽ gọi tới 1 lớp là viewmore, ta để lớp này vào 1 biến JS tên là nutVMore, sau khi gọi tới thì cho nó hiển thị = display inlineblock
function reChuotvao(noibothe) {
  const nutVMore = noibothe.querySelector(".view-more");
  nutVMore.style.display = "inline-block";
}
function roiChuotdi(noibothe) {
  //thuộc tính onmouseout
  const nutVMore = noibothe.querySelector(".view-more");
  if (nutVMore.textContent === "VIEW LESS") {
    nutVMore.style.display = "inline-block";
  } else {
    nutVMore.style.display = "none";
  }
}

//b2-hàm kích để hiển thị nội dung của 1thẻ con khác trong cùng thẻ cha chứa nút kích
function kichchuot(noibothe) {
  const theChachuanutVM = noibothe.closest(".nd"); //dùng lệnh closest để trỏ ngược từ nơi có thuộc tính onclick tên kichchuot về phần tử cha chứa nó, phần tử cha có tên lớp.nd; cho ptử cha này vào biến
  const nutVMore = theChachuanutVM.querySelector(".view-more");

  if (nutVMore.textContent === "VIEW MORE") {
    const cactheChitiet = theChachuanutVM.querySelectorAll(".chitiet"); //vì ta xây dựng nút viewmore đồng cấp với ptử chứa nội dung được ẩn, nên từ nút trỏ về ptử cha, từ cha trỏ sang ptử con đang ẩn ---> gọi ptử này + cho vào 1 biến ---> đặc lệnh display block để ko ẩn ptử này nữa
    cactheChitiet.forEach((noibothe) => {
      noibothe.style.display = "block";
    });
    nutVMore.textContent = "VIEW LESS";
  } else {
    const cactheChitiet = theChachuanutVM.querySelectorAll(".chitiet");
    cactheChitiet.forEach((noibothe) => {
      noibothe.style.display = "none";
      nutVMore.textContent = "VIEW MORE";
    });
  }
}
