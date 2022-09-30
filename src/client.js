import SanityClient from "@sanity/client";

export default SanityClient({
    projectId: "wpvubro5",
    dataset: "production",
    useCdn: true,
});