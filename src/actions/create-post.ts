"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import paths from "@/path";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

interface CreatePostArgs {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

export const createPost = async (
  slug: string,
  formState: CreatePostArgs,
  formData: FormData
): Promise<CreatePostArgs> => {
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }
  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be logged in to create a post"],
      },
    };
  }
  const topic = await db.topic.findFirst({
    where: {
      slug,
    },
  });
  if (!topic) {
    return {
      errors: {
        _form: ["Topic does not exist"],
      },
    };
  }

  let post: Post;
  try {
    post = await db.post.create({
      data: {
        title: result.data.title,
        content: result.data.content,
        userId: session.user.id,
        topicId: topic.id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["An unknown error occurred"],
        },
      };
    }
  }
  revalidatePath(paths.topicShow(slug));
  redirect(paths.postShow(slug, post.id));
};
