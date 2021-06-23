const user = require('../models/user');
const Role = require('../models/roles')
const jwt = require('jsonwebtoken');
const config = require('../config/config')


exports.signUp = async (req, res) => {

  const { name, email, password, roles } = req.body

  const newUser = new user({
    name,
    email,
    password: await user.encryptPassword(password),
    roles
  });

  const role = await Role.findOne({ name: "user" })
  newUser.roles = [role._id];

  const usuarioRepeat = await user.findOne({ email: req.body.email }).populate('roles')

  const validation = await user.comparePassword(req.body.email, usuarioRepeat.email);

  if (!validation) return res.status(401).json({ message: 'Invalid email' })

  const savedUser = await newUser.save();

  console.log(savedUser + " probando");

  const token = jwt.sign({ id: savedUser._id }, config.SECRET, { expiresIn: 86400 })

  res.json({ token })

};


exports.signIn = async (req, res) => {

  const userFound = await user.findOne({ email: req.body.email }).populate('roles')

  if (!userFound) return res.status(400).json({ message: 'User not found' })

  const matchPassword = await user.comparePassword(req.body.password, userFound.password)

  if (!matchPassword) return res.status(401).json({ token: null, message: 'Invalid password' })

  console.log(matchPassword)

  const token = jwt.sign({ id: userFound._id }, config.SECRET, { expiresIn: 86400 })

  res.json({ token })


}
