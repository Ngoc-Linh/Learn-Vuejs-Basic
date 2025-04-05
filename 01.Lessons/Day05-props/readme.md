# Props

Props (viết tắt của "properties") trong Vue 3 là cách để truyền dữ liệu từ component cha (parent) sang component con (child). Chúng giúp các component giao tiếp với nhau một cách rõ ràng và có kiểm soát.

## Khai báo Props

Để sử dụng props, bạn cần khai báo chúng trong component con bằng cách sử dụng thuộc tính `props`. còn component cha thì thêm như attribute 

đặt tên prop theo chuẩn Camel Case (vd: camelCase)

### Ví dụ cơ bản

```vue
<!-- ParentComponent.vue -->
<template>
  <ChildComponent message="Hello from Parent!" />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';
</script>
```

```vue
<!-- ChildComponent.vue -->
<template>
  <p>{{ message }}</p>
</template>

<script setup>
import { defineProps } from 'vue';

// Khai báo props
defineProps({
  message: String
});
// or defineProps(['message'])
</script>
```

Trong ví dụ trên:
- Component cha truyền một chuỗi `"Hello from Parent!"` qua prop `message`.
- Component con nhận và hiển thị giá trị của prop `message`.

## Kiểu dữ liệu và giá trị mặc định

Bạn có thể chỉ định kiểu dữ liệu và giá trị mặc định cho props.
type ở đây gồm `String, Number, Boolean, Array, Object,Date,Function,Symbol`

```vue
<script setup>
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true // Bắt buộc phải truyền
  },
  count: {
    type: Number,
    default: 0 // Giá trị mặc định
  }
});
</script>
```

## Truyền Props động

Props có thể được truyền động bằng cách sử dụng các biểu thức.

```vue
<!-- ParentComponent.vue -->
<template>
  <ChildComponent :message="parentMessage" />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

const parentMessage = 'Dynamic message from Parent!';
</script>
```

## Truyền tất cả Props

Bạn có thể sử dụng cú pháp `v-bind="object"` để truyền tất cả các thuộc tính của một đối tượng dưới dạng props.

```vue
<!-- ParentComponent.vue -->
<template>
  <ChildComponent v-bind="propsData" />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

const propsData = {
  message: 'Hello!',
  count: 5
};
</script>
```

## Xác thực Props

Vue cung cấp cơ chế xác thực props để đảm bảo dữ liệu được truyền đúng định dạng.

```vue
<script setup>
import { defineProps } from 'vue';

defineProps({
  age: {
    type: Number,
    validator: (value) => value > 0 // Giá trị phải lớn hơn 0
  }
});
</script>
```

Nếu giá trị không hợp lệ, Vue sẽ hiển thị cảnh báo trong chế độ phát triển.

## Lưu ý

- Props là **read-only** trong component con. Nếu bạn cần thay đổi giá trị, hãy sử dụng một biến hoặc emit sự kiện để thông báo cho component cha.
- Sử dụng `emit` để giao tiếp ngược từ component con lên component cha.

💡 **Props giúp chia nhỏ ứng dụng thành các component nhỏ gọn, dễ quản lý và tái sử dụng.**

## state global

### sử dụng provide/ inject
provide và inject là cơ chế tích hợp sẵn trong Vue.js để chia sẻ dữ liệu giữa các component cha và con (hoặc các component sâu hơn trong cây component).

```vue 
<!-- App.vue -->
<template>
  <ParentComponent />
</template>

<script setup>
import { provide } from 'vue';
import ParentComponent from './ParentComponent.vue';

const globalState = {
  user: 'John Doe',
  isLoggedIn: true
};

// Cung cấp state global
provide('globalState', globalState);
</script>

<!-- ParentComponent.vue -->
<template>
  <ChildComponent />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';
</script>

<!-- ParentComponent.vue -->
<template>
  <ChildComponent />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';
</script>

<!-- ChildComponent.vue -->
<template>
  <div>
    <p>User: {{ globalState.user }}</p>
    <p>Logged In: {{ globalState.isLoggedIn }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue';

// Nhận state global
const globalState = inject('globalState');
</script>
```

💡 **có thể dùng Vuex hoặc Pinia: Dùng cho quản lý state toàn cục trong các ứng dụng lớn. ** 

## emit

`emit` là cách để component con giao tiếp với component cha bằng cách phát ra các sự kiện. Component cha có thể lắng nghe các sự kiện này và thực hiện hành động tương ứng.

### 1. Cách sử dụng cơ bản

#### Trong Component Con

Sử dụng `defineEmits` để khai báo các sự kiện mà component con có thể phát ra.

```vue
<!-- ChildComponent.vue -->
<template>
  <button @click="sendMessage">Send Message</button>
</template>

<script setup>
const emit = defineEmits(['messageSent']); // Khai báo sự kiện 'messageSent'

const sendMessage = () => {
  emit('messageSent', 'Hello from Child!'); // Phát sự kiện với dữ liệu
};
</script>
```

#### Trong Component Cha

Component cha lắng nghe sự kiện bằng cách sử dụng `@eventName` trong template.

```vue
<!-- ParentComponent.vue -->
<template>
  <ChildComponent @messageSent="handleMessage" />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

const handleMessage = (message) => {
  console.log('Message from child:', message);
};
</script>
```

---

### 2. Truyền nhiều dữ liệu qua `emit`

Bạn có thể truyền nhiều dữ liệu qua sự kiện bằng cách sử dụng một đối tượng hoặc nhiều tham số.

```vue
<!-- ChildComponent.vue -->
<template>
  <button @click="sendData">Send Data</button>
</template>

<script setup>
const emit = defineEmits(['dataSent']);

const sendData = () => {
  emit('dataSent', { id: 1, name: 'John Doe' }); // Truyền một đối tượng
};
</script>
```

```vue
<!-- ParentComponent.vue -->
<template>
  <ChildComponent @dataSent="handleData" />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

const handleData = (data) => {
  console.log('Received data:', data);
};
</script>
```

---

### 3. Xác thực sự kiện với `defineEmits`

Bạn có thể xác thực sự kiện bằng cách sử dụng một đối tượng thay vì một mảng trong `defineEmits`.

```vue
<script setup>
const emit = defineEmits({
  messageSent: (message) => {
    if (typeof message !== 'string') {
      console.warn('messageSent requires a string');
      return false;
    }
    return true;
  }
});
</script>
```

---

### 4. Sử dụng `emit` với các sự kiện mặc định

Bạn có thể phát các sự kiện mặc định như `click`, `input`, v.v., hoặc tạo các sự kiện tùy chỉnh.

```vue
<template>
  <button @click="handleClick">Click Me</button>
</template>

<script setup>
const emit = defineEmits(['click']); // Phát sự kiện 'click'

const handleClick = () => {
  emit('click'); // Phát sự kiện 'click'
};
</script>
```

---

### 5. Kết hợp `emit` với `v-model`

Trong Vue 3, bạn có thể sử dụng `emit` để tạo các component có thể sử dụng `v-model`.

#### Component Con

```vue
<!-- ChildComponent.vue -->
<template>
  <input :value="modelValue" @input="updateValue" />
</template>

<script setup>
const props = defineProps(['modelValue']); // Nhận giá trị từ v-model
const emit = defineEmits(['update:modelValue']); // Phát sự kiện 'update:modelValue'

const updateValue = (event) => {
  emit('update:modelValue', event.target.value); // Cập nhật giá trị
};
</script>
```

#### Component Cha

```vue
<!-- ParentComponent.vue -->
<template>
  <ChildComponent v-model="inputValue" />
  <p>Value: {{ inputValue }}</p>
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

const inputValue = ref('');
</script>
```

---

### Kết luận

- **`emit`** giúp component con giao tiếp với component cha một cách rõ ràng và hiệu quả.
- Sử dụng `defineEmits` để khai báo các sự kiện và phát chúng khi cần.
- Kết hợp `emit` với `v-model` để tạo các component có thể sử dụng hai chiều dữ liệu.