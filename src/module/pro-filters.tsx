import { Button } from "./../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./../components/ui/card";
import { Label } from "./../components/ui/label";
import { Input } from "./../components/ui/input";
import { LocationCombobox } from "./../components/location-combobox";
import { Wrapper } from "./../components/wrapper";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./../components/ui/collapsible";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { CollegeCombobox } from "./../components/college-combobox";
import { Switch } from "./../components/ui/switch";

interface ProFiltersProps {}

export const ProFilters: React.FC<ProFiltersProps> = ({}) => {
  return (
    <Wrapper className={`my-20 flex gap-10 justify-center`}>
      <Card className={`w-[90vw]`}>
        <CardHeader>
          <CardTitle className={`text-2xl font-extrabold mb-3 leading-9`}>
            Filter Legal Service Providers
          </CardTitle>
          <CardDescription>
            Voluptas officiis, fugiat modi iusto similique commodi ad voluptatem
            totam odit odio ipsam enim.
          </CardDescription>
        </CardHeader>
        <CardContent className={`mt-6`}>
          <div className={`flex justify-between`}>
            <div className={`flex gap-4 items-end`}>
              <div>
                <Label htmlFor="search">Search</Label>
                <Input
                  type="text"
                  id="search"
                  placeholder="Search people, services"
                  className={`w-[350px]`}
                />
              </div>
              <Button>Search</Button>
            </div>

            <div>
              <Label htmlFor="search">Location</Label>
              <div>
                <LocationCombobox />
              </div>
            </div>
          </div>
          <div className="mt-10 mb-6">
            <hr />
          </div>
          <Collapsible>
            <CollapsibleTrigger
              className={`flex gap-2 items-center font-bold text-lg`}
            >
              More Filters <ChevronDownIcon />
            </CollapsibleTrigger>
            <CollapsibleContent className={`mt-5 p-6 rounded-lg`}>
              <div className={`flex justify-between items-start`}>
                <div className={`flex-1`}>
                  <Label htmlFor="search">College</Label>
                  <div>
                    <CollegeCombobox />
                  </div>
                </div>
                <div>
                  <Label htmlFor="starting-price">Starting Price</Label>
                  <Input
                    type="number"
                    id="starting-price"
                    placeholder="₹500"
                    className={`w-[270px]`}
                  />
                </div>
              </div>

              <div className={`flex flex-1 justify-between items-center mt-8`}>
                <div>
                  <Label htmlFor="yoe">Years of Experience</Label>
                  <Input
                    type="number"
                    id="yoe"
                    placeholder="3 Years"
                    className={`w-[260px]`}
                  />
                </div>

                <div className={`w-[320px]`}>
                  <p>Badges</p>
                  <div className={`flex items-center gap-2 mt-3`}>
                    <Switch />
                    <p>Advocate on Record</p>
                  </div>
                  <div className={`flex items-center gap-2 mt-3`}>
                    <Switch />
                    <p>Retired Judge</p>
                  </div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </Wrapper>
  );
};
