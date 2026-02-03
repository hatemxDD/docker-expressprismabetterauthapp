import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "../lib/prisma.js";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "postgresql", // or "mysql", "postgresql", ...etc
	}),
	emailAndPassword: {
		enabled: true,
		minPasswordLength: 6,
		autoSignIn: false
	},
	// socialProviders: {
	//   github: {
	//     clientId: process.env.GITHUB_CLIENT_ID as string,
	//     clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
	//   },
	// },
	advanced: { disableOriginCheck: true, }
});
