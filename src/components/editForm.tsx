import { getMemesById, updateMeme } from "@/service/memesApi";
import { MemeType } from "@/types/apiTypes";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Select, SelectItem } from "@heroui/select";
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

  const handleSubmit = async () => {
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
      <Input
        label="Title"
        placeholder="Enter meme title"
        variant="bordered"
        value={memeProperties?.title}
        onChange={e =>
          setMemeProperties(prev => ({ ...prev, imageUrl: e.target.value }))
        }
      />
      <Input
        label="Meme url"
        placeholder="Enter meme url"
        variant="bordered"
        value={memeProperties?.imageUrl}
        onChange={e =>
          setMemeProperties(prev => ({ ...prev, imageUrl: e.target.value }))
        }
      />
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
      >
        {({ key, label }) => (
          <SelectItem key={key} textValue={String(label)}>
            {label}
          </SelectItem>
        )}
      </Select>

      <Button
        color="secondary"
        variant="flat"
        onPress={handleSubmit}
        className="w-40"
        type="submit"
      >
        Save Changes
      </Button>
    </>
  );
};

export default EditForm;
