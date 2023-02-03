import { userEntity } from "../entities/User.Entity";

import { LogError, LogSuccess } from "src/utils/logger";

//CRUD 
/**
 * Method to obtein all users from Collection "Users" in mongo Server
 */
export const GettAllUser = async (): Promise<any | undefined> => {
try {
    let userModel = userEntity();

    //Search all users
    return await userModel.find({isDelete: false})
} catch (error) {
    LogError(`[ORM ERROR]: Getting all users: ${error}`)
}
}

//TODO:
// - Get user by ID
// - Get user by email
// - Delete user by ID
// - Create new user
// - update user by ID