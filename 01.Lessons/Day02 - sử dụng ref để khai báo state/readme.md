# Sử dụng ref để khai báo state 

## ref()

trong composition API, để khai báo trạng thái (reactive state) ta sử dụng hàm `ref()`

### cách sử dụng
ref() trả về một đối tượng có thuộc tính .value.
Để truy cập hoặc cập nhật giá trị, trong script thì dùng `.value` còn template thì không cần.

```vue 
<script setup>
import { ref } from 'vue'

const count = ref(0)
// console.log(count.value) // 0
// console.log(count) // {count: 0}
function increment() {
  count.value++
}
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
</template>
```

### tại sao phải dùng ref

- khi sử dụng ref trong template và sau đó thay đổi giá trị của ref, vue tự động phát hiện sự thay đổi và cập nhật DOM tương ứng. khi 1 component hiển thị lần đầu tiên, vue `track` (theo dõi ) mỗi ref được sử dụng trong quá trình hiển thị. sau đó khi ref biến đổi, nó sẽ `trigger` (kích hoạt ) lại 1 lần nữa component đó.

- trường hợp sử dụng biến đơn giản (number, string, boolean), object or array cần theo dõi, Khi cần reactivity nhưng không muốn sử dụng `reactive()`

### ref với object và array

1. ref với object

```vue
<script setup>
import { ref } from 'vue';

const user = ref({
  name: 'Alice',
  age: 25
});

function updateUser() {
  user.value.name = 'Bob'; // Phải dùng user.value
}
</script>

<template>
  <p>Tên: {{ user.name }}</p>
  <button @click="updateUser">Đổi tên</button>
</template>

```

2. ref với array

```vue
<script setup>
import { ref } from 'vue';

const items = ref(['Apple', 'Banana']);

function addItem() {
  items.value.push('Cherry'); // Cập nhật phải dùng .value
}
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item">{{ item }}</li>
  </ul>
  <button @click="addItem">Thêm</button>
</template>

```
` Nếu làm việc với Object hoặc Array phức tạp, có thể dùng reactive() thay vì ref().`

## reactive() 

có 1 cách khác để khai báo reactive state , ta sử dụng `reactive()`. sử dụng trực tiếp như 1 object không cần `value`

```vue
<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })
</script>
<template>
<button @click="state.count++">
  {{ state.count }}
</button>
</template>
```

Như vậy chúng ta thấy
- `ref()` là cách đơn giản và linh hoạt để tạo state
- khi làm việc với number. string, boolean thì ta nên dùng `ref()`
- khi dùng object, array thì ta có thể dùng `reactive()`
- nhớ rằng `ref` yêu cầu `.value` để truy cập giá trị

## nextTick()

khi thay đổi state, vue cập nhật DOM `1 cách bất đồng bộ` để tối ưu hiệu suất.
nếu bạn 1 muốn thực hiện 1 thao tác ngay sau khi DOM cập nhật , `nextTick()` sẽ đảm bảo rằng DOM đã phản ánh đúng dữ liệu mới.

vì nextTick() là 1 promise nên ta sử dụng asyn await.

### Cách sử dụng

```vue
<script setup>
import { ref, nextTick } from 'vue';

const count = ref(0);

asyn function increment() {
  count.value++;
  console.log('DOM chưa được cập nhật:', document.querySelector('p').textContent); // 0
  await nextTick();
  console.log('DOM đã được cập nhật:', document.querySelector('p').textContent); // 1
}
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Tăng</button>
  </div>
</template>
```

### Khi nào sử dụng

- Vue cập nhật DOM bất đồng bộ, nên nếu cần thao tác với DOM ngay sau khi dữ liệu thay đổi, cần nextTick()
- Dùng nextTick() khi cần đảm bảo DOM đã cập nhật trước khi thực hiện hành động tiếp theo (backtotop, lấy kích thước, kiểm tra phần tử, khởi động animation...).
- Cách dùng: await nextTick(); hoặc nextTick(() => { /* code */ });.