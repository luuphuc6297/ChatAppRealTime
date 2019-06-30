const axios = require('axios');

// exports.userLogin = (email, password) => {
//     return axios.post('http://localhost:5000/api/user/login', {
//     email: email,
//     password: password
//   })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error.data);
//   });
// }

// userLogin('fu629718@gmail.com','dfskjghsdkjhgjkerhgre')

exports.userRegister = (name, email, password, password2, phone) => {
    return axios.post('http://localhost:5000/api/user/register', {
    name: name,
	  email: email,
	  password: password,
	  password2: password2,
	  phone: phone
    })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error.data)
    })
}

exports.userLogin = (email, password) => {
    return axios.post('http://localhost:5000/api/user/login', {
    email: email,
    password: password
  })
  .then(response => {    
    console.log(response.data.data);
    localStorage.setItem('userID', response.data.data.id);
    localStorage.setItem('accessToken', response.data.data.accessToken);
    localStorage.setItem('email', response.data.data.email);

  })
  .catch(error => {
    console.log(error.data);
  });
}

