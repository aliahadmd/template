class authController {
    registerPage = (req, res) => res.render('dashboard/register.ejs')
}

module.exports = new authController()