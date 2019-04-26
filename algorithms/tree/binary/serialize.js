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
