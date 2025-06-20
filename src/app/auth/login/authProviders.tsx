import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { signIn, getProviders, getCsrfToken } from "next-auth/react";
import { GetServerSidePropsContext } from "next";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

//login methods
export async function GoogleSignInButton() {
  const handleSignInWithGoogle = async () => {

    await signIn("google", { callbackUrl: "/authorize" });
  };

  return <FcGoogle onClick={handleSignInWithGoogle} size={32} />;
}

export function FacebookSignInButton() {
  const handleSignInWithFacebook = async () => {
    await signIn("facebook", { callbackUrl: "/authorize" });
  };
  return (
    <FaFacebook onClick={handleSignInWithFacebook} color="#084da6" size={32} />
  );
}

// login methods icon array
export const socialIcons = [
  {
    link: "#",
    icon: <GoogleSignInButton />,
  },
  {
    link: "#",
    icon: <FacebookSignInButton />,
  },
];

//server props
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, options);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } };
  }

  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);

  return {
    props: { providers: providers ?? [], csrfToken: csrfToken },
  };
}
