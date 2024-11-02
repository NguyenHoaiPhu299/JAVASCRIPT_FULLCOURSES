# Web API rất hữu ích và là giấc mơ của các developer
- Mở rộng chức năng của trình duyệt:
    + Web API cung cấp các phương thức giúp truy cập vào những tính năng phức tạp của trình duyệt mà nếu tự viết sẽ mất nhiều thời gian và công sức.
    + Ví dụ: các API như Geolocation cho phép lấy vị trí người dùng; Web Storage cho phép lưu trữ dữ liệu trên trình duyệt một cách dễ dàng

- Đơn giản hóa các chức năng phức tạp:
    + Web API cung cấp những hàm đã được thiết kế sẵn để thực hiện các nhiệm vụ phức tạp.
    + Ví dụ: tạo hiệu ứng hoạt ảnh, xử lý hình ảnh, hoặc gọi tới các dịch vụ mạng mà không cần phải viết toàn bộ mã từ đầu, giúp giảm đáng kể công sức của các lập trình viên khi xây dựng ứng dụng web.

- Cung cấp các cú pháp đơn giản cho mã phức tạp:
    + Thay vì phải viết những đoạn mã phức tạp, các lập trình viên chỉ cần gọi các hàm API với cú pháp ngắn gọn, dễ hiểu.
    + Ví dụ: sử dụng fetch() để gửi yêu cầu HTTP thay vì phải xử lý chi tiết từng bước của một kết nối mạng.

# API là gì ?
- Viết tắt của Application Programming Interface
- Là một tập hợp các giao thức và quy tắc cho phép các ứng dụng phần mềm giao tiếp với nhau
- Cung cấp các hàm hoặc công cụ mà lập trình viên có thể sử dụng để thực hiện các tác vụ nhất định mà không cần viết toàn bộ mã từ đầu.

# Web API là gì ?
- Là một API được thiết kế để sử dụng trên web hoạt động qua mạng internet
- Thường được sử dụng để cho phép ứng dụng web hoặc trình duyệt giao tiếp với máy chủ để lấy dữ liệu hoặc gửi yêu cầu
- Ví dụ: khi bạn sử dụng ứng dụng thời tiết và nó hiển thị thông tin mới nhất từ một dịch vụ thời tiết, ứng dụng này có thể đang gọi Web API của dịch vụ đó để lấy dữ liệu thời tiết.

# Browser API là gì ?
- Là loại Web API cho phép mở rộng chức năng của trình duyệt, tích hợp sẵn trong các trình duyệt web.
- Cho phép lập trình viên thực hiện các thao tác phức tạp và truy cập dữ liệu từ thiết bị người dùng
- Những API này giúp các ứng dụng web tương tác tốt hơn với các tính năng của trình duyệt và thiết bị, nâng cao trải nghiệm người dùng.
- Cung cấp các phương thức để thực hiện những việc như truy cập camera, microphone, lấy vị trí người dùng, v.v
- Giúp các ứng dụng web có thể tương tác nhiều hơn với phần cứng và các tính năng của thiết bị.
- Ví dụ: Geolocation API: cho phép ứng dụng web lấy vị trí địa lý của người dùng (tọa độ vĩ độ và kinh độ).

# Server API là gì ?
- Là loại Web API chạy trên máy chủ
- Cho phép mở rộng chức năng của máy chủ và cung cấp các dịch vụ: truy vấn cơ sở dữ liệu, xử lý yêu cầu người dùng, và giao tiếp với các dịch vụ khác qua internet.

Web API cho phép các ứng dụng web truy cập vào các tính năng nâng cao của trình duyệt hoặc dịch vụ của máy chủ, giúp chúng trở nên phong phú và mạnh mẽ hơn trong khả năng xử lý và cung cấp dữ liệu.

# Thirty Party APIs (API bên thứ 3)
- Là các giao diện lập trình ứng dụng không được tích hợp sẵn trong trình duyệt do đó không thể sử dụng trực tiếp như các Browser API
- Chúng là các API được cung cấp bởi các dịch vụ hoặc nền tảng bên ngoài, giúp nhà phát triển truy cập vào các tính năng hoặc dữ liệu của các dịch vụ đó từ ứng dụng của mình.
- Để sử dụng, bạn cần tải hoặc nhúng mã từ web, hoặc thực hiện các yêu cầu mạng đến máy chủ của bên thứ ba.
- Các dịch vụ thứ 3: Twitter, Facebook, Youtube API