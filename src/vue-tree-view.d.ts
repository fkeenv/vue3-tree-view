declare module 'vue3-tree-view' {
  import { DefineComponent } from 'vue';
  import { TreeNode } from './types/tree-node';
  
  export const TreeView: DefineComponent<{
    nodes: {
      type: ArrayConstructor;
      required: true;
      default: () => TreeNode[];
    }
  }>;
  
  export type { TreeNode };
}