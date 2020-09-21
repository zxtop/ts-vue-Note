<template>
  <div id="app">
    <MenuBar></MenuBar>
    <item-list></item-list>
    <memo-editor v-if="this.$store.state.isShow"></memo-editor>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import ItemList from './components/ItemList.vue';
import MemoEditor from './components/MemoEditor.vue';
import {Component,Vue} from 'vue-property-decorator';
@Component({
  components:{
    MenuBar,
    ItemList,
    MemoEditor
  }
})
export default class App extends Vue{
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
