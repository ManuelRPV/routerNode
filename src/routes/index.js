import {Router} from 'express';

const router=Router();
//Enviamos el titulo, como objeto a index.ejs
router.get('/', (req, res) => res.render('index', { title: 'Primer WebSite con Node.js'}));

router.get('/about', (req, res) => res.render('about', { title: 'Sobre Mi'}));

router.get('/contact', (req, res) => res.render('contact', { title: 'Contactame'}));

export default router;