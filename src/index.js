import './main.css'
import { Modal } from './modal'
import { Sidebar } from './sidebar'
import { renderUI } from './productlist'
import { SidebarModal } from './sidebarmodal'

const modalHandler = Modal()
const sidebarHandler = Sidebar()
const renderHandler = renderUI()
const sidebarModalHandler = SidebarModal()

modalHandler.init()
sidebarHandler.init()
sidebarModalHandler.init()