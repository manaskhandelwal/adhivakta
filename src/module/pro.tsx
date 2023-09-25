import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { DATA } from "../utils/constants";
import { Wrapper } from "../components/wrapper";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../components/ui/tooltip";

import Link from "next/link";

interface ProProps {}

export const Pro: React.FC<ProProps> = ({}) => {
  return (
    <Wrapper className={`mb-32`}>
      <h1 className={`text-4xl my-16 font-extrabold`}>
        Legal Service Providers
      </h1>

      <div className={`grid grid-cols-3 gap-8`}>
        {DATA.lsp.map((pro, i) => {
          return (
            <Link
              href={`/pro/${pro.name.toLowerCase().replaceAll(" ", "-")}`}
              key={i}
            >
              <Card className={`text-center`}>
                <CardHeader className={`pb-3`}>
                  <div className={`mb-6`}>
                    <Avatar className={`w-24 h-24 m-auto`}>
                      <AvatarImage src={`/assets/${pro.profilePhoto}`} />
                      <AvatarFallback>TP</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle
                    className={`text-2xl font-extrabold leading-9 flex justify-center gap-2 align-middle`}
                  >
                    {pro.name}
                    <span className={`text-lg`}>
                      {pro.badges.map((j) => {
                        const badge = DATA.badges.find((i) => i.id === j);
                        return (
                          <TooltipProvider key={j}>
                            <Tooltip>
                              <TooltipTrigger>
                                {j === 1 ? "✳️" : "❇️"}
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{badge?.title}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        );
                      })}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h5 className={`text-slate-500`}>{pro.title}</h5>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};
