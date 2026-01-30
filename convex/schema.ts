import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    username: v.string(),
    externalId: v.string(),
    userBio: v.optional(v.string()),
    userPfpUrl: v.optional(v.string()),
    userRole: v.union(
      v.literal("ADMIN"),
      v.literal("MODERATOR"),
      v.literal("USER")
    ), 
  })
  .index("byExternalId", ["externalId"])
  .index("byUsername", ["username"]),
  subreddit: defineTable({
    name: v.string(),
    description: v.optional(v.string()),
    authorId: v.id("users"),
  }).searchIndex("search_body", { searchField: "name"}),
  post: defineTable({
    subject: v.string(),
    body: v.string(),
    subreddit: v.id("subreddit"),
    authorId: v.id("users"),
    image: v.optional(v.id("_storage")),
  }).index("bySubreddit", ["subreddit"])
    .index("byAuthor", ["authorId"])
    .searchIndex("search_body", { searchField: "subject", filterFields: ["subreddit"]}),
  comments: defineTable({
    postId: v.id("post"),
    authorId: v.id("users"),
    content: v.string(),
  }).index("byPost", ["postId"]),
  // todo: merge downvotes and upvotes into a single table with a vote type?
  downvote: defineTable({
    postId: v.id("post"),
    userId: v.id("users")
  }).index("byPost", ["postId"]),
  upvote: defineTable({
    postId: v.id("post"),
    userId: v.id("users")
  }).index("byPost", ["postId"])
  .index("byUser", ["userId"])
});
