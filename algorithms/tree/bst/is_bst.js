{
tags: ['binary tree', 'bst',],
language: 'python',
question:
  'validate binary search tree',
answer:
`# class Node(object):
#     def __init__(self, x=None):
#         self.val = x
#         self.left = None
#         self.right = None

def is_bst(root, lo=float('-inf'), hi=float('inf')):
    """Check if the given tree is a bst.
    :return bool: True if a valid bst.
    """
    if root is None:
        return True
    if root.val < lo or root.val > hi:
        return False
    return (
        is_bst(root.left, lo, root.val - 1) and
        is_bst(root.right, root.val + 1, hi)
    )
`,
}
