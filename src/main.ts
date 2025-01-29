import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { defineCustomElement } from 'vue';
import TreeView from './components/TreeView.vue';

const VueTreeView = defineCustomElement(TreeView);
customElements.define('vue-tree-view', VueTreeView);

createApp(App).mount('#app')

export { type TreeNode } from './types/tree-node';
export default TreeView;
