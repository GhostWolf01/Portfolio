import SmartOrangeImg from '../../assets/imgs/SmartOrange-img.jpg'
import ShopImg from '../../assets/imgs/Shop-img.jpg'
import ScienceEnjoyImg from '../../assets/imgs/ScienceEnjoy-img.jpg'
import VisevenImg from '../../assets/imgs/Viseven-img.jpg'
import BlogImg from '../../assets/imgs/Blog-img.jpg'
import VintageImg from '../../assets/imgs/Vintage-img.jpg'

export default {
  namespaced: true,
  state: {
    portfolioActiveComponents: false,
    portfolioActiveComponent: 0,
    portfolioComponents: [
      {
        id: 0,
        name: 'SmartOrange',
        nameUrl: 'smart_orange',
        srcHtml: '/projects/Smart_orange/smart_orange.html',
        text: `Афиша дома\n
              Реализовано переключение слайдов с помощю slick,
              preloader страница ждет полной загрузки контента, весь функционал реализована на jqery`,
        imgSrc: SmartOrangeImg,
        imgAlt: 'Syte',
        listArray: [
          'Gulp',
          'Jqery',
          'Slick',
          'Scss',
          'BEM'
        ]
      },
      {
        id: 1,
        name: 'Shop',
        nameUrl: 'shop',
        srcHtml: '/projects/Shop_vue/index.html',
        text: `Магазин на планшеты\n
              Подгрузка даных товаров с сервера через асинхроный запрос`,
        imgSrc: ShopImg,
        imgAlt: 'Syte',
        listArray: [
          'Vue',
          'Scss',
          'BEM'
        ]
      },
      {
        id: 2,
        name: 'ScienceEnjoy',
        nameUrl: 'scienceenjoy',
        srcHtml: '/projects/SCIENCEENJOY/index.html',
        text: 'Афиша сайта дезайнеров',
        imgSrc: ScienceEnjoyImg,
        imgAlt: 'Syte',
        listArray: [
          'Bootstrap'
        ]
      },
      {
        id: 3,
        name: 'Viseven',
        nameUrl: 'viseven',
        srcHtml: '/projects/Viseven/index.html',
        text: 'Афиша фарм компании',
        imgSrc: VisevenImg,
        imgAlt: 'Syte',
        listArray: [
          'Vue',
          'VueCli',
          'Scss',
          'BEM'
        ]
      },
      {
        id: 4,
        name: 'Blog',
        nameUrl: 'blog',
        srcHtml: '/projects/Blog/index.html',
        text: `Веб-блог\n
              Просмотр фото реализовано через popup`,
        imgSrc: BlogImg,
        imgAlt: 'Syte',
        listArray: [
          'Vue',
          'VueCli',
          'Scss',
          'BEM'
        ]
      },
      {
        id: 5,
        name: 'Vintage',
        nameUrl: 'vintage',
        srcHtml: '/projects/vintage/index.html',
        text: `Форма потдержки\n
              Отправка формы на сервер для дальнейшей обработки`,
        imgSrc: VintageImg,
        imgAlt: 'Syte',
        listArray: [
          'Vue',
          'VueCli',
          'Scss',
          'BEM'
        ]
      }
    ]
  },
  getters: {
    getPortfolioActiveComponents: state => {
      return state.portfolioActiveComponents
    },
    getPortfolioActiveComponent: state => {
      return state.portfolioActiveComponent
    },
    getPortfolioComponents: state => {
      return state.portfolioComponents
    },
    getSrcHtmlName: state => name => {
      return (state.portfolioComponents.find(item => item.nameUrl === name)).srcHtml
    }
  },
  mutations: {
    SET_PORTFOLIO_ACTIVE_COMPONENTS (state, active) {
      state.portfolioActiveComponents = active
    },
    SET_PORTFOLIO_ACTIVE_COMPONENT (state, i) {
      state.portfolioActiveComponent = i
    }
  },
  actions: {
    setPortfolioActiveComponents ({ commit }, active) {
      commit('SET_PORTFOLIO_ACTIVE_COMPONENTS', active)
    },
    setPortfolioActiveComponent ({ commit }, i) {
      commit('SET_PORTFOLIO_ACTIVE_COMPONENT', i)
    }
  }
}
