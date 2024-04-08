import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class Shop extends Component {
  constructor() {
    super(...arguments);
    this.products = [
      {
        id: 1,
        name: 'P1',
        price: 35,
        color: 'black',
        image: '/assets/images/p1.webp',
      },
      {
        id: 2,
        name: 'P2',
        price: 35,
        color: 'black',
        image: '/assets/images/p2.webp',
      },
      {
        id: 3,
        name: 'P3',
        price: 35,
        color: 'black',
        image: '/assets/images/p3.webp',
      },
    ];
  }
  @action
  productClick(productId) {
    console.log(productId);
  }
}
