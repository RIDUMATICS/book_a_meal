/* eslint-disable no-unused-expressions */
const dummyData = {
  menu: [
    {
      id: 0,
      date: '12-03-19',
      breakfast: [
        {
          name: 'Spagetti',
          price: '150',
          size: 'small',
          img: '',
        },
        {
          name: 'Spagetti',
          price: '150',
          size: 'small',
          img: '',
        },
        {
          name: 'Spagetti',
          price: '150',
          size: 'small',
          img: '',
        }, {
          name: 'Spagetti',
          price: '150',
          size: 'small',
          img: '',
        },
      ],
      lunch: [
        {
          name: 'Indomie',
          price: '150',
          size: 'small',
          img: '',
        },
        {
          name: 'Spagetti',
          price: '150',
          size: 'small',
          img: '',
        },
        {
          name: 'Spagetti',
          price: '150',
          size: 'small',
          img: '',
        }, {
          name: 'Spagetti',
          price: '150',
          size: 'small',
          img: '',
        },
      ],
      super: [
        {
          name: 'Rice',
          price: '150',
          size: 'small',
          img: '',
        },
        {
          name: 'Spagetti',
          price: '150',
          size: 'small',
          img: '',
        },
        {
          name: 'Spagetti',
          price: '150',
          size: 'small',
          img: '',
        }, {
          name: 'Spagetti',
          price: '150',
          size: 'small',
          img: '',
        },
      ],
    },
  ],
  users: [
    {
      id: 0,
      username: 'Ridumatics',
      email: 'onikoyiridwan@gmail.com',
      password: 'rilwayne',
    },
  ],

  cart: {

  },
};

const stringDummyData = JSON.stringify(dummyData);

// eslint-disable-next-line no-undef
localStorage.getItem('iyapato-data') || localStorage.setItem('iyapato-data', stringDummyData);
