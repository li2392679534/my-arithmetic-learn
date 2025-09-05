function quickSort(arr: any[]) {
    // 1. 递归结束条件：数组长度 0 或 1，天然有序
    if (arr.length <= 1) return arr;
  
    // 2. 选一个基准值（这里选第一个）
    const pivot = arr[0];
  
    // 3. 准备两个数组存放小的和大的数
    const left: any[] = [];
    const right: any[] = [];
  
    // 4. 遍历数组，把元素分到左右两边
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);   // 小于 pivot 的放左边
      } else {
        right.push(arr[i]);  // 大于等于 pivot 的放右边
      }
    }
  
    // 5. 递归排序左右数组，再拼接
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  console.log(quickSort([5, 2, 8, 4, 1, 7]));
  // 输出: [1, 2, 4, 5, 7, 8]
  