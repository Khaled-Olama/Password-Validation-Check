// class User {
// 	public get username(): string {
// 		return this._username;
// 	}
// 	public set username(value: string) {
// 		this._username = value;
// 	}
// 	msg: () => string;
// 	constructor(
// 		private _username: string,
// 		protected salary: number,
// 		public readonly address: string
// 	) {
// 		this.msg = function () {
// 			return `Hello ${this.username}, your salary is ${this.salary}`;
// 		};
// 	}
// 	sayMsg() {
// 		return `Hello ${this.username}, your salary is ${this.salary}`;
// 	}
// }
// let userOne = new User("Khaled", 14000, "Giza");
// console.log(userOne.username);
// userOne.username = "Kolama";
// console.log(userOne.username);
// // console.log(userOne.salary);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());
/////////////////
////////////////
// class User1 {
// 	public get username1(): string {
// 		return this._username1;
// 	}
// 	public set username1(value: string) {
// 		this._username1 = value;
// 	}
// 	msg: () => void;
// 	constructor(
// 		private _username1: string,
// 		protected salary: number,
// 		public readonly address: string
// 	) {
// 		this.msg = function (): void {
// 			console.log(`Hello ${this.username1}, your salary is ${this.salary}`);
// 		};
// 	}
// }
// let userOne = new User1("Khaled", 14000, "Giza");
// console.log(userOne.username1);
// userOne.username1 = "Kolama";
// console.log(userOne.username1);
// userOne.msg();
// interface Settings {
// 	theme: boolean;
// 	font?: string;
// 	save(): void;
// }
// class User implements Settings {
// 	private static created: number = 0;
// 	static getCount(): void {
// 		console.log(`${this.created} Objects Created`);
// 	}
// 	constructor(
// 		public username: string,
// 		public theme: boolean,
// 		public font: string
// 	) {
// 		User.created++;
// 	}
// 	save(): void {
// 		console.log("Saved");
// 	}
// 	update(): void {
// 		console.log("Updated");
// 	}
// }
// let user1 = new User("Khaled", true, "UI System");
// User.getCount();
// console.log(user1.username);
// console.log(user1.theme);
// console.log(user1.font);
// user1.save();
// user1.update();
// function returnType<GenericType>(value: GenericType): GenericType {
// 	return value;
// }
// const returnTypeArrow = <GenericType>(value: GenericType): string =>
// 	`The value is "${value}" and Type is "${typeof value}"`;
// console.log(returnTypeArrow<number>(100));
// console.log(returnTypeArrow<number[]>([2006, 5, 16]));
// class UserGenerics<GenericType = string> {
// 	constructor(public value: GenericType) {}
// 	show(msg: GenericType): void {
// 		console.log(`${msg} - ${this.value}`);
// 	}
// }
// let UserGenericsType1 = new UserGenerics<string>("Khaled");
// console.log(UserGenericsType1.value);
// UserGenericsType1.show("Message");
// let UserGenericsType2 = new UserGenerics<number | string>(2006);
// console.log(UserGenericsType2.value);
// UserGenericsType2.show(`Your Birthday Is In`);
// console.log("hello");
/////////////////
////////////////
/////////////////
////////////////
/////////////////
////////////////
/////////////////
////////////////
/////////////////
////////////////
