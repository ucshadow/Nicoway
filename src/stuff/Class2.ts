class Class2 {

    name: string = "";
    age: number = 0;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    setName(name: string, num: number): this {
        this.name = name;
        this.age = num;
        return this
    }


    sayName(): void {
        console.log(this.name + " is now " + this.age + " from class 2");
    }

}

export default Class2;