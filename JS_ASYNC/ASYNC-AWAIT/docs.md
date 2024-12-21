# Intro
- async và await là cú pháp mới trong JavaScript (ES2017) giúp việc làm việc với Promise trở nên dễ đọc và dễ viết hơn, thay vì sử dụng các chuỗi .then() và .catch().

# Async - Từ khóa để định nghĩa hàm bất đồng bộ
- Từ khóa async trước một hàm sẽ khiến hàm trả về một promise
- Nếu trả về một giá trị thông thường (không phải Promise), JavaScript sẽ tự động "gói" giá trị đó trong một Promise fulfilled.

# Await - Từ khóa để chờ một Promise hoàn thành
- Chỉ hoạt động bên trong hàm được định nghĩa với async
- Nó tạm dừng việc thực thi hàm cho đến khi Promise hoàn thành (resolve hoặc reject)
- Say khi promise hoàn thành:
    + Promise resolve => await trả về giá trị của nó
    + Promise reject => chương trình ném ra lỗi và bạn cần xử lý bằng try...catch.