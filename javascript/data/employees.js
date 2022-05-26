const employees = [
    {
      firstName: 'Michael',
      lastName: 'Jones',
      dateOfBirth: 1990,
      address: {
        line1: '201 Main St',
        line2: null,
        city: 'San Antonio',
        state: 'TX',
        zipCode: '77990',
      },
      hasCollegeDegree: true,
      dependents: ['daughter'],
    },
    {
      firstName: 'Sandra',
      lastName: 'Green',
      dateOfBirth: 1975,
      address: {
        line1: '505 L St',
        line2: 'Apt 3A',
        city: 'Austin',
        state: 'TX',
        zipCode: '77101',
      },
      hasCollegeDegree: true,
      dependents: ['mother-in-law', 'daughter', 'son'],
    },
    {
      firstName: 'Jonathan',
      lastName: 'Ruiz',
      dateOfBirth: 1985,
      address: {
        line1: '7550 Barn Ave',
        line2: null,
        city: 'San Antonio',
        state: 'TX',
        zipCode: '77990',
      },
      hasCollegeDegree: false,
      dependents: [],
    },
    {
      firstName: 'Mary',
      lastName: 'Berry',
      dateOfBirth: 1965,
      address: {
        line1: '12 4th St',
        line2: '#505',
        city: 'Houston',
        state: 'TX',
        zipCode: '77494',
      },
      hasCollegeDegree: true,
      dependents: ['son'],
    },
  ];

  console.log(employees[1].dependents)