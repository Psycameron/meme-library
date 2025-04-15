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
}

const MemeTable: FC<IMemeTableProps> = ({ memes }) => {
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
                  <img
                    src={getKeyValue(item, columnKey)}
                    alt={item.title}
                    className="w-40 h-auto rounded"
                  />
                ) : (
                  getKeyValue(item, columnKey)
                )}
                {columnKey === "edit" && <EditModal id={item.id} />}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
export default MemeTable;
