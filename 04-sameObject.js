
const object1 = {
	a: 'somestring',
	b: 42,
	c: false
};

const object2 = {
	b: 42,
	c: false,
	a: 'somestring'
};


const object3 = {
	b: false,
	c: 42,
	a: 'somestring'
};

// const arr = [1, 2]
// const obj1 = {
// 	name: "yiching"
// }

// const [n1, n2] = arr 
// const arrayToSomething = ([n1, n2]) => console.log(n1, n2)


// const { name } = obj1  
// const name = obj1.name


// arrayToSomething([1,2,3])





function isSameObject(object1, object2){
	const group1 = Object.entries(object1);
	
	for (const [key, value] of group1){
		if(object2[key] !== value) return false
	}

	// for (let i = 0; i < group1.length; i++){
	// 	if (object2[group1[i][0]] !== group1[i][1])
	// 		return false;
	// }
	return true;
}

// console.log(isSameObject(object1, object3));