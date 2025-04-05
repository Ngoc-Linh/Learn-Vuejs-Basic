# Computed

computed là thuộc tính tự động cập nhật khi state thay đổi.
Nó giúp tối ưu hiệu suất vì chỉ tính toán lại khi cần thiết.
Dùng computed thay vì methods khi cần giữ bộ nhớ cache.
nên `computed` giúp code sạch hơn và tối ưu hơn

## Ví dụ

```vue
<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: []
})

// một ref tính toán
const publishedBooksMessage = () => {
    return author.books.length > 0 ? 'yes' : 'no';
}
const addBook = () => {
    author.books.push('Advanced Guide')
}
</script>

<template>
  <p>Đã xuất bản sách: <span>{{ publishedBooksMessage() }}</span></p>
  <button @click="addBook">add book </button>
</template>
```
ví dụ trên chúng ta thấy mỗi lúc state books thay đổi thì sẽ bị render và tính lại. dẫn đến hiệu suất kém. để đạt hiệu quả cao hơn vue hỗ trợ ta dùng `computed`

```vue
<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: []
})

const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
const addBook = () => {
    author.books.push('Advanced Guide')
}
</script>

<template>
  <p>Đã xuất bản sách: <span>{{ publishedBooksMessage }}</span></p>
  <button @click="addBook">add book </button>
</template>
```
lúc nảy khi books thay đổi nó sẽ tính lại hàm `publishedBooksMessage` mà thôi. 


## Đặc điểm của computed

đặc điểm của computed chỉ đọc dữ liệu. nếu chúng ta muốn ghi, thay đổi dữ liệu phải dùng `getter` và `setter`

```vue
<script setup>
import { ref, computed } from 'vue';

const firstName = ref('John');
const lastName = ref('Doe');

// Computed với getter & setter
const fullName = computed({
  get: () => `${firstName.value} ${lastName.value}`,
  set: (newValue) => {
    const parts = newValue.split(' ');
    firstName.value = parts[0] || '';
    lastName.value = parts[1] || '';
  }
});
</script>

<template>
  <input v-model="fullName" />
  <p>Họ và tên: {{ fullName }}</p>
</template>

```
Dữ liệu computed có thể được cập nhật ngược lại vào state gốc khi có setter.

## khi nào dùng computed 

- Khi cần `biến đổi dữ liệu` trước khi hiển thị trên UI
- Khi cần `tránh lặp lại logic` trong template hoặc methods
- Khi có `nhiều phụ thuộc` cần tự động cập nhật.


## So sánh `computed` và `methods`

| **Đặc điểm**                     | **computed** | **methods** |
|----------------------------------|-------------|-------------|
| **Có bộ nhớ cache?**             | ✅ Có       | ❌ Không    |
| **Chỉ chạy lại khi phụ thuộc thay đổi?** | ✅ Có | ❌ Không |
| **Thích hợp để hiển thị dữ liệu?** | ✅ Có | ✅ Có |
| **Thích hợp cho hành động?** | ❌ Không | ✅ Có |

💡 **Dùng `computed` khi muốn lưu cache kết quả. Dùng `methods` nếu chỉ cần tính toán khi gọi.**  

---

## So sánh `computed` và `watch`

| **Tình huống**                  | **computed** | **watch** |
|---------------------------------|-------------|-----------|
| **Tính toán giá trị dựa trên state** | ✅ Có | ❌ Không cần |
| **Chạy code phụ thuộc vào state** | ❌ Không | ✅ Có |
| **Gọi API khi dữ liệu thay đổi** | ❌ Không | ✅ Có |

💡 **Dùng `computed` khi cần giá trị dựa trên state, dùng `watch` khi cần thực hiện hành động khi state thay đổi.**
