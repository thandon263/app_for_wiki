exports.index = function(req, res) {
  res.render('default', {
    title: "Home",
    classname: 'home',
    collection: [
      'Ray', 'Morten', 'James'
    ]
  });
}

exports.about = function(req, res) {
  res.render('about', {
    title: "About Us",
    classname: 'about',
    //collection: ['Bananas', 'Apples', 'Mangoes', 'Skateboards', 'Kayakis']
  });
}
