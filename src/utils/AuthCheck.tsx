import { auth } from "@/auth";

export const AuthCheck = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await auth();
  if (!session) {
    return <div>Pls Sign In</div>;
  }
  return <>{children}</>;
};
