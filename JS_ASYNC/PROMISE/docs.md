# Producing code
- Phần mã thực thi tác vụ bất đồng bộ (như gọi API, đọc file, hoặc thực hiện tính toán chậm).
- Sử dụng Promise để "hứa hẹn" rằng nó sẽ trả về kết quả khi hoàn thành, hoặc trả về lỗi nếu có vấn đề xảy ra.
- Khi "Producing code" nhận kết quả, nó sẽ gọi một trong 2 callback.
    + Thành công: gọi myResolve(result value)
    + Thất bại: gọi myReject(error object)

# Consuming code
- Phần mã cần kết quả từ tác vụ bất đồng bộ để tiếp tục xử lý.
- Thông qua Promise, consuming code có thể sử dụng .then() để xử lý khi thành công, hoặc .catch() để xử lý lỗi.

# Promise Object
- Chứa cả producing code và gọi đến consuming code
- Đảm bảo rằng:
    + Producing code sẽ thông báo kết quả khi tác vụ hoàn thành (hoặc thất bại)
    + Consuming code sẽ nhận được kết quả hoặc lỗi để xử lý tiếp.
- Một Promise Object có thể là:
    + Pending - Chưa giải quyết
    + Fulfilled - Đã hoàn thành
    + Rejected - Đã loại bỏ
- Promise Object hỗ trợ hai thuộc tính: result và state
    + Promise object state là "pending (đang thực thi)", result là undefined
    + Promise object state là "fulfilled", result là một giá trị
    + Promise object state là "rejected", result là một error object
- Ta không thể truy cập thuộc tính Promise state và result
- Phải sử dụng phương thức Promise để xử lý các promises.

# Promise How To
- Promise.then() nhận 2 tham số, callback cho thành công và thất bại.
- 2 tham số này là optional nên ta có có thể sử dụng một callback duy nhất nếu muốn xử lý một trạng thái.
- Khi trạng thái của Promise chuyển thành fulfilled, hàm myDisplayer(value) sẽ được gọi.
- Nếu trạng thái là rejected, hàm myDisplayer(error) sẽ được gọi.