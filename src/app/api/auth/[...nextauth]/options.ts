import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
// import { LoginUser } from '@/services/auth'
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";



export const options: NextAuthOptions = {
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            allowDangerousEmailAccountLinking: true,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req): Promise<any | null> {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                try {
                    const { email, password } = credentials;
                    // const userRes = await LoginUser(email, password, req.query?.role, req.query?.invite_passcode);

                    // if (userRes && userRes?.data) {
                    //     return {
                    //         ...userRes?.data?.user,
                    //         access_token: userRes?.data?.access_token,
                    //         user: userRes?.data?.user,
                    //         _id: userRes?.data?.user?._id,
                    //         parent: userRes?.data?.parent,
                    //         corporateEntity: userRes?.data?.corporateEntity,
                    //     };
                    // }
                    // return null;
                } catch (error: any) {
                    console.error("Credentials auth error:", error);
                    return null;
                }
            },
        }),

    ],

    callbacks: {
        async signIn({ user }) {
            console.log(user, 'user')
            return !!user; // Return true if user exists, false otherwise
        },

        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`
            return baseUrl;
        },

        async jwt({ token, trigger, session, user, account }) {
            // console.log(user, 'user')
            // console.log(account, 'account')

            //update token object for credentials authenticated users
            if (user && account?.type === "credentials") {
                return {
                    ...token,
                    id: user?.id,
                    access_token: account.access_token,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        image: user.image,
                    }
                }
            }

            if (trigger === "update" && session?.user) {
                token.user = { ...session.user };
                return token;
            }
            return token;
        },

        async session({ session, token })  {
            // const { session, token } = params;

            if (token && session.user) {
                // session.id = token.id;
                // session.access_token = token.access_token;
                // session.user = { ...token?.user };
            }

            return session;
        }
    },
    pages: {
        signIn: "/",
        signOut: "/",
        error: "/",
    },

    secret: process.env.NEXTAUTH_SECRET,
};

export default options;