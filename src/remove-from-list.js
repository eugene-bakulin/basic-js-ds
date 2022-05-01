const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {

  let head = l;

  function countPositions(k) { // посчитаем, сколько раз нужно прогнать поиск позиции и удаление элемента
      let current = l;
      let positions = 0;

      while (current) {
          if (current.value === k) {
              positions++;
          }
          current = current.next;
      }
      return positions;
  }

  let repeater = countPositions(k); // количество прогонок

  function searchPosition(k) { // поиск позиции для удаления элемента
      let current = head;
      let position = 0;
    
      while (current) {
        if (current.value === k) {
          return position;
        }
    
        current = current.next;
        position++;
      }
      //return position;
  }

  function removeAt(position) {
      let current = head;
      if (position === 0) {
        head = current.next;
      } else {
        let prev = null;
        let index = 0;
  
        while (index < position) {
          prev = current;
          current = current.next;
          index++;
        }
  
        prev.next = current.next;
      }
  }
    
  for (let i=1; i <= repeater; i ++) {
      let position = searchPosition(k);        
      removeAt(position);
  }

  return head;
 
}

module.exports = {
  removeKFromList
};
