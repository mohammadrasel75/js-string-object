const address = 'andorkilla';
const part = address.slice(2, 5);
// console.log(part);

const sentence = 'I am a good and hardworking person'; 
// console.log(sentence.split(' '))
// console.log(sentence.split('a'))

const friendsStr = 'Rasel, Rafia, Rafiq, Rafi';
const friends = friendsStr.split(',');
console.log(friends); 

const realFriends = ['Rasel','Rafia','Rafiq','Rafi'];
console.log(realFriends.join());
console.log(realFriends.join('|'));
console.log(realFriends.join('-')); 
