import React from "react";

import "./styles.scss";

//third party components
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

//components
import CommentViewer from "../../../components/Mobile/CommentViewer";
import { FileData } from "../../../components/Mobile/FileData";
import { MessageInput } from "../../../components/Mobile/MessageInput";
import PageTitle from "../../../components/Mobile/Navigations/PageTitle";

import { mockarooFileData } from "../../../assets/mocks/mockData";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchFileById } from "../../../services/SearchTabServices/FetchCalls";

export const FileDetails = () => {
  const { fileId } = useParams();

  const { data, error, isError, isLoading } = useQuery(
    ["file", fileId],
    fetchFileById,
    { refetchOnWindowFocus: false }
  );

  console.log("file data: ", data);
  const {
    fileName,
    fileID,
    fileShareDate,
    fileSharedBy,
    fileLikes,
    fileDislikes,
    fileDownloads,
    fileComments,
  } = mockarooFileData[0];

  const commentCounter = (commentArr) => {
    let count = 0;
    commentArr.forEach((item) => {
      count++;
      item.replies.forEach((reply) => {
        count++;
      });
    });

    return count;
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error}</div>;

  const docs = [
    {
      uri: data.uri,
      fileType: data.uri.split(".").pop()
    },
  ];
  console.log("docs: ", docs)

  return (data &&
    <div className="page-container">
      <PageTitle
        props={{
          title: fileName,
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
            fileID,
            fileShareDate,
            fileSharedBy,
            fileLikes,
            fileDislikes,
            fileCommentsCount: commentCounter(fileComments),
            fileDownloads,
          }}
        />
        <CommentViewer props={{ fileComments }} />
        <MessageInput />
      </div>

      <div className="clear"></div>
    </div>
  );
};
