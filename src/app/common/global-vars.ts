export class GlobalVars {

  public static siteVars = {
    siteName: 'Kancoffeeq',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    email: 'informes@darkredgm.com',
    phone: {
      text: '+51 915 350 295',
      url: '51915350295'
    },
    social: [
      {
        icon: 'bxl-facebook-square',
        text: 'Facebook',
        link: 'www.facebook.com'
      }
    ],

    footer: {
      products: [
        {
          text: 'Producto 1',
          link: '',
        },
        {
          text: 'Producto 2',
          link: '',
        },
        {
          text: 'Producto 3',
          link: '',
        },
        {
          text: 'Producto 4',
          link: '',
        },
      ]
    }
  }


  public static home = {
    hero: {
      bg: '/assets/images/home-bg-hero.jpg',
      title: '¿Qué es Kancoffeeq?',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti voluptas inventore eius dolore velit nesciunt. Reiciendis consequuntur fugiat voluptates deleniti totam tempore aliquid officiis saepe, laboriosam nisi! Ex, libero nam iste ab dolorem labore architecto expedita excepturi, possimus at unde?',
      actions: [
        {
          img: '/assets/images/home-sales.jpg',
          text: 'Ofertas'
        },{
          img: '/assets/images/home-sales.jpg',
          text: 'Ofertas'
        },{
          img: '/assets/images/home-sales.jpg',
          text: 'Nuestros Productos'
        },
      ]
    },
    forYou: {
      title: '¿QUÉ TENEMOS PARA TÍ?',
      content: [
        {
          img: '/assets/images/home-info.jpg',
          text: 'Categoria 1',
          link: ''
        },
        {
          img: '/assets/images/home-info.jpg',
          text: 'Categoria 2',
          link: ''
        },
      ]
    }
  }
}
