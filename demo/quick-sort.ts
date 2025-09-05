interface Student {
    name:string;
    score:number;
  }

const scores:Student[] = [
    { name: "小明", score: 72 },
    { name: "小红", score: 95 },
    { name: "小刚", score: 88 },
    { name: "小丽", score: 60 },
    { name: "小强", score: 85 },
    { name: "小芳", score: 91 },
    { name: "小天", score: 78 }
  ];
  

  function quickSortScore(arr: Student[]):Student[] {
    // 1. 递归结束条件：数组长度 0 或 1，天然有序
    if (arr.length <= 1) return arr;

    // 2. 选择基准值(此处随机选一个,防止最坏情况),要记得下方循环时排除基准
    const randomIndex =  Math.floor(Math.random()*arr.length) 
    const pointStudent = arr[randomIndex]

    // 3. 拆分出左右分组
    const leftArr:Student[] = [] // 左侧放大的
    const rightArr:Student[] = [] // 右侧放小的

    // 4. 遍历学生数组，通过基准值拆分
    for (let index = 0; index < arr.length; index++) {
        // 循环时排除基准
        if(index === randomIndex) continue
        const currentStudent = arr[index];
        if(currentStudent.score > pointStudent.score){
            leftArr.push(currentStudent)
        }else{
            rightArr.push(currentStudent)
        }
    }

    // 6. 返回最终排序的前三名,并将被排除的基准放中间排序
    return [...quickSortScore(leftArr),pointStudent,...quickSortScore(rightArr)]
  }

  function getTop(arr:Student[],top:number){
    return quickSortScore(arr).slice(0,top)
  }

  console.log('排序后>>>',quickSortScore(scores));
  console.log('前三名>>>',getTop(scores,3));
  