import { MemeType } from "@/types/apiTypes";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";
import { FC } from "react";

const COLUMNS = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title" },
  { key: "image", label: "Image" },
  { key: "likes", label: "Likes" },
  { key: "edit", label: "Edit" },
];

interface IMemeTableProps {
  memes: MemeType[];
}

const MemeTable: FC<IMemeTableProps> = ({ memes }) => {
  return (
    <Table>
      <TableHeader columns={COLUMNS}>
        {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={memes}>
        {item => (
          <TableRow key={item.id}>
            {columnKey => (
              <TableCell>
                {columnKey === "image" ? (
                  <img
                    src={getKeyValue(item, columnKey)}
                    alt={item.title}
                    className="w-24 h-auto rounded"
                  />
                ) : (
                  getKeyValue(item, columnKey)
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
