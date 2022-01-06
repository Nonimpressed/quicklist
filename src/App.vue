<template>
    <div class="container">
        <list-summary></list-summary>
        <item-list></item-list>
        <list-utility></list-utility>
    </div>
</template>

<script>
import ItemList from './components/ItemList.vue';
import ListSummary from './components/ListSummary.vue';
import ListUtility from './components/ListUtility.vue';

export default {
  name: 'App',
  components: {
    ListSummary,
    ItemList,
    ListUtility,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  max-width: 420px;
  margin: 0 auto;
}
</style>
