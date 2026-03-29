import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createRegistration = mutation({
  args: {
    schoolDistrict: v.string(),
    schoolName: v.string(),
    address: v.string(),
    email: v.string(),
    nstudents: v.number(),
    acknowledge: v.boolean(),
    instructions: v.boolean(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("registration", args);
  },
});