{
  tags: ['binary tree',],
  language: 'python',
  question: 'recursively search a binary tree',
  answer:
`# class Node(object):
#     def __init__(self, x=None):
#         self.val = x
#         self.left = None
#         self.right = None


def find(value, node):
    """Recursively search the tree for the value.

    :param int val: Value to find.
    :return tree.Node: Matched node if it is found, None otherwise.
    """
    if not node:
        return None
    if node.val == value:
        return node
    if value < node.val:
        return find(value, node.left)
    return find(value, node.right)
`,
}
