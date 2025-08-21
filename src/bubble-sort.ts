/**
 * 冒泡排序
 * @param arr 待排序的数组
 * @param compareFn 比较函数 (a, b) => boolean,true 表示需要交换
 */
function bubbleSort<T>(arr: T[], compareFn: (a: T, b: T) => boolean): T[] {
  const newArr = [...arr]; // 复制一份，避免修改原数组
  const n = newArr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) { 
      // -i 是因为每一轮排序后，最后一个元素已经是有序的,只需排序前 n-1-i 个元素
      if (compareFn(newArr[j], newArr[j + 1])) {
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        swapped = true;
      }
    }
    if (!swapped) break; // 优化：如果某一轮没有交换，说明已排序好
  }
  return newArr;
}