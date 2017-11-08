/**
 * Return the center for a given SVG polygon points attribute
 * @param  {String} points - Points attribute of a SVG <polygon> or <polyline> 
 * @returns {Object} Center of the polygon which is an object that contains x and y property
 */
module.exports = function (points) {
  if (!points) return

  var pointsArray = points.split(' ')

  var center = {
    x: 0,
    y: 0
  }

  for (var i = 0; i < pointsArray.length; i++) {
    var pair = pointsArray[i].split(',')

    center.x += (pair[0] / pointsArray.length)
    center.y += (pair[1] / pointsArray.length)
  }

  return {
    x: center.x,
    y: center.y
  }
}
