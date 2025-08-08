const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sit725db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Project = mongoose.model('Project', new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
}));

const projects = [
  {
    title: "Kitten 1",
    image: "images/kitten.jpg",
    link: "About Kitten 1",
    description: "Very cute and playful. Loves to climb and explore!"
  },
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    description: "Loves naps and chasing yarn balls. Super fluffy!"
  },
  {
    title: "Kitten 3",
    image: "images/kitten-3.jpg",
    link: "About Kitten 3",
    description: "Enjoys cuddles and sunny windowsills."
  }
];

Project.insertMany(projects)
  .then(() => {
    console.log("✅ Sample projects inserted");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
