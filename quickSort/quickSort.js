
//! quickSort => recursively Qs lower sized

function swap(arr,i,j){
    let temp = arr[i];
    arr[i]=arr[j]
    arr[j]=temp;
}

function partition(array,start=0,end= array.length-1){

    let middle = Math.floor((start+end)/2);
    swap(array,start,middle)

    let pivot = array[start];
    let i = start+1;
    let j = end;

    while(i<=j){
        while(array[i]<=pivot){
            i++;
        }
        while(array[j]>pivot){
            j--;
        }
        if(i<j){
            swap(array,i,j);
        }
    }
    swap(array,start,j);

    return j;
}

function quickSort(array,start=0,end=array.length-1){

    if(start<end){
        let pivotIdx = partition(array,start,end);
        quickSort(array,start,pivotIdx-1)
        quickSort(array,pivotIdx+1,end)
    }
    return array
    // console.log(array)
}

let array=[1,24,56,73,5,2]
console.log(quickSort(array))
