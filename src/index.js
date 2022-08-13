import './main.css'
import { Modal } from './modal'
import { Sidebar } from './sidebar'
import { renderUI } from './productlist'
import { SidebarModal } from './sidebarmodal'
import { renderMenu } from './menu'
import { sidebarRenderUl } from './menu'

const modalHandler = Modal()
const sidebarHandler = Sidebar()
const renderHandler = renderUI()
const sidebarModalHandler = SidebarModal()
const menuHandler = renderMenu()
const sidebarMenuHandler = sidebarRenderUl()

modalHandler.init()
sidebarHandler.init()
sidebarModalHandler.init()
