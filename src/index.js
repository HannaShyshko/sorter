class Sorter {
  constructor() {
    this.array = []; 
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
      function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    }
    var arrToSort = [];

    this.array.forEach((item, i) => {
      for (var j = 0; j < indices.length; j++){
        if (indices[j] == i) arrToSort.push(item);
      }
    })

    if (!this.compareFunction){
      arrToSort.sort(compareNumeric);
    } else {
      arrToSort.sort(this.compareFunction);
    }

    this.array.forEach((item, i) => {
      for (var k = 0; k < indices.length; k++){
        if (indices[k] == i) this.array[i] = arrToSort.shift();
      }
    })

  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
