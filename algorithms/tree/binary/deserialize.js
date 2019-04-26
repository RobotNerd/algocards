{
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

    The input values are read as the nodes at each level of the
    tree. If a value is None, then that is an empty leaf.

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
