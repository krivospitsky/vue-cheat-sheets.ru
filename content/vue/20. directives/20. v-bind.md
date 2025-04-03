---
title: v-bind
description: v-bind - это директива, которая динамически привязывает один или несколько атрибутов или входных параметров компонента к выражению
badges:
  - value: Документация v-bind 
    icon: lucide:vue
    to: https://v3.ru.vuejs.org/ru/api/directives.html#v-bind
    target: _blank
  - value: Работа с классами и стилями
    icon: lucide:vue
    to: https://v3.ru.vuejs.org/ru/guide/class-and-style.html
    target: _blank
---

### Полный синтаксис
```vue
<template>
  <a v-bind:href="url">Link</a>
</template>

<script setup>
import { ref } from 'vue'
const url = ref('https://vuejs.org')
</script>
```

### Ключевое слово **v-bind** можно опускать, оставив лишь двоеточие
```vue
<template>
  <a :href="url">Link</a>
</template>

<script setup>
import { ref } from 'vue'
const url = ref('https://vuejs.org')
</script>
```

### Если имя атрибута совпадает с названием переменной, то можно опускать имя переменной
```vue
<template>
  <a :href>Link</a>
</template>

<script setup>
import { ref } from 'vue'
const url = ref('https://vuejs.org')
</script>
```

### Для атрибутов **class** или **style** можно передать объект
Если значение объекта является `true`, то ключ будет добавлен в атрибут. Значения будут добавляться к существующим значениям, если они переданы
```vue
<template>
<div class="static" :class="{ active: isActive, 'text-danger': hasError }"></div>
</template>
```

### Для атрибутов **class** можно передать массив
```vue
<template>
<div :class="[isActive ? activeClass : '', errorClass]"></div>
</template>

<script setup>
const isActive = ref(true)
const activeClass = 'active'
const errorClass = 'text-danger'
</script>
```

### Можно не указывать имя свойства, а передать все атрибуты в объекте
```vue
<template>
  <a v-bind="{ href: url, target: '_blank' }">Link</a>
</template>

<script setup>
import { ref } from 'vue'
const url = ref('https://vuejs.org')
</script>
```

### В качестве значения может выступать любое валидное JS выражение
```vue
<template>
  <a v-bind:href="getUrl('https://vuejs.org')">Link</a>
</template>

<script setup>
function getUrl(url) {
  return url + '/ru'
}
</script>
```

### **v-bind** так же может использоваться в стилях
```vue
<template>
  <a href="https://vuejs.org" class="link">Link</a>
</template>

<script setup>
const color = ref('red')
</script>

<style scoped>
.link {
  color: v-bind(color);
}
</style>
```


