export default {
  meals: [
    {
      id: 1,
      img: '',
      name: 'Fried Rice',
      size: 'Medium',
      price: '450',
    },
    {
      id: 2,
      img: '',
      name: 'Jollof Rice',
      size: 'Large',
      price: '550',
    },
    {
      id: 3,
      img: '',
      name: 'Beans',
      size: 'small',
      price: '150',
    },
    {
      id: 4,
      img: '',
      name: 'Spagetti',
      size: 'small',
      price: '50',
    },
  ],
  menus: [
    {
      id: 1,
      mealId: 3,
      date: '2-22-2019',
      section: 'breakfast',
    },
    {
      id: 2,
      mealId: 1,
      date: '2-22-2019',
      section: 'breakfast',
    },
    {
      id: 3,
      mealId: 1,
      date: '2-22-2019',
      section: 'lunch',
    },
    {
      id: 4,
      mealId: 2,
      date: '2-22-2019',
      section: 'lunch',
    },
  ],
  orders: [
    {
      id: 0,
      userId: 3,
      menuId: 4,
      status: 'pending',
      quantity: 2,
      price: 3000,
    },
    {
      id: 1,
      userId: 3,
      menuId: 2,
      status: 'received',
      quantity: 1,
      price: 500,
    },

  ],
};
