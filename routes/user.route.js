import { Router } from 'express'
 import { deleteUser, updateUser, userBYID ,updateGroup,deleteGroup,allUsersByFirstLastName
,allUsersByFirstName,allUsersByFirstNameAndAge,allUsersByName} from '../controllers/user.controller.js';
const router = Router();




router.get("/ByFirstLastName", allUsersByFirstLastName)
router.get("/ByFirstName", allUsersByFirstName)
router.get("/ByFirstNameAndAge", allUsersByFirstNameAndAge)
router.get("/ByName", allUsersByName)
 router.get("/:id", userBYID)

router.put("/:id", updateUser)
router.put("/", updateGroup)
router.delete("/:id", deleteUser)
router.delete("/", deleteGroup)





export default router