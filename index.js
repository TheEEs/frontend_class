//Lắng nghe sự kiện DOMContentLoaded - sự kiện được xảy ra khi trang web được tải 100%
document.addEventListener("DOMContentLoaded", function () {
  var p = document.getElementById("numbers");
  var input = document.getElementById("number_input");
  var add_button = document.getElementById("add_number_btn");
  var reset_button = document.getElementById("reset_btn");

  // biến list chứa danh sách các số
  var list = [];

  //Lắng nghe sự kiện phím nhấn xuống
  input.addEventListener("keydown", function (e) {
    //Nếu phím nhấn xuống là phím Enter
    if (e.key == "Enter") {
      // Phân tích giá trị của input thành một số nguyên và lưu số nguyên đó vào biến number;
      var number = parseInt(e.target.value);
      // thêm biến number vào cuối danh sách
      list.push(number);

      // tạo ra một chuỗi ký tự, gồm các số ngăn cách bởi dấu phẩy. Bao quanh bởi cặp ngoặc vuông
      // Và gán chuỗi đó cho thuộc tính textContent của p
      p.textContent = `[${list.join(",")}]`;

      // Xóa nội dung của input
      e.target.value = null;
    }
  });

  add_button.addEventListener("click", function () {
    // sắp xếp lại danh sách theo thứ tự tăng dần
    list.sort();

    // Cập nhật nội dung của p
    p.textContent = `[${list.join(",")}]`;
  });

  reset_button.addEventListener("click", function () {
    // gán biến list bằng một danh sách mới trống trơn
    list = [];

    // thay đổi nội dung của p
    p.textContent = "[]";
  });
});
