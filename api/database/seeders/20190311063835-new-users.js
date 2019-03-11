module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'Users',
    [{
      firstName: 'Ridwan',
      lastName: 'Onikoyi',
      email: 'ridwanonikoyi@yahoo.com',
      password: '$2b$10$xdN1eksVv0g/5hWcbSZx7OA1WGkjEoJNJuERDR935.OS648uVFQ7K',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {},
  ),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
