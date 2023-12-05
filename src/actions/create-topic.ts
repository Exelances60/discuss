"use server";
import { auth } from "@/auth";
import { Topic } from "@prisma/client";
import { z } from "zod";
import { db } from "@/db";
import paths from "@/path";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .max(255)
    .regex(/^[a-z-]+$/, {
      message: "Name must be lowercase letters and dashes only",
    }),
  description: z.string().min(3),
});

interface CreateTopicState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

export const createTopic = async (
  formState: CreateTopicState,
  formData: FormData
): Promise<CreateTopicState> => {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
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
        _form: ["You must be logged in to create a topic"],
      },
    };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
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
  revalidatePath("/");
  redirect(paths.topicShow(topic.slug));
};
