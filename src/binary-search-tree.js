const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.root0 = null;
  }

  root() {
    return this.root0;
  }

  add(data) {

    this.root0 = addWithin(this.root0, data);
    
    function addWithin(node, data) {

      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;

    }
  }

  has(data) {
    
    return searchWithin(this.root0, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data < data) {
        return searchWithin(node.right, data);
      } else {
        return searchWithin(node.left, data);
      }
    }

  }

  find(data) {
    return findWithin(this.root0, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        return findWithin(node.right, data);
      } else {
        return findWithin(node.left, data);
      }
    }
  }

  remove(data) {
    
    this.root0 = removeNode(this.root0, data);

    function removeNode(node, data) {

      if(!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {

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

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
        
      }

    }

  }

  min() {
    if (!this.root0) {
      return null;
    }

    let node = this.root0;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.root0) {
      return null;
    }

    let node = this.root0;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

const tree = new BinarySearchTree();

console.log(tree.add(1));

console.log(tree.add(2));

console.log(tree.add(3));

console.log(tree.add(4));

console.log(tree.add(5));

console.log(tree.max());

console.log(tree.root());



module.exports = {
  BinarySearchTree
};