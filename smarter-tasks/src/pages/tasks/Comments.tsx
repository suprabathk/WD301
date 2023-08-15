import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  useCommentsDispatch,
  useCommentsState,
} from "../../context/comment/context";
import { CommentData } from "../../context/comment/types";
import { addComment, fetchComments } from "../../context/comment/actions";
import { useMembersState } from "../../context/members/context";

type CommentDataPayload = Omit<CommentData, "task_id" | "owner">;

export default function Comments() {
  const { projectID, taskID } = useParams();
  const commentDispatch = useCommentsDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentDataPayload>({});

  const onSubmit: SubmitHandler<CommentDataPayload> = async (data) => {
    const { description } = data;
    await addComment(commentDispatch, `${projectID}`, `${taskID}`, {
      description,
    });
  };

  const commentState = useCommentsState();
  const memberState = useMembersState();
  const { comments, isLoading, isError, errorMessage } = commentState;

  useEffect(() => {
    fetchComments(commentDispatch, `${projectID}`, `${taskID}`);
  }, [taskID, projectID, commentDispatch]);

  if (comments.length === 0 && isLoading) {
    return <p className="mt-3 font-bold text-gray-500">Loading...</p>;
  }

  if (isError) {
    return <p className="mt-3 text-pink-500">{errorMessage}</p>;
  }

  const retriveComment = (owner: any) => {
    const assignee = memberState?.members?.filter(
      (member) => member.id === owner
    )?.[0];
    return assignee?.name;
  };

  const FormatedTimeDate = (date: string) => {
    const newDate = new Date(date);
    const formatDate = newDate.toDateString();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    const newformat = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formatedTime = `${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${newformat}`;

    return `${formatDate} ${formatedTime}`;
  };

  return (
    <div className="mt-4">
      <div>
        <h2 className="font-bold">Comments</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center gap-1"
        >
          <input
            type="text"
            required
            placeholder="Enter comment"
            id="commentBox"
            {...register("description", { required: true })}
            className="w-full border rounded-md py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
          <button
            type="submit"
            id="addCommentBtn"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Comment
          </button>
        </form>
        {commentState.comments.map((comment: CommentData) => {
          return (
            <div className="comment my-2 rounded-md px-3 py-2 bg-slate-200">
              <div className="flex justify-between">
                <h2 className="font-semibold">
                  Member : {retriveComment(comment.owner)}
                </h2>
                <p className="text-sm font-semibold">
                  {FormatedTimeDate(comment.createdAt)}
                </p>
              </div>
              <p>{comment.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
