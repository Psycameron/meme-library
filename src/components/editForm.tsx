import { getMemesById, updateMeme } from "@/service/memesApi";
import { memeSchema } from "@/service/memeSchema";
import { MemeType } from "@/types/apiTypes";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
import clsx from "clsx";
import { FC, useEffect, useState } from "react";

const LIKES_OPTIONS = Array.from({ length: 100 }, (_, i) => ({
  key: i.toString(),
  label: i.toString(),
}));

interface IEditFormProps {
  id: string;
  onClose: () => void;
  updateMemes: () => Promise<void>;
}

const EditForm: FC<IEditFormProps> = ({ id, onClose, updateMemes }) => {
  const [memeProperties, setMemeProperties] = useState<MemeType>({
    id: "",
    title: "",
    imageUrl: "",
    likes: 0,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof MemeType, string>>>(
    {}
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMemesById(id);
        setMemeProperties(data);
      } catch (err) {
        console.error("Error fetching memes:", err);
      }
    };

    fetchData();
  }, []);

  const validate = async () => {
    try {
      await memeSchema.validate(memeProperties, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err: any) {
      const newErrors: Partial<Record<keyof MemeType, string>> = {};
      err.inner.forEach((e: any) => {
        newErrors[e.path as keyof MemeType] = e.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async () => {
    const isValid = await validate();
    if (!isValid) return;

    try {
      await updateMeme(memeProperties);
      await updateMemes();
      onClose();
    } catch (error) {
      console.error("Updating error meme:", error);
    }
  };

  return (
    <>
      <Input
        label="Id"
        variant="bordered"
        readOnly
        value={memeProperties?.id}
      />
      <div className="space-y-1">
        <Input
          label="Title"
          placeholder="Enter meme title"
          variant="bordered"
          value={memeProperties?.title}
          onChange={e =>
            setMemeProperties(prev => ({ ...prev, title: e.target.value }))
          }
          className={clsx(errors.title && "border-red-500")}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}{" "}
      </div>
      <div className="space-y-1">
        <Input
          label="Meme url"
          placeholder="Enter meme url"
          variant="bordered"
          value={memeProperties?.imageUrl}
          onChange={e =>
            setMemeProperties(prev => ({ ...prev, imageUrl: e.target.value }))
          }
          className={clsx(errors.imageUrl && "border-red-500")}
        />
        {errors.imageUrl && (
          <p className="text-red-500 text-sm">{errors.imageUrl}</p>
        )}
      </div>
      <div className="space-y-1">
        <Select
          label="Likes"
          maxListboxHeight={400}
          variant="bordered"
          placeholder="Select likes"
          size="lg"
          items={LIKES_OPTIONS}
          selectedKeys={new Set([memeProperties.likes.toString()])}
          onChange={e =>
            setMemeProperties(prev => ({
              ...prev,
              likes: Number(e.target.value),
            }))
          }
          className={clsx(errors.likes && "border-red-500")}
        >
          {({ key, label }) => (
            <SelectItem key={key} textValue={String(label)}>
              {label}
            </SelectItem>
          )}
        </Select>
        {errors.likes && <p className="text-red-500 text-sm">{errors.likes}</p>}{" "}
      </div>

      <Button
        color="secondary"
        variant="flat"
        onPress={handleSubmit}
        className="w-40 mx-auto"
        type="submit"
      >
        Save Changes
      </Button>
    </>
  );
};

export default EditForm;
