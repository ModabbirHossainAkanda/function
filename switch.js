const color = 'yellow';
if(color === 'green'){
    console.log('You are a green friend');
}
else if(color === 'blue'){
    console.log('You are a blue friend');
}
else if(color === 'red'){
    console.log('You are a red friend');
}
else if(color === 'white'){
    console.log('You are a white friend');
}
else if(color === 'yellow'){
    console.log('You are my yellow friend');
}

else{
    console.log('You are my black friend');
}

// switch 
switch(color){
    case 'green':
        console.log('You are a green friend');
        break;
    case 'blue':
        console.log('You are my blue friend');
        break;

    case 'white':
        console.log('You are my white friend');
        break;
    case 'red':
        console.log('You are my red friend');
        break;
    case 'yellow':
        console.log('You are my Yellow friend');
        break;
    default:
        console.log('You are my kala kala friend');
}
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
