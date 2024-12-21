# DOM (Document Object Model)
- là một chuẩn do W3C (World Wide Web Consortium) phát triển.
- cung cấp giao diện ngôn ngữ trung lập và nền tảng để các chương trình hoặc script có thể truy cập và thay đổi nội dung, cấu trúc, cũng như kiểu dáng (style) của một tài liệu web một cách linh hoạt.
    + DOM coi tài liệu (HTML, XML) như một cây cấu trúc (tree structure).
    + Mỗi phần tử (element), thuộc tính (attribute), hoặc văn bản (text) trong tài liệu là một node trong cây DOM.

# Các thành phần chính của W3C DOM
- DOM được chia thành ba phần chính:
    + Core DOM: Mô hình tiêu chuẩn cho tất cả các loại tài liệu.
    + XML DOM: Mô hình tiêu chuẩn dành riêng cho tài liệu XML.
    + HTML DOM: Mô hình tiêu chuẩn dành riêng cho tài liệu HTML.

# JS HTML DOM
- Là một mô hình đối tượng (object model) và giao diện lập trình chuẩn dành cho các tài liệu HTML.
- Với HTML DOM, JS có thể truy cập và thay đổi tất cả phẩn tử của HTML documents
- Khi một trang web được tải, trình duyệt sẽ tạo Document Object Model - được xây dựng dưới dạng cây Đối tượng, của trang đó. (img1)
- Với DOM, JS có thể tạo Dynamic HTML Element.
    + Có thể thêm những elements, attributes mới.
    + Có thể xóa những elements, attributes đang tồn tại.
    + Có thể thay đổi: tất cả HTML elements, attributes hoặc CSS styles trong trang
    + Phản ứng với tất cả HTML events hiện có trong trang.
    + Tạo HTML events trong trang.

# HTML DOM Define
- Mỗi phần tử HTML được coi như một đối tượng với các thuộc tính (properties) và phương thức (methods) riêng.
    + Ví dụ: Thẻ <p> có thuộc tính innerHTML để truy cập nội dung bên trong.
- HTML DOM định nghĩa cách truy cập hoặc thay đổi thuộc tính của phần tử HTML.
    + Ví dụ: document.getElementById("myDiv").style.color = "red"; thay đổi màu của một phần tử HTML.
- HTML DOM cung cấp các phương thức để truy cập, thay đổi, thêm hoặc xóa các phần tử HTML.
    + Ví dụ: appendChild() thêm một node con mới vào một node cha.
- HTML DOM định nghĩa cách quản lý các sự kiện như onclick, onchange, v.v.
    + Ví dụ: element.addEventListener("click", function() { alert("Clicked!"); });