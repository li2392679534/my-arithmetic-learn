/**
 * 快速排序[左右分组]
 * @param arr 
 * @returns
 */
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
  


  /**
   * 快速排序[原地排序 - 双指针]
   * @param arr 
   * @param left 
   * @param right
   * @returns
   */
  function quickSortInPlace(arr: number[], left = 0, right = arr.length - 1): number[] {
    if (left >= right) return arr; // 递归出口
  
    let i = left;
    let j = right;
    const pivot = arr[left]; // 选第一个作为基准
  
    while (i < j) {
      // 从右边开始找比 pivot 小的
      while (i < j && arr[j] >= pivot) j--;
      if (i < j) arr[i++] = arr[j]; // 放到左边空位，并移动 i
  
      // 从左边开始找比 pivot 大的
      while (i < j && arr[i] <= pivot) i++;
      if (i < j) arr[j--] = arr[i]; // 放到右边空位，并移动 j
    }
  
    arr[i] = pivot; // 把基准放到最终位置
  
    // 递归处理左右两边
    quickSortInPlace(arr, left, i - 1);
    quickSortInPlace(arr, i + 1, right);
  
    return arr;
  }
  
  // 测试
  console.log(quickSortInPlace([5, 2, 8, 4, 1, 7]));
  // 输出: [1, 2, 4, 5, 7, 8]