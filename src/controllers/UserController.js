import connection from '../database/index';

class UserController {
  async index(req, res) {
    const users = await connection('users').select('id', 'name', 'email');

    return res.json(users);
  }

  async store(req, res) {
    const { name, email, password } = req.body;

    await connection('users').insert({ name, email, password });

    return res.json({ email });
  }
}

export default new UserController();
