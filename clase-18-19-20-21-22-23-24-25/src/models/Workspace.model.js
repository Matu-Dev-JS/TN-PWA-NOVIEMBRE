import mongoose from "mongoose"

const workspace_schema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        created_at: {type: Date, default: Date.now}
    }
)

const Workspace = mongoose.model('Workspace', workspace_schema)

export default Workspace



//POST /api/workspaces AUTH_REQUIRED
//body: {name}