<template>
  <div>
    <TreeView
      :nodes="treeData"
      @node-click="handleNodeClick"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TreeView from './components/TreeView.vue';
import type { TreeNode } from './types/tree-node';

const treeData = ref<TreeNode[]>([
  {
    id: 1,
    label: 'Parent Node',
    children: [
      { id: 2, label: 'Child Node 1' },
      { id: 3, label: 'Child Node 2' }
    ]
  },
  {
    id: 4,
    label: 'Another Parent Node',
    children: [
      { id: 5, label: 'Child Node 3' },
      {
        id: 6,
        label: 'Child Node 4',
        children: [
          { id: 7, label: 'Child Node 5' },
          { id: 8, label: 'Child Node 6' },
          {
            id: 9,
            label: 'Child Node 7',
            children: [
              { id: 10, label: 'Child Node 8' },
              { id: 11, label: 'Child Node 9' }
            ]
          }
        ]
      }
    ]
  }
]);

const handleNodeClick = (node: TreeNode) => {
  console.log('Node clicked:', node);
};
</script>
