import type { Express, Request, Response, NextFunction } from "express";
import { storage } from "./storage";
import { contacts, insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<void> {
  // Contact form submission
  app.post("/api/contacts", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const result = await storage.createContact(contactData);
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        contact: result
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
      const allContacts = await storage.getContacts();
      res.json(allContacts);
    } catch (error) {
      next(error);
    }
  });

  
}