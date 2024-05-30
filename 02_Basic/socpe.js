

function printName(){
    const myName = "Manish"

    function printFullName(){
        const mySirName = "Sharma"
        console.log(`mu fullName is ${myName} ${mySirName} `)
    }

    console.log(mySirName)

    printFullName();
    console.log(mySirName)
}

printName()