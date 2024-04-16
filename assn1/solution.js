function findLast(data, predicate) {
    for (let i = data.length - 1; i > -1; i--) { 
        if(predicate(data[i])){
            return data[i]
        }
    }
    return null;  
}; 

function filter(data, predicate){
    const result = []; 
    for(const info of data){
        if(predicate(info)) {
            result.push(info); 
        }
    }
    return result; 

};

function map(data, callback){
    const result = []; 
    for(const info of data){
        result.push(callback(info)); 
    }
    return result; 
};

function pairIf(data1, data2, predicate){
    const result = []; 
    for(const info1 of data1){
        for(const info2 of data2){
            if(predicate(info1, info2)){
                result.push([info1, info2]); 
            }
        }
    }
    return result; 
};

function reduce(data, reducer, initialValue){
    let result = initialValue; 
    for(let x of data){
        result = reducer(x, result); 
    }
    return result; 
};

const validJellies = ["FIG_JAM", "FIG_JELLY", "SPICY_FIG_JAM", "ORANGE_FIG_JELLY"]
const filterInvalidTrans = filter(transactions, x => !x.amount || !validJellies.includes(x.product));

const pairDuplicateCust = pairIf(customers, customers, (x1, x2) => (x1.emailAddress === x2.emailAddress) && (x1.id !== x2.id)); 

const lastTransaction = findLast(transactions, x => x.amount > 200); 

const difTransTracker = {
    small : 0,
    medium : 0, 
    large : 0
};
const differentTransactions = reduce(transactions, (x, result) => {
    if(x.amount >= 75){
        result.large += 1; 
    }
    else if (x.amount > 25){
        result.medium += 1; 
    }
    else if (x.amount > 0){
        result.small += 1; 
    } 
    return result; 
}, difTransTracker);

const only200 = filter(transactions, x => x.amount > 200); 
const customers200 = pairIf(customers, only200, (customer, transaction) => customer.id === transaction.customerId);  
const uniqueCustomers = reduce(customers200, (x, result) => {
    if(!result.includes(x[0])){
        result.push(x[0]); 
    } 
    return result; 
},[]); 
const mapUniqueCustomers = map(uniqueCustomers, x => `${x.firstName} ${x.lastName}`);  

console.log(`Number of invalid transactions: ${filterInvalidTrans.length}`); 
console.log(`Number of duplicate customers: ${pairDuplicateCust.length / 2}`); 
console.log(`Most recent transaction over $200: $${lastTransaction.amount}`); 
console.log(`Number of small transactions: ${differentTransactions.small}`); 
console.log(`Number of medium transaction: ${differentTransactions.medium}`); 
console.log(`Number of large transactions: ${differentTransactions.large}`); 
console.table(`Customers with transactions over $200:`, uniqueCustomers); 
console.table(`Names of customers with transactions over $200: ${mapUniqueCustomers}`); 


