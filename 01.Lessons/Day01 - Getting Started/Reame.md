# Sesstion 1 - Getting Started 

## Vue là gì ?

Vue là 1 framework javascript được sử dụng để xây dựng giao diện người dùng (user interface).
Nó xây dựng trên nền HTML, CSS và Javascript.
Cung cấp 1 mô hình lập trình khai báo và dựa trên component giúp bạn phát triển giao diện người dùng 1 cách hiệu quả.

Vue được sử dụng cho 
- Cải thiện html tĩnh mà không cần các bước xây dựng
- nhúng như web component trên bất kỳ trang nào
- xây dựng ứng dụng web động single page application (SPA) như trang quản lý người dùng, sản phẩm , dashboard, booking
- Fullstack / Rendering ở Phía Server (SSR) với Nuxt 3 hỗ trợ tăng tốc độ tải trang và seo
- Jamstack / Tạo Trang Tĩnh (SSG)
- Hướng đến máy tính để bàn, di động, WebGL, và thậm chí cả terminal

## Single file component (SFC) là gì?

SFC là các tổ chức code, nơi mỗi component được viết trong 1 file (.vue).
Mỗi SFC chứa template (HTML), script(javascript/typescript), style (css) trong cùng 1 file. giúp chúng ta tái sử dụng, code được rõ ràng và tránh xung đột.
Khác với React thì dùng JSX

```vue
<!-- script - chứa logic & dữ liệu  -->
<!-- <script setup> được vue3 sử dụng để ngắn gọn hơn k cần return như vue2  -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<!-- phần giao diện (UI) - chứa 1 thẻ cha duy nhất , có thể dùng directive Vue (v-if, v-for, v-model, @click). -->
<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<!-- chứa css định dạng component này. và style scoped chỉ ảnh hưởng đến component này -->
<style scoped>
button {
  font-weight: bold;
}
</style>
```

## API styles

có 2 cách viết component trong vue: options API(cách viết truyền thống) và Composition API(cách mới, linh hoạt hơn)

### Options API 
định nghĩa logic của 1 component bằng cách sử dụng các đối tượng (object) như `data, methods, computed, watch, mounted`. 
được sử dụng trong dự án cũ vue2, hoặc dự án nhỏ với logic đơn giản.tuy nhiên khó tái sử dụng code vì không dễ dàng chia sẽ logic giữa các component

```vue
<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

### Compotions API
Sử dụng setup() hoặc `<script setup>` để viết code theo kiểu chức năng.
Logic được nhóm theo tính năng thay vì chia nhỏ theo từng option (data, methods, ...).
Giúp giảm bớt sự phức tạp của component lớn bằng cách chia nhỏ logic thành các phần nhỏ hơn để dễ quản lý hơn.

```vue
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
```

## Tạo ứng dụng đầu tiên

### Cài đặt môi trường

- cài đặt node.js version 18.3 hoặc cao hơn

### Cài đặt ứng dụng

sử dụng cài đặt kết hợp với vite

b1. chạy lệnh 
```bash
npm create vue@latest

``` 
b2. đặt tên và chọn 1 vài tính năn nếu cần thiết
```bash
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes
```

b3. chạy dự án

```bash
cd "tên-dự-án-của-bạn"
npm install
npm run dev

# or

cd "tên-dự-án-của-bạn"
yarn
yarn dev
```

- nếu bạn dùng sass style thì thêm lệnh

```bash
npm install -D sass
# or
yarn add -D sass
```

- add boostrap v5
```bash
yarn add bootstrap@5.3.3
```

## cú pháp

### Hiển thị dữ liệu

1. dùng dấu `{{ }}` - Hiển thị nội dung text trong html

```vue
<script setup>
const message =  "hello"
</script>
<template>
<p>Message: {{ message }}</p>
</template>
```
2. dùng `v-html` directive-  hiển thị cả thẻ html(Raw HTML)

```vue
<p>Using text interpolation: {{ rawHtml }}</p>
```
3. attribute bindings - v-bind
mustache không thể sử dụng trong attribute html được, nên ta sẽ sử dụng `v-bind` hoặc shorthand `:` directive.

```vue
<script setup>
const btnId = 'btn'
const btnClass ="btn_default"
</script>
<template>
<button v-bind:id="btnId" :class="btnClass">click here</button>
</template>
```
nếu giá trị là `null` or `underfined` thì attribute sẽ bị remove

4. attribute boolean 

```vue
<script setup>
const btnId = 'btn'
const btnClass ="btn_default"
const isButtonDisabled = true;
</script>
<template>
<button v-bind:id="btnId" :class="btnClass" :disabled="isButtonDisabled">click here</button>
</template>
```
5. Multiple Attributes 

gộp các attribute vào 1 object bằng cách sử dụng `v-bind`

```vue
<script setup>
const objAttr = {
  id: "btn_id",
  class: "btn_default",
  disabled: true,
}
</script>
<template>
<button v-bind="objAttr">click here</button>
</template>
```

6. sử dụng các biểu thức javascript

ngoài sử dụng binding ta có thể sử dụng như các phép toán, toàn tử 3 ngôi (k sử dụng if else mà sử dụng ? : '' : ''), các hàm có sẵn trong javascript.
chúng ta hoàn toàn sử dụng hàm để gọi 

```vue
<script setup>
const num = 0;
const arrString = 'tmp,text,test';
// tạo hàm
const convertToArr = (data) => {
  return data.split(',').reverse().join('-');
}
</script>
<template>
<p>number {{ num + 1}}</p>
<button :disabled="isButtonDisabled">{{ isButtonDisabled ? 'click here2' : 'button' }}</button>
<p v-bind:id=" arrString.split(',').join('-') ">split text </p>
 <p :id=" convertToArr(arrString)">split text </p>
</template>
```
`chú ý` k được sử dụng các phép toán,hay điều kiện if else 

```vue
{{ var a = 1 }}
{{ if (ok) { return message } }}
```

7. directives 

- là các thuộc tính có tiền tố `v-` dùng để điều khiển logic
như ta đã sử dụng `v-html`,`v-bind` ( loại trừ `v-for`, `v-on` & `v-slot`)
- dùng để cập nhật lại dom khi giá trị biểu thức thay đổi. như `v-if`

các directives hỗ trợ có thể tham khảo thêm tại [directives.md](../directives.md)

Từ khoá
> Mustache : cú pháp sử dụng dấu nhọn đôi

---
