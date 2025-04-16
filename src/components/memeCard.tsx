import { MemeType } from "@/types/apiTypes";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

const MemeCard = ({ meme }: { meme: MemeType }) => {
  const { id, imageUrl, likes, title } = meme;

  return (
    <Card key={id} className="w-full shadow-md">
      <CardHeader>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-center">
          <Image
            src={imageUrl}
            alt={title}
            className="object-contain w-full h-48"
          />
        </div>
      </CardBody>
      <CardFooter className="flex justify-between items-center text-sm text-default-500">
        <span>❤️ {likes}</span>
        <Link href={imageUrl} color="primary" isExternal>
          Повне зображення →
        </Link>
      </CardFooter>
    </Card>
  );
};
export default MemeCard;
