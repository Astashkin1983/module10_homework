let time = new Map
time.set('day','24 hours')
time.set('hour','60 min')
time.set('min','60 sec')
for (let name of time.keys()) {  
}
for (let value of time.values()) {
 console.log(`Ключ - ${name}, Значение - ${value}`)  
}  
}
