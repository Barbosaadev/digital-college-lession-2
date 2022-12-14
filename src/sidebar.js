export function Sidebar() {
  function _onClickOpenSidebarButton(e) {
    openSidebar()
  }

  function _onClickCloseSidebarButton(e) {
    closeSidebar()
  }

  function _startOpenSidebarButtonEvtListener() {
    const openSidebarButton = document.querySelector('[data-open-sidebar]')
    if (openSidebarButton) {
      openSidebarButton.addEventListener('click', _onClickOpenSidebarButton)
    }
  }

  function _startCloseSidebarButtonEvtListener() {
    const closeSidebarButton = document.querySelector('[data-close-sidebar]')

    if (closeSidebarButton) {
      closeSidebarButton.addEventListener('click', _onClickCloseSidebarButton)
    }
  }

  function openSidebar() {
    const sidebar = document.querySelector('[data-sidebar]')
    document.body.style.overflow = 'hidden'
    if (sidebar) {
      sidebar.classList.add('sidebar--open')
    }
  }

  function closeSidebar() {
    const sidebar = document.querySelector('[data-sidebar]')
    document.body.style.overflow = ''
    if (sidebar) {
      sidebar.classList.remove('sidebar--open')
    }
  }

  function init() {
    const openSidebarButton = document.querySelector('[data-open-sidebar]')
    console.log(openSidebarButton)
    _startOpenSidebarButtonEvtListener()
    _startCloseSidebarButtonEvtListener()
  }

  return {
    init,
    openSidebar,
    closeSidebar
  }
}
