import React from 'react'
import './styles.scss'

//components
import UserDataViewer from '../UserDataViewer';

//icons
import { LikeIcon } from '../Icons/LikeIcon';
import { DislikeIcon } from '../Icons/DislikeIcon';
import { CommentIcon } from '../Icons/CommentIcon';
import { DownloadOutlined } from '@mui/icons-material';

export const FileData = ({ props }) => {

    const { fileShareDate, fileSharedBy, fileLikes, fileDislikes, fileDownloads } = props;

    return (
        <div className="file-data-container">
            <UserDataViewer props={{ fileSharedBy }} />
            fileShareDate: {fileShareDate} <br />

            <div className="file-interaction-data">
                fileLikes: {fileLikes} <br />
                fileDislikes: {fileDislikes} <br />
                fileDownloads: {fileDownloads} <br />
            </div>


        </div>
    )
}
