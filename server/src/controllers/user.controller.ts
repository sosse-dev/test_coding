import { Request, Response } from "express";
import * as userService from "../services/users.service";

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await userService.findAll(); // sudah bekerja
    res.json(users);
  } catch {
    res.status(500).json({ error: "Failed to fetch users" });
  }
}

export async function getUsersByName(req: Request, res: Response) {
  try {
    const q = req.params.q;

    const users = await userService.getUsersByName(q); // sudah bekerja
    res.json(users);
  } catch {
    res.status(500).json({ error: "Failed to search users" });
  }
}

export async function createUser(req: Request, res: Response) {
  try {
    const { name, email, status, phone, department } = req.body;
    const user = await userService.create({ name, email, status, phone, department }); // sudah bekerja
    res.status(201).json(user);
  } catch {
    res.status(500).json({ error: "Failed to create user" });
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const { name, email, status, phone, department } = req.body;

    await userService.update(id, { name, email, status, phone, department }); // sudah bekerja - meski satu value saja ada, maka tetap diterima
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to update user" });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await userService.remove(id); // sudah bekerja
    res.status(204).send();
  } catch {
    res.status(500).json({ error: "Failed to delete user" });
  }
}
