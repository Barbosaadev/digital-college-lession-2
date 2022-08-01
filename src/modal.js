export function Modal(options = {}) {
  function _onClickDetailsButton(e) {
    e.preventDefault()
    const modalId = e.target.dataset.openModal
    openModal(modalId)
  }
  // comment commit
  function _onClickModalCloseButton(e) {
    e.preventDefault()
    const modalId = e.target.dataset.closeModal
    closeModal(modalId)
  }

  function _startModalCloseBtnEvtListener() {
    const modals = document.querySelectorAll(`[data-modal]`)

    if (modals) {
      modals.forEach((modal) => {
        const closeButton = modal.querySelector(`.modal__close-button`)
        if (closeButton) {
          closeButton.addEventListener('click', _onClickModalCloseButton)
        }
      })
    }
  }

  function _startDetailsButtonEventListener() {
    const detailButtons = document.querySelectorAll('[data-open-modal]')
    detailButtons.forEach((detailButton) => {
      detailButton.addEventListener('click', _onClickDetailsButton)
    })
  }

  function openModal(modalId) {
    const modal = document.querySelector(`[data-modal="${modalId}"]`)
    if (modal) {
      modal.classList.add('modal--open')
    }
  }

  function closeModal(modalId) {
    const modal = document.querySelector(`[data-modal="${modalId}"]`)
    if (modal) {
      modal.classList.remove('modal--open')
    }
  }

  function init() {
    _startDetailsButtonEventListener()
    _startModalCloseBtnEvtListener()
  }

  return {
    init,
    closeModal,
    openModal
  }
}
