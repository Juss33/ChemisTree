export default {
    providers: [
        {
            // @Juss33 WHen i commit this make sure to put your issuer url into .env
            domain: process.env.CLERK_JWT_ISSUER_DOMAIN!,
            applicationID: "convex"
        }
    ]
};