"use client";

import type React from "react";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { translations } from "@/server/db/schema";
import { Textarea } from "./ui/textarea";
import { Loader } from "lucide-react";

interface Column {
  key: string;
  label: string;
  editable: boolean;
}

interface EditableTableProps {
  data: (typeof translations.$inferSelect)[];
  columns: Column[];
  submittingId: any;
  onCellUpdate: (id: string, field: string, value: string) => void;
}

export function EditableTable({ data, columns, onCellUpdate, submittingId }: EditableTableProps) {
  const [editingCell, setEditingCell] = useState<{ id: string; field: string } | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleCellDoubleClick = (id: string, field: string, currentValue: any) => {
    if (columns.find((col) => col.key === field)?.editable) {
      setEditingCell({ id, field });
      setEditValue(String(currentValue));
    }
  };

  const handleSave = () => {
    if (editingCell) {
      onCellUpdate(editingCell.id, editingCell.field, editValue);
      setEditingCell(null);
      setEditValue("");
    }
  };

  const handleCancel = () => {
    setEditingCell(null);
    setEditValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.key}>{column.label}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.uuid}>
              {columns.map((column) => (
                <TableCell
                  key={column.key}
                  className={`${column.editable ? "cursor-pointer hover:bg-muted/50" : ""}  relative`}
                  onClick={() => handleCellDoubleClick(row.uuid, column.key, row[column.key as keyof typeof row] || "")}
                >
                  <div className="w-full overflow-hidden whitespace-normal">
                    <div className="relative">
                      {submittingId.uuid === row.uuid && submittingId.field === column.key ? (
                        <div className="absolute bg-gray-200/80 inset-0 flex items-center justify-center">
                          <Loader className="animate-spin" />
                        </div>
                      ) : null}
                      {editingCell?.id === row.uuid && editingCell?.field === column.key ? (
                        <Textarea
                          className="w-full"
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          onBlur={() => {
                            if (editValue !== row[column.key as keyof typeof row]) {
                              handleSave();
                            }
                          }}
                          onKeyDown={handleKeyDown}
                          autoFocus
                        />
                      ) : column.editable ? (
                        <Textarea
                          className="w-full"
                          value={((row[column.key as keyof typeof row] || "") as string).trim()}
                          onFocus={() => handleCellDoubleClick(row.uuid, column.key, row[column.key as keyof typeof row] || "")}
                          autoFocus
                          //
                        />
                      ) : (
                        <span>{((row[column.key as keyof typeof row] || "") as string).trim()}</span>
                      )}
                    </div>
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
