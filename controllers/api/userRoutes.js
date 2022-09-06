const router = require('express').Router()
const {User} = require('../../models')

router.post ('/', async (req, res) => {

    // tells server to create operation w/ data that gets sent to it 
    try {
        const userData = await User.create(req.body);

        res.status(200).json(userData);
    } catch (err) {

        res.status(400).json(err)
    }
});

router.post('/login', async (req, res) => {
    try {
    const userData = await User.findOne ({ where: { username: req.body.username} }); 

    if (!userData) {
        res 
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
        return;
    }

    const validPassword = await userData.checkpassword(req.body.password)

    if (!validPassword) {
        res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
        return;
    }

    req.session.loggedIn = true;
    req.session.userId = userData.id;

    req.session.save(() => {

    res.status(200).res.json({ user: userData, message: 'You are now logged in!' });
    });

    }  catch (err) {
        res.status(400).json(err);
      }
});




//logout


// router.post("/logout", (req, res) => {
//     if (req.session.loggedIn) {
//         req.session.destroy(() => {
//             res.status(204).end();
//         })}

// } else {
//     res.status(404).end();
// }

// });

module.exports = router