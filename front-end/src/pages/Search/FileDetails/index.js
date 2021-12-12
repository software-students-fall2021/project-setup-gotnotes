import React, { useEffect } from "react";

import "./styles.scss";

//third party components
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

//components
import CommentViewer from "../../../components/Mobile/CommentViewer";
import { FileData } from "../../../components/Mobile/FileData";
import { MessageInput } from "../../../components/Mobile/MessageInput";
import PageTitle from "../../../components/Mobile/Navigations/PageTitle";

import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchFileById } from "../../../services/SearchTabServices/FetchCalls";

export const FileDetails = () => {
  const { fileId } = useParams();

  const { data, error, isError, isLoading } = useQuery(
    ["file", fileId],
    fetchFileById,
    {refetchOnWindowFocus: false}
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  return (
    data && (
      <div className="page-container">
        <PageTitle
          props={{
            title: data.name,
            back: true,
          }}
        />
        <div className="file-details-container">
          <DocViewer
            documents={[{uri: data.uri, fileType: data.type}]}
            pluginRenderers={DocViewerRenderers}
            config={{
              header: {
                disableHeader: true,
                disableFileName: true,
              },
            }}
          />
          <FileData
            props={{
              fileID: data._id,
              fileShareDate: data.shareDate,
              fileSharedBy: data.sharedBy,
              fileLikes: data.likes,
              fileDislikes: data.dislikes,
              fileDownloads: data.downloads,
            }}
          />
          <CommentViewer props={{ fileId: data._id }} />
          <MessageInput />
        </div>

        <div className="clear"></div>
      </div>
    )
  );
};
