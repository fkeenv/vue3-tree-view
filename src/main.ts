import './assets/style.css'
import { defineCustomElement } from 'vue';
import TreeView from './components/TreeView.vue';

const VueTreeView = defineCustomElement(TreeView);
customElements.define('vue-tree-view', VueTreeView);

export { type TreeNode } from './types/tree-node';
export default TreeView;
