import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 py-8">
      {images.map((image) => {
        return (
          <div key={image.id} className="flex h-48 w-48 flex-col">
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                style={{ objectFit: "contain" }}
                width={192}
                height={192}
                alt={image.name}
              />
            </Link>
            <div>{image.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>Please sign in to view the gallery</SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
