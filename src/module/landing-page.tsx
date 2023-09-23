import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";

interface LandingPageProps {}

export const LandingPage: React.FC<LandingPageProps> = ({}) => {
  return (
    <section className={`my-20 w-[100vw] flex gap-10 justify-center`}>
      <Card className={`w-[300px]`}>
        <CardHeader className={`text-center`}>
          <CardTitle className={`text-2xl font-extrabold mb-3 leading-9`}>
            For Individuals or Businesses
          </CardTitle>
          <CardDescription>
            Are you looking for legal service provided?
          </CardDescription>
        </CardHeader>
        <CardContent className={`flex flex-col gap-4 mt-6`}>
          <Button variant="outline">Login</Button>
          <Button>Signup</Button>
        </CardContent>
      </Card>
      <Card className={`w-[300px]`}>
        <CardHeader className={`text-center`}>
          <CardTitle className={`text-2xl font-extrabold mb-3 leading-9`}>
            For Legal Service Providers
          </CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </CardDescription>
        </CardHeader>
        <CardContent className={`flex flex-col gap-4 mt-6`}>
          <Button variant="outline">Login</Button>
          <Button>Signup</Button>
        </CardContent>
      </Card>
    </section>
  );
};
