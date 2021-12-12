import React, { useMemo, useState } from "react";

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

const getFileUri = (fileData) => {
  return [{ uri: fileData?.uri, fileType: fileData?.type }];
};

export const FileDetails = () => {
  const { fileId } = useParams();
  const { data, error, isError, isLoading } = useQuery(
    ["file", fileId],
    fetchFileById,
    { refetchOnWindowFocus: false }
  );

  const docs = useMemo(() => getFileUri(data), [data?.uri, data?.type]);

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
            documents={docs}
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
