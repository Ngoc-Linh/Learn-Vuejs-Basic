# Vòng đời trong Vue

Vòng đời (Lifecycle) trong Vue.js là chuỗi các giai đoạn mà một component trải qua từ khi được khởi tạo đến khi bị hủy. Vue cung cấp các hook (hàm) để bạn có thể can thiệp vào từng giai đoạn này.

## DOM ảo (virtual DOM)

1. Virtual DOM là gì?

- là 1 kỹ thuật được vue, react và 1 số thư viện javascript sử dụng để tối ưu hoá hiệu suất khi cập nhật giao diện người dùng.

- thay vì thay đổi trực tiếp `DOM thật` mỗi khi có sự thay đổi dữ liệu thì vue cập nhật 1 bản sao của DOM(virtual dom) trước.
- sau đó, vue `so sánh virtual DOM với bản trước đó (diffing)` để xác định những nào thay đổi
- cuối cùng, vue `chỉ cập nhật những phần cần thiết trên DOM thật,` giúp giảm thiếu số lần thao tác DOM và cải thiện hiệu suất

2. Cách thức hoạt động DOM ảo
 gồm 3 bước sau

 - b1: `render lại virtual DOM`: khi dữ liệu hay component thay đổi, vue tạo ra 1 cây đối tượng javascript mới biểu diễn cấu trúc DOM thật (virtual DOM mới) .
 - b2: `so sánh(diffing)`: vue so sánh bản virtual mới và bản cũ để tìm sự khác biệt
 - b3: Cập nhật DOM thật(patching): vue chỉ cập nhật lại phần tử nào thay đổi cần thiết. thay vì render lại toàn bộ trang

 3. lợi ích DOM ảo

 - Hiệu suất cao: giảm số lần thao tác trực tiếp trên DOM thật
 - quản lý trạng thái dễ dàng: DOM ảo giúp chúng ta tập trung vào logic, k cần lo lắng về cách thức cập nhật DOM. điều này làm cho code chúng ta dễ quản lý, dễ bảo trì.
 - tăng tốc render: vue có thể batch(gom nhóm) các thay đổi trước khi cập nhật UI

**DOM ảo giúp vue render hiệu quả, giảm tải cho trình duyệt và tối ưu hiệu suất **

## Hình ảnh vòng đời

![Vue Lifecycle](./lifecycle.png)

## Các giai đoạn chính

1. **Khởi tạo (Initialization)**:
   - Component được khởi tạo, các thuộc tính reactive và event được thiết lập.
   - Hook: `beforeCreate`, `created`.

2. **Gắn vào DOM (Mounting)**:
   - Component được gắn vào DOM.
   - Hook: `beforeMount`, `mounted`.

3. **Cập nhật (Updating)**:
   - Component được cập nhật khi dữ liệu reactive thay đổi.
   - Hook: `beforeUpdate`, `updated`.

4. **Hủy bỏ (Unmounting)**:
   - Component bị gỡ khỏi DOM và các sự kiện được dọn dẹp.
   - Hook: `beforeUnmount`, `unmounted`.

## Chi tiết các hook

### 1. `beforeCreate` & `created`
 với vue3 composition không cần. vì có thể thực hiện ngay trong setup 
# Lifecycle Hooks trong Vue 3

| **Hook**               | **Thời điểm chạy**                                 | **Use case phổ biến**                                  |
|------------------------|---------------------------------------------------|-------------------------------------------------------|
| `onBeforeMount()`      | Trước khi component được gắn vào DOM             | Kiểm tra dữ liệu, không thể truy cập DOM              |
| `onMounted()`         | Sau khi component đã được gắn vào DOM             | Gọi API, tương tác với DOM, thiết lập sự kiện        |
| `onBeforeUpdate()`    | Trước khi component re-render                      | Debug hoặc thực hiện công việc trước khi DOM thay đổi |
| `onUpdated()`         | Sau khi component re-render                        | Kiểm tra thay đổi trong DOM                          |
| `onBeforeUnmount()`   | Trước khi component bị hủy                         | Dọn dẹp event listeners, clear interval/timer       |
| `onUnmounted()`       | Sau khi component bị hủy                           | Xác nhận dọn dẹp hoàn tất                            |
| `onErrorCaptured()`   | Khi một lỗi xảy ra trong component con             | Bắt và xử lý lỗi                                     |
| `onRenderTracked()`   | Khi template hoặc reactive state được theo dõi lại | Debug reactivity                                     |
| `onRenderTriggered()` | Khi component bị re-render                         | Debug tối ưu hóa hiệu suất                           |


## Khi nào sử dụng các hook?

- **`created`**: Khởi tạo dữ liệu hoặc gọi API.
- **`mounted`**: Thao tác với DOM hoặc khởi tạo thư viện bên thứ ba.
- **`beforeUpdate` / `updated`**: Theo dõi hoặc xử lý sau khi dữ liệu thay đổi.
- **`beforeUnmount` / `unmounted`**: Dọn dẹp tài nguyên hoặc sự kiện.

💡 **Hiểu rõ vòng đời giúp bạn tối ưu hóa hiệu suất và quản lý component hiệu quả hơn.** 