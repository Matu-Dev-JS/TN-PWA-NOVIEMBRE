import Workspace from "../models/Workspace.model.js";

class WorkspaceRepository {
    async createWorkspace({name, owner_id}){
        const workspace = await Workspace.create(
            {
                name, 
                owner: owner_id,
                members: [owner_id] 
            }
        )
        return workspace
    }
}

const workspaceRepository = new WorkspaceRepository()
export default workspaceRepository