// Components
import { ButtonLink } from "@/components/button-link/button-link.component";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export const CardWrapper = ({ buttonLink, children, description, title }) => (
  <Card className="max-w-[400px] w-full">
    <CardHeader>
      <div className="flex flex-col gap-y-1">
        <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
        <p className="text-muted-foreground text-md">{description}</p>
      </div>
    </CardHeader>
    <CardContent>{children}</CardContent>
    <CardFooter>{buttonLink && <ButtonLink {...buttonLink} />}</CardFooter>
  </Card>
);
