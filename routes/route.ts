import { Request, Response, Router } from "express";
import { Characters as api } from "../api/aot";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(api);
});

export default router;
