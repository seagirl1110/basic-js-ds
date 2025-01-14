const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = add(this.tree, data);

    function add(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (data === node.data) {
        return node;
      }
      if (data < node.data) {
        node.left = add(node.left, data)
      } else {
        node.right = add(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    return has(this.tree, data);

    function has(node, data) {
      if (!node) {
        return false;
      }
      if (data === node.data) {
        return true;
      }

      return data < node.data ? has(node.left, data) : has(node.right, data);
    }
  }

  find(data) {
    return find(this.tree, data);

    function find(node, data) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        return node;
      }
      return data < node.data ? find(node.left, data) : find(node.right, data);
    }
  }

  remove(data) {
    this.tree = remove(this.tree, data);

    function remove(node, data) {
      if (!node) {
        return
      }

      if (data < node.data) {
        node.left = remove(node.left, data);
        return node;
      }

      if (data > node.data) {
        node.right = remove(node.right, data);
        return node;
      }

      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let max = node.left;
      while (max.right) {
        max = max.right;
      }
      node.data = max.data;
      remove(node.left, max.data);
      return node;
    }


  }

  min() {
    if (!this.tree) {
      return;
    }

    let min = this.tree;
    while (min.left) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    if (!this.tree) {
      return;
    }

    let max = this.tree;
    while (max.right) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};