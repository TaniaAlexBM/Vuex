<template>
    <div class="buttons">
        <button @click="$store.dispatch('bajarCapi')">-</button>
        <button @click="$store.dispatch('subirCapi')">+</button>
    </div>
</template>

<script>
// @ is an alias to /src

  export default {
    name: 'HomeView',
  }

</script>