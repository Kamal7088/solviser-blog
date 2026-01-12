"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";

type Props = {
  content: string;
  onChange: (html: string) => void;
};

export default function Editor({ content, onChange }: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      BulletList,
      OrderedList,
      ListItem,
      Heading.configure({ levels: [1, 2, 3] }),
      Image.configure({
        inline: false,
        allowBase64: false,
      }),

      // 🔥 LINK FIX
      Link.configure({
        openOnClick: true,
        autolink: true,
        HTMLAttributes: {
          target: "_blank",
          rel: "noopener noreferrer",
          class: "text-blue-600 underline font-semibold",
        },
      }),
    ],
    content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  /* IMAGE UPLOAD */
  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    editor.chain().focus().setImage({ src: data.url }).run();
  };

  /* LINK */
  const setLink = () => {
    const url = prompt("Enter link");
    if (!url) return;

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  };

  return (
    <div className="border rounded-xl bg-white text-black">
      {/* TOOLBAR */}
      <div className="flex flex-wrap gap-2 p-2 border-b bg-gray-100">

        <button onClick={() => editor.chain().focus().toggleBold().run()} className="btn">B</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="btn">I</button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className="btn">U</button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className="btn">H1</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="btn">H2</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className="btn">H3</button>

        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="btn">• List</button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="btn">1. List</button>

        <button onClick={setLink} className="btn">🔗 Link</button>

        <label className="btn cursor-pointer">
          🖼 Image
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) uploadImage(e.target.files[0]);
            }}
          />
        </label>

        <button onClick={() => editor.chain().focus().undo().run()} className="btn">↶</button>
        <button onClick={() => editor.chain().focus().redo().run()} className="btn">↷</button>
      </div>

      {/* EDITOR */}
      <EditorContent
        editor={editor}
        className="p-4 min-h-[300px] prose max-w-none
          prose-a:text-blue-600 prose-a:underline
          prose-img:rounded-xl"
      />
    </div>
  );
}
