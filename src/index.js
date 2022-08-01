import './main.css'
import { Modal } from './modal'
import { Sidebar } from './sidebar'
import { renderUI } from './productlist'

const modalHandler = Modal()
const sidebarHandler = Sidebar()
const renderHandler = renderUI()

modalHandler.init()
sidebarHandler.init()
