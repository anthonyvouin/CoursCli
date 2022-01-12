<template>
  <div class="Cell">
    <h1>Mon Titre Cell</h1>
    <h2>j'ai {{monage}} ans</h2>
  </div>
</template>

<script>

export default {
  name: 'Cell',
  props: {
    monage: {
      type: Number,
      default: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
