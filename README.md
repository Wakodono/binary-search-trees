# Binary Search Trees

A balanced binary search tree implementation in JavaScript, built for [The Odin Project](https://www.theodinproject.com/lessons/javascript-binary-search-trees).

## What is a binary search tree?

Think of a binary search tree like a family tree of numbers. Every node holds a value, plus two children: a left child that is always smaller, and a right child that is always larger. To find a number, you start at the root and keep asking one question — “is the target smaller or larger than here?” — so each step throws away half of the remaining tree.

This matters because lookup, insert, and delete can run in logarithmic time when the tree stays balanced, instead of scanning every item the way a plain list does.

## What I built

A `Tree` factory that takes an array of numbers, builds a balanced tree from it, and exposes methods as they are added. Nodes use `hidari` and `migi` (Japanese for left and right) instead of `left` and `right`.

| Method / helper | What it does |
|-----------------|--------------|
| `Node(data)` | Creates a node with `data`, `hidari: null`, and `migi: null`. |
| `Tree(arr)` | Builds a tree from an array. The returned object has a `root` and the public methods below. |
| `buildTree(arr)` | Sorts the array, picks the middle value as the current node, and recursively builds the left and right subtrees. An empty array returns `null`. Private to the module — not on the `Tree` return object. |
| `includes(num)` | Returns `true` when the value is at the root, or one step left or right of the root (happy paths only so far). |
| `prettyPrint(node)` | Prints the tree sideways in the console, using the helper from the assignment. |

### Technical details

- **Factory pattern**: `Node` and `Tree` are factory functions, not classes, matching the earlier linked list and hash map projects.
- **Balanced construction**: `buildTree` sorts the numbers, takes the midpoint as the root of that subtree, then slices the left half and right half and repeats. That is how a sorted array becomes a balanced tree without inserting one value at a time.
- **Empty input**: Passing `[]` produces `null` rather than a node, so recursive calls on empty slices terminate.
- **Naming**: Child pointers are `hidari` (left) and `migi` (right). Comparisons still follow the usual BST rule: smaller values go left, larger values go right.
- **Pretty print**: The assignment’s `prettyPrint` helper is included so a tree can be inspected in the terminal while methods are added.

## How I tested it

The implementation has been grown test-first. Commits add a check, then the smallest code that makes it pass:

- `Node` stores `data` and starts with empty `hidari` / `migi` children
- `buildTree` returns `null` for an empty array
- A non-empty array produces a root at the sorted midpoint, with left and right children
- `includes` finds a value at the root
- `includes` finds a larger value by stepping right of the root

The test files are still local to the TDD loop and are not in this repository yet, so there is no `npm test` script here. Run a quick manual check with:

```bash
node --input-type=module -e "
  import { Tree } from './bst.js';
  const tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  console.log(tree.root.data);
  console.log(tree.includes(tree.root.data));
"
```

## Topics covered

- **Data structures**: Building a binary search tree from scratch instead of using a library.
- **Recursion**: `buildTree` splits the array and calls itself on each half until a slice is empty.
- **Binary search property**: Smaller values live on the left, larger values on the right, which is what `includes` uses to choose a child.
- **Test-driven development**: One behaviour at a time — node factory, empty array, midpoint root, then `includes` happy paths.
- **ES modules**: `Node` and `Tree` are exported from `bst.js`.

## Current status

This is in progress, not the finished assignment.

**Done so far**

- `Node` factory
- `Tree` factory with `buildTree` (sort + midpoint, including the empty-array `null` case)
- `prettyPrint`
- `includes` for the root and one level of children

**Still to do (from the assignment)**

- Remove duplicate values when building the tree
- Recurse in `includes` (and return `false` when the value is missing)
- `insert`, `deleteItem`
- Level-order and depth-first traversals (`levelOrderForEach`, `inOrderForEach`, `preOrderForEach`, `postOrderForEach`)
- `height`, `depth`, `isBalanced`, `rebalance`
- Driver script that builds a random tree, unbalances it, then rebalances it

---

**Author:** Wako Anindo
