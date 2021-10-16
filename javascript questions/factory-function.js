const createUser = ({ userName, avatar }) => ({
  userName,
  avatar,
  setUserName (userName) {
    this.userName = userName;
    return this;
  }
});

const user = createUser({ userName: 'echo', avatar: 'echo.png' });

const x = user.setUserName('new name');
console.log(user.userName);
console.log(x);

// https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1