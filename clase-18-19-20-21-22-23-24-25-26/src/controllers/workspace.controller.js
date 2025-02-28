import workspaceRepository from "../repositories/workspace.repository.js";


export const createWorkspaceController = async (req, res) => {
    try {
        const { name } = req.body
        const owner_id = req.user._id
        const new_workspace = await workspaceRepository.createWorkspace({ name, owner_id })
        res.json({
            ok: true,
            status: 201,
            message: 'Workspace created!',
            data: {
                new_workspace
            }
        })
    } catch (error) {
        console.log("error al registrar", error);

        if (error.status) {
            return res.status(400).send({
                ok: false,
                status: error.status,
                message: error.message
            });
        }

        res.status(500).send({
            status: 500,
            ok: false,
            message: "internal server error"
        });
    }
}


export const invteUserToWorkspaceController = async (req, res) => {
    try {
        const user_id = req.user._id
        const {invited_id, workspace_id} = req.params

        const workspace_found = await workspaceRepository.addNewMember({owner_id: user_id, invited_id, workspace_id})
        res.json(
            {
                ok: true,
                status: 201,
                message: 'New member',
                data: {
                    workspace: workspace_found
                }
            }
        )
    } catch (error) {
        console.log("error al registrar", error);

        if (error.status) {
            return res.status(400).send({
                ok: false,
                status: error.status,
                message: error.message
            });
        }

        res.status(500).send({
            status: 500,
            ok: false,
            message: "internal server error"
        });
    }
}