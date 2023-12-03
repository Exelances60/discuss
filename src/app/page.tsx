import { signInAction, signOutAction } from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/Profile";
import { Button } from "@nextui-org/react";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <div className="p-5 gap-2 flex flex-col">
        <form action={signOutAction}>
          <Button color="primary" type="submit" variant="shadow">
            Sign out
          </Button>
        </form>
        <h1>{JSON.stringify(session.user)}</h1>
        <Profile />
      </div>
    );
  }
  return (
    <div className="p-5 gap-2 flex flex-col">
      <form action={signInAction}>
        <Button color="primary" type="submit" variant="shadow">
          Sign in
        </Button>
      </form>
      <form action={signOutAction}>
        <Button color="primary" type="submit" variant="shadow">
          Sign out
        </Button>
      </form>
      <Profile />
    </div>
  );
}
