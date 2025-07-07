import { eq, like } from "drizzle-orm";
import { db } from "../db/db";
import { users } from "../db/schema";

type UserInput = {
  name: string;
  email: string;
  status: boolean;
  phone: string;
  department: string;
};

export async function findAll() {
  return db.select().from(users);
}

export async function getUsersByName(keyword: string) {
  const user = await db
    .select()
    .from(users)
    .where(like(users.name, `%${keyword}%`));
  return user;
}

export async function create(data: UserInput) {
  const result = await db.insert(users).values(data);
  return result;
}

export async function update(id: number, data: UserInput) {
  const result = await db
    .update(users)
    .set(data)
    .where(eq(users.id, Number(id)));
  return result;
}

export async function remove(id: number) {
  await db.delete(users).where(eq(users.id, Number(id)));
}
