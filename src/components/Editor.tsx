"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

type Props = {
  content: string;
  onChange: (html: string) => void;
};

export default function Editor({ content, onChange }: Props) {
  const editor = useEditor({
    immediatelyRender: false, // ✅ SSR FIX (VERY IMPORTANT)
    extensions: [
      StarterKit,
      Image.configure({
        inline: false,
      }),
      Link.configure({
        openOnClick: false,
      }),
    ],
    content,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  // ✅ IMAGE UPLOAD FUNCTION
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

  return (
    <div className="border border-border rounded-xl bg-background">
      {/* TOOLBAR */}
      <div className="flex gap-2 border-b border-border p-2">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="px-3 py-1 rounded bg-surface hover:bg-border"
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="px-3 py-1 rounded bg-surface hover:bg-border"
        >
          Italic
        </button>

        {/* IMAGE BUTTON */}
        <label className="px-3 py-1 rounded bg-surface hover:bg-border cursor-pointer">
          Image
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              if (e.target.files?.[0]) {
                uploadImage(e.target.files[0]);
              }
            }}
          />
        </label>
      </div>

      {/* EDITOR */}
      <EditorContent
        editor={editor}
        className="prose prose-lg max-w-none p-4 prose-img:rounded-xl"
      />
    </div>
  );
}
