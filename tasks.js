// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):
function getFieldValues(usersData, name){
	var arr=[];
	for(var i=0;i<usersData.length;i++){
		arr[i]=usersData[i][name]; //это формирование массива
	}
	for(i=0;i<arr.length;i++){ //Метод пузырька
		for(var j=i;j<arr.length;j++){
			if(arr[i]>arr[j]){
				var c=arr[j];
				arr[j]=arr[i];
				arr[i]=c;
			}
		}
	}
	for(var i=0; i<usersData.length;i++){
		console.log(arr[i]);
	}

}
var usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
];
console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']

// 2) Написать функцию, фильтрующую массив с использованием предиката:

var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x) {/* Проверка на чётность */
if(x%2==0){
	return x;
}
}
console.log(numbers.filter(isEven)); // --> [2, 8, 34]

// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках
var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend';
var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word';
function findSimilarWords(a,b){
	var longString1=a.split(' ');
	var longString2=b.split(' ');
	var end=[];
	var c=0;
	var x=false;
	for(var i=0;i<longString1.length;i++){
		for(var j=0;j<longString2.length;j++){
			if(longString1[i]==longString2[j]){
				for(var k=0; k<c;k++){
					if(longString1[i]==end[k]){
						x=true;
						break;
					}
				}
				if(!x){
					end[c]=longString1[i];
					console.log(end[c]);
					c++;
				}
			}
		}
	}
}

console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and'];

// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:
function generateBroadcastAndNetworsAddresses(Ip, subnetM)
{
    var adress=[];
    var j=0,beggin=0,c=0;
  for(var i=0;i<Ip.length;i++)
	{
		if (Ip[i]=='.')
		{
		    c=i-beggin;
		    adress[j]=Number(Ip.substr(beggin,c));
		     beggin=i+1;
		    j++;
		}
		if(i==Ip.length-1)
		{
		    adress[j]=Number(Ip.substr(beggin));
		}
	}
	var mask=Math.pow(2,8) - Math.pow(2,32-subnetM)
	 mask=mask.toString(2);
	 var last=adress[3].toString(2);
     adress[3]=last&mask
     console.log(adress);
     var broad=adress;
     broad[3]=adress[3]+Math.pow(2,32-subnetM)-1;
 	return broad; 
}

var IpAddress = '10.223.98.2';
var subnetMask = 28;
console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0

// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];
function makeItClean(totalMessArray){
	arr=totalMessArray[0];
	var f=0;
	for(var i=1; i<totalMessArray.length;i++){
		for(var j=0;j<totalMessArray[i].length;j++){
			f=0;
			for(var k=0;k<arr.length;k++){
				if(totalMessArray[i][j]==arr[k]){
					f=1;
				}
			}
			if(f==0){
					arr.push(totalMessArray[i][j]);
				}
		}
	}return arr;
}
console.log(makeItClean(totalMessArray)); // --> ['a', 1, true, 99, 'aa', undefined];