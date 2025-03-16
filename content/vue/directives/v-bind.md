# v-bind

v-bind - это директива, которая позволяет привязать атрибуты HTML-элемента к свойствам компонента.

## Синтаксис

v-bind имеет два синтаксиса:

### 1. Краткий синтаксис

<template>
  <a v-bind:href="url">Link</a>
</template>

### 2. Полный синтаксис

<template>
  <a v-bind="{ href: url, target: '_blank' }">Link</a>
</template>

## Примеры

### 1. Привязка к свойству

<template>
  <a v-bind:href="url">Link</a>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://vuejs.org'
    }
  }
}
</script>

### 2. Привязка к функции

<template>
  <a v-bind:href="getUrl('https://vuejs.org')">Link</a>
</template>

<script>
export default {
  methods: {
    getUrl(url) {
      return url + '/ru'
    }
  }
}
</script>

### 3. Привязка к объекту

<template>
  <a v-bind="attrs">Link</a>
</template>

<script>
export default {
  data() {
    return {
      attrs: {
        href: 'https://vuejs.org',
        target: '_blank'
      }
    }
  }
}
</script>
