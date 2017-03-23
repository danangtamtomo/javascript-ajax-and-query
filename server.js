const express = require('express')
const app = express()

function getRandomColor () {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

app.use('/colors', (req, res) => {
  const colors = [
    {1: getRandomColor()},
    {2: getRandomColor()},
    {3: getRandomColor()},
    {4: getRandomColor()},
    {5: getRandomColor()},
    {6: getRandomColor()},
    {7: getRandomColor()},
    {8: getRandomColor()},
    {9: getRandomColor()}
  ]
  res.send(colors)
})

app.listen(3000)
