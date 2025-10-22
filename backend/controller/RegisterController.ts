import { type Request, type Response } from 'express';
import bcrypt from 'bcryptjs';
import { db } from '../db/connection';
import { users } from '../db/schema/user';
import { eq, or } from 'drizzle-orm'; 

export const registerController = async (req: Request, res: Response) => {
  try {
    const { username, mobile, password, confirmPassword } = req.body;
    
    const existingUser = await db.query.users.findFirst({
      where: or( 
        eq(users.username, username),
        eq(users.mobile, mobile)
      ),
      columns: { username: true, mobile: true }
    });

    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(4.09).json({ message: 'Username is already taken.' });
      }
      if (existingUser.mobile === mobile) {
        return res.status(409).json({ message: 'Mobile number is already registered.' });
      }
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    const newUserResult = await db.insert(users)
      .values({
        username: username,
        mobile: mobile,
        password: passwordHash, 
      });
      
    res.status(201).json({
      message: 'User registered successfully!',
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error during registration.' });
  }
};

