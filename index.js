// Code your solutions in this file

function writeCards(array, topic){
    let holder =[]
    for(let i=0; i < array.length; i++){
        holder.push(`Thank you, ${array[i]}, for the wonderful ${topic} gift!`)
    };
    console.log(holder)
    return holder;
    
}

function countDown(number){
    for (let index = number; 0 <= index; index--){
        console.log(index);
    }
}