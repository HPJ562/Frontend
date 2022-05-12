const list_items =document.querySelectorAll('.list-item');
const lists =document.querySelectorAll('.list');

let draggedItem = null;

for(let i=0; i<list_items.length;i++){
    const item =list_items[i];

    item.addEventListener('dragstart',()=>{
      
        draggedItem=item
        setTimeout(()=>{
            item.style.display='none'
        },0)
        
    })
    item.addEventListener('dragend',()=>{
        
        setTimeout(()=>{
            draggedItem.style.display='block';
            draggedItem=null;
        },0)
    })
    for(let j=0;j<lists.length;j++){
        const list = lists[j]
        list.addEventListener('dragover',function(e){
            
            e.preventDefault()
        })
        list.addEventListener('dragenter',function(e){
            e.preventDefault()
            this.style.backgroundColor= 'rgb(0,0,0,0.1)'
        })
        list.addEventListener('dragleave',function(e){
            this.style.backgroundColor='rgb(0,0,0,0.2)'
        })
        list.addEventListener('drop',function(e) {
            console.log('drop')
            this.append(draggedItem)
            this.style.backgroundColor='rgb(0,0,0,0.3)'
        })
    }
}