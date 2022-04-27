const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
  let list = l;
  // console.log('list', list);

  // console.log(`next`, list.next);

  const index = findIndex(list, k);

  console.log('index', index);

  if (index < 0) { return }

  if (index === 0) {
    list = list.next;
    return removeKFromList(list, k);
  } else {
    let prev = null;
    let current = list;

    let i = 0;
    while (i < index) {
      console.log('i', i)
      console.log('prev', prev);
      console.log('current', current);
      prev = current;
      console.log('prev', prev);
      current = current.next;
      console.log('current', current);


      i += 1;
    }
    prev.next = current.next;

    // return removeKFromList(list, k);
  }
  // console.log('finish list', list);
  return list;
}

function findIndex(l, k) {
  let list = l;
  let index = 0;


  // console.log(`next of index`, list.next);

  while (list.value) {
    const current = list.value;
    // console.log('index', index)
    // console.log(`current`, current);
    // console.log('list', list);
    // console.log(`next`, list.next);
    if (current === k) {
      return index;
    } else {
      list = list.next;
    }

    // console.log(`next`, list.next);

    index += 1;
  }

  return -1;
}

module.exports = {
  removeKFromList
};
