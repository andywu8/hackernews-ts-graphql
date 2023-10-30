import { objectType, extendType, nonNull, intArg } from "nexus";

export const Vote = objectType({  // 1: link in question and user
    name: "Vote",
    definition(t) {
        t.nonNull.field("link", { type: "Link" });
        t.nonNull.field("user", { type: "User" });
    },
});

export const VoteMutation = extendType({  // 2: return instance of vote type
    type: "Mutation",
    definition(t) {
        t.field("vote", {
            type: "Vote",
            args: {
                linkId: nonNull(intArg()),
            },
            
        })
    }
})