// Algorithm data displayed by the application.
algorithms = [
{
tags: ['binary tree',],
language: 'python',
question: 'serialize a binary tree',
answer:
`# class Node(object):
#     def __init__(self, x=None):
#         self.val = x
#         self.left = None
#         self.right = None


def serialize(root):
    """Convert a binary tree into an array.

    :param Node root: Root node.
    :return list: Serialized tree.
    """
    if not root:
        return []
    result = []
    nodes, nxt = deque([root]), deque()
    while len(nodes):
        node = nodes.popleft()
        if not node:
            result.append(None)
            nxt.extend([None, None])
        else:
            result.append(node.val)
            nxt.extend([node.left, node.right])
        if not len(nodes):
            if any(nxt):
                nodes = nxt
                nxt = deque()
    # strip trailing None values
    for i, val in enumerate(reversed(result)):
        if val:
            result = result[:len(result) - i]
            break
    return result
`,
}
,{
tags: ['binary tree',],
language: 'python',
question: 'deserialize a binary tree',
answer:
`# class Node(object):
#     def __init__(self, x=None):
#         self.val = x
#         self.left = None
#         self.right = None


def deserialize(values):
    """Generate binary try from an array of values.

    The input values are read as the nodes at each
    level of the tree. If a value is None, then that
    is an empty leaf.

    :param list values: Values for the binary tree.
    :return Node: Root node of the tree.
    """
    if not values:
        return None
    parent = None
    root = Node(values[0])
    nodes, nxt = deque([root]), deque()
    for i, value in enumerate(values):
        is_left = i % 2
        if parent:
            node = Node(value) if value else None
            nxt.append(node)
            if is_left:
                parent.left = node
            else:
                parent.right = node
        if not is_left:
            if not len(nodes):
                nodes = nxt
                nxt = deque()
            parent = nodes.popleft()
    return root
 `,
 }
,{
tags: ['binary tree', 'bst',],
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
    :return tree.Node: Matched node if it is found,
      None otherwise.
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
,{
tags: ['binary tree', 'bst',],
language: 'python',
question:
  'iteratively search a binary tree',
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
,{
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
,
];