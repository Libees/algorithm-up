# 算法学习笔记

## 排序

排序是通过数据 **交换** 使得数据按照升序或者降序的方式进行排列，是数据位置的互换而不是数据的覆盖

### 冒牌排序

冒泡排序是将前后两个数据进行大小比较，符合条件则交换位置或不符合，都向下顺延一位，继续前后两两进行比较。

<br>

**实现思路：** 使用嵌套循环进行实现，外层循环控制循环次数，内层循环进行前后两个数据的比较和交换
**改进思路：** 在外层循环设立一个标记，一旦内层循环没有进行交换操作，就终止继续循环。因为
内层循环未进行数据交换时，说明排序已经完成，剩下的循环时多余的

### 选择排序

选择排序数据分为两个部分，一部分为有序部分、另一部分为无序部分

1. 选择有序部分的最后一个数据为锚定物，因为已经是有序部分，所以该数肯定是有序部分的最大或最小值。
2. 在无序部分进行遍历，通过与锚定物的比较，筛选出最大或最小值，
3. 将有序和无序部分的两个数值进行交换

**实现思路：** 通常使用嵌套循环实现。外层循环锁定锚定物，内层循环遍历剩下的数据，与锚定物比较
所以时间复制度为 O(n2)

### 插入排序

插入排序也是将数据分为 有序部分和无序部分两个部分。

1. 在无序部分，由前到后，提取数据作为锚定物，并于有序部分进行比较
2. 在有序部分，重最后一个数开始，与无序锚定物进行比较大小，若不符合，这该数据向后移动一位
   直到符合为止。
3. 将无序锚定物插入到，后移产生的空位处。

**实现思路：** 使用嵌套循环进行实现，外层循环取出无序数据中需要比较的数字，内层循环，从有序数字的最后以为开始，循环和无序中选出的数进行比较，若不符合条件，有序数位置向后移动，符合条件，退出当前循环，返回下标。最后在下标中，插入无序数字，形成新的有序数列

### 希尔排序

**实现思路：**希尔排序是插入排序的改进版，由大到小，不断缩小比较间隔，优化插入排序
数字移动的间隔，不再是向后移动一位，而是当前的比较间隔
