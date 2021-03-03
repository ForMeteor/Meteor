// 排序算法
let arr = [5,1,6,7,3,2,7,8,3,9,3,6,3]
let k = arr.length
// 冒泡
// for(let j = 0; j < k - 1; j++){
//     for(let i = 0; i < k - 1 - j; i++){
//         console.log('比较'+ arr[i] + '和' + arr[i+1])
//         if(arr[i] > arr[i+1]) {
//             let t = arr[i+1]
//             arr[i+1] = arr[i]
//             arr[i] = t
//             console.log(arr.toString())
//         }
//     }
// }
// 归并
// 合并有序数组
function arrMerge(arr1:Array<any>, arr2:Array<any>) {
    let m = arr1.length
    let n = arr2.length
    let data = []
    let i = 0
    let j = 0
    while(i < m && j < n){
        if(arr1[i] < arr2[j]){
            data.push(arr1[i])
            i++
        }else{
            data.push(arr2[j])
            j++
        }
    }
    while(i < m){
        data.push(arr1[i])
        i++
    }
    while(j < n){
        data.push(arr2[j])
        j++
    }
    console.log("将数组",arr1,'和',arr2,'合并为',data)
    return data
}
function gb(arr:any[]):any[]{
    if(arr.length == 1){
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let arr1 = arr.slice(0,mid)
    let arr2 = arr.slice(mid)
    return arrMerge(gb(arr1),gb(arr2))
}
// 插入排序
let kk = [21,3,42,5,67,1,23,3,45]
function insort(arr:any[]){
    for(let i = 1; i < arr.length;i++){ 
        let h = i 
        let bz = arr[h] 
        while( h > 0 && arr[h-1] > bz){
            arr[h] = arr[h-1]
            h--
        }
        arr[h] = bz
    }
}
// 快速 选择