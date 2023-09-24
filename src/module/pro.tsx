import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import { Switch } from "@radix-ui/react-switch";
import { CollegeCombobox } from "../components/college-combobox";
import { LocationCombobox } from "../components/location-combobox";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { DATA } from "../utils/constants";
import { Wrapper } from "../components/wrapper";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "../components/ui/tooltip";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../components/ui/dialog";
import { DialogHeader } from "../components/ui/dialog";
import Link from "next/link";

interface ProProps {}

export const Pro: React.FC<ProProps> = ({}) => {
  return (
    <Wrapper className={`mb-32`}>
      <h1 className={`text-4xl mb-8`}>Legal Service Providers</h1>

      <div className={`grid grid-cols-4 gap-8`}>
        {DATA.lsp.map((pro) => {
          return (
            <Link href={`/pro/${pro.name.toLowerCase().replaceAll(" ", "-")}`}>
              <Card className={`text-center`}>
                <CardHeader className={`pb-3`}>
                  <div className={`mb-6`}>
                    <Avatar className={`w-24 h-24 m-auto`}>
                      <AvatarImage
                        src={`/assets/${
                          pro.profilePhoto === "m" ? "men" : "girl"
                        }.jpg`}
                      />
                      <AvatarFallback>TP</AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className={`text-2xl font-extrabold leading-9`}>
                    {pro.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h5 className={`text-slate-500`}>{pro.title}</h5>
                  <div>
                    {pro.badges.map((j) => {
                      const badge = DATA.badges.find((i) => i.id === j);

                      return (
                        <TooltipProvider>
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
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
};
