console.log("Задание 1 Объявите переменную и запишите в нее свое имя как литерал строки. ");
let name ={
	n: "Игорь"
}
console.log (name.n);

console.log("Задание 2, Объявите константы и запишите в нее месяц и год своего рождения как литерал числа. ");
const igor ={
	 manth: 12,
	 god: 2001
}
console.log (igor.manth);
console.log (igor.god);

console.log("Задание 3 Создайте функцию, которая печатает приветствие и имеет три  аргумента: name, month, year ");
function priv()
{
	let name;
	let month;
	let year;
	name="Игорь";
	month="Декабрь";
	year= 2001;
	console.log ("Привет "+name+" Ваш год и месяц рождения "+year+" "+month);
}
priv();
console.log("Задание 4 Реализуйте функцию range(start: number, end: number): array которая отдает массив чисел из диапазона [-15, 15] включая крайние числа. ");
function range()
{
let arr=[];

	for (let i=-15; i<=15;i++)
	{
		arr[i]=i;;
	}
for (let i=-15; i<=15;i++)
	{
		console.log(arr[i]);
	}	

}
range();
console.log("Задание 5 Реализуйте функцию rangeOdd(start: number, end: number): array которая отдает массив четных чисел из диапазона [-15, 15] включая крайние числа. ");
function rangeOdd()
{
let arr=[];

	for (let i=-15; i<=15;i++)
	{
		arr[i]=i;;
	}

    for (let i=-15; i<=15;i++)
	{
	 if (arr[i] % 2 == 0) {
    console.log( arr[i] );
    }
		}

}