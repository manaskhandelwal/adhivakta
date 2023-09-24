import Link from "next/link";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";

export default function Home() {
  return (
    <section
      className={`my-20 w-[calc(100vw - 20px)] flex gap-10 justify-center`}
    >
      <Card className={`w-[300px]`}>
        <CardHeader className={`text-center`}>
          <CardTitle className={`text-2xl font-extrabold mb-3 leading-9`}>
            Consult a lawyer
          </CardTitle>
          <CardDescription>
            Voluptas officiis, fugiat modi iusto similique commodi ad voluptatem
            totam odit odio ipsam enim, amet quisquam officia nisi porro aliquam
            quis beatae.
          </CardDescription>
        </CardHeader>
        <CardContent className={`flex flex-col gap-4 mt-6`}>
          <Button asChild>
            <Link href={"/professionals/explore"}>
              Explore Legal Service Providers
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
