import { Router } from "express";
import register from "./access/register.ts";
import login from "./access/login.ts";
import health from "./health/index.ts";
// import logout from "./access/logout.ts";
// import profile from "./access/profile.ts";

const router: Router = Router();

router.use("/health", health);
router.use("/register", register);
router.use("/login", login);
// router.use("/logout", logout);
// router.use("/profile", profile);

export default router;
