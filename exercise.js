
// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

async function displayResult () {
  try {
    const customer = await getCustomer(1)
    if (customer.isGold) {
      const topMovie = await getTopMovies()
      const email = await sendEmail()
      console.log(customer)
      console.log(topMovie)
      console.log(email)
    }
  } catch (error) {
    console.error(error)
  }
}

displayResult ()

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: 'Mosh Mohammedan',
        isGold: true,
        email: 'email'
      });
    }, 1000);
  })
}

function getTopMovies() {
 return new Promise((resolve, reject) => {
   setTimeout(() => {
     resolve(['movie1', 'movie2']);
   }, 1000);
 })
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Email sent');
    }, 1000);
  })
}