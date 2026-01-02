"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

export default function Dashboard() {
  const [content, setContent] = useState("");

  return (
    <ReactQuill
      theme="snow"
      value={content}
      onChange={setContent}
    />
  );
}
