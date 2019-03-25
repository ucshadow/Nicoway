class Class1 {

    name: string = "";
    age: number = 0;

    constructor() {
    }

    setName(name: string, num: number): this {
        this.name = name;
        this.age = num;
        return this
    }

    sayName(): void {
        console.log(this.name + " is now " + this.age + " from class 1");
    }

}

export default Class1;