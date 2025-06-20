import type { Express, Request, Response, NextFunction } from "express";

export async function registerRoutes(app: Express): Promise<void> {
  // Contact form submission
  app.post("/api/contacts", async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json({ 
        success: true, 
        message: "Contact form submitted successfully"
      });
    } catch (error) {
      next(error);
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json([]);
    } catch (error) {
      next(error);
    }
  });
}