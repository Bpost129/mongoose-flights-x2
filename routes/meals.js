import { Router } from 'express'
import * as mealsCtrl from '../controllers/meals.js'

const router = Router()

router.post('/', mealsCtrl.create)

export { router }