import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex('items').select('*');
    const host = req.hostname;

    const serializedItems = items.map(({ id, title, image }) => ({
      id,
      title,
      image_url: `http://${host}:3333/uploads/${image}`,
    }));

    return res.json(serializedItems);
  }
}

export default ItemsController;
