const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Member Model
const Member = require('../../models/Member');

// @route   POST api/members
// @desc    Register new members
// @access  Public
router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  Member.findOne({ email }).then(member => {
    if (member) return res.status(400).json({ msg: 'Member already exists' });

    const newMember = new Member({
      name,
      email,
      password
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newMember.password, salt, (err, hash) => {
        if (err) throw err;
        newMember.password = hash;
        newMember.save().then(member => {
          jwt.sign(
            { id: member.id },
            process.env.JWT_SECRET_KEY,
            {
              expiresIn: 3600
            },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                member: {
                  id: member.id,
                  name: member.name,
                  email: member.email
                }
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
