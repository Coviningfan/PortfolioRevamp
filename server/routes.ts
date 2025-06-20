import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { Express, Request, Response, NextFunction } from "express";
import { db } from "./storage";
import { contacts, insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Invalid form data", 
          details: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "Failed to submit contact form" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: "Failed to retrieve contacts" 
      });
    }
  });

app.post("/api/contact", async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Enhanced validation
      const contactSchema = z.object({
        firstName: z.string().min(1, "First name is required").max(50, "First name too long"),
        lastName: z.string().min(1, "Last name is required").max(50, "Last name too long"),
        email: z.string().email("Invalid email address").max(100, "Email too long"),
        company: z.string().max(100, "Company name too long").optional(),
        message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long")
      });

      const validatedData = contactSchema.parse(req.body);

      const result = await db.insert(contacts).values(validatedData).returning();

      res.json({ 
        success: true, 
        message: "Contact form submitted successfully",
        data: { id: result[0].id }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: "Validation failed",
          details: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        });
      } else {
        next(error);
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}