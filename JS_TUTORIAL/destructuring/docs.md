# Destructuring Assignment Syntax
- Là cách giải nén/gán giá trị từ đối tượng hoặc mảng vào các biến một cách nhanh gọn và rõ ràng.

# Object Destructuring
- Tên biến phải trùng với tên thuộc tính của đối tượng.
- Cú pháp cơ bản:
    const person = { firstName: "John", lastName: "Doe" };
    let { firstName, lastName } = person;
    => Tạo biến firstName và lastName từ các thuộc tính của person.
- Thứ tự của các thuộc tính không quan trọng
- Có thể thêm giá trị mặc định đối với các thuộc tính có khả năng bị thiếu
- Destructuring không phá hủy dữ liệu gốc.
- Khi sử dụng destructuring, dữ liệu của đối tượng hoặc mảng gốc không bị thay đổi.
- Có thể đổi tên biến

# Destructuring String
- Destructuring có thể được sử dụng để tách từng ký tự trong chuỗi và gán chúng vào các biến.
- Tên biến ở đây có thể là bất kỳ.
- Destructuring có thể áp dụng với bất kỳ iterable nào, bao gồm:
    - Chuỗi (String)
    - Mảng (Array)
    - Set, Map
    - Và các iterable khác.

# Array Destructuring
- Destructuring cho phép tách các phần tử trong mảng và gán chúng vào các biến.
- Thứ tự là quan trọng. Các biến được gán theo thứ tự phần tử trong mảng.
- Có thể tách bao nhiêu phần tử tùy ý, miễn là chúng nằm trong mảng.
- Có thể bỏ qua các phần tử trong mảng bằng cách sử dụng dấu phẩy.
- Có thể trích xuất giá trị từ các vị trí cụ thể bằng cách sử dụng key-value pair 
{[index]:variable} trong cú pháp destructuring.

# Rest Property (Thuộc tính "còn lại")
- Được sử dụng để gán tất cả các giá trị "còn lại" của một mảng hoặc đối tượng vào một mảng hoặc đối tượng mới.
- ...rest thu thập tất cả các phần tử chưa được gán (sau a và b) và đưa vào một mảng mới.
- Rest Property luôn phải ở cuối trong destructuring.
- Rest Property cũng có thể sử dụng với object

# Destructuring Maps
- Có thể sử dụng destructuring để trích xuất key và value từ từng cặp khi duyệt qua Map.
- Câu lệnh for...of trên Map trả về từng cặp [key, value]
- Dùng destructuring [key, value] để gán khóa vào biến key và giá trị vào biến value.
- Tương tự, destructuring cũng có thể áp dụng cho Set hoặc bất kỳ iterable nào.

# Swapping Variables
- có thể hoán đổi giá trị giữa hai biến mà không cần dùng đến biến tạm (temporary variable), chỉ với cú pháp destructuring.
- [lastName, firstName] là một mảng tạm chứa giá trị của hai biến theo thứ tự hoán đổi.
- Destructuring gán lại giá trị từ mảng tạm này cho firstName và lastName.