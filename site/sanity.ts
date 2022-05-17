import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = sanityClient({
  projectId: "8ikgw4vl",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-10-21",
});

export function image(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}
