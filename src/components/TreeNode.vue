<template>
  <div>
    <div @click="toggle">
      <span class="toggle-icon" v-if="hasChildren">
        {{ isOpen ? '▼' : '▶' }}
      </span>
      {{ node.label }}
    </div>
    <div v-show="isOpen" v-if="hasChildren">
      <TreeNode
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        @node-click="$emit('node-click', $event)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, PropType } from 'vue';
import type { TreeNode } from '../types/tree-node';

const props = defineProps({
  node: {
    type: Object as PropType<TreeNode>,
    required: true
  }
});

type Emits = {
  (e: 'node-click', node: TreeNode): void
}
const emit = defineEmits<Emits>();

const isOpen = ref(props.node.expanded ?? false);
const hasChildren = computed(() => 
  !!props.node.children?.length
);

const toggle = () => {
  if (hasChildren.value) {
    isOpen.value = !isOpen.value;
  }
  emit('node-click', props.node);
};
</script>
