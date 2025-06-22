"use client";

import type React from "react";

import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { translations } from "@/server/db/schema";

interface Column {
  key: string;
  label: string;
  editable: boolean;
}

interface EditableTableProps {
  data: (typeof translations.$inferSelect)[];
  columns: Column[];
  onCellUpdate: (id: string, field: string, value: string) => void;
}

export function EditableTable({ data, columns, onCellUpdate }: EditableTableProps) {
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
                  onClick={() => handleCellDoubleClick(row.uuid, column.key, row[column.key as keyof typeof row])}
                >
                  <div className="w- overflow-hidden">
                    {editingCell?.id === row.uuid && editingCell?.field === column.key ? (
                      <Input value={editValue} onChange={(e) => setEditValue(e.target.value)} onBlur={handleCancel} onKeyDown={handleKeyDown} autoFocus />
                    ) : (
                      <Input
                        value={row[column.key as keyof typeof row] as string}
                        readOnly
                        autoFocus
                        className={`${!column.editable ? "pointer-events-none" : ""}`}
                      />
                    )}
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
