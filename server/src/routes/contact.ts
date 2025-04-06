import { Router } from 'express'
import { Request, Response } from 'express'

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    try {
        const {name, phone, email, message, service} = req.body;
        console.log('Получены данные формы:', { name, phone, email, message, service });

        res.status(200).json({
            success: true,
            message: 'Форма успешно отправлена'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Произошла ошибка при отправке формы' 
        })
    }
})

export default router