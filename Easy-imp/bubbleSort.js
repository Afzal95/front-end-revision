let arr = [1,11,2,34,6,23];
function bubble(arr){
        for(let i=0; i<arr.length-1;i++){
        //    let min =i;
            for(let j=0;j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    let temp = arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }
        }
        console.log(arr);
}

bubble(arr);