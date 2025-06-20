import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { db } from "./storage";
import { contacts, insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const result = await db.insert(contacts).values(contactData).returning();
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        contact: result[0]
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Invalid form data", 
          details: error.errors 
        });
      } else {
        next(error);
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allContacts = await db.select().from(contacts);
      res.json(allContacts);
    } catch (error) {
      next(error);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}