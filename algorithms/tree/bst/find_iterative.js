{
tags: ['binary tree', 'bst',],
language: 'python',
question:
  'iteratively search a binary',
answer:
`# class Node(object):
#     def __init__(self, x=None):
#         self.val = x
#         self.left = None
#         self.right = None


def find(val, node):
    """Iteratively search the tree for the value.

    :param int val: Value to find.
    :return tree.Node: Matched node if it is found,
      None otherwise.
    """
    while node:
        if node.val == val:
            return node
        elif val < node.val:
            node = node.left
        else:
            node = node.right
    return node
`,
}
