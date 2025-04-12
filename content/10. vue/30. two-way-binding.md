---
title: Двустороннее связывание

---

### Работа с HTML тегами
Часто надо передавать данные из комопнента и получать их обратно при работе с HTML тегами **`<input>`**, **`<select>`** и **`<textarea>`**.

Для этого можно использовать **v-bind** и **v-on**.
```vue
<template>
<input
  :value="text"
  @input="event => text = event.target.value"
>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('Hello')
</script>
```

Для упрощения синтаксиса рекомендуется использовать **v-model**.
```vue
<template>
<input v-model="text">
</template>

<script setup>
import { ref } from 'vue'
const text = ref('Hello')
</script>
```

В случае работы с тегами **`<input>`**, **`<select>`** и **`<textarea>`** **v-model** автоматически выберет необходимые поля для **v-bind** и события **v-on**:
- Элементы **`<input>`** с текстовым типом и **`<textarea>`** используют свойство **value** и событие **input**;
- Элементы **`<input type="checkbox">`** и **`<input type="radio">`** используют свойство **checked** и событие **change**;
- Элементы **`<select>`** используют свойство **value** и событие **change**.

### Работа с компонентами
Аналогично **v-model** можно использовать в компонентах для реализации двустороннего связывания между родительским и дочерним компонентом.

До версии Vue 3.4 в дочернем компоненте необходимо использовать **defineProps** и **defineEmits**.

```vue
<!-- Child.vue -->
<template>
  <input
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
</script>
```

Начиная с версии Vue 3.4 рекомендуется использовать **defineModel** в дочернем компоненте.
```vue
<!-- Child.vue -->
<template>
  <input v-model="model" />
</template>

<script setup>
const model = defineModel()
</script>
```

В обоих случая в родительском компоненте рекомендуется использовать **v-model**:
```vue
<!-- Parent.vue -->
<template>
  <Child v-model="text" />
</template>

<script setup>
import Child from './Child.vue'
const text = ref('Hello') 
</script>
```