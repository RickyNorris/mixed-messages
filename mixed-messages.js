const first = ['order', 'go out to get', 'stay in and make', 'try some'];

const second = ['pizza', 'chineese', 'ozmos', 'pasta', 'japaneese', 'greek', 'steak', 'burgers', 'wings', 'seafood', 'mexican'];

const last = ['invite a friend', 'add some spice', 'have it with a drink', 'add some wine', 'have it with salad', 'make it healthey', 'get high first'];

const makeRandomNumber = (array) => {
    return Math.floor(Math.random() * array.length);
};

// console.log(makeRandomNumber(secondWord));

const whatsForDinner = () => {
    const firstPart = first[makeRandomNumber(first)];
    // console.log(firstPart);
    const secondPart = second[makeRandomNumber(second)];
    // console.log(secondPart);
    const lastPart = last[makeRandomNumber(last)];
    // console.log(lastPart);

    console.log('Trouble figuring out something for dinner?');
    console.log(`Maybe you should ${firstPart} ${secondPart} and ${lastPart}!!`);
};

whatsForDinner();