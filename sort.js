let data = [8, 2, 5, 7, 9, 3, 1, 11];

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

function inSertSort() {
  for (let i = 1; i < data.length; i++) {
    let temp = data[i];
    let j = null; //要插入的位置下标
    //求出插入位置的坐标
    for (j = i - 1; j >= 0; j--) {
      if (data[j] > temp) {
        data[j + 1] = data[j];
      } else {
        break;
      }
    }
    data[j + 1] = temp;
  }
}

function shellSort(data) {
  let gap = 1;
  while (gap < data.length) {
    gap = gap * 3 + 1;
  } //求出最大区间
  while (gap > 0) {
    for (let i = gap; i < data.length; i++) {
      let temp = data[i];
      let j = i - gap;
      // while (j >= 0 && data[j] > temp) {
      //   data[j + gap] = data[j];
      //   j -= gap;
      // }
      // data[j + gap] = temp;
      for (; j >= 0; j -= gap) {
        if (data[j] > temp) {
          data[j + gap] = data[j];
        } else {
          break;
        }
      }
      data[j + gap] = temp;
    }
    gap = Math.floor(gap / 3); //缩小区间值，进行下一轮排序
  }
}
shellSort(data);
console.log(data);
