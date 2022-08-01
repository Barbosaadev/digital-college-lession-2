const config = [
  {
    modelo: 'Xiaomi Redmi Note 11',
    description:
      'Navegue sem problemas em suas redes sociais ou experimente uma jogabilidade poderosa e responsiva',
    img: 'https://m.media-amazon.com/images/I/51e3KdrHuCL._AC_SX679_.jpg',
    target: '/index2.html',
    marca: 'Xiaomi'
  },
  {
    modelo: 'Samsung Galaxy A23',
    description:
      'O novo Galaxy A23 combina cores elegantes e suavidade ao toque',
    img: 'https://m.media-amazon.com/images/I/716+SQdPpQL._AC_SX679_.jpg',
    target: '/index3.html',
    marca: 'Samsung'
  },
  {
    modelo: 'Apple iPhone 11',
    description:
      'Tudo na medida certa. Novo sistema de câmera e bateria que dura o dia todo.',
    img: 'https://m.media-amazon.com/images/I/71kZfQA-Y7L._AC_SX679_.jpg',
    target: '/index4.html',
    marca: 'Apple'
  }
]

const ul__list = document.getElementById('ul__container')

function listRender() {
  let list = ''

  config.forEach((config) => {
    ul__list.insertAdjacentHTML(
      'afterbegin',

      `<li class="products-list__item">
        <div class="products-list__item-thumbnail">
          <a href="${config.target}">
            <img
              class="product__thumbnail"
              src="${config.img}"
              alt="${config.modelo}">
          </a>
        </div>
        <div class="products-list__item-main-content">
          <h4 class="product__name">
            ${config.modelo}
          </h4>
          <p class="product__description">
            ${config.description}
          </p>
        </div>
        <div class="products-list__item-action-buttons">
          <button class="button" data-open-modal="1">Detalhes</button>
        </div>
        <div class="modal" data-modal="1">
        <div class="modal__container">
          <div class="modal__header">
            <h2>${config.modelo}</h2>
            <button class="button modal__close-button" data-close-modal="1">
              Close
            </button>
          </div>
          <div class="modal__body">
            <table class="product__details-table">
              <caption>
                Detalhes técnicos
              </caption>
              <tbody>
                <tr>
                  <th>Marca</th>
                  <td>${config.marca}</td>
                </tr>
                <tr>
                  <th>Fabricante</th>
                  <td>${config.marca}</td>
                </tr>
                <tr>
                  <th>Modelo</th>
                  <td>${config.modelo}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </li>`
    )
  })
}

export function renderUI() {
  listRender()
}
