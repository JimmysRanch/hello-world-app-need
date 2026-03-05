import { contactSubmissions, type InsertContact, type ContactSubmission } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const [submission] = await db.insert(contactSubmissions).values(contact).returning();
    return submission;
  }
}

export const storage = new DatabaseStorage();
