<template>
  <div>
    <TreeNode
      v-for="node in nodes"
      :key="node.id"
      :node="node"
      @node-click="handleNodeClick"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import TreeNode from './TreeNode.vue';
import type { TreeNode as TreeNodeType } from '../types/tree-node';

const props = defineProps({
  nodes: {
    type: Array as PropType<TreeNodeType[]>,
    required: true,
    default: () => []
  }
});

const emit = defineEmits<{
  (e: 'node-click', node: TreeNodeType): void
}>();

const handleNodeClick = (node: TreeNodeType) => {
  emit('node-click', node);
};
</script>
