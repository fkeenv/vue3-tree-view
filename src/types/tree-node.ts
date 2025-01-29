export interface TreeNode {
  id: string | number;
  label: string;
  children?: TreeNode[];
  expanded?: boolean;
  checked?: boolean;
}