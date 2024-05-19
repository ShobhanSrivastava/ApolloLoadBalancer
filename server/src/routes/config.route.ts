import { Router } from "express";
import { Controllers } from "../controllers";

const router: Router = Router();

router.post("/register-target", Controllers.Config.Target.create);

router.get("/get-targets", Controllers.Config.Target.getAll);

// router.get("/get-target/:id", Controllers.Config.Target.get);

// router.put("/update-target/:id", Controllers.Config.Target.update);

// router.delete("/delete-target/:id", Controllers.Config.Target.delete);

export default router;
