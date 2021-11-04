import React from 'react'

//imports
import { useHistory, useLocation } from "react-router-dom";

//icon
import SchoolIcon from '@mui/icons-material/School';
import { NotificationBell } from '../NotificationBell';
import { LikeIcon } from '../LikeIcon';
import { DislikeIcon } from '../DislikeIcon';
import { CommentIcon } from '../CommentIcon';

import "./styles.scss"

export const ListItem = ({ props }) => {

    //TODO in the future we will fetch these data from the api, for now we use mock data
    //with a similar format to the actual api that we will design
    const { itemID, itemName, itemLogoPath, itemType, enrolledStudents, courseCount, likeCount, commentCount, dislikeCount } = props;

    const history = useHistory();
    const { pathname } = useLocation();

    const handleClick = () => {
        history.push(`${pathname}/${itemName}`)
    }

    return (
        <div className="list-item" onClick={() => handleClick()}>
            <div className="img-container">
                {(itemType === "uni" || itemType === "file") && <img className="list-item-logo" src={itemLogoPath} alt="" />}
            </div>

            <div className="item-name-container">
                <span className="list-item-name">{itemName}</span>

            </div>

            <div className="info-container">
                <div className="info">
                    {itemType === "uni" &&
                        <div className="icon-set">
                            <SchoolIcon fontSize="large" />
                            <span>{courseCount}</span>
                        </div>
                    }
                    {itemType === "class" &&
                        <div className="icon-set">
                            <NotificationBell props={{ itemID, fontSize: "large" }} />
                            <span>{enrolledStudents}</span>
                        </div>
                    }
                    {itemType === "file" &&
                        <>
                            <div className="icon-set">
                                <LikeIcon props={{ itemID, fontSize: "large" }} />
                                <span>{likeCount}</span>
                            </div>
                            <div className="icon-set">
                                <DislikeIcon props={{ itemID, fontSize: "large" }} />
                                <span>{dislikeCount}</span>
                            </div>
                            <div className="icon-set">
                                <CommentIcon props={{ itemID, fontSize: "large" }} />
                                <span>{commentCount}</span>
                            </div>

                        </>
                    }
                </div>

            </div>

        </div>
    )
}