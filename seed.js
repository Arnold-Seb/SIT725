const mongoose = require('mongoose');
const Project = require('./models/Project');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/sit725db';

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    const projects = [
      { title: "Kitten 1", image: "images/kitten.jpg",  link: "About Kitten 1", description: "Very cute and playful. Loves to climb and explore!" },
      { title: "Kitten 2", image: "images/kitten-2.jpg", link: "About Kitten 2", description: "Loves naps and chasing yarn balls. Super fluffy!" },
      { title: "Kitten 3", image: "images/kitten-3.jpg", link: "About Kitten 3", description: "Enjoys cuddles and sunny windowsills." }
    ];
    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log('✅ Seed complete (3 projects)');
  } catch (e) {
    console.error('❌ Seed error:', e);
  } finally {
    await mongoose.connection.close();
  }
})();
