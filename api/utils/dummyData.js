export default {
  meals: [
    {
      id: 1,
      name: 'Fried Rice',
      size: 'Medium',
      price: '450',
    },
    {
      id: 2,
      name: 'Jollof Rice',
      size: 'Large',
      price: '550',
    },
    {
      id: 3,
      name: 'Beans',
      size: 'small',
      price: '150',
    },
    {
      id: 4,
      name: 'Spagetti',
      size: 'small',
      price: '50',
    },
  ],
  menu: [
    {
      
      date: '2-17-19',
      meals: [
        {
          id: 0,
          name: 'Spagetti',
          section: 'Breakfast',
          price: '150',
          size: 'small',
          img: '',
        },
        {
          id: 1,
          name: 'Spagetti',
          section: 'Super',
          price: '150',
          size: 'small',
          img: '',
        },
        {
          id: 2,
          name: 'Spagetti',
          section: 'Lunch',
          price: '150',
          size: 'small',
          img: '',
        },
        {
          id: 3,
          name: 'Spagetti',
          section: 'Super',
          price: '150',
          size: 'small',
          img: '',
        },
        {
          id: 4,
          name: 'Yam and Egg',
          section: 'Breakfast',
          price: '200',
          size: 'Large',
          img: '',
        },
      ],
    },
  ],
  orders: [
    {
      orderId: 1,
      userId: 3,
      mealId: 4,
      status: 'pending',
      cost: 500,
    },
    {
      orderId: 1,
      userId: 3,
      mealId: 2,
      status: 'pending',
      cost: 500,
    },

  ],
};
