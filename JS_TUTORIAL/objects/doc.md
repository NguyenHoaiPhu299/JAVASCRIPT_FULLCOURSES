# Real Life Objects
- objects là những thứ như: nhà, xe, người, động vật hoặc bất cứ thứ gì.
- objects xe gồm các thuộc tính như name, model, weight, color,...
- objects xe gồm các hành động như start, drive, brake, stop,...

# JS Variables
- là containers cho data values, và nó chỉ chứa 1 value.
- Cũng là một variable nhưng nó có thể chứa nhiều giá trị với nhiều properties khác nhau.
- Đa số khái báo đối tượng bằng từ khóa const

# JS Primitives
- Là giá trị không có thuộc tính hoặc phương thức. (Ví dụ: 3.14)
- Primitives Data Type là kiểu dữ liệu có giá trị primitive.
- JS có 7 loại kiểu dữ liệu Primitives:
    + string
    + number
    + boolean
    + null
    + undefined
    + symbol
    + bigint
- Các giá trị Primitives không thể bị thay đổi (Immutable). Ví dụ: x = 12 thì ta có thể thay đổi giá trị 'x' nhưng không thể thay đổi giá trị của '12'

# JS Object
- Trong JS, Objects là King, hiểu được Object là hiểu được JS.
- Object là nơi chứa Properties (đặt tên là Values) và Methods (là hàm được lưu trữ dưới dạng thuộc tính)
- Trong JS, hầu hết mọi thứ đều là object: Objects, Maths, Functions, Dates, Arrays, Maps, Sets,...
- Properties can be primitive values, functions, or even other objects.
- Object có thể bị thay đổi (Mutable)
    + Chúng được xử lý theo tham chiếu chứ không phải theo giá trị.
    + Ví dụ:
        * Ta có một Person Object tên person
        * Câu lệnh "const x = person;" sẽ không tạo ra một bản sao của person
        *  x và person chia sẻ cùng một địa chỉ bộ nhớ. Mọi thay đổi với x sẽ thay đổi với person.

# Định nghĩa một JS Object
- Sử dụng Object Literal: cũng được gọi là object initializers, Là một danh sách cặp name:value hay key:value bên trong dấu {}
- Sử dụng từ khóa new: Không cần phải sử dụng new Object(), để dễ đọc và tăng tốc độ thực thi thì ta nên sử dụng object literal.
- từ khóa this chỉ đến đúng bản thân Object đó

# Object Property
- Object Property có thể có tên giống nhau nhưng giá trị có thể khác nhau.
- Thuộc tính có thể được thay đổi, được thêm, xóa và một vài có tính readonly.
- Ví dụ: Car Object có property color giống nhau, nhưng giá trị (màu xanh, màu hồng) sẽ khác nhau giữa xe này với xe khác
- Tương tự: Associative Arrays của PHP, Dictionaries của Python, Hash Table của C, Hash map của Java, Hashes của Ruby và Perl.

# Object Methods
- Có thể có phương thức giống nhau nhưng cách thức, thời điểm thực hiện khác nhau.
- Là các định nghĩa hàm được lưu trữ dưới dạng giá trị thuộc tính.
- Là những hành động có thể thực hiện trên object.