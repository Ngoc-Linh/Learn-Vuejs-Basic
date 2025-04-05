# Directive 

các directive giúp thao tác với DOM dễ dàng hơn.

## v-text

cập nhật nội dung text của các element ( output: string )

```vue
<script setup>
const msg = "directive text"
</script>
<template>
<p v-text="msg"></p> 
<!-- giống như <p>{{msg}}<p> -->
<!-- output:  <p>directive text</p> -->
</template>
```

## v-show 

ẩn / hiện các phần tử bằng css (display: none).
dùng khi ẩn hiện nhanh chóng mà k cần xoá khỏi DOM như toggle menu, modal...

```vue
<script setup>
import {ref} from 'vue'
const vShow = ref(false);
</script>
<template>
<p v-show="vShow">show element </p>
<!-- output:  <p style="display: none;">show element</p> và hiển thị khi vShow set true -->
</template>
```

## v-bind

ràng buộc giá trị của thuộc tính HTML với dữ liệu.

```vue
<script setup>
const url = "https://vuejs.org";
</script>
<template>
<a v-bind:href="url">Vue.js</a>
<!-- giống như <a :href="url">Vue.js</a> -->
<!-- output: <a href="https://vuejs.org">Vue.js</a> -->
</template>
```

## v-model

ràng buộc dữ liệu hai chiều giữa input và dữ liệu.

```vue
<script setup>
import {ref} from 'vue'
const inputText = ref("");
</script>
<template>
<input v-model="inputText" placeholder="Nhập text">
<p>{{ inputText }}</p>
<!-- output: hiển thị giá trị inputText -->
</template>
```

## v-for

lặp qua một danh sách hoặc một đối tượng.

```vue
<script setup>
const items = ["Vue", "React", "Angular"];
</script>
<template>
<ul>
  <li v-for="(item, index) in items" :key="index">{{ item }}</li>
</ul>
<!-- output: <ul><li>Vue</li><li>React</li><li>Angular</li></ul> -->
</template>
```
có thể áp dụng key, index, value trong array hoặc object

```vue
<div v-for="(item, index) in items"></div>
<div v-for="(value, key) in object"></div>
<div v-for="(value, name, index) in object"></div>
```
## v-if, v-else, v-else-if

điều kiện hiển thị các phần tử. thêm hoặc xoá phần tử khỏi DOM. 
dùng khi chỉ cần hiển thị 1 số trường hợp cụ thể để thao tác tránh DOM nặng.

```vue
<script setup>
import {ref} from 'vue'
const condition = ref(true);
</script>
<template>
<p v-if="condition">Hiển thị khi condition là true</p>
<p v-else-if="!condition">Hiển thị khi condition là false</p>
<p v-else>Hiển thị khi không có điều kiện nào đúng</p>
</template>
```

## v-on ( viết tắt @)

lắng nghe các sự kiện DOM. nó giúp chúng ta xử lý các hành động người dùng như click, input, submit, keypress...


```vue
<script setup>
const handleClick = () => alert("Button clicked!");
</script>
<template>
<button v-on:click="handleClick">Click me</button>
<!-- giống như <button @click="handleClick">Click me</button> -->
</template>
```

- Modifiers trong v-on

1. `.stop` ngăn không cho sự kiện lan truyền ra các phần tử cha

```vue
<div @click="parentClick">
  <button @click.stop="childClick">Nhấn vào đây</button>
</div>
<!-- Nếu không có .stop, khi nhấn vào <button>, cả sự kiện của <div> cũng sẽ kích hoạt. -->
```

2. `.prevent` ngăn k cho form tải lại trang khi submit

```vue
<form @submit.prevent="handleSubmit">
  <button type="submit">Gửi</button>
</form>
```
3. `.capture` add sự kiện kích hoạt trên phần tử cha trước phần tử con

```vue
<div @click.capture="onParentClick">
  <button @click="onChildClick">Nhấn vào đây</button>
</div>
```

4. `.self` Chỉ kích hoạt khi sự kiện xảy ra trên chính phần tử đó

```vue
<div @click.self="onClick">
  <p>Nhấn vào đây sẽ không kích hoạt</p>
</div>
 <!-- Chỉ khi nhấn trực tiếp vào <div>, sự kiện mới kích hoạt. -->
```
5. `.once` chỉ thực thi 1 lần

```vue
<button @click.once="sayHello">Nhấn một lần</button>
<!-- Khi nhấn vào nút, sayHello chỉ chạy một lần. -->
```
6. `.keyup` lắng nghe sự kiện khi nhấn phím
với các phím tắt phổ biến như `.enter`, `.esc`, `.tab`,`.delete`,`space`, `.up`,`.down`,`.left`,`.right`

```vue
<input @keyup.enter="submitForm">
<input @keyup.esc="closeModal">

```

7. Gán nhiều sự kiện bằng Object

có thể truyền một Object chứa nhiều sự kiện(Cách này không hỗ trợ modifiers như .prevent hoặc .stop)

```vue
<button v-on="{ mousedown: onMouseDown, mouseup: onMouseUp }">Nhấn</button>
```
## v-slot

định nghĩa slot trong component.

```vue
<template>
<MyComponent>
  <template v-slot:header>
    <h1>Header Slot</h1>
  </template>
</MyComponent>
</template>
```

## v-pre

bỏ qua việc compile template( biên dịch phần tử con).

```vue
<template>
<p v-pre>{{ raw mustache }}</p>
<!-- output: {{ raw mustache }} -->
</template>
```

## v-once

render phần tử chỉ 1 lần, không cập nhật lại khi dữ liệu thay đổi.

```vue
<script setup>
const msg = "Render once";
</script>
<template>
<p v-once>{{ msg }}</p>
<!-- output: Render once -->
</template>
```

## v-memo

tối ưu hoá hiệu suất bằng cách ghi nhớ trạng thái của component.

```vue
<script setup>
import {ref} from 'vue'
const count = ref(0);
</script>
<template>
<p v-memo="[count]">Count: {{ count }}</p>
<!-- output: Count: 0 (chỉ cập nhật khi count thay đổi) -->
</template>
```

## v-cloak

ẩn nội dung cho đến khi Vue hoàn tất quá trình biên dịch.

```vue
<template>
<p v-cloak>{{ message }}</p>
<!-- output: nội dung bị ẩn cho đến khi Vue hoàn tất quá trình biên dịch -->
</template>
```