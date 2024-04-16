

function find(data, predicate) { 
    if(predicate) { 
        return data; 
    }
    else { 
        return null; 
    }
}; 

function findFirst(data, predicate) {
    for (const info of data) { 
        if (predicate(datapoint)) { 
            return datapoint; 
        }
    }
    return null; 
};
