// Debounce

function search(data){
    console.log("searching ",data);
}

const debounce = function(searchFn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>searchFn.apply(this,args),delay);
    }
}

const debouncedSearch = debounce(search, 500);
debouncedSearch("a")
debouncedSearch("b")
debouncedSearch("c")

// Throttle


const throttle = function(search,delay){
    let lastTime = 0;
    return function(...args){
       const now = Date.now();
       if(now -lastTime >delay){
        lastTime = now; 
         search.apply(this,args);
       }
    }
}