document.addEventListener("DOMContentLoaded", function () {
  var p = document.querySelector("p#number");
  var start_btn = document.querySelector("button#start");
  var end_btn = document.querySelector("button#end");

  var number = 0;
  var interval;
  start_btn.addEventListener("click", function () {
    // Yêu cầu người dùng nhập số vào hộp thoại
    var number = parseInt(prompt("Nhập một số"));
    p.textContent = number;

    // tạo ra một bộ đếm và lưu id của bộ đếm đó vào biến interval
    interval = setInterval(function () {
      if (number == 0) {
        // xóa bộ đếm có id là interval
        clearInterval(interval);
        return;
      }
      number = number - 1;
      p.textContent = number;
    }, 1000);
  });

  end_btn.addEventListener("click", function () {
    //xóa bộ đếm có id là interval
    clearInterval(interval);
  });
});
