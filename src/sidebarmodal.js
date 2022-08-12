export function SidebarModal() {
    function _onClickOpenSidebarModalButton(e) {
        openSidebarModal()
    }

    function _onClickCloseSidebarModalButton(e) {
        closeSidebarModal()
    }

    function _startOpenSidebarModalButtonEvtListener() {
        const openSidebarModalButton = document.querySelector('[data-open-sidebarModal]')
        if (openSidebarModalButton) {
            openSidebarModalButton.addEventListener('click', _onClickOpenSidebarModalButton)
        }
    }

    function _startCloseSidebarModalButtonEvtListener() {
        const closeSidebarModalButton = document.querySelector('[data-close-sidebarModal]')

        if (closeSidebarModalButton) {
            closeSidebarModalButton.addEventListener('click', _onClickCloseSidebarModalButton)
        }
    }

    function openSidebarModal() {
        const sidebarModal = document.querySelector('[data-sidebarModal]')
        document.getElementById("sidebarmodal--container").style.display = 'flex'
        if (sidebarModal) {
            sidebarModal.classList.add('sidebarmodal--open')
        }
    }

    function closeSidebarModal() {
        const sidebarModal = document.querySelector('[data-sidebarModal]')
        document.getElementById("sidebarmodal--container").style.display = 'none'
        if (sidebarModal) {
            sidebarModal.classList.remove('sidebarmodal--open')
        }
    }

    function init() {
        const openSidebarModalButton = document.querySelector('[data-open-sidebarModal]')
        console.log(openSidebarModalButton)
        _startOpenSidebarModalButtonEvtListener()
        _startCloseSidebarModalButtonEvtListener()
    }

    return {
        init,
        openSidebarModal,
        closeSidebarModal
    }
}