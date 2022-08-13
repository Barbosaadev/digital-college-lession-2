const menu = [
  {
    item1: 'TVs',
    item2: 'Smartphones',
    item3: 'Hardwares',
    item4: 'Menu',
    item5: '/index.html'
  }
]

const ul__menu = document.getElementById('menu__container')
const sidebar__menu = document.getElementById('sidebar__menu')

function ulRender() {
  let ul__list = ''

  menu.forEach((menu) => {
    ul__menu.insertAdjacentHTML("afterbegin",
    
    `<li class="header__items">
        <a href="${menu.item5}">${menu.item4}</a>
    </li>
    <li class="header__items">
        <a href="#">${menu.item1}</a>
    </li>
    <li class="header__items">
        <a href="#">${menu.item2}</a>
    </li>
    <li class="header__items">
        <a href="#">${menu.item3}</a>
    </li>`
    )
  })
}

function sidebarUlRender(){
    let sidebar__ul = ''

    menu.forEach((menu) => {
        sidebar__menu.insertAdjacentHTML("afterbegin",
        
        `<li class="sidebar__items">
            <a href="${menu.item5}">${menu.item4}</a>
        </li>
        <li class="sidebar__items">
            <a href="#">${menu.item1}</a>
        </li>
        <li class="sidebar__items">
            <a href="#">${menu.item2}</a>
        </li>
        <li class="sidebar__items">
            <a href="#">${menu.item3}</a>
        </li>`
        )
    })
}

export function renderMenu() {
    ulRender()
}

export function sidebarRenderUl() {
    sidebarUlRender()
}
