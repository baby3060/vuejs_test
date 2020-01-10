import shop from '../../api/shop'

// State
const state = {
  items : [],
  checkoutStatus : null
};

// Getters
const getters = {
  // Cart에 담겨져 있는 품목들
  cartProducts : (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id);
      return {
        title : product.title,
        price : product.price,
        quantity
      }
    });
  },

  // Cart에 담겨있는 품목들의 전체 금액 합계
  cartTotalPrice : (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + (product.price * product.quantity)
    }, 0)
  }
};

// Action : 상태를 바꾸는 것이 아닌 액션 커밋을 통해 상태를 바꿈(메소드)
const actions = {
  init({commit, state}, products) {
    // 펼침 연산자, 이미 보관되어 있는 아이템들을 불러옴
    const savedCartItems = [...state.items];

    // 카트 상태 초기화
    commit('setCheckoutStatus', null)
    commit('setCartItems', {items : []})
    // 카트 상태 초기화

    shop.buyProducts(products,
      // 구입 성공 콜백
      () => commit('setCheckoutStatus', 'successful'),
      // 구입 실패 시 콜백
      () => {
        // 상태는 실패
        commit('setCheckoutStatus', 'failed')

        // 카트에 담긴 아이템을 기존 아이템으로
        commit('setCartItems', {items : savedCartItems})
      }
    )
  },

  // Cart에 추가 : 재고에서 제외
  addProductToCart({state, commit}, product) {
    commit('setCheckoutStatus', null);

    // 재고 있을 경우
    if( product.stock > 0 ) {
      // id 동일한 물품 찾기(cart에서)
      const cartItem = state.items.find(item => item.id === product.id)

      // 추가
      if(!cartItem) {
        commit('pushProductToCart', {id : product.id})
      // Cart에 들어있는 품목의 수량 증가
      } else {
        commit('incrementItemQuantity', cartItem)
      }

      // 재고에서 제거
      commit('products/decrementProductStock', {id : product.id}, {root : true})
    }
  }
};

const mutations = {
  pushProductToCart(state, {id}) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  incrementItemQuantity(state, {id}) {
    const cartItem = state.items.find(item => item.id === id);

    cartItem.quantity++;
  },

  setCartItems(state, {items}) {
    state.items = items
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
