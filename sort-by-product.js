function productSorter(arr) {
    let results =[]
    for (let i = 0; i < arr.length; i++){
        let product = arr[i]*(i+1);
        results.push(product);}
        results.sort(function(a,b){
            return a - b;
        });
        return results
    }
const items = [23, 2, 3, 4, 5]
console.log([productSorter(items)])