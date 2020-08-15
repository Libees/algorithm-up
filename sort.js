let data = [8, 2, 5, 7, 9, 3, 1, 11];

for (let i = 0; i < data.length - 1; i++) {
  console.log(data[i]);
}

//冒泡排序
function bubbleSort(data) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
  return data;
}

//改进冒泡排序
function bubbleSortFlag(data) {
  for (let i = 0; i < data.length; i++) {
    let flag = true;
    for (let j = 0; j < data.length - 1 - i; j++) {
      if (data[j] < data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
        flag = false;
      }
    }
    if (flag) {
      break;
    }
  }
  return data;
}

//选择排序
function selectionSort(data) {
  for (let i = 0; i < data.length; i++) {
    let min = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[min] > data[j]) {
        min = j;
      }
    }
    let temp = data[min];
    data[min] = data[i];
    data[i] = temp;
  }
}

console.log(data);
