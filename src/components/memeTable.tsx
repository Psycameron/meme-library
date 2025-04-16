import { FC } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";
import EditModal from "./editModal";
import { MemeType } from "@/types/apiTypes";

const COLUMNS = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title" },
  { key: "imageUrl", label: "Image" },
  { key: "likes", label: "Likes" },
  { key: "edit", label: "Edit" },
];

interface IMemeTableProps {
  memes: MemeType[];
  updateMemes: () => Promise<void>;
}

const MemeTable: FC<IMemeTableProps> = ({ memes, updateMemes }) => {
  return (
    <Table aria-label="Table with memes">
      <TableHeader columns={COLUMNS}>
        {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={memes}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => (
              <TableCell>
                {columnKey === "imageUrl" ? (
                  <a
                    href={getKeyValue(item, columnKey)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Open image
                  </a>
                ) : (
                  getKeyValue(item, columnKey)
                )}
                {columnKey === "edit" && (
                  <EditModal id={item.id} updateMemes={updateMemes} />
                )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
export default MemeTable;
