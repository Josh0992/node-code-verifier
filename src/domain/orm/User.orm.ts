import { userEntity } from "../entities/User.Entity";

import { LogError, LogSuccess } from "../../utils/logger";

//CRUD 
/**
 * Method to obtein all users from Collection "Users" in mongo Server
 */
export const getAllUsers = async (): Promise<any | undefined> => {
try {
    let userModel = userEntity();

    //Search all users
    return await userModel.find({isDelete: false})
    
} catch (error) {
    LogError(`[ORM ERROR]: Getting all users: ${error}`)
}
}

// - Get user by ID
export const getUserByID = async (id: string): Promise<any | undefined> => {
    try {
        let userModel = userEntity();

        //Search user by ID
        return await userModel.findById(id);

    } catch (error) {
        LogError(`[ORM ERROR]: Getting users by ID: ${error}`)
    }
}

// - Delete user by ID
export const deleteUserByID = async (id: string): Promise<any | undefined> => {
    try {
        let userModel = userEntity();

        //Delete user by ID
        return await userModel.deleteOne({_id: id});
        
    }catch(error){
        LogError(`[ORM ERROR]: Delete users by ID: ${error}`)
    }
}

// - Create new user
export const createUser = async (user: any ): Promise<any | undefined> => {
try {
    let userModel = userEntity();

    //Create / insert new user
    return await userModel.create(user)

} catch (error) {
    LogError(`[ORM ERROR]: Create users error: ${error}`)
}
}

// - update user by ID
export const updateUserById = async (id: string, user: any): Promise<any | undefined> => {
    try {
        let userModel = userEntity();

        //update user
        return await userModel.findByIdAndUpdate(id, user)
    } catch (error) {
        LogError(`[ORM ERROR]: updating users error: ${id}, ${error}`)
    }
}


//TODO:
// - Get user by email