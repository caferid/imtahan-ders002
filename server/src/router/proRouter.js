import express from 'express'
import { del_pro, get_hello, get_pro, post_pro } from '../controller/proController.js'

const router = express.Router()

router.get('/',get_hello)
router.get('/pro',get_pro)
router.post('/',post_pro)
router.delete('/:id',del_pro)

export default router