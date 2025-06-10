import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { GroupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

export async function GroupCreate(newGroupName: string){

    try {
        const storageGroups = await GroupsGetAll();

        const groupAllReadyExists = storageGroups.includes(newGroupName);

        if(groupAllReadyExists){
            throw new AppError(`Já existe um grupo cadastrado com esse nome!`)
        }

        const storage = JSON.stringify([...storageGroups, newGroupName]);
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    } catch (error) {
        throw  error;
    }

    

}