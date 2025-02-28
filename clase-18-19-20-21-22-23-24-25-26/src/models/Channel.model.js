
/* 
Channel
name
workspace ref( Workspaces )
created_at
created_by ref( Users )

*/

//Escriban el schema de mongoose

import mongoose from "mongoose";

const channel_schema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        workspace: {type: mongoose.Schema.Types.ObjectId, ref: 'Workspace'},
        created_at: {type: Date, default: Date.now},
        created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    }
)

const Channel = mongoose.model('Channel', channel_schema)

export default Channel