let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    return console.log('Olá, ' + order.order.delivery.deliveryPerson + ' entrega para: ' + order.name + ', ' + order.phoneNumber + ', ' + order.address.street + ', N: ' + order.address.number + ', AP: ' + order.address.apartment);
  }
  
  customerInfo(order);
  
  order.name = 'Luiz Silva';
  order.payment = 50;

  function orderModifier(order) {
    let newBuyer = order.name = 'Luiz Silva';
    let newTotal = order.payment = 50;
    let pizzas = Object.keys(order.order.pizza);
    return console.log('Olá, ' + newBuyer + ', o valor total do seu pedido de ' + pizzas[0] + ', ' + pizzas[1] + ' e ' + order.order.drinks.coke.type + ' é R$' + newTotal + ',00.');
  }
  
  orderModifier(order);