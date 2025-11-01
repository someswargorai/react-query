"use client";

import React, { useState } from "react";

type CommentType = {
  id: number;
  user: string;
  text: string;
  replies: CommentType[];
};

export default function Hero() {
  const [comments, setComments] = useState<CommentType[]>([
    {
      id: 1,
      user: "Alice",
      text: "This is a great post!",
      replies: [
        {
          id: 3,
          user: "Alice",
          text: "This is a great post reply!",
          replies: [
            {
              id: 4,
              user: "Alice",
              text: "This is a great post reply 1!",
              replies: [
                {
                  id: 7,
                  user: "Alice",
                  text: "This is a great post reply 2!",
                  replies: [],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          user: "Alice",
          text: "This is another great post reply!",
          replies: [
            {
              id: 6,
              user: "Alice",
              text: "This is another nested reply!",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      user: "Bob",
      text: "I totally agree with this.",
      replies: [],
    },
  ]);

  const [collapsed, setCollapsed] = useState<{ [key: number]: boolean }>({});

  const [reply, setReply] = useState(false);
  const [replyEdit, setReplyEdit] = useState(false);
  const [parentId, setParentId] = useState<number | null>(null);

  /** ADD COMMENT **/
  const searchParentId = (comments: CommentType[], text: string): CommentType[] => {
    return comments.map((item) =>
      item.id === parentId
        ? {
            ...item,
            replies: [
              ...item.replies,
              {
                id: Date.now(),
                user: "User",
                text,
                replies: [],
              },
            ],
          }
        : item.replies.length > 0
        ? { ...item, replies: searchParentId(item.replies, text) }
        : item
    );
  };

  const handleSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    const input = (e.currentTarget.previousSibling as HTMLInputElement).value;
    setReply(false);
    setComments(searchParentId(comments, input));
  };

  /** EDIT COMMENT **/
  const searchId = (comments: CommentType[], text: string): CommentType[] => {
    return comments.map((item) =>
      item.id === parentId
        ? { ...item, text }
        : item.replies.length > 0
        ? { ...item, replies: searchId(item.replies, text) }
        : item
    );
  };

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const input = (e.currentTarget.previousSibling as HTMLInputElement).value;
    setReplyEdit(false);
    setComments(searchId(comments, input));
  };

  /** DELETE COMMENT **/
  const deleteId = (comments: CommentType[], id: number): CommentType[] => {
    return comments
      .filter((item) => item.id !== id)
      .map((item) => ({
        ...item,
        replies: deleteId(item.replies, id),
      }));
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this comment?")) {
      setComments(deleteId(comments, id));
    }
  };


  const toggleCollapse = (id: number) => {
    setCollapsed(prev => 
      ({ ...prev, [id]: !prev[id] })
    );
  };

  const renderRecursiveReplies = (replies: CommentType[], depth = 1) => {
    return replies.map((data) => (
      <div
        key={data.id}
        className={`mt-3 ml-${depth * 4} border-l-2 border-gray-300 pl-4`}
      >
        <div className="bg-gray-50 rounded-xl p-3 shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-blue-600">{data.user}</span>
            <span className="text-xs text-gray-400">#{data.id}</span>
          </div>
          <p className="text-sm text-gray-700">{data.text}</p>

          <div className="mt-3 flex gap-3">
            <button
              className="text-blue-500 text-sm"
              onClick={() => {
                setReply(!reply);
                setParentId(data.id);
              }}
            >
              Reply
            </button>

            <button
              className="text-green-500 text-sm"
              onClick={() => {
                setReplyEdit(!replyEdit);
                setParentId(data.id);
              }}
            >
              Edit
            </button>

            <button
              className="text-red-500 text-sm"
              onClick={() => handleDelete(data.id)}
            >
              Delete
            </button>
          </div>

        {data.replies.length > 0 && (
          <button
            className="text-xs text-gray-500 mt-2 underline"
            onClick={() => toggleCollapse(data.id)}
          >
            {collapsed[data.id]
              ? `Show replies (${data.replies.length})`
              : `Hide replies (${data.replies.length})`}
          </button>
        )}

          {parentId === data.id && reply && (
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                className="border border-amber-300 text-black rounded-lg px-2 py-1 w-full"
                placeholder="Write a reply..."
              />
              <button
                className="bg-blue-500 text-white rounded-lg px-3 py-1"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          )}

          {parentId === data.id && replyEdit && (
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                className="border border-amber-300 text-black rounded-lg px-2 py-1 w-full"
                placeholder="Edit comment..."
              />
              <button
                className="bg-green-500 text-white rounded-lg px-3 py-1"
                onClick={handleEdit}
              >
                Save
              </button>
            </div>
          )}
        </div>

        {!collapsed[data.id] &&
        data.replies.length > 0 &&
        renderRecursiveReplies(data.replies, depth + 1)}
      </div>
    ));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-5 text-gray-800">Comments</h1>

      {comments.map((data) => (
        <div key={data.id} className="mb-6">
          <div className="bg-gray-100 rounded-xl p-4 shadow hover:shadow-md transition">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold text-blue-700">{data.user}</span>
              <span className="text-xs text-gray-400">#{data.id}</span>
            </div>
            <p className="text-gray-800 text-sm">{data.text}</p>

            <div className="mt-3 flex gap-3">
              <button
                className="text-blue-500 text-sm"
                onClick={() => {
                  setReply(!reply);
                  setParentId(data.id);
                }}
              >
                Reply
              </button>
              <button
                className="text-green-500 text-sm"
                onClick={() => {
                  setReplyEdit(!replyEdit);
                  setParentId(data.id);
                }}
              >
                Edit
              </button>
              <button
                className="text-red-500 text-sm"
                onClick={() => handleDelete(data.id)}
              >
                Delete
              </button>
            </div>

            {parentId === data.id && reply && (
              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  className="border border-amber-300 text-black rounded-lg px-2 py-1 w-full"
                  placeholder="Write a reply..."
                />
                <button
                  className="bg-blue-500 text-white rounded-lg px-3 py-1"
                  onClick={handleSend}
                >
                  Send
                </button>
              </div>
            )}

            {parentId === data.id && replyEdit && (
              <div className="mt-2 flex gap-2">
                <input
                  type="text"
                  className="border border-amber-300 text-black rounded-lg px-2 py-1 w-full"
                  placeholder="Edit comment..."
                />
                <button
                  className="bg-green-500 text-white rounded-lg px-3 py-1"
                  onClick={handleEdit}
                >
                  Save
                </button>
              </div>
            )}
          </div>

          {data.replies?.length > 0 && (
            <div className="mt-3 ml-4">
              {renderRecursiveReplies(data.replies)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
