import bsky from "@atproto/api";
const { BskyAgent } = bsky;
import * as dotenv from "dotenv";
import process from "node:process";
dotenv.config({ path: "./src/.env" });

const agent = new BskyAgent({
  service: "https://bsky.social",
});

const login = {
  identifier: process.env.BSKY_USERNAME!,
  password: process.env.BSKY_PASSWORD!,
};

await agent.login(login);

const likeRes = await agent.getLikes({
  uri: "at://orenthefen.furrsaken.gay",
  limit: 100,
});
console.log(likeRes);

// const postBody = "api go brrr";
// await agent.post({
//   text: postBody,
//   facets: [
//     {
//       index: {
//         byteStart: postBody.indexOf("brr"),
//         byteEnd: postBody.indexOf("brr") + 4,
//       },
//       features: [
//         {
//           $type: "app.bsky.richtext.facet#link",
//           uri: "https://media.tenor.com/8wBCqZH60U8AAAAC/computer-cat.gif",
//         },
//       ],
//     },
//   ],
//   // embed: {
//   //   $type: "app.bsky.embed.external",
//   //   external: {
//   //     uri: "https://media.tenor.com/8wBCqZH60U8AAAAC/computer-cat.gif",
//   //     title: "cat gif",
//   //     description: "cat do a code",
//   //   },
//   // },
// });
