import { JSON_LD_SCHEMAS } from "@/lib/seo";

export function JsonLd() {
  return (
    <>
      {JSON_LD_SCHEMAS.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
