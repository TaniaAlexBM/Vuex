<template>
    <div class="cuadrado">
        {{ $store.state.counter }} <sup>2</sup> = {{ $store.getters.cuadrado }}
    </div>
</template>

<script>
// @ is an alias to /src

  export default {
    name: 'HomeView',
  }

</script>