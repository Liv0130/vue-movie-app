exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Olivia',
      age: 27,
      email: 'yjjhsh27@gmail.com'
    })
  }
}